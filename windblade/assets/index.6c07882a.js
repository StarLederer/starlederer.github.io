(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const G={};function qe(e){G.context=e}const To=(e,n)=>e===n,Mo=Symbol("solid-track"),ot={equals:To};let Hn=Yn;const be=1,it=2,In={owned:null,cleanups:null,context:null,owner:null},Tt={};var q=null;let ce=null,V=null,X=null,ie=null,Qt=0;function me(e,n){const t=V,s=q,o=e.length===0,i=o?In:{owned:null,cleanups:null,context:null,owner:n||s},r=o?e:()=>e(()=>re(()=>xt(i)));q=i,V=null;try{return Ee(r,!0)}finally{V=t,q=s}}function P(e,n){n=n?Object.assign({},ot,n):ot;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=o=>(typeof o=="function"&&(o=o(t.value)),Pn(t,o));return[qn.bind(t),s]}function bn(e,n,t){const s=kt(e,n,!0,be);Be(s)}function R(e,n,t){const s=kt(e,n,!1,be);Be(s)}function pe(e,n,t){Hn=Fo;const s=kt(e,n,!1,be),o=Ue&&_t(q,Ue.id);o&&(s.suspense=o),s.user=!0,ie?ie.push(s):Be(s)}function te(e,n,t){t=t?Object.assign({},ot,t):ot;const s=kt(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,Be(s),qn.bind(s)}function Mt(e,n,t){let s,o,i;arguments.length===2&&typeof n=="object"||arguments.length===1?(s=!0,o=e,i=n||{}):(s=e,o=n,i=t||{});let r=null,l=Tt,a=null,c=!1,d=!1,u="initialValue"in i,f=typeof s=="function"&&te(s);const b=new Set,[p,g]=(i.storage||P)(i.initialValue),[y,v]=P(void 0),[x,m]=P(void 0,{equals:!1}),[h,k]=P(u?"ready":"unresolved");if(G.context){a=`${G.context.id}${G.context.count++}`;let O;i.ssrLoadFrom==="initial"?l=i.initialValue:G.load&&(O=G.load(a))&&(l=O[0])}function C(O,W,T,N){return r===O&&(r=null,u=!0,(O===l||W===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(N,{value:W})),l=Tt,j(W,T)),W}function j(O,W){Ee(()=>{W||g(()=>O),k(W?"errored":"ready"),v(W);for(const T of b.keys())T.decrement();b.clear()},!1)}function A(){const O=Ue&&_t(q,Ue.id),W=p(),T=y();if(T&&!r)throw T;return V&&!V.user&&O&&bn(()=>{x(),r&&(O.resolved&&ce&&c?ce.promises.add(r):b.has(O)||(O.increment(),b.add(O)))}),W}function L(O=!0){if(O!==!1&&d)return;d=!1;const W=f?f():s;if(c=ce,W==null||W===!1){C(r,re(p));return}const T=l!==Tt?l:re(()=>o(W,{value:p(),refetching:O}));return typeof T!="object"||!(T&&"then"in T)?(C(r,T,void 0,W),T):(r=T,d=!0,queueMicrotask(()=>d=!1),Ee(()=>{k(u?"refreshing":"pending"),m()},!1),T.then(N=>C(T,N,void 0,W),N=>C(T,void 0,Xn(N),W)))}return Object.defineProperties(A,{state:{get:()=>h()},error:{get:()=>y()},loading:{get(){const O=h();return O==="pending"||O==="refreshing"}},latest:{get(){if(!u)return A();const O=y();if(O&&!r)throw O;return p()}}}),f?bn(()=>L(!1)):L(!1),[A,{refetch:L,mutate:g}]}function re(e){const n=V;V=null;try{return e()}finally{V=n}}function Gn(e,n,t){const s=Array.isArray(e);let o,i=t&&t.defer;return r=>{let l;if(s){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(i){i=!1;return}const a=re(()=>n(l,o,r));return o=l,a}}function Ao(e){pe(()=>re(e))}function Zt(e){return q===null||(q.cleanups===null?q.cleanups=[e]:q.cleanups.push(e)),e}function Wo(){return q}function Eo(e){ie.push.apply(ie,e),e.length=0}function Vn(e,n){const t=Symbol("context");return{id:t,Provider:Bo(t),defaultValue:e}}function Ro(e){let n;return(n=_t(q,e.id))!==void 0?n:e.defaultValue}function Do(e){const n=te(e),t=te(()=>Nt(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let Ue;function Lo(){return Ue||(Ue=Vn({}))}function qn(){const e=ce;if(this.sources&&(this.state||e))if(this.state===be||e)Be(this);else{const n=X;X=null,Ee(()=>lt(this),!1),X=n}if(V){const n=this.observers?this.observers.length:0;V.sources?(V.sources.push(this),V.sourceSlots.push(n)):(V.sources=[this],V.sourceSlots=[n]),this.observers?(this.observers.push(V),this.observerSlots.push(V.sources.length-1)):(this.observers=[V],this.observerSlots=[V.sources.length-1])}return this.value}function Pn(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&Ee(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],r=ce&&ce.running;r&&ce.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?X.push(i):ie.push(i),i.observers&&Jn(i)),r||(i.state=be)}if(X.length>1e6)throw X=[],new Error},!1)),n}function Be(e){if(!e.fn)return;xt(e);const n=q,t=V,s=Qt;V=q=e,No(e,e.value,s),V=t,q=n}function No(e,n,t){let s;try{s=e.fn(n)}catch(o){e.pure&&(e.state=be,e.owned&&e.owned.forEach(xt),e.owned=null),Kn(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Pn(e,s):e.value=s,e.updatedAt=t)}function kt(e,n,t,s=be,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:q,context:null,pure:t};return q===null||q!==In&&(q.owned?q.owned.push(i):q.owned=[i]),i}function rt(e){const n=ce;if(e.state===0||n)return;if(e.state===it||n)return lt(e);if(e.suspense&&re(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Qt);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===be||n)Be(e);else if(e.state===it||n){const o=X;X=null,Ee(()=>lt(e,t[0]),!1),X=o}}function Ee(e,n){if(X)return e();let t=!1;n||(X=[]),ie?t=!0:ie=[],Qt++;try{const s=e();return Uo(t),s}catch(s){X||(ie=null),X=null,Kn(s)}}function Uo(e){if(X&&(Yn(X),X=null),e)return;const n=ie;ie=null,n.length&&Ee(()=>Hn(n),!1)}function Yn(e){for(let n=0;n<e.length;n++)rt(e[n])}function Fo(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:rt(s)}for(G.context&&qe(),n=0;n<t;n++)rt(e[n])}function lt(e,n){const t=ce;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===be||t?o!==n&&rt(o):(o.state===it||t)&&lt(o,n))}}function Jn(e){const n=ce;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=it,s.pure?X.push(s):ie.push(s),s.observers&&Jn(s))}}function xt(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const i=o.pop(),r=t.observerSlots.pop();s<o.length&&(i.sourceSlots[r]=s,o[s]=i,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)xt(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Xn(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Kn(e){throw e=Xn(e),e}function _t(e,n){return e?e.context&&e.context[n]!==void 0?e.context[n]:_t(e.owner,n):void 0}function Nt(e){if(typeof e=="function"&&!e.length)return Nt(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=Nt(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function Bo(e,n){return function(s){let o;return R(()=>o=re(()=>(q.context={[e]:s.value},Do(()=>s.children))),void 0),o}}const Ho=Symbol("fallback");function vn(e){for(let n=0;n<e.length;n++)e[n]()}function Io(e,n,t={}){let s=[],o=[],i=[],r=0,l=n.length>1?[]:null;return Zt(()=>vn(i)),()=>{let a=e()||[],c,d;return a[Mo],re(()=>{let f=a.length,b,p,g,y,v,x,m,h,k;if(f===0)r!==0&&(vn(i),i=[],s=[],o=[],r=0,l&&(l=[])),t.fallback&&(s=[Ho],o[0]=me(C=>(i[0]=C,t.fallback())),r=1);else if(r===0){for(o=new Array(f),d=0;d<f;d++)s[d]=a[d],o[d]=me(u);r=f}else{for(g=new Array(f),y=new Array(f),l&&(v=new Array(f)),x=0,m=Math.min(r,f);x<m&&s[x]===a[x];x++);for(m=r-1,h=f-1;m>=x&&h>=x&&s[m]===a[h];m--,h--)g[h]=o[m],y[h]=i[m],l&&(v[h]=l[m]);for(b=new Map,p=new Array(h+1),d=h;d>=x;d--)k=a[d],c=b.get(k),p[d]=c===void 0?-1:c,b.set(k,d);for(c=x;c<=m;c++)k=s[c],d=b.get(k),d!==void 0&&d!==-1?(g[d]=o[c],y[d]=i[c],l&&(v[d]=l[c]),d=p[d],b.set(k,d)):i[c]();for(d=x;d<f;d++)d in g?(o[d]=g[d],i[d]=y[d],l&&(l[d]=v[d],l[d](d))):o[d]=me(u);o=o.slice(0,r=f),s=a.slice(0)}return o});function u(f){if(i[d]=f,l){const[b,p]=P(d);return l[d]=p,n(a[d],b)}return n(a[d])}}}function $(e,n){return re(()=>e(n||{}))}function Qn(e){const n="fallback"in e&&{fallback:()=>e.fallback};return te(Io(()=>e.each,e.children,n||void 0))}function Oe(e){let n=!1;const t=e.keyed,s=te(()=>e.when,void 0,{equals:(o,i)=>n?o===i:!o==!i});return te(()=>{const o=s();if(o){const i=e.children,r=typeof i=="function"&&i.length>0;return n=t||r,r?re(()=>i(o)):i}return e.fallback},void 0,void 0)}const Go=Vn();function Ut(e){let n=0,t,s,o,i,r;const[l,a]=P(!1),c=Lo(),d={increment:()=>{++n===1&&a(!0)},decrement:()=>{--n===0&&a(!1)},inFallback:l,effects:[],resolved:!1},u=Wo();if(G.context&&G.load){const p=G.context.id+G.context.count;let g=G.load(p);if(g&&(o=g[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[y,v]=P(void 0,{equals:!1});i=y,o.then(x=>{if(x||G.done)return x&&(r=x),v();G.gather(p),qe(s),v(),qe()})}}const f=Ro(Go);f&&(t=f.register(d.inFallback));let b;return Zt(()=>b&&b()),$(c.Provider,{value:d,get children(){return te(()=>{if(r)throw r;if(s=G.context,i)return i(),i=void 0;s&&o==="$$f"&&qe();const p=te(()=>e.children);return te(g=>{const y=d.inFallback(),{showContent:v=!0,showFallback:x=!0}=t?t():{};if((!y||o&&o!=="$$f")&&v)return d.resolved=!0,b&&b(),b=s=o=void 0,Eo(d.effects),p();if(!!x)return b?g:me(m=>(b=m,s&&(qe({id:s.id+"f",count:0}),s=void 0),e.fallback),u)})})}})}function Vo(e,n,t){let s=t.length,o=n.length,i=s,r=0,l=0,a=n[o-1].nextSibling,c=null;for(;r<o||l<i;){if(n[r]===t[l]){r++,l++;continue}for(;n[o-1]===t[i-1];)o--,i--;if(o===r){const d=i<s?l?t[l-1].nextSibling:t[i-l]:a;for(;l<i;)e.insertBefore(t[l++],d)}else if(i===l)for(;r<o;)(!c||!c.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[i-1]&&t[l]===n[o-1]){const d=n[--o].nextSibling;e.insertBefore(t[l++],n[r++].nextSibling),e.insertBefore(t[--i],d),n[o]=t[i]}else{if(!c){c=new Map;let u=l;for(;u<i;)c.set(t[u],u++)}const d=c.get(n[r]);if(d!=null)if(l<d&&d<i){let u=r,f=1,b;for(;++u<o&&u<i&&!((b=c.get(n[u]))==null||b!==d+f);)f++;if(f>d-l){const p=n[r];for(;l<d;)e.insertBefore(t[l++],p)}else e.replaceChild(t[l++],n[r++])}else r++;else n[r++].remove()}}}const $n="_$DX_DELEGATE";function qo(e,n,t,s={}){let o;return me(i=>{o=i,n===document?e():w(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{o(),n.textContent=""}}function _(e,n,t){const s=document.createElement("template");s.innerHTML=e;let o=s.content.firstChild;return t&&(o=o.firstChild),o}function St(e,n=window.document){const t=n[$n]||(n[$n]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Yo))}}function Fe(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function S(e,n){n==null?e.removeAttribute("class"):e.className=n}function Po(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const o=t[0];e.addEventListener(n,t[0]=i=>o.call(e,t[1],i))}else e.addEventListener(n,t)}function _e(e,n,t){if(!n)return t?Fe(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let o,i;for(i in t)n[i]==null&&s.removeProperty(i),delete t[i];for(i in n)o=n[i],o!==t[i]&&(s.setProperty(i,o),t[i]=o);return t}function Zn(e,n,t){return re(()=>e(n,t))}function w(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return at(e,n,s,t);R(o=>at(e,n(),o,t),s)}function Yo(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),G.registry&&!G.done&&(G.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let o=s.nextSibling;s.remove(),s=o}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const o=t[`${n}Data`];if(o!==void 0?s.call(t,o,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function at(e,n,t,s,o){for(G.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(G.context)return t;if(i==="number"&&(n=n.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=Le(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(G.context)return t;t=Le(e,t,s)}else{if(i==="function")return R(()=>{let l=n();for(;typeof l=="function";)l=l();t=at(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],a=t&&Array.isArray(t);if(Ft(l,n,t,o))return R(()=>t=at(e,l,t,s,!0)),()=>t;if(G.context){if(!l.length)return t;for(let c=0;c<l.length;c++)if(l[c].parentNode)return t=l}if(l.length===0){if(t=Le(e,t,s),r)return t}else a?t.length===0?wn(e,l,s):Vo(e,t,l):(t&&Le(e),wn(e,l));t=l}else if(n instanceof Node){if(G.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=Le(e,t,s,n);Le(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function Ft(e,n,t,s){let o=!1;for(let i=0,r=n.length;i<r;i++){let l=n[i],a=t&&t[i];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))o=Ft(e,l,a)||o;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();o=Ft(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function wn(e,n,t=null){for(let s=0,o=n.length;s<o;s++)e.insertBefore(n[s],t)}function Le(e,n,t,s){if(t===void 0)return e.textContent="";const o=s||document.createTextNode("");if(n.length){let i=!1;for(let r=n.length-1;r>=0;r--){const l=n[r];if(o!==l){const a=l.parentNode===e;!i&&!r?a?e.replaceChild(o,l):e.insertBefore(o,t):a&&l.remove()}else i=!0}}else e.insertBefore(o,t);return[o]}const yn={dark:240,light:260};function Jo(){const[e,n]=P(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{n(l.matches?"light":"dark")});const[t,s]=P(void 0),o=()=>{switch(t()){case"dark":s("light");break;case"light":s("dark");break;default:s(e()==="light"?"dark":"light")}},i=te(()=>{var l,a;return(a=(l=t())!=null?l:e())!=null?a:"dark"}),r=te(()=>i()==="dark"?yn.dark:yn.light);return{scheme:i,hue:r,enforceScheme:t,setEnforceScheme:s,toggleScheme:o}}const ke=me(Jo),Xo=_("<section></section>"),Ko=e=>{const{route:n}=Ct,[t,s]=P(!1);pe(()=>{e.strict?s(n().current===e.path):s(n().current.startsWith(e.path))}),pe(Gn(t,()=>{var d,u;t()?(d=e.onOpen)==null||d.call(e):(u=e.onClose)==null||u.call(e)}));let o,i=setTimeout(()=>{},0);const[r,l]=P(!1),[a,c]=P("");return pe(()=>{var u,f;clearTimeout(i);const d=e.path.split("/").pop();t()?(l(!0),n().firstDifferent[1]===d&&c((u=e.enter)!=null?u:"")):n().firstDifferent[0]===d&&(c((f=e.leave)!=null?f:""),requestAnimationFrame(()=>{if(!o)return;const b=window.getComputedStyle(o),p=(Number(b.animationDelay.slice(0,-1))+Number(b.animationDuration.slice(0,-1)))*1e3;i=setTimeout(()=>{l(!1)},p)}))}),$(Oe,{get when(){return r()},get children(){const d=Xo.cloneNode(!0),u=o;return typeof u=="function"?Zn(u,d):o=d,w(d,()=>e.children),R(()=>{var f;return S(d,`absolute inset-0 ${a()} ${(f=e.class)!=null?f:""}`)}),d}})},Qo=e=>{let n=[];return e.split("/").forEach(t=>{t===".."?n.pop():n.push(t)}),`${n.join("/")}`},Zo=(e,n)=>{const t=e.split("/"),s=n.split("/"),o=Math.max(t.length,s.length);for(let i=0;i<o;++i)if(t[i]!=s[i])return[t[i],s[i]];return[void 0,void 0]},ei=()=>{const[e,n]=P({previous:"/",current:"/",firstDifferent:[void 0,void 0]});return{route:e,navigate:s=>{const o=e().current,i=Qo(s);n({previous:o,current:i,firstDifferent:Zo(o,i)})}}},Ct=me(ei),ct=e=>$(Ko,{get path(){return e.path},get strict(){return e.strict},class:"animation-duration-m.4",enter:"animate-in",leave:"animate-out",get children(){return e.children}}),Pe=e=>{Ct.navigate(e),history.pushState({},"",`?navigation=${e}`)},es=new AbortController,ti=es.signal,ni=(e="/")=>{const n=()=>{var i;const t=window.location.search,o=(i=new URLSearchParams(t).get("navigation"))!=null?i:e;Ct.navigate(o)};window.addEventListener("popstate",n,{signal:ti}),n()},si=()=>{es.abort()},oi="_button_mk24k_1",ii="_isGhost_mk24k_29",ri="_isHalf_mk24k_38",li="_isSecondary_mk24k_42",ai="_isSolid_mk24k_46",Ie={button:oi,isGhost:ii,isHalf:ri,isSecondary:li,isSolid:ai},ci=_('<div class="flex flex-row items-center justify-center flex-1 gap-s.8"></div>'),ts=e=>{const n=e.as;return $(n,{get class(){var t;return[(t=e.class)!=null?t:"rounded-s p-s",Ie.button,(()=>e.style==="solid"?Ie.isSolid:e.style==="secondary"?Ie.isSecondary:e.style==="half"?Ie.isHalf:Ie.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){const t=ci.cloneNode(!0);return w(t,()=>e.children),t}})},di=_("<button></button>"),Ae=e=>$(ts,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:n=>(()=>{const t=di.cloneNode(!0);return Po(t,"click",e.onClick,!0),w(t,()=>n.children),R(s=>{var a;const o=n.class,i=n.style,r=(a=e.type)!=null?a:"button",l=e.disabled;return o!==s._v$&&S(t,s._v$=o),s._v$2=_e(t,i,s._v$2),r!==s._v$3&&Fe(t,"type",s._v$3=r),l!==s._v$4&&(t.disabled=s._v$4=l),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})(),get children(){return e.children}});St(["click"]);const ui=_("<a></a>"),ns=e=>$(ts,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:n=>(()=>{const t=ui.cloneNode(!0);return w(t,()=>n.children),R(s=>{const o=n.class,i=`text-decoration: none; ${n.style}`,r=e.href;return o!==s._v$&&S(t,s._v$=o),s._v$2=_e(t,i,s._v$2),r!==s._v$3&&Fe(t,"href",s._v$3=r),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),get children(){return e.children}}),fi=""+new URL("logo-white.c0f694e8.svg",import.meta.url).href,hi=""+new URL("logo-black.123cdd58.svg",import.meta.url).href,gi=_('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div></div></div>'),Xe=e=>(()=>{const n=gi.cloneNode(!0),t=n.firstChild;return w(t,()=>e.children),R(()=>S(t,`size-i-full max-size-i-l ${e.class}`)),n})(),mi="modulepreload",pi=function(e,n){return new URL(e,n).href},kn={},At=function(n,t,s){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=pi(i,s),i in kn)return;kn[i]=!0;const r=i.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const u=o[d];if(u.href===i&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":mi,r||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),r)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())},bi=()=>{const[e]=Mt(async()=>(await At(()=>import("./index.8ba2f42b.js").then(s=>s.i),[],import.meta.url)).default),[n]=Mt(async()=>(await At(()=>import("./index.b237e328.js"),[],import.meta.url)).default),[t]=Mt(async()=>await At(()=>import("./index.59ce5a7e.js"),[],import.meta.url));return{highlighter:n,formatter:e,md:t}},Te=me(bi),vi=`module.exports = {
  theme: {
    colors: {
      'red': {
        100: 'hsl(0, 60%, 10%)',
        200: 'hsl(0, 60%, 20%)',
        300: 'hsl(0, 60%, 30%)',
        400: 'hsl(0, 60%, 40%)',
        500: 'hsl(0, 60%, 50%)',
        600: 'hsl(0, 60%, 60%)',
        700: 'hsl(0, 60%, 70%)',
        800: 'hsl(0, 60%, 80%)',
        900: 'hsl(0, 60%, 90%)',
      },
      'desaturated-red': {
        100: 'hsl(0, 20%, 10%)',
        200: 'hsl(0, 20%, 20%)',
        300: 'hsl(0, 20%, 30%)',
        400: 'hsl(0, 20%, 40%)',
        500: 'hsl(0, 20%, 50%)',
        600: 'hsl(0, 20%, 60%)',
        700: 'hsl(0, 20%, 70%)',
        800: 'hsl(0, 20%, 80%)',
        900: 'hsl(0, 20%, 90%)',
      },
      'green': {
        100: 'hsl(120, 60%, 10%)',
        200: 'hsl(120, 60%, 20%)',
        300: 'hsl(120, 60%, 30%)',
        400: 'hsl(120, 60%, 40%)',
        500: 'hsl(120, 60%, 50%)',
        600: 'hsl(120, 60%, 60%)',
        700: 'hsl(120, 60%, 70%)',
        800: 'hsl(120, 60%, 80%)',
        900: 'hsl(120, 60%, 90%)',
      },
      'desaturated-green': {
        100: 'hsl(120, 20%, 10%)',
        200: 'hsl(120, 20%, 20%)',
        300: 'hsl(120, 20%, 30%)',
        400: 'hsl(120, 20%, 40%)',
        500: 'hsl(120, 20%, 50%)',
        600: 'hsl(120, 20%, 60%)',
        700: 'hsl(120, 20%, 70%)',
        800: 'hsl(120, 20%, 80%)',
        900: 'hsl(120, 20%, 90%)',
      },
      'blue': {
        100: 'hsl(240, 60%, 10%)',
        200: 'hsl(240, 60%, 20%)',
        300: 'hsl(240, 60%, 30%)',
        400: 'hsl(240, 60%, 40%)',
        500: 'hsl(240, 60%, 50%)',
        600: 'hsl(240, 60%, 60%)',
        700: 'hsl(240, 60%, 70%)',
        800: 'hsl(240, 60%, 80%)',
        900: 'hsl(240, 60%, 90%)',
      },
      'desaturated-blue': {
        100: 'hsl(240, 20%, 10%)',
        200: 'hsl(240, 20%, 20%)',
        300: 'hsl(240, 20%, 30%)',
        400: 'hsl(240, 20%, 40%)',
        500: 'hsl(240, 20%, 50%)',
        600: 'hsl(240, 20%, 60%)',
        700: 'hsl(240, 20%, 70%)',
        800: 'hsl(240, 20%, 80%)',
        900: 'hsl(240, 20%, 90%)',
      },
    },
  },
};
`,$i=`<div class="bg-red-600 text-red-200"> Red </div>
<div class="bg-green-600 text-green-200"> Green </div>
<div class="bg-blue-600 text-blue-200"> Blue </div>
<div class="bg-blue-600 text-desaturated-blue-200"> Blue but text is desaturated </div>
`,wi=`unocss({
  theme: {
    windblade: {
      colors: {
        'surface': {
          base: { dark: { l: 0.4, c: 0.04, a: 0.1 }} },
          on: [
            { dark: { l: 0.9, c: 0.1 } },
            { dark: { l: 0.8, c: 0.1 } },
          ]
        },
      },
    },
  },
});
`,yi=`<div class="scheme-auto-0 bg-surface"> Red </div>
<div class="scheme-auto-120 bg-surface"> Green </div>
<div class="scheme-auto-240 bg-surface"> Blue </div>
<div class="scheme-auto-240 bg-surface text-fg-2"> Blue but text is desaturated </div>
`,ki=`<div class="bg-blue-100 text-blue-900"> Primary </div>
<div class="bg-blue-100 text-blue-800"> Secondary </div>
<div class="bg-blue-100 text-blue-600"> Tertiary </div>
`,xi=`<div class="bg-blue"> Primary (text-fg-1 is applied by default) </div>
<div class="bg-blue text-fg-2"> Secondary </div>
<div class="bg-blue text-fg-3"> Tertiary </div>
`,_i=`module.exports = {
  theme: {
    spacing: {
      '0': '0',
      '0.25': '0.25rem',
      '0.5': '0.5rem',
      '0.75': '0.75rem',
      '1': '1rem',
      '2.5': '2.5rem',
      '5': '5rem',
      '7.5': '7.5rem',
      '10': '10rem',
    },
    borderRadius: ({ theme }) => ({
      DEFAULT: '0.5rem',
      ...theme('spacing')
    }),
    opacity: ({ theme }) => ({
      ...theme('spacing')
    }),
    width: ({ theme }) => ({
      ...theme('spacing')
    }),
    height: ({ theme }) => ({
      ...theme('spacing')
    }),
    margin: ({ theme }) => ({
      ...theme('spacing')
    }),
    borderWidth: ({ theme }) => ({
      ...theme('spacing')
    }),
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
  },
};
`,Si=`unocss({
  theme: {
    windblade: {
      proportions: {
        '0.25': 0.25,
        '0.5': 0.5,
        '0.75': 0.75,
        '1': 1,
        '2.5': 2,
        '5': 5,
        '7.5': 7.5,
        '10': 10,
      },

      time: {
        baseUnitMs: 150, // you can use duration-0.25, duration-5, etc. where duration-1 is 150ms and the rest follows proportions
      },
    },
  },
});
`,Ci=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute width-full height-1 inset-bottom-[0.375rem]"></div>
  <!-- (4-1) / 2 -->
  <!-- (1rem - 0.25rem) / 2 -->
  <!-- was hard to calculate and will break if the theme changes -->
</div>
`,zi=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-1 inset-bottom-$(($4-$1)/2)"></div>
  <!-- We did not need to calculate anything and this will not break if proportions change -->
</div>
`,ji=`// Not possible \u{1F641}
`,Oi=`import { getLCA, LCHToCSSColor } from "unocss-preset-windblade/core";
import { theme } from "unocss-preset-windblade"; // this is just a source file and it does not know about your theme customizations. If you are using your own colors you should import them instead

const brandHue = 80;

getBrandColor((light?: boolean) => {
  const colors = getLCA(theme.windblade.colors['brand'].base); // returns light and dark variants with all values calculated

  let lca;
  if (light) {
    lca = colors.light;
  } else {
    lca = colors.dark;
  }

  return LCHToCSSColor(lca.l, lca.c, brandHue, lca.a).rgba;
});

export default getBrandColor;
`,Ti=_('<div class="grid grid-fit-cols-m gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T\u{1F92E}ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade \u26A1:</h5></div></div>'),Ke=_('<div class="size-b-px bg-surface"></div>'),Qe=_("<pre></pre>"),Mi=_('<div class="i-mdi-arrow-right"></div>'),Ai=_('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.</li></ul></div>'),Wi=_("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas).</p>"),Ei=_(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p></section></div>`),Ri=_("<h3>Ready to improve your Tailwind workflow?</h3>"),Di=_('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.</p>'),Li=_('<div class="size-b-full overflow-auto"><section class="p--bm.2 p-b-m font-semibold bg-gradient-to-ss from-surface"></section><section class="bg-gradient-to-ss from-surface to-normal-2"></section><footer></footer></div>'),U={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-full border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},ve=e=>(()=>{const n=Ti.cloneNode(!0),t=n.firstChild,s=t.firstChild,o=t.nextSibling,i=o.firstChild;return w(t,$(Oe,{get when(){return e.code.tw.js},keyed:!0,children:r=>[Ke.cloneNode(!0),(()=>{const l=Qe.cloneNode(!0);return R(a=>{var u;const c=`${U.pre} js`,d=(u=Te.highlighter())==null?void 0:u.highlight(r,{language:"js"}).value;return c!==a._v$3&&S(l,a._v$3=c),d!==a._v$4&&(l.innerHTML=a._v$4=d),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),w(t,$(Oe,{get when(){return e.code.tw.html},keyed:!0,children:r=>[Ke.cloneNode(!0),(()=>{const l=Qe.cloneNode(!0);return R(a=>{var u;const c=U.pre,d=(u=Te.highlighter())==null?void 0:u.highlight(r,{language:"xml"}).value;return c!==a._v$5&&S(l,a._v$5=c),d!==a._v$6&&(l.innerHTML=a._v$6=d),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),w(o,$(Oe,{get when(){return e.code.wb.js},keyed:!0,children:r=>[Ke.cloneNode(!0),(()=>{const l=Qe.cloneNode(!0);return R(a=>{var u;const c=`${U.pre} js`,d=(u=Te.highlighter())==null?void 0:u.highlight(r,{language:"js"}).value;return c!==a._v$7&&S(l,a._v$7=c),d!==a._v$8&&(l.innerHTML=a._v$8=d),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),w(o,$(Oe,{get when(){return e.code.wb.html},keyed:!0,children:r=>[Ke.cloneNode(!0),(()=>{const l=Qe.cloneNode(!0);return R(a=>{var u;const c=U.pre,d=(u=Te.highlighter())==null?void 0:u.highlight(r,{language:"xml"}).value;return c!==a._v$9&&S(l,a._v$9=c),d!==a._v$10&&(l.innerHTML=a._v$10=d),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),R(r=>{const l=U.h5,a=U.h5;return l!==r._v$&&S(s,r._v$=l),a!==r._v$2&&S(i,r._v$2=a),r},{_v$:void 0,_v$2:void 0}),n})(),xn=()=>$(Ae,{style:"solid",onClick:()=>Pe("/docs/Usage-Installation"),get children(){return["Get started",Mi.cloneNode(!0)]}}),Ni=()=>(()=>{const e=Li.cloneNode(!0),n=e.firstChild,t=n.nextSibling,s=t.nextSibling;return w(n,$(Xe,{get children(){return[(()=>{const o=Ai.cloneNode(!0),i=o.firstChild,r=i.nextSibling,l=r.firstChild,a=l.nextSibling,c=a.nextSibling,d=c.nextSibling,u=d.nextSibling;return R(f=>{const b=U.header.li,p=U.header.li,g=U.header.li,y=U.header.li,v=U.header.li;return b!==f._v$11&&S(l,f._v$11=b),p!==f._v$12&&S(a,f._v$12=p),g!==f._v$13&&S(c,f._v$13=g),y!==f._v$14&&S(d,f._v$14=y),v!==f._v$15&&S(u,f._v$15=v),f},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),o})(),(()=>{const o=Wi.cloneNode(!0);return R(()=>S(o,`${U.p} text-fg-3 m-be-s`)),o})(),$(xn,{})]}})),w(e,$(Xe,{get children(){const o=Ei.cloneNode(!0),i=o.firstChild,r=i.firstChild,l=r.nextSibling,a=l.firstChild,c=a.firstChild,d=c.nextSibling,u=a.nextSibling,f=u.firstChild,b=f.nextSibling,p=u.nextSibling,g=p.firstChild,y=g.nextSibling,v=i.nextSibling,x=v.firstChild,m=x.nextSibling,h=v.nextSibling,k=h.firstChild,C=k.nextSibling,j=h.nextSibling,A=j.firstChild,L=A.nextSibling,O=j.nextSibling,W=O.firstChild,T=W.nextSibling,N=T.nextSibling;return w(a,$(ve,{code:{tw:{js:vi,html:$i},wb:{js:wi,html:yi}}}),null),w(u,$(ve,{code:{tw:{html:ki},wb:{html:xi}}}),null),w(p,$(ve,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),w(v,$(ve,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all \u{1F641}</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),w(h,$(ve,{code:{tw:{js:_i},wb:{js:Si}}}),null),w(j,$(ve,{code:{tw:{js:ji},wb:{js:Oi}}}),null),w(O,$(ve,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),N),w(O,$(ve,{code:{tw:{html:Ci},wb:{html:zi}}}),null),R(z=>{const K=U.h3,Q=U.h4,Y=U.p,Z=U.h4,ze=U.p,rn=U.h4,ln=U.p,an=U.h3,cn=U.p,dn=U.h3,un=U.p,fn=U.h3,hn=U.p,gn=U.h3,mn=U.p,pn=U.p;return K!==z._v$16&&S(r,z._v$16=K),Q!==z._v$17&&S(c,z._v$17=Q),Y!==z._v$18&&S(d,z._v$18=Y),Z!==z._v$19&&S(f,z._v$19=Z),ze!==z._v$20&&S(b,z._v$20=ze),rn!==z._v$21&&S(g,z._v$21=rn),ln!==z._v$22&&S(y,z._v$22=ln),an!==z._v$23&&S(x,z._v$23=an),cn!==z._v$24&&S(m,z._v$24=cn),dn!==z._v$25&&S(k,z._v$25=dn),un!==z._v$26&&S(C,z._v$26=un),fn!==z._v$27&&S(A,z._v$27=fn),hn!==z._v$28&&S(L,z._v$28=hn),gn!==z._v$29&&S(W,z._v$29=gn),mn!==z._v$30&&S(T,z._v$30=mn),pn!==z._v$31&&S(N,z._v$31=pn),z},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),o}}),t),w(t,$(Xe,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const o=Ri.cloneNode(!0);return R(()=>S(o,U.h3)),o})(),(()=>{const o=Di.cloneNode(!0);return R(()=>S(o,U.p)),o})(),$(xn,{})]}})),w(s,$(Xe,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",$(ns,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})(),H={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},F=e=>e.filter(Boolean).join("-"),Ui=(e,n,t,s,o)=>[o(F([e,n]),F([t,s])),o(F([e,"b",n]),F([t,"block",s])),o(F([e,"i",n]),F([t,"inline",s]))],Bt=(e,n,t,s,o)=>[o(F([e,n]),F([t,s])),o(F([e,"b",n]),F([t,"block",s])),o(F([e,"bs",n]),F([t,"block-start",s])),o(F([e,"be",n]),F([t,"block-end",s])),o(F([e,"i",n]),F([t,"inline",s])),o(F([e,"is",n]),F([t,"inline-start",s])),o(F([e,"ie",n]),F([t,"inline-end",s]))],Ht=(e,n,t,s,o)=>[o(F([e,n]),F([t,s])),o(F([e,"ss",n]),F([t,"start-start",s])),o(F([e,"se",n]),F([t,"start-end",s])),o(F([e,"ee",n]),F([t,"end-end",s])),o(F([e,"es",n]),F([t,"end-start",s]))];function Fi(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function en(e){const n=e.length;let t=-1,s,o="";const i=e.charCodeAt(0);for(;++t<n;){if(s=e.charCodeAt(t),s===0){o+="\uFFFD";continue}if(s===44){o+="\\,";continue}if(s>=1&&s<=31||s===127||t===0&&s>=48&&s<=57||t===1&&s>=48&&s<=57&&i===45){o+=`\\${s.toString(16)} `;continue}if(t===0&&n===1&&s===45){o+=`\\${e.charAt(t)}`;continue}if(s>=128||s===45||s===95||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){o+=e.charAt(t);continue}o+=`\\${e.charAt(t)}`}return o}function Bi(e){const n=function(s){var i;const o=((i=this.__options)==null?void 0:i.sequence)||[];this.__options.sequence=[];for(const r of o){const l=e[r](s);if(l!=null)return l}};function t(s,o){return s.__options||(s.__options={sequence:[]}),s.__options.sequence.push(o),s}for(const s of Object.keys(e))Object.defineProperty(n,s,{enumerable:!0,get(){return t(this,s)}});return n}const _n=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"];Object.assign({},..._n.map(e=>({[e.replace(/ /,"-")]:e})),..._n.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e})));const Hi=["inherit","initial","revert","revert-layer","unset"],tn=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,Ii=/^(-?\d*(?:\.\d+)?)$/i,ss=/^(px)$/i,Gi=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function se(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function Vi(e){const n=e.match(tn);if(!n)return;const[,t,s]=n,o=parseFloat(t);if(s&&!Number.isNaN(o))return`${se(o)}${s}`}function qi(e){if(e==="auto"||e==="a")return"auto"}function Pi(e){if(e.match(ss))return`1${e}`;const n=e.match(tn);if(!n)return;const[,t,s]=n,o=parseFloat(t);if(!Number.isNaN(o))return o===0?"0":s?`${se(o)}${s}`:`${se(o/4)}rem`}function Yi(e){if(e.match(ss))return`1${e}`;const n=e.match(tn);if(!n)return;const[,t,s]=n,o=parseFloat(t);if(!Number.isNaN(o))return o===0?"0":s?`${se(o)}${s}`:`${se(o)}px`}function Ji(e){if(!Ii.test(e))return;const n=parseFloat(e);if(!Number.isNaN(n))return se(n)}function Xi(e){e.endsWith("%")&&(e=e.slice(0,-1));const n=parseFloat(e);if(!Number.isNaN(n))return`${se(n/100)}`}function Ki(e){if(e==="full")return"100%";const[n,t]=e.split("/"),s=parseFloat(n)/parseFloat(t);if(!Number.isNaN(s))return s===0?"0":`${se(s*100)}%`}const Qi=/^\[(color|length|position|quoted|string):/i;function zt(e,n){if(e&&e.startsWith("[")&&e.endsWith("]")){let t,s;const o=e.match(Qi);if(o?(n||(s=o[1]),t=e.slice(o[0].length,-1)):t=e.slice(1,-1),!t)return;let i=0;for(const r of t)if(r==="[")i+=1;else if(r==="]"&&(i-=1,i<0))return;if(i)return;switch(s){case"string":return t.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return t.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return t.replace(/(url\(.*?\))/g,r=>r.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,r=>{const l=[];return r.replace(/var\((--.+?)[,)]/g,(a,c)=>(l.push(c),a.replace(c,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function Zi(e){return zt(e)}function er(e){return zt(e,"color")}function tr(e){return zt(e,"length")}function nr(e){return zt(e,"position")}function sr(e){if(e.match(/^\$\S/))return`var(--${en(e.slice(1))})`}function or(e){const n=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!n)return;const[,t,s]=n,o=parseFloat(t);if(!Number.isNaN(o))return o===0&&!s?"0s":s?`${se(o)}${s}`:`${se(o)}ms`}function ir(e){const n=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!n)return;const[,t,s]=n,o=parseFloat(t);if(!Number.isNaN(o))return o===0?"0":s?`${se(o)}${s}`:`${se(o)}deg`}function rr(e){if(Hi.includes(e))return e}function lr(e){if(e.split(",").every(n=>Gi.includes(n)))return e}function ar(e){if(["top","left","right","bottom","center"].includes(e))return e}const cr={__proto__:null,numberWithUnit:Vi,auto:qi,rem:Pi,px:Yi,number:Ji,percent:Xi,fraction:Ki,bracket:Zi,bracketOfColor:er,bracketOfLength:tr,bracketOfPosition:nr,cssvar:sr,time:or,degree:ir,global:rr,properties:lr,position:ar},os=Bi(cr),dr=["%alpha","<alpha-value>"];new RegExp(dr.map(e=>Fi(e)).join("|"));const ur=(e,n,t)=>{var l;let s=n.windblade.proportions[e];if(s!==void 0)return`${s}${t}`;let o=(l=n.windblade.miscSizes)==null?void 0:l[e];if(o!==void 0)return`${o}`;let i=e;for(Object.entries(n.windblade.proportions).forEach(([a,c])=>{i=i.replaceAll(`$${a}`,c.toString())});i.includes("$(");){let a=i.indexOf("$")+1,c=i.substring(a),d=0,u=d,f=0;for(let p=0;p<c.length;++p)if(c[p]==="("&&++f,c[p]===")"&&--f,f===0){u=p+1;break}const b=c.substring(d,u);i=i.replace(`$${b}`,Function(`'use strict'; return (${b})`)())}const r=os.bracket(i);if(r!==void 0)return r;if(!Number.isNaN(Number(i)))return`${i}${t}`},J=(e,n,t)=>[new RegExp(`^${e}-(.+)$`),(s,{theme:o})=>{var r;let i=ur(s[1],o,(r=t==null?void 0:t.defaultUnit)!=null?r:"rem");if(i!==void 0)return t!=null&&t.postprocess&&(i=t.postprocess(i)),{[n]:i}}],nn=(e,n,t,s)=>Ui(e,n,t,s,J),Je=(e,n,t,s)=>Bt(e,n,t,s,J),fr=(e,n,t,s)=>Ht(e,n,t,s,J),Se=Object.entries,dt=Object.keys,hr=()=>({rules:[[new RegExp("^(aspect)-(.+)$"),t=>{if(!t[2].includes(":"))return{"aspect-ratio":t[2]}}]],docs:{description:"Windblade uses CSS ratios instead of presets.",utilities:["aspect-<ratio>"],preview:t=>"TODO"}}),gr=()=>({rules:[],docs:{description:"Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.",utilities:[]}}),mr=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-after-${s}`,{"break-after":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-after-${s}`)};return{rules:n,docs:t}},pr=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-before-${s}`,{"break-before":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-before-${s}`)};return{rules:n,docs:t}},br=()=>{const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"];return{rules:e.map(s=>[`${s}`,{display:s}]),docs:{description:"Windblade removes some utilities from this group that cannot be sued semantically.",utilities:e,preview:s=>{switch(s){default:return`
            <div>
              <div class="bg-accent p-s rounded-s.4 ${s}">1</div>
              <div class="bg-accent p-s rounded-s.4 ${s}">2</div>
              <div class="bg-accent p-s rounded-s.4 ${s}">3</div>
            </div>
          `}}}}},vr=()=>{const e=[...Se(H.edges).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),...Se(H.coners).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),["object-center",{"object-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(H.edges),...Object.keys(H.coners),"center"].map(t=>`object-${t}`),preview:t=>`
      <img alt="Random demo" src="https://picsum.photos/600/400" class="rounded-s.4 max-size-i-l.2 object-none ${t}">
    `};return{rules:e,docs:n}},$r=new Map([["Aspect Ratio",hr()],["Container",gr()],["Break After",mr()],["Break Before",pr()],["Disaply",br()],["Object Position",vr()]]),wr=$r,is=(e,n)=>()=>{const t=[[`auto-${e}-auto`,{["grid-auto-"+n]:"auto"}],[`auto-${e}-fr`,{["grid-auto-"+n]:"minmax(0, 1fr)"}],J(`auto-${e}`,`grid-auto-${n}`)],s={description:"Added utilities for controlling the size of implicitly-created grid columns with proportion units.",utilities:[`auto-${e}-auto`,`auto-${e}-fr`,`auto-${e}-<theme.windblade.proportions>`],preview:o=>`
      <div class="grid ${o} ${o.includes("cols")?"grid-flow-col":""} gap-s bg-accent-3 rounded-s.4 size-i-full">
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">01</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">02</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">03</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">04</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">05</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">06</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">07</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">08</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">09</div>
      </div>
    `};return{rules:t,docs:s}},yr=is("cols","columns"),kr=is("rows","rows"),jt=(e,n,t)=>()=>{const s=[J(`grid-${e}-${n}s`,`grid-template-${t}s`,{postprocess:i=>`repeat(auto-fit, minmax(${i}, 1fr))`})],o={description:`Utilities specifying the columns in a grid layout using auto-${e}. Missing from Tailwind.`,utilities:[`grid-${e}-${n}s-<theme.windblade.proportions>`],preview:i=>`
      <div class="grid ${i} ${i.includes("cols")?"":"grid-flow-col"} gap-s bg-accent-3 rounded-s.4 size-i-full">
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">01</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">02</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">03</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">04</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">05</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">06</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">07</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">08</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">09</div>
      </div>
    `};return{rules:s,docs:o}},xr=jt("fit","col","column"),_r=jt("fill","col","column"),Sr=jt("fit","row","row"),Cr=jt("fill","row","row"),zr=new Map([["Grid Auto Columns",yr()],["Grid Auto Rows",kr()],["Grid Fit Columns",xr()],["Grid Fit Rows",Sr()],["Grid Fill Clumns",_r()],["Grid Fill Rows",Cr()]]),jr=zr,Or=()=>{const e=Je("p","","padding",""),n={description:"Replaced physical properties with logical.",utilities:["p",...Object.keys(H.axis).map(t=>`p-${t}`),...Object.keys(H.edges).map(t=>`p-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="${t} rounded-s bg-accent">
        <div class="border border-dashed rounded-s.2">${t}</div>
      </div>
    `};return{rules:e,docs:n}},Tr=()=>{const e=Je("m","","margin",""),n={description:"Replaced physical properties with logical.",utilities:["m",...Object.keys(H.axis).map(t=>`m-${t}`),...Object.keys(H.edges).map(t=>`m-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="border border-dashed border-color-accent rounded-s.2">
        <div class="${t} p-s rounded-s bg-accent">${t}</div>
      </div>
    `};return{rules:e,docs:n}},Mr=()=>({rules:[],docs:{description:"Removed this. Please use gap and flex/grid/columns instead",utilities:[]}}),Ar=new Map([["Padding",Or()],["Margin",Tr()],["Space between",Mr()]]),Wr=Ar,Er=()=>({rules:[],docs:{description:"Removed this, as well as min and max variants, in favor of the size counterparts",utilities:[]}}),Rr=()=>{const e=nn("size","","","size"),n={description:"Utilities for setting the size of an element. Missing from Tailwind.",utilities:[...Object.keys(H.axis).map(t=>`size-${t}-<theme.windblade.sizes>`)],preview:t=>`
      <div class="${t} ${t.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
    `};return{rules:e,docs:n}},rs=e=>`
  <div class="${e} ${e.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`,Dr=()=>{const e=nn("min-size","","min","size"),n={description:"Utilities for setting the minimum size of an element. Missing from Tailwind.",utilities:Object.keys(H.axis).map(t=>`min-size-${t}-<theme.windblade.proportions>`),preview:rs};return{rules:e,docs:n}},Lr=()=>{const e=nn("max-size","","max","size"),n={description:"Utilities for setting the maximum size of an element. Missing from Tailwind.",utilities:Object.keys(H.axis).map(t=>`max-size-${t}-<theme.windblade.proportions>`),preview:rs};return{rules:e,docs:n}},Nr=new Map([["Width & Height",Er()],["Size",Rr()],["Min-Size",Dr()],["Max-Size",Lr()]]),Ur=Nr,de=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var o;if((o=s.windblade.miscColors)!=null&&o[t[2]])return{[n]:t[2]};if(s.windblade.colors[t[2]])return{[n]:`var(--${t[2]}-base)`}}],Fr=e=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:t})=>{const s=t.windblade.colors[n[2]];if(!s)return;const o={background:`var(--${n[2]}-base)`,color:`var(--${n[2]}-fg-1)`};for(let i=1;i<=s.on.length;++i)o[`--fg-${i}`]=`var(--${n[2]}-fg-${i})`;return o}],De=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var o;return(o=s.windblade.miscColors)!=null&&o[t[2]]?{[n]:t[2]}:{[n]:`var(--fg-${t[2]})`}}],Br=()=>({rules:[de("bg","background-color"),Fr("bg"),De("bg-fg","background-color")],docs:{description:"Windblade uses semantic colors.",utilities:["bg-<theme.windblade.colors>","bg-<theme.windblade.miscColors>","bg-fg-<integer>"],preview:t=>t.startsWith("bg-fg")?`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full ${t}"></div>
          </div>
        `:`
          <div class="${t} size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s flex items-center justify-center text-center">
            ${t}
          </div>
        `}}),Hr=()=>{const e=[...Se(H.edges).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),...Se(H.coners).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),["bg-center",{"background-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(H.edges),...Object.keys(H.coners),"center"].map(t=>`bg-${t}`),preview:t=>`
      <div class="${t} rounded-s.4 size-i-full max-size-i-l.2 aspect-10/6" style="background-image: url('https://picsum.photos/600/400')"></div>
    `};return{rules:e,docs:n}},Ir=()=>{const e=[["bg-none",{"background-image":"none"}],...dt(H.edges).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${H.edges[t]}), var(--wb-gradient-stops))`}]),...dt(H.coners).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${H.coners[t]}), var(--wb-gradient-stops))`}])],n={description:"Repalced static colors with sematic colors.",utilities:["bg-none",...Object.keys(H.edges).map(t=>`bg-gradient-to-${t}`),...Object.keys(H.coners).map(t=>`bg-gradient-to-${t}`)],preview:t=>`
      <div class="${t} from-accent size-i-full size-b-l.2 rounded-s"></div>
    `};return{rules:e,docs:n}},Gr=()=>({rules:[de("from","--wb-gradient-from"),de("to","--wb-gradient-to")],docs:{description:"Repalced static colors with sematic colors. Temporarily missing the 'via' utilities.",utilities:["from-<theme.windblade.colors>","from-<theme.windblade.miscColors>","to-<theme.windblade.colors>","to-<theme.windblade.miscColors>"],preview:t=>`
      <div class="bg-gradient-to-ie ${t} ${t.startsWith("from")?"to-accent-2":"from-accent-2"} size-i-full size-b-l.2 rounded-s"></div>
    `}}),Vr=new Map([["Color",Br()],["Background Position",Hr()],["Background Image",Ir()],["Gradient Color Stops",Gr()]]),qr=Vr,Pr=()=>({rules:[],docs:{description:"Font family utilities have been removed.",utilities:[]}}),Yr=()=>({rules:[J("text","font-size")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["text-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Jr=()=>({rules:[],docs:{description:"Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.",utilities:[]}}),Xr=()=>({rules:[J("tracking","letter-spacing",{defaultUnit:"em"})],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["tracking-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Kr=()=>({rules:[J("leading","line-height",{defaultUnit:""})],docs:{description:"Windblade proportions are used instead of separate size values. Setting line height in rem units is not possible at the moment.",utilities:["leading-<theme.windblade.proportions>"],preview:t=>`<div class="${t} text-center" style="max-inline-size: 36ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<div>`}}),Qr=()=>({rules:[de("text","color"),De("text-fg","color")],docs:{description:"Windblade uses semantic colors.",utilities:["text-<theme.windblade.colors>","text-<theme.windblade.miscColors>","text-fg-<integer>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Zr=()=>({rules:[de("decoration","text-decoration-color"),De("decoration-fg","text-decoration-color")],docs:{description:"Windblade uses semantic colors.",utilities:["decoration-<theme.windblade.colors>","decoration-<theme.windblade.miscColors>","decoration-fg-<integer>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),el=()=>({rules:[["decoration-from-font",{"text-decoration-thickness":"from-font"}],J("decoration","text-decoration-thickness")],docs:{description:"Windblade proportions are used instead of separate thickness values.",utilities:["decoration-from-font","decoration-<theme.windblade.proportions>","decoration-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),tl=()=>({rules:[J("underline-offset","text-underline-offset")],docs:{description:"Windblade proportions are used instead of separate ofset values.",utilities:["underline-offset-<theme.windblade.proportions>","underline-offset-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),nl=new Map([["Font Family",Pr()],["Font Size",Yr()],["Font Smoothing",Jr()],["Letter Spacing",Xr()],["Line Height",Kr()],["Text Color",Qr()],["Text Decoration Color",Zr()],["Text Decoration Thickness",el()],["Text Underline Offset",tl()]]),sl=nl,ol=()=>{const e=[...fr("rounded","","border","radius"),...Ht("rounded","full","border","radius",(t,s)=>[t,{[s]:"99999px"}]),...Ht("rounded","none","border","radius",(t,s)=>[t,{[s]:"none"}])],n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["rounded",...Object.keys(H.coners).map(t=>`rounded-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-full`,`${t}-none`]),preview:t=>`
      <div class="${t} size-i-full max-size-i-l.2 aspect-1/1 bg-accent"></div>
    `};return{rules:e,docs:n}},il=()=>{const e=Je("border","","border","width"),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["border",...Object.keys(H.axis).map(t=>`border-${t}`),...Object.keys(H.edges).map(t=>`border-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>`
      <div class="border border-color-accent ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},rl=()=>{const e=[...Bt("border","color","border","color",de),...Bt("border","color-fg","border","color",De)],n={description:"Windblade uses semantic colors.",utilities:["border-color",...Object.keys(H.axis).map(t=>`border-${t}-color`),...Object.keys(H.edges).map(t=>`border-${t}-color`)].flatMap(t=>[`${t}-<theme.windblade.colors>`,`${t}-<theme.windblade.miscColors>`,`${t}-fg-<integer>`]),preview:t=>`
      <div class="border border-width-s.2 ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},ll=()=>({rules:[J("outline","outline-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["outline-<theme.windblade.proportions>","outline-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),al=()=>({rules:[J("outline-offset","outline-offset")],docs:{description:"Windblade proportions are used instead of separate offset values.",utilities:["outline-offset-<theme.windblade.proportions>","outline-offset-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),cl=()=>({rules:[],docs:{description:"Divides have been removed.",utilities:[]}}),dl=()=>({rules:[],docs:{description:"Rings have been removed.",utilities:[]}}),ul=new Map([["Border Radius",ol()],["Border Width",il()],["Border Color",rl()],["Outline Width",ll()],["Outline Offset",al()],["Divide",cl()],["Ring",dl()]]),fl=ul,hl=()=>({rules:[],docs:{description:"Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),gl=()=>({rules:[J("opacity","opacity",{defaultUnit:""})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:[]}}),ml=new Map([["Box Shadow",hl()],["Opacity",gl()]]),pl=ml,bl=()=>({rules:[],docs:{description:"Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),vl=new Map([["Drop Shadow",bl()]]),$l=vl,wl=()=>({rules:[J("border-spacing","border-spacing")],docs:{description:"Changing border-spacing for individual axis is not possible at the moment.",utilities:["border-spacing-<theme.windblade.proportions>"],preview:t=>"TODO"}}),yl=new Map([["Border spacing",wl()]]),kl=yl,ut=(e,n,t)=>[new RegExp(`^(${e})-(.+)$`),(s,{theme:o})=>{var l;const i={};let r=o.windblade.proportions[s[2]]*o.windblade.time.baseUnitMs+"ms";if(r!==void 0)return i[n]=(l=t==null?void 0:t(r))!=null?l:r,i}],ls=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{const o={};let i=s.windblade.time.functions[t[2]];if(i!==void 0)return o[n]=i,o}],xl=()=>({rules:[ut("duration","transition-duration"),ut("delay","transition-delay")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["duration-<theme.windblade.proportions>","delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),_l=()=>({rules:[ls("ease","transition-timing-function")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),Sl=()=>({rules:[],docs:{description:"Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.",utilities:[]}}),Cl=()=>({rules:[ut("animation-duration","animation-duration"),ut("animation-delay","animation-delay")],docs:{description:"Utilities for controlling the duration & delay of CSS animations. Missing from Tailwind.",utilities:["animation-duration-<theme.windblade.proportions>","animation-delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),zl=()=>({rules:[ls("animation-ease","animation-timing-function")],docs:{description:"Utilities for controlling the easing of CSS animations. Missing from Tailwind.",utilities:["animation-ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),jl=new Map([["Transition Delay & Duration",xl()],["Transition Timing Function",_l()],["Animations",Sl()],["Animation Delay & Duration",Cl()],["Animation Timing Function",zl()]]),Ol=jl,Tl=()=>({rules:[J("scale","transform",{defaultUnit:"",postprocess:t=>`scale${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["scale-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Ml=()=>({rules:[J("rotate","transform",{defaultUnit:"deg",postprocess:t=>`rotate${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["rotate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Al=()=>({rules:[J("translate","transform",{postprocess:t=>`translate${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["translate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Wl=()=>({rules:[J("skew","transform",{defaultUnit:"deg",postprocess:t=>`skew${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["skew-<theme.windblade.proportions>"],preview:t=>"TODO"}}),El=new Map([["Scale",Tl()],["Rotate",Ml()],["Translate",Al()],["Skew",Wl()]]),Rl=El,Dl=()=>({rules:[de("accent","accent-color")],docs:{description:"Windblade uses semantic colors.",utilities:["accent-<theme.windblade.colors>","accent-<theme.windblade.miscColors>","accent-fg-<integer>"],preview:t=>"TODO"}}),Ll=()=>({rules:[de("caret","caret-color"),De("caret-fg","caret-color")],docs:{description:"Windblade uses semantic colors.",utilities:["caret-<theme.windblade.colors>","caret-<theme.windblade.miscColors>","caret-fg-<integer>"],preview:t=>"TODO"}}),Nl=()=>{const e=Je("scroll-m","","scroll-margin",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(H.axis).map(t=>`scroll-m-${t}`),...Object.keys(H.edges).map(t=>`scroll-m-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},Ul=()=>{const e=Je("scroll-p","","scroll-padding",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(H.axis).map(t=>`scroll-p-${t}`),...Object.keys(H.edges).map(t=>`scroll-p-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},Fl=()=>({rules:[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],docs:{description:"snap-x and snap-y have been removed because they have no logical counterparts yet.",utilities:["snap-none","snap-both","snap-mandatory","snap-proximity"],preview:t=>"TODO"}}),Bl=()=>({rules:[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],docs:{description:"pan touch-actions have been removed because they have no logical counterparts yet.",utilities:["touch-auto","touch-none","touch-pinch-zoom","touch-manipulation"],preview:t=>"TODO"}}),Hl=new Map([["Accent color",Dl()],["Caret color",Ll()],["Scroll margin",Nl()],["Scroll padding",Ul()],["Scroll snap type",Fl()],["Touch action",Bl()]]),Il=Hl,Gl=()=>({rules:[de("fill","fill"),De("fill-fg","fill")],docs:{description:"Windblade uses semantic colors.",utilities:["fill-<theme.windblade.colors>","fill-<theme.windblade.miscColors>","fill-fg-<integer>"],preview:t=>"TODO"}}),Vl=()=>({rules:[de("stroke","stroke"),De("stroke-fg","stroke")],docs:{description:"Windblade uses semantic colors.",utilities:["stroke-<theme.windblade.colors>","stroke-<theme.windblade.miscColors>","stroke-fg-<integer>"],preview:t=>"TODO"}}),ql=()=>({rules:[J("stroke","stroke-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["stroke-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Pl=new Map([["Fill",Gl()],["Stroke Color",Vl()],["Stroke Width",ql()]]),Yl=Pl;function Ze(e,n=2){let t=e;for(;t.length<n;)t=`0${t}`;return t}function Jl(e){return e*(Math.PI/180)}function Xl(e){return e*(180/Math.PI)}function E(e,n,t){return Math.min(Math.max(e,n),t)}function je(e,n){let[t,s,o,i]=n,r=i<1?`/${he(i,5)}`:"";switch(e){case"rgb":case"rgba":return i<1?`rgba(${Math.round(t*255)}, ${Math.round(s*255)}, ${Math.round(o*255)}, ${he(i,5)})`:`rgb(${Math.round(t*255)}, ${Math.round(s*255)}, ${Math.round(o*255)})`;case"oklab":case"oklch":return`${e}(${he(t*100,6)}% ${he(s,6)} ${he(o,6)}${r})`;default:return`color(${e} ${he(t,6)} ${he(s,6)} ${he(o,6)}${r})`}}function He(e,n){let t=[...e];for(let s=0;s<n.length;s++){let o=0;for(let i=0;i<n[s].length;i++)o+=e[i]*n[s][i];t[s]=o}return t}function he(e,n=2){let t=10**n;return Math.round(e*t)/t}var Kl=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],Ql=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Zl=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],I=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],ea=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],ta=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function na(e,n){let t=[1/0,1/0,1/0,1/0,1/0],s=1/0,o=1/0,i=1/0;-1.88170328*e-.80936493*n>1?(t=[1.19086277,1.76576728,.59662641,.75515197,.56771245],s=4.0767416621,o=-3.3077115913,i=.2309699292):1.81444104*e-1.19445276*n>1?(t=[.73956515,-.45954404,.08285427,.1254107,.14503204],s=-1.2684380046,o=2.6097574011,i=-.3413193965):(t=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],s=-.0041960863,o=-.7034186147,i=1.707614701);let r=t[0]+t[1]*e+t[2]*n+t[3]*e*e+t[4]*e*n,l=.3963377774*e+.2158037573*n,a=-.1055613458*e-.0638541728*n,c=-.0894841775*e-1.291485548*n;{let d=1+r*l,u=1+r*a,f=1+r*c,b=d**3,p=u**3,g=f**3,y=3*l*d**2,v=3*a*u**2,x=3*c*f**2,m=6*l**2*d,h=6*a**2*u,k=6*c**2*f,C=s*b+o*p+i*g,j=s*y+o*v+i*x,A=s*m+o*h+i*k;r=r-C*j/(j*j-.5*C*A)}return r}function sa(e,n){let t=na(e,n),[s,o,i]=ft(Gt([1,t*e,t*n,1])),r=Math.cbrt(1/Math.max(s,o,i)),l=r*t;return{L:r,C:l}}function oa(e,n,t,s,o){let i=sa(e,n);if((t-o)*i.C-(i.L-o)*s<=0)return i.C*o/(s*i.L+i.C*(o-t));let r=i.C*(o-1)/(s*(i.L-1)+i.C*(o-t)),l=t-o,a=s,c=.3963377774*e+.2158037573*n,d=-.1055613458*e-.0638541728*n,u=-.0894841775*e-1.291485548*n,f=l+a*c,b=l+a*d,p=l+a*u,g=o*(1-r)+r*t,y=r*s,v=g+y*c,x=g+y*d,m=g+y*u,h=[[v**3,x**3,m**3],[3*f*v**2,3*b*x**2,3*p*m**2],[6*f**2*v,6*b**2*x,6*p**2*m]],k=I[0][0]*h[0][0]+I[0][1]*h[0][1]+I[0][2]*h[0][2]-1,C=I[0][0]*h[1][0]+I[0][1]*h[1][1]+I[0][2]*h[1][2],j=I[0][0]*h[2][0]+I[0][1]*h[2][1]+I[0][2]*h[2][2],A=C/(C*C-.5*k*j),L=A>=0?-k*A:1/0,O=I[1][0]*h[0][0]+I[1][1]*h[0][1]+I[1][2]*h[0][2]-1,W=I[1][0]*h[1][0]+I[1][1]*h[1][1]+I[1][2]*h[1][2],T=I[1][0]*h[2][0]+I[1][1]*h[2][1]+I[1][2]*h[2][2],N=W/(W*W-.5*O*T),z=N>=0?-O*N:1/0,K=I[2][0]*h[0][0]+I[2][1]*h[0][1]+I[2][2]*h[0][2]-1,Q=I[2][0]*h[1][0]+I[2][1]*h[1][1]+I[2][2]*h[1][2],Y=I[2][0]*h[2][0]+I[2][1]*h[2][1]+I[2][2]*h[2][2],Z=Q/(Q*Q-.5*K*Y),ze=Z>=0?-K*Z:1/0;return r+Math.min(L,z,ze)}function Wt(e){let n=Math.abs(e);return n<=.0031308?e*12.92:1.055*Math.pow(n,1/2.4)-.055}function Et(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function It(e){let[n,t,s,o]=e;n=Math.abs(n%360);let i=t*(1-Math.abs(2*s-1)),r=i*(1-Math.abs(n/60%2-1)),l=0,a=0,c=0;0<=n&&n<60?(l=i,a=r):60<=n&&n<120?(l=r,a=i):120<=n&&n<180?(a=i,c=r):180<=n&&n<240?(a=r,c=i):240<=n&&n<300?(l=r,c=i):300<=n&&n<360&&(l=i,c=r);let d=s-i/2;return[l+d,a+d,c+d,o]}function Sn(e){let[n,t,s,o]=e;if(t+s>=1){let r=t/(t+s);return[r,r,r,o]}let i=It([n,100,50,o]);for(let r=0;r<3;r++)i[r]*=1-t-s,i[r]+=t;return i}function ia(e,n=2e-4){let[t,s,o,i]=e,r=Math.abs(s)<n&&Math.abs(o)<n?0:Xl(Math.atan2(o,s));for(;r<0;)r+=360;for(;r>=360;)r-=360;return[t,Math.sqrt(s**2+o**2),r,i]}function ra(e){let[n,t,s,o]=e;if(n===0)return[0,0,0,o];for(;s<0;)s+=360;for(;s>=360;)s-=360;let i=Jl(s);return[n,Math.cos(i)*t,Math.sin(i)*t,o]}function la(e){return He(e,Zl)}function ft(e){let[n,t,s,o]=e,[i,r,l]=He([n**3,t**3,s**3,o],I);return[i,r,l,o]}function We(e){let[n,t,s,o]=e;return[Wt(n),Wt(t),Wt(s),o]}function as(e){let[n,t,s,o]=He(e,ea);return[Math.cbrt(n),Math.cbrt(t),Math.cbrt(s),o]}function Cn(e){return He(e,Kl)}function Gt(e){return He(e,ta)}function ht(e){let[n,t,s,o]=ft(Gt(e));if(n>1.001||n<-.001||t>1.001||t<-.001||s>1.001||s<-.001){let[i,r,l]=e,a=Math.max(1e-5,Math.sqrt(r**2+l**2)),c=E(i,0,1),d=r/a,u=l/a,f=oa(d,u,i,a,c);return We(ft(Gt([c*(1-f)+f*i,d*(f*a),u*(f*a),o])))}return We([n,t,s,o])}function gt(e){return ht(ra(e))}function Me(e){let[n,t,s,o]=e;return[Et(n),Et(t),Et(s),o]}function mt(e){return la(as(Me(e)))}function pt(e){return ia(mt(e))}function zn(e){return He(e,Ql)}function cs(e,n){let[t,s,o,i]=pt(e);return typeof n.lightness=="number"&&(n.mode==="relative"?t+=n.lightness:t=n.lightness),typeof n.chroma=="number"&&(n.mode==="relative"?s+=n.chroma:s=n.chroma),typeof n.hue=="number"&&(n.mode==="relative"?o+=n.hue:o=n.hue),typeof n.alpha=="number"&&(n.mode==="relative"?i+=n.alpha:i=n.alpha),gt([t,s,o,i])}var aa={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},jn=aa,ca=/-?[0-9.]+%?/g,da=/^#[0-9a-f]{3,8}$/i,ua=16**6,Vt=16**4,qt=16**2;function ge(e){let n=fa(e),t={get hex(){let[s,o,i,r]=n,l="#";return l+=Ze(Math.round(E(s*255,0,255)).toString(16),2),l+=Ze(Math.round(E(o*255,0,255)).toString(16),2),l+=Ze(Math.round(E(i*255,0,255)).toString(16),2),n[3]<1&&(l+=Ze(Math.round(r*255).toString(16),2)),l},get hexVal(){let[s,o,i,r]=n;return r<1&&console.warn(`hexVal converted a semi-transparent color (${r*100}%) to fully opaque`),s=Math.round(E(s*255,0,255)),o=Math.round(E(o*255,0,255)),i=Math.round(E(i*255,0,255)),s*Vt+o*qt+i},get rgb(){return je("rgb",n)},rgbVal:n,get rgba(){return je("rgb",n)},rgbaVal:n,get linearRGB(){return je("srgb-linear",Me(n))},get linearRGBVal(){return Me(n)},get p3(){return je("display-p3",n)},p3Val:n,get oklab(){return je("oklab",mt(n))},get oklabVal(){return mt(n)},get oklch(){return je("oklch",pt(n))},get oklchVal(){return pt(n)},get xyz(){return je("xyz-d65",Cn(Me(n)))},get xyzVal(){return Cn(Me(n))},adjust(s){return ge(cs(n,s))}};return t.toString=()=>t.hex,t}function On(e){if(e>ua)throw new Error("8-digit hex values (with transparency) aren\u2019t supported");let n=e,t=Math.floor(n/Vt);n-=t*Vt;let s=Math.floor(n/qt);n-=s*qt;let o=n;return[t/255,s/255,o/255,1]}function $e(e,n){let t=e.match(ca);if(!t)throw new Error(`Unexpected color format: ${e}`);let s=[0,0,0,1];return t.forEach((o,i)=>{o.includes("%")?s[i]=parseFloat(o)/100:!n||n[i]===1/0||n[i]===1?s[i]=parseFloat(o):s[i]=parseFloat(o)/n[i]}),s}function fa(e){let n=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw n;if(Array.isArray(e)){if(e.some(r=>typeof r!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[t,s,o,i]=e;return[E(t,0,1),E(s,0,1),E(o,0,1),typeof i=="number"?E(i,0,1):1]}if(typeof e=="number")return On(e);if(typeof e=="string"){let t=e.trim();if(!t)throw new Error("Expected color, received empty string");let s=t.toLowerCase();if(typeof jn[s]=="number")return On(jn[s]);if(da.test(s)){let r=s.replace("#",""),l=[0,0,0,1];if(r.length===6||r.length===8)for(let a=0;a<r.length/2;a++){let c=a*2,d=c+2,u=r.substring(c,d);l[a]=parseInt(u,16)/255}else if(r.length===3||r.length===4)for(let a=0;a<r.length;a++){let c=r.charAt(a);l[a]=parseInt(`${c}${c}`,16)/255}else throw new Error(`Hex value "${s}" not a valid sRGB color`);return l}let[o,i]=t.split("(");if(o==="color"){let r=i.indexOf(" ");o=i.substring(0,r),i=i.substring(r)}switch(o){case"rgb":case"rgba":case"srgb":{let[r,l,a,c]=$e(i,[255,255,255,1]);return[E(r,0,1),E(l,0,1),E(a,0,1),E(c,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let r=$e(i);return We(r)}case"hsl":case"hsla":{let[r,l,a,c]=$e(i);return It([r,E(l,0,1),E(a,0,1),E(c,0,1)])}case"hwb":case"hwba":{let[r,l,a,c]=$e(i);return Sn([r,E(l,0,1),E(a,0,1),E(c,0,1)])}case"p3":case"display-p3":{let[r,l,a,c]=$e(i);return[E(r,0,1),E(l,0,1),E(a,0,1),E(c,0,1)]}case"oklab":return ht($e(i));case"oklch":return gt($e(i));case"xyz":case"xyz-d65":return We(zn($e(i)))}}if(typeof e=="object"){let t={...e},s=1;for(let o of Object.keys(t))o==="alpha"?s=E(t[o],0,1):t[o.toLowerCase()]=t[o];if("r"in t&&"g"in t&&"b"in t)return[E(t.r,0,1),E(t.g,0,1),E(t.b,0,1),s];if("h"in t&&"s"in t&&"l"in t)return It([t.h,E(t.s,0,1),E(t.l,0,1),s]);if("h"in t&&"w"in t&&"b"in t)return Sn([t.h,E(t.w,0,1),E(t.b,0,1),s]);if("l"in t&&"a"in t&&"b"in t)return ht([t.l,t.a,t.b,s]);if("l"in t&&"c"in t&&"h"in t)return gt([t.l,t.c,t.h,s]);if("x"in t&&"y"in t&&"z"in t)return We(zn([t.x,t.y,t.z,s]));throw n}throw n}function sn(e,n,t=.5,s="oklab"){let o=E(t,0,1);if(t===0)return ge(e);if(t===1)return ge(n);let i=1-o,r=o,l={oklch:pt,oklab:mt,lms:W=>Me(as(W)),linearRGB:Me,sRGB:W=>W},a={oklch:gt,oklab:ht,lms:W=>ft(We(W)),linearRGB:We,sRGB:W=>W},c=l[s],d=a[s];if(!c)throw new Error(`Unknown color space "${s}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[u,f,b,p]=ge(e).rgbVal,[g,y,v,x]=ge(n).rgbVal;s==="oklch"&&(u===f&&f===b||g===y&&y===v)&&(c=l.oklab,d=a.oklab);let[m,h,k,C]=c([u,f,b,p]),[j,A,L,O]=c([g,y,v,x]);return s==="oklch"&&Math.abs(L-k)>180&&(Math.max(k,L)===L?L-=360:k-=360),ge(d([m*i+j*r,h*i+A*r,k*i+L*r,C*i+O*r]))}function ds(e,n,t="oklab"){let s=E(n,-1,1);return s>=0?sn(e,"black",s,t):us(e,-s)}function us(e,n,t="oklab"){let s=E(n,-1,1);return s>=0?sn(e,"white",s,t):ds(e,-s)}function bt(e){return ge(e).xyzVal[1]}function ha(e){return he(ge(e).oklabVal[0],5)}function ga(e){return bt(e)<.36?"dark":"light"}function ma(e,n){let t=bt(e),s=bt(n),o=Math.max(t,s),i=Math.min(t,s),r=(o+.05)/(i+.05);return{ratio:r,AA:r>=4.5,AAA:r>=7}}var vt={adjust:cs,contrastRatio:ma,darken:ds,from:ge,lighten:us,lightness:ha,lightOrDark:ga,luminance:bt,mix:sn};const pa=e=>{var o,i,r,l,a,c,d;const n=e.dark.l,t=e.dark.c,s=(o=e.dark.a)!=null?o:1;return{dark:{l:n,c:t,a:s},light:{l:(r=(i=e.light)==null?void 0:i.l)!=null?r:1-n,c:(a=(l=e.light)==null?void 0:l.c)!=null?a:t,a:(d=(c=e.light)==null?void 0:c.a)!=null?d:s}}},ba=(e,n)=>{const{windblade:t}=e,{colors:s}=t,o={light:{},dark:{}};return Object.entries(s).forEach(([i,r])=>{[r.base,...r.on].forEach((a,c)=>{const d=`--${i}-${c===0?"base":"fg-"+c}`,{dark:u,light:f}=pa(a);o.dark[d]=vt.from(`oklch(${u.l} ${u.c}, ${n}, ${u.a})`).rgba,o.light[d]=vt.from(`oklch(${f.l} ${f.c}, ${n}, ${f.a})`).rgba})}),o},Ge=e=>{let n="";return Object.keys(e).forEach(t=>{n+=`${t}: ${e[t]};
`}),n},va=()=>({rules:[[new RegExp(/^scheme-(dark|light|inverse|auto)-(\d+)$/),(t,{rawSelector:s,theme:o})=>{var c;const i=Number((c=t[2])!=null?c:0);if(Number.isNaN(i))return;const r=en(s),{dark:l,light:a}=ba(o,i);switch(t[1]){case"light":return`
              .${r} {
                ${Ge(a)}
              }
            `;case"dark":return`
              .${r} {
                ${Ge(l)}
              }
            `;default:return`
              .${r},
              .scheme-dark.${r},
              .scheme-dark .${r} {
                ${Ge(l)}
              }
              .scheme-light.${r},
              .scheme-light .${r} {
                ${Ge(a)}
              }
              @media (prefers-color-scheme: light) { .${r} {
                  ${Ge(a)}
                }
              }
            `}}]],docs:{description:"Utilities for switching color scheme. Missing from Tailwind.",utilities:["scheme-dark","scheme-light","scheme-auto-<integer>","scheme-dark-<integer>","scheme-light-<integer>"],preview:t=>"TODO"}}),$a=new Map([["Color Scheme",va()]]),wa=$a,ya=new Map([["Layout",wr],["Flexbox & Grid",jr],["Spacing",Wr],["Sizing",Ur],["Background",qr],["Typography",sl],["Borders",fl],["Effects",pl],["Filters",$l],["Tables",kl],["Transitions & Animation",Ol],["Transforms",Rl],["Interactivity",Il],["SVG",Yl],["Accessibility",wa]]),ka=ya,Tn=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},xe=(...e)=>e.reduce((n,t)=>{if(Array.isArray(t))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(t).forEach(s=>{["__proto__","constructor","prototype"].includes(s)||(Array.isArray(n[s])&&Array.isArray(t[s])?n[s]=xe.options.mergeArrays?Array.from(new Set(n[s].concat(t[s]))):t[s]:Tn(n[s])&&Tn(t[s])?n[s]=xe(n[s],t[s]):n[s]=t[s])}),n},{}),fs={mergeArrays:!0};xe.options=fs;xe.withOptions=(e,...n)=>{xe.options=Object.assign({mergeArrays:!0},e);const t=xe(...n);return xe.options=fs,t};const xa=()=>`# Installation

Windblade is an UnoCSS preset, please follow its own [guide](https://github.com/unocss/unocss#installation) to install it.

Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.

\`\`\`sh
npm install unocss-preset-windblade
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
})
\`\`\`

## Recommended additions

Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.

### Getting hover, active, etc.

Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.

\`\`\`sh
npm install unocss-preset-mini-variants
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import presetVariants from 'unocss-preset-mini-variants';

export default defineConfig({
  presets: [
    presetWindblade(),
    presetVariants(),
  ],
})
\`\`\`

### Getting @apply

UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.

\`\`\`sh
npm install -D @unocss/transformer-directives
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
\`\`\`
`,_a=xa,Sa=()=>`# Using semantic colors

Windblade comes with a semantic color system. Refer to colors by their names.

\`\`\`html
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
\`\`\`

## Foreground colors

All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.

\`\`\`html
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
\`\`\`

## Hue & color scheme

Change color hue by applying color rules together with or sheme-(auto|dark|light)-{number} or inside elemetns with that class.

\`\`\`html
<div class="scheme-auto-80 bg-normal"></div>
\`\`\`

It is a good idea apply a default color scheme at the root of your app.

\`\`\`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
\`\`\`

@media(prefers-color-scheme) is used for scheme-auto-... by default but you can override this behaviour with scheme-(dark|light).

\`\`\`html
<body class="scheme-dark scheme-auto-80 bg-normal">
  <h1>Always-dark website</h1>
  <section class="bg-accent">Default (orange)</section>
  <section class="scheme-auto-240 bg-accent">Blue</section>
  <section class="scheme-auto-280 bg-accent">Purple</section>
</body>
\`\`\`

## Using Windblade colors in JavaScrtipt

Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.

\`\`\`ts
import { getLCA, LCHToCSSColor } from "unocss-preset-windblade/core";
import { theme } from "unocss-preset-windblade"; // this is just a source file and it does not know about your theme customizations. If you are using your own colors you should import them instead

const brandHue = 80;

getBrandColor((light?: boolean) => {
  const colors = getLCA(theme.windblade.colors['brand'].base); // returns light and dark variants with all values calculated

  let lca;
  if (light) {
    lca = colors.light;
  } else {
    lca = colors.dark;
  }

  return LCHToCSSColor(lca.l, lca.c, brandHue, lca.a).rgba;
});

export default getBrandColor;
\`\`\`
`,Ca=Sa,ue={block:"bg-surface p-s transition text-center rounded-s.4"},za=()=>`# Using logical properties

Windblade uses logical properties and values only.

All properties that can be customized on multiple axis/edges/corenrs can be prepended with:
- \`-b\` for block axis (e.g. \`size-b\`).
- \`-i\` for inline axis (e.g. \`size-i\`).
- \`-bs\` and \`-be\` for block start and end edges.
- \`-is\` and \`-ie\` for inline start and end edges.
- \`-ss\` \`-se\` \`-es\` \`-ee\` for corners (start start, start end, end start & end end)

\`\`\`uno-html
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${ue.block}">ss</div>
  <div class="${ue.block}">bs</div>
  <div class="${ue.block}">se</div>

  <div class="${ue.block}">is</div>
  <div class="${ue.block}">center</div>
  <div class="${ue.block}">ie</div>

  <div class="${ue.block}">es</div>
  <div class="${ue.block}">be</div>
  <div class="${ue.block}">ee</div>
</div>
\`\`\`

Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. \`background-position\` with \`bg-{corner}\` utility).

If you are new to logical properties try playing with \`bg-gradient-to-{edge/corner}\` and see which way the gradient goes.

Please note that \`width\` and \`height\` are completely removed in favor of \`size-{axis}\`.
`,ja=za,Oa=()=>'# Using the $ syntax\n\nYou can grab relevant to the rule theme values prefixing them with `$`. This is especially useful inside brackets when you want to set custom values.\n\n```html\n<div class="grid grid-cols-[auto_$l_auto]"></div>\n<!-- This is a bad example because at the moment brackets have limited support and do not work in this case -->\n```\n\nYou can also use `$` to conveniently perform operations with your design tokens without breaking out of your design system or using `calc()`.\n\n```html\n<div class="p-s">\n  Label\n  <!-- Custom underline -->\n  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>\n</div>\n```\n',Ta=Oa,Ma=()=>`# Hover, focus and other states

Windblade does not come with functionality like hover or focus states. Please use Windblade together with unocss-preset-mini-variants (see "installation") if you need this functionality.
`,Aa=Ma,Wa=new Map([["Installation",_a],["Semantic colors",Ca],["Logical properties",ja],["$ syntax",Ta],["Hover, focus and other states",Aa]]),Ea=Wa,Ra=e=>`# Semantic colors

Colors in Windblade are based on the [OkLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) model and have a 'base' and one or more 'on' colors.

## Default colors

It is highly encouraged that you use your own colors, however, Windblade does come with a set of well-crafted example colors that are designed to demonstrate the semantic color system and were used to build this documnentation.

\`\`\`uno-html
<div class="grid grid-fit-cols-m gap-s.4">
  ${(()=>{const n=e.windblade.colors;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <div class="bg-${t} flex flex-col border border-color-surface rounded-s overflow-hidden font-bold">
          <h1 class="p-s">${t}</h1>
          <div class="size-b-px shrink-0 bg-fg-1 opacity-[0.1]"></div>
          <div class="size-b-full flex flex-col gap-s p-s">
            ${s.on.map((o,i)=>`<div class="text-fg-${i+1}">Fg-${i+1}</div>`).join("")}
          </div>
        </div>
      `).join(""):'<div class="theme-auto-20 font-bold">Error</div>'})()}
</div>
\`\`\`

## Custom colors

Add a color by specifying an object like the following:

\`\`\`ts
const theme: Theme = {
  windblade: {
    colors: {
      'mycolor': {
        base: { dark: { l: 0, c: 0 } },
        on: [
          { dark: { l: 1, c: 0 } },
        ],
      },
    },
  },
};
\`\`\`

Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.

\`\`\`ts
const theme: Theme = {
  windblade: {
    colors: {
      'myColor': {
        base: { dark: { l: 0, c: 0 }, light: { l: 0.9, c: 0.05 } }, // slightly more saturated and darker than it would be otherwise in light mode (1 - 0 = 1, we tell it to be 0.9)
        on: [
          { dark: { l: 1, c: 0 }, light: { a: 0.8 } }, // more transparent in light mode (80%)
        ],
      },
      'brandColor': {
        base: { dark: { l: 0.6, c: 0.3 }, light: { l: 0.6 } }, // has lightness 0.6 in both color schemes
        on: [
          { dark: { l: 0, c: 0 } },
        ],
      },
    },
  },
};
\`\`\`
`,Da=Ra,we={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},La=e=>`# Proportions

Proportions are used throughout the whole preset for size, duration, opacity, etc.

Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.

## Default proportions

By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.

\`\`\`uno-html
<table class="border-collapse">
  <tr class="${we.tr}">
    <th class="${we.th}">Name</th>
    <th class="${we.th}">Value</th>
    <th class="${we.th}"></th>
  </tr>
  ${(()=>{const n=e.windblade.proportions;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <tr class="${we.tr}">
          <td class="${we.td} font-semibold">${t}</td>
          <td class="${we.td} text-fg-4">${s}</td>
          <td class="${we.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
        </tr>
      `).join(""):""})()}
</table>
\`\`\`

## Custom proportions

Add custom proportions by adding numbers like the following:

\`\`\`ts
const theme: Theme = {
  windblade: {
    proportions: {
      'half': 0.5,
      'full': 1,
      'double': 2,
    },
  },
};
\`\`\`

Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.
`,Na=La,Ua=()=>`# Other theme objects

See the theme type below for other values you can customize.

## Theme type

\`\`\`ts
type ThemeColor = {
  dark: {
    l: number;
    c: number;
    a?: number;
  };
  light?: {
    l?: number;
    c?: number;
    a?: number;
  }
};

type ThemeColorCombo = {
  base: ThemeColor;
  on: ThemeColor[];
};

type Theme = {
  windblade: {
    colors: Record<string, ThemeColorCombo>;
    miscColors?: Record<string, string>;
    proportions: Record<string, number>;
    miscSizes?: Record<string, string>;
    time: {
      baseUnitMs: number;
      functions: Record<string, string> & {
        default: string;
      };
    };
  };
};
\`\`\`
`,Fa=Ua,Ba=new Map([["Semantic Colors",Da],["Proportions",Na],["Other",Fa]]),Ha=Ba,Ia=new Map([["Usage",Ea],["Theme",Ha],...ka]),Mn=Ia;function Ga(e){const n=e.length;let t=-1,s,o="";const i=e.charCodeAt(0);for(;++t<n;){if(s=e.charCodeAt(t),s===0){o+="\uFFFD";continue}if(s===44){o+="\\,";continue}if(s>=1&&s<=31||s===127||t===0&&s>=48&&s<=57||t===1&&s>=48&&s<=57&&i===45){o+=`\\${s.toString(16)} `;continue}if(t===0&&n===1&&s===45){o+=`\\${e.charAt(t)}`;continue}if(s>=128||s===45||s===95||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){o+=e.charAt(t);continue}o+=`\\${e.charAt(t)}`}return o}const Rt=Ga;function ne(e=[]){return Array.isArray(e)?e:[e]}function $t(e){return Array.from(new Set(e))}function ee(e){return typeof e=="string"}function Ye(e){return ee(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(n=>n[1]!=null)}function Va(e){return Array.isArray(e)?e.find(n=>!Array.isArray(n)||Array.isArray(n[0]))?e.map(n=>Ye(n)):[e]:[Ye(e)]}function qa(e){return e.filter(([n,t],s)=>{if(n.startsWith("$$"))return!1;for(let o=s-1;o>=0;o--)if(e[o][0]===n&&e[o][1]===t)return!1;return!0})}function Dt(e){return e==null?"":qa(e).map(([n,t])=>t!=null?`${n}:${t};`:void 0).filter(Boolean).join("")}function et(e){return e&&typeof e=="object"&&!Array.isArray(e)}function hs(e,n){const t=e,s=n;if(Array.isArray(t))return[...s];const o={...t};return et(t)&&et(s)&&Object.keys(s).forEach(i=>{et(t[i])&&et(s[i])||Array.isArray(t[i])&&Array.isArray(s[i])?o[i]=hs(t[i],s[i]):Object.assign(o,{[i]:s[i]})}),o}function st(e){let n,t,s;if(Array.isArray(e)){for(t=Array(n=e.length);n--;)t[n]=(s=e[n])&&typeof s=="object"?st(s):s;return t}if(Object.prototype.toString.call(e)==="[object Object]"){t={};for(n in e)n==="__proto__"?Object.defineProperty(t,n,{value:st(e[n]),configurable:!0,enumerable:!0,writable:!0}):t[n]=(s=e[n])&&typeof s=="object"?st(s):s;return t}return e}function Pa(e){return ee(e[0])}function Ya(e){return ee(e[0])}const Ja=/[\w\u00A0-\uFFFF-_:%-?]/,An="$$shortcut-no-merge";function Xa(e=""){return Ja.test(e)}function Ka(e){return typeof e=="function"?{match:e}:e}function Wn(e){return e.length===3}function Qa(e){return e!=null}function Za(){}class ec{constructor(){this._map=new Map}get(n,t){const s=this._map.get(n);if(s)return s.get(t)}getFallback(n,t,s){let o=this._map.get(n);return o||(o=new Map,this._map.set(n,o)),o.has(t)||o.set(t,s),o.get(t)}set(n,t,s){let o=this._map.get(n);return o||(o=new Map,this._map.set(n,o)),o.set(t,s),this}has(n,t){var s;return(s=this._map.get(n))==null?void 0:s.has(t)}delete(n,t){var s;return((s=this._map.get(n))==null?void 0:s.delete(t))||!1}deleteTop(n){return this._map.delete(n)}map(n){return Array.from(this._map.entries()).flatMap(([t,s])=>Array.from(s.entries()).map(([o,i])=>n(i,t,o)))}}const tt={};function tc(e=["-",":"]){const n=e.join("|");return tt[n]||(tt[n]=new RegExp(`((?:[!@\\w+:_/-]|\\[&?>?:?.*\\])+?)(${n})\\(((?:[~!\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),tt[n].lastIndex=0,tt[n]}function nc(e,n=["-",":"],t=5){const s=tc(n);let o=!1,i=e.toString();do{const r=i;i=i.replace(s,(l,a,c,d)=>n.includes(c)?d.split(/\s/g).filter(Boolean).map(u=>u==="~"?a:u.replace(/^(!?)(.*)/,`$1${a}${c}$2`)).join(" "):l),o=i!==r,t-=1}while(o&&t);return typeof e=="string"?i:e.length()?e.overwrite(0,e.length(),i):e}const En=new Set;function sc(e){En.has(e)||(console.warn("[unocss]",e),En.add(e))}const oc=/\\?[\s'"`;{}]+/g,gs=/\[(\\\W|[\w-])+:['"]?\S+?['"]?\]/g,ic=new RegExp(`^${gs.source}$`),rc=e=>{var t;const n=new Set;for(const s of e.matchAll(gs))!((t=e[s.index-1])!=null&&t.match(/^[\s'"`]/))||n.add(s[0]);return e.split(oc).forEach(s=>{Xa(s)&&!ic.test(s)&&n.add(s)}),[...n]},lc={name:"split",order:0,extract({code:e}){return rc(e)}};function ac(){return{events:{},emit(e,...n){(this.events[e]||[]).forEach(t=>t(...n))},on(e,n){return(this.events[e]=this.events[e]||[]).push(n),()=>this.events[e]=(this.events[e]||[]).filter(t=>t!==n)}}}const Pt="default",Yt="preflights",cc="shortcuts",dc={[Yt]:-100,[cc]:-10,[Pt]:0};function ms(e){return ne(e).flatMap(n=>Array.isArray(n)?[n]:Object.entries(n))}function uc(e){var t;const n=e.shortcuts?ms(e.shortcuts):void 0;if(e.shortcuts=n,e.prefix||e.layer){const s=o=>{o[2]||(o[2]={});const i=o[2];i.prefix==null&&e.prefix&&(i.prefix=ne(e.prefix)),i.layer==null&&e.layer&&(i.layer=e.layer)};n==null||n.forEach(s),(t=e.rules)==null||t.forEach(s)}return e}function Rn(e={},n={}){const t=Object.assign({},n,e),s=(t.presets||[]).flatMap(ne).map(uc),o=[...s.filter(g=>g.enforce==="pre"),...s.filter(g=>!g.enforce),...s.filter(g=>g.enforce==="post")],i=Object.assign(dc,...s.map(g=>g.layers),e.layers);function r(g){return $t([...o.flatMap(y=>ne(y[g]||[])),...ne(t[g]||[])])}const l=r("extractors");l.length||l.push(lc),l.sort((g,y)=>(g.order||0)-(y.order||0));const a=r("rules"),c={},d=a.length,u=a.map((g,y)=>{var v;if(Pa(g)){ne(((v=g[2])==null?void 0:v.prefix)||"").forEach(m=>{c[m+g[0]]=[y,g[1],g[2],g]});return}return[y,...g]}).filter(Boolean).reverse(),f=st([...o.map(g=>g.theme||{}),t.theme||{}].reduce((g,y)=>hs(g,y),{}));r("extendTheme").forEach(g=>g(f));const b={templates:$t(o.map(g=>{var y;return ne((y=g.autocomplete)==null?void 0:y.templates)}).flat()),extractors:o.map(g=>{var y;return ne((y=g.autocomplete)==null?void 0:y.extractors)}).flat().sort((g,y)=>(g.order||0)-(y.order||0))};let p=ne(r("separators"));return p.length||(p=[":","-"]),{mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:g=>g,...t,presets:o,envMode:t.envMode||"build",shortcutsLayer:t.shortcutsLayer||"shortcuts",layers:i,theme:f,rulesSize:d,rulesDynamic:u,rulesStaticMap:c,preprocess:r("preprocess"),postprocess:r("postprocess"),preflights:r("preflights"),autocomplete:b,variants:r("variants").map(Ka),shortcuts:ms(r("shortcuts")).reverse(),extractors:l,safelist:r("safelist"),separators:p}}const fc="0.49.1";class hc{constructor(n={},t={}){this.userConfig=n,this.defaults=t,this.version=fc,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=ac(),this.config=Rn(n,t),this.events.emit("config",this.config)}setConfig(n,t){!n||(t&&(this.defaults=t),this.userConfig=n,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=Rn(n,this.defaults),this.events.emit("config",this.config))}async applyExtractors(n,t,s=new Set){const o={get original(){return n},code:n,id:t};for(const i of this.config.extractors){const r=await i.extract(o);if(r)for(const l of r)s.add(l)}return s}makeContext(n,t){const s={rawSelector:n,currentSelector:t[1],theme:this.config.theme,generator:this,variantHandlers:t[2],constructCSS:(...o)=>this.constructCustomCSS(s,...o),variantMatch:t};return s}async parseToken(n,t){var c;if(this.blocked.has(n))return;const s=`${n}${t?` ${t}`:""}`;if(this._cache.has(s))return this._cache.get(s);let o=n;for(const d of this.config.preprocess)o=d(n);if(this.isBlocked(o)){this.blocked.add(n),this._cache.set(s,null);return}const i=this.matchVariants(n,o);if(!i||this.isBlocked(i[1])){this.blocked.add(n),this._cache.set(s,null);return}const r=this.makeContext(n,[t||i[0],i[1],i[2],i[3]]);this.config.details&&(r.variants=[...i[3]]);const l=this.expandShortcut(r.currentSelector,r),a=l?await this.stringifyShortcuts(r.variantMatch,r,l[0],l[1]):(c=await this.parseUtil(r.variantMatch,r))==null?void 0:c.map(d=>this.stringifyUtil(d,r)).filter(Qa);if(a!=null&&a.length)return this._cache.set(s,a),a;this._cache.set(s,null)}async generate(n,t={}){const{id:s,scope:o,preflights:i=!0,safelist:r=!0,minify:l=!1}=t,a=ee(n)?await this.applyExtractors(n,s):Array.isArray(n)?new Set(n):n;r&&this.config.safelist.forEach(m=>a.add(m));const c=l?"":`
`,d=new Set([Pt]),u=new Set,f=new Map;let b={};const p=Array.from(a).map(async m=>{var k;if(u.has(m))return;const h=await this.parseToken(m);if(h!=null){u.add(m);for(const C of h){const j=C[3]||"",A=(k=C[4])==null?void 0:k.layer;f.has(j)||f.set(j,[]),f.get(j).push(C),A&&d.add(A)}}});await Promise.all(p),await(async()=>{if(!i)return;const m={generator:this,theme:this.config.theme},h=new Set([]);this.config.preflights.forEach(({layer:k=Yt})=>{d.add(k),h.add(k)}),b=Object.fromEntries(await Promise.all(Array.from(h).map(async k=>{const j=(await Promise.all(this.config.preflights.filter(A=>(A.layer||Yt)===k).map(async A=>await A.getCSS(m)))).filter(Boolean).join(c);return[k,j]})))})();const g=this.config.sortLayers(Array.from(d).sort((m,h)=>{var k,C;return((k=this.config.layers[m])!=null?k:0)-((C=this.config.layers[h])!=null?C:0)||m.localeCompare(h)})),y={},v=m=>{if(y[m])return y[m];let h=Array.from(f).sort((C,j)=>{var A,L,O;return((A=this.parentOrders.get(C[0]))!=null?A:0)-((L=this.parentOrders.get(j[0]))!=null?L:0)||((O=C[0])==null?void 0:O.localeCompare(j[0]||""))||0}).map(([C,j])=>{const A=j.length,L=j.filter(T=>{var N;return(((N=T[4])==null?void 0:N.layer)||Pt)===m}).sort((T,N)=>{var z,K,Q,Y;return T[0]-N[0]||(((z=T[4])==null?void 0:z.sort)||0)-(((K=N[4])==null?void 0:K.sort)||0)||((Q=T[1])==null?void 0:Q.localeCompare(N[1]||""))||((Y=T[2])==null?void 0:Y.localeCompare(N[2]||""))||0}).map(([,T,N,,z,,K])=>{var Y;const Q=T&&bc(T,o);return[[[Q!=null?Q:"",(Y=z==null?void 0:z.sort)!=null?Y:0]],N,!!(K!=null?K:z==null?void 0:z.noMerge)]});if(!L.length)return;const O=L.reverse().map(([T,N,z],K)=>{if(!z&&this.config.mergeSelectors)for(let Y=K+1;Y<A;Y++){const Z=L[Y];if(Z&&!Z[2]&&(T&&Z[0]||T==null&&Z[0]==null)&&Z[1]===N)return T&&Z[0]&&Z[0].push(...T),null}const Q=T?$t(T.sort((Y,Z)=>{var ze;return Y[1]-Z[1]||((ze=Y[0])==null?void 0:ze.localeCompare(Z[0]||""))||0}).map(Y=>Y[0]).filter(Boolean)):[];return Q.length?`${Q.join(`,${c}`)}{${N}}`:N}).filter(Boolean).reverse().join(c);if(!C)return O;const W=C.split(" $$ ");return`${W.join("{")}{${c}${O}${c}}${W.map(T=>"").join("}")}`}).filter(Boolean).join(c);i&&(h=[b[m],h].filter(Boolean).join(c));const k=l?"":`/* layer: ${m} */${c}`;return y[m]=h?k+h:""},x=(m=g,h)=>m.filter(k=>!(h!=null&&h.includes(k))).map(k=>v(k)||"").filter(Boolean).join(c);return{get css(){return x()},layers:g,matched:u,getLayers:x,getLayer:v}}matchVariants(n,t){const s=new Set,o=[];let i=t||n,r=!1;const l={rawSelector:n,theme:this.config.theme,generator:this};for(;;){r=!1;for(const a of this.config.variants){if(!a.multiPass&&s.has(a))continue;let c=a.match(i,l);if(!!c){ee(c)&&(c={matcher:c}),i=c.matcher,o.unshift(c),s.add(a),r=!0;break}}if(!r)break;if(o.length>500)throw new Error(`Too many variants applied to "${n}"`)}return[n,i,o,s]}applyVariants(n,t=n[4],s=n[1]){const i=t.slice().sort((c,d)=>(c.order||0)-(d.order||0)).reduceRight((c,d)=>u=>{var p,g,y;const f=((p=d.body)==null?void 0:p.call(d,u.entries))||u.entries,b=Array.isArray(d.parent)?d.parent:[d.parent,void 0];return((g=d.handle)!=null?g:wc)({...u,entries:f,selector:((y=d.selector)==null?void 0:y.call(d,u.selector,f))||u.selector,parent:b[0]||u.parent,parentOrder:b[1]||u.parentOrder,layer:d.layer||u.layer,sort:d.sort||u.sort},c)},c=>c)({prefix:"",selector:$c(s),pseudo:"",entries:n[2]}),{parent:r,parentOrder:l}=i;r!=null&&l!=null&&this.parentOrders.set(r,l);const a={selector:vc([i.prefix,i.selector,i.pseudo].join("")),entries:i.entries,parent:r,layer:i.layer,sort:i.sort,noMerge:i.noMerge};for(const c of this.config.postprocess)c(a);return a}constructCustomCSS(n,t,s){const o=Ye(t);if(ee(o))return o;const{selector:i,entries:r,parent:l}=this.applyVariants([0,s||n.rawSelector,o,void 0,n.variantHandlers]),a=`${i}{${Dt(r)}}`;return l?`${l}{${a}}`:a}async parseUtil(n,t,s=!1,o){var d,u;const[i,r,l]=ee(n)?this.matchVariants(n):n;this.config.details&&(t.rules=(d=t.rules)!=null?d:[]);const a=this.config.rulesStaticMap[r];if(a&&a[1]&&(s||!((u=a[2])!=null&&u.internal))){this.config.details&&t.rules.push(a[3]);const f=a[0],b=Ye(a[1]),p=a[2];return ee(b)?[[f,b,p]]:[[f,i,b,p,l]]}t.variantHandlers=l;const{rulesDynamic:c}=this.config;for(const[f,b,p,g]of c){if((g==null?void 0:g.internal)&&!s)continue;let y=r;if(g!=null&&g.prefix){const h=ne(g.prefix);if(o){const k=ne(o);if(!h.some(C=>k.includes(C)))continue}else{const k=h.find(C=>r.startsWith(C));if(k==null)continue;y=r.slice(k.length)}}const v=y.match(b);if(!v)continue;const x=await p(v,t);if(!x)continue;this.config.details&&t.rules.push([b,p,g]);const m=Va(x).filter(h=>h.length);if(m.length)return m.map(h=>ee(h)?[f,h,g]:[f,i,h,g,l])}}stringifyUtil(n,t){var p;if(!n)return;if(Wn(n))return[n[0],void 0,n[1],void 0,n[2],this.config.details?t:void 0,void 0];const{selector:s,entries:o,parent:i,layer:r,sort:l,noMerge:a}=this.applyVariants(n),c=Dt(o);if(!c)return;const{layer:d,sort:u,...f}=(p=n[3])!=null?p:{},b={...f,layer:r!=null?r:d,sort:l!=null?l:u};return[n[0],s,c,i,b,this.config.details?t:void 0,a]}expandShortcut(n,t,s=5){var l;if(s===0)return;const o=this.config.details?a=>{var c;t.shortcuts=(c=t.shortcuts)!=null?c:[],t.shortcuts.push(a)}:Za;let i,r;for(const a of this.config.shortcuts){let c=n;if((l=a[2])!=null&&l.prefix){const u=ne(a[2].prefix).find(f=>n.startsWith(f));if(u==null)continue;c=n.slice(u.length)}if(Ya(a)){if(a[0]===c){i=i||a[2],r=a[1],o(a);break}}else{const d=c.match(a[0]);if(d&&(r=a[1](d,t)),r){i=i||a[2],o(a);break}}}if(ee(r)&&(r=nc(r.trim()).split(/\s+/g)),!r){const[a,c]=ee(n)?this.matchVariants(n):n;if(a!==c){const d=this.expandShortcut(c,t,s-1);d&&(r=d[0].map(u=>ee(u)?a.replace(c,u):u))}}if(!!r)return[r.flatMap(a=>{var c;return(ee(a)?(c=this.expandShortcut(a,t,s-1))==null?void 0:c[0]:void 0)||[a]}).filter(Boolean),i]}async stringifyShortcuts(n,t,s,o={layer:this.config.shortcutsLayer}){var d;const i=new ec,r=(await Promise.all($t(s).map(async u=>{const f=ee(u)?await this.parseUtil(u,t,!0,o.prefix):[[1/0,"{inline}",Ye(u),void 0,[]]];return f||sc(`unmatched utility "${u}" in shortcut "${n[1]}"`),f||[]}))).flat(1).filter(Boolean).sort((u,f)=>u[0]-f[0]),[l,,a]=n,c=[];for(const u of r){if(Wn(u)){c.push([u[0],void 0,u[1],void 0,u[2],t,void 0]);continue}const{selector:f,entries:b,parent:p,sort:g,noMerge:y}=this.applyVariants(u,[...u[4],...a],l);i.getFallback(f,p,[[],u[0]])[0].push([b,!!(y!=null?y:(d=u[3])==null?void 0:d.noMerge),g!=null?g:0])}return c.concat(i.map(([u,f],b,p)=>{const g=(v,x,m)=>{const h=Math.max(...m.map(C=>C[1])),k=m.map(C=>C[0]);return(v?[k.flat(1)]:k).map(C=>{const j=Dt(C);if(j)return[f,b,j,p,{...o,noMerge:x,sort:h},t,void 0]})};return[[u.filter(([,v])=>v).map(([v,,x])=>[v,x]),!0],[u.filter(([,v])=>!v).map(([v,,x])=>[v,x]),!1]].map(([v,x])=>[...g(!1,x,v.filter(([m])=>m.some(h=>h[0]===An))),...g(!0,x,v.filter(([m])=>m.every(h=>h[0]!==An)))])}).flat(2).filter(Boolean))}isBlocked(n){return!n||this.config.blocklist.some(t=>ee(t)?t===n:t.test(n))}}function gc(e,n){return new hc(e,n)}const mc=/\s\$\$\s+/g,pc=e=>e.match(/\s\$\$\s/);function bc(e,n){return pc(e)?e.replace(mc,n?` ${n} `:" "):n?`${n} ${e}`:e}function vc(e){const n=e.match(/::[\w-]+(\([\w-]+\))?/g);if(n){for(const t of n)e=e.replace(t,"");e+=n.join("")}return e}const Dn=/^\[(.+?)(~?=)"(.*)"\]$/;function $c(e){return Dn.test(e)?e.replace(Dn,(n,t,s,o)=>`[${Rt(t)}${s}"${Rt(o)}"]`):`.${Rt(e)}`}function wc(e,n){return n(e)}const yc={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}},D={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},B=e=>e.filter(Boolean).join("-"),Jt=(e,n,t,s,o)=>[o(B([e,n]),B([t,s])),o(B([e,"b",n]),B([t,"block",s])),o(B([e,"i",n]),B([t,"inline",s]))],Xt=(e,n,t,s,o)=>[o(B([e,n]),B([t,s])),o(B([e,"b",n]),B([t,"block",s])),o(B([e,"bs",n]),B([t,"block-start",s])),o(B([e,"be",n]),B([t,"block-end",s])),o(B([e,"i",n]),B([t,"inline",s])),o(B([e,"is",n]),B([t,"inline-start",s])),o(B([e,"ie",n]),B([t,"inline-end",s]))],Kt=(e,n,t,s,o)=>[o(B([e,n]),B([t,s])),o(B([e,"ss",n]),B([t,"start-start",s])),o(B([e,"se",n]),B([t,"start-end",s])),o(B([e,"ee",n]),B([t,"end-end",s])),o(B([e,"es",n]),B([t,"end-start",s]))],ps=(e,n,t)=>{var l;let s=n.windblade.proportions[e];if(s!==void 0)return`${s}${t}`;let o=(l=n.windblade.miscSizes)==null?void 0:l[e];if(o!==void 0)return`${o}`;let i=e;for(Object.entries(n.windblade.proportions).forEach(([a,c])=>{i=i.replaceAll(`$${a}`,c.toString())});i.includes("$(");){let a=i.indexOf("$")+1,c=i.substring(a),d=0,u=d,f=0;for(let p=0;p<c.length;++p)if(c[p]==="("&&++f,c[p]===")"&&--f,f===0){u=p+1;break}const b=c.substring(d,u);i=i.replace(`$${b}`,Function(`'use strict'; return (${b})`)())}const r=os.bracket(i);if(r!==void 0)return r;if(!Number.isNaN(Number(i)))return`${i}${t}`},M=(e,n,t)=>[new RegExp(`^${e}-(.+)$`),(s,{theme:o})=>{var r;let i=ps(s[1],o,(r=t==null?void 0:t.defaultUnit)!=null?r:"rem");if(i!==void 0)return t!=null&&t.postprocess&&(i=t.postprocess(i)),{[n]:i}}],on=(e,n,t,s)=>Jt(e,n,t,s,M),Re=(e,n,t,s)=>Xt(e,n,t,s,M),kc=(e,n,t,s)=>Kt(e,n,t,s,M),bs=()=>({rules:[[new RegExp("^(aspect)-(.+)$"),t=>{if(!t[2].includes(":"))return{"aspect-ratio":t[2]}}]],docs:{description:"Windblade uses CSS ratios instead of presets.",utilities:["aspect-<ratio>"],preview:t=>"TODO"}}),vs=()=>({rules:[],docs:{description:"Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.",utilities:[]}}),$s=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-after-${s}`,{"break-after":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-after-${s}`)};return{rules:n,docs:t}},ws=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-before-${s}`,{"break-before":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-before-${s}`)};return{rules:n,docs:t}},ys=()=>{const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"];return{rules:e.map(s=>[`${s}`,{display:s}]),docs:{description:"Windblade removes some utilities from this group that cannot be sued semantically.",utilities:e,preview:s=>{switch(s){default:return`
            <div>
              <div class="bg-accent p-s rounded-s.4 ${s}">1</div>
              <div class="bg-accent p-s rounded-s.4 ${s}">2</div>
              <div class="bg-accent p-s rounded-s.4 ${s}">3</div>
            </div>
          `}}}}},ks=()=>{const e=[...Se(D.edges).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),...Se(D.coners).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),["object-center",{"object-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(D.edges),...Object.keys(D.coners),"center"].map(t=>`object-${t}`),preview:t=>`
      <img alt="Random demo" src="https://picsum.photos/600/400" class="rounded-s.4 max-size-i-l.2 object-none ${t}">
    `};return{rules:e,docs:n}},xc=new Map([["Aspect Ratio",bs()],["Container",vs()],["Break After",$s()],["Break Before",ws()],["Disaply",ys()],["Object Position",ks()]]),_c=xc,xs=(e,n)=>()=>{const t=[[`auto-${e}-auto`,{["grid-auto-"+n]:"auto"}],[`auto-${e}-fr`,{["grid-auto-"+n]:"minmax(0, 1fr)"}],M(`auto-${e}`,`grid-auto-${n}`)],s={description:"Added utilities for controlling the size of implicitly-created grid columns with proportion units.",utilities:[`auto-${e}-auto`,`auto-${e}-fr`,`auto-${e}-<theme.windblade.proportions>`],preview:o=>`
      <div class="grid ${o} ${o.includes("cols")?"grid-flow-col":""} gap-s bg-accent-3 rounded-s.4 size-i-full">
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">01</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">02</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">03</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">04</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">05</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">06</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">07</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">08</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">09</div>
      </div>
    `};return{rules:t,docs:s}},_s=xs("cols","columns"),Ss=xs("rows","rows"),Ot=(e,n,t)=>()=>{const s=[M(`grid-${e}-${n}s`,`grid-template-${t}s`,{postprocess:i=>`repeat(auto-fit, minmax(${i}, 1fr))`})],o={description:`Utilities specifying the columns in a grid layout using auto-${e}. Missing from Tailwind.`,utilities:[`grid-${e}-${n}s-<theme.windblade.proportions>`],preview:i=>`
      <div class="grid ${i} ${i.includes("cols")?"":"grid-flow-col"} gap-s bg-accent-3 rounded-s.4 size-i-full">
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">01</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">02</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">03</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">04</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">05</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">06</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">07</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">08</div>
        <div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">09</div>
      </div>
    `};return{rules:s,docs:o}},Cs=Ot("fit","col","column"),zs=Ot("fill","col","column"),js=Ot("fit","row","row"),Os=Ot("fill","row","row"),Sc=new Map([["Grid Auto Columns",_s()],["Grid Auto Rows",Ss()],["Grid Fit Columns",Cs()],["Grid Fit Rows",js()],["Grid Fill Clumns",zs()],["Grid Fill Rows",Os()]]),Cc=Sc,Ts=()=>{const e=Re("p","","padding",""),n={description:"Replaced physical properties with logical.",utilities:["p",...Object.keys(D.axis).map(t=>`p-${t}`),...Object.keys(D.edges).map(t=>`p-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="${t} rounded-s bg-accent">
        <div class="border border-dashed rounded-s.2">${t}</div>
      </div>
    `};return{rules:e,docs:n}},Ms=()=>{const e=Re("m","","margin",""),n={description:"Replaced physical properties with logical.",utilities:["m",...Object.keys(D.axis).map(t=>`m-${t}`),...Object.keys(D.edges).map(t=>`m-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="border border-dashed border-color-accent rounded-s.2">
        <div class="${t} p-s rounded-s bg-accent">${t}</div>
      </div>
    `};return{rules:e,docs:n}},As=()=>({rules:[],docs:{description:"Removed this. Please use gap and flex/grid/columns instead",utilities:[]}}),zc=new Map([["Padding",Ts()],["Margin",Ms()],["Space between",As()]]),jc=zc,Ws=()=>({rules:[],docs:{description:"Removed this, as well as min and max variants, in favor of the size counterparts",utilities:[]}}),Es=()=>{const e=on("size","","","size"),n={description:"Utilities for setting the size of an element. Missing from Tailwind.",utilities:[...Object.keys(D.axis).map(t=>`size-${t}-<theme.windblade.sizes>`)],preview:t=>`
      <div class="${t} ${t.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
    `};return{rules:e,docs:n}},Rs=e=>`
  <div class="${e} ${e.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`,Ds=()=>{const e=on("min-size","","min","size"),n={description:"Utilities for setting the minimum size of an element. Missing from Tailwind.",utilities:Object.keys(D.axis).map(t=>`min-size-${t}-<theme.windblade.proportions>`),preview:Rs};return{rules:e,docs:n}},Ls=()=>{const e=on("max-size","","max","size"),n={description:"Utilities for setting the maximum size of an element. Missing from Tailwind.",utilities:Object.keys(D.axis).map(t=>`max-size-${t}-<theme.windblade.proportions>`),preview:Rs};return{rules:e,docs:n}},Oc=new Map([["Width & Height",Ws()],["Size",Es()],["Min-Size",Ds()],["Max-Size",Ls()]]),Tc=Oc,le=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var o;if((o=s.windblade.miscColors)!=null&&o[t[2]])return{[n]:t[2]};if(s.windblade.colors[t[2]])return{[n]:`var(--${t[2]}-base)`}}],Mc=e=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:t})=>{const s=t.windblade.colors[n[2]];if(!s)return;const o={background:`var(--${n[2]}-base)`,color:`var(--${n[2]}-fg-1)`};for(let i=1;i<=s.on.length;++i)o[`--fg-${i}`]=`var(--${n[2]}-fg-${i})`;return o}],Ce=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var o;return(o=s.windblade.miscColors)!=null&&o[t[2]]?{[n]:t[2]}:{[n]:`var(--fg-${t[2]})`}}],Ns=()=>({rules:[le("bg","background-color"),Mc("bg"),Ce("bg-fg","background-color")],docs:{description:"Windblade uses semantic colors.",utilities:["bg-<theme.windblade.colors>","bg-<theme.windblade.miscColors>","bg-fg-<integer>"],preview:t=>t.startsWith("bg-fg")?`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full ${t}"></div>
          </div>
        `:`
          <div class="${t} size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s flex items-center justify-center text-center">
            ${t}
          </div>
        `}}),Us=()=>{const e=[...Se(D.edges).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),...Se(D.coners).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),["bg-center",{"background-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(D.edges),...Object.keys(D.coners),"center"].map(t=>`bg-${t}`),preview:t=>`
      <div class="${t} rounded-s.4 size-i-full max-size-i-l.2 aspect-10/6" style="background-image: url('https://picsum.photos/600/400')"></div>
    `};return{rules:e,docs:n}},Fs=()=>{const e=[["bg-none",{"background-image":"none"}],...dt(D.edges).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${D.edges[t]}), var(--wb-gradient-stops))`}]),...dt(D.coners).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${D.coners[t]}), var(--wb-gradient-stops))`}])],n={description:"Repalced static colors with sematic colors.",utilities:["bg-none",...Object.keys(D.edges).map(t=>`bg-gradient-to-${t}`),...Object.keys(D.coners).map(t=>`bg-gradient-to-${t}`)],preview:t=>`
      <div class="${t} from-accent size-i-full size-b-l.2 rounded-s"></div>
    `};return{rules:e,docs:n}},Bs=()=>({rules:[le("from","--wb-gradient-from"),le("to","--wb-gradient-to")],docs:{description:"Repalced static colors with sematic colors. Temporarily missing the 'via' utilities.",utilities:["from-<theme.windblade.colors>","from-<theme.windblade.miscColors>","to-<theme.windblade.colors>","to-<theme.windblade.miscColors>"],preview:t=>`
      <div class="bg-gradient-to-ie ${t} ${t.startsWith("from")?"to-accent-2":"from-accent-2"} size-i-full size-b-l.2 rounded-s"></div>
    `}}),Ac=new Map([["Color",Ns()],["Background Position",Us()],["Background Image",Fs()],["Gradient Color Stops",Bs()]]),Wc=Ac,Hs=()=>({rules:[],docs:{description:"Font family utilities have been removed.",utilities:[]}}),Is=()=>({rules:[M("text","font-size")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["text-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Gs=()=>({rules:[],docs:{description:"Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.",utilities:[]}}),Vs=()=>({rules:[M("tracking","letter-spacing",{defaultUnit:"em"})],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["tracking-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),qs=()=>({rules:[M("leading","line-height",{defaultUnit:""})],docs:{description:"Windblade proportions are used instead of separate size values. Setting line height in rem units is not possible at the moment.",utilities:["leading-<theme.windblade.proportions>"],preview:t=>`<div class="${t} text-center" style="max-inline-size: 36ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<div>`}}),Ps=()=>({rules:[le("text","color"),Ce("text-fg","color")],docs:{description:"Windblade uses semantic colors.",utilities:["text-<theme.windblade.colors>","text-<theme.windblade.miscColors>","text-fg-<integer>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Ys=()=>({rules:[le("decoration","text-decoration-color"),Ce("decoration-fg","text-decoration-color")],docs:{description:"Windblade uses semantic colors.",utilities:["decoration-<theme.windblade.colors>","decoration-<theme.windblade.miscColors>","decoration-fg-<integer>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Js=()=>({rules:[["decoration-from-font",{"text-decoration-thickness":"from-font"}],M("decoration","text-decoration-thickness")],docs:{description:"Windblade proportions are used instead of separate thickness values.",utilities:["decoration-from-font","decoration-<theme.windblade.proportions>","decoration-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Xs=()=>({rules:[M("underline-offset","text-underline-offset")],docs:{description:"Windblade proportions are used instead of separate ofset values.",utilities:["underline-offset-<theme.windblade.proportions>","underline-offset-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Ec=new Map([["Font Family",Hs()],["Font Size",Is()],["Font Smoothing",Gs()],["Letter Spacing",Vs()],["Line Height",qs()],["Text Color",Ps()],["Text Decoration Color",Ys()],["Text Decoration Thickness",Js()],["Text Underline Offset",Xs()]]),Rc=Ec,Ks=()=>{const e=[...kc("rounded","","border","radius"),...Kt("rounded","full","border","radius",(t,s)=>[t,{[s]:"99999px"}]),...Kt("rounded","none","border","radius",(t,s)=>[t,{[s]:"none"}])],n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["rounded",...Object.keys(D.coners).map(t=>`rounded-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-full`,`${t}-none`]),preview:t=>`
      <div class="${t} size-i-full max-size-i-l.2 aspect-1/1 bg-accent"></div>
    `};return{rules:e,docs:n}},Qs=()=>{const e=Re("border","","border","width"),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["border",...Object.keys(D.axis).map(t=>`border-${t}`),...Object.keys(D.edges).map(t=>`border-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>`
      <div class="border border-color-accent ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},Zs=()=>{const e=[...Xt("border","color","border","color",le),...Xt("border","color-fg","border","color",Ce)],n={description:"Windblade uses semantic colors.",utilities:["border-color",...Object.keys(D.axis).map(t=>`border-${t}-color`),...Object.keys(D.edges).map(t=>`border-${t}-color`)].flatMap(t=>[`${t}-<theme.windblade.colors>`,`${t}-<theme.windblade.miscColors>`,`${t}-fg-<integer>`]),preview:t=>`
      <div class="border border-width-s.2 ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},eo=()=>({rules:[M("outline","outline-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["outline-<theme.windblade.proportions>","outline-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),Dc=()=>({rules:[le("outline","outline-color"),Ce("outline-fg","outline-color")],docs:{description:"Windblade uses semantic colors.",utilities:["outline-color-<theme.windblade.colors>","outline-color-<theme.windblade.miscColors>","outline-color-fg-<integer>"],preview:t=>"TODO"}}),to=()=>({rules:[M("outline-offset","outline-offset")],docs:{description:"Windblade proportions are used instead of separate offset values.",utilities:["outline-offset-<theme.windblade.proportions>","outline-offset-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),no=()=>({rules:[],docs:{description:"Divides have been removed.",utilities:[]}}),so=()=>({rules:[],docs:{description:"Rings have been removed.",utilities:[]}}),Lc=new Map([["Border Radius",Ks()],["Border Width",Qs()],["Border Color",Zs()],["Outline Width",eo()],["Outline Offset",to()],["Divide",no()],["Ring",so()]]),Nc=Lc,oo=()=>({rules:[],docs:{description:"Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),io=()=>({rules:[M("opacity","opacity",{defaultUnit:""})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:[]}}),Uc=new Map([["Box Shadow",oo()],["Opacity",io()]]),Fc=Uc,ro=()=>({rules:[],docs:{description:"Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),Bc=new Map([["Drop Shadow",ro()]]),Hc=Bc,lo=()=>({rules:[M("border-spacing","border-spacing")],docs:{description:"Changing border-spacing for individual axis is not possible at the moment.",utilities:["border-spacing-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Ic=new Map([["Border spacing",lo()]]),Gc=Ic,wt=(e,n,t)=>[new RegExp(`^(${e})-(.+)$`),(s,{theme:o})=>{var l;const i={};let r=o.windblade.proportions[s[2]]*o.windblade.time.baseUnitMs+"ms";if(r!==void 0)return i[n]=(l=t==null?void 0:t(r))!=null?l:r,i}],ao=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{const o={};let i=s.windblade.time.functions[t[2]];if(i!==void 0)return o[n]=i,o}],co=()=>({rules:[wt("duration","transition-duration"),wt("delay","transition-delay")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["duration-<theme.windblade.proportions>","delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),uo=()=>({rules:[ao("ease","transition-timing-function")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),fo=()=>({rules:[],docs:{description:"Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.",utilities:[]}}),ho=()=>({rules:[wt("animation-duration","animation-duration"),wt("animation-delay","animation-delay")],docs:{description:"Utilities for controlling the duration & delay of CSS animations. Missing from Tailwind.",utilities:["animation-duration-<theme.windblade.proportions>","animation-delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),go=()=>({rules:[ao("animation-ease","animation-timing-function")],docs:{description:"Utilities for controlling the easing of CSS animations. Missing from Tailwind.",utilities:["animation-ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),Vc=new Map([["Transition Delay & Duration",co()],["Transition Timing Function",uo()],["Animations",fo()],["Animation Delay & Duration",ho()],["Animation Timing Function",go()]]),qc=Vc,mo=()=>({rules:[M("scale","transform",{defaultUnit:"",postprocess:t=>`scale${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["scale-<theme.windblade.proportions>"],preview:t=>"TODO"}}),po=()=>({rules:[M("rotate","transform",{defaultUnit:"deg",postprocess:t=>`rotate${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["rotate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),bo=()=>({rules:[M("translate","transform",{postprocess:t=>`translate${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["translate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),vo=()=>({rules:[M("skew","transform",{defaultUnit:"deg",postprocess:t=>`skew${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["skew-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Pc=new Map([["Scale",mo()],["Rotate",po()],["Translate",bo()],["Skew",vo()]]),Yc=Pc,$o=()=>({rules:[le("accent","accent-color")],docs:{description:"Windblade uses semantic colors.",utilities:["accent-<theme.windblade.colors>","accent-<theme.windblade.miscColors>","accent-fg-<integer>"],preview:t=>"TODO"}}),wo=()=>({rules:[le("caret","caret-color"),Ce("caret-fg","caret-color")],docs:{description:"Windblade uses semantic colors.",utilities:["caret-<theme.windblade.colors>","caret-<theme.windblade.miscColors>","caret-fg-<integer>"],preview:t=>"TODO"}}),yo=()=>{const e=Re("scroll-m","","scroll-margin",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(D.axis).map(t=>`scroll-m-${t}`),...Object.keys(D.edges).map(t=>`scroll-m-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},ko=()=>{const e=Re("scroll-p","","scroll-padding",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(D.axis).map(t=>`scroll-p-${t}`),...Object.keys(D.edges).map(t=>`scroll-p-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},xo=()=>({rules:[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],docs:{description:"snap-x and snap-y have been removed because they have no logical counterparts yet.",utilities:["snap-none","snap-both","snap-mandatory","snap-proximity"],preview:t=>"TODO"}}),_o=()=>({rules:[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],docs:{description:"pan touch-actions have been removed because they have no logical counterparts yet.",utilities:["touch-auto","touch-none","touch-pinch-zoom","touch-manipulation"],preview:t=>"TODO"}}),Jc=new Map([["Accent color",$o()],["Caret color",wo()],["Scroll margin",yo()],["Scroll padding",ko()],["Scroll snap type",xo()],["Touch action",_o()]]),Xc=Jc,So=()=>({rules:[le("fill","fill"),Ce("fill-fg","fill")],docs:{description:"Windblade uses semantic colors.",utilities:["fill-<theme.windblade.colors>","fill-<theme.windblade.miscColors>","fill-fg-<integer>"],preview:t=>"TODO"}}),Co=()=>({rules:[le("stroke","stroke"),Ce("stroke-fg","stroke")],docs:{description:"Windblade uses semantic colors.",utilities:["stroke-<theme.windblade.colors>","stroke-<theme.windblade.miscColors>","stroke-fg-<integer>"],preview:t=>"TODO"}}),zo=()=>({rules:[M("stroke","stroke-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["stroke-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Kc=new Map([["Fill",So()],["Stroke Color",Co()],["Stroke Width",zo()]]),Qc=Kc,Zc=e=>{var o,i,r,l,a,c,d;const n=e.dark.l,t=e.dark.c,s=(o=e.dark.a)!=null?o:1;return{dark:{l:n,c:t,a:s},light:{l:(r=(i=e.light)==null?void 0:i.l)!=null?r:1-n,c:(a=(l=e.light)==null?void 0:l.c)!=null?a:t,a:(d=(c=e.light)==null?void 0:c.a)!=null?d:s}}},ed=(e,n)=>{const{windblade:t}=e,{colors:s}=t,o={light:{},dark:{}};return Object.entries(s).forEach(([i,r])=>{[r.base,...r.on].forEach((a,c)=>{const d=`--${i}-${c===0?"base":"fg-"+c}`,{dark:u,light:f}=Zc(a);o.dark[d]=vt.from(`oklch(${u.l} ${u.c}, ${n}, ${u.a})`).rgba,o.light[d]=vt.from(`oklch(${f.l} ${f.c}, ${n}, ${f.a})`).rgba})}),o},Ve=e=>{let n="";return Object.keys(e).forEach(t=>{n+=`${t}: ${e[t]};
`}),n},jo=()=>({rules:[[new RegExp(/^scheme-(dark|light|inverse|auto)-(\d+)$/),(t,{rawSelector:s,theme:o})=>{var c;const i=Number((c=t[2])!=null?c:0);if(Number.isNaN(i))return;const r=en(s),{dark:l,light:a}=ed(o,i);switch(t[1]){case"light":return`
              .${r} {
                ${Ve(a)}
              }
            `;case"dark":return`
              .${r} {
                ${Ve(l)}
              }
            `;default:return`
              .${r},
              .scheme-dark.${r},
              .scheme-dark .${r} {
                ${Ve(l)}
              }
              .scheme-light.${r},
              .scheme-light .${r} {
                ${Ve(a)}
              }
              @media (prefers-color-scheme: light) { .${r} {
                  ${Ve(a)}
                }
              }
            `}}]],docs:{description:"Utilities for switching color scheme. Missing from Tailwind.",utilities:["scheme-dark","scheme-light","scheme-auto-<integer>","scheme-dark-<integer>","scheme-light-<integer>"],preview:t=>"TODO"}}),td=new Map([["Color Scheme",jo()]]),nd=td,sd=new Map([["Layout",_c],["Flexbox & Grid",Cc],["Spacing",jc],["Sizing",Tc],["Background",Wc],["Typography",Rc],["Borders",Nc],["Effects",Fc],["Filters",Hc],["Tables",Gc],["Transitions & Animation",qc],["Transforms",Yc],["Interactivity",Xc],["SVG",Qc],["Accessibility",nd]]),od=sd,id=[...bs().rules,...vs().rules,[new RegExp("^(columns)-(.+)$"),(e,{theme:n})=>{const t=e[2].split(","),s=ps(t[0],n,"rem"),o=t[1];return{columns:[s,o].join(" ")}}],...$s().rules,...ws().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...ys().rules,...Object.keys(D.inlineEdges).map(e=>[`float-${e}`,{float:D.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(D.inlineEdges).map(e=>[`clear-${e}`,{clear:D.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...ks().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>Jt("overflow",e,"overflow","",(n,t)=>[n,{[t]:e}])),...["auto","contain","none"].flatMap(e=>Jt("overscroll",e,"overscroll-behavior","",(n,t)=>[n,{[t]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...Re("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e}]),[new RegExp("^z-(.+)$"),e=>({"z-index":e[2]})],M("basis","flex-basis"),...Re("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[new RegExp("^(order)-(.+)$"),e=>({order:e[2]})],["order-none",{order:"0"}],...[{ruleName:"col",cssName:"column"},{ruleName:"row",cssName:"row"}].flatMap(({cssName:e,ruleName:n})=>[[new RegExp(`^(grid-${n}s)-(.+)$`),t=>({["grid-template-"+e+"s"]:`repeat(${t[2]}, minmax(0, 1fr))`})],[`grid-${n}s-none`,{["grid-template-"+e+"s"]:"none"}],[`${n}-auto`,{["grid-"+e]:"auto"}],[new RegExp(`^(${n}-span)-(.+)$`),t=>({["grid-"+e]:`span ${t[2]} / span ${t[2]}`})],[`${n}-span-full`,{["grid-"+e]:"1 / -1"}],[new RegExp(`^(${n}-start)-(.+)$`),t=>({["grid-"+e+"-start"]:t[2]})],[`${n}-start-auto`,{["grid-"+e+"-start"]:"auto"}],[new RegExp(`^(${n}-end)-(.+)$`),t=>({["grid-"+e+"-end"]:t[2]})],[`${n}-end-auto`,{["grid-"+e+"-end"]:"auto"}]]),...Cs().rules,...zs().rules,...js().rules,...Os().rules,["grid-flow-row",{"grid-auto-flow":"row"}],["grid-flow-col",{"grid-auto-flow":"column"}],["grid-flow-dense",{"grid-auto-flow":"dense"}],["grid-flow-row-dense",{"grid-auto-flow":"row dense"}],["grid-flow-col-dense",{"grid-auto-flow":"column desne"}],..._s().rules,...Ss().rules,M("gap","gap"),M("gap-col","column-gap"),M("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-items-auto",{"place-self":"auto"}],["place-items-start",{"place-self":"start"}],["place-items-end",{"place-self":"end"}],["place-items-center",{"place-self":"center"}],["place-items-stretch",{"place-self":"stretch"}],...Ts().rules,...Ms().rules,...As().rules,...Ws().rules,...Es().rules,...Ds().rules,...Ls().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],...Ns().rules,["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...Us().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...Fs().rules,...Bs().rules,...Hs().rules,...Is().rules,...Gs().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...Vs().rules,...qs().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],...Ps().rules,["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],...Ys().rules,["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...Js().rules,...Xs().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],M("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],M("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],["content-none",{content:"none"}],...Ks().rules,[/^(border)$/,(e,{theme:n})=>({"border-style":"solid","border-width":"1px"})],...Qs().rules,...Zs().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...no().rules,...eo().rules,...Dc().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...to().rules,...so().rules,...oo().rules,...io().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],M("blur","filter",{postprocess:e=>`blur(${e})`}),M("brightness","filter",{postprocess:e=>`brightness(${e})`}),M("contrast","filter",{postprocess:e=>`contrast(${e})`}),...ro().rules,M("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),M("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),M("invert","filter",{postprocess:e=>`invert(${e})`}),M("saturate","filter",{postprocess:e=>`saturate(${e})`}),M("sepia","filter",{postprocess:e=>`sepia(${e})`}),M("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),M("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),M("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),M("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),M("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),M("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),M("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),M("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),M("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],...lo().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:n})=>({transition:"all","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition)$/,(e,{theme:n})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-colors)$/,(e,{theme:n})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-opacity)$/,(e,{theme:n})=>({transition:"opacity","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-shadow)$/,(e,{theme:n})=>({transition:"box-shadow","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-transform)$/,(e,{theme:n})=>({transition:"transform","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],...co().rules,...uo().rules,...fo().rules,...ho().rules,...go().rules,...mo().rules,...po().rules,...bo().rules,...vo().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],...$o().rules,["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],...wo().rules,["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...yo().rules,...ko().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...xo().rules,..._o().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...So().rules,...Co().rules,...zo().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],...jo().rules,["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],rd=id,ld=[{getCSS:()=>`
      * {
        padding: 0;
        margin: 0;

        color: inherit;
        background: none;
        border: none;
        font: inherit;
        line-height: 1;

        color-scheme: light dark;
        box-sizing: border-box;
      }

      :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: normal;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }
    `},{getCSS:()=>`
    :root {
      --block-start: top;
      --block-end: bottom;
      --inline-start: left;
      --inline-end: right;
      --start-start: top left;
      --start-end: top right;
      --end-start: bottom left;
      --end-end: bottom right;
    }
    `}],ad=ld,cd={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}},dd=cd,nt=(e,n)=>({[e+"-900"]:{base:{dark:{l:n[0].l,c:n[0].c},light:{l:n[9].l,c:n[9].c}},on:[{dark:{l:1,c:0}}]},[e+"-800"]:{base:{dark:{l:n[1].l,c:n[1].c},light:{l:n[8].l,c:n[8].c}},on:[{dark:{l:1,c:0}}]},[e+"-700"]:{base:{dark:{l:n[2].l,c:n[2].c},light:{l:n[7].l,c:n[7].c}},on:[{dark:{l:1,c:0}}]},[e+"-600"]:{base:{dark:{l:n[3].l,c:n[3].c},light:{l:n[6].l,c:n[6].c}},on:[{dark:{l:1,c:0}}]},[e+"-500"]:{base:{dark:{l:n[4].l,c:n[4].c},light:{l:n[5].l,c:n[5].c}},on:[{dark:{l:1,c:0}}]},[e+"-400"]:{base:{dark:{l:n[5].l,c:n[5].c},light:{l:n[4].l,c:n[4].c}},on:[{dark:{l:0,c:0}}]},[e+"-300"]:{base:{dark:{l:n[6].l,c:n[6].c},light:{l:n[3].l,c:n[3].c}},on:[{dark:{l:0,c:0}}]},[e+"-200"]:{base:{dark:{l:n[7].l,c:n[7].c},light:{l:n[2].l,c:n[2].c}},on:[{dark:{l:0,c:0}}]},[e+"-100"]:{base:{dark:{l:n[8].l,c:n[8].c},light:{l:n[1].l,c:n[1].c}},on:[{dark:{l:0,c:0}}]},[e+"-50"]:{base:{dark:{l:n[9].l,c:n[9].c},light:{l:n[0].l,c:n[0].c}},on:[{dark:{l:0,c:0}}]}}),ud={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...nt("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...nt("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...nt("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...nt("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},fd=ud,hd={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},gd=hd,md={none:{},material3:dd,tailwind:fd,windblade:gd},pd=md,bd=()=>`# Installation

Windblade is an UnoCSS preset, please follow its own [guide](https://github.com/unocss/unocss#installation) to install it.

Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.

\`\`\`sh
npm install unocss-preset-windblade
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
})
\`\`\`

## Recommended additions

Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.

### Getting hover, active, etc.

Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.

\`\`\`sh
npm install unocss-preset-mini-variants
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import presetVariants from 'unocss-preset-mini-variants';

export default defineConfig({
  presets: [
    presetWindblade(),
    presetVariants(),
  ],
})
\`\`\`

### Getting @apply

UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.

\`\`\`sh
npm install -D @unocss/transformer-directives
\`\`\`

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
\`\`\`
`,vd=bd,$d=()=>`# Using semantic colors

Windblade comes with a semantic color system. Refer to colors by their names.

\`\`\`html
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
\`\`\`

## Foreground colors

All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.

\`\`\`html
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
\`\`\`

## Hue & color scheme

Change color hue by applying color rules together with or sheme-(auto|dark|light)-{number} or inside elemetns with that class.

\`\`\`html
<div class="scheme-auto-80 bg-normal"></div>
\`\`\`

It is a good idea apply a default color scheme at the root of your app.

\`\`\`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
\`\`\`

@media(prefers-color-scheme) is used for scheme-auto-... by default but you can override this behaviour with scheme-(dark|light).

\`\`\`html
<body class="scheme-dark scheme-auto-80 bg-normal">
  <h1>Always-dark website</h1>
  <section class="bg-accent">Default (orange)</section>
  <section class="scheme-auto-240 bg-accent">Blue</section>
  <section class="scheme-auto-280 bg-accent">Purple</section>
</body>
\`\`\`

## Using Windblade colors in JavaScrtipt

Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.

\`\`\`ts
import { getLCA, LCHToCSSColor } from "unocss-preset-windblade/core";
import { theme } from "unocss-preset-windblade"; // this is just a source file and it does not know about your theme customizations. If you are using your own colors you should import them instead

const brandHue = 80;

getBrandColor((light?: boolean) => {
  const colors = getLCA(theme.windblade.colors['brand'].base); // returns light and dark variants with all values calculated

  let lca;
  if (light) {
    lca = colors.light;
  } else {
    lca = colors.dark;
  }

  return LCHToCSSColor(lca.l, lca.c, brandHue, lca.a).rgba;
});

export default getBrandColor;
\`\`\`
`,wd=$d,fe={block:"bg-surface p-s transition text-center rounded-s.4"},yd=()=>`# Using logical properties

Windblade uses logical properties and values only.

All properties that can be customized on multiple axis/edges/corenrs can be prepended with:
- \`-b\` for block axis (e.g. \`size-b\`).
- \`-i\` for inline axis (e.g. \`size-i\`).
- \`-bs\` and \`-be\` for block start and end edges.
- \`-is\` and \`-ie\` for inline start and end edges.
- \`-ss\` \`-se\` \`-es\` \`-ee\` for corners (start start, start end, end start & end end)

\`\`\`uno-html
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${fe.block}">ss</div>
  <div class="${fe.block}">bs</div>
  <div class="${fe.block}">se</div>

  <div class="${fe.block}">is</div>
  <div class="${fe.block}">center</div>
  <div class="${fe.block}">ie</div>

  <div class="${fe.block}">es</div>
  <div class="${fe.block}">be</div>
  <div class="${fe.block}">ee</div>
</div>
\`\`\`

Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. \`background-position\` with \`bg-{corner}\` utility).

If you are new to logical properties try playing with \`bg-gradient-to-{edge/corner}\` and see which way the gradient goes.

Please note that \`width\` and \`height\` are completely removed in favor of \`size-{axis}\`.
`,kd=yd,xd=()=>'# Using the $ syntax\n\nYou can grab relevant to the rule theme values prefixing them with `$`. This is especially useful inside brackets when you want to set custom values.\n\n```html\n<div class="grid grid-cols-[auto_$l_auto]"></div>\n<!-- This is a bad example because at the moment brackets have limited support and do not work in this case -->\n```\n\nYou can also use `$` to conveniently perform operations with your design tokens without breaking out of your design system or using `calc()`.\n\n```html\n<div class="p-s">\n  Label\n  <!-- Custom underline -->\n  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>\n</div>\n```\n',_d=xd,Sd=()=>`# Hover, focus and other states

Windblade does not come with functionality like hover or focus states. Please use Windblade together with unocss-preset-mini-variants (see "installation") if you need this functionality.
`,Cd=Sd,zd=new Map([["Installation",vd],["Semantic colors",wd],["Logical properties",kd],["$ syntax",_d],["Hover, focus and other states",Cd]]),jd=zd,Od=e=>`# Semantic colors

Colors in Windblade are based on the [OkLCH](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) model and have a 'base' and one or more 'on' colors.

## Default colors

It is highly encouraged that you use your own colors, however, Windblade does come with a set of well-crafted example colors that are designed to demonstrate the semantic color system and were used to build this documnentation.

\`\`\`uno-html
<div class="grid grid-fit-cols-m gap-s.4">
  ${(()=>{const n=e.windblade.colors;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <div class="bg-${t} flex flex-col border border-color-surface rounded-s overflow-hidden font-bold">
          <h1 class="p-s">${t}</h1>
          <div class="size-b-px shrink-0 bg-fg-1 opacity-[0.1]"></div>
          <div class="size-b-full flex flex-col gap-s p-s">
            ${s.on.map((o,i)=>`<div class="text-fg-${i+1}">Fg-${i+1}</div>`).join("")}
          </div>
        </div>
      `).join(""):'<div class="theme-auto-20 font-bold">Error</div>'})()}
</div>
\`\`\`

## Custom colors

Add a color by specifying an object like the following:

\`\`\`ts
const theme: Theme = {
  windblade: {
    colors: {
      'mycolor': {
        base: { dark: { l: 0, c: 0 } },
        on: [
          { dark: { l: 1, c: 0 } },
        ],
      },
    },
  },
};
\`\`\`

Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.

\`\`\`ts
const theme: Theme = {
  windblade: {
    colors: {
      'myColor': {
        base: { dark: { l: 0, c: 0 }, light: { l: 0.9, c: 0.05 } }, // slightly more saturated and darker than it would be otherwise in light mode (1 - 0 = 1, we tell it to be 0.9)
        on: [
          { dark: { l: 1, c: 0 }, light: { a: 0.8 } }, // more transparent in light mode (80%)
        ],
      },
      'brandColor': {
        base: { dark: { l: 0.6, c: 0.3 }, light: { l: 0.6 } }, // has lightness 0.6 in both color schemes
        on: [
          { dark: { l: 0, c: 0 } },
        ],
      },
    },
  },
};
\`\`\`
`,Td=Od,ye={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Md=e=>`# Proportions

Proportions are used throughout the whole preset for size, duration, opacity, etc.

Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.

## Default proportions

By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.

\`\`\`uno-html
<table class="border-collapse">
  <tr class="${ye.tr}">
    <th class="${ye.th}">Name</th>
    <th class="${ye.th}">Value</th>
    <th class="${ye.th}"></th>
  </tr>
  ${(()=>{const n=e.windblade.proportions;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <tr class="${ye.tr}">
          <td class="${ye.td} font-semibold">${t}</td>
          <td class="${ye.td} text-fg-4">${s}</td>
          <td class="${ye.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
        </tr>
      `).join(""):""})()}
</table>
\`\`\`

## Custom proportions

Add custom proportions by adding numbers like the following:

\`\`\`ts
const theme: Theme = {
  windblade: {
    proportions: {
      'half': 0.5,
      'full': 1,
      'double': 2,
    },
  },
};
\`\`\`

Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.
`,Ad=Md,Wd=()=>`# Other theme objects

See the theme type below for other values you can customize.

## Theme type

\`\`\`ts
type ThemeColor = {
  dark: {
    l: number;
    c: number;
    a?: number;
  };
  light?: {
    l?: number;
    c?: number;
    a?: number;
  }
};

type ThemeColorCombo = {
  base: ThemeColor;
  on: ThemeColor[];
};

type Theme = {
  windblade: {
    colors: Record<string, ThemeColorCombo>;
    miscColors?: Record<string, string>;
    proportions: Record<string, number>;
    miscSizes?: Record<string, string>;
    time: {
      baseUnitMs: number;
      functions: Record<string, string> & {
        default: string;
      };
    };
  };
};
\`\`\`
`,Ed=Wd,Rd=new Map([["Semantic Colors",Td],["Proportions",Ad],["Other",Ed]]),Dd=Rd;new Map([["Usage",jd],["Theme",Dd],...od]);const Ld=(e={})=>{var t;return e.theme=(t=e.theme)!=null?t:"windblade",{name:"Windblade",theme:xe(yc,pd[e.theme]),rules:rd,variants:[],options:e,postprocess:[],preflights:ad,prefix:void 0,shortcuts:[]}},ae=me(()=>gc({presets:[Ld()],safelist:["scheme-dark-276","scheme-light-296"]})),Nd=_("<div></div>"),Ud=e=>{const[n,t]=P();let s;return pe(()=>{if(!s){t(void 0);return}n()||t(s.attachShadow({mode:"open"}))}),pe(()=>{const o=n();!o||(o.innerHTML=e.innerHTML)}),(()=>{const o=Nd.cloneNode(!0),i=s;return typeof i=="function"?Zn(i,o):s=o,R(()=>S(o,e.class)),o})()},Oo=e=>{const[n,t]=P();return pe(async()=>{var r;const{html:s}=e,o=(await ae.generate(s,{safelist:!1,preflights:!1,minify:!0})).css,i=(await ae.generate(s)).css;t({html:s,shortCss:o,fullCss:i}),(r=e.onChange)==null||r.call(e,o)}),$(Ud,{get class(){return e.class},get innerHTML(){var s,o;return`
    <div
      id="root"
      class="${ke.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${(s=n())==null?void 0:s.fullCss.replaceAll(":root",":where(#root)")}</style>
      ${(o=n())==null?void 0:o.html}
    </div>
  `}})},Fd=_('<div class="inline-block scheme-auto-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal"><span class="text-fg-1 font-semibold">Error:</span> </div>'),Bd=_('<a class="text-accent"></a>'),Hd=_('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]"></p>'),Id=_('<h2 class="text-fg-1 font-bold text-m.2"></h2>'),Gd=_('<h3 class="font-bold text-$($s+$s.2)"></h3>'),Vd=_('<h4 class="font-bold"></h4>'),qd=_("<h5></h5>"),Pd=_("<h6></h6>"),Ln=_("<pre></pre>"),Yd=_('<span class="bg-surface p-i-s.4 rounded-s.4"></span>'),Jd=_('<ul class="p-is-s flex flex-col gap-s.4"></ul>'),Xd=_('<li class="text-fg-3 font-semibold"></li>'),Kd=_('<div class="size-b-full overflow-auto"><div class="p-m.2 flex flex-col gap-s"></div></div>'),Lt=e=>(()=>{const n=Fd.cloneNode(!0);return n.firstChild.nextSibling,w(n,()=>e.children,null),n})(),oe=e=>{var n,t,s;switch(e.type){case"text":return e.value;case"link":return(()=>{const o=Bd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),R(()=>Fe(o,"href",e.url)),o})();case"paragraph":return(()=>{const o=Hd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case"heading":switch(e.depth){case 1:return(()=>{const o=Id.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case 2:return(()=>{const o=Gd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case 3:return(()=>{const o=Vd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case 4:return(()=>{const o=qd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case 5:return(()=>{const o=Pd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case 6:return $(Lt,{children:"Heading too deep"})}case"code":if(e.lang==="uno-html")return $(Oo,{get html(){return e.value},class:"overflow-auto"});{const o=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${(n=e.lang)!=null?n:""}`;if(!e.lang)return(()=>{const r=Ln.cloneNode(!0);return S(r,o),w(r,()=>e.value),r})();let i=e.value;try{i=(s=(t=Te.highlighter())==null?void 0:t.highlight(e.value,{language:e.lang}).value)!=null?s:""}catch(r){return $(Lt,{get children(){return["Failed highlighting code. ",te(()=>r.message)]}})}return(()=>{const r=Ln.cloneNode(!0);return S(r,o),r.innerHTML=i,r})()}case"inlineCode":return(()=>{const o=Yd.cloneNode(!0);return w(o,()=>e.value),o})();case"list":return(()=>{const o=Jd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case"listItem":return(()=>{const o=Xd.cloneNode(!0);return w(o,()=>e.children.map(i=>oe(i))),o})();case"root":return e.children.map(o=>oe(o));default:return $(Lt,{get children(){return["Unsoppoprted element: ",te(()=>e.type)]}})}},Qd=e=>(()=>{const n=Kd.cloneNode(!0),t=n.firstChild;return w(t,$(Ut,{fallback:"Loading...",get children(){return(()=>{var o;const s=(o=Te.md())==null?void 0:o.fromMarkdown(e.themeObject(ae.config.theme));return s?oe(s):"Error: Failed to parse this page's markdown"})()}})),n})(),Zd=_('<div class="rounded-s.4 overflow-hidden flex items-center"></div>'),eu=_('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value=""></option></select>'),tu=_("<option></option>"),nu=_('<div class="flex gap-s.2 justify-between items-center"><div class="flex items-center font-semibold"></div></div>'),su=_('<button class="text-accent transition ease-out hover:highlight active:highlight+"></button>'),yt=e=>{const n=["<integer>","<ratio>","<theme.windblade.sizes>","<theme.windblade.proportions>","<theme.windblade.miscSizes>","<theme.windblade.colors>","<theme.windblade.miscColors>","<theme.windblade.time.functions>"];return e.flatMap(t=>typeof t!="string"?[t]:n.includes(t)?[t]:n.map(s=>t.includes(s)).filter(s=>Boolean(s)).length<=0?[t]:n.flatMap(s=>{const o=t.indexOf(s);return o<0?[]:[...yt([t.substring(0,o)]),t.substring(o,o+s.length),...yt([t.substring(o+s.length,t.length)])].filter(i=>Boolean(i))}))},ou=e=>{const[n,t]=P(1),s=()=>e.onChange(""+n());pe(s);const o="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const i=Zd.cloneNode(!0);return w(i,$(Ae,{style:"secondary",class:o,onClick:()=>t(n()-1),children:"-"}),null),w(i,$(Ae,{style:"secondary",class:o,onClick:s,children:n}),null),w(i,$(Ae,{style:"secondary",class:o,onClick:()=>t(n()+1),children:"+"}),null),i})()},Ne=e=>(()=>{const n=eu.cloneNode(!0);return n.firstChild,n.addEventListener("change",({target:t})=>e.onChange(t.value)),w(n,$(Qn,{get each(){return e.values},children:([t])=>(()=>{const s=tu.cloneNode(!0);return s.$$click=()=>e.onChange(t),s.value=t,w(s,t),s})()}),null),n})(),iu=e=>{const[n,t]=P(yt([e.utility]));return pe(Gn(n,()=>{var o;return(o=e.onClick)==null?void 0:o.call(e,n().join(""))},{defer:!0})),(()=>{const o=nu.cloneNode(!0),i=o.firstChild;return w(i,()=>yt([e.utility]).map((r,l)=>{switch(r){case"<integer>":return $(ou,{onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.sizes>":return $(Ne,{get values(){return[...Object.entries(ae.config.theme.windblade.proportions),...Object.entries(ae.config.theme.windblade.miscSizes)]},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.proportions>":return $(Ne,{get values(){return Object.entries(ae.config.theme.windblade.proportions)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.miscSizes>":return $(Ne,{get values(){return Object.entries(ae.config.theme.windblade.miscSizes)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.colors>":return $(Ne,{get values(){return Object.entries(ae.config.theme.windblade.colors)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.miscColors>":return $(Ne,{get values(){return Object.entries(ae.config.theme.windblade.miscColors)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.time.functions>":return $(Ne,{get values(){return Object.entries(ae.config.theme.windblade.time.functions)},onChange:a=>t(c=>(c[l]=a,[...c]))});default:return(()=>{const a=su.cloneNode(!0);return a.$$click=()=>t(c=>(c[l]=r,[...c])),w(a,r),a})()}})),o})()};St(["click"]);const ru="_progress_8tf2m_1",lu="_spin_8tf2m_1",au={progress:ru,spin:lu},cu=_("<div></div>"),Nn=e=>(()=>{const n=cu.cloneNode(!0);return R(t=>{var i;const s=au.progress,o=`--radius: ${(i=e.radius)!=null?i:1}rem`;return s!==t._v$&&S(n,t._v$=s),t._v$2=_e(n,o,t._v$2),t},{_v$:void 0,_v$2:void 0}),n})(),du=_('<div class="size-b-full overflow-auto"><div class="flex flex-col gap-s p-m.2"><h2 class="text-fg-1 font-bold text-m.2"></h2><p class="text-fg-3 font-semibold"></p></div></div>'),uu=_("<h3>Try it</h3>"),fu=_('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody></tbody></table>'),hu=_('<section class="break-inside-avoid break-after-column"><h4>Preview</h4></section>'),Un=_("<pre></pre>"),gu=_('<section class="break-inside-avoid"><h4>HTML</h4></section>'),mu=_('<section class="break-inside-avoid"><h4>Generated CSS</h4></section>'),pu=_('<tr><td class="p-i-s"><div class="m-auto i-mdi-check transition ease-linear text-fg-1"></div></td><td class="p-b-s"></td></tr>'),Fn=_("<div>Loading </div>"),bu=e=>{const[n,t]=P(-1),[s,o]=P(void 0),[i,r]=P(""),{formatter:l,highlighter:a}=Te,c=()=>{var f,b,p,g;return(g=(p=(b=d()).preview)==null?void 0:p.call(b,(f=s())!=null?f:""))!=null?g:""},d=()=>e.ruleGroup.docs,u={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3",h3:"font-bold text-$($s+$s.2)",h4:"font-bold m-be-s",pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"};return(()=>{const f=du.cloneNode(!0),b=f.firstChild,p=b.firstChild,g=p.nextSibling;return w(p,()=>e.title),w(g,()=>d().description),w(b,(()=>{const y=te(()=>!!d().preview);return()=>y()&&[(()=>{const v=uu.cloneNode(!0);return R(()=>S(v,u.h3)),v})(),(()=>{const v=fu.cloneNode(!0),x=v.firstChild,m=x.firstChild,h=m.firstChild,k=h.nextSibling,C=x.nextSibling;return w(C,$(Qn,{get each(){return d().utilities},children:(j,A)=>(()=>{const L=pu.cloneNode(!0),O=L.firstChild,W=O.firstChild,T=O.nextSibling;return w(T,$(iu,{utility:j,onClick:N=>{t(A),o(N)}})),R(N=>{const z=u.tr,K=`opacity: ${n()===A()?1:0};`;return z!==N._v$8&&S(L,N._v$8=z),N._v$9=_e(W,K,N._v$9),N},{_v$8:void 0,_v$9:void 0}),L})()})),R(j=>{const A=u.tr,L=`${u.th} p-i-s`,O=`${u.th} size-i-full`;return A!==j._v$&&S(m,j._v$=A),L!==j._v$2&&S(h,j._v$2=L),O!==j._v$3&&S(k,j._v$3=O),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})(),$(Oe,{get when(){return s()},get children(){return[(()=>{const v=hu.cloneNode(!0),x=v.firstChild;return w(v,$(Oo,{get html(){return c()},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;",onChange:r}),null),R(()=>S(x,u.h4)),v})(),(()=>{const v=gu.cloneNode(!0),x=v.firstChild;return w(v,$(Ut,{get fallback(){return(()=>{const m=Fn.cloneNode(!0);return m.firstChild,w(m,$(Nn,{}),null),R(()=>S(m,`${u.pre} flex gap-s items-center`)),m})()},get children(){const m=Un.cloneNode(!0);return R(h=>{var j,A,L,O;const k=u.pre,C=(O=a())==null?void 0:O.highlight((A=(j=l())==null?void 0:j.html_beautify(c()))!=null?A:"",{language:"xml"}).value.replaceAll((L=s())!=null?L:"",`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${s()}</span>`);return k!==h._v$4&&S(m,h._v$4=k),C!==h._v$5&&(m.innerHTML=h._v$5=C),h},{_v$4:void 0,_v$5:void 0}),m}}),null),R(()=>S(x,u.h4)),v})(),(()=>{const v=mu.cloneNode(!0),x=v.firstChild;return w(v,$(Ut,{get fallback(){return(()=>{const m=Fn.cloneNode(!0);return m.firstChild,w(m,$(Nn,{}),null),R(()=>S(m,`${u.pre} flex gap-s items-center`)),m})()},get children(){const m=Un.cloneNode(!0);return R(h=>{var j,A,L;const k=`${u.pre} css`,C=(L=a())==null?void 0:L.highlight((A=(j=l())==null?void 0:j.css_beautify(i()))!=null?A:"",{language:"css"}).value;return k!==h._v$6&&S(m,h._v$6=k),C!==h._v$7&&(m.innerHTML=h._v$7=C),h},{_v$6:void 0,_v$7:void 0}),m}}),null),R(()=>S(x,u.h4)),v})()]}})]})(),null),f})()},vu=_('<div class="flex size-b-full"><nav class="flex flex-col gap-s p-m.2 overflow-auto"></nav><div class="bg-fg-5 size-i-px"></div><main class="relative flex-1"></main></div>'),$u=_('<div class="font-semibold m-be-s.4"></div>'),wu=_('<div class="flex flex-col gap-s.2"></div>'),yu=_('<button><div class="absolute inset-0"><div></div><div></div></div><span class="relative"></span></button>'),ku=()=>(()=>{const e=vu.cloneNode(!0),n=e.firstChild,t=n.nextSibling,s=t.nextSibling;return w(n,()=>{const o=[];return Mn.forEach((i,r)=>{o.push([(()=>{const l=$u.cloneNode(!0);return w(l,r),l})(),(()=>{const l=wu.cloneNode(!0);return w(l,()=>{const a=[];let c=0;return i.forEach((d,u)=>{const f=()=>Ct.route().current.startsWith(`/docs/${r}-${u}`),b=`filter: hue-rotate(${3.6*c++}deg);`;a.push((()=>{const p=yu.cloneNode(!0),g=p.firstChild,y=g.firstChild,v=y.nextSibling,x=g.nextSibling;return p.$$click=()=>Pe(`/docs/${r}-${u}`),w(x,u),R(m=>{const h=`${f()?"bg-surface text-fg-1":"text-fg-3"} relative p-s.6 p-i-s p-is-m.2 rounded-full text-start justify-start transition ease-out overflow-hidden hover:highlight hover:bg-accent-3 hover:text-fg-1 active:highlight+`,k=b,C=`${f()?"bg-accent-2":"bg-transparent"} blur-s transition absolute size-b-m.2 size-i-m.2 rounded-full inset-0 inset-b-0 m-b-auto`,j=`${f()?"bg-accent":"bg-accent-2"} size-b-s.4 size-i-s.4 transition absolute rounded-full inset-0 inset-b-0 m-b-auto m-is-$(($m.2-$s.4)/2)`;return h!==m._v$&&S(p,m._v$=h),m._v$2=_e(g,k,m._v$2),C!==m._v$3&&S(y,m._v$3=C),j!==m._v$4&&S(v,m._v$4=j),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})())}),a}),l})()])}),o}),w(s,()=>{const o=[];return Mn.forEach((i,r)=>{i.forEach((l,a)=>{typeof l=="function"?o.push($(ct,{path:`/docs/${r}-${a}`,get children(){return $(Qd,{themeObject:l})}})):o.push($(ct,{path:`/docs/${r}-${a}`,get children(){return $(bu,{title:a,ruleGroup:l})}}))})}),o}),e})();St(["click"]);const Bn=_('<img alt="Logo" class="size-b-m.2">'),xu=_('<div class="i-mdi-brightness-4 transition"></div>'),_u=_('<div class="absolute i-mdi-brightness-7 transition"></div>'),Su=_('<div class="absolute i-mdi-brightness-2 transition"></div>'),Cu=_('<div class="i-simple-icons-github"></div>'),zu=_('<div class="size-b-full grid" style="grid-template-rows: auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex justify-between items-center"><h1 class="font-bold text-fg-1 "><button class="flex gap-s.4 items-center -m-i-s.8 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4 hover:highlight active:highlight+">Windblade</button></h1><div class="flex gap-s.4"></div></header><div class="relative"></div></div>'),ju=()=>(Ao(()=>{ni("/home")}),Zt(()=>{si()}),(()=>{const e=zu.cloneNode(!0),n=e.firstChild,t=n.firstChild,s=t.firstChild,o=s.firstChild,i=t.nextSibling,r=n.nextSibling;return s.$$click=()=>Pe("/home"),w(s,$(Oe,{get when(){return ke.scheme()==="dark"},get fallback(){return(()=>{const l=Bn.cloneNode(!0);return Fe(l,"src",hi),l})()},get children(){const l=Bn.cloneNode(!0);return Fe(l,"src",fi),l}}),o),w(i,$(Ae,{onClick:()=>Pe("/home"),children:"Home"}),null),w(i,$(Ae,{onClick:()=>Pe("/docs"),children:"Docs"}),null),w(i,$(Ae,{get onClick(){return ke.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const l=xu.cloneNode(!0);return R(a=>_e(l,`opacity: ${ke.enforceScheme()===void 0?1:0}`,a)),l})(),(()=>{const l=_u.cloneNode(!0);return R(a=>_e(l,`opacity: ${ke.enforceScheme()==="light"?1:0}`,a)),l})(),(()=>{const l=Su.cloneNode(!0);return R(a=>_e(l,`opacity: ${ke.enforceScheme()==="dark"?1:0}`,a)),l})()]}}),null),w(i,$(ns,{href:"https://github.com/StarLederer/windblade",get children(){return Cu.cloneNode(!0)}}),null),w(r,$(ct,{path:"/home",get children(){return $(Ni,{})}}),null),w(r,$(ct,{path:"/docs",get children(){return $(ku,{})}}),null),e})());St(["click"]);const Ou=_("<div></div>"),Tu=()=>{const e=()=>(ke.scheme()==="light"?"scheme-light":"scheme-dark")+"-"+ke.hue();return(()=>{const n=Ou.cloneNode(!0);return w(n,$(ju,{})),R(()=>S(n,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden`)),n})()};qo(()=>$(Tu,{}),document.body);
