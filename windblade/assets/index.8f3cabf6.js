(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const F={};function tt(e){F.context=e}const hi=(e,n)=>e===n,wt=Symbol("solid-proxy"),gi=Symbol("solid-track"),yt={equals:hi};let $s=_s;const xe=1,kt=2,ws={owned:null,cleanups:null,context:null,owner:null},Yt={};var K=null;let he=null,q=null,te=null,ce=null,wn=0;function ye(e,n){const t=q,s=K,r=e.length===0,i=r?ws:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},o=r?e:()=>e(()=>le(()=>Ft(i)));K=i,q=null;try{return Ee(o,!0)}finally{q=t,K=s}}function N(e,n){n=n?Object.assign({},yt,n):yt;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=r=>(typeof r=="function"&&(r=r(t.value)),xs(t,r));return[ks.bind(t),s]}function Pn(e,n,t){const s=Ut(e,n,!0,xe);Je(s)}function M(e,n,t){const s=Ut(e,n,!1,xe);Je(s)}function X(e,n,t){$s=xi;const s=Ut(e,n,!1,xe),r=Ve&&Bt(K,Ve.id);r&&(s.suspense=r),s.user=!0,ce?ce.push(s):Je(s)}function Y(e,n,t){t=t?Object.assign({},yt,t):yt;const s=Ut(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,Je(s),ks.bind(s)}function Jt(e,n,t){let s,r,i;arguments.length===2&&typeof n=="object"||arguments.length===1?(s=!0,r=e,i=n||{}):(s=e,r=n,i=t||{});let o=null,l=Yt,a=null,c=!1,d=!1,u="initialValue"in i,f=typeof s=="function"&&Y(s);const k=new Set,[b,g]=(i.storage||N)(i.initialValue),[y,v]=N(void 0),[w,p]=N(void 0,{equals:!1}),[h,$]=N(u?"ready":"unresolved");if(F.context){a=`${F.context.id}${F.context.count++}`;let j;i.ssrLoadFrom==="initial"?l=i.initialValue:F.load&&(j=F.load(a))&&(l=j[0])}function _(j,D,T,L){return o===j&&(o=null,u=!0,(j===l||D===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(L,{value:D})),l=Yt,O(D,T)),D}function O(j,D){Ee(()=>{D===void 0&&g(()=>j),$(D!==void 0?"errored":"ready"),v(D);for(const T of k.keys())T.decrement();k.clear()},!1)}function E(){const j=Ve&&Bt(K,Ve.id),D=b(),T=y();if(T!==void 0&&!o)throw T;return q&&!q.user&&j&&Pn(()=>{w(),o&&(j.resolved&&he&&c?he.promises.add(o):k.has(j)||(j.increment(),k.add(j)))}),D}function W(j=!0){if(j!==!1&&d)return;d=!1;const D=f?f():s;if(c=he,D==null||D===!1){_(o,le(b));return}const T=l!==Yt?l:le(()=>r(D,{value:b(),refetching:j}));return typeof T!="object"||!(T&&"then"in T)?(_(o,T,void 0,D),T):(o=T,d=!0,queueMicrotask(()=>d=!1),Ee(()=>{$(u?"refreshing":"pending"),p()},!1),T.then(L=>_(T,L,void 0,D),L=>_(T,void 0,Cs(L),D)))}return Object.defineProperties(E,{state:{get:()=>h()},error:{get:()=>y()},loading:{get(){const j=h();return j==="pending"||j==="refreshing"}},latest:{get(){if(!u)return E();const j=y();if(j&&!o)throw j;return b()}}}),f?Pn(()=>W(!1)):W(!1),[E,{refetch:W,mutate:g}]}function mi(e){return Ee(e,!1)}function le(e){if(q===null)return e();const n=q;q=null;try{return e()}finally{q=n}}function ys(e,n,t){const s=Array.isArray(e);let r,i=t&&t.defer;return o=>{let l;if(s){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(i){i=!1;return}const a=le(()=>n(l,r,o));return r=l,a}}function pi(e){X(()=>le(e))}function ge(e){return K===null||(K.cleanups===null?K.cleanups=[e]:K.cleanups.push(e)),e}function bi(){return K}function vi(e){ce.push.apply(ce,e),e.length=0}function it(e,n){const t=Symbol("context");return{id:t,Provider:_i(t),defaultValue:e}}function Nt(e){let n;return(n=Bt(K,e.id))!==void 0?n:e.defaultValue}function $i(e){const n=Y(e),t=Y(()=>rn(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let Ve;function wi(){return Ve||(Ve=it({}))}function ks(){const e=he;if(this.sources&&(this.state||e))if(this.state===xe||e)Je(this);else{const n=te;te=null,Ee(()=>_t(this),!1),te=n}if(q){const n=this.observers?this.observers.length:0;q.sources?(q.sources.push(this),q.sourceSlots.push(n)):(q.sources=[this],q.sourceSlots=[n]),this.observers?(this.observers.push(q),this.observerSlots.push(q.sources.length-1)):(this.observers=[q],this.observerSlots=[q.sources.length-1])}return this.value}function xs(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&Ee(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=he&&he.running;o&&he.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?te.push(i):ce.push(i),i.observers&&Ss(i)),o||(i.state=xe)}if(te.length>1e6)throw te=[],new Error},!1)),n}function Je(e){if(!e.fn)return;Ft(e);const n=K,t=q,s=wn;q=K=e,yi(e,e.value,s),q=t,K=n}function yi(e,n,t){let s;try{s=e.fn(n)}catch(r){e.pure&&(e.state=xe,e.owned&&e.owned.forEach(Ft),e.owned=null),zs(r)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?xs(e,s):e.value=s,e.updatedAt=t)}function Ut(e,n,t,s=xe,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:K,context:null,pure:t};return K===null||K!==ws&&(K.owned?K.owned.push(i):K.owned=[i]),i}function xt(e){const n=he;if(e.state===0||n)return;if(e.state===kt||n)return _t(e);if(e.suspense&&le(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<wn);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===xe||n)Je(e);else if(e.state===kt||n){const r=te;te=null,Ee(()=>_t(e,t[0]),!1),te=r}}function Ee(e,n){if(te)return e();let t=!1;n||(te=[]),ce?t=!0:ce=[],wn++;try{const s=e();return ki(t),s}catch(s){t||(ce=null),te=null,zs(s)}}function ki(e){if(te&&(_s(te),te=null),e)return;const n=ce;ce=null,n.length&&Ee(()=>$s(n),!1)}function _s(e){for(let n=0;n<e.length;n++)xt(e[n])}function xi(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:xt(s)}for(F.context&&tt(),n=0;n<t;n++)xt(e[n])}function _t(e,n){const t=he;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===xe||t?r!==n&&xt(r):(r.state===kt||t)&&_t(r,n))}}function Ss(e){const n=he;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=kt,s.pure?te.push(s):ce.push(s),s.observers&&Ss(s))}}function Ft(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const i=r.pop(),o=t.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,t.observerSlots[s]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)Ft(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Cs(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function zs(e){throw e=Cs(e),e}function Bt(e,n){return e?e.context&&e.context[n]!==void 0?e.context[n]:Bt(e.owner,n):void 0}function rn(e){if(typeof e=="function"&&!e.length)return rn(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=rn(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function _i(e,n){return function(s){let r;return M(()=>r=le(()=>(K.context={[e]:s.value},$i(()=>s.children))),void 0),r}}const Si=Symbol("fallback");function Gn(e){for(let n=0;n<e.length;n++)e[n]()}function Ci(e,n,t={}){let s=[],r=[],i=[],o=0,l=n.length>1?[]:null;return ge(()=>Gn(i)),()=>{let a=e()||[],c,d;return a[gi],le(()=>{let f=a.length,k,b,g,y,v,w,p,h,$;if(f===0)o!==0&&(Gn(i),i=[],s=[],r=[],o=0,l&&(l=[])),t.fallback&&(s=[Si],r[0]=ye(_=>(i[0]=_,t.fallback())),o=1);else if(o===0){for(r=new Array(f),d=0;d<f;d++)s[d]=a[d],r[d]=ye(u);o=f}else{for(g=new Array(f),y=new Array(f),l&&(v=new Array(f)),w=0,p=Math.min(o,f);w<p&&s[w]===a[w];w++);for(p=o-1,h=f-1;p>=w&&h>=w&&s[p]===a[h];p--,h--)g[h]=r[p],y[h]=i[p],l&&(v[h]=l[p]);for(k=new Map,b=new Array(h+1),d=h;d>=w;d--)$=a[d],c=k.get($),b[d]=c===void 0?-1:c,k.set($,d);for(c=w;c<=p;c++)$=s[c],d=k.get($),d!==void 0&&d!==-1?(g[d]=r[c],y[d]=i[c],l&&(v[d]=l[c]),d=b[d],k.set($,d)):i[c]();for(d=w;d<f;d++)d in g?(r[d]=g[d],i[d]=y[d],l&&(l[d]=v[d],l[d](d))):r[d]=ye(u);r=r.slice(0,o=f),s=a.slice(0)}return r});function u(f){if(i[d]=f,l){const[k,b]=N(d);return l[d]=b,n(a[d],k)}return n(a[d])}}}function m(e,n){return le(()=>e(n||{}))}function dt(){return!0}const on={get(e,n,t){return n===wt?t:e.get(n)},has(e,n){return n===wt?!0:e.has(n)},set:dt,deleteProperty:dt,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:dt,deleteProperty:dt}},ownKeys(e){return e.keys()}};function Kt(e){return(e=typeof e=="function"?e():e)?e:{}}function pe(...e){let n=!1;for(let s=0;s<e.length;s++){const r=e[s];n=n||!!r&&wt in r,e[s]=typeof r=="function"?(n=!0,Y(r)):r}if(n)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=Kt(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in Kt(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(Kt(e[r])));return[...new Set(s)]}},on);const t={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in t||Object.defineProperty(t,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[i];if(l!==void 0)return l}}})}return t}function zi(e,...n){const t=new Set(n.flat());if(wt in e){const r=n.map(i=>new Proxy({get(o){return i.includes(o)?e[o]:void 0},has(o){return i.includes(o)&&o in e},keys(){return i.filter(o=>o in e)}},on));return r.push(new Proxy({get(i){return t.has(i)?void 0:e[i]},has(i){return t.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!t.has(i))}},on)),r}const s=Object.getOwnPropertyDescriptors(e);return n.push(Object.keys(s).filter(r=>!t.has(r))),n.map(r=>{const i={};for(let o=0;o<r.length;o++){const l=r[o];l in e&&Object.defineProperty(i,l,s[l]?s[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return i})}let Oi=0;function se(){const e=F.context;return e?`${e.id}${e.count++}`:`cl-${Oi++}`}function yn(e){const n="fallback"in e&&{fallback:()=>e.fallback};return Y(Ci(()=>e.each,e.children,n||void 0))}function oe(e){let n=!1;const t=e.keyed,s=Y(()=>e.when,void 0,{equals:(r,i)=>n?r===i:!r==!i});return Y(()=>{const r=s();if(r){const i=e.children,o=typeof i=="function"&&i.length>0;return n=t||o,o?le(()=>i(r)):i}return e.fallback},void 0,void 0)}const ji=it();function ln(e){let n=0,t,s,r,i,o;const[l,a]=N(!1),c=wi(),d={increment:()=>{++n===1&&a(!0)},decrement:()=>{--n===0&&a(!1)},inFallback:l,effects:[],resolved:!1},u=bi();if(F.context&&F.load){const b=F.context.id+F.context.count;let g=F.load(b);if(g&&(r=g[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[y,v]=N(void 0,{equals:!1});i=y,r.then(w=>{if(w||F.done)return w&&(o=w),v();F.gather(b),tt(s),v(),tt()})}}const f=Nt(ji);f&&(t=f.register(d.inFallback));let k;return ge(()=>k&&k()),m(c.Provider,{value:d,get children(){return Y(()=>{if(o)throw o;if(s=F.context,i)return i(),i=void 0;s&&r==="$$f"&&tt();const b=Y(()=>e.children);return Y(g=>{const y=d.inFallback(),{showContent:v=!0,showFallback:w=!0}=t?t():{};if((!y||r&&r!=="$$f")&&v)return d.resolved=!0,k&&k(),k=s=r=void 0,vi(d.effects),b();if(!!w)return k?g:ye(p=>(k=p,s&&(tt({id:s.id+"f",count:0}),s=void 0),e.fallback),u)})})}})}const Ti=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Mi=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ti]),Ai=new Set(["innerHTML","textContent","innerText","children"]),Ei=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Vn=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Di=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ri=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Wi={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Li(e,n,t){let s=t.length,r=n.length,i=s,o=0,l=0,a=n[r-1].nextSibling,c=null;for(;o<r||l<i;){if(n[o]===t[l]){o++,l++;continue}for(;n[r-1]===t[i-1];)r--,i--;if(r===o){const d=i<s?l?t[l-1].nextSibling:t[i-l]:a;for(;l<i;)e.insertBefore(t[l++],d)}else if(i===l)for(;o<r;)(!c||!c.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[i-1]&&t[l]===n[r-1]){const d=n[--r].nextSibling;e.insertBefore(t[l++],n[o++].nextSibling),e.insertBefore(t[--i],d),n[r]=t[i]}else{if(!c){c=new Map;let u=l;for(;u<i;)c.set(t[u],u++)}const d=c.get(n[o]);if(d!=null)if(l<d&&d<i){let u=o,f=1,k;for(;++u<r&&u<i&&!((k=c.get(n[u]))==null||k!==d+f);)f++;if(f>d-l){const b=n[o];for(;l<d;)e.insertBefore(t[l++],b)}else e.replaceChild(t[l++],n[o++])}else o++;else n[o++].remove()}}}const qn="_$DX_DELEGATE";function Ni(e,n,t,s={}){let r;return ye(i=>{r=i,n===document?e():x(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{r(),n.textContent=""}}function S(e,n,t){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return t&&(r=r.firstChild),r}function ot(e,n=window.document){const t=n[qn]||(n[qn]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Gi))}}function Me(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function Ui(e,n,t,s){s==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,s)}function C(e,n){n==null?e.removeAttribute("class"):e.className=n}function Os(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const r=t[0];e.addEventListener(n,t[0]=i=>r.call(e,t[1],i))}else e.addEventListener(n,t)}function Fi(e,n,t={}){const s=Object.keys(n||{}),r=Object.keys(t);let i,o;for(i=0,o=r.length;i<o;i++){const l=r[i];!l||l==="undefined"||n[l]||(Yn(e,l,!1),delete t[l])}for(i=0,o=s.length;i<o;i++){const l=s[i],a=!!n[l];!l||l==="undefined"||t[l]===a||!a||(Yn(e,l,!0),t[l]=a)}return t}function ke(e,n,t){if(!n)return t?Me(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let r,i;for(i in t)n[i]==null&&s.removeProperty(i),delete t[i];for(i in n)r=n[i],r!==t[i]&&(s.setProperty(i,r),t[i]=r);return t}function Bi(e,n={},t,s){const r={};return s||M(()=>r.children=Ye(e,n.children,r.children)),M(()=>n.ref&&n.ref(e)),M(()=>Ii(e,n,t,!0,r,!0)),r}function qe(e,n,t){return le(()=>e(n,t))}function x(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return Ye(e,n,s,t);M(r=>Ye(e,n(),r,t),s)}function Ii(e,n,t,s,r={},i=!1){n||(n={});for(const o in r)if(!(o in n)){if(o==="children")continue;r[o]=Jn(e,o,null,r[o],t,i)}for(const o in n){if(o==="children"){s||Ye(e,n.children);continue}const l=n[o];r[o]=Jn(e,o,l,r[o],t,i)}}function Hi(e){let n,t;return!F.context||!(n=F.registry.get(t=Vi()))?e.cloneNode(!0):(F.completed&&F.completed.add(n),F.registry.delete(t),n)}function Pi(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function Yn(e,n,t){const s=n.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],t)}function Jn(e,n,t,s,r,i){let o,l,a;if(n==="style")return ke(e,t,s);if(n==="classList")return Fi(e,t,s);if(t===s)return s;if(n==="ref")i||t(e);else if(n.slice(0,3)==="on:"){const c=n.slice(3);s&&e.removeEventListener(c,s),t&&e.addEventListener(c,t)}else if(n.slice(0,10)==="oncapture:"){const c=n.slice(10);s&&e.removeEventListener(c,s,!0),t&&e.addEventListener(c,t,!0)}else if(n.slice(0,2)==="on"){const c=n.slice(2).toLowerCase(),d=Di.has(c);if(!d&&s){const u=Array.isArray(s)?s[0]:s;e.removeEventListener(c,u)}(d||t)&&(Os(e,c,t,d),d&&ot([c]))}else if((a=Ai.has(n))||!r&&(Vn[n]||(l=Mi.has(n)))||(o=e.nodeName.includes("-")))n==="class"||n==="className"?C(e,t):o&&!l&&!a?e[Pi(n)]=t:e[Vn[n]||n]=t;else{const c=r&&n.indexOf(":")>-1&&Wi[n.split(":")[0]];c?Ui(e,c,n,t):Me(e,Ei[n]||n,t)}return t}function Gi(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),F.registry&&!F.done&&(F.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let r=s.nextSibling;s.remove(),s=r}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?s.call(t,r,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Ye(e,n,t,s,r){for(F.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(F.context)return t;if(i==="number"&&(n=n.toString()),o){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=Pe(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(F.context)return t;t=Pe(e,t,s)}else{if(i==="function")return M(()=>{let l=n();for(;typeof l=="function";)l=l();t=Ye(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],a=t&&Array.isArray(t);if(an(l,n,t,r))return M(()=>t=Ye(e,l,t,s,!0)),()=>t;if(F.context){if(!l.length)return t;for(let c=0;c<l.length;c++)if(l[c].parentNode)return t=l}if(l.length===0){if(t=Pe(e,t,s),o)return t}else a?t.length===0?Kn(e,l,s):Li(e,t,l):(t&&Pe(e),Kn(e,l));t=l}else if(n instanceof Node){if(F.context&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=Pe(e,t,s,n);Pe(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function an(e,n,t,s){let r=!1;for(let i=0,o=n.length;i<o;i++){let l=n[i],a=t&&t[i];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))r=an(e,l,a)||r;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();r=an(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||r}else e.push(l),r=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return r}function Kn(e,n,t=null){for(let s=0,r=n.length;s<r;s++)e.insertBefore(n[s],t)}function Pe(e,n,t,s){if(t===void 0)return e.textContent="";const r=s||document.createTextNode("");if(n.length){let i=!1;for(let o=n.length-1;o>=0;o--){const l=n[o];if(r!==l){const a=l.parentNode===e;!i&&!o?a?e.replaceChild(r,l):e.insertBefore(r,t):a&&l.remove()}else i=!0}}else e.insertBefore(r,t);return[r]}function Vi(){const e=F.context;return`${e.id}${e.count++}`}const qi="http://www.w3.org/2000/svg";function Yi(e,n=!1){return n?document.createElementNS(qi,e):document.createElement(e)}function Ji(e){const[n,t]=zi(e,["component"]),s=Y(()=>n.component);return Y(()=>{const r=s();switch(typeof r){case"function":return le(()=>r(t));case"string":const i=Ri.has(r),o=F.context?Hi():Yi(r,i);return Bi(o,t,i),o}})}const Xn={dark:240,light:260};function Ki(){const[e,n]=N(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{n(l.matches?"light":"dark")});const[t,s]=N(void 0),r=()=>{switch(t()){case"dark":s("light");break;case"light":s("dark");break;default:s(e()==="light"?"dark":"light")}},i=Y(()=>{var l,a;return(a=(l=t())!=null?l:e())!=null?a:"dark"}),o=Y(()=>i()==="dark"?Xn.dark:Xn.light);return{scheme:i,hue:o,enforceScheme:t,setEnforceScheme:s,toggleScheme:r}}const je=ye(Ki);function _e(e,n){let t={},s=Object.keys(e);for(let r=0,i=s.length;r<i;r+=1){let o=s[r];n.includes(o)||Object.defineProperty(t,o,{get(){return e[o]},configurable:!0,enumerable:!0})}return t}var js=it();function lt(){let e=Nt(js);if(e)return e;throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.")}function Xi(e){return typeof e=="function"&&e.length>0}function Qi(e){let n=lt();return Y(()=>{let t=e.children;return Xi(t)?t(n):t})}function Ke(e){return{get children(){return m(Qi,{get children(){return e.children}})}}}function Zi(e){let n,t;if("defaultOpen"in e){let[s,r]=N(e.defaultOpen);n=s,t=i=>{mi(()=>{var o;r(i),(o=e.onChange)==null||o.call(e,i)})}}else n=()=>e.isOpen,t=s=>{var r;return(r=e.onChange)==null?void 0:r.call(e,s)};return{isOpen(){return n()},setState(s){e.disabled||t(s)},disabled(){return!!e.disabled}}}function eo(e){return typeof e=="function"&&e.length>0}function It(e){let n=Zi(e);return m(js.Provider,{value:n,get children(){return Y(()=>{let t=e.children;return eo(t)?t(n):t})}})}function Re(e,n){return m(Ji,pe({get component(){return e()}},n))}function to(e){return typeof e=="function"}function at(e,n){return t=>{"ref"in e&&to(e.ref)&&e.ref(t),n(t)}}function Ht(e){return{get disabled(){return e()},get"aria-disabled"(){return e()},get"data-sh-disabled"(){return e()}}}function no(e){return{get"aria-expanded"(){return e()},get"data-sh-expanded"(){return e()}}}var so='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';function kn(e,n){let t=e.querySelectorAll(so),s=[];for(let r=0,i=t.length;r<i;r+=1)(!n||!n.contains(t[r]))&&s.push(t[r]);return s}function Ts(e){return!e.matches('[data-sh-disabled="true"]')}function Ms(e,n,t){let s=n+t;for(;s>=0&&s<e.length;){if(Ts(e[s]))return e[s];s+=t}}function As(e,n,t){let s=n+t;for(t===1&&s===e.length&&(s=0),t===-1&&s===-1&&(s=e.length-1);n!==s;){if(Ts(e[s]))return e[s];s+=t,t===1&&s>=e.length&&(s=0),t===-1&&s<0&&(s=e.length-1)}}function ro(e,n){var t;for(let s=0,r=e.length;s<r;s+=1)if(n===e[s]){(t=As(e,s,1))==null||t.focus();break}}function io(e,n){var t;for(let s=0,r=e.length;s<r;s+=1)if(n===e[s]){(t=As(e,s,-1))==null||t.focus();break}}function xn(e){var n;return e.length?((n=Ms(e,-1,1))==null||n.focus(),!0):!1}function oo(e){var n;return e.length?((n=Ms(e,e.length,-1))==null||n.focus(),!0):!1}function Es(e,n){let t=kn(e);n?!document.activeElement||!e.contains(document.activeElement)?oo(t):io(t,document.activeElement):!document.activeElement||!e.contains(document.activeElement)?xn(t):ro(t,document.activeElement)}var lo="data-sh";function Ie(e){return{[lo]:e}}var ao=Ie("button");function co(e){let[n,t]=N();return X(()=>{let s=n();if(s instanceof HTMLElement&&s.tagName!=="BUTTON"){let r=i=>{(i.key==="Enter"||i.key===" ")&&s.click()};s.addEventListener("keydown",r),ge(()=>{s.removeEventListener("keydown",r)})}}),Re(()=>{var s;return(s=e.as)!=null?s:"button"},pe({get tabindex(){return e.disabled?-1:0},role:"button"},Ht(()=>e.disabled),_e(e,["as","ref"]),ao,{ref:at(e,s=>{t(()=>s)})}))}function _n(e,n,t){return m(oe,{get when(){var s;return(s=e.unmount)!=null?s:!0},get fallback(){return t()},get children(){return m(oe,{get when(){return n()},get children(){return t()}})}})}function Qn(){var e,n;return(n=(e=window.getSelection())==null?void 0:e.focusNode)==null?void 0:n.parentElement}function uo(e){if(e){let n=e.getAttribute("tabindex");e.setAttribute("tabindex","-1"),e.focus(),e.blur(),n?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}var fo=class{constructor(){typeof document<"u"&&(this.returnElement=document.activeElement,this.fsp=Qn()),ge(()=>{this.load()})}load(){this.returnElement instanceof HTMLElement?this.returnElement.focus():uo(this.fsp)}save(){this.returnElement=document.activeElement,this.fsp=Qn()}};function Pt(){return new fo}var Sn=it();function Ds(e){let n=Nt(Sn);if(n)return n;throw new Error(`<${e}> must be used inside a <Dialog>`)}var Rs=Ie("dialog"),ho=Ie("dialog-overlay"),go=Ie("dialog-panel");function mo(e){let n=se(),t=se(),s=se(),r=se(),i=Pt();return m(Sn.Provider,{value:{ownerID:n,panelID:t,titleID:s,descriptionID:r},get children(){return m(It,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(o){var l,a,c;o&&(i.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,o),o||((c=e.onClose)==null||c.call(e),i.load())},children:({isOpen:o})=>_n(e,o,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},pe(_e(e,["as","children","unmount","isOpen","disabled","onOpen","onClose","onChange"]),Rs,{id:n,role:"dialog","aria-modal":!0,"aria-labelledby":s,"aria-describedby":r},Ke(e))))})}})}function po(e){let n=se(),t=se(),s=se(),r=se(),i=Pt();return m(Sn.Provider,{value:{ownerID:n,panelID:t,titleID:s,descriptionID:r},get children(){return m(It,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(o){var l,a,c;o&&(i.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,o),o||((c=e.onClose)==null||c.call(e),i.load())},children:({isOpen:o})=>_n(e,o,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},pe(_e(e,["as","children","unmount","defaultOpen","disabled","onOpen","onClose","onChange"]),Rs,{id:n,role:"dialog","aria-modal":!0,"aria-labelledby":s,"aria-describedby":r},Ke(e))))})}})}function bo(e){return"defaultOpen"in e}function vo(e){return bo(e)?m(po,e):m(mo,e)}function $o(e){Ds("DialogOverlay");let n=lt(),[t,s]=N();return X(()=>{let r=t();if(r instanceof HTMLElement){let i=()=>{n.setState(!1)};r.addEventListener("click",i),ge(()=>{r.removeEventListener("click",i)})}}),Re(()=>{var r;return(r=e.as)!=null?r:"div"},pe(_e(e,["as","children","ref"]),ho,{ref:at(e,r=>{s(()=>r)})},Ke(e)))}function wo(e){let n=Ds("DialogPanel"),t=lt(),[s,r]=N();return X(()=>{let i=s();if(i instanceof HTMLElement&&t.isOpen()){xn(kn(i));let o=l=>{e.disabled||(l.key==="Tab"?(l.preventDefault(),Es(i,l.shiftKey)):l.key==="Escape"&&t.setState(!1))};i.addEventListener("keydown",o),ge(()=>{i.removeEventListener("keydown",o)})}}),Re(()=>{var i;return(i=e.as)!=null?i:"div"},pe(_e(e,["as","children","ref"]),go,{id:n.panelID,ref:at(e,i=>{r(()=>i)})},Ke(e)))}var Cn=it();function Ws(e){let n=Nt(Cn);if(n)return n;throw new Error(`<${e}> must be used inside a <Popover>`)}var Ls=Ie("popover"),yo=Ie("popover-button"),ko=Ie("popover-panel");function xo(e){let[n,t]=N(!1),s=se(),r=se(),i=se(),o=Pt();return m(Cn.Provider,{value:{ownerID:s,buttonID:r,panelID:i,get hovering(){return n()},set hovering(l){t(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},pe(_e(e,["isOpen","as","children","disabled","onChange"]),Ls,Ht(()=>e.disabled),{get children(){return m(It,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(l){var a,c,d;l&&(o.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((d=e.onClose)==null||d.call(e),o.load())},get children(){return e.children}})}}))}})}function _o(e){let[n,t]=N(!1),s=se(),r=se(),i=se(),o=Pt();return m(Cn.Provider,{value:{ownerID:s,buttonID:r,panelID:i,get hovering(){return n()},set hovering(l){t(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},pe(_e(e,["defaultOpen","as","children","disabled","onChange"]),Ls,Ht(()=>e.disabled),{get children(){return m(It,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(l){var a,c,d;l&&(o.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((d=e.onClose)==null||d.call(e),o.load())},get children(){return e.children}})}}))}})}function So(e){return"defaultOpen"in e}function Co(e){return So(e)?m(_o,e):m(xo,e)}function zo(e){let n=Ws("PopoverButton"),t=lt(),[s,r]=N();return X(()=>{let i=s();if(i instanceof HTMLElement){let o=()=>{t.disabled()||e.disabled||t.setState(!t.isOpen())};i.addEventListener("click",o),ge(()=>{i.removeEventListener("click",o)});let l=()=>{n.hovering=!0},a=()=>{n.hovering=!1};i.addEventListener("mouseenter",l),i.addEventListener("mouseleave",a),ge(()=>{i.removeEventListener("mouseenter",l),i.removeEventListener("mouseleave",a)})}}),m(co,pe(_e(e,["children","ref"]),yo,{id:n.buttonID,ref:at(e,i=>{r(()=>i),i instanceof HTMLElement&&(n.anchor=i)}),get"aria-controls"(){return t.isOpen()&&n.panelID}},Ht(()=>{let i=t.disabled(),o=e.disabled;return i||o}),no(()=>t.isOpen()),Ke(e)))}function Oo(e){let n=Ws("PopoverPanel"),t=lt(),[s,r]=N();return X(()=>{let i=s();if(i instanceof HTMLElement&&t.isOpen()){xn(kn(i));let o=a=>{e.disabled||(a.key==="Tab"?(a.preventDefault(),Es(i,a.shiftKey)):a.key==="Escape"&&t.setState(!1))},l=a=>{n.hovering||(!a.relatedTarget||!i.contains(a.relatedTarget))&&t.setState(!1)};i.addEventListener("keydown",o),i.addEventListener("focusout",l),ge(()=>{i.removeEventListener("keydown",o),i.removeEventListener("focusout",l)})}}),_n(e,()=>t.isOpen(),()=>Re(()=>{var i;return(i=e.as)!=null?i:"div"},pe(_e(e,["as","unmount","children","ref"]),ko,{id:n.panelID,ref:at(e,i=>{r(()=>i)})},Ke(e))))}const jo=S("<section></section>"),To=e=>{const{route:n}=rt,[t,s]=N(!1);X(()=>{e.strict?s(n().current===e.path):s(n().current.startsWith(e.path))}),X(ys(t,()=>{var d,u;t()?(d=e.onOpen)==null||d.call(e):(u=e.onClose)==null||u.call(e)}));let r,i=setTimeout(()=>{},0);const[o,l]=N(!1),[a,c]=N("");return X(()=>{var u,f;clearTimeout(i);const d=e.path.split("/").pop();t()?(l(!0),n().firstDifferent[1]===d&&c((u=e.enter)!=null?u:"")):n().firstDifferent[0]===d&&(c((f=e.leave)!=null?f:""),requestAnimationFrame(()=>{if(!r)return;const k=window.getComputedStyle(r),b=(Number(k.animationDelay.slice(0,-1))+Number(k.animationDuration.slice(0,-1)))*1e3;i=setTimeout(()=>{l(!1)},b)}))}),m(oe,{get when(){return o()},get children(){const d=jo.cloneNode(!0),u=r;return typeof u=="function"?qe(u,d):r=d,x(d,()=>e.children),M(()=>{var f;return C(d,`absolute inset-0 ${a()} ${(f=e.class)!=null?f:""}`)}),d}})},Mo=e=>{let n=[];return e.split("/").forEach(t=>{t===".."?n.pop():n.push(t)}),`${n.join("/")}`},Ao=(e,n)=>{const t=e.split("/"),s=n.split("/"),r=Math.max(t.length,s.length);for(let i=0;i<r;++i)if(t[i]!=s[i])return[t[i],s[i]];return[void 0,void 0]},Eo=()=>{const[e,n]=N({previous:"/",current:"/",firstDifferent:[void 0,void 0]});return{route:e,navigate:s=>{const r=e().current,i=Mo(s);n({previous:r,current:i,firstDifferent:Ao(r,i)})}}},rt=ye(Eo),St=e=>m(To,{get path(){return e.path},get strict(){return e.strict},class:"animation-duration-m.4",enter:"animate-in",leave:"animate-out",get children(){return e.children}}),nt=e=>{rt.navigate(e),history.pushState({},"",`?navigation=${e}`)},Ns=new AbortController,Do=Ns.signal,Ro=(e="/")=>{const n=()=>{var i;const t=window.location.search,r=(i=new URLSearchParams(t).get("navigation"))!=null?i:e;rt.navigate(r)};window.addEventListener("popstate",n,{signal:Do}),n()},Wo=()=>{Ns.abort()},Lo="_button_mk24k_1",No="_isGhost_mk24k_29",Uo="_isHalf_mk24k_38",Fo="_isSecondary_mk24k_42",Bo="_isSolid_mk24k_46",Qe={button:Lo,isGhost:No,isHalf:Uo,isSecondary:Fo,isSolid:Bo},Io=S('<div class="flex flex-row items-center justify-center flex-1 gap-s.8"></div>'),zn=e=>{const n=e.as;return m(n,{get class(){var t;return[(t=e.class)!=null?t:"rounded-s p-s",Qe.button,(()=>e.style==="solid"?Qe.isSolid:e.style==="secondary"?Qe.isSecondary:e.style==="half"?Qe.isHalf:Qe.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){const t=Io.cloneNode(!0);return x(t,()=>e.children),t}})},Ho=S("<button></button>"),Ae=e=>m(zn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:n=>(()=>{const t=Ho.cloneNode(!0);return Os(t,"click",e.onClick,!0),x(t,()=>n.children),M(s=>{var a;const r=n.class,i=n.style,o=(a=e.type)!=null?a:"button",l=e.disabled;return r!==s._v$&&C(t,s._v$=r),s._v$2=ke(t,i,s._v$2),o!==s._v$3&&Me(t,"type",s._v$3=o),l!==s._v$4&&(t.disabled=s._v$4=l),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})(),get children(){return e.children}});ot(["click"]);const Po=S("<a></a>"),Us=e=>m(zn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:n=>(()=>{const t=Po.cloneNode(!0);return x(t,()=>n.children),M(s=>{const r=n.class,i=`text-decoration: none; ${n.style}`,o=e.href;return r!==s._v$&&C(t,s._v$=r),s._v$2=ke(t,i,s._v$2),o!==s._v$3&&Me(t,"href",s._v$3=o),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),get children(){return e.children}}),Go=""+new URL("logo-white.c0f694e8.svg",import.meta.url).href,Vo=""+new URL("logo-black.123cdd58.svg",import.meta.url).href,qo=S('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div></div></div>'),ut=e=>(()=>{const n=qo.cloneNode(!0),t=n.firstChild;return x(t,()=>e.children),M(()=>C(t,`size-i-full max-size-i-l ${e.class}`)),n})(),Yo="modulepreload",Jo=function(e,n){return new URL(e,n).href},Zn={},Xt=function(n,t,s){if(!t||t.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Jo(i,s),i in Zn)return;Zn[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const u=r[d];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Yo,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())},Ko=()=>{const[e]=Jt(async()=>(await Xt(()=>import("./index.8ba2f42b.js").then(s=>s.i),[],import.meta.url)).default),[n]=Jt(async()=>(await Xt(()=>import("./index.b237e328.js"),[],import.meta.url)).default),[t]=Jt(async()=>await Xt(()=>import("./index.59ce5a7e.js"),[],import.meta.url));return{highlighter:n,formatter:e,md:t}},Ne=ye(Ko),Xo=`module.exports = {
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
`,Qo=`<div class="bg-red-600 text-red-200"> Red </div>
<div class="bg-green-600 text-green-200"> Green </div>
<div class="bg-blue-600 text-blue-200"> Blue </div>
<div class="bg-blue-600 text-desaturated-blue-200"> Blue but text is desaturated </div>
`,Zo=`unocss({
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
`,el=`<div class="scheme-auto-0 bg-surface"> Red </div>
<div class="scheme-auto-120 bg-surface"> Green </div>
<div class="scheme-auto-240 bg-surface"> Blue </div>
<div class="scheme-auto-240 bg-surface text-fg-2"> Blue but text is desaturated </div>
`,tl=`<div class="bg-blue-100 text-blue-900"> Primary </div>
<div class="bg-blue-100 text-blue-800"> Secondary </div>
<div class="bg-blue-100 text-blue-600"> Tertiary </div>
`,nl=`<div class="bg-blue"> Primary (text-fg-1 is applied by default) </div>
<div class="bg-blue text-fg-2"> Secondary </div>
<div class="bg-blue text-fg-3"> Tertiary </div>
`,sl=`module.exports = {
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
`,rl=`unocss({
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
`,il=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute width-full height-1 inset-bottom-[0.375rem]"></div>
  <!-- (4-1) / 2 -->
  <!-- (1rem - 0.25rem) / 2 -->
  <!-- was hard to calculate and will break if the theme changes -->
</div>
`,ol=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-1 inset-bottom-$(($4-$1)/2)"></div>
  <!-- We did not need to calculate anything and this will not break if proportions change -->
</div>
`,ll=`// Not possible \u{1F641}
`,al=`import { getLCA, LCHToCSSColor } from "unocss-preset-windblade/core";
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
`,cl=S('<div class="grid grid-fit-cols-l.2 gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T\u{1F92E}ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade \u26A1:</h5></div></div>'),ft=S('<div class="size-b-px bg-surface"></div>'),ht=S("<pre></pre>"),dl=S('<div class="i-mdi-arrow-right"></div>'),ul=S('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.</li></ul></div>'),fl=S("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas).</p>"),hl=S(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p></section></div>`),gl=S("<h3>Ready to improve your Tailwind workflow?</h3>"),ml=S('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.</p>'),pl=S('<div class="size-b-full overflow-auto"><section class="p--bm.2 p-b-m font-semibold bg-gradient-to-ss from-surface"></section><section class="bg-gradient-to-ss from-surface to-normal-2"></section><footer></footer></div>'),B={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},Se=e=>(()=>{const n=cl.cloneNode(!0),t=n.firstChild,s=t.firstChild,r=t.nextSibling,i=r.firstChild;return x(t,m(oe,{get when(){return e.code.tw.js},keyed:!0,children:o=>[ft.cloneNode(!0),(()=>{const l=ht.cloneNode(!0);return M(a=>{var u;const c=`${B.pre} js`,d=(u=Ne.highlighter())==null?void 0:u.highlight(o,{language:"js"}).value;return c!==a._v$3&&C(l,a._v$3=c),d!==a._v$4&&(l.innerHTML=a._v$4=d),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),x(t,m(oe,{get when(){return e.code.tw.html},keyed:!0,children:o=>[ft.cloneNode(!0),(()=>{const l=ht.cloneNode(!0);return M(a=>{var u;const c=B.pre,d=(u=Ne.highlighter())==null?void 0:u.highlight(o,{language:"xml"}).value;return c!==a._v$5&&C(l,a._v$5=c),d!==a._v$6&&(l.innerHTML=a._v$6=d),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),x(r,m(oe,{get when(){return e.code.wb.js},keyed:!0,children:o=>[ft.cloneNode(!0),(()=>{const l=ht.cloneNode(!0);return M(a=>{var u;const c=`${B.pre} js`,d=(u=Ne.highlighter())==null?void 0:u.highlight(o,{language:"js"}).value;return c!==a._v$7&&C(l,a._v$7=c),d!==a._v$8&&(l.innerHTML=a._v$8=d),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),x(r,m(oe,{get when(){return e.code.wb.html},keyed:!0,children:o=>[ft.cloneNode(!0),(()=>{const l=ht.cloneNode(!0);return M(a=>{var u;const c=B.pre,d=(u=Ne.highlighter())==null?void 0:u.highlight(o,{language:"xml"}).value;return c!==a._v$9&&C(l,a._v$9=c),d!==a._v$10&&(l.innerHTML=a._v$10=d),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),M(o=>{const l=B.h5,a=B.h5;return l!==o._v$&&C(s,o._v$=l),a!==o._v$2&&C(i,o._v$2=a),o},{_v$:void 0,_v$2:void 0}),n})(),es=()=>m(Ae,{style:"solid",onClick:()=>nt("/docs/Usage-Installation"),get children(){return["Get started",dl.cloneNode(!0)]}}),bl=()=>(()=>{const e=pl.cloneNode(!0),n=e.firstChild,t=n.nextSibling,s=t.nextSibling;return x(n,m(ut,{get children(){return[(()=>{const r=ul.cloneNode(!0),i=r.firstChild,o=i.nextSibling,l=o.firstChild,a=l.nextSibling,c=a.nextSibling,d=c.nextSibling,u=d.nextSibling;return M(f=>{const k=B.header.li,b=B.header.li,g=B.header.li,y=B.header.li,v=B.header.li;return k!==f._v$11&&C(l,f._v$11=k),b!==f._v$12&&C(a,f._v$12=b),g!==f._v$13&&C(c,f._v$13=g),y!==f._v$14&&C(d,f._v$14=y),v!==f._v$15&&C(u,f._v$15=v),f},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),r})(),(()=>{const r=fl.cloneNode(!0);return M(()=>C(r,`${B.p} text-fg-3 m-be-s`)),r})(),m(es,{})]}})),x(e,m(ut,{get children(){const r=hl.cloneNode(!0),i=r.firstChild,o=i.firstChild,l=o.nextSibling,a=l.firstChild,c=a.firstChild,d=c.nextSibling,u=a.nextSibling,f=u.firstChild,k=f.nextSibling,b=u.nextSibling,g=b.firstChild,y=g.nextSibling,v=i.nextSibling,w=v.firstChild,p=w.nextSibling,h=v.nextSibling,$=h.firstChild,_=$.nextSibling,O=h.nextSibling,E=O.firstChild,W=E.nextSibling,j=O.nextSibling,D=j.firstChild,T=D.nextSibling,L=T.nextSibling;return x(a,m(Se,{code:{tw:{js:Xo,html:Qo},wb:{js:Zo,html:el}}}),null),x(u,m(Se,{code:{tw:{html:tl},wb:{html:nl}}}),null),x(b,m(Se,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),x(v,m(Se,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all \u{1F641}</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),x(h,m(Se,{code:{tw:{js:sl},wb:{js:rl}}}),null),x(O,m(Se,{code:{tw:{js:ll},wb:{js:al}}}),null),x(j,m(Se,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),L),x(j,m(Se,{code:{tw:{html:il},wb:{html:ol}}}),null),M(z=>{const V=B.h3,Q=B.h4,J=B.p,Z=B.h4,ue=B.p,En=B.h4,Dn=B.p,Rn=B.h3,Wn=B.p,Ln=B.h3,Nn=B.p,Un=B.h3,Fn=B.p,Bn=B.h3,In=B.p,Hn=B.p;return V!==z._v$16&&C(o,z._v$16=V),Q!==z._v$17&&C(c,z._v$17=Q),J!==z._v$18&&C(d,z._v$18=J),Z!==z._v$19&&C(f,z._v$19=Z),ue!==z._v$20&&C(k,z._v$20=ue),En!==z._v$21&&C(g,z._v$21=En),Dn!==z._v$22&&C(y,z._v$22=Dn),Rn!==z._v$23&&C(w,z._v$23=Rn),Wn!==z._v$24&&C(p,z._v$24=Wn),Ln!==z._v$25&&C($,z._v$25=Ln),Nn!==z._v$26&&C(_,z._v$26=Nn),Un!==z._v$27&&C(E,z._v$27=Un),Fn!==z._v$28&&C(W,z._v$28=Fn),Bn!==z._v$29&&C(D,z._v$29=Bn),In!==z._v$30&&C(T,z._v$30=In),Hn!==z._v$31&&C(L,z._v$31=Hn),z},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),r}}),t),x(t,m(ut,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const r=gl.cloneNode(!0);return M(()=>C(r,B.h3)),r})(),(()=>{const r=ml.cloneNode(!0);return M(()=>C(r,B.p)),r})(),m(es,{})]}})),x(s,m(ut,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",m(Us,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})(),P={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},I=e=>e.filter(Boolean).join("-"),vl=(e,n,t,s,r)=>[r(I([e,n]),I([t,s])),r(I([e,"b",n]),I([t,"block",s])),r(I([e,"i",n]),I([t,"inline",s]))],cn=(e,n,t,s,r)=>[r(I([e,n]),I([t,s])),r(I([e,"b",n]),I([t,"block",s])),r(I([e,"bs",n]),I([t,"block-start",s])),r(I([e,"be",n]),I([t,"block-end",s])),r(I([e,"i",n]),I([t,"inline",s])),r(I([e,"is",n]),I([t,"inline-start",s])),r(I([e,"ie",n]),I([t,"inline-end",s]))],dn=(e,n,t,s,r)=>[r(I([e,n]),I([t,s])),r(I([e,"ss",n]),I([t,"start-start",s])),r(I([e,"se",n]),I([t,"start-end",s])),r(I([e,"ee",n]),I([t,"end-end",s])),r(I([e,"es",n]),I([t,"end-start",s]))];function $l(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function On(e){const n=e.length;let t=-1,s,r="";const i=e.charCodeAt(0);for(;++t<n;){if(s=e.charCodeAt(t),s===0){r+="\uFFFD";continue}if(s===44){r+="\\,";continue}if(s>=1&&s<=31||s===127||t===0&&s>=48&&s<=57||t===1&&s>=48&&s<=57&&i===45){r+=`\\${s.toString(16)} `;continue}if(t===0&&n===1&&s===45){r+=`\\${e.charAt(t)}`;continue}if(s>=128||s===45||s===95||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){r+=e.charAt(t);continue}r+=`\\${e.charAt(t)}`}return r}function wl(e){const n=function(s){var i;const r=((i=this.__options)==null?void 0:i.sequence)||[];this.__options.sequence=[];for(const o of r){const l=e[o](s);if(l!=null)return l}};function t(s,r){return s.__options||(s.__options={sequence:[]}),s.__options.sequence.push(r),s}for(const s of Object.keys(e))Object.defineProperty(n,s,{enumerable:!0,get(){return t(this,s)}});return n}const ts=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"];Object.assign({},...ts.map(e=>({[e.replace(/ /,"-")]:e})),...ts.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e})));const yl=["inherit","initial","revert","revert-layer","unset"],jn=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,kl=/^(-?\d*(?:\.\d+)?)$/i,Fs=/^(px)$/i,xl=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function ae(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function _l(e){const n=e.match(jn);if(!n)return;const[,t,s]=n,r=parseFloat(t);if(s&&!Number.isNaN(r))return`${ae(r)}${s}`}function Sl(e){if(e==="auto"||e==="a")return"auto"}function Cl(e){if(e.match(Fs))return`1${e}`;const n=e.match(jn);if(!n)return;const[,t,s]=n,r=parseFloat(t);if(!Number.isNaN(r))return r===0?"0":s?`${ae(r)}${s}`:`${ae(r/4)}rem`}function zl(e){if(e.match(Fs))return`1${e}`;const n=e.match(jn);if(!n)return;const[,t,s]=n,r=parseFloat(t);if(!Number.isNaN(r))return r===0?"0":s?`${ae(r)}${s}`:`${ae(r)}px`}function Ol(e){if(!kl.test(e))return;const n=parseFloat(e);if(!Number.isNaN(n))return ae(n)}function jl(e){e.endsWith("%")&&(e=e.slice(0,-1));const n=parseFloat(e);if(!Number.isNaN(n))return`${ae(n/100)}`}function Tl(e){if(e==="full")return"100%";const[n,t]=e.split("/"),s=parseFloat(n)/parseFloat(t);if(!Number.isNaN(s))return s===0?"0":`${ae(s*100)}%`}const Ml=/^\[(color|length|position|quoted|string):/i;function Gt(e,n){if(e&&e.startsWith("[")&&e.endsWith("]")){let t,s;const r=e.match(Ml);if(r?(n||(s=r[1]),t=e.slice(r[0].length,-1)):t=e.slice(1,-1),!t)return;let i=0;for(const o of t)if(o==="[")i+=1;else if(o==="]"&&(i-=1,i<0))return;if(i)return;switch(s){case"string":return t.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return t.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return t.replace(/(url\(.*?\))/g,o=>o.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,o=>{const l=[];return o.replace(/var\((--.+?)[,)]/g,(a,c)=>(l.push(c),a.replace(c,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function Al(e){return Gt(e)}function El(e){return Gt(e,"color")}function Dl(e){return Gt(e,"length")}function Rl(e){return Gt(e,"position")}function Wl(e){if(e.match(/^\$\S/))return`var(--${On(e.slice(1))})`}function Ll(e){const n=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!n)return;const[,t,s]=n,r=parseFloat(t);if(!Number.isNaN(r))return r===0&&!s?"0s":s?`${ae(r)}${s}`:`${ae(r)}ms`}function Nl(e){const n=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!n)return;const[,t,s]=n,r=parseFloat(t);if(!Number.isNaN(r))return r===0?"0":s?`${ae(r)}${s}`:`${ae(r)}deg`}function Ul(e){if(yl.includes(e))return e}function Fl(e){if(e.split(",").every(n=>xl.includes(n)))return e}function Bl(e){if(["top","left","right","bottom","center"].includes(e))return e}const Il={__proto__:null,numberWithUnit:_l,auto:Sl,rem:Cl,px:zl,number:Ol,percent:jl,fraction:Tl,bracket:Al,bracketOfColor:El,bracketOfLength:Dl,bracketOfPosition:Rl,cssvar:Wl,time:Ll,degree:Nl,global:Ul,properties:Fl,position:Bl},Bs=wl(Il),Hl=["%alpha","<alpha-value>"];new RegExp(Hl.map(e=>$l(e)).join("|"));const Pl=(e,n)=>{let t=e;for(Object.entries(n.windblade.proportions).forEach(([s,r])=>{t=t.replaceAll(`$${s}`,r.toString())});t.includes("$(");){let s=t.indexOf("$")+1,r=t.substring(s),i=0,o=i,l=0;for(let c=0;c<r.length;++c)if(r[c]==="("&&++l,r[c]===")"&&--l,l===0){o=c+1;break}const a=r.substring(i,o);t=t.replace(`$${a}`,Function(`'use strict'; return (${a})`)())}return t},Gl=(e,n,t)=>{var l;let s=n.windblade.proportions[e];if(s!==void 0)return`${s}${t}`;let r=(l=n.windblade.miscSizes)==null?void 0:l[e];if(r!==void 0)return`${r}`;const i=Pl(e,n),o=Bs.bracket(i);if(o!==void 0)return o;if(!Number.isNaN(Number(i)))return`${i}${t}`},ee=(e,n,t)=>[new RegExp(`^${e}-(.+)$`),(s,{theme:r})=>{var o;let i=Gl(s[1],r,(o=t==null?void 0:t.defaultUnit)!=null?o:"rem");if(i!==void 0)return t!=null&&t.postprocess&&(i=t.postprocess(i)),{[n]:i}}],Tn=(e,n,t,s)=>vl(e,n,t,s,ee),ct=(e,n,t,s)=>cn(e,n,t,s,ee),Vl=(e,n,t,s)=>dn(e,n,t,s,ee),De=Object.entries,Ct=Object.keys,ql=()=>({rules:[[new RegExp("^(aspect)-(.+)$"),t=>{if(!t[2].includes(":"))return{"aspect-ratio":t[2]}}]],docs:{description:"Windblade uses CSS ratios instead of presets.",utilities:["aspect-<ratio>"],preview:t=>"TODO"}}),Yl=()=>({rules:[],docs:{description:"Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.",utilities:[]}}),Jl=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-after-${s}`,{"break-after":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-after-${s}`)};return{rules:n,docs:t}},Kl=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-before-${s}`,{"break-before":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-before-${s}`)};return{rules:n,docs:t}},Xl=()=>{const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"],n={hidden:"none"};return{rules:e.map(r=>[`${r}`,{display:Object.keys(n).includes(r)?n[r]:r}]),docs:{description:"Windblade removes some utilities from this group that cannot be sued semantically.",utilities:e,preview:r=>{switch(r){default:return`
            <div>
              <div class="bg-accent p-s rounded-s.4 ${r}">1</div>
              <div class="bg-accent p-s rounded-s.4 ${r}">2</div>
              <div class="bg-accent p-s rounded-s.4 ${r}">3</div>
            </div>
          `}}}}},Ql=()=>{const e=[...De(P.edges).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),...De(P.coners).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),["object-center",{"object-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(P.edges),...Object.keys(P.coners),"center"].map(t=>`object-${t}`),preview:t=>`
      <img alt="Random demo" src="https://picsum.photos/600/400" class="rounded-s.4 max-size-i-l.2 object-none ${t}">
    `};return{rules:e,docs:n}},Zl=new Map([["Aspect Ratio",ql()],["Container",Yl()],["Break After",Jl()],["Break Before",Kl()],["Disaply",Xl()],["Object Position",Ql()]]),ea=Zl,Is=(e,n)=>()=>{const t=[[`auto-${e}-auto`,{["grid-auto-"+n]:"auto"}],[`auto-${e}-fr`,{["grid-auto-"+n]:"minmax(0, 1fr)"}],ee(`auto-${e}`,`grid-auto-${n}`)],s={description:"Added utilities for controlling the size of implicitly-created grid columns with proportion units.",utilities:[`auto-${e}-auto`,`auto-${e}-fr`,`auto-${e}-<theme.windblade.proportions>`],preview:r=>`
      <div class="grid ${r} ${r.includes("cols")?"grid-flow-col":""} gap-s bg-accent-3 rounded-s.4 size-i-full">
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
    `};return{rules:t,docs:s}},ta=Is("cols","columns"),na=Is("rows","rows"),Vt=(e,n,t)=>()=>{const s=[ee(`grid-${e}-${n}s`,`grid-template-${t}s`,{postprocess:i=>`repeat(auto-fit, minmax(${i}, 1fr))`})],r={description:`Utilities specifying the columns in a grid layout using auto-${e}. Missing from Tailwind.`,utilities:[`grid-${e}-${n}s-<theme.windblade.proportions>`],preview:i=>`
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
    `};return{rules:s,docs:r}},sa=Vt("fit","col","column"),ra=Vt("fill","col","column"),ia=Vt("fit","row","row"),oa=Vt("fill","row","row"),la=new Map([["Grid Auto Columns",ta()],["Grid Auto Rows",na()],["Grid Fit Columns",sa()],["Grid Fit Rows",ia()],["Grid Fill Clumns",ra()],["Grid Fill Rows",oa()]]),aa=la,ca=()=>{const e=ct("p","","padding",""),n={description:"Replaced physical properties with logical.",utilities:["p",...Object.keys(P.axis).map(t=>`p-${t}`),...Object.keys(P.edges).map(t=>`p-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="${t} rounded-s bg-accent">
        <div class="border border-dashed rounded-s.2">${t}</div>
      </div>
    `};return{rules:e,docs:n}},da=()=>{const e=ct("m","","margin",""),n={description:"Replaced physical properties with logical.",utilities:["m",...Object.keys(P.axis).map(t=>`m-${t}`),...Object.keys(P.edges).map(t=>`m-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="border border-dashed border-color-accent rounded-s.2">
        <div class="${t} p-s rounded-s bg-accent">${t}</div>
      </div>
    `};return{rules:e,docs:n}},ua=()=>({rules:[],docs:{description:"Removed this. Please use gap and flex/grid/columns instead",utilities:[]}}),fa=new Map([["Padding",ca()],["Margin",da()],["Space between",ua()]]),ha=fa,ga=()=>({rules:[],docs:{description:"Removed this, as well as min and max variants, in favor of the size counterparts",utilities:[]}}),ma=()=>{const e=Tn("size","","","size"),n={description:"Utilities for setting the size of an element. Missing from Tailwind.",utilities:[...Object.keys(P.axis).map(t=>`size-${t}-<theme.windblade.sizes>`)],preview:t=>`
      <div class="${t} ${t.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
    `};return{rules:e,docs:n}},Hs=e=>`
  <div class="${e} ${e.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`,pa=()=>{const e=Tn("min-size","","min","size"),n={description:"Utilities for setting the minimum size of an element. Missing from Tailwind.",utilities:Object.keys(P.axis).map(t=>`min-size-${t}-<theme.windblade.proportions>`),preview:Hs};return{rules:e,docs:n}},ba=()=>{const e=Tn("max-size","","max","size"),n={description:"Utilities for setting the maximum size of an element. Missing from Tailwind.",utilities:Object.keys(P.axis).map(t=>`max-size-${t}-<theme.windblade.proportions>`),preview:Hs};return{rules:e,docs:n}},va=new Map([["Width & Height",ga()],["Size",ma()],["Min-Size",pa()],["Max-Size",ba()]]),$a=va,me=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var r;if((r=s.windblade.miscColors)!=null&&r[t[2]])return{[n]:t[2]};if(s.windblade.colors[t[2]])return{[n]:`var(--${t[2]}-base)`}}],wa=e=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:t})=>{const s=t.windblade.colors[n[2]];if(!s)return;const r={background:`var(--${n[2]}-base)`,color:`var(--${n[2]}-fg-1)`};for(let i=1;i<=s.on.length;++i)r[`--fg-${i}`]=`var(--${n[2]}-fg-${i})`;return r}],He=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var r;return(r=s.windblade.miscColors)!=null&&r[t[2]]?{[n]:t[2]}:{[n]:`var(--fg-${t[2]})`}}],ya=()=>({rules:[me("bg","background-color"),wa("bg"),He("bg-fg","background-color")],docs:{description:"Windblade uses semantic colors.",utilities:["bg-<theme.windblade.colors>","bg-<theme.windblade.miscColors>","bg-fg-<integer>"],preview:t=>t.startsWith("bg-fg")?`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full ${t}"></div>
          </div>
        `:`
          <div class="${t} size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s flex items-center justify-center text-center">
            ${t}
          </div>
        `}}),ka=()=>{const e=[...De(P.edges).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),...De(P.coners).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),["bg-center",{"background-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(P.edges),...Object.keys(P.coners),"center"].map(t=>`bg-${t}`),preview:t=>`
      <div class="${t} rounded-s.4 size-i-full max-size-i-l.2 aspect-10/6" style="background-image: url('https://picsum.photos/600/400')"></div>
    `};return{rules:e,docs:n}},xa=()=>{const e=[["bg-none",{"background-image":"none"}],...Ct(P.edges).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${P.edges[t]}), var(--wb-gradient-stops))`}]),...Ct(P.coners).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${P.coners[t]}), var(--wb-gradient-stops))`}])],n={description:"Repalced static colors with sematic colors.",utilities:["bg-none",...Object.keys(P.edges).map(t=>`bg-gradient-to-${t}`),...Object.keys(P.coners).map(t=>`bg-gradient-to-${t}`)],preview:t=>`
      <div class="${t} from-accent size-i-full size-b-l.2 rounded-s"></div>
    `};return{rules:e,docs:n}},_a=()=>({rules:[me("from","--wb-gradient-from"),me("to","--wb-gradient-to")],docs:{description:"Repalced static colors with sematic colors. Temporarily missing the 'via' utilities.",utilities:["from-<theme.windblade.colors>","from-<theme.windblade.miscColors>","to-<theme.windblade.colors>","to-<theme.windblade.miscColors>"],preview:t=>`
      <div class="bg-gradient-to-ie ${t} ${t.startsWith("from")?"to-accent-2":"from-accent-2"} size-i-full size-b-l.2 rounded-s"></div>
    `}}),Sa=new Map([["Color",ya()],["Background Position",ka()],["Background Image",xa()],["Gradient Color Stops",_a()]]),Ca=Sa,za=()=>({rules:[],docs:{description:"Font family utilities have been removed.",utilities:[]}}),Oa=()=>({rules:[ee("text","font-size")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["text-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),ja=()=>({rules:[],docs:{description:"Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.",utilities:[]}}),Ta=()=>({rules:[ee("tracking","letter-spacing",{defaultUnit:"em"})],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["tracking-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Ma=()=>({rules:[ee("leading","line-height",{defaultUnit:""})],docs:{description:"Windblade proportions are used instead of separate size values. Setting line height in rem units is not possible at the moment.",utilities:["leading-<theme.windblade.proportions>"],preview:t=>`<div class="${t} text-center" style="max-inline-size: 36ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<div>`}}),Aa=()=>({rules:[me("text","color"),He("text-fg","color")],docs:{description:"Windblade uses semantic colors.",utilities:["text-<theme.windblade.colors>","text-<theme.windblade.miscColors>","text-fg-<integer>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Ea=()=>({rules:[me("decoration","text-decoration-color"),He("decoration-fg","text-decoration-color")],docs:{description:"Windblade uses semantic colors.",utilities:["decoration-<theme.windblade.colors>","decoration-<theme.windblade.miscColors>","decoration-fg-<integer>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Da=()=>({rules:[["decoration-from-font",{"text-decoration-thickness":"from-font"}],ee("decoration","text-decoration-thickness")],docs:{description:"Windblade proportions are used instead of separate thickness values.",utilities:["decoration-from-font","decoration-<theme.windblade.proportions>","decoration-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Ra=()=>({rules:[ee("underline-offset","text-underline-offset")],docs:{description:"Windblade proportions are used instead of separate ofset values.",utilities:["underline-offset-<theme.windblade.proportions>","underline-offset-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Wa=new Map([["Font Family",za()],["Font Size",Oa()],["Font Smoothing",ja()],["Letter Spacing",Ta()],["Line Height",Ma()],["Text Color",Aa()],["Text Decoration Color",Ea()],["Text Decoration Thickness",Da()],["Text Underline Offset",Ra()]]),La=Wa,Na=()=>{const e=[...Vl("rounded","","border","radius"),...dn("rounded","full","border","radius",(t,s)=>[t,{[s]:"99999px"}]),...dn("rounded","none","border","radius",(t,s)=>[t,{[s]:"none"}])],n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["rounded",...Object.keys(P.coners).map(t=>`rounded-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-full`,`${t}-none`]),preview:t=>`
      <div class="${t} size-i-full max-size-i-l.2 aspect-1/1 bg-accent"></div>
    `};return{rules:e,docs:n}},Ua=()=>{const e=ct("border","","border","width"),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["border",...Object.keys(P.axis).map(t=>`border-${t}`),...Object.keys(P.edges).map(t=>`border-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>`
      <div class="border border-color-accent ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},Fa=()=>{const e=[...cn("border","color","border","color",me),...cn("border","color-fg","border","color",He)],n={description:"Windblade uses semantic colors.",utilities:["border-color",...Object.keys(P.axis).map(t=>`border-${t}-color`),...Object.keys(P.edges).map(t=>`border-${t}-color`)].flatMap(t=>[`${t}-<theme.windblade.colors>`,`${t}-<theme.windblade.miscColors>`,`${t}-fg-<integer>`]),preview:t=>`
      <div class="border border-width-s.2 ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},Ba=()=>({rules:[ee("outline","outline-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["outline-<theme.windblade.proportions>","outline-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),Ia=()=>({rules:[ee("outline-offset","outline-offset")],docs:{description:"Windblade proportions are used instead of separate offset values.",utilities:["outline-offset-<theme.windblade.proportions>","outline-offset-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),Ha=()=>({rules:[],docs:{description:"Divides have been removed.",utilities:[]}}),Pa=()=>({rules:[],docs:{description:"Rings have been removed.",utilities:[]}}),Ga=new Map([["Border Radius",Na()],["Border Width",Ua()],["Border Color",Fa()],["Outline Width",Ba()],["Outline Offset",Ia()],["Divide",Ha()],["Ring",Pa()]]),Va=Ga,qa=()=>({rules:[],docs:{description:"Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),Ya=()=>({rules:[ee("opacity","opacity",{defaultUnit:""})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:[]}}),Ja=new Map([["Box Shadow",qa()],["Opacity",Ya()]]),Ka=Ja,Xa=()=>({rules:[],docs:{description:"Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),Qa=new Map([["Drop Shadow",Xa()]]),Za=Qa,ec=()=>({rules:[ee("border-spacing","border-spacing")],docs:{description:"Changing border-spacing for individual axis is not possible at the moment.",utilities:["border-spacing-<theme.windblade.proportions>"],preview:t=>"TODO"}}),tc=new Map([["Border spacing",ec()]]),nc=tc,zt=(e,n,t)=>[new RegExp(`^(${e})-(.+)$`),(s,{theme:r})=>{var l;const i={};let o=r.windblade.proportions[s[2]]*r.windblade.time.baseUnitMs+"ms";if(o!==void 0)return i[n]=(l=t==null?void 0:t(o))!=null?l:o,i}],Ps=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{const r={};let i=s.windblade.time.functions[t[2]];if(i!==void 0)return r[n]=i,r}],sc=()=>({rules:[zt("duration","transition-duration"),zt("delay","transition-delay")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["duration-<theme.windblade.proportions>","delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),rc=()=>({rules:[Ps("ease","transition-timing-function")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),ic=()=>({rules:[],docs:{description:"Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.",utilities:[]}}),oc=()=>({rules:[zt("animation-duration","animation-duration"),zt("animation-delay","animation-delay")],docs:{description:"Utilities for controlling the duration & delay of CSS animations. Missing from Tailwind.",utilities:["animation-duration-<theme.windblade.proportions>","animation-delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),lc=()=>({rules:[Ps("animation-ease","animation-timing-function")],docs:{description:"Utilities for controlling the easing of CSS animations. Missing from Tailwind.",utilities:["animation-ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),ac=new Map([["Transition Delay & Duration",sc()],["Transition Timing Function",rc()],["Animations",ic()],["Animation Delay & Duration",oc()],["Animation Timing Function",lc()]]),cc=ac,dc=()=>({rules:[ee("scale","transform",{defaultUnit:"",postprocess:t=>`scale${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["scale-<theme.windblade.proportions>"],preview:t=>"TODO"}}),uc=()=>({rules:[ee("rotate","transform",{defaultUnit:"deg",postprocess:t=>`rotate${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["rotate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),fc=()=>({rules:[ee("translate","transform",{postprocess:t=>`translate${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["translate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),hc=()=>({rules:[ee("skew","transform",{defaultUnit:"deg",postprocess:t=>`skew${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["skew-<theme.windblade.proportions>"],preview:t=>"TODO"}}),gc=new Map([["Scale",dc()],["Rotate",uc()],["Translate",fc()],["Skew",hc()]]),mc=gc,pc=()=>({rules:[me("accent","accent-color")],docs:{description:"Windblade uses semantic colors.",utilities:["accent-<theme.windblade.colors>","accent-<theme.windblade.miscColors>","accent-fg-<integer>"],preview:t=>"TODO"}}),bc=()=>({rules:[me("caret","caret-color"),He("caret-fg","caret-color")],docs:{description:"Windblade uses semantic colors.",utilities:["caret-<theme.windblade.colors>","caret-<theme.windblade.miscColors>","caret-fg-<integer>"],preview:t=>"TODO"}}),vc=()=>{const e=ct("scroll-m","","scroll-margin",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(P.axis).map(t=>`scroll-m-${t}`),...Object.keys(P.edges).map(t=>`scroll-m-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},$c=()=>{const e=ct("scroll-p","","scroll-padding",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(P.axis).map(t=>`scroll-p-${t}`),...Object.keys(P.edges).map(t=>`scroll-p-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},wc=()=>({rules:[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],docs:{description:"snap-x and snap-y have been removed because they have no logical counterparts yet.",utilities:["snap-none","snap-both","snap-mandatory","snap-proximity"],preview:t=>"TODO"}}),yc=()=>({rules:[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],docs:{description:"pan touch-actions have been removed because they have no logical counterparts yet.",utilities:["touch-auto","touch-none","touch-pinch-zoom","touch-manipulation"],preview:t=>"TODO"}}),kc=new Map([["Accent color",pc()],["Caret color",bc()],["Scroll margin",vc()],["Scroll padding",$c()],["Scroll snap type",wc()],["Touch action",yc()]]),xc=kc,_c=()=>({rules:[me("fill","fill"),He("fill-fg","fill")],docs:{description:"Windblade uses semantic colors.",utilities:["fill-<theme.windblade.colors>","fill-<theme.windblade.miscColors>","fill-fg-<integer>"],preview:t=>"TODO"}}),Sc=()=>({rules:[me("stroke","stroke"),He("stroke-fg","stroke")],docs:{description:"Windblade uses semantic colors.",utilities:["stroke-<theme.windblade.colors>","stroke-<theme.windblade.miscColors>","stroke-fg-<integer>"],preview:t=>"TODO"}}),Cc=()=>({rules:[ee("stroke","stroke-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["stroke-<theme.windblade.proportions>"],preview:t=>"TODO"}}),zc=new Map([["Fill",_c()],["Stroke Color",Sc()],["Stroke Width",Cc()]]),Oc=zc;function gt(e,n=2){let t=e;for(;t.length<n;)t=`0${t}`;return t}function jc(e){return e*(Math.PI/180)}function Tc(e){return e*(180/Math.PI)}function R(e,n,t){return Math.min(Math.max(e,n),t)}function Le(e,n){let[t,s,r,i]=n,o=i<1?`/${$e(i,5)}`:"";switch(e){case"rgb":case"rgba":return i<1?`rgba(${Math.round(t*255)}, ${Math.round(s*255)}, ${Math.round(r*255)}, ${$e(i,5)})`:`rgb(${Math.round(t*255)}, ${Math.round(s*255)}, ${Math.round(r*255)})`;case"oklab":case"oklch":return`${e}(${$e(t*100,6)}% ${$e(s,6)} ${$e(r,6)}${o})`;default:return`color(${e} ${$e(t,6)} ${$e(s,6)} ${$e(r,6)}${o})`}}function Xe(e,n){let t=[...e];for(let s=0;s<n.length;s++){let r=0;for(let i=0;i<n[s].length;i++)r+=e[i]*n[s][i];t[s]=r}return t}function $e(e,n=2){let t=10**n;return Math.round(e*t)/t}var Mc=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],Ac=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Ec=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],G=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],Dc=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],Rc=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function Wc(e,n){let t=[1/0,1/0,1/0,1/0,1/0],s=1/0,r=1/0,i=1/0;-1.88170328*e-.80936493*n>1?(t=[1.19086277,1.76576728,.59662641,.75515197,.56771245],s=4.0767416621,r=-3.3077115913,i=.2309699292):1.81444104*e-1.19445276*n>1?(t=[.73956515,-.45954404,.08285427,.1254107,.14503204],s=-1.2684380046,r=2.6097574011,i=-.3413193965):(t=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],s=-.0041960863,r=-.7034186147,i=1.707614701);let o=t[0]+t[1]*e+t[2]*n+t[3]*e*e+t[4]*e*n,l=.3963377774*e+.2158037573*n,a=-.1055613458*e-.0638541728*n,c=-.0894841775*e-1.291485548*n;{let d=1+o*l,u=1+o*a,f=1+o*c,k=d**3,b=u**3,g=f**3,y=3*l*d**2,v=3*a*u**2,w=3*c*f**2,p=6*l**2*d,h=6*a**2*u,$=6*c**2*f,_=s*k+r*b+i*g,O=s*y+r*v+i*w,E=s*p+r*h+i*$;o=o-_*O/(O*O-.5*_*E)}return o}function Lc(e,n){let t=Wc(e,n),[s,r,i]=Ot(fn([1,t*e,t*n,1])),o=Math.cbrt(1/Math.max(s,r,i)),l=o*t;return{L:o,C:l}}function Nc(e,n,t,s,r){let i=Lc(e,n);if((t-r)*i.C-(i.L-r)*s<=0)return i.C*r/(s*i.L+i.C*(r-t));let o=i.C*(r-1)/(s*(i.L-1)+i.C*(r-t)),l=t-r,a=s,c=.3963377774*e+.2158037573*n,d=-.1055613458*e-.0638541728*n,u=-.0894841775*e-1.291485548*n,f=l+a*c,k=l+a*d,b=l+a*u,g=r*(1-o)+o*t,y=o*s,v=g+y*c,w=g+y*d,p=g+y*u,h=[[v**3,w**3,p**3],[3*f*v**2,3*k*w**2,3*b*p**2],[6*f**2*v,6*k**2*w,6*b**2*p]],$=G[0][0]*h[0][0]+G[0][1]*h[0][1]+G[0][2]*h[0][2]-1,_=G[0][0]*h[1][0]+G[0][1]*h[1][1]+G[0][2]*h[1][2],O=G[0][0]*h[2][0]+G[0][1]*h[2][1]+G[0][2]*h[2][2],E=_/(_*_-.5*$*O),W=E>=0?-$*E:1/0,j=G[1][0]*h[0][0]+G[1][1]*h[0][1]+G[1][2]*h[0][2]-1,D=G[1][0]*h[1][0]+G[1][1]*h[1][1]+G[1][2]*h[1][2],T=G[1][0]*h[2][0]+G[1][1]*h[2][1]+G[1][2]*h[2][2],L=D/(D*D-.5*j*T),z=L>=0?-j*L:1/0,V=G[2][0]*h[0][0]+G[2][1]*h[0][1]+G[2][2]*h[0][2]-1,Q=G[2][0]*h[1][0]+G[2][1]*h[1][1]+G[2][2]*h[1][2],J=G[2][0]*h[2][0]+G[2][1]*h[2][1]+G[2][2]*h[2][2],Z=Q/(Q*Q-.5*V*J),ue=Z>=0?-V*Z:1/0;return o+Math.min(W,z,ue)}function Qt(e){let n=Math.abs(e);return n<=.0031308?e*12.92:1.055*Math.pow(n,1/2.4)-.055}function Zt(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function un(e){let[n,t,s,r]=e;n=Math.abs(n%360);let i=t*(1-Math.abs(2*s-1)),o=i*(1-Math.abs(n/60%2-1)),l=0,a=0,c=0;0<=n&&n<60?(l=i,a=o):60<=n&&n<120?(l=o,a=i):120<=n&&n<180?(a=i,c=o):180<=n&&n<240?(a=o,c=i):240<=n&&n<300?(l=o,c=i):300<=n&&n<360&&(l=i,c=o);let d=s-i/2;return[l+d,a+d,c+d,r]}function ns(e){let[n,t,s,r]=e;if(t+s>=1){let o=t/(t+s);return[o,o,o,r]}let i=un([n,100,50,r]);for(let o=0;o<3;o++)i[o]*=1-t-s,i[o]+=t;return i}function Uc(e,n=2e-4){let[t,s,r,i]=e,o=Math.abs(s)<n&&Math.abs(r)<n?0:Tc(Math.atan2(r,s));for(;o<0;)o+=360;for(;o>=360;)o-=360;return[t,Math.sqrt(s**2+r**2),o,i]}function Fc(e){let[n,t,s,r]=e;if(n===0)return[0,0,0,r];for(;s<0;)s+=360;for(;s>=360;)s-=360;let i=jc(s);return[n,Math.cos(i)*t,Math.sin(i)*t,r]}function Bc(e){return Xe(e,Ec)}function Ot(e){let[n,t,s,r]=e,[i,o,l]=Xe([n**3,t**3,s**3,r],G);return[i,o,l,r]}function Fe(e){let[n,t,s,r]=e;return[Qt(n),Qt(t),Qt(s),r]}function Gs(e){let[n,t,s,r]=Xe(e,Dc);return[Math.cbrt(n),Math.cbrt(t),Math.cbrt(s),r]}function ss(e){return Xe(e,Mc)}function fn(e){return Xe(e,Rc)}function jt(e){let[n,t,s,r]=Ot(fn(e));if(n>1.001||n<-.001||t>1.001||t<-.001||s>1.001||s<-.001){let[i,o,l]=e,a=Math.max(1e-5,Math.sqrt(o**2+l**2)),c=R(i,0,1),d=o/a,u=l/a,f=Nc(d,u,i,a,c);return Fe(Ot(fn([c*(1-f)+f*i,d*(f*a),u*(f*a),r])))}return Fe([n,t,s,r])}function Tt(e){return jt(Fc(e))}function Ue(e){let[n,t,s,r]=e;return[Zt(n),Zt(t),Zt(s),r]}function Mt(e){return Bc(Gs(Ue(e)))}function At(e){return Uc(Mt(e))}function rs(e){return Xe(e,Ac)}function Vs(e,n){let[t,s,r,i]=At(e);return typeof n.lightness=="number"&&(n.mode==="relative"?t+=n.lightness:t=n.lightness),typeof n.chroma=="number"&&(n.mode==="relative"?s+=n.chroma:s=n.chroma),typeof n.hue=="number"&&(n.mode==="relative"?r+=n.hue:r=n.hue),typeof n.alpha=="number"&&(n.mode==="relative"?i+=n.alpha:i=n.alpha),Tt([t,s,r,i])}var Ic={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},is=Ic,Hc=/-?[0-9.]+%?/g,Pc=/^#[0-9a-f]{3,8}$/i,Gc=16**6,hn=16**4,gn=16**2;function we(e){let n=Vc(e),t={get hex(){let[s,r,i,o]=n,l="#";return l+=gt(Math.round(R(s*255,0,255)).toString(16),2),l+=gt(Math.round(R(r*255,0,255)).toString(16),2),l+=gt(Math.round(R(i*255,0,255)).toString(16),2),n[3]<1&&(l+=gt(Math.round(o*255).toString(16),2)),l},get hexVal(){let[s,r,i,o]=n;return o<1&&console.warn(`hexVal converted a semi-transparent color (${o*100}%) to fully opaque`),s=Math.round(R(s*255,0,255)),r=Math.round(R(r*255,0,255)),i=Math.round(R(i*255,0,255)),s*hn+r*gn+i},get rgb(){return Le("rgb",n)},rgbVal:n,get rgba(){return Le("rgb",n)},rgbaVal:n,get linearRGB(){return Le("srgb-linear",Ue(n))},get linearRGBVal(){return Ue(n)},get p3(){return Le("display-p3",n)},p3Val:n,get oklab(){return Le("oklab",Mt(n))},get oklabVal(){return Mt(n)},get oklch(){return Le("oklch",At(n))},get oklchVal(){return At(n)},get xyz(){return Le("xyz-d65",ss(Ue(n)))},get xyzVal(){return ss(Ue(n))},adjust(s){return we(Vs(n,s))}};return t.toString=()=>t.hex,t}function os(e){if(e>Gc)throw new Error("8-digit hex values (with transparency) aren\u2019t supported");let n=e,t=Math.floor(n/hn);n-=t*hn;let s=Math.floor(n/gn);n-=s*gn;let r=n;return[t/255,s/255,r/255,1]}function Ce(e,n){let t=e.match(Hc);if(!t)throw new Error(`Unexpected color format: ${e}`);let s=[0,0,0,1];return t.forEach((r,i)=>{r.includes("%")?s[i]=parseFloat(r)/100:!n||n[i]===1/0||n[i]===1?s[i]=parseFloat(r):s[i]=parseFloat(r)/n[i]}),s}function Vc(e){let n=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw n;if(Array.isArray(e)){if(e.some(o=>typeof o!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[t,s,r,i]=e;return[R(t,0,1),R(s,0,1),R(r,0,1),typeof i=="number"?R(i,0,1):1]}if(typeof e=="number")return os(e);if(typeof e=="string"){let t=e.trim();if(!t)throw new Error("Expected color, received empty string");let s=t.toLowerCase();if(typeof is[s]=="number")return os(is[s]);if(Pc.test(s)){let o=s.replace("#",""),l=[0,0,0,1];if(o.length===6||o.length===8)for(let a=0;a<o.length/2;a++){let c=a*2,d=c+2,u=o.substring(c,d);l[a]=parseInt(u,16)/255}else if(o.length===3||o.length===4)for(let a=0;a<o.length;a++){let c=o.charAt(a);l[a]=parseInt(`${c}${c}`,16)/255}else throw new Error(`Hex value "${s}" not a valid sRGB color`);return l}let[r,i]=t.split("(");if(r==="color"){let o=i.indexOf(" ");r=i.substring(0,o),i=i.substring(o)}switch(r){case"rgb":case"rgba":case"srgb":{let[o,l,a,c]=Ce(i,[255,255,255,1]);return[R(o,0,1),R(l,0,1),R(a,0,1),R(c,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let o=Ce(i);return Fe(o)}case"hsl":case"hsla":{let[o,l,a,c]=Ce(i);return un([o,R(l,0,1),R(a,0,1),R(c,0,1)])}case"hwb":case"hwba":{let[o,l,a,c]=Ce(i);return ns([o,R(l,0,1),R(a,0,1),R(c,0,1)])}case"p3":case"display-p3":{let[o,l,a,c]=Ce(i);return[R(o,0,1),R(l,0,1),R(a,0,1),R(c,0,1)]}case"oklab":return jt(Ce(i));case"oklch":return Tt(Ce(i));case"xyz":case"xyz-d65":return Fe(rs(Ce(i)))}}if(typeof e=="object"){let t={...e},s=1;for(let r of Object.keys(t))r==="alpha"?s=R(t[r],0,1):t[r.toLowerCase()]=t[r];if("r"in t&&"g"in t&&"b"in t)return[R(t.r,0,1),R(t.g,0,1),R(t.b,0,1),s];if("h"in t&&"s"in t&&"l"in t)return un([t.h,R(t.s,0,1),R(t.l,0,1),s]);if("h"in t&&"w"in t&&"b"in t)return ns([t.h,R(t.w,0,1),R(t.b,0,1),s]);if("l"in t&&"a"in t&&"b"in t)return jt([t.l,t.a,t.b,s]);if("l"in t&&"c"in t&&"h"in t)return Tt([t.l,t.c,t.h,s]);if("x"in t&&"y"in t&&"z"in t)return Fe(rs([t.x,t.y,t.z,s]));throw n}throw n}function Mn(e,n,t=.5,s="oklab"){let r=R(t,0,1);if(t===0)return we(e);if(t===1)return we(n);let i=1-r,o=r,l={oklch:At,oklab:Mt,lms:D=>Ue(Gs(D)),linearRGB:Ue,sRGB:D=>D},a={oklch:Tt,oklab:jt,lms:D=>Ot(Fe(D)),linearRGB:Fe,sRGB:D=>D},c=l[s],d=a[s];if(!c)throw new Error(`Unknown color space "${s}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[u,f,k,b]=we(e).rgbVal,[g,y,v,w]=we(n).rgbVal;s==="oklch"&&(u===f&&f===k||g===y&&y===v)&&(c=l.oklab,d=a.oklab);let[p,h,$,_]=c([u,f,k,b]),[O,E,W,j]=c([g,y,v,w]);return s==="oklch"&&Math.abs(W-$)>180&&(Math.max($,W)===W?W-=360:$-=360),we(d([p*i+O*o,h*i+E*o,$*i+W*o,_*i+j*o]))}function qs(e,n,t="oklab"){let s=R(n,-1,1);return s>=0?Mn(e,"black",s,t):Ys(e,-s)}function Ys(e,n,t="oklab"){let s=R(n,-1,1);return s>=0?Mn(e,"white",s,t):qs(e,-s)}function Et(e){return we(e).xyzVal[1]}function qc(e){return $e(we(e).oklabVal[0],5)}function Yc(e){return Et(e)<.36?"dark":"light"}function Jc(e,n){let t=Et(e),s=Et(n),r=Math.max(t,s),i=Math.min(t,s),o=(r+.05)/(i+.05);return{ratio:o,AA:o>=4.5,AAA:o>=7}}var Dt={adjust:Vs,contrastRatio:Jc,darken:qs,from:we,lighten:Ys,lightness:qc,lightOrDark:Yc,luminance:Et,mix:Mn};const Kc=e=>{var r,i,o,l,a,c,d;const n=e.dark.l,t=e.dark.c,s=(r=e.dark.a)!=null?r:1;return{dark:{l:n,c:t,a:s},light:{l:(o=(i=e.light)==null?void 0:i.l)!=null?o:1-n,c:(a=(l=e.light)==null?void 0:l.c)!=null?a:t,a:(d=(c=e.light)==null?void 0:c.a)!=null?d:s}}},Xc=(e,n)=>{const{windblade:t}=e,{colors:s}=t,r={light:{},dark:{}};return Object.entries(s).forEach(([i,o])=>{[o.base,...o.on].forEach((a,c)=>{const d=`--${i}-${c===0?"base":"fg-"+c}`,{dark:u,light:f}=Kc(a);r.dark[d]=Dt.from(`oklch(${u.l} ${u.c}, ${n}, ${u.a})`).rgba,r.light[d]=Dt.from(`oklch(${f.l} ${f.c}, ${n}, ${f.a})`).rgba})}),r},Ze=e=>{let n="";return Object.keys(e).forEach(t=>{n+=`${t}: ${e[t]};
`}),n},Qc=()=>({rules:[[new RegExp(/^scheme-(dark|light|inverse|auto)-(\d+)$/),(t,{rawSelector:s,theme:r})=>{var c;const i=Number((c=t[2])!=null?c:0);if(Number.isNaN(i))return;const o=On(s),{dark:l,light:a}=Xc(r,i);switch(t[1]){case"light":return`
              .${o} {
                ${Ze(a)}
              }
            `;case"dark":return`
              .${o} {
                ${Ze(l)}
              }
            `;default:return`
              .${o},
              .scheme-dark.${o},
              .scheme-dark .${o} {
                ${Ze(l)}
              }
              .scheme-light.${o},
              .scheme-light .${o} {
                ${Ze(a)}
              }
              @media (prefers-color-scheme: light) { .${o} {
                  ${Ze(a)}
                }
              }
            `}}]],docs:{description:"Utilities for switching color scheme. Missing from Tailwind.",utilities:["scheme-dark","scheme-light","scheme-auto-<integer>","scheme-dark-<integer>","scheme-light-<integer>"],preview:t=>"TODO"}}),Zc=new Map([["Color Scheme",Qc()]]),ed=Zc,td=new Map([["Layout",ea],["Flexbox & Grid",aa],["Spacing",ha],["Sizing",$a],["Background",Ca],["Typography",La],["Borders",Va],["Effects",Ka],["Filters",Za],["Tables",nc],["Transitions & Animation",cc],["Transforms",mc],["Interactivity",xc],["SVG",Oc],["Accessibility",ed]]),nd=td,sd={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}},rd=sd,mt=(e,n)=>({[e+"-900"]:{base:{dark:{l:n[0].l,c:n[0].c},light:{l:n[9].l,c:n[9].c}},on:[{dark:{l:1,c:0}}]},[e+"-800"]:{base:{dark:{l:n[1].l,c:n[1].c},light:{l:n[8].l,c:n[8].c}},on:[{dark:{l:1,c:0}}]},[e+"-700"]:{base:{dark:{l:n[2].l,c:n[2].c},light:{l:n[7].l,c:n[7].c}},on:[{dark:{l:1,c:0}}]},[e+"-600"]:{base:{dark:{l:n[3].l,c:n[3].c},light:{l:n[6].l,c:n[6].c}},on:[{dark:{l:1,c:0}}]},[e+"-500"]:{base:{dark:{l:n[4].l,c:n[4].c},light:{l:n[5].l,c:n[5].c}},on:[{dark:{l:1,c:0}}]},[e+"-400"]:{base:{dark:{l:n[5].l,c:n[5].c},light:{l:n[4].l,c:n[4].c}},on:[{dark:{l:0,c:0}}]},[e+"-300"]:{base:{dark:{l:n[6].l,c:n[6].c},light:{l:n[3].l,c:n[3].c}},on:[{dark:{l:0,c:0}}]},[e+"-200"]:{base:{dark:{l:n[7].l,c:n[7].c},light:{l:n[2].l,c:n[2].c}},on:[{dark:{l:0,c:0}}]},[e+"-100"]:{base:{dark:{l:n[8].l,c:n[8].c},light:{l:n[1].l,c:n[1].c}},on:[{dark:{l:0,c:0}}]},[e+"-50"]:{base:{dark:{l:n[9].l,c:n[9].c},light:{l:n[0].l,c:n[0].c}},on:[{dark:{l:0,c:0}}]}}),id={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...mt("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...mt("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...mt("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...mt("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},od=id,ld={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},ad=ld,cd={none:{},material3:rd,tailwind:od,windblade:ad},dd=cd,ls=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},Te=(...e)=>e.reduce((n,t)=>{if(Array.isArray(t))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(t).forEach(s=>{["__proto__","constructor","prototype"].includes(s)||(Array.isArray(n[s])&&Array.isArray(t[s])?n[s]=Te.options.mergeArrays?Array.from(new Set(n[s].concat(t[s]))):t[s]:ls(n[s])&&ls(t[s])?n[s]=Te(n[s],t[s]):n[s]=t[s])}),n},{}),Js={mergeArrays:!0};Te.options=Js;Te.withOptions=(e,...n)=>{Te.options=Object.assign({mergeArrays:!0},e);const t=Te(...n);return Te.options=Js,t};const ud=()=>`# Installation

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
});
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
});
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
});
\`\`\`
`,fd=ud,hd=()=>`# Options

At the moment Windblade only exposes one option which configures which theme preset is used.

To specify which preset to use define the \`theme\` value in the preset options:

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});
\`\`\`

The following themes are available:
${Object.keys(dd).map(e=>`- \`${e}\``).join(`
`)}

**Please note that the \`material3\` theme is not finished and is almost unusable at the moment.**
`,gd=hd,md=()=>`# Using semantic colors

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
`,pd=md,be={block:"bg-surface p-s transition text-center rounded-s.4"},bd=()=>`# Using logical properties

Windblade uses logical properties and values only.

All properties that can be customized on multiple axis/edges/corenrs can be prepended with:
- \`-b\` for block axis (e.g. \`size-b\`).
- \`-i\` for inline axis (e.g. \`size-i\`).
- \`-bs\` and \`-be\` for block start and end edges.
- \`-is\` and \`-ie\` for inline start and end edges.
- \`-ss\` \`-se\` \`-es\` \`-ee\` for corners (start start, start end, end start & end end)

\`\`\`uno-html
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${be.block}">ss</div>
  <div class="${be.block}">bs</div>
  <div class="${be.block}">se</div>

  <div class="${be.block}">is</div>
  <div class="${be.block}">center</div>
  <div class="${be.block}">ie</div>

  <div class="${be.block}">es</div>
  <div class="${be.block}">be</div>
  <div class="${be.block}">ee</div>
</div>
\`\`\`

Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. \`background-position\` with \`bg-{corner}\` utility).

If you are new to logical properties try playing with \`bg-gradient-to-{edge/corner}\` and see which way the gradient goes.

Please note that \`width\` and \`height\` are completely removed in favor of \`size-{axis}\`.
`,vd=bd,$d=()=>'# Using the $ syntax\n\nYou can grab relevant to the rule theme values prefixing them with `$`. This is especially useful inside brackets when you want to set custom values.\n\n```html\n<div class="grid grid-cols-[auto_$l_auto]"></div>\n<!-- This is a bad example because at the moment brackets have limited support and do not work in this case -->\n```\n\nYou can also use `$` to conveniently perform operations with your design tokens without breaking out of your design system or using `calc()`.\n\n```html\n<div class="p-s">\n  Label\n  <!-- Custom underline -->\n  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>\n</div>\n```\n',wd=$d,yd=()=>`# Hover, focus and other states

Windblade does not come with functionality like hover or focus states. Please use Windblade together with [unocss-preset-mini-variants](https://www.npmjs.com/package/unocss-preset-mini-variants) or other variant implementations if you need this functionality.
`,kd=yd,xd=new Map([["Installation",fd],["Options",gd],["Semantic colors",pd],["Logical properties",vd],["$ syntax",wd],["Hover, focus and other states",kd]]),_d=xd,Sd=e=>`# Semantic colors

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
            ${s.on.map((r,i)=>`<div class="text-fg-${i+1}">Fg-${i+1}</div>`).join("")}
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
`,Cd=Sd,ze={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},zd=e=>`# Proportions

Proportions are used throughout the whole preset for size, duration, opacity, etc.

Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.

## Default proportions

By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.

\`\`\`uno-html
<table class="border-collapse">
  <tr class="${ze.tr}">
    <th class="${ze.th}">Name</th>
    <th class="${ze.th}">Value</th>
    <th class="${ze.th}"></th>
  </tr>
  ${(()=>{const n=e.windblade.proportions;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <tr class="${ze.tr}">
          <td class="${ze.td} font-semibold">${t}</td>
          <td class="${ze.td} text-fg-4">${s}</td>
          <td class="${ze.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
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
`,Od=zd,jd=()=>`# Other theme objects

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
`,Td=jd,Md=new Map([["Semantic Colors",Cd],["Proportions",Od],["Other",Td]]),Ad=Md,Ed=new Map([["Usage",_d],["Theme",Ad],...nd]),as=Ed;function Dd(e){const n=e.length;let t=-1,s,r="";const i=e.charCodeAt(0);for(;++t<n;){if(s=e.charCodeAt(t),s===0){r+="\uFFFD";continue}if(s===44){r+="\\,";continue}if(s>=1&&s<=31||s===127||t===0&&s>=48&&s<=57||t===1&&s>=48&&s<=57&&i===45){r+=`\\${s.toString(16)} `;continue}if(t===0&&n===1&&s===45){r+=`\\${e.charAt(t)}`;continue}if(s>=128||s===45||s===95||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){r+=e.charAt(t);continue}r+=`\\${e.charAt(t)}`}return r}const en=Dd;function ie(e=[]){return Array.isArray(e)?e:[e]}function Rt(e){return Array.from(new Set(e))}function ne(e){return typeof e=="string"}function st(e){return ne(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(n=>n[1]!=null)}function Rd(e){return Array.isArray(e)?e.find(n=>!Array.isArray(n)||Array.isArray(n[0]))?e.map(n=>st(n)):[e]:[st(e)]}function Wd(e){return e.filter(([n,t],s)=>{if(n.startsWith("$$"))return!1;for(let r=s-1;r>=0;r--)if(e[r][0]===n&&e[r][1]===t)return!1;return!0})}function tn(e){return e==null?"":Wd(e).map(([n,t])=>t!=null?`${n}:${t};`:void 0).filter(Boolean).join("")}function pt(e){return e&&typeof e=="object"&&!Array.isArray(e)}function Ks(e,n){const t=e,s=n;if(Array.isArray(t))return[...s];const r={...t};return pt(t)&&pt(s)&&Object.keys(s).forEach(i=>{pt(t[i])&&pt(s[i])||Array.isArray(t[i])&&Array.isArray(s[i])?r[i]=Ks(t[i],s[i]):Object.assign(r,{[i]:s[i]})}),r}function $t(e){let n,t,s;if(Array.isArray(e)){for(t=Array(n=e.length);n--;)t[n]=(s=e[n])&&typeof s=="object"?$t(s):s;return t}if(Object.prototype.toString.call(e)==="[object Object]"){t={};for(n in e)n==="__proto__"?Object.defineProperty(t,n,{value:$t(e[n]),configurable:!0,enumerable:!0,writable:!0}):t[n]=(s=e[n])&&typeof s=="object"?$t(s):s;return t}return e}function Ld(e){return ne(e[0])}function Nd(e){return ne(e[0])}const Ud=/[\w\u00A0-\uFFFF-_:%-?]/,cs="$$shortcut-no-merge";function Fd(e=""){return Ud.test(e)}function Bd(e){return typeof e=="function"?{match:e}:e}function ds(e){return e.length===3}function Id(e){return e!=null}function Hd(){}class Pd{constructor(){this._map=new Map}get(n,t){const s=this._map.get(n);if(s)return s.get(t)}getFallback(n,t,s){let r=this._map.get(n);return r||(r=new Map,this._map.set(n,r)),r.has(t)||r.set(t,s),r.get(t)}set(n,t,s){let r=this._map.get(n);return r||(r=new Map,this._map.set(n,r)),r.set(t,s),this}has(n,t){var s;return(s=this._map.get(n))==null?void 0:s.has(t)}delete(n,t){var s;return((s=this._map.get(n))==null?void 0:s.delete(t))||!1}deleteTop(n){return this._map.delete(n)}map(n){return Array.from(this._map.entries()).flatMap(([t,s])=>Array.from(s.entries()).map(([r,i])=>n(i,t,r)))}}const bt={};function Gd(e=["-",":"]){const n=e.join("|");return bt[n]||(bt[n]=new RegExp(`((?:[!@\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${n})\\(((?:[~!\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),bt[n].lastIndex=0,bt[n]}function Vd(e,n=["-",":"],t=5){const s=Gd(n);let r=!1,i=e.toString();const o=new Set;do{const l=i;i=i.replace(s,(a,c,d,u)=>n.includes(d)?(o.add(c+d),u.split(/\s/g).filter(Boolean).map(f=>f==="~"?c:f.replace(/^(!?)(.*)/,`$1${c}${d}$2`)).join(" ")):a),r=i!==l,t-=1}while(r&&t);return{prefixes:Array.from(o),expanded:i,hasChanged:r}}function qd(e,n=["-",":"],t=5){const{expanded:s}=Vd(e.toString(),n,t);return typeof e=="string"?s:e.length()?e.overwrite(0,e.length(),s):e}const us=new Set;function Yd(e){us.has(e)||(console.warn("[unocss]",e),us.add(e))}const Jd=/\\?[\s'"`;{}]+/g,Xs=/\[(\\\W|[\w-])+:['"]?\S+?['"]?\]/g,Kd=new RegExp(`^${Xs.source}$`),Xd=e=>{var t;const n=new Set;for(const s of e.matchAll(Xs))!((t=e[s.index-1])!=null&&t.match(/^[\s'"`]/))||n.add(s[0]);return e.split(Jd).forEach(s=>{Fd(s)&&!Kd.test(s)&&n.add(s)}),[...n]},Qd={name:"split",order:0,extract({code:e}){return Xd(e)}};function Zd(){return{events:{},emit(e,...n){(this.events[e]||[]).forEach(t=>t(...n))},on(e,n){return(this.events[e]=this.events[e]||[]).push(n),()=>this.events[e]=(this.events[e]||[]).filter(t=>t!==n)}}}const mn="default",pn="preflights",eu="shortcuts",tu={[pn]:-100,[eu]:-10,[mn]:0};function Qs(e){return ie(e).flatMap(n=>Array.isArray(n)?[n]:Object.entries(n))}function nu(e){var t;const n=e.shortcuts?Qs(e.shortcuts):void 0;if(e.shortcuts=n,e.prefix||e.layer){const s=r=>{r[2]||(r[2]={});const i=r[2];i.prefix==null&&e.prefix&&(i.prefix=ie(e.prefix)),i.layer==null&&e.layer&&(i.layer=e.layer)};n==null||n.forEach(s),(t=e.rules)==null||t.forEach(s)}return e}function fs(e={},n={}){const t=Object.assign({},n,e),s=(t.presets||[]).flatMap(ie).map(nu),r=[...s.filter(g=>g.enforce==="pre"),...s.filter(g=>!g.enforce),...s.filter(g=>g.enforce==="post")],i=Object.assign(tu,...s.map(g=>g.layers),e.layers);function o(g){return Rt([...r.flatMap(y=>ie(y[g]||[])),...ie(t[g]||[])])}const l=o("extractors");l.length||l.push(Qd),l.sort((g,y)=>(g.order||0)-(y.order||0));const a=o("rules"),c={},d=a.length,u=a.map((g,y)=>{var v;if(Ld(g)){ie(((v=g[2])==null?void 0:v.prefix)||"").forEach(p=>{c[p+g[0]]=[y,g[1],g[2],g]});return}return[y,...g]}).filter(Boolean).reverse(),f=$t([...r.map(g=>g.theme||{}),t.theme||{}].reduce((g,y)=>Ks(g,y),{}));o("extendTheme").forEach(g=>g(f));const k={templates:Rt(r.map(g=>{var y;return ie((y=g.autocomplete)==null?void 0:y.templates)}).flat()),extractors:r.map(g=>{var y;return ie((y=g.autocomplete)==null?void 0:y.extractors)}).flat().sort((g,y)=>(g.order||0)-(y.order||0))};let b=ie(o("separators"));return b.length||(b=[":","-"]),{mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:g=>g,...t,presets:r,envMode:t.envMode||"build",shortcutsLayer:t.shortcutsLayer||"shortcuts",layers:i,theme:f,rulesSize:d,rulesDynamic:u,rulesStaticMap:c,preprocess:o("preprocess"),postprocess:o("postprocess"),preflights:o("preflights"),autocomplete:k,variants:o("variants").map(Bd),shortcuts:Qs(o("shortcuts")).reverse(),extractors:l,safelist:o("safelist"),separators:b}}const su="0.49.7";class ru{constructor(n={},t={}){this.userConfig=n,this.defaults=t,this.version=su,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=Zd(),this.config=fs(n,t),this.events.emit("config",this.config)}setConfig(n,t){!n||(t&&(this.defaults=t),this.userConfig=n,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=fs(n,this.defaults),this.events.emit("config",this.config))}async applyExtractors(n,t,s=new Set){const r={get original(){return n},code:n,id:t};for(const i of this.config.extractors){const o=await i.extract(r);if(o)for(const l of o)s.add(l)}return s}makeContext(n,t){const s={rawSelector:n,currentSelector:t[1],theme:this.config.theme,generator:this,variantHandlers:t[2],constructCSS:(...r)=>this.constructCustomCSS(s,...r),variantMatch:t};return s}async parseToken(n,t){var c;if(this.blocked.has(n))return;const s=`${n}${t?` ${t}`:""}`;if(this._cache.has(s))return this._cache.get(s);let r=n;for(const d of this.config.preprocess)r=d(n);if(this.isBlocked(r)){this.blocked.add(n),this._cache.set(s,null);return}const i=this.matchVariants(n,r);if(!i||this.isBlocked(i[1])){this.blocked.add(n),this._cache.set(s,null);return}const o=this.makeContext(n,[t||i[0],i[1],i[2],i[3]]);this.config.details&&(o.variants=[...i[3]]);const l=this.expandShortcut(o.currentSelector,o),a=l?await this.stringifyShortcuts(o.variantMatch,o,l[0],l[1]):(c=await this.parseUtil(o.variantMatch,o))==null?void 0:c.map(d=>this.stringifyUtil(d,o)).filter(Id);if(a!=null&&a.length)return this._cache.set(s,a),a;this._cache.set(s,null)}async generate(n,t={}){const{id:s,scope:r,preflights:i=!0,safelist:o=!0,minify:l=!1}=t,a=ne(n)?await this.applyExtractors(n,s):Array.isArray(n)?new Set(n):n;o&&this.config.safelist.forEach(p=>a.add(p));const c=l?"":`
`,d=new Set([mn]),u=new Set,f=new Map;let k={};const b=Array.from(a).map(async p=>{var $;if(u.has(p))return;const h=await this.parseToken(p);if(h!=null){u.add(p);for(const _ of h){const O=_[3]||"",E=($=_[4])==null?void 0:$.layer;f.has(O)||f.set(O,[]),f.get(O).push(_),E&&d.add(E)}}});await Promise.all(b),await(async()=>{if(!i)return;const p={generator:this,theme:this.config.theme},h=new Set([]);this.config.preflights.forEach(({layer:$=pn})=>{d.add($),h.add($)}),k=Object.fromEntries(await Promise.all(Array.from(h).map(async $=>{const O=(await Promise.all(this.config.preflights.filter(E=>(E.layer||pn)===$).map(async E=>await E.getCSS(p)))).filter(Boolean).join(c);return[$,O]})))})();const g=this.config.sortLayers(Array.from(d).sort((p,h)=>{var $,_;return(($=this.config.layers[p])!=null?$:0)-((_=this.config.layers[h])!=null?_:0)||p.localeCompare(h)})),y={},v=p=>{if(y[p])return y[p];let h=Array.from(f).sort((_,O)=>{var E,W,j;return((E=this.parentOrders.get(_[0]))!=null?E:0)-((W=this.parentOrders.get(O[0]))!=null?W:0)||((j=_[0])==null?void 0:j.localeCompare(O[0]||""))||0}).map(([_,O])=>{const E=O.length,W=O.filter(T=>{var L;return(((L=T[4])==null?void 0:L.layer)||mn)===p}).sort((T,L)=>{var z,V,Q,J;return T[0]-L[0]||(((z=T[4])==null?void 0:z.sort)||0)-(((V=L[4])==null?void 0:V.sort)||0)||((Q=T[1])==null?void 0:Q.localeCompare(L[1]||""))||((J=T[2])==null?void 0:J.localeCompare(L[2]||""))||0}).map(([,T,L,,z,,V])=>{var J;const Q=T&&au(T,r);return[[[Q!=null?Q:"",(J=z==null?void 0:z.sort)!=null?J:0]],L,!!(V!=null?V:z==null?void 0:z.noMerge)]});if(!W.length)return;const j=W.reverse().map(([T,L,z],V)=>{if(!z&&this.config.mergeSelectors)for(let J=V+1;J<E;J++){const Z=W[J];if(Z&&!Z[2]&&(T&&Z[0]||T==null&&Z[0]==null)&&Z[1]===L)return T&&Z[0]&&Z[0].push(...T),null}const Q=T?Rt(T.sort((J,Z)=>{var ue;return J[1]-Z[1]||((ue=J[0])==null?void 0:ue.localeCompare(Z[0]||""))||0}).map(J=>J[0]).filter(Boolean)):[];return Q.length?`${Q.join(`,${c}`)}{${L}}`:L}).filter(Boolean).reverse().join(c);if(!_)return j;const D=_.split(" $$ ");return`${D.join("{")}{${c}${j}${c}}${D.map(T=>"").join("}")}`}).filter(Boolean).join(c);i&&(h=[k[p],h].filter(Boolean).join(c));const $=l?"":`/* layer: ${p} */${c}`;return y[p]=h?$+h:""},w=(p=g,h)=>p.filter($=>!(h!=null&&h.includes($))).map($=>v($)||"").filter(Boolean).join(c);return{get css(){return w()},layers:g,matched:u,getLayers:w,getLayer:v}}matchVariants(n,t){const s=new Set,r=[];let i=t||n,o=!1;const l={rawSelector:n,theme:this.config.theme,generator:this};for(;;){o=!1;for(const a of this.config.variants){if(!a.multiPass&&s.has(a))continue;let c=a.match(i,l);if(!!c){ne(c)&&(c={matcher:c}),i=c.matcher,r.unshift(c),s.add(a),o=!0;break}}if(!o)break;if(r.length>500)throw new Error(`Too many variants applied to "${n}"`)}return[n,i,r,s]}applyVariants(n,t=n[4],s=n[1]){const i=t.slice().sort((c,d)=>(c.order||0)-(d.order||0)).reduceRight((c,d)=>u=>{var b,g,y;const f=((b=d.body)==null?void 0:b.call(d,u.entries))||u.entries,k=Array.isArray(d.parent)?d.parent:[d.parent,void 0];return((g=d.handle)!=null?g:uu)({...u,entries:f,selector:((y=d.selector)==null?void 0:y.call(d,u.selector,f))||u.selector,parent:k[0]||u.parent,parentOrder:k[1]||u.parentOrder,layer:d.layer||u.layer,sort:d.sort||u.sort},c)},c=>c)({prefix:"",selector:du(s),pseudo:"",entries:n[2]}),{parent:o,parentOrder:l}=i;o!=null&&l!=null&&this.parentOrders.set(o,l);const a={selector:cu([i.prefix,i.selector,i.pseudo].join("")),entries:i.entries,parent:o,layer:i.layer,sort:i.sort,noMerge:i.noMerge};for(const c of this.config.postprocess)c(a);return a}constructCustomCSS(n,t,s){const r=st(t);if(ne(r))return r;const{selector:i,entries:o,parent:l}=this.applyVariants([0,s||n.rawSelector,r,void 0,n.variantHandlers]),a=`${i}{${tn(o)}}`;return l?`${l}{${a}}`:a}async parseUtil(n,t,s=!1,r){var d,u;const[i,o,l]=ne(n)?this.matchVariants(n):n;this.config.details&&(t.rules=(d=t.rules)!=null?d:[]);const a=this.config.rulesStaticMap[o];if(a&&a[1]&&(s||!((u=a[2])!=null&&u.internal))){this.config.details&&t.rules.push(a[3]);const f=a[0],k=st(a[1]),b=a[2];return ne(k)?[[f,k,b]]:[[f,i,k,b,l]]}t.variantHandlers=l;const{rulesDynamic:c}=this.config;for(const[f,k,b,g]of c){if((g==null?void 0:g.internal)&&!s)continue;let y=o;if(g!=null&&g.prefix){const h=ie(g.prefix);if(r){const $=ie(r);if(!h.some(_=>$.includes(_)))continue}else{const $=h.find(_=>o.startsWith(_));if($==null)continue;y=o.slice($.length)}}const v=y.match(k);if(!v)continue;const w=await b(v,t);if(!w)continue;this.config.details&&t.rules.push([k,b,g]);const p=Rd(w).filter(h=>h.length);if(p.length)return p.map(h=>ne(h)?[f,h,g]:[f,i,h,g,l])}}stringifyUtil(n,t){var b;if(!n)return;if(ds(n))return[n[0],void 0,n[1],void 0,n[2],this.config.details?t:void 0,void 0];const{selector:s,entries:r,parent:i,layer:o,sort:l,noMerge:a}=this.applyVariants(n),c=tn(r);if(!c)return;const{layer:d,sort:u,...f}=(b=n[3])!=null?b:{},k={...f,layer:o!=null?o:d,sort:l!=null?l:u};return[n[0],s,c,i,k,this.config.details?t:void 0,a]}expandShortcut(n,t,s=5){var l;if(s===0)return;const r=this.config.details?a=>{var c;t.shortcuts=(c=t.shortcuts)!=null?c:[],t.shortcuts.push(a)}:Hd;let i,o;for(const a of this.config.shortcuts){let c=n;if((l=a[2])!=null&&l.prefix){const u=ie(a[2].prefix).find(f=>n.startsWith(f));if(u==null)continue;c=n.slice(u.length)}if(Nd(a)){if(a[0]===c){i=i||a[2],o=a[1],r(a);break}}else{const d=c.match(a[0]);if(d&&(o=a[1](d,t)),o){i=i||a[2],r(a);break}}}if(ne(o)&&(o=qd(o.trim()).split(/\s+/g)),!o){const[a,c]=ne(n)?this.matchVariants(n):n;if(a!==c){const d=this.expandShortcut(c,t,s-1);d&&(o=d[0].map(u=>ne(u)?a.replace(c,u):u))}}if(!!o)return[o.flatMap(a=>{var c;return(ne(a)?(c=this.expandShortcut(a,t,s-1))==null?void 0:c[0]:void 0)||[a]}).filter(Boolean),i]}async stringifyShortcuts(n,t,s,r={layer:this.config.shortcutsLayer}){var d;const i=new Pd,o=(await Promise.all(Rt(s).map(async u=>{const f=ne(u)?await this.parseUtil(u,t,!0,r.prefix):[[1/0,"{inline}",st(u),void 0,[]]];return f||Yd(`unmatched utility "${u}" in shortcut "${n[1]}"`),f||[]}))).flat(1).filter(Boolean).sort((u,f)=>u[0]-f[0]),[l,,a]=n,c=[];for(const u of o){if(ds(u)){c.push([u[0],void 0,u[1],void 0,u[2],t,void 0]);continue}const{selector:f,entries:k,parent:b,sort:g,noMerge:y}=this.applyVariants(u,[...u[4],...a],l);i.getFallback(f,b,[[],u[0]])[0].push([k,!!(y!=null?y:(d=u[3])==null?void 0:d.noMerge),g!=null?g:0])}return c.concat(i.map(([u,f],k,b)=>{const g=(v,w,p)=>{const h=Math.max(...p.map(_=>_[1])),$=p.map(_=>_[0]);return(v?[$.flat(1)]:$).map(_=>{const O=tn(_);if(O)return[f,k,O,b,{...r,noMerge:w,sort:h},t,void 0]})};return[[u.filter(([,v])=>v).map(([v,,w])=>[v,w]),!0],[u.filter(([,v])=>!v).map(([v,,w])=>[v,w]),!1]].map(([v,w])=>[...g(!1,w,v.filter(([p])=>p.some(h=>h[0]===cs))),...g(!0,w,v.filter(([p])=>p.every(h=>h[0]!==cs)))])}).flat(2).filter(Boolean))}isBlocked(n){return!n||this.config.blocklist.some(t=>ne(t)?t===n:t.test(n))}}function iu(e,n){return new ru(e,n)}const ou=/\s\$\$\s+/g,lu=e=>e.match(/\s\$\$\s/);function au(e,n){return lu(e)?e.replace(ou,n?` ${n} `:" "):n?`${n} ${e}`:e}function cu(e){const n=e.match(/::[\w-]+(\([\w-]+\))?/g);if(n){for(const t of n)e=e.replace(t,"");e+=n.join("")}return e}const hs=/^\[(.+?)(~?=)"(.*)"\]$/;function du(e){return hs.test(e)?e.replace(hs,(n,t,s,r)=>`[${en(t)}${s}"${en(r)}"]`):`.${en(e)}`}function uu(e,n){return n(e)}const fu={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}},U={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},H=e=>e.filter(Boolean).join("-"),bn=(e,n,t,s,r)=>[r(H([e,n]),H([t,s])),r(H([e,"b",n]),H([t,"block",s])),r(H([e,"i",n]),H([t,"inline",s]))],vn=(e,n,t,s,r)=>[r(H([e,n]),H([t,s])),r(H([e,"b",n]),H([t,"block",s])),r(H([e,"bs",n]),H([t,"block-start",s])),r(H([e,"be",n]),H([t,"block-end",s])),r(H([e,"i",n]),H([t,"inline",s])),r(H([e,"is",n]),H([t,"inline-start",s])),r(H([e,"ie",n]),H([t,"inline-end",s]))],$n=(e,n,t,s,r)=>[r(H([e,n]),H([t,s])),r(H([e,"ss",n]),H([t,"start-start",s])),r(H([e,"se",n]),H([t,"start-end",s])),r(H([e,"ee",n]),H([t,"end-end",s])),r(H([e,"es",n]),H([t,"end-start",s]))],hu=(e,n)=>{let t=e;for(Object.entries(n.windblade.proportions).forEach(([s,r])=>{t=t.replaceAll(`$${s}`,r.toString())});t.includes("$(");){let s=t.indexOf("$")+1,r=t.substring(s),i=0,o=i,l=0;for(let c=0;c<r.length;++c)if(r[c]==="("&&++l,r[c]===")"&&--l,l===0){o=c+1;break}const a=r.substring(i,o);t=t.replace(`$${a}`,Function(`'use strict'; return (${a})`)())}return t},Zs=(e,n,t)=>{var l;let s=n.windblade.proportions[e];if(s!==void 0)return`${s}${t}`;let r=(l=n.windblade.miscSizes)==null?void 0:l[e];if(r!==void 0)return`${r}`;const i=hu(e,n),o=Bs.bracket(i);if(o!==void 0)return o;if(!Number.isNaN(Number(i)))return`${i}${t}`},A=(e,n,t)=>[new RegExp(`^${e}-(.+)$`),(s,{theme:r})=>{var o;let i=Zs(s[1],r,(o=t==null?void 0:t.defaultUnit)!=null?o:"rem");if(i!==void 0)return t!=null&&t.postprocess&&(i=t.postprocess(i)),{[n]:i}}],An=(e,n,t,s)=>bn(e,n,t,s,A),Be=(e,n,t,s)=>vn(e,n,t,s,A),gu=(e,n,t,s)=>$n(e,n,t,s,A),er=()=>({rules:[[new RegExp("^(aspect)-(.+)$"),t=>{if(!t[2].includes(":"))return{"aspect-ratio":t[2]}}]],docs:{description:"Windblade uses CSS ratios instead of presets.",utilities:["aspect-<ratio>"],preview:t=>"TODO"}}),tr=()=>({rules:[],docs:{description:"Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.",utilities:[]}}),nr=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-after-${s}`,{"break-after":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-after-${s}`)};return{rules:n,docs:t}},sr=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],n=e.map(s=>[`break-before-${s}`,{"break-before":s}]),t={description:"Physical properties replaced with logocal.",utilities:e.map(s=>`break-before-${s}`)};return{rules:n,docs:t}},rr=()=>{const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"],n={hidden:"none"};return{rules:e.map(r=>[`${r}`,{display:Object.keys(n).includes(r)?n[r]:r}]),docs:{description:"Windblade removes some utilities from this group that cannot be sued semantically.",utilities:e,preview:r=>{switch(r){default:return`
            <div>
              <div class="bg-accent p-s rounded-s.4 ${r}">1</div>
              <div class="bg-accent p-s rounded-s.4 ${r}">2</div>
              <div class="bg-accent p-s rounded-s.4 ${r}">3</div>
            </div>
          `}}}}},ir=()=>{const e=[...De(U.edges).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),...De(U.coners).map(([t,s])=>[`object-${t}`,{"object-position":`var(--${s})`}]),["object-center",{"object-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(U.edges),...Object.keys(U.coners),"center"].map(t=>`object-${t}`),preview:t=>`
      <img alt="Random demo" src="https://picsum.photos/600/400" class="rounded-s.4 max-size-i-l.2 object-none ${t}">
    `};return{rules:e,docs:n}},mu=new Map([["Aspect Ratio",er()],["Container",tr()],["Break After",nr()],["Break Before",sr()],["Disaply",rr()],["Object Position",ir()]]),pu=mu,or=(e,n)=>()=>{const t=[[`auto-${e}-auto`,{["grid-auto-"+n]:"auto"}],[`auto-${e}-fr`,{["grid-auto-"+n]:"minmax(0, 1fr)"}],A(`auto-${e}`,`grid-auto-${n}`)],s={description:"Added utilities for controlling the size of implicitly-created grid columns with proportion units.",utilities:[`auto-${e}-auto`,`auto-${e}-fr`,`auto-${e}-<theme.windblade.proportions>`],preview:r=>`
      <div class="grid ${r} ${r.includes("cols")?"grid-flow-col":""} gap-s bg-accent-3 rounded-s.4 size-i-full">
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
    `};return{rules:t,docs:s}},lr=or("cols","columns"),ar=or("rows","rows"),qt=(e,n,t)=>()=>{const s=[A(`grid-${e}-${n}s`,`grid-template-${t}s`,{postprocess:i=>`repeat(auto-fit, minmax(${i}, 1fr))`})],r={description:`Utilities specifying the columns in a grid layout using auto-${e}. Missing from Tailwind.`,utilities:[`grid-${e}-${n}s-<theme.windblade.proportions>`],preview:i=>`
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
    `};return{rules:s,docs:r}},cr=qt("fit","col","column"),dr=qt("fill","col","column"),ur=qt("fit","row","row"),fr=qt("fill","row","row"),bu=new Map([["Grid Auto Columns",lr()],["Grid Auto Rows",ar()],["Grid Fit Columns",cr()],["Grid Fit Rows",ur()],["Grid Fill Clumns",dr()],["Grid Fill Rows",fr()]]),vu=bu,hr=()=>{const e=Be("p","","padding",""),n={description:"Replaced physical properties with logical.",utilities:["p",...Object.keys(U.axis).map(t=>`p-${t}`),...Object.keys(U.edges).map(t=>`p-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="${t} rounded-s bg-accent">
        <div class="border border-dashed rounded-s.2">${t}</div>
      </div>
    `};return{rules:e,docs:n}},gr=()=>{const e=Be("m","","margin",""),n={description:"Replaced physical properties with logical.",utilities:["m",...Object.keys(U.axis).map(t=>`m-${t}`),...Object.keys(U.edges).map(t=>`m-${t}`)].map(t=>`${t}-<theme.windblade.proportions>`),preview:t=>`
      <div class="border border-dashed border-color-accent rounded-s.2">
        <div class="${t} p-s rounded-s bg-accent">${t}</div>
      </div>
    `};return{rules:e,docs:n}},mr=()=>({rules:[],docs:{description:"Removed this. Please use gap and flex/grid/columns instead",utilities:[]}}),$u=new Map([["Padding",hr()],["Margin",gr()],["Space between",mr()]]),wu=$u,pr=()=>({rules:[],docs:{description:"Removed this, as well as min and max variants, in favor of the size counterparts",utilities:[]}}),br=()=>{const e=An("size","","","size"),n={description:"Utilities for setting the size of an element. Missing from Tailwind.",utilities:[...Object.keys(U.axis).map(t=>`size-${t}-<theme.windblade.sizes>`)],preview:t=>`
      <div class="${t} ${t.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
    `};return{rules:e,docs:n}},vr=e=>`
  <div class="${e} ${e.includes("-i-")?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`,$r=()=>{const e=An("min-size","","min","size"),n={description:"Utilities for setting the minimum size of an element. Missing from Tailwind.",utilities:Object.keys(U.axis).map(t=>`min-size-${t}-<theme.windblade.proportions>`),preview:vr};return{rules:e,docs:n}},wr=()=>{const e=An("max-size","","max","size"),n={description:"Utilities for setting the maximum size of an element. Missing from Tailwind.",utilities:Object.keys(U.axis).map(t=>`max-size-${t}-<theme.windblade.proportions>`),preview:vr};return{rules:e,docs:n}},yu=new Map([["Width & Height",pr()],["Size",br()],["Min-Size",$r()],["Max-Size",wr()]]),ku=yu,de=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var r;if((r=s.windblade.miscColors)!=null&&r[t[2]])return{[n]:t[2]};if(s.windblade.colors[t[2]])return{[n]:`var(--${t[2]}-base)`}}],xu=e=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:t})=>{const s=t.windblade.colors[n[2]];if(!s)return;const r={background:`var(--${n[2]}-base)`,color:`var(--${n[2]}-fg-1)`};for(let i=1;i<=s.on.length;++i)r[`--fg-${i}`]=`var(--${n[2]}-fg-${i})`;return r}],We=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{var r;return(r=s.windblade.miscColors)!=null&&r[t[2]]?{[n]:t[2]}:{[n]:`var(--fg-${t[2]})`}}],yr=()=>({rules:[de("bg","background-color"),xu("bg"),We("bg-fg","background-color")],docs:{description:"Windblade uses semantic colors.",utilities:["bg-<theme.windblade.colors>","bg-<theme.windblade.miscColors>","bg-fg-<integer>"],preview:t=>t.startsWith("bg-fg")?`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full ${t}"></div>
          </div>
        `:`
          <div class="${t} size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s flex items-center justify-center text-center">
            ${t}
          </div>
        `}}),kr=()=>{const e=[...De(U.edges).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),...De(U.coners).map(([t,s])=>[`bg-${t}`,{"background-position":`var(--${s})`}]),["bg-center",{"background-position":"center"}]],n={description:"Physical properties replaced with logocal.",utilities:[...Object.keys(U.edges),...Object.keys(U.coners),"center"].map(t=>`bg-${t}`),preview:t=>`
      <div class="${t} rounded-s.4 size-i-full max-size-i-l.2 aspect-10/6" style="background-image: url('https://picsum.photos/600/400')"></div>
    `};return{rules:e,docs:n}},xr=()=>{const e=[["bg-none",{"background-image":"none"}],...Ct(U.edges).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${U.edges[t]}), var(--wb-gradient-stops))`}]),...Ct(U.coners).map(t=>[`bg-gradient-to-${t}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${U.coners[t]}), var(--wb-gradient-stops))`}])],n={description:"Repalced static colors with sematic colors.",utilities:["bg-none",...Object.keys(U.edges).map(t=>`bg-gradient-to-${t}`),...Object.keys(U.coners).map(t=>`bg-gradient-to-${t}`)],preview:t=>`
      <div class="${t} from-accent size-i-full size-b-l.2 rounded-s"></div>
    `};return{rules:e,docs:n}},_r=()=>({rules:[de("from","--wb-gradient-from"),de("to","--wb-gradient-to")],docs:{description:"Repalced static colors with sematic colors. Temporarily missing the 'via' utilities.",utilities:["from-<theme.windblade.colors>","from-<theme.windblade.miscColors>","to-<theme.windblade.colors>","to-<theme.windblade.miscColors>"],preview:t=>`
      <div class="bg-gradient-to-ie ${t} ${t.startsWith("from")?"to-accent-2":"from-accent-2"} size-i-full size-b-l.2 rounded-s"></div>
    `}}),_u=new Map([["Color",yr()],["Background Position",kr()],["Background Image",xr()],["Gradient Color Stops",_r()]]),Su=_u,Sr=()=>({rules:[],docs:{description:"Font family utilities have been removed.",utilities:[]}}),Cr=()=>({rules:[A("text","font-size")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["text-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),zr=()=>({rules:[],docs:{description:"Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.",utilities:[]}}),Or=()=>({rules:[A("tracking","letter-spacing",{defaultUnit:"em"})],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["tracking-<theme.windblade.proportions>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),jr=()=>({rules:[A("leading","line-height",{defaultUnit:""})],docs:{description:"Windblade proportions are used instead of separate size values. Setting line height in rem units is not possible at the moment.",utilities:["leading-<theme.windblade.proportions>"],preview:t=>`<div class="${t} text-center" style="max-inline-size: 36ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<div>`}}),Tr=()=>({rules:[de("text","color"),We("text-fg","color")],docs:{description:"Windblade uses semantic colors.",utilities:["text-<theme.windblade.colors>","text-<theme.windblade.miscColors>","text-fg-<integer>"],preview:t=>`<div class="${t}">Lorem ipsum<div>`}}),Mr=()=>({rules:[de("decoration","text-decoration-color"),We("decoration-fg","text-decoration-color")],docs:{description:"Windblade uses semantic colors.",utilities:["decoration-<theme.windblade.colors>","decoration-<theme.windblade.miscColors>","decoration-fg-<integer>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Ar=()=>({rules:[["decoration-from-font",{"text-decoration-thickness":"from-font"}],A("decoration","text-decoration-thickness")],docs:{description:"Windblade proportions are used instead of separate thickness values.",utilities:["decoration-from-font","decoration-<theme.windblade.proportions>","decoration-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Er=()=>({rules:[A("underline-offset","text-underline-offset")],docs:{description:"Windblade proportions are used instead of separate ofset values.",utilities:["underline-offset-<theme.windblade.proportions>","underline-offset-<theme.windblade.miscSizes>"],preview:t=>`<div class="underline ${t}">Lorem ipsum<div>`}}),Cu=new Map([["Font Family",Sr()],["Font Size",Cr()],["Font Smoothing",zr()],["Letter Spacing",Or()],["Line Height",jr()],["Text Color",Tr()],["Text Decoration Color",Mr()],["Text Decoration Thickness",Ar()],["Text Underline Offset",Er()]]),zu=Cu,Dr=()=>{const e=[...gu("rounded","","border","radius"),...$n("rounded","full","border","radius",(t,s)=>[t,{[s]:"99999px"}]),...$n("rounded","none","border","radius",(t,s)=>[t,{[s]:"none"}])],n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["rounded",...Object.keys(U.coners).map(t=>`rounded-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-full`,`${t}-none`]),preview:t=>`
      <div class="${t} size-i-full max-size-i-l.2 aspect-1/1 bg-accent"></div>
    `};return{rules:e,docs:n}},Rr=()=>{const e=Be("border","","border","width"),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:["border",...Object.keys(U.axis).map(t=>`border-${t}`),...Object.keys(U.edges).map(t=>`border-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>`
      <div class="border border-color-accent ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},Wr=()=>{const e=[...vn("border","color","border","color",de),...vn("border","color-fg","border","color",We)],n={description:"Windblade uses semantic colors.",utilities:["border-color",...Object.keys(U.axis).map(t=>`border-${t}-color`),...Object.keys(U.edges).map(t=>`border-${t}-color`)].flatMap(t=>[`${t}-<theme.windblade.colors>`,`${t}-<theme.windblade.miscColors>`,`${t}-fg-<integer>`]),preview:t=>`
      <div class="border border-width-s.2 ${t} rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
    `};return{rules:e,docs:n}},Lr=()=>({rules:[A("outline","outline-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["outline-<theme.windblade.proportions>","outline-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),Ou=()=>({rules:[de("outline","outline-color"),We("outline-fg","outline-color")],docs:{description:"Windblade uses semantic colors.",utilities:["outline-color-<theme.windblade.colors>","outline-color-<theme.windblade.miscColors>","outline-color-fg-<integer>"],preview:t=>"TODO"}}),Nr=()=>({rules:[A("outline-offset","outline-offset")],docs:{description:"Windblade proportions are used instead of separate offset values.",utilities:["outline-offset-<theme.windblade.proportions>","outline-offset-<theme.windblade.miscSizes>"],preview:t=>"TODO"}}),Ur=()=>({rules:[],docs:{description:"Divides have been removed.",utilities:[]}}),Fr=()=>({rules:[],docs:{description:"Rings have been removed.",utilities:[]}}),ju=new Map([["Border Radius",Dr()],["Border Width",Rr()],["Border Color",Wr()],["Outline Width",Lr()],["Outline Offset",Nr()],["Divide",Ur()],["Ring",Fr()]]),Tu=ju,Br=()=>({rules:[],docs:{description:"Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),Ir=()=>({rules:[A("opacity","opacity",{defaultUnit:""})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:[]}}),Mu=new Map([["Box Shadow",Br()],["Opacity",Ir()]]),Au=Mu,Hr=()=>({rules:[],docs:{description:"Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.",utilities:[]}}),Eu=new Map([["Drop Shadow",Hr()]]),Du=Eu,Pr=()=>({rules:[A("border-spacing","border-spacing")],docs:{description:"Changing border-spacing for individual axis is not possible at the moment.",utilities:["border-spacing-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Ru=new Map([["Border spacing",Pr()]]),Wu=Ru,Wt=(e,n,t)=>[new RegExp(`^(${e})-(.+)$`),(s,{theme:r})=>{var l;const i={};let o=r.windblade.proportions[s[2]]*r.windblade.time.baseUnitMs+"ms";if(o!==void 0)return i[n]=(l=t==null?void 0:t(o))!=null?l:o,i}],Gr=(e,n)=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:s})=>{const r={};let i=s.windblade.time.functions[t[2]];if(i!==void 0)return r[n]=i,r}],Vr=()=>({rules:[Wt("duration","transition-duration"),Wt("delay","transition-delay")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["duration-<theme.windblade.proportions>","delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),qr=()=>({rules:[Gr("ease","transition-timing-function")],docs:{description:"Time values in Windblade use same proportions as everything else.",utilities:["ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),Yr=()=>({rules:[],docs:{description:"Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.",utilities:[]}}),Jr=()=>({rules:[Wt("animation-duration","animation-duration"),Wt("animation-delay","animation-delay")],docs:{description:"Utilities for controlling the duration & delay of CSS animations. Missing from Tailwind.",utilities:["animation-duration-<theme.windblade.proportions>","animation-delay-<theme.windblade.proportions>"],preview:()=>"TODO"}}),Kr=()=>({rules:[Gr("animation-ease","animation-timing-function")],docs:{description:"Utilities for controlling the easing of CSS animations. Missing from Tailwind.",utilities:["animation-ease-<theme.windblade.time.functions>"],preview:()=>"TODO"}}),Lu=new Map([["Transition Delay & Duration",Vr()],["Transition Timing Function",qr()],["Animations",Yr()],["Animation Delay & Duration",Jr()],["Animation Timing Function",Kr()]]),Nu=Lu,Xr=()=>({rules:[A("scale","transform",{defaultUnit:"",postprocess:t=>`scale${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["scale-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Qr=()=>({rules:[A("rotate","transform",{defaultUnit:"deg",postprocess:t=>`rotate${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["rotate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Zr=()=>({rules:[A("translate","transform",{postprocess:t=>`translate${t}`})],docs:{description:"X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.",utilities:["translate-<theme.windblade.proportions>"],preview:t=>"TODO"}}),ei=()=>({rules:[A("skew","transform",{defaultUnit:"deg",postprocess:t=>`skew${Number(t)*360}`})],docs:{description:"Windblade uses proportions instead of separete values.",utilities:["skew-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Uu=new Map([["Scale",Xr()],["Rotate",Qr()],["Translate",Zr()],["Skew",ei()]]),Fu=Uu,ti=()=>({rules:[de("accent","accent-color")],docs:{description:"Windblade uses semantic colors.",utilities:["accent-<theme.windblade.colors>","accent-<theme.windblade.miscColors>","accent-fg-<integer>"],preview:t=>"TODO"}}),ni=()=>({rules:[de("caret","caret-color"),We("caret-fg","caret-color")],docs:{description:"Windblade uses semantic colors.",utilities:["caret-<theme.windblade.colors>","caret-<theme.windblade.miscColors>","caret-fg-<integer>"],preview:t=>"TODO"}}),si=()=>{const e=Be("scroll-m","","scroll-margin",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(U.axis).map(t=>`scroll-m-${t}`),...Object.keys(U.edges).map(t=>`scroll-m-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},ri=()=>{const e=Be("scroll-p","","scroll-padding",""),n={description:"Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.",utilities:[...Object.keys(U.axis).map(t=>`scroll-p-${t}`),...Object.keys(U.edges).map(t=>`scroll-p-${t}`)].flatMap(t=>[`${t}-<theme.windblade.proportions>`,`${t}-<theme.windblade.miscSizes>`]),preview:t=>"TODO"};return{rules:e,docs:n}},ii=()=>({rules:[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],docs:{description:"snap-x and snap-y have been removed because they have no logical counterparts yet.",utilities:["snap-none","snap-both","snap-mandatory","snap-proximity"],preview:t=>"TODO"}}),oi=()=>({rules:[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],docs:{description:"pan touch-actions have been removed because they have no logical counterparts yet.",utilities:["touch-auto","touch-none","touch-pinch-zoom","touch-manipulation"],preview:t=>"TODO"}}),Bu=new Map([["Accent color",ti()],["Caret color",ni()],["Scroll margin",si()],["Scroll padding",ri()],["Scroll snap type",ii()],["Touch action",oi()]]),Iu=Bu,li=()=>({rules:[de("fill","fill"),We("fill-fg","fill")],docs:{description:"Windblade uses semantic colors.",utilities:["fill-<theme.windblade.colors>","fill-<theme.windblade.miscColors>","fill-fg-<integer>"],preview:t=>"TODO"}}),ai=()=>({rules:[de("stroke","stroke"),We("stroke-fg","stroke")],docs:{description:"Windblade uses semantic colors.",utilities:["stroke-<theme.windblade.colors>","stroke-<theme.windblade.miscColors>","stroke-fg-<integer>"],preview:t=>"TODO"}}),ci=()=>({rules:[A("stroke","stroke-width")],docs:{description:"Windblade proportions are used instead of separate size values.",utilities:["stroke-<theme.windblade.proportions>"],preview:t=>"TODO"}}),Hu=new Map([["Fill",li()],["Stroke Color",ai()],["Stroke Width",ci()]]),Pu=Hu,Gu=e=>{var r,i,o,l,a,c,d;const n=e.dark.l,t=e.dark.c,s=(r=e.dark.a)!=null?r:1;return{dark:{l:n,c:t,a:s},light:{l:(o=(i=e.light)==null?void 0:i.l)!=null?o:1-n,c:(a=(l=e.light)==null?void 0:l.c)!=null?a:t,a:(d=(c=e.light)==null?void 0:c.a)!=null?d:s}}},Vu=(e,n)=>{const{windblade:t}=e,{colors:s}=t,r={light:{},dark:{}};return Object.entries(s).forEach(([i,o])=>{[o.base,...o.on].forEach((a,c)=>{const d=`--${i}-${c===0?"base":"fg-"+c}`,{dark:u,light:f}=Gu(a);r.dark[d]=Dt.from(`oklch(${u.l} ${u.c}, ${n}, ${u.a})`).rgba,r.light[d]=Dt.from(`oklch(${f.l} ${f.c}, ${n}, ${f.a})`).rgba})}),r},et=e=>{let n="";return Object.keys(e).forEach(t=>{n+=`${t}: ${e[t]};
`}),n},di=()=>({rules:[[new RegExp(/^scheme-(dark|light|inverse|auto)-(\d+)$/),(t,{rawSelector:s,theme:r})=>{var c;const i=Number((c=t[2])!=null?c:0);if(Number.isNaN(i))return;const o=On(s),{dark:l,light:a}=Vu(r,i);switch(t[1]){case"light":return`
              .${o} {
                ${et(a)}
              }
            `;case"dark":return`
              .${o} {
                ${et(l)}
              }
            `;default:return`
              .${o},
              .scheme-dark.${o},
              .scheme-dark .${o} {
                ${et(l)}
              }
              .scheme-light.${o},
              .scheme-light .${o} {
                ${et(a)}
              }
              @media (prefers-color-scheme: light) { .${o} {
                  ${et(a)}
                }
              }
            `}}]],docs:{description:"Utilities for switching color scheme. Missing from Tailwind.",utilities:["scheme-dark","scheme-light","scheme-auto-<integer>","scheme-dark-<integer>","scheme-light-<integer>"],preview:t=>"TODO"}}),qu=new Map([["Color Scheme",di()]]),Yu=qu,Ju=new Map([["Layout",pu],["Flexbox & Grid",vu],["Spacing",wu],["Sizing",ku],["Background",Su],["Typography",zu],["Borders",Tu],["Effects",Au],["Filters",Du],["Tables",Wu],["Transitions & Animation",Nu],["Transforms",Fu],["Interactivity",Iu],["SVG",Pu],["Accessibility",Yu]]),Ku=Ju,Xu=[...er().rules,...tr().rules,[new RegExp("^(columns)-(.+)$"),(e,{theme:n})=>{const t=e[2].split(","),s=Zs(t[0],n,"rem"),r=t[1];return{columns:[s,r].join(" ")}}],...nr().rules,...sr().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...rr().rules,...Object.keys(U.inlineEdges).map(e=>[`float-${e}`,{float:U.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(U.inlineEdges).map(e=>[`clear-${e}`,{clear:U.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...ir().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>bn("overflow",e,"overflow","",(n,t)=>[n,{[t]:e}])),...["auto","contain","none"].flatMap(e=>bn("overscroll",e,"overscroll-behavior","",(n,t)=>[n,{[t]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...Be("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e.replace("invisible","hidden")}]),[new RegExp("^z-(.+)$"),e=>({"z-index":e[2]})],A("basis","flex-basis"),...Be("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[new RegExp("^(order)-(.+)$"),e=>({order:e[2]})],["order-none",{order:"0"}],...[{ruleName:"col",cssName:"column"},{ruleName:"row",cssName:"row"}].flatMap(({cssName:e,ruleName:n})=>[[new RegExp(`^(grid-${n}s)-(.+)$`),t=>({["grid-template-"+e+"s"]:`repeat(${t[2]}, minmax(0, 1fr))`})],[`grid-${n}s-none`,{["grid-template-"+e+"s"]:"none"}],[`${n}-auto`,{["grid-"+e]:"auto"}],[new RegExp(`^(${n}-span)-(.+)$`),t=>({["grid-"+e]:`span ${t[2]} / span ${t[2]}`})],[`${n}-span-full`,{["grid-"+e]:"1 / -1"}],[new RegExp(`^(${n}-start)-(.+)$`),t=>({["grid-"+e+"-start"]:t[2]})],[`${n}-start-auto`,{["grid-"+e+"-start"]:"auto"}],[new RegExp(`^(${n}-end)-(.+)$`),t=>({["grid-"+e+"-end"]:t[2]})],[`${n}-end-auto`,{["grid-"+e+"-end"]:"auto"}]]),...cr().rules,...dr().rules,...ur().rules,...fr().rules,["grid-flow-row",{"grid-auto-flow":"row"}],["grid-flow-col",{"grid-auto-flow":"column"}],["grid-flow-dense",{"grid-auto-flow":"dense"}],["grid-flow-row-dense",{"grid-auto-flow":"row dense"}],["grid-flow-col-dense",{"grid-auto-flow":"column desne"}],...lr().rules,...ar().rules,A("gap","gap"),A("gap-col","column-gap"),A("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-items-auto",{"place-self":"auto"}],["place-items-start",{"place-self":"start"}],["place-items-end",{"place-self":"end"}],["place-items-center",{"place-self":"center"}],["place-items-stretch",{"place-self":"stretch"}],...hr().rules,...gr().rules,...mr().rules,...pr().rules,...br().rules,...$r().rules,...wr().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],...yr().rules,["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...kr().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...xr().rules,..._r().rules,...Sr().rules,...Cr().rules,...zr().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...Or().rules,...jr().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],...Tr().rules,["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],...Mr().rules,["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...Ar().rules,...Er().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],A("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],A("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],["content-none",{content:"none"}],...Dr().rules,[/^(border)$/,(e,{theme:n})=>({"border-style":"solid","border-width":"1px"})],...Rr().rules,...Wr().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...Ur().rules,...Lr().rules,...Ou().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...Nr().rules,...Fr().rules,...Br().rules,...Ir().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],A("blur","filter",{postprocess:e=>`blur(${e})`}),A("brightness","filter",{postprocess:e=>`brightness(${e})`}),A("contrast","filter",{postprocess:e=>`contrast(${e})`}),...Hr().rules,A("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),A("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),A("invert","filter",{postprocess:e=>`invert(${e})`}),A("saturate","filter",{postprocess:e=>`saturate(${e})`}),A("sepia","filter",{postprocess:e=>`sepia(${e})`}),A("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),A("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),A("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),A("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),A("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),A("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),A("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),A("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),A("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],...Pr().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:n})=>({transition:"all","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition)$/,(e,{theme:n})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-colors)$/,(e,{theme:n})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-opacity)$/,(e,{theme:n})=>({transition:"opacity","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-shadow)$/,(e,{theme:n})=>({transition:"box-shadow","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],[/^(transition-transform)$/,(e,{theme:n})=>({transition:"transform","transition-timing-function":n.windblade.time.functions.default,"transition-duration":`${n.windblade.time.baseUnitMs}ms`})],...Vr().rules,...qr().rules,...Yr().rules,...Jr().rules,...Kr().rules,...Xr().rules,...Qr().rules,...Zr().rules,...ei().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],...ti().rules,["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],...ni().rules,["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...si().rules,...ri().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...ii().rules,...oi().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...li().rules,...ai().rules,...ci().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],...di().rules,["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],Qu=Xu,Zu=[{getCSS:()=>`
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
    `}],ef=Zu,tf={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}},nf=tf,vt=(e,n)=>({[e+"-900"]:{base:{dark:{l:n[0].l,c:n[0].c},light:{l:n[9].l,c:n[9].c}},on:[{dark:{l:1,c:0}}]},[e+"-800"]:{base:{dark:{l:n[1].l,c:n[1].c},light:{l:n[8].l,c:n[8].c}},on:[{dark:{l:1,c:0}}]},[e+"-700"]:{base:{dark:{l:n[2].l,c:n[2].c},light:{l:n[7].l,c:n[7].c}},on:[{dark:{l:1,c:0}}]},[e+"-600"]:{base:{dark:{l:n[3].l,c:n[3].c},light:{l:n[6].l,c:n[6].c}},on:[{dark:{l:1,c:0}}]},[e+"-500"]:{base:{dark:{l:n[4].l,c:n[4].c},light:{l:n[5].l,c:n[5].c}},on:[{dark:{l:1,c:0}}]},[e+"-400"]:{base:{dark:{l:n[5].l,c:n[5].c},light:{l:n[4].l,c:n[4].c}},on:[{dark:{l:0,c:0}}]},[e+"-300"]:{base:{dark:{l:n[6].l,c:n[6].c},light:{l:n[3].l,c:n[3].c}},on:[{dark:{l:0,c:0}}]},[e+"-200"]:{base:{dark:{l:n[7].l,c:n[7].c},light:{l:n[2].l,c:n[2].c}},on:[{dark:{l:0,c:0}}]},[e+"-100"]:{base:{dark:{l:n[8].l,c:n[8].c},light:{l:n[1].l,c:n[1].c}},on:[{dark:{l:0,c:0}}]},[e+"-50"]:{base:{dark:{l:n[9].l,c:n[9].c},light:{l:n[0].l,c:n[0].c}},on:[{dark:{l:0,c:0}}]}}),sf={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...vt("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...vt("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...vt("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...vt("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},rf=sf,of={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},lf=of,af={none:{},material3:nf,tailwind:rf,windblade:lf},ui=af,cf=()=>`# Installation

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
});
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
});
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
});
\`\`\`
`,df=cf,uf=()=>`# Options

At the moment Windblade only exposes one option which configures which theme preset is used.

To specify which preset to use define the \`theme\` value in the preset options:

\`\`\`ts
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});
\`\`\`

The following themes are available:
${Object.keys(ui).map(e=>`- \`${e}\``).join(`
`)}

**Please note that the \`material3\` theme is not finished and is almost unusable at the moment.**
`,ff=uf,hf=()=>`# Using semantic colors

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
`,gf=hf,ve={block:"bg-surface p-s transition text-center rounded-s.4"},mf=()=>`# Using logical properties

Windblade uses logical properties and values only.

All properties that can be customized on multiple axis/edges/corenrs can be prepended with:
- \`-b\` for block axis (e.g. \`size-b\`).
- \`-i\` for inline axis (e.g. \`size-i\`).
- \`-bs\` and \`-be\` for block start and end edges.
- \`-is\` and \`-ie\` for inline start and end edges.
- \`-ss\` \`-se\` \`-es\` \`-ee\` for corners (start start, start end, end start & end end)

\`\`\`uno-html
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${ve.block}">ss</div>
  <div class="${ve.block}">bs</div>
  <div class="${ve.block}">se</div>

  <div class="${ve.block}">is</div>
  <div class="${ve.block}">center</div>
  <div class="${ve.block}">ie</div>

  <div class="${ve.block}">es</div>
  <div class="${ve.block}">be</div>
  <div class="${ve.block}">ee</div>
</div>
\`\`\`

Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. \`background-position\` with \`bg-{corner}\` utility).

If you are new to logical properties try playing with \`bg-gradient-to-{edge/corner}\` and see which way the gradient goes.

Please note that \`width\` and \`height\` are completely removed in favor of \`size-{axis}\`.
`,pf=mf,bf=()=>'# Using the $ syntax\n\nYou can grab relevant to the rule theme values prefixing them with `$`. This is especially useful inside brackets when you want to set custom values.\n\n```html\n<div class="grid grid-cols-[auto_$l_auto]"></div>\n<!-- This is a bad example because at the moment brackets have limited support and do not work in this case -->\n```\n\nYou can also use `$` to conveniently perform operations with your design tokens without breaking out of your design system or using `calc()`.\n\n```html\n<div class="p-s">\n  Label\n  <!-- Custom underline -->\n  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>\n</div>\n```\n',vf=bf,$f=()=>`# Hover, focus and other states

Windblade does not come with functionality like hover or focus states. Please use Windblade together with [unocss-preset-mini-variants](https://www.npmjs.com/package/unocss-preset-mini-variants) or other variant implementations if you need this functionality.
`,wf=$f,yf=new Map([["Installation",df],["Options",ff],["Semantic colors",gf],["Logical properties",pf],["$ syntax",vf],["Hover, focus and other states",wf]]),kf=yf,xf=e=>`# Semantic colors

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
            ${s.on.map((r,i)=>`<div class="text-fg-${i+1}">Fg-${i+1}</div>`).join("")}
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
`,_f=xf,Oe={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Sf=e=>`# Proportions

Proportions are used throughout the whole preset for size, duration, opacity, etc.

Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.

## Default proportions

By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.

\`\`\`uno-html
<table class="border-collapse">
  <tr class="${Oe.tr}">
    <th class="${Oe.th}">Name</th>
    <th class="${Oe.th}">Value</th>
    <th class="${Oe.th}"></th>
  </tr>
  ${(()=>{const n=e.windblade.proportions;return typeof n=="object"?Object.entries(n).map(([t,s])=>`
        <tr class="${Oe.tr}">
          <td class="${Oe.td} font-semibold">${t}</td>
          <td class="${Oe.td} text-fg-4">${s}</td>
          <td class="${Oe.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
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
`,Cf=Sf,zf=()=>`# Other theme objects

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
`,Of=zf,jf=new Map([["Semantic Colors",_f],["Proportions",Cf],["Other",Of]]),Tf=jf;new Map([["Usage",kf],["Theme",Tf],...Ku]);const Mf=(e={})=>{var t;return e.theme=(t=e.theme)!=null?t:"windblade",{name:"Windblade",theme:Te(fu,ui[e.theme]),rules:Qu,variants:[],options:e,postprocess:[],preflights:ef,prefix:void 0,shortcuts:[]}},fe=ye(()=>iu({presets:[Mf()],safelist:["scheme-dark-276","scheme-light-296"]})),Af=S("<div></div>"),Ef=e=>{const[n,t]=N();let s;return X(()=>{if(!s){t(void 0);return}n()||t(s.attachShadow({mode:"open"}))}),X(()=>{const r=n();!r||(r.innerHTML=e.innerHTML)}),(()=>{const r=Af.cloneNode(!0),i=s;return typeof i=="function"?qe(i,r):s=r,M(()=>C(r,e.class)),r})()},fi=e=>{const[n,t]=N();return X(async()=>{var o;const{html:s}=e,r=(await fe.generate(s,{safelist:!1,preflights:!1,minify:!0})).css,i=(await fe.generate(s)).css;t({html:s,shortCss:r,fullCss:i}),(o=e.onChange)==null||o.call(e,r)}),m(Ef,{get class(){return e.class},get innerHTML(){var s,r;return`
    <div
      id="root"
      class="${je.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${(s=n())==null?void 0:s.fullCss.replaceAll(":root",":where(#root)")}</style>
      ${(r=n())==null?void 0:r.html}
    </div>
  `}})},Df=S('<div class="inline-block scheme-auto-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal"><span class="text-fg-1 font-semibold">Error:</span> </div>'),Rf=S('<a class="text-accent"></a>'),Wf=S('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]"></p>'),Lf=S('<h2 class="text-fg-1 font-bold text-m.2"></h2>'),Nf=S('<h3 class="font-bold text-$($s+$s.2)"></h3>'),Uf=S('<h4 class="font-bold"></h4>'),Ff=S("<h5></h5>"),Bf=S("<h6></h6>"),gs=S("<pre></pre>"),If=S('<span class="bg-surface p-i-s.4 rounded-s.4"></span>'),Hf=S('<strong class="font-bold"></strong>'),Pf=S('<ul class="p-is-s flex flex-col gap-s.4"></ul>'),Gf=S('<li class="text-fg-3 font-semibold"></li>'),Vf=S('<div class="size-b-full overflow-auto"><div class="p-m.2 flex flex-col gap-s"></div></div>'),nn=e=>(()=>{const n=Df.cloneNode(!0);return n.firstChild.nextSibling,x(n,()=>e.children,null),n})(),re=e=>{var n,t,s;switch(e.type){case"text":return e.value;case"link":return(()=>{const r=Rf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),M(()=>Me(r,"href",e.url)),r})();case"paragraph":return(()=>{const r=Wf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case"heading":switch(e.depth){case 1:return(()=>{const r=Lf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case 2:return(()=>{const r=Nf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case 3:return(()=>{const r=Uf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case 4:return(()=>{const r=Ff.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case 5:return(()=>{const r=Bf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case 6:return m(nn,{children:"Heading too deep"})}case"code":if(e.lang==="uno-html")return m(fi,{get html(){return e.value},class:"overflow-auto"});{const r=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${(n=e.lang)!=null?n:""}`;if(!e.lang)return(()=>{const o=gs.cloneNode(!0);return C(o,r),x(o,()=>e.value),o})();let i=e.value;try{i=(s=(t=Ne.highlighter())==null?void 0:t.highlight(e.value,{language:e.lang}).value)!=null?s:""}catch(o){return m(nn,{get children(){return["Failed highlighting code. ",Y(()=>o.message)]}})}return(()=>{const o=gs.cloneNode(!0);return C(o,r),o.innerHTML=i,o})()}case"inlineCode":return(()=>{const r=If.cloneNode(!0);return x(r,()=>e.value),r})();case"strong":return(()=>{const r=Hf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case"list":return(()=>{const r=Pf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case"listItem":return(()=>{const r=Gf.cloneNode(!0);return x(r,()=>e.children.map(i=>re(i))),r})();case"root":return e.children.map(r=>re(r));default:return m(nn,{get children(){return["Unsoppoprted element: ",Y(()=>e.type)]}})}},qf=e=>(()=>{const n=Vf.cloneNode(!0),t=n.firstChild;return x(t,m(ln,{fallback:"Loading...",get children(){return(()=>{var r;const s=(r=Ne.md())==null?void 0:r.fromMarkdown(e.themeObject(fe.config.theme));return s?re(s):"Error: Failed to parse this page's markdown"})()}})),n})(),Yf=S('<div class="rounded-s.4 overflow-hidden flex items-center"></div>'),Jf=S('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value=""></option></select>'),Kf=S("<option></option>"),Xf=S('<div class="flex gap-s.2 justify-between items-center"><div class="flex items-center font-semibold"></div></div>'),Qf=S('<button class="text-accent transition ease-out hover:highlight active:highlight+"></button>'),Lt=e=>{const n=["<integer>","<ratio>","<theme.windblade.sizes>","<theme.windblade.proportions>","<theme.windblade.miscSizes>","<theme.windblade.colors>","<theme.windblade.miscColors>","<theme.windblade.time.functions>"];return e.flatMap(t=>typeof t!="string"?[t]:n.includes(t)?[t]:n.map(s=>t.includes(s)).filter(s=>Boolean(s)).length<=0?[t]:n.flatMap(s=>{const r=t.indexOf(s);return r<0?[]:[...Lt([t.substring(0,r)]),t.substring(r,r+s.length),...Lt([t.substring(r+s.length,t.length)])].filter(i=>Boolean(i))}))},Zf=e=>{const[n,t]=N(1),s=()=>e.onChange(""+n());X(s);const r="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const i=Yf.cloneNode(!0);return x(i,m(Ae,{style:"secondary",class:r,onClick:()=>t(n()-1),children:"-"}),null),x(i,m(Ae,{style:"secondary",class:r,onClick:s,children:n}),null),x(i,m(Ae,{style:"secondary",class:r,onClick:()=>t(n()+1),children:"+"}),null),i})()},Ge=e=>(()=>{const n=Jf.cloneNode(!0);return n.firstChild,n.addEventListener("change",({target:t})=>e.onChange(t.value)),x(n,m(yn,{get each(){return e.values},children:([t])=>(()=>{const s=Kf.cloneNode(!0);return s.$$click=()=>e.onChange(t),s.value=t,x(s,t),s})()}),null),n})(),eh=e=>{const[n,t]=N(Lt([e.utility]));return X(ys(n,()=>{var r;return(r=e.onClick)==null?void 0:r.call(e,n().join(""))},{defer:!0})),(()=>{const r=Xf.cloneNode(!0),i=r.firstChild;return x(i,()=>Lt([e.utility]).map((o,l)=>{switch(o){case"<integer>":return m(Zf,{onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.sizes>":return m(Ge,{get values(){return[...Object.entries(fe.config.theme.windblade.proportions),...Object.entries(fe.config.theme.windblade.miscSizes)]},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.proportions>":return m(Ge,{get values(){return Object.entries(fe.config.theme.windblade.proportions)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.miscSizes>":return m(Ge,{get values(){return Object.entries(fe.config.theme.windblade.miscSizes)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.colors>":return m(Ge,{get values(){return Object.entries(fe.config.theme.windblade.colors)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.miscColors>":return m(Ge,{get values(){return Object.entries(fe.config.theme.windblade.miscColors)},onChange:a=>t(c=>(c[l]=a,[...c]))});case"<theme.windblade.time.functions>":return m(Ge,{get values(){return Object.entries(fe.config.theme.windblade.time.functions)},onChange:a=>t(c=>(c[l]=a,[...c]))});default:return(()=>{const a=Qf.cloneNode(!0);return a.$$click=()=>t(c=>(c[l]=o,[...c])),x(a,o),a})()}})),r})()};ot(["click"]);const th="_progress_8tf2m_1",nh="_spin_8tf2m_1",sh={progress:th,spin:nh},rh=S("<div></div>"),ms=e=>(()=>{const n=rh.cloneNode(!0);return M(t=>{var i;const s=sh.progress,r=`--radius: ${(i=e.radius)!=null?i:1}rem`;return s!==t._v$&&C(n,t._v$=s),t._v$2=ke(n,r,t._v$2),t},{_v$:void 0,_v$2:void 0}),n})(),ih=S('<div class="size-b-full overflow-auto"><div class="flex flex-col gap-s p-m.2"><h2 class="text-fg-1 font-bold text-m.2"></h2><p class="text-fg-3 font-semibold"></p></div></div>'),oh=S("<h3>Try it</h3>"),lh=S('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody></tbody></table>'),ah=S('<section class="break-inside-avoid break-after-column"><h4>Preview</h4></section>'),ps=S("<pre></pre>"),ch=S('<section class="break-inside-avoid"><h4>HTML</h4></section>'),dh=S('<section class="break-inside-avoid"><h4>Generated CSS</h4></section>'),uh=S('<tr><td class="p-i-s"><div class="m-auto i-mdi-check transition ease-linear text-fg-1"></div></td><td class="p-b-s"></td></tr>'),bs=S("<div>Loading </div>"),fh=e=>{const[n,t]=N(-1),[s,r]=N(void 0),[i,o]=N(""),{formatter:l,highlighter:a}=Ne,c=()=>{var f,k,b,g;return(g=(b=(k=d()).preview)==null?void 0:b.call(k,(f=s())!=null?f:""))!=null?g:""},d=()=>e.ruleGroup.docs,u={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3",h3:"font-bold text-$($s+$s.2)",h4:"font-bold m-be-s",pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"};return(()=>{const f=ih.cloneNode(!0),k=f.firstChild,b=k.firstChild,g=b.nextSibling;return x(b,()=>e.title),x(g,()=>d().description),x(k,(()=>{const y=Y(()=>!!d().preview);return()=>y()&&[(()=>{const v=oh.cloneNode(!0);return M(()=>C(v,u.h3)),v})(),(()=>{const v=lh.cloneNode(!0),w=v.firstChild,p=w.firstChild,h=p.firstChild,$=h.nextSibling,_=w.nextSibling;return x(_,m(yn,{get each(){return d().utilities},children:(O,E)=>(()=>{const W=uh.cloneNode(!0),j=W.firstChild,D=j.firstChild,T=j.nextSibling;return x(T,m(eh,{utility:O,onClick:L=>{t(E),r(L)}})),M(L=>{const z=u.tr,V=`opacity: ${n()===E()?1:0};`;return z!==L._v$8&&C(W,L._v$8=z),L._v$9=ke(D,V,L._v$9),L},{_v$8:void 0,_v$9:void 0}),W})()})),M(O=>{const E=u.tr,W=`${u.th} p-i-s`,j=`${u.th} size-i-full`;return E!==O._v$&&C(p,O._v$=E),W!==O._v$2&&C(h,O._v$2=W),j!==O._v$3&&C($,O._v$3=j),O},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})(),m(oe,{get when(){return s()},get children(){return[(()=>{const v=ah.cloneNode(!0),w=v.firstChild;return x(v,m(fi,{get html(){return c()},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;",onChange:o}),null),M(()=>C(w,u.h4)),v})(),(()=>{const v=ch.cloneNode(!0),w=v.firstChild;return x(v,m(ln,{get fallback(){return(()=>{const p=bs.cloneNode(!0);return p.firstChild,x(p,m(ms,{}),null),M(()=>C(p,`${u.pre} flex gap-s items-center`)),p})()},get children(){const p=ps.cloneNode(!0);return M(h=>{var O,E,W,j;const $=u.pre,_=(j=a())==null?void 0:j.highlight((E=(O=l())==null?void 0:O.html_beautify(c()))!=null?E:"",{language:"xml"}).value.replaceAll((W=s())!=null?W:"",`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${s()}</span>`);return $!==h._v$4&&C(p,h._v$4=$),_!==h._v$5&&(p.innerHTML=h._v$5=_),h},{_v$4:void 0,_v$5:void 0}),p}}),null),M(()=>C(w,u.h4)),v})(),(()=>{const v=dh.cloneNode(!0),w=v.firstChild;return x(v,m(ln,{get fallback(){return(()=>{const p=bs.cloneNode(!0);return p.firstChild,x(p,m(ms,{}),null),M(()=>C(p,`${u.pre} flex gap-s items-center`)),p})()},get children(){const p=ps.cloneNode(!0);return M(h=>{var O,E,W;const $=`${u.pre} css`,_=(W=a())==null?void 0:W.highlight((E=(O=l())==null?void 0:O.css_beautify(i()))!=null?E:"",{language:"css"}).value;return $!==h._v$6&&C(p,h._v$6=$),_!==h._v$7&&(p.innerHTML=h._v$7=_),h},{_v$6:void 0,_v$7:void 0}),p}}),null),M(()=>C(w,u.h4)),v})()]}})]})(),null),f})()},hh=S('<nav class="flex flex-col gap-s p-m.2 overflow-auto border-solid border-0 border-ie-px border-color-fg-5 size-i-max size-b-full"></nav>'),gh=S('<div class="font-semibold m-be-s.4"></div>'),mh=S('<div class="flex flex-col gap-s.2"></div>'),ph=S('<button><div class="absolute inset-0"><div></div><div></div></div><span class="relative"></span></button>'),sn=S("<div></div>"),bh=S('<div class="relative flex gap-s items-center p-s.4 p-i-m.2 border-solid border-0 border-be-px border-color-fg-5"><div class="flex flex-wrap gap-s.4 text-fg-3"></div></div>'),vh=S('<div class="flex flex-col size-b-full"><div><main></main></div></div>'),$h=S('<div class="i-mdi-chevron-right"></div>'),wh=S("<aside></aside>"),yh=()=>{const[e,n]=N(0),[t,s]=N(0),[r,i]=N(!1),[o,l]=N(!1);let a,c;X(async()=>{d.disconnect(),a&&d.observe(a)}),X(async()=>{u.disconnect(),c&&u.observe(c)});const d=new ResizeObserver(([b])=>{n(b.borderBoxSize[0].inlineSize)}),u=new ResizeObserver(([b])=>{s(b.borderBoxSize[0].inlineSize)});X(()=>{l(e()>=t()*4)});const f=()=>r()||o(),k=(()=>{const b=hh.cloneNode(!0),g=c;return typeof g=="function"?qe(g,b):c=b,x(b,()=>{const y=[];return as.forEach((v,w)=>{y.push([(()=>{const p=gh.cloneNode(!0);return x(p,w),p})(),(()=>{const p=mh.cloneNode(!0);return x(p,()=>{const h=[];let $=0;return v.forEach((_,O)=>{const E=()=>rt.route().current.startsWith(`/docs/${w}-${O}`),W=`filter: hue-rotate(${3.6*$++}deg);`;h.push((()=>{const j=ph.cloneNode(!0),D=j.firstChild,T=D.firstChild,L=T.nextSibling,z=D.nextSibling;return j.$$click=()=>{nt(`/docs/${w}-${O}`),i(!1)},x(z,O),M(V=>{const Q=`${E()?"bg-surface text-fg-1":"text-fg-3"} relative p-s.6 p-i-s p-is-m.2 rounded-full text-start justify-start transition ease-out overflow-hidden hover:highlight hover:bg-accent-3 hover:text-fg-1 active:highlight+`,J=W,Z=`${E()?"bg-accent-2":"bg-transparent"} blur-s transition absolute size-b-m.2 size-i-m.2 rounded-full inset-0 inset-b-0 m-b-auto`,ue=`${E()?"bg-accent":"bg-accent-2"} size-b-s.4 size-i-s.4 transition absolute rounded-full inset-0 inset-b-0 m-b-auto m-is-$(($m.2-$s.4)/2)`;return Q!==V._v$&&C(j,V._v$=Q),V._v$2=ke(D,J,V._v$2),Z!==V._v$3&&C(T,V._v$3=Z),ue!==V._v$4&&C(L,V._v$4=ue),V},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),j})())}),h}),p})()])}),y}),b})();return(()=>{const b=vh.cloneNode(!0),g=b.firstChild,y=g.firstChild,v=a;return typeof v=="function"?qe(v,b):a=b,x(b,m(oe,{get when(){return!o()},get children(){const w=bh.cloneNode(!0),p=w.firstChild;return x(w,m(Ae,{onClick:()=>i(!r()),class:"p-s.6 rounded-full",style:"half",get children(){return[(()=>{const h=sn.cloneNode(!0);return M(()=>C(h,`i-mdi-menu ${r()?"opacity-zero":"opacity-s"} transition`)),h})(),(()=>{const h=sn.cloneNode(!0);return M(()=>C(h,`i-mdi-backburger ${r()?"opacity-s":"opacity-zero"} transition absolute`)),h})()]}}),p),x(p,m(yn,{get each(){var h;return(h=rt.route().current.split("/").pop())==null?void 0:h.split("-")},children:(h,$)=>[(()=>{const _=sn.cloneNode(!0);return x(_,h),M(()=>C(_,`${$()===0?"":"text-fg-1 font-semibold"}`)),_})(),Y((()=>{const _=Y(()=>$()===0);return()=>_()&&$h.cloneNode(!0)})())]})),w}}),g),x(g,m(oe,{get when(){return!o()},get fallback(){return(()=>{const w=wh.cloneNode(!0);return x(w,k),w})()},get children(){return m(vo,{get isOpen(){return f()},onClose:()=>i(!1),style:"z-index: 1;",unmount:!1,title:"Navigation drawer",get children(){return[m(oe,{get when(){return Y(()=>!!r())()&&!o()},get children(){return m($o,{class:"absolute inset-0"})}}),m(wo,{get class(){return`bg-normal-3 transition-transform ease-out ${o()?"relative":"absolute inset-b-0 inset-is-0"}`},get style(){return`transform: translateX(${f()?"0":"-100%"})`},children:k})]}})}}),y),y.$$click=()=>i(!1),x(y,()=>{const w=[];return as.forEach((p,h)=>{p.forEach(($,_)=>{typeof $=="function"?w.push(m(St,{path:`/docs/${h}-${_}`,get children(){return m(qf,{themeObject:$})}})):w.push(m(St,{path:`/docs/${h}-${_}`,get children(){return m(fh,{title:_,ruleGroup:$})}}))})}),w}),M(w=>{const p=`size-b-full flex relative ${o()?"flex-row":"flex-col"}`,h=`relative flex-1 transition-all ${r()&&!o()?"blur-s.2 opacity-s.4":""}`;return p!==w._v$5&&C(g,w._v$5=p),h!==w._v$6&&C(y,w._v$6=h),w},{_v$5:void 0,_v$6:void 0}),b})()};ot(["click"]);const kh=S('<div class="i-mdi-brightness-4 transition"></div>'),xh=S('<div class="absolute i-mdi-brightness-7 transition"></div>'),_h=S('<div class="absolute i-mdi-brightness-2 transition"></div>'),Sh=S('<div class="i-simple-icons-github"></div>'),vs=S('<img alt="Logo" class="size-b-m.2">'),Ch=S('<div class="size-b-full grid" style="grid-template-rows: auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex items-center"><h1 class="font-bold text-fg-1 "><button class="flex gap-s.4 items-center -m-i-s.4 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4 hover:highlight active:highlight+">Windblade</button></h1><div class="flex-1 flex justify-end"><div></div></div></header><div class="relative"></div></div>'),zh=S('<div class="i-mdi-dots-vertical"></div>'),Oh=S('<div style="z-index: 1"></div>'),jh=()=>{pi(()=>{Ro("/home")}),ge(()=>{Wo()});const[e,n]=N(0),[t,s]=N(0),[r,i]=N(!1);let o,l;const a=new ResizeObserver(([u])=>{n(u.borderBoxSize[0].inlineSize)}),c=new ResizeObserver(([u])=>{s(u.borderBoxSize[0].inlineSize)});X(async()=>{a.disconnect(),o&&a.observe(o)}),X(async()=>{r(),c.disconnect(),l&&c.observe(l)}),X(()=>{i(e()>=t()*1.2)});const d=()=>[m(Ae,{onClick:()=>nt("/home"),children:"Home"}),m(Ae,{onClick:()=>nt("/docs/Usage-Installation"),children:"Docs"}),m(Ae,{get onClick(){return je.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const u=kh.cloneNode(!0);return M(f=>ke(u,`opacity: ${je.enforceScheme()===void 0?1:0}`,f)),u})(),(()=>{const u=xh.cloneNode(!0);return M(f=>ke(u,`opacity: ${je.enforceScheme()==="light"?1:0}`,f)),u})(),(()=>{const u=_h.cloneNode(!0);return M(f=>ke(u,`opacity: ${je.enforceScheme()==="dark"?1:0}`,f)),u})()]}}),m(Us,{href:"https://github.com/StarLederer/windblade",get children(){return Sh.cloneNode(!0)}})];return(()=>{const u=Ch.cloneNode(!0),f=u.firstChild,k=f.firstChild,b=k.firstChild,g=b.firstChild,y=k.nextSibling,v=y.firstChild,w=f.nextSibling;b.$$click=()=>nt("/home"),x(b,m(oe,{get when(){return je.scheme()==="dark"},get fallback(){return(()=>{const $=vs.cloneNode(!0);return Me($,"src",Vo),$})()},get children(){const $=vs.cloneNode(!0);return Me($,"src",Go),$}}),g);const p=o;typeof p=="function"?qe(p,y):o=y;const h=l;return typeof h=="function"?qe(h,v):l=v,x(v,d),x(y,m(Co,{defaultOpen:!1,get class(){return`${r()?"hidden":""}`},children:({isOpen:$})=>[m(zn,{style:"half",class:"rounded-full p-s",as:_=>m(zo,_),get children(){return zh.cloneNode(!0)}}),m(Oo,{unmount:!1,class:"relative",get children(){const _=Oh.cloneNode(!0);return x(_,d),M(()=>C(_,`flex flex-col gap-s.2 absolute inset-ie-0 inset-bs-0 bg-surface rounded-s m-b-s.8 p-s.2 border border-color-surface animation-duration-s animation-ease-linear backdrop-blur-s delay-m.2 ${$()?"delay-zero animate-in":"animate-out invisible"}`)),_}})]}),null),x(w,m(St,{path:"/home",get children(){return m(bl,{})}}),null),x(w,m(St,{path:"/docs",get children(){return m(yh,{})}}),null),M($=>{const _=`flex gap-s.4 ${r()?"":"invisible fixed"}`,O=!r();return _!==$._v$&&C(v,$._v$=_),O!==$._v$2&&Me(v,"aria-hidden",$._v$2=O),$},{_v$:void 0,_v$2:void 0}),u})()};ot(["click"]);const Th=S("<div></div>"),Mh=()=>{const e=()=>(je.scheme()==="light"?"scheme-light":"scheme-dark")+"-"+je.hue();return(()=>{const n=Th.cloneNode(!0);return x(n,m(jh,{})),M(()=>C(n,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden`)),n})()};Ni(()=>m(Mh,{}),document.body);
