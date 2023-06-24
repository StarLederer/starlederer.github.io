(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const N={context:void 0,registry:void 0};function ft(e){N.context=e}const Zs=(e,t)=>e===t,Wt=Symbol("solid-proxy"),Qs=Symbol("solid-track"),el=Symbol("solid-dev-component"),Nt={equals:Zs};let Lo=Uo;const be=1,bt=2,Ao={owned:null,cleanups:null,context:null,owner:null},jn={};var U=null;let k=null,F=null,ae=null,le=null,nn=0;const[tl,Ir]=P(!1);function we(e,t){const n=F,r=U,o=e.length===0,i=o?Ao:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},s=o?e:()=>e(()=>ne(()=>Ee(i)));U=i,F=null;try{return ge(s,!0)}finally{F=n,U=r}}function P(e,t){t=t?Object.assign({},Nt,t):Nt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(k&&k.running&&k.sources.has(n)?o=o(n.tValue):o=o(n.value)),Do(n,o));return[Ro.bind(n),r]}function In(e,t,n){const r=rn(e,t,!0,be);ot(r)}function L(e,t,n){const r=rn(e,t,!1,be);ot(r)}function te(e,t,n){Lo=ll;const r=rn(e,t,!1,be),o=Ge&&on(U,Ge.id);o&&(r.suspense=o),(!n||!n.render)&&(r.user=!0),le?le.push(r):ot(r)}function R(e,t,n){n=n?Object.assign({},Nt,n):Nt;const r=rn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ot(r),Ro.bind(r)}function Dt(e,t,n){let r,o,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,i=t||{}):(r=e,o=t,i=n||{});let s=null,l=jn,a=null,c=!1,u=!1,f="initialValue"in i,h=typeof r=="function"&&R(r);const y=new Set,[b,g]=(i.storage||P)(i.initialValue),[C,T]=P(void 0),[w,$]=P(void 0,{equals:!1}),[m,z]=P(f?"ready":"unresolved");if(N.context){a=`${N.context.id}${N.context.count++}`;let p;i.ssrLoadFrom==="initial"?l=i.initialValue:N.load&&(p=N.load(a))&&(l=p[0])}function v(p,O,A,I){return s===p&&(s=null,I!==void 0&&(f=!0),(p===l||O===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(I,{value:O})),l=jn,k&&p&&c?(k.promises.delete(p),c=!1,ge(()=>{k.running=!0,M(O,A)},!1)):M(O,A)),O}function M(p,O){ge(()=>{O===void 0&&g(()=>p),z(O!==void 0?"errored":f?"ready":"unresolved"),T(O);for(const A of y.keys())A.decrement();y.clear()},!1)}function B(){const p=Ge&&on(U,Ge.id),O=b(),A=C();if(A!==void 0&&!s)throw A;return F&&!F.user&&p&&In(()=>{w(),s&&(p.resolved&&k&&c?k.promises.add(s):y.has(p)||(p.increment(),y.add(p)))}),O}function E(p=!0){if(p!==!1&&u)return;u=!1;const O=h?h():r;if(c=k&&k.running,O==null||O===!1){v(s,ne(b));return}k&&s&&k.promises.delete(s);const A=l!==jn?l:ne(()=>o(O,{value:b(),refetching:p}));return typeof A!="object"||!(A&&"then"in A)?(v(s,A,void 0,O),A):(s=A,u=!0,queueMicrotask(()=>u=!1),ge(()=>{z(f?"refreshing":"pending"),$()},!1),A.then(I=>v(A,I,void 0,O),I=>v(A,void 0,al(I),O)))}return Object.defineProperties(B,{state:{get:()=>m()},error:{get:()=>C()},loading:{get(){const p=m();return p==="pending"||p==="refreshing"}},latest:{get(){if(!f)return B();const p=C();if(p&&!s)throw p;return b()}}}),h?In(()=>E(!1)):E(!1),[B,{refetch:E,mutate:g}]}function Wn(e){return ge(e,!1)}function ne(e){if(F===null)return e();const t=F;F=null;try{return e()}finally{F=t}}function lr(e,t,n){const r=Array.isArray(e);let o,i=n&&n.defer;return s=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(i){i=!1;return}const a=ne(()=>t(l,o,s));return o=l,a}}function ve(e){return U===null||(U.cleanups===null?U.cleanups=[e]:U.cleanups.push(e)),e}function Eo(){return U}function nl(e,t){const n=U,r=F;U=e,F=null;try{return ge(t,!0)}catch(o){cr(o)}finally{U=n,F=r}}function Po(e){if(k&&k.running)return e(),k.done;const t=F,n=U;return Promise.resolve().then(()=>{F=t,U=n;let r;return Ge&&(r=k||(k={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),ge(e,!1),F=U=null,r?r.done:void 0})}function rl(){return[tl,Po]}function ol(e){le.push.apply(le,e),e.length=0}function fe(e,t){const n=Symbol("context");return{id:n,Provider:cl(n),defaultValue:e}}function ie(e){let t;return(t=on(U,e.id))!==void 0?t:e.defaultValue}function ar(e){const t=R(e),n=R(()=>Nn(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ge;function il(){return Ge||(Ge=fe({}))}function Ro(){const e=k&&k.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===be)ot(this);else{const t=ae;ae=null,ge(()=>Gt(this),!1),ae=t}if(F){const t=this.observers?this.observers.length:0;F.sources?(F.sources.push(this),F.sourceSlots.push(t)):(F.sources=[this],F.sourceSlots=[t]),this.observers?(this.observers.push(F),this.observerSlots.push(F.sources.length-1)):(this.observers=[F],this.observerSlots=[F.sources.length-1])}return e&&k.sources.has(this)?this.tValue:this.value}function Do(e,t,n){let r=k&&k.running&&k.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(k){const o=k.running;(o||!n&&k.sources.has(e))&&(k.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&ge(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],s=k&&k.running;s&&k.disposed.has(i)||((s?!i.tState:!i.state)&&(i.pure?ae.push(i):le.push(i),i.observers&&Ho(i)),s?i.tState=be:i.state=be)}if(ae.length>1e6)throw ae=[],new Error},!1)}return t}function ot(e){if(!e.fn)return;Ee(e);const t=U,n=F,r=nn;F=U=e,Wr(e,k&&k.running&&k.sources.has(e)?e.tValue:e.value,r),k&&!k.running&&k.sources.has(e)&&queueMicrotask(()=>{ge(()=>{k&&(k.running=!0),F=U=e,Wr(e,e.tValue,r),F=U=null},!1)}),F=n,U=t}function Wr(e,t,n){let r;try{r=e.fn(t)}catch(o){return e.pure&&(k&&k.running?(e.tState=be,e.tOwned&&e.tOwned.forEach(Ee),e.tOwned=void 0):(e.state=be,e.owned&&e.owned.forEach(Ee),e.owned=null)),e.updatedAt=n+1,cr(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Do(e,r,!0):k&&k.running&&e.pure?(k.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function rn(e,t,n,r=be,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:U,context:null,pure:n};return k&&k.running&&(i.state=0,i.tState=r),U===null||U!==Ao&&(k&&k.running&&U.pure?U.tOwned?U.tOwned.push(i):U.tOwned=[i]:U.owned?U.owned.push(i):U.owned=[i]),i}function Bt(e){const t=k&&k.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===bt)return Gt(e);if(e.suspense&&ne(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<nn);){if(t&&k.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,i=n[r+1];for(;(o=o.owner)&&o!==i;)if(k.disposed.has(o))return}if((t?e.tState:e.state)===be)ot(e);else if((t?e.tState:e.state)===bt){const o=ae;ae=null,ge(()=>Gt(e,n[0]),!1),ae=o}}}function ge(e,t){if(ae)return e();let n=!1;t||(ae=[]),le?n=!0:le=[],nn++;try{const r=e();return sl(n),r}catch(r){n||(le=null),ae=null,cr(r)}}function sl(e){if(ae&&(Uo(ae),ae=null),e)return;let t;if(k){if(!k.promises.size&&!k.queue.size){const r=k.sources,o=k.disposed;le.push.apply(le,k.effects),t=k.resolve;for(const i of le)"tState"in i&&(i.state=i.tState),delete i.tState;k=null,ge(()=>{for(const i of o)Ee(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let s=0,l=i.owned.length;s<l;s++)Ee(i.owned[s]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ir(!1)},!1)}else if(k.running){k.running=!1,k.effects.push.apply(k.effects,le),le=null,Ir(!0);return}}const n=le;le=null,n.length&&ge(()=>Lo(n),!1),t&&t()}function Uo(e){for(let t=0;t<e.length;t++)Bt(e[t])}function ll(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Bt(r)}for(N.context&&ft(),t=0;t<n;t++)Bt(e[t])}function Gt(e,t){const n=k&&k.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const i=n?o.tState:o.state;i===be?o!==t&&(!o.updatedAt||o.updatedAt<nn)&&Bt(o):i===bt&&Gt(o,t)}}}function Ho(e){const t=k&&k.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=bt:r.state=bt,r.pure?ae.push(r):le.push(r),r.observers&&Ho(r))}}function Ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),s=n.observerSlots.pop();r<o.length&&(i.sourceSlots[s]=r,o[r]=i,n.observerSlots[r]=s)}}if(k&&k.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Ee(e.tOwned[t]);delete e.tOwned}Io(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)Ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}k&&k.running?e.tState=0:e.state=0,e.context=null}function Io(e,t){if(t||(e.tState=0,k.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Io(e.owned[n])}function al(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function cr(e){throw e}function on(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:on(e.owner,t):void 0}function Nn(e){if(typeof e=="function"&&!e.length)return Nn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Nn(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function cl(e,t){return function(r){let o;return L(()=>o=ne(()=>(U.context={[e]:r.value},ar(()=>r.children))),void 0),o}}const ul=Symbol("fallback");function Nr(e){for(let t=0;t<e.length;t++)e[t]()}function dl(e,t,n={}){let r=[],o=[],i=[],s=0,l=t.length>1?[]:null;return ve(()=>Nr(i)),()=>{let a=e()||[],c,u;return a[Qs],ne(()=>{let h=a.length,y,b,g,C,T,w,$,m,z;if(h===0)s!==0&&(Nr(i),i=[],r=[],o=[],s=0,l&&(l=[])),n.fallback&&(r=[ul],o[0]=we(v=>(i[0]=v,n.fallback())),s=1);else if(s===0){for(o=new Array(h),u=0;u<h;u++)r[u]=a[u],o[u]=we(f);s=h}else{for(g=new Array(h),C=new Array(h),l&&(T=new Array(h)),w=0,$=Math.min(s,h);w<$&&r[w]===a[w];w++);for($=s-1,m=h-1;$>=w&&m>=w&&r[$]===a[m];$--,m--)g[m]=o[$],C[m]=i[$],l&&(T[m]=l[$]);for(y=new Map,b=new Array(m+1),u=m;u>=w;u--)z=a[u],c=y.get(z),b[u]=c===void 0?-1:c,y.set(z,u);for(c=w;c<=$;c++)z=r[c],u=y.get(z),u!==void 0&&u!==-1?(g[u]=o[c],C[u]=i[c],l&&(T[u]=l[c]),u=b[u],y.set(z,u)):i[c]();for(u=w;u<h;u++)u in g?(o[u]=g[u],i[u]=C[u],l&&(l[u]=T[u],l[u](u))):o[u]=we(f);o=o.slice(0,s=h),r=a.slice(0)}return o});function f(h){if(i[u]=h,l){const[y,b]=P(u);return l[u]=b,t(a[u],y)}return t(a[u])}}}function d(e,t){return ne(()=>e(t||{}))}function Ct(){return!0}const Bn={get(e,t,n){return t===Wt?n:e.get(t)},has(e,t){return t===Wt?!0:e.has(t)},set:Ct,deleteProperty:Ct,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ct,deleteProperty:Ct}},ownKeys(e){return e.keys()}};function Tn(e){return(e=typeof e=="function"?e():e)?e:{}}function fl(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function re(...e){let t=!1;for(let i=0;i<e.length;i++){const s=e[i];t=t||!!s&&Wt in s,e[i]=typeof s=="function"?(t=!0,R(s)):s}if(t)return new Proxy({get(i){for(let s=e.length-1;s>=0;s--){const l=Tn(e[s])[i];if(l!==void 0)return l}},has(i){for(let s=e.length-1;s>=0;s--)if(i in Tn(e[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<e.length;s++)i.push(...Object.keys(Tn(e[s])));return[...new Set(i)]}},Bn);const n={},r={};let o=!1;for(let i=e.length-1;i>=0;i--){const s=e[i];if(!s)continue;const l=Object.getOwnPropertyNames(s);o=o||i!==0&&!!l.length;for(let a=0,c=l.length;a<c;a++){const u=l[a];if(!(u==="__proto__"||u==="constructor"))if(u in n){const f=r[u],h=Object.getOwnPropertyDescriptor(s,u);f?h.get?f.push(h.get.bind(s)):h.value!==void 0&&f.push(()=>h.value):n[u]===void 0&&(n[u]=h.value)}else{const f=Object.getOwnPropertyDescriptor(s,u);f.get?Object.defineProperty(n,u,{enumerable:!0,configurable:!0,get:fl.bind(r[u]=[f.get.bind(s)])}):n[u]=f.value}}}return n}function Wo(e,...t){if(Wt in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(l){return s.includes(l)?e[l]:void 0},has(l){return s.includes(l)&&l in e},keys(){return s.filter(l=>l in e)}},Bn));return i.push(new Proxy({get(s){return o.has(s)?void 0:e[s]},has(s){return o.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!o.has(s))}},Bn)),i}const n={},r=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,a=0;for(const c of t)c.includes(o)&&(l=!0,s?r[a][o]=i.value:Object.defineProperty(r[a],o,i)),++a;l||(s?n[o]=i.value:Object.defineProperty(n,o,i))}return[...r,n]}let hl=0;function de(){const e=N.context;return e?`${e.id}${e.count++}`:`cl-${hl++}`}const gl=e=>`Stale read from <${e}>.`;function vt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return R(dl(()=>e.each,e.children,t||void 0))}function Y(e){const t=e.keyed,n=R(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return R(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?ne(()=>o(t?r:()=>{if(!ne(n))throw gl("Show");return e.when})):o}return e.fallback},void 0,void 0)}const ml=fe();function pl(e){let t=0,n,r,o,i,s;const[l,a]=P(!1),c=il(),u={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:l,effects:[],resolved:!1},f=Eo();if(N.context&&N.load){const b=N.context.id+N.context.count;let g=N.load(b);if(g&&(o=g[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[C,T]=P(void 0,{equals:!1});i=C,o.then(w=>{if(w||N.done)return w&&(s=w),T();N.gather(b),ft(r),T(),ft()})}}const h=ie(ml);h&&(n=h.register(u.inFallback));let y;return ve(()=>y&&y()),d(c.Provider,{value:u,get children(){return R(()=>{if(s)throw s;if(r=N.context,i)return i(),i=void 0;r&&o==="$$f"&&ft();const b=R(()=>e.children);return R(g=>{const C=u.inFallback(),{showContent:T=!0,showFallback:w=!0}=n?n():{};if((!C||o&&o!=="$$f")&&T)return u.resolved=!0,y&&y(),y=r=o=void 0,ol(u.effects),b();if(w)return y?g:we($=>(y=$,r&&(ft({id:r.id+"f",count:0}),r=void 0),e.fallback),f)})})}})}const bl=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vl=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...bl]),$l=new Set(["innerHTML","textContent","innerText","children"]),yl=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wl=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function xl(e,t){const n=wl[e];return typeof n=="object"?n[t]?n.$:void 0:n}const kl=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Sl=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),_l={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Cl(e,t,n){let r=n.length,o=t.length,i=r,s=0,l=0,a=t[o-1].nextSibling,c=null;for(;s<o||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===s){const u=i<r?l?n[l-1].nextSibling:n[i-l]:a;for(;l<i;)e.insertBefore(n[l++],u)}else if(i===l)for(;s<o;)(!c||!c.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!c){c=new Map;let f=l;for(;f<i;)c.set(n[f],f++)}const u=c.get(t[s]);if(u!=null)if(l<u&&u<i){let f=s,h=1,y;for(;++f<o&&f<i&&!((y=c.get(t[f]))==null||y!==u+h);)h++;if(h>u-l){const b=t[s];for(;l<u;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const Br="_$DX_DELEGATE";function jl(e,t,n,r={}){let o;return we(i=>{o=i,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function x(e,t,n){let r;const o=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>ne(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return i.cloneNode=i,i}function ur(e,t=window.document){const n=t[Br]||(t[Br]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Al))}}function pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Tl(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function j(e,t){t==null?e.removeAttribute("class"):e.className=t}function No(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function zl(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,s;for(i=0,s=o.length;i<s;i++){const l=o[i];!l||l==="undefined"||t[l]||(Gr(e,l,!1),delete n[l])}for(i=0,s=r.length;i<s;i++){const l=r[i],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Gr(e,l,!0),n[l]=a)}return n}function Me(e,t,n){if(!t)return n?pe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function dr(e,t={},n,r){const o={};return r||L(()=>o.children=tt(e,t.children,o.children)),L(()=>t.ref&&t.ref(e)),L(()=>Ol(e,t,n,!0,o,!0)),o}function et(e,t,n){return ne(()=>e(t,n))}function _(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return tt(e,t,r,n);L(o=>tt(e,t(),o,n),r)}function Ol(e,t,n,r,o={},i=!1){t||(t={});for(const s in o)if(!(s in t)){if(s==="children")continue;o[s]=Fr(e,s,null,o[s],n,i)}for(const s in t){if(s==="children"){r||tt(e,t.children);continue}const l=t[s];o[s]=Fr(e,s,l,o[s],n,i)}}function Ml(e){let t,n;if(!N.context||!(t=N.registry.get(n=El()))){if(N.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return N.completed&&N.completed.add(t),N.registry.delete(n),t}function Ll(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Gr(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function Fr(e,t,n,r,o,i){let s,l,a,c,u;if(t==="style")return Me(e,n,r);if(t==="classList")return zl(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),h=kl.has(f);if(!h&&r){const y=Array.isArray(r)?r[0]:r;e.removeEventListener(f,y)}(h||n)&&(No(e,f,n,h),h&&ur([f]))}else if(t.slice(0,5)==="attr:")pe(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(a=$l.has(t))||!o&&((c=xl(t,e.tagName))||(l=vl.has(t)))||(s=e.nodeName.includes("-")))u&&(t=t.slice(5),l=!0),t==="class"||t==="className"?j(e,n):s&&!l&&!a?e[Ll(t)]=n:e[c||t]=n;else{const f=o&&t.indexOf(":")>-1&&_l[t.split(":")[0]];f?Tl(e,f,t,n):pe(e,yl[t]||t,n)}return n}function Al(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),N.registry&&!N.done&&(N.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function tt(e,t,n,r,o){if(N.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():l.push(c)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(N.context)return n;if(i==="number"&&(t=t.toString()),s){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Xe(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(N.context)return n;n=Xe(e,n,r)}else{if(i==="function")return L(()=>{let l=t();for(;typeof l=="function";)l=l();n=tt(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Gn(l,t,n,o))return L(()=>n=tt(e,l,n,r,!0)),()=>n;if(N.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=Xe(e,n,r),s)return n}else a?n.length===0?Vr(e,l,r):Cl(e,n,l):(n&&Xe(e),Vr(e,l));n=l}else if(t.nodeType){if(N.context&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=Xe(e,n,r,t);Xe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Gn(e,t,n,r){let o=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],a=n&&n[i],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))o=Gn(e,l,a)||o;else if(c==="function")if(r){for(;typeof l=="function";)l=l();o=Gn(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function Vr(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Xe(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const a=l.parentNode===e;!i&&!s?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function El(){const e=N.context;return`${e.id}${e.count++}`}const Pl=!1,Rl="http://www.w3.org/2000/svg";function Dl(e,t=!1){return t?document.createElementNS(Rl,e):document.createElement(e)}function Ul(e){const[t,n]=Wo(e,["component"]),r=R(()=>t.component);return R(()=>{const o=r();switch(typeof o){case"function":return Object.assign(o,{[el]:!0}),ne(()=>o(n));case"string":const i=Sl.has(o),s=N.context?Ml():Dl(o,i);return dr(s,n,i),s}})}function Hl(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Il([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Wl(e){try{return document.querySelector(e)}catch{return null}}function Nl(e,t){const n=Wl(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Bo(e,t,n,r){let o=!1;const i=l=>typeof l=="string"?{value:l}:l,s=Il(P(i(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!o&&t(l),l));return n&&ve(n((l=e())=>{o=!0,s[1](i(l)),o=!1})),{signal:s,utils:r}}function Bl(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:P({value:""})};return e}function Gl(){return Bo(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Nl(window.location.hash.slice(1),n)},e=>Hl(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Fl(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,i){if(n)return!(n=!1);const s={to:o,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const l of e)l.listener({...s,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,i)}});return!s.defaultPrevented}return{subscribe:t,confirm:r}}const Vl=/^(?:[a-z0-9]+:)?\/\//i,ql=/^\/+|(\/)\/+$/g;function We(e,t=!1){const n=e.replace(ql,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ut(e,t,n){if(Vl.test(t))return;const r=We(e),o=n&&We(n);let i="";return!o||t.startsWith("/")?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,(i||"/")+We(t,!i)}function Xl(e,t){if(e==null)throw new Error(t);return e}function Go(e,t){return We(e).replace(/\/*(\*.*)?$/g,"")+We(t)}function Yl(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Kl(e,t,n){const[r,o]=e.split("/*",2),i=r.split("/").filter(Boolean),s=i.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-s;if(c<0||c>0&&o===void 0&&!t)return null;const u={path:s?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<s;h++){const y=i[h],b=a[h],g=y[0]===":",C=g?y.slice(1):y;if(g&&zn(b,f(C)))u.params[C]=b;else if(g||!zn(b,y))return null;u.path+=`/${b}`}if(o){const h=c?a.slice(-c).join("/"):"";if(zn(h,f(o)))u.params[o]=h;else return null}return u}}function zn(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Jl(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,i)=>o+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Fo(e){const t=new Map,n=Eo();return new Proxy({},{get(r,o){return t.has(o)||nl(n,()=>t.set(o,R(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Vo(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Vo(r).reduce((i,s)=>[...i,...o.map(l=>l+s)],[])}const Zl=100,qo=fe(),sn=fe(),yt=()=>Xl(ie(qo),"Make sure your app is wrapped in a <Router />");let $t;const ln=()=>$t||ie(sn)||yt().base,Ql=e=>{const t=ln();return R(()=>t.resolvePath(e()))},ea=e=>{const t=yt();return R(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Xo=()=>yt().navigatorFactory(),Fn=()=>yt().location,wt=()=>ln().params;function ta(e,t="",n){const{component:r,data:o,children:i}=e,s=!i||Array.isArray(i)&&!i.length,l={key:e,element:r?()=>d(r,{}):()=>{const{element:a}=e;return a===void 0&&n?d(n,{}):a},preload:e.component?r.preload:e.preload,data:o};return Yo(e.path).reduce((a,c)=>{for(const u of Vo(c)){const f=Go(t,u),h=s?f:f.split("/*",1)[0];a.push({...l,originalPath:u,pattern:h,matcher:Kl(h,!s,e.matchFilters)})}return a},[])}function na(e,t=0){return{routes:e,score:Jl(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const i=e[o],s=i.matcher(n);if(!s)return null;r.unshift({...s,route:i})}return r}}}function Yo(e){return Array.isArray(e)?e:[e]}function Ko(e,t="",n,r=[],o=[]){const i=Yo(e);for(let s=0,l=i.length;s<l;s++){const a=i[s];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const c=ta(a,t,n);for(const u of c){r.push(u);const f=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!f)Ko(a.children,u.pattern,n,r,o);else{const h=na([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((s,l)=>l.score-s.score)}function ra(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function oa(e,t){const n=new URL("http://sar"),r=R(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),o=R(()=>r().pathname),i=R(()=>r().search,!0),s=R(()=>r().hash),l=R(()=>"");return{get pathname(){return o()},get search(){return i()},get hash(){return s()},get state(){return t()},get key(){return l()},query:Fo(lr(i,()=>Yl(r())))}}function ia(e,t="",n,r){const{signal:[o,i],utils:s={}}=Bl(e),l=s.parsePath||(E=>E),a=s.renderPath||(E=>E),c=s.beforeLeave||Fl(),u=Ut("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&i({value:u,replace:!0,scroll:!1});const[h,y]=P(!1),b=async E=>{y(!0);try{await Po(E)}finally{y(!1)}},[g,C]=P(o().value),[T,w]=P(o().state),$=oa(g,T),m=[],z={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(E){return Ut(u,E)}};if(n)try{$t=z,z.data=n({data:void 0,params:{},location:$,navigate:M(z)})}finally{$t=void 0}function v(E,p,O){ne(()=>{if(typeof p=="number"){p&&(s.go?c.confirm(p,O)&&s.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:I,scroll:X,state:ee}={replace:!1,resolve:!0,scroll:!0,...O},K=I?E.resolvePath(p):Ut("",p);if(K===void 0)throw new Error(`Path '${p}' is not a routable path`);if(m.length>=Zl)throw new Error("Too many redirects");const J=g();if((K!==J||ee!==T())&&!Pl){if(c.confirm(K,O)){const Z=m.push({value:J,replace:A,scroll:X,state:T()});b(()=>{C(K),w(ee)}).then(()=>{m.length===Z&&B({value:K,state:ee})})}}})}function M(E){return E=E||ie(sn)||z,(p,O)=>v(E,p,O)}function B(E){const p=m[0];p&&((E.value!==p.value||E.state!==p.state)&&i({...E,replace:p.replace,scroll:p.scroll}),m.length=0)}L(()=>{const{value:E,state:p}=o();ne(()=>{E!==g()&&b(()=>{C(E),w(p)})})});{let E=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const O=p.composedPath().find(J=>J instanceof Node&&J.nodeName.toUpperCase()==="A");if(!O||!O.hasAttribute("link"))return;const A=O.href;if(O.target||!A&&!O.hasAttribute("state"))return;const I=(O.getAttribute("rel")||"").split(/\s+/);if(O.hasAttribute("download")||I&&I.includes("external"))return;const X=new URL(A);if(X.origin!==window.location.origin||u&&X.pathname&&!X.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const ee=l(X.pathname+X.search+X.hash),K=O.getAttribute("state");p.preventDefault(),v(z,ee,{resolve:!1,replace:O.hasAttribute("replace"),scroll:!O.hasAttribute("noscroll"),state:K&&JSON.parse(K)})};ur(["click"]),document.addEventListener("click",E),ve(()=>document.removeEventListener("click",E))}return{base:z,out:f,location:$,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:M,beforeLeave:c}}function sa(e,t,n,r,o){const{base:i,location:s,navigatorFactory:l}=e,{pattern:a,element:c,preload:u,data:f}=r().route,h=R(()=>r().path);u&&u();const y={parent:t,pattern:a,get child(){return n()},path:h,params:o,data:t.data,outlet:c,resolvePath(b){return Ut(i.path(),b,h())}};if(f)try{$t=y,y.data=f({data:t.data,params:o,location:s,navigate:l(y)})}finally{$t=void 0}return y}const la=x("<a link>"),aa=e=>{const{source:t,url:n,base:r,data:o,out:i}=e,s=t||Gl(),l=ia(s,r,o);return d(qo.Provider,{value:l,get children(){return e.children}})},ca=e=>{const t=yt(),n=ln(),r=ar(()=>e.children),o=R(()=>Ko(r(),Go(n.pattern,e.base||""),Jo)),i=R(()=>ra(o(),t.location.pathname)),s=Fo(()=>{const u=i(),f={};for(let h=0;h<u.length;h++)Object.assign(f,u[h].params);return f});t.out&&t.out.matches.push(i().map(({route:u,path:f,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:h})));const l=[];let a;const c=R(lr(i,(u,f,h)=>{let y=f&&u.length===f.length;const b=[];for(let g=0,C=u.length;g<C;g++){const T=f&&f[g],w=u[g];h&&T&&w.route.key===T.route.key?b[g]=h[g]:(y=!1,l[g]&&l[g](),we($=>{l[g]=$,b[g]=sa(t,b[g-1]||n,()=>c()[g+1],()=>i()[g],s)}))}return l.splice(u.length).forEach(g=>g()),h&&y?h:(a=b[0],b)}));return d(Y,{get when(){return c()&&a},keyed:!0,children:u=>d(sn.Provider,{value:u,get children(){return u.outlet()}})})},De=e=>{const t=ar(()=>e.children);return re(e,{get children(){return t()}})},Jo=()=>{const e=ln();return d(Y,{get when(){return e.child},keyed:!0,children:t=>d(sn.Provider,{value:t,get children(){return t.outlet()}})})};function ua(e){e=re({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Wo(e,["href","state","class","activeClass","inactiveClass","end"]),n=Ql(()=>e.href),r=ea(n),o=Fn(),i=R(()=>{const s=n();if(s===void 0)return!1;const l=We(s.split(/[?#]/,1)[0]).toLowerCase(),a=We(o.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const s=la();return dr(s,re(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),s})()}function je(e,t){let n={},r=Object.keys(e);for(let o=0,i=r.length;o<i;o+=1){let s=r[o];t.includes(s)||Object.defineProperty(n,s,{get(){return e[s]},configurable:!0,enumerable:!0})}return n}var Zo=fe();function xt(){let e=ie(Zo);if(e)return e;throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.")}function da(e){return typeof e=="function"&&e.length>0}function fa(e){let t=xt();return R(()=>{let n=e.children;return da(n)?n(t):n})}function it(e){return{get children(){return d(fa,{get children(){return e.children}})}}}function ha(e){let t,n;if("defaultOpen"in e){let[r,o]=P(e.defaultOpen);t=r,n=i=>{Wn(()=>{var s;o(i),(s=e.onChange)==null||s.call(e,i)})}}else t=()=>e.isOpen,n=r=>{var o;return(o=e.onChange)==null?void 0:o.call(e,r)};return{isOpen(){return t()},setState(r){e.disabled||n(r)},disabled(){return!!e.disabled}}}function ga(e){return typeof e=="function"&&e.length>0}function an(e){let t=ha(e);return d(Zo.Provider,{value:t,get children(){return R(()=>{let n=e.children;return ga(n)?n(t):n})}})}function Re(e,t){return d(Ul,re({get component(){return e()}},t))}function ma(e){return typeof e=="function"}function kt(e,t){return n=>{"ref"in e&&ma(e.ref)&&e.ref(n),t(n)}}function cn(e){return{get disabled(){return e()},get"aria-disabled"(){return e()},get"data-sh-disabled"(){return e()}}}function pa(e){return{get"aria-expanded"(){return e()},get"data-sh-expanded"(){return e()}}}var ba='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';function fr(e,t){let n=e.querySelectorAll(ba),r=[];for(let o=0,i=n.length;o<i;o+=1)(!t||!t.contains(n[o]))&&r.push(n[o]);return r}function Qo(e){return!e.matches('[data-sh-disabled="true"]')}function ei(e,t,n){let r=t+n;for(;r>=0&&r<e.length;){if(Qo(e[r]))return e[r];r+=n}}function ti(e,t,n){let r=t+n;for(n===1&&r===e.length&&(r=0),n===-1&&r===-1&&(r=e.length-1);t!==r;){if(Qo(e[r]))return e[r];r+=n,n===1&&r>=e.length&&(r=0),n===-1&&r<0&&(r=e.length-1)}}function va(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ti(e,r,1))==null||n.focus();break}}function $a(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ti(e,r,-1))==null||n.focus();break}}function hr(e){var t;return e.length?((t=ei(e,-1,1))==null||t.focus(),!0):!1}function ya(e){var t;return e.length?((t=ei(e,e.length,-1))==null||t.focus(),!0):!1}function ni(e,t){let n=fr(e);t?!document.activeElement||!e.contains(document.activeElement)?ya(n):$a(n,document.activeElement):!document.activeElement||!e.contains(document.activeElement)?hr(n):va(n,document.activeElement)}var wa="data-sh";function qe(e){return{[wa]:e}}var xa=qe("button");function ka(e){let[t,n]=P();return te(()=>{let r=t();if(r instanceof HTMLElement&&r.tagName!=="BUTTON"){let o=i=>{(i.key==="Enter"||i.key===" ")&&r.click()};r.addEventListener("keydown",o),ve(()=>{r.removeEventListener("keydown",o)})}}),Re(()=>{var r;return(r=e.as)!=null?r:"button"},re({get tabindex(){return e.disabled?-1:0},role:"button"},cn(()=>e.disabled),je(e,["as","ref"]),xa,{ref:kt(e,r=>{n(()=>r)})}))}function gr(e,t,n){return d(Y,{get when(){var r;return(r=e.unmount)!=null?r:!0},get fallback(){return n()},get children(){return d(Y,{get when(){return t()},get children(){return n()}})}})}function qr(){var e,t;return(t=(e=window.getSelection())==null?void 0:e.focusNode)==null?void 0:t.parentElement}function Sa(e){if(e){let t=e.getAttribute("tabindex");e.setAttribute("tabindex","-1"),e.focus(),e.blur(),t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}var _a=class{constructor(){typeof document<"u"&&(this.returnElement=document.activeElement,this.fsp=qr()),ve(()=>{this.load()})}load(){this.returnElement instanceof HTMLElement?this.returnElement.focus():Sa(this.fsp)}save(){this.returnElement=document.activeElement,this.fsp=qr()}};function un(){return new _a}var mr=fe();function ri(e){let t=ie(mr);if(t)return t;throw new Error(`<${e}> must be used inside a <Dialog>`)}var oi=qe("dialog"),Ca=qe("dialog-overlay"),ja=qe("dialog-panel");function Ta(e){let t=de(),n=de(),r=de(),o=de(),i=un();return d(mr.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(an,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(s){var l,a,c;s&&(i.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,s),s||((c=e.onClose)==null||c.call(e),i.load())},children:({isOpen:s})=>gr(e,s,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","isOpen","disabled","onOpen","onClose","onChange"]),oi,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function za(e){let t=de(),n=de(),r=de(),o=de(),i=un();return d(mr.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(an,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(s){var l,a,c;s&&(i.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,s),s||((c=e.onClose)==null||c.call(e),i.load())},children:({isOpen:s})=>gr(e,s,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","defaultOpen","disabled","onOpen","onClose","onChange"]),oi,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function Oa(e){return"defaultOpen"in e}function Ma(e){return Oa(e)?d(za,e):d(Ta,e)}function La(e){ri("DialogOverlay");let t=xt(),[n,r]=P();return te(()=>{let o=n();if(o instanceof HTMLElement){let i=()=>{t.setState(!1)};o.addEventListener("click",i),ve(()=>{o.removeEventListener("click",i)})}}),Re(()=>{var o;return(o=e.as)!=null?o:"div"},re(je(e,["as","children","ref"]),Ca,{ref:kt(e,o=>{r(()=>o)})},it(e)))}function Aa(e){let t=ri("DialogPanel"),n=xt(),[r,o]=P();return te(()=>{let i=r();if(i instanceof HTMLElement&&n.isOpen()){hr(fr(i));let s=l=>{e.disabled||(l.key==="Tab"?(l.preventDefault(),ni(i,l.shiftKey)):l.key==="Escape"&&n.setState(!1))};i.addEventListener("keydown",s),ve(()=>{i.removeEventListener("keydown",s)})}}),Re(()=>{var i;return(i=e.as)!=null?i:"div"},re(je(e,["as","children","ref"]),ja,{id:t.panelID,ref:kt(e,i=>{o(()=>i)})},it(e)))}var pr=fe();function ii(e){let t=ie(pr);if(t)return t;throw new Error(`<${e}> must be used inside a <Popover>`)}var si=qe("popover"),Ea=qe("popover-button"),Pa=qe("popover-panel");function Ra(e){let[t,n]=P(!1),r=de(),o=de(),i=de(),s=un();return d(pr.Provider,{value:{ownerID:r,buttonID:o,panelID:i,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["isOpen","as","children","disabled","onChange"]),si,cn(()=>e.disabled),{get children(){return d(an,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(l){var a,c,u;l&&(s.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((u=e.onClose)==null||u.call(e),s.load())},get children(){return e.children}})}}))}})}function Da(e){let[t,n]=P(!1),r=de(),o=de(),i=de(),s=un();return d(pr.Provider,{value:{ownerID:r,buttonID:o,panelID:i,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["defaultOpen","as","children","disabled","onChange"]),si,cn(()=>e.disabled),{get children(){return d(an,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(l){var a,c,u;l&&(s.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((u=e.onClose)==null||u.call(e),s.load())},get children(){return e.children}})}}))}})}function Ua(e){return"defaultOpen"in e}function Ha(e){return Ua(e)?d(Da,e):d(Ra,e)}function Ia(e){let t=ii("PopoverButton"),n=xt(),[r,o]=P();return te(()=>{let i=r();if(i instanceof HTMLElement){let s=()=>{n.disabled()||e.disabled||n.setState(!n.isOpen())};i.addEventListener("click",s),ve(()=>{i.removeEventListener("click",s)});let l=()=>{t.hovering=!0},a=()=>{t.hovering=!1};i.addEventListener("mouseenter",l),i.addEventListener("mouseleave",a),ve(()=>{i.removeEventListener("mouseenter",l),i.removeEventListener("mouseleave",a)})}}),d(ka,re(je(e,["children","ref"]),Ea,{id:t.buttonID,ref:kt(e,i=>{o(()=>i),i instanceof HTMLElement&&(t.anchor=i)}),get"aria-controls"(){return n.isOpen()&&t.panelID}},cn(()=>{let i=n.disabled(),s=e.disabled;return i||s}),pa(()=>n.isOpen()),it(e)))}function Wa(e){let t=ii("PopoverPanel"),n=xt(),[r,o]=P();return te(()=>{let i=r();if(i instanceof HTMLElement&&n.isOpen()){hr(fr(i));let s=a=>{e.disabled||(a.key==="Tab"?(a.preventDefault(),ni(i,a.shiftKey)):a.key==="Escape"&&n.setState(!1))},l=a=>{t.hovering||(!a.relatedTarget||!i.contains(a.relatedTarget))&&n.setState(!1)};i.addEventListener("keydown",s),i.addEventListener("focusout",l),ve(()=>{i.removeEventListener("keydown",s),i.removeEventListener("focusout",l)})}}),gr(e,()=>n.isOpen(),()=>Re(()=>{var i;return(i=e.as)!=null?i:"div"},re(je(e,["as","unmount","children","ref"]),Pa,{id:t.panelID,ref:kt(e,i=>{o(()=>i)})},it(e))))}const Na=""+new URL("logo-white-c0f694e8.svg",import.meta.url).href,Ba=""+new URL("logo-black-123cdd58.svg",import.meta.url).href,Ga="_button_1ao1a_1",Fa="_isGhost_1ao1a_20",Va="_isHalf_1ao1a_21",qa="_isSecondary_1ao1a_22",Xa="_isSolid_1ao1a_23",dt={button:Ga,isGhost:Fa,isHalf:Va,isSecondary:qa,isSolid:Xa},Ya=x('<div class="flex flex-row items-center justify-center flex-1 gap-s.8">'),dn=e=>{const t=e.as;return d(t,{get class(){return[e.class??"rounded-s p-s",dt.button,(()=>e.style==="none"?"":e.style==="solid"?dt.isSolid:e.style==="secondary"?dt.isSecondary:e.style==="half"?dt.isHalf:dt.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){return R(()=>e.style==="none")()?e.children:(()=>{const n=Ya();return _(n,()=>e.children),n})()}})},Ka=x("<button>"),Le=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Ka();return No(n,"click",e.onClick,!0),_(n,()=>t.children),L(r=>{const o=t.class,i=t.style,s=e.type??"button",l=e.disabled;return o!==r._v$&&j(n,r._v$=o),r._v$2=Me(n,i,r._v$2),s!==r._v$3&&pe(n,"type",r._v$3=s),l!==r._v$4&&(n.disabled=r._v$4=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),get children(){return e.children}});ur(["click"]);const Ja=x("<a>"),li=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Ja();return _(n,()=>t.children),L(r=>{const o=t.class,i=`text-decoration: none; ${t.style}`,s=e.href;return o!==r._v$&&j(n,r._v$=o),r._v$2=Me(n,i,r._v$2),s!==r._v$3&&pe(n,"href",r._v$3=s),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),get children(){return e.children}}),Xr=e=>{const t=wt();return d(Y,{get when(){return e.when(t)},keyed:!0,get children(){return e.component({})}})},Za=`module.exports = {
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
`,Qa=`<div class="bg-red-600 text-red-200"> Red </div>
<div class="bg-green-600 text-green-200"> Green </div>
<div class="bg-blue-600 text-blue-200"> Blue </div>
<div class="bg-blue-600 text-desaturated-blue-200"> Blue but text is desaturated </div>
`,ec=`unocss({
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
`,tc=`<div class="scheme-auto-0 bg-surface"> Red </div>
<div class="scheme-auto-120 bg-surface"> Green </div>
<div class="scheme-auto-240 bg-surface"> Blue </div>
<div class="scheme-auto-240 bg-surface text-fg-2"> Blue but text is desaturated </div>
`,nc=`<div class="bg-blue-100 text-blue-900"> Primary </div>
<div class="bg-blue-100 text-blue-800"> Secondary </div>
<div class="bg-blue-100 text-blue-600"> Tertiary </div>
`,rc=`<div class="bg-blue"> Primary (text-fg-1 is applied by default) </div>
<div class="bg-blue text-fg-2"> Secondary </div>
<div class="bg-blue text-fg-3"> Tertiary </div>
`,oc=`module.exports = {
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
`,ic=`unocss({
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
`,sc=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute width-full height-1 inset-bottom-[0.375rem]"></div>
  <!-- (4-1) / 2 -->
  <!-- (1rem - 0.25rem) / 2 -->
  <!-- was hard to calculate and will break if the theme changes -->
</div>
`,lc=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-1 inset-bottom-$(($4-$1)/2)"></div>
  <!-- We did not need to calculate anything and this will not break if proportions change -->
</div>
`,ac=`// Not possible 🙁
`,cc=`import { getLCA, LCHToCSSColor } from "@windblade/core";
import { theme } from "@windblade/unocss-preset"; // this is just a source file and it does not know about your theme customizations. If you are using your own colors you should import them instead

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
`,uc="modulepreload",dc=function(e,t){return new URL(e,t).href},Yr={},Qe=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=dc(i,r),i in Yr)return;Yr[i]=!0;const s=i.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":uc,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function fc(){const[e]=Dt(async()=>(await Qe(()=>import("./index-f446294a.js").then(r=>r.i),["./index-f446294a.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[t]=Dt(async()=>(await Qe(()=>import("./index-b295f297.js"),["./index-b295f297.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[n]=Dt(async()=>await Qe(()=>import("./index-6b20c012.js"),[],import.meta.url));return{highlighter:t,formatter:e,xml:n}}const He=we(fc),hc=x('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div>'),Ze=e=>(()=>{const t=hc(),n=t.firstChild;return _(n,()=>e.children),L(()=>j(n,`size-i-full max-size-i-l ${e.class}`)),t})();var gc=()=>{},Kr=(e,t)=>t();function mc(e,t){const n=ne(e),r=n?[n]:[],{onEnter:o=Kr,onExit:i=Kr}=t,[s,l]=P(t.appear?[]:r),[a]=rl();let c,u=!1;function f(b,g){if(!b)return g&&g();u=!0,i(b,()=>{Wn(()=>{u=!1,l(C=>C.filter(T=>T!==b)),g&&g()})})}function h(b){const g=c;if(!g)return b&&b();c=void 0,l(C=>[g,...C]),o(g,b??gc)}const y=t.mode==="out-in"?b=>u||f(b,h):t.mode==="in-out"?b=>h(()=>f(b)):b=>{h(),f(b)};return In(b=>{const g=e();return ne(a)?(a(),b):(g!==b&&(c=g,Wn(()=>ne(()=>y(b)))),g)},t.appear?void 0:n),s}var Jr=e=>e instanceof Element;function Vn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Vn(e(),t);if(Array.isArray(e))for(const n of e){const r=Vn(n,t);if(r)return r}return null}function pc(e,t=Jr,n=Jr){const r=R(e);return R(()=>Vn(r(),t))}function bc(e){return R(()=>{const t=e.name||"s";return{enterActiveClasses:(e.enterActiveClass||t+"-enter-active").split(" "),enterClasses:(e.enterClass||t+"-enter").split(" "),enterToClasses:(e.enterToClass||t+"-enter-to").split(" "),exitActiveClasses:(e.exitActiveClass||t+"-exit-active").split(" "),exitClasses:(e.exitClass||t+"-exit").split(" "),exitToClasses:(e.exitToClass||t+"-exit-to").split(" "),moveClasses:(e.moveClass||t+"-move").split(" ")}})}function ai(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function vc(e,t,n,r){const{enterClasses:o,enterActiveClasses:i,enterToClasses:s}=e,{onBeforeEnter:l,onEnter:a,onAfterEnter:c}=t;l==null||l(n),n.classList.add(...o),n.classList.add(...i),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();a==null||a(n,()=>u())}),ai(()=>{n.classList.remove(...o),n.classList.add(...s),(!a||a.length<2)&&(n.addEventListener("transitionend",u),n.addEventListener("animationend",u))});function u(f){(!f||f.target===n)&&(r==null||r(),n.removeEventListener("transitionend",u),n.removeEventListener("animationend",u),n.classList.remove(...i),n.classList.remove(...s),c==null||c(n))}}function $c(e,t,n,r){const{exitClasses:o,exitActiveClasses:i,exitToClasses:s}=e,{onBeforeExit:l,onExit:a,onAfterExit:c}=t;if(!n.parentNode)return r==null?void 0:r();l==null||l(n),n.classList.add(...o),n.classList.add(...i),a==null||a(n,()=>u()),ai(()=>{n.classList.remove(...o),n.classList.add(...s),(!a||a.length<2)&&(n.addEventListener("transitionend",u),n.addEventListener("animationend",u))});function u(f){(!f||f.target===n)&&(r==null||r(),n.removeEventListener("transitionend",u),n.removeEventListener("animationend",u),n.classList.remove(...i),n.classList.remove(...s),c==null||c(n))}}var yc={inout:"in-out",outin:"out-in"},wc=e=>{const t=bc(e);return mc(pc(()=>e.children),{mode:yc[e.mode],appear:e.appear,onEnter(n,r){vc(t(),e,n,r)},onExit(n,r){$c(t(),e,n,r)}})};const xc=x("<section>"),Zr="animation-duration-m.4",br=e=>{const t=()=>`${e.class} relative size-i-full size-b-full overflow-hidden`,n=e.as??(r=>(()=>{const o=xc();return _(o,()=>r.children),L(()=>j(o,t())),o})());return d(n,{get class(){return t()},get children(){return d(wc,{enterActiveClass:`${Zr} animate-in`,exitActiveClass:`${Zr} animate-out`,get children(){return d(Jo,{})}})}})},Ne=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>d(ua,{get class(){return t.class},get style(){return`text-decoration: none; ${t.style}`},get href(){return e.href},get activeClass(){return e.activeClass},onClick:()=>{var n;(n=e.onClick)==null||n.call(e)},get children(){return t.children}}),get children(){return e.children}}),kc=x("<div>"),Fe=e=>(()=>{const t=kc(),n=e.ref;return typeof n=="function"?et(n,t):e.ref=t,_(t,()=>e.children),L(()=>j(t,`${e.class} absolute inset-0 size-i-full size-b-full overflow-auto`)),t})();function Sc(e){try{return document.querySelector(e)}catch{return null}}function _c(e,t){const n=Sc(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Cc(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function jc(e="/"){const t=()=>{const n=window.location.search,r=new URLSearchParams(n);return decodeURIComponent(r.get("navigation")??e)};return Bo(()=>({value:t(),state:history.state}),({value:n,replace:r,scroll:o,state:i})=>{const s=`?navigation=${encodeURIComponent(n)}`;r?window.history.replaceState(i,"",s):window.history.pushState(i,"",s),_c(window.location.hash.slice(1),o)},n=>Cc(window,"popstate",()=>n()),{go:n=>window.history.go(n)})}const Tc=x('<div class="flex flex-col gap-s"><div class="flex flex-col gap-s.4"><h3 class="text-m.2 font-bold text-fg-2"></h3><p class="leading-$($s+$s.2)">'),zc=e=>d(Ne,{style:"none",class:"size-b-full transition bg-accent-4 text-fg-3 border border-color-surface p-m.2 gap-m.2 rounded-m.2 flex flex-col justify-between",get href(){return e.href},get onClick(){return e.onInspect},get children(){const t=Tc(),n=t.firstChild,r=n.firstChild,o=r.nextSibling;return _(r,()=>e.meta.title),_(o,()=>e.meta.description),t}});function vr(e){const[t,n]=P([]);return te(lr(()=>e.each,()=>{const r=[];e.each.forEach((o,i)=>{r.push(e.children([i,o]))}),n(r)})),()=>t}const Oc=x('<ul class="size-i-full list-none grid grid-fit-cols-m gap-s">'),Mc=x("<li>"),Lc=e=>(()=>{const t=Oc();return _(t,d(vr,{get each(){return e.map},children:([n,r])=>(()=>{const o=Mc();return _(o,d(zc,{get href(){return`/docs/${n}/${r.openOn.join("/")}`},meta:r,onInspect:()=>{var i;return(i=e.onInspect)==null?void 0:i.call(e,n)}})),o})()})),t})(),Qr={dark:240,light:260};function Ac(){const[e,t]=P(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{t(l.matches?"light":"dark")});const[n,r]=P(void 0),o=()=>{switch(n()){case"dark":r("light");break;case"light":r("dark");break;default:r(e()==="light"?"dark":"light")}},i=R(()=>n()??e()??"dark"),s=R(()=>i()==="dark"?Qr.dark:Qr.light);return{scheme:i,hue:s,enforceScheme:n,setEnforceScheme:r,toggleScheme:o}}const Se=we(Ac),Ec=x('<div><span class="text-fg-1 font-semibold">Error:</span> '),oe=e=>(()=>{const t=Ec();return t.firstChild.nextSibling,_(t,()=>e.children,null),L(()=>j(t,`inline-block scheme-${Se.scheme()}-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal`)),t})(),ci={complete:{meta:{title:"Complete",description:"Complete package intended to replace Tailwind or unocss-preset-wind. Not recommended at the moment",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>qh),void 0,import.meta.url)).docs.default},color:{meta:{title:"Color",description:"Semantic color utils from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>rh),void 0,import.meta.url)).docs.default},dollars:{meta:{title:"Dollars",description:"$ syntax from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>hh),void 0,import.meta.url)).docs.default}};function Pc(){try{const e=new Map;return Object.entries(ci).forEach(([t,n])=>{e.set(t,n.meta)}),{success:!0,value:e}}catch{return{success:!1,error:"An unexpected error occurred"}}}async function Rc(e){try{const t=ci[e];return{success:!0,value:{meta:t.meta,docs:await t.loadDocs()}}}catch(t){return{success:!1,error:`${t}`}}}function Dc(){const e=new Map,[t,n]=P();return{index:t,fetchIndex:async()=>{n(Pc())},getModuleById:async s=>{const l=e.get(s);if(l)return{success:!0,value:l};{const a=await Rc(s);return a.success&&e.set(s,a.value),a}},getCachedModuleById:s=>{const l=e.get(s);return l?{success:!0,value:l}:{success:!1,error:"Not cached"}}}}const st=we(Dc),ui=()=>d(Y,{get when(){return st.index()},get fallback(){return d(oe,{children:"Module index not loaded"})},keyed:!0,children:e=>e.success?d(Lc,{get map(){return e.value}}):d(oe,{children:"Error loading index"})}),Uc=x('<div class="grid grid-fit-cols-l.2 gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T🤮ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade ⚡:'),jt=x('<div class="size-b-px bg-surface">'),Tt=x("<pre>"),Hc=x('<div class="i-mdi-arrow-right">'),Ic=x('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.'),Wc=x("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas)."),Nc=x('<section class="p-b-m font-semibold bg-gradient-to-ss from-surface">'),Bc=x(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.`),Gc=x("<h3>Ready to improve your Tailwind workflow?"),Fc=x('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.'),Vc=x('<section class="bg-gradient-to-ss from-surface to-normal-2">'),qc=x("<h4>Not convinced about the whole package?"),Xc=x("<p>Best parts of Windblade are available standalone. Adopt Windblade incrementally or combine parts of it with other UnoCSS presets."),Yc=x('<section class="text-fg-3">'),Kc=x("<footer>"),W={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},Te=e=>(()=>{const t=Uc(),n=t.firstChild,r=n.firstChild,o=n.nextSibling,i=o.firstChild;return _(n,d(Y,{get when(){return e.code.tw.js},keyed:!0,children:s=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const c=`${W.pre} js`,u=(f=He.highlighter())==null?void 0:f.highlight(s,{language:"js"}).value;return c!==a._v$3&&j(l,a._v$3=c),u!==a._v$4&&(l.innerHTML=a._v$4=u),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),_(n,d(Y,{get when(){return e.code.tw.html},keyed:!0,children:s=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const c=W.pre,u=(f=He.highlighter())==null?void 0:f.highlight(s,{language:"xml"}).value;return c!==a._v$5&&j(l,a._v$5=c),u!==a._v$6&&(l.innerHTML=a._v$6=u),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),_(o,d(Y,{get when(){return e.code.wb.js},keyed:!0,children:s=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const c=`${W.pre} js`,u=(f=He.highlighter())==null?void 0:f.highlight(s,{language:"js"}).value;return c!==a._v$7&&j(l,a._v$7=c),u!==a._v$8&&(l.innerHTML=a._v$8=u),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),_(o,d(Y,{get when(){return e.code.wb.html},keyed:!0,children:s=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const c=W.pre,u=(f=He.highlighter())==null?void 0:f.highlight(s,{language:"xml"}).value;return c!==a._v$9&&j(l,a._v$9=c),u!==a._v$10&&(l.innerHTML=a._v$10=u),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),L(s=>{const l=W.h5,a=W.h5;return l!==s._v$&&j(r,s._v$=l),a!==s._v$2&&j(i,s._v$2=a),s},{_v$:void 0,_v$2:void 0}),t})(),eo=()=>d(Ne,{style:"solid",href:"/docs/complete/Usage/Installation",get children(){return["Get started",Hc()]}}),Jc=()=>d(Fe,{get children(){return[(()=>{const e=Nc();return _(e,d(Ze,{class:"flex flex-col items-start",get children(){return[(()=>{const t=Ic(),n=t.firstChild,r=n.nextSibling,o=r.firstChild,i=o.nextSibling,s=i.nextSibling,l=s.nextSibling,a=l.nextSibling;return L(c=>{const u=W.header.li,f=W.header.li,h=W.header.li,y=W.header.li,b=W.header.li;return u!==c._v$11&&j(o,c._v$11=u),f!==c._v$12&&j(i,c._v$12=f),h!==c._v$13&&j(s,c._v$13=h),y!==c._v$14&&j(l,c._v$14=y),b!==c._v$15&&j(a,c._v$15=b),c},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),t})(),(()=>{const t=Wc();return L(()=>j(t,`${W.p} text-fg-3 m-be-s`)),t})(),d(eo,{})]}})),e})(),d(Ze,{get children(){const e=Bc(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,o=r.firstChild,i=o.firstChild,s=i.nextSibling,l=o.nextSibling,a=l.firstChild,c=a.nextSibling,u=l.nextSibling,f=u.firstChild,h=f.nextSibling,y=t.nextSibling,b=y.firstChild,g=b.nextSibling,C=y.nextSibling,T=C.firstChild,w=T.nextSibling,$=C.nextSibling,m=$.firstChild,z=m.nextSibling,v=$.nextSibling,M=v.firstChild,B=M.nextSibling,E=B.nextSibling;return _(o,d(Te,{code:{tw:{js:Za,html:Qa},wb:{js:ec,html:tc}}}),null),_(l,d(Te,{code:{tw:{html:nc},wb:{html:rc}}}),null),_(u,d(Te,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),_(y,d(Te,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all 🙁</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),_(C,d(Te,{code:{tw:{js:oc},wb:{js:ic}}}),null),_($,d(Te,{code:{tw:{js:ac},wb:{js:cc}}}),null),_(v,d(Te,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),E),_(v,d(Te,{code:{tw:{html:sc},wb:{html:lc}}}),null),L(p=>{const O=W.h3,A=W.h4,I=W.p,X=W.h4,ee=W.p,K=W.h4,J=W.p,Z=W.h3,$e=W.p,ut=W.h3,Er=W.p,Pr=W.h3,Rr=W.p,Dr=W.h3,Ur=W.p,Hr=W.p;return O!==p._v$16&&j(n,p._v$16=O),A!==p._v$17&&j(i,p._v$17=A),I!==p._v$18&&j(s,p._v$18=I),X!==p._v$19&&j(a,p._v$19=X),ee!==p._v$20&&j(c,p._v$20=ee),K!==p._v$21&&j(f,p._v$21=K),J!==p._v$22&&j(h,p._v$22=J),Z!==p._v$23&&j(b,p._v$23=Z),$e!==p._v$24&&j(g,p._v$24=$e),ut!==p._v$25&&j(T,p._v$25=ut),Er!==p._v$26&&j(w,p._v$26=Er),Pr!==p._v$27&&j(m,p._v$27=Pr),Rr!==p._v$28&&j(z,p._v$28=Rr),Dr!==p._v$29&&j(M,p._v$29=Dr),Ur!==p._v$30&&j(B,p._v$30=Ur),Hr!==p._v$31&&j(E,p._v$31=Hr),p},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),e}}),(()=>{const e=Vc();return _(e,d(Ze,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const t=Gc();return L(()=>j(t,W.h3)),t})(),(()=>{const t=Fc();return L(()=>j(t,W.p)),t})(),d(eo,{})]}})),e})(),(()=>{const e=Yc();return _(e,d(Ze,{class:"flex flex-col items-start gap-s p-b-m.4",get children(){return[(()=>{const t=qc();return L(()=>j(t,W.h4)),t})(),(()=>{const t=Xc();return L(()=>j(t,W.p)),t})(),d(ui,{})]}})),e})(),(()=>{const e=Kc();return _(e,d(Ze,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",d(li,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})()]}}),Zc=x('<h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Docs'),Qc=x('<p class="text-$($s+$s.4) font-semibold m-be-m.2">Please select a Windblade module to see the documentation for.'),eu=()=>d(Fe,{get children(){return d(Ze,{class:"p-b-m.2",get children(){return[Zc(),Qc(),d(ui,{})]}})}}),tu="_progress_8tf2m_1",nu="_spin_8tf2m_1",ru={progress:tu,spin:nu},ou=x("<div>"),iu=e=>(()=>{const t=ou();return L(n=>{const r=ru.progress,o=`--radius: ${e.radius??1}rem`;return r!==n._v$&&j(t,n._v$=r),n._v$2=Me(t,o,n._v$2),n},{_v$:void 0,_v$2:void 0}),t})();let su=0;const lu=()=>`uid-${++su}`,au=x('<div class="relative"><select></select><div class="i-mdi-unfold-more-horizontal absolute inset-ie-s inset-b-0 m-auto pointer-events-none">'),cu=e=>(()=>{const t=au(),n=t.firstChild;return dr(n,re(e,{get class(){return`${e.class} transition size-i-full appearance-none p-s p-ie-$($s*3) hover:highlight active:highlight+`},get onChange(){return e.onChange}}),!1,!0),_(n,()=>e.children),t})(),uu=x('<option selected disabled value="">select'),du=x('<form class="relative"><label class="absolute text-fg-3 inset-i-s inset-bs-s pointer-events-none">Module:'),fu=x("<option>"),hu=e=>{const t=lu(),{moduleId:n}=wt(),r=Xo();return(()=>{const o=du(),i=o.firstChild;return pe(i,"for",t),_(o,d(cu,{id:t,class:"p-bs-m.2 p-s rounded-s cursor-pointer bg-accent-4 hover:bg-accent-3 font-semibold",onChange:s=>{var a;const l=s.target.value;r(`/docs/${l}/${(a=e.index.get(l))==null?void 0:a.openOn.join("/")}`)},get children(){return[uu(),d(vr,{get each(){return e.index},children:([s,l])=>(()=>{const a=fu();return a.value=s,a.selected=n===s,_(a,()=>l.title),a})()})]}}),null),o})()},gu=()=>d(Y,{get when(){return st.index()},get fallback(){return d(oe,{children:"Index not loaded"})},keyed:!0,children:e=>e.success?d(hu,{get index(){return e.value}}):d(oe,{children:"Error loading index"})}),mu=x('<div class="absolute inset-0"><div></div><div>'),pu=x('<span class="relative">'),bu=x("<ul>"),vu=x("<li>"),$u=x("<nav>"),di=fe(),yu=e=>{const t=ie(di),n=`filter: hue-rotate(${3.6*e.i}deg);`,r=()=>t.leafActive(e.path),o=()=>({root:`
      block
      relative
      p-s.6
      p-i-s
      p-is-m.2
      rounded-full
      text-start
      justify-start
      transition
      ease-out
      overflow-hidden
      hover:bg-accent-3
      hover:text-fg-1
      ${r()?"bg-surface text-fg-1":"text-fg-3"}
    `,dot:{all:`
        transition
        absolute
        size-b-m.2
        size-i-m.2
        rounded-full
        inset-0
        inset-b-0
        m-b-auto
      `,glow:`
        blur-s
        ${r()?"bg-accent-2":""}
      `,fg:`
        size-b-s.4
        size-i-s.4
        m-is-$(($m.2-$s.4)/2)
        ${r()?"bg-accent":"bg-accent-2"}
      `}});return d(t.leafAs,{get path(){return e.path},get class(){return o().root},get children(){return[(()=>{const i=mu(),s=i.firstChild,l=s.nextSibling;return L(a=>{const c=n,u=`${o().dot.all} ${o().dot.glow}`,f=`${o().dot.all} ${o().dot.fg}`;return a._v$=Me(i,c,a._v$),u!==a._v$2&&j(s,a._v$2=u),f!==a._v$3&&j(l,a._v$3=f),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})(),(()=>{const i=pu();return _(i,()=>e.title),i})()]}})},fi=e=>{let t=0;return(()=>{const n=bu();return _(n,d(vr,{get each(){return e.tree},children:([r,o])=>(()=>{const i=vu();return _(i,typeof o=="string"?d(yu,{get path(){return[...e.prefix,r]},title:r,i:++t}):d(fi,{tree:o,get prefix(){return[...e.prefix,r]},get depth(){return e.depth+1}})),i})()})),L(r=>{const o=`list-none flex flex-col ${e.depth>0?"before:font-semibold before:m-be-s before:block gap-s.2":"gap-s"}`,i=e.depth>0?e.prefix.at(-1):void 0;return o!==r._v$4&&j(n,r._v$4=o),i!==r._v$5&&pe(n,"title",r._v$5=i),r},{_v$4:void 0,_v$5:void 0}),n})()},wu=e=>(()=>{const t=$u(),n=e.ref;return typeof n=="function"?et(n,t):e.ref=t,_(t,d(gu,{}),null),_(t,d(di.Provider,{get value(){return e.settings},get children(){return d(fi,{get tree(){return e.tree},prefix:[],depth:0})}}),null),L(()=>j(t,`${e.class} flex flex-col gap-s`)),t})(),On=x("<div>"),xu=x('<div class="relative flex gap-s items-center p-s.4 p-i-m.2 border-solid border-0 border-be-px border-color-fg-5"><div class="flex flex-wrap gap-s.4 text-fg-3">'),ku=x('<div class="size-i-full size-b-full flex flex-col"><div>'),Su=x('<div class="i-mdi-chevron-right">'),_u=x("<aside>"),Cu=x("<main>"),ju=x(`<div>Error loading module with ID '<!>'<div class="flex flex-wrap justify-between gap-s.4 m-bs-s">`),Tu=e=>{const[t,n]=P(0),[r,o]=P(0),[i,s]=P(!1),[l,a]=P(!1);let c,u;const f=new ResizeObserver(([g])=>{n(g.borderBoxSize[0].inlineSize)}),h=new ResizeObserver(([g])=>{o(g.borderBoxSize[0].inlineSize)});te(async()=>{f.disconnect(),c&&f.observe(c)}),te(async()=>{h.disconnect(),u&&h.observe(u)}),te(()=>{a(t()>=r()*4)});const y=()=>i()||l(),b=d(wu,{get tree(){return e.tree},class:"p-m.2 overflow-auto border-solid border-0 border-ie-px border-color-fg-5 size-i-max size-b-full",ref(g){const C=u;typeof C=="function"?C(g):u=g},settings:{leafActive:g=>Fn().pathname.endsWith(g.join("/").replaceAll(" ","%20")),leafAs:g=>d(Ne,{style:"none",get href(){return`/docs/${e.moduleId}/${g.path.join("/")}`},onClick:()=>s(!1),get class(){return g.class},get children(){return g.children}})}});return(()=>{const g=ku(),C=g.firstChild,T=c;return typeof T=="function"?et(T,g):c=g,_(g,d(Y,{get when(){return!l()},get children(){const w=xu(),$=w.firstChild;return _(w,d(Le,{onClick:()=>s(!i()),class:"p-s.6 rounded-full",style:"half",get children(){return[(()=>{const m=On();return L(()=>j(m,`i-mdi-menu ${i()?"opacity-zero":"opacity-s"} transition`)),m})(),(()=>{const m=On();return L(()=>j(m,`i-mdi-backburger ${i()?"opacity-s":"opacity-zero"} transition absolute`)),m})()]}}),$),_($,d(vt,{get each(){return decodeURIComponent(Fn().pathname).split("/").slice(3)},children:(m,z)=>[(()=>{const v=On();return _(v,m),L(()=>j(v,`${z()===0?"":"text-fg-1 font-semibold"}`)),v})(),R((()=>{const v=R(()=>z()===0);return()=>v()&&Su()})())]})),w}}),C),_(C,d(Y,{get when(){return!l()},get fallback(){return(()=>{const w=_u();return _(w,b),w})()},get children(){return d(Ma,{get isOpen(){return y()},onClose:()=>s(!1),style:"z-index: 1;",unmount:!1,title:"Navigation drawer",get children(){return[d(Y,{get when(){return R(()=>!!i())()&&!l()},get children(){return d(La,{class:"absolute inset-0",onClick:()=>s(!1)})}}),d(Aa,{get class(){return`bg-normal-3 transition-transform ease-out ${l()?"relative":"absolute inset-b-0 inset-is-0"}`},get style(){return`transform: translateX(${y()?"0":"-100%"})`},children:b})]}})}}),null),_(C,d(br,{get class(){return`flex-1 transition-all ${i()&&!l()?"blur-s.2 opacity-s.4":""}`},as:w=>(()=>{const $=Cu();return _($,()=>w.children),L(()=>j($,w.class)),$})()}),null),L(()=>j(C,`size-b-full flex relative ${l()?"flex-row":"flex-col"}`)),g})()},zu=()=>{const e=wt(),[t,{refetch:n}]=Dt(()=>st.getModuleById(e.moduleId));return d(Fe,{class:"[*]:absolute flex justify-center items-center",get children(){return d(Y,{get when(){return!t.loading},get fallback(){return d(iu,{})},get children(){return d(Y,{get when(){var r;return(r=t())==null?void 0:r.success},get fallback(){return(()=>{const r=ju(),o=r.firstChild,i=o.nextSibling,s=i.nextSibling,l=s.nextSibling;return _(r,()=>e.moduleId,i),_(l,d(Le,{style:"half",onClick:n,children:"Retry"}),null),_(l,d(Ne,{style:"secondary",href:"/docs",children:"Back to all docs"}),null),r})()},get children(){return d(Tu,{get tree(){return t().value.docs},get moduleId(){return e.moduleId}})}})}})}})},Ou=x('<h2 class="text-fg-3 text-s">Navigation error'),Mu=x('<p class="text-m.2 font-bold">The page you are looking for is now a chapter.'),Lu=x('<p class="text-$($s+$s.2)">Use the navigation menu to open any page inside this chapter.');function hi(e,t=[]){for(const[n,r]of e.entries()){if(typeof r=="string")return[...t,n];const o=hi(r,[...t,n]);if(o)return o}}const Au=()=>{const e=wt(),t=Xo(),n=async()=>{const r=await st.getModuleById(e.moduleId);if(!r.success)return;const o=hi(r.value.docs);o&&t(`/docs/${e.moduleId}/${o.join("/")}`)};return d(Fe,{class:"p-m.2 flex flex-col gap-s justify-center items-center text-center font-semibold",get children(){return[Ou(),Mu(),Lu(),d(Le,{style:"half",onClick:n,children:"Or find first page"})]}})},lt=fe([]),gi=()=>ie(lt)??{};function St(e){return[...gi(),...e]}const se=e=>{const t=gi();return d(vt,{get each(){return e.children},children:(n,r)=>{for(let o=t.length-1;o>=0;--o){const i=t[o],s=i(n,r());if(s!==void 0)return s}}})},ht=fe();function qn(e){let t=e;const n=ie(ht)??{};return Object.entries(n).forEach(([r,o])=>{t=t.replaceAll(r,o)}),t}const Eu=x("<option>"),Pu=x('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value="">'),Ru=e=>{const t=()=>qn(e.value);return(()=>{const n=Eu();return _(n,t),L(()=>n.value=t()),n})()},Du=e=>{switch(e.type){case"element":switch(e.name){case"option":return d(Y,{get when(){var t;return(t=e.attributes)==null?void 0:t.value},keyed:!0,fallback:()=>d(oe,{children:"'option' requires a 'value' attribute"}),children:t=>d(Ru,{value:t})})}}},Uu=e=>d(lt.Provider,{get value(){return St([Du])},get children(){const t=Pu();return t.firstChild,t.addEventListener("change",({target:n})=>e.onChange(n.value)),_(t,d(se,e),null),t}}),Hu=x('<div class="rounded-s.4 overflow-hidden flex items-center">'),Iu=e=>{const[t,n]=P(1),r=()=>e.onChange(`${t()}`);te(r);const o="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const i=Hu();return _(i,d(Le,{style:"secondary",class:o,onClick:()=>n(t()-1),children:"-"}),null),_(i,d(Le,{style:"secondary",class:o,onClick:r,children:t}),null),_(i,d(Le,{style:"secondary",class:o,onClick:()=>n(t()+1),children:"+"}),null),i})()},Wu=x('<tr class="border border-color-transparent border-be-color-fg-5"><td><div></div></td><td class="p-b-s.6 font-semibold flex flex-wrap">'),mi=fe(),Nu=(e,t)=>{const n=ie(mi),r=o=>{n==null||n.setPart(t,o),n==null||n.select()};switch(e.type){case"text":return d(Le,{style:"none",class:"text-accent transition ease-in",onClick:()=>r(e.value),get children(){return e.value}});case"element":switch(e.name){case"select":return d(Uu,re(e,{onChange:o=>r(o)}));case"input":return d(Iu,re(e,{onChange:o=>r(o)}))}}},Bu=e=>{const t=ie(Ar),[n,r]=P([]),o=(l,a)=>{r(c=>(c[l]=a,[...c]))};te(()=>{e.children.forEach((l,a)=>{switch(l.type){case"text":o(a,l.value);break}})});const i=()=>{const l=n().join("").match(/\S+/g);return l?l.join(""):""},s=()=>{var l;t==null||t.selectUtil({util:i(),renderer:((l=e.attributes)==null?void 0:l.renderer)??""}),e.onSelect()};return d(mi.Provider,{value:{parts:n,setPart:o,select:s},get children(){return d(lt.Provider,{get value(){return St([Nu])},get children(){const l=Wu(),a=l.firstChild,c=a.firstChild,u=a.nextSibling;return _(u,d(se,e)),L(()=>j(c,`i-mdi-check m-auto transition opacity-${e.selected?"s":"zero"}`)),l}})}})},Gu=x('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody>'),pi=fe(),Mn={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3"},Fu=(e,t)=>{const n=ie(pi);if(e.type==="element")switch(e.name){case"util":return d(Bu,re(e,{get selected(){return(n==null?void 0:n.selected())===t},onSelect:()=>n==null?void 0:n.setSelected(t)}))}},Vu=e=>{const[t,n]=P(-1);return d(pi.Provider,{value:{selected:t,setSelected:n},get children(){return d(lt.Provider,{get value(){return St([Fu])},get children(){const r=Gu(),o=r.firstChild,i=o.firstChild,s=i.firstChild,l=s.nextSibling,a=o.nextSibling;return _(a,d(se,e)),L(c=>{const u=Mn.tr,f=`${Mn.th} p-i-s`,h=`${Mn.th} size-i-full`;return u!==c._v$&&j(i,c._v$=u),f!==c._v$2&&j(s,c._v$2=f),h!==c._v$3&&j(l,c._v$3=h),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}})},qu=x("<div>"),Xu=e=>{const[t,n]=P();let r;return te(()=>{if(!r){n(void 0);return}t()||n(r.attachShadow({mode:"open"}))}),te(()=>{const o=t();o&&(o.innerHTML=e.innerHTML)}),(()=>{const o=qu(),i=r;return typeof i=="function"?et(i,o):r=o,L(()=>j(o,e.class)),o})()},bi=e=>d(Xu,{get class(){return e.class},get innerHTML(){return`
    <div
      id="root"
      class="${Se.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${e.css.replaceAll(":root",":where(#root)")}</style>
      ${e.html}
    </div>
  `}});function Yu(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $r(e){const t=e.length;let n=-1,r,o="";const i=e.charCodeAt(0);for(;++n<t;){if(r=e.charCodeAt(n),r===0){o+="�";continue}if(r===44){o+="\\,";continue}if(r>=1&&r<=31||r===127||n===0&&r>=48&&r<=57||n===1&&r>=48&&r<=57&&i===45){o+=`\\${r.toString(16)} `;continue}if(n===0&&t===1&&r===45){o+=`\\${e.charAt(n)}`;continue}if(r>=128||r===45||r===95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){o+=e.charAt(n);continue}o+=`\\${e.charAt(n)}`}return o}const Ln=$r;function he(e=[]){return Array.isArray(e)?e:[e]}function gt(e){return Array.from(new Set(e))}function ce(e){return typeof e=="string"}function mt(e){return ce(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(t=>t[1]!=null)}function Ku(e){return Array.isArray(e)?e.find(t=>!Array.isArray(t)||Array.isArray(t[0]))?e.map(t=>mt(t)):[e]:[mt(e)]}function Ju(e){return e.filter(([t,n],r)=>{if(t.startsWith("$$"))return!1;for(let o=r-1;o>=0;o--)if(e[o][0]===t&&e[o][1]===n)return!1;return!0})}function An(e){return e==null?"":Ju(e).map(([t,n])=>n!=null?`${t}:${n};`:void 0).filter(Boolean).join("")}function zt(e){return e&&typeof e=="object"&&!Array.isArray(e)}function vi(e,t,n=!1){const r=e,o=t;if(Array.isArray(o))return n&&Array.isArray(o)?[...r,...o]:[...o];const i={...r};return zt(r)&&zt(o)&&Object.keys(o).forEach(s=>{zt(r[s])&&zt(o[s])||Array.isArray(r[s])&&Array.isArray(o[s])?i[s]=vi(r[s],o[s],n):Object.assign(i,{[s]:o[s]})}),i}function Ht(e){let t,n,r;if(Array.isArray(e)){for(n=Array(t=e.length);t--;)n[t]=(r=e[t])&&typeof r=="object"?Ht(r):r;return n}if(Object.prototype.toString.call(e)==="[object Object]"){n={};for(t in e)t==="__proto__"?Object.defineProperty(n,t,{value:Ht(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=(r=e[t])&&typeof r=="object"?Ht(r):r;return n}return e}function Zu(e){return ce(e[0])}function Qu(e){return ce(e[0])}const to="$$shortcut-no-merge";function ed(e){return typeof e=="function"?{match:e}:e}function no(e){return e.length===3}function td(e){return e!=null}function nd(){}class rd{constructor(){this._map=new Map}get(t,n){const r=this._map.get(t);if(r)return r.get(n)}getFallback(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.has(n)||o.set(n,r),o.get(n)}set(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.set(n,r),this}has(t,n){var r;return(r=this._map.get(t))==null?void 0:r.has(n)}delete(t,n){var r;return((r=this._map.get(t))==null?void 0:r.delete(n))||!1}deleteTop(t){return this._map.delete(t)}map(t){return Array.from(this._map.entries()).flatMap(([n,r])=>Array.from(r.entries()).map(([o,i])=>t(i,n,o)))}}const Ot={};function od(e=["-",":"]){const t=e.join("|");return Ot[t]||(Ot[t]=new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),Ot[t].lastIndex=0,Ot[t]}function id(e,t=["-",":"],n=5){const r=od(t);let o=!1,i=e.toString();const s=new Set;do{const l=i;i=i.replace(r,(a,c,u,f)=>t.includes(u)?(s.add(c+u),f.split(/\s/g).filter(Boolean).map(h=>h==="~"?c:h.replace(/^(!?)(.*)/,`$1${c}${u}$2`)).join(" ")):a),o=i!==l,n-=1}while(o&&n);return{prefixes:Array.from(s),expanded:i,hasChanged:o}}function sd(e,t=["-",":"],n=5){const{expanded:r}=id(e.toString(),t,n);return typeof e=="string"?r:e.length()?e.overwrite(0,e.length(),r):e}const ro=new Set;function ld(e){ro.has(e)||(console.warn("[unocss]",e),ro.add(e))}function ad(e){const t=function(r){var i;const o=((i=this.__options)==null?void 0:i.sequence)||[];this.__options.sequence=[];for(const s of o){const l=e[s](r);if(l!=null)return l}};function n(r,o){return r.__options||(r.__options={sequence:[]}),r.__options.sequence.push(o),r}for(const r of Object.keys(e))Object.defineProperty(t,r,{enumerable:!0,get(){return n(this,r)}});return t}const cd=/[\\:]?[\s'"`;{}]+/g;function ud(e){return[...new Set(e.split(cd))]}const dd={name:"@unocss/core/extractor-split",order:0,extract({code:e}){return ud(e)}};function fd(){return{events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}}}const Xn="default",Yn="preflights",hd="shortcuts",gd={[Yn]:-100,[hd]:-10,[Xn]:0};function $i(e){return he(e).flatMap(t=>Array.isArray(t)?[t]:Object.entries(t))}const oo="_uno_resolved";function md(e){var n;if(oo in e)return e;e={...e},Object.defineProperty(e,oo,{value:!0,enumerable:!1});const t=e.shortcuts?$i(e.shortcuts):void 0;if(e.shortcuts=t,e.prefix||e.layer){const r=o=>{o[2]||(o[2]={});const i=o[2];i.prefix==null&&e.prefix&&(i.prefix=he(e.prefix)),i.layer==null&&e.layer&&(i.layer=e.layer)};t==null||t.forEach(r),(n=e.rules)==null||n.forEach(r)}return e}function yi(e){const t=md(e);if(!t.presets)return[t];const n=(t.presets||[]).flatMap(he).flatMap(yi);return[t,...n]}function io(e={},t={}){var m,z;const n=Object.assign({},t,e),r=gt((n.presets||[]).flatMap(he).flatMap(yi)),o=[...r.filter(v=>v.enforce==="pre"),...r.filter(v=>!v.enforce),...r.filter(v=>v.enforce==="post")],i=[...o,n],s=[...i].reverse(),l=Object.assign({},gd,...i.map(v=>v.layers));function a(v){return gt(i.flatMap(M=>he(M[v]||[])))}const c=a("extractors");let u=(m=s.find(v=>v.extractorDefault!==void 0))==null?void 0:m.extractorDefault;u===void 0&&(u=dd),u&&!c.includes(u)&&c.unshift(u),c.sort((v,M)=>(v.order||0)-(M.order||0));const f=a("rules"),h={},y=f.length,b=f.map((v,M)=>{var B;if(Zu(v)){he(((B=v[2])==null?void 0:B.prefix)||"").forEach(p=>{h[p+v[0]]=[M,v[1],v[2],v]});return}return[M,...v]}).filter(Boolean).reverse();let g=pd(i.map(v=>v.theme));const C=a("extendTheme");for(const v of C)g=v(g)||g;const T={templates:gt(i.flatMap(v=>{var M;return he((M=v.autocomplete)==null?void 0:M.templates)})),extractors:i.flatMap(v=>{var M;return he((M=v.autocomplete)==null?void 0:M.extractors)}).sort((v,M)=>(v.order||0)-(M.order||0))};let w=a("separators");w.length||(w=[":","-"]);const $={mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:v=>v,...n,presets:o,envMode:n.envMode||"build",shortcutsLayer:n.shortcutsLayer||"shortcuts",layers:l,theme:g,rulesSize:y,rulesDynamic:b,rulesStaticMap:h,preprocess:a("preprocess"),postprocess:a("postprocess"),preflights:a("preflights"),autocomplete:T,variants:a("variants").map(ed).sort((v,M)=>(v.order||0)-(M.order||0)),shortcuts:$i(a("shortcuts")).reverse(),extractors:c,safelist:a("safelist"),separators:w};for(const v of i)(z=v==null?void 0:v.configResolved)==null||z.call(v,$);return $}function pd(e){return e.map(t=>t?Ht(t):{}).reduce((t,n)=>vi(t,n),{})}const bd="0.53.3";class vd{constructor(t={},n={}){this.userConfig=t,this.defaults=n,this.version=bd,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=fd(),this.config=io(t,n),this.events.emit("config",this.config)}setConfig(t,n){t&&(n&&(this.defaults=n),this.userConfig=t,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=io(t,this.defaults),this.events.emit("config",this.config))}async applyExtractors(t,n,r=new Set){var i;const o={original:t,code:t,id:n,extracted:r};for(const s of this.config.extractors){const l=await((i=s.extract)==null?void 0:i.call(s,o));if(l)for(const a of l)r.add(a)}return r}makeContext(t,n){const r={rawSelector:t,currentSelector:n[1],theme:this.config.theme,generator:this,variantHandlers:n[2],constructCSS:(...o)=>this.constructCustomCSS(r,...o),variantMatch:n};return r}async parseToken(t,n){var c;if(this.blocked.has(t))return;const r=`${t}${n?` ${n}`:""}`;if(this._cache.has(r))return this._cache.get(r);let o=t;for(const u of this.config.preprocess)o=u(t);if(this.isBlocked(o)){this.blocked.add(t),this._cache.set(r,null);return}const i=await this.matchVariants(t,o);if(!i||this.isBlocked(i[1])){this.blocked.add(t),this._cache.set(r,null);return}const s=this.makeContext(t,[n||i[0],i[1],i[2],i[3]]);this.config.details&&(s.variants=[...i[3]]);const l=await this.expandShortcut(s.currentSelector,s),a=l?await this.stringifyShortcuts(s.variantMatch,s,l[0],l[1]):(c=await this.parseUtil(s.variantMatch,s))==null?void 0:c.map(u=>this.stringifyUtil(u,s)).filter(td);if(a!=null&&a.length)return this._cache.set(r,a),a;this._cache.set(r,null)}async generate(t,n={}){const{id:r,scope:o,preflights:i=!0,safelist:s=!0,minify:l=!1}=n,a=ce(t)?await this.applyExtractors(t,r):Array.isArray(t)?new Set(t):t;s&&this.config.safelist.forEach($=>a.add($));const c=l?"":`
`,u=new Set([Xn]),f=new Set,h=new Map;let y={};const b=Array.from(a).map(async $=>{var z;if(f.has($))return;const m=await this.parseToken($);if(m!=null){f.add($);for(const v of m){const M=v[3]||"",B=(z=v[4])==null?void 0:z.layer;h.has(M)||h.set(M,[]),h.get(M).push(v),B&&u.add(B)}}});await Promise.all(b),await(async()=>{if(!i)return;const $={generator:this,theme:this.config.theme},m=new Set([]);this.config.preflights.forEach(({layer:z=Yn})=>{u.add(z),m.add(z)}),y=Object.fromEntries(await Promise.all(Array.from(m).map(async z=>{const M=(await Promise.all(this.config.preflights.filter(B=>(B.layer||Yn)===z).map(async B=>await B.getCSS($)))).filter(Boolean).join(c);return[z,M]})))})();const g=this.config.sortLayers(Array.from(u).sort(($,m)=>(this.config.layers[$]??0)-(this.config.layers[m]??0)||$.localeCompare(m))),C={},T=$=>{if(C[$])return C[$];let m=Array.from(h).sort((v,M)=>{var B;return(this.parentOrders.get(v[0])??0)-(this.parentOrders.get(M[0])??0)||((B=v[0])==null?void 0:B.localeCompare(M[0]||""))||0}).map(([v,M])=>{const B=M.length,E=M.filter(A=>{var I;return(((I=A[4])==null?void 0:I.layer)||Xn)===$}).sort((A,I)=>{var X,ee,K,J,Z,$e,ut;return A[0]-I[0]||(((X=A[4])==null?void 0:X.sort)||0)-(((ee=I[4])==null?void 0:ee.sort)||0)||((Z=(K=A[5])==null?void 0:K.currentSelector)==null?void 0:Z.localeCompare(((J=I[5])==null?void 0:J.currentSelector)??""))||(($e=A[1])==null?void 0:$e.localeCompare(I[1]||""))||((ut=A[2])==null?void 0:ut.localeCompare(I[2]||""))||0}).map(([,A,I,,X,,ee])=>[[[(A&&xd(A,o))??"",(X==null?void 0:X.sort)??0]],I,!!(ee??(X==null?void 0:X.noMerge))]);if(!E.length)return;const p=E.reverse().map(([A,I,X],ee)=>{if(!X&&this.config.mergeSelectors)for(let J=ee+1;J<B;J++){const Z=E[J];if(Z&&!Z[2]&&(A&&Z[0]||A==null&&Z[0]==null)&&Z[1]===I)return A&&Z[0]&&Z[0].push(...A),null}const K=A?gt(A.sort((J,Z)=>{var $e;return J[1]-Z[1]||(($e=J[0])==null?void 0:$e.localeCompare(Z[0]||""))||0}).map(J=>J[0]).filter(Boolean)):[];return K.length?`${K.join(`,${c}`)}{${I}}`:I}).filter(Boolean).reverse().join(c);if(!v)return p;const O=v.split(" $$ ");return`${O.join("{")}{${c}${p}${c}}${O.map(A=>"").join("}")}`}).filter(Boolean).join(c);i&&(m=[y[$],m].filter(Boolean).join(c));const z=l?"":`/* layer: ${$} */${c}`;return C[$]=m?z+m:""},w=($=g,m)=>$.filter(z=>!(m!=null&&m.includes(z))).map(z=>T(z)||"").filter(Boolean).join(c);return{get css(){return w()},layers:g,matched:f,getLayers:w,getLayer:T}}async matchVariants(t,n){const r=new Set,o=[];let i=n||t,s=!1;const l={rawSelector:t,theme:this.config.theme,generator:this};for(;;){s=!1;for(const a of this.config.variants){if(!a.multiPass&&r.has(a))continue;let c=await a.match(i,l);if(c){ce(c)&&(c={matcher:c}),i=c.matcher,o.unshift(c),r.add(a),s=!0;break}}if(!s)break;if(o.length>500)throw new Error(`Too many variants applied to "${t}"`)}return[t,i,o,r]}applyVariants(t,n=t[4],r=t[1]){const i=n.slice().sort((c,u)=>(c.order||0)-(u.order||0)).reduceRight((c,u)=>f=>{var b,g;const h=((b=u.body)==null?void 0:b.call(u,f.entries))||f.entries,y=Array.isArray(u.parent)?u.parent:[u.parent,void 0];return(u.handle??Sd)({...f,entries:h,selector:((g=u.selector)==null?void 0:g.call(u,f.selector,h))||f.selector,parent:y[0]||f.parent,parentOrder:y[1]||f.parentOrder,layer:u.layer||f.layer,sort:u.sort||f.sort},c)},c=>c)({prefix:"",selector:kd(r),pseudo:"",entries:t[2]}),{parent:s,parentOrder:l}=i;s!=null&&l!=null&&this.parentOrders.set(s,l);const a={selector:[i.prefix,i.selector,i.pseudo].join(""),entries:i.entries,parent:s,layer:i.layer,sort:i.sort,noMerge:i.noMerge};for(const c of this.config.postprocess)c(a);return a}constructCustomCSS(t,n,r){const o=mt(n);if(ce(o))return o;const{selector:i,entries:s,parent:l}=this.applyVariants([0,r||t.rawSelector,o,void 0,t.variantHandlers]),a=`${i}{${An(s)}}`;return l?`${l}{${a}}`:a}async parseUtil(t,n,r=!1,o){var u;const[i,s,l]=ce(t)?await this.matchVariants(t):t;this.config.details&&(n.rules=n.rules??[]);const a=this.config.rulesStaticMap[s];if(a&&a[1]&&(r||!((u=a[2])!=null&&u.internal))){this.config.details&&n.rules.push(a[3]);const f=a[0],h=mt(a[1]),y=a[2];return ce(h)?[[f,h,y]]:[[f,i,h,y,l]]}n.variantHandlers=l;const{rulesDynamic:c}=this.config;for(const[f,h,y,b]of c){if(b!=null&&b.internal&&!r)continue;let g=s;if(b!=null&&b.prefix){const $=he(b.prefix);if(o){const m=he(o);if(!$.some(z=>m.includes(z)))continue}else{const m=$.find(z=>s.startsWith(z));if(m==null)continue;g=s.slice(m.length)}}const C=g.match(h);if(!C)continue;const T=await y(C,n);if(!T)continue;this.config.details&&n.rules.push([h,y,b]);const w=Ku(T).filter($=>$.length);if(w.length)return w.map($=>ce($)?[f,$,b]:[f,i,$,b,l])}}stringifyUtil(t,n){if(!t)return;if(no(t))return[t[0],void 0,t[1],void 0,t[2],this.config.details?n:void 0,void 0];const{selector:r,entries:o,parent:i,layer:s,sort:l,noMerge:a}=this.applyVariants(t),c=An(o);if(!c)return;const{layer:u,sort:f,...h}=t[3]??{},y={...h,layer:s??u,sort:l??f};return[t[0],r,c,i,y,this.config.details?n:void 0,a]}async expandShortcut(t,n,r=5){var l;if(r===0)return;const o=this.config.details?a=>{n.shortcuts=n.shortcuts??[],n.shortcuts.push(a)}:nd;let i,s;for(const a of this.config.shortcuts){let c=t;if((l=a[2])!=null&&l.prefix){const f=he(a[2].prefix).find(h=>t.startsWith(h));if(f==null)continue;c=t.slice(f.length)}if(Qu(a)){if(a[0]===c){i=i||a[2],s=a[1],o(a);break}}else{const u=c.match(a[0]);if(u&&(s=a[1](u,n)),s){i=i||a[2],o(a);break}}}if(ce(s)&&(s=sd(s.trim()).split(/\s+/g)),!s){const[a,c]=ce(t)?await this.matchVariants(t):t;if(a!==c){const u=await this.expandShortcut(c,n,r-1);u&&(s=u[0].map(f=>ce(f)?a.replace(c,f):f))}}if(s)return[(await Promise.all(s.map(async a=>{var c;return(ce(a)?(c=await this.expandShortcut(a,n,r-1))==null?void 0:c[0]:void 0)||[a]}))).flat(1).filter(Boolean),i]}async stringifyShortcuts(t,n,r,o={layer:this.config.shortcutsLayer}){var u;const i=new rd,s=(await Promise.all(gt(r).map(async f=>{const h=ce(f)?await this.parseUtil(f,n,!0,o.prefix):[[1/0,"{inline}",mt(f),void 0,[]]];return h||ld(`unmatched utility "${f}" in shortcut "${t[1]}"`),h||[]}))).flat(1).filter(Boolean).sort((f,h)=>f[0]-h[0]),[l,,a]=t,c=[];for(const f of s){if(no(f)){c.push([f[0],void 0,f[1],void 0,f[2],n,void 0]);continue}const{selector:h,entries:y,parent:b,sort:g,noMerge:C}=this.applyVariants(f,[...f[4],...a],l);i.getFallback(h,b,[[],f[0]])[0].push([y,!!(C??((u=f[3])==null?void 0:u.noMerge)),g??0])}return c.concat(i.map(([f,h],y,b)=>{const g=(T,w,$)=>{const m=Math.max(...$.map(v=>v[1])),z=$.map(v=>v[0]);return(T?[z.flat(1)]:z).map(v=>{const M=An(v);if(M)return[h,y,M,b,{...o,noMerge:w,sort:m},n,void 0]})};return[[f.filter(([,T])=>T).map(([T,,w])=>[T,w]),!0],[f.filter(([,T])=>!T).map(([T,,w])=>[T,w]),!1]].map(([T,w])=>[...g(!1,w,T.filter(([$])=>$.some(m=>m[0]===to))),...g(!0,w,T.filter(([$])=>$.every(m=>m[0]!==to)))])}).flat(2).filter(Boolean))}isBlocked(t){return!t||this.config.blocklist.some(n=>ce(n)?n===t:n.test(t))}}function $d(e,t){return new vd(e,t)}const yd=/\s\$\$\s+/g;function wd(e){return e.match(/\s\$\$\s/)}function xd(e,t){return wd(e)?e.replace(yd,t?` ${t} `:" "):t?`${t} ${e}`:e}const so=/^\[(.+?)(~?=)"(.*)"\]$/;function kd(e){return so.test(e)?e.replace(so,(t,n,r,o)=>`[${Ln(n)}${r}"${Ln(o)}"]`):`.${Ln(e)}`}function Sd(e,t){return t(e)}const _d={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}};function Mt(e,t=2){let n=e;for(;n.length<t;)n=`0${n}`;return n}function Cd(e){return e*(Math.PI/180)}function jd(e){return e*(180/Math.PI)}function D(e,t,n){return Math.min(Math.max(e,t),n)}function Ue(e,t){let[n,r,o,i]=t,s=i<1?`/${ke(i,5)}`:"";switch(e){case"rgb":case"rgba":return i<1?`rgba(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, ${ke(i,5)})`:`rgb(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)})`;case"oklab":case"oklch":return`${e}(${ke(n*100,6)}% ${ke(r,6)} ${ke(o,6)}${s})`;default:return`color(${e} ${ke(n,6)} ${ke(r,6)} ${ke(o,6)}${s})`}}function at(e,t){let n=[...e];for(let r=0;r<t.length;r++){let o=0;for(let i=0;i<t[r].length;i++)o+=e[i]*t[r][i];n[r]=o}return n}function ke(e,t=2){let n=10**t;return Math.round(e*n)/n}var Td=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],zd=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Od=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],V=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],Md=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],Ld=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function Ad(e,t){let n=[1/0,1/0,1/0,1/0,1/0],r=1/0,o=1/0,i=1/0;-1.88170328*e-.80936493*t>1?(n=[1.19086277,1.76576728,.59662641,.75515197,.56771245],r=4.0767416621,o=-3.3077115913,i=.2309699292):1.81444104*e-1.19445276*t>1?(n=[.73956515,-.45954404,.08285427,.1254107,.14503204],r=-1.2684380046,o=2.6097574011,i=-.3413193965):(n=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],r=-.0041960863,o=-.7034186147,i=1.707614701);let s=n[0]+n[1]*e+n[2]*t+n[3]*e*e+n[4]*e*t,l=.3963377774*e+.2158037573*t,a=-.1055613458*e-.0638541728*t,c=-.0894841775*e-1.291485548*t;{let u=1+s*l,f=1+s*a,h=1+s*c,y=u**3,b=f**3,g=h**3,C=3*l*u**2,T=3*a*f**2,w=3*c*h**2,$=6*l**2*u,m=6*a**2*f,z=6*c**2*h,v=r*y+o*b+i*g,M=r*C+o*T+i*w,B=r*$+o*m+i*z;s=s-v*M/(M*M-.5*v*B)}return s}function Ed(e,t){let n=Ad(e,t),[r,o,i]=Ft(Jn([1,n*e,n*t,1])),s=Math.cbrt(1/Math.max(r,o,i)),l=s*n;return{L:s,C:l}}function Pd(e,t,n,r,o){let i=Ed(e,t);if((n-o)*i.C-(i.L-o)*r<=0)return i.C*o/(r*i.L+i.C*(o-n));let s=i.C*(o-1)/(r*(i.L-1)+i.C*(o-n)),l=n-o,a=r,c=.3963377774*e+.2158037573*t,u=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=l+a*c,y=l+a*u,b=l+a*f,g=o*(1-s)+s*n,C=s*r,T=g+C*c,w=g+C*u,$=g+C*f,m=[[T**3,w**3,$**3],[3*h*T**2,3*y*w**2,3*b*$**2],[6*h**2*T,6*y**2*w,6*b**2*$]],z=V[0][0]*m[0][0]+V[0][1]*m[0][1]+V[0][2]*m[0][2]-1,v=V[0][0]*m[1][0]+V[0][1]*m[1][1]+V[0][2]*m[1][2],M=V[0][0]*m[2][0]+V[0][1]*m[2][1]+V[0][2]*m[2][2],B=v/(v*v-.5*z*M),E=B>=0?-z*B:1/0,p=V[1][0]*m[0][0]+V[1][1]*m[0][1]+V[1][2]*m[0][2]-1,O=V[1][0]*m[1][0]+V[1][1]*m[1][1]+V[1][2]*m[1][2],A=V[1][0]*m[2][0]+V[1][1]*m[2][1]+V[1][2]*m[2][2],I=O/(O*O-.5*p*A),X=I>=0?-p*I:1/0,ee=V[2][0]*m[0][0]+V[2][1]*m[0][1]+V[2][2]*m[0][2]-1,K=V[2][0]*m[1][0]+V[2][1]*m[1][1]+V[2][2]*m[1][2],J=V[2][0]*m[2][0]+V[2][1]*m[2][1]+V[2][2]*m[2][2],Z=K/(K*K-.5*ee*J),$e=Z>=0?-ee*Z:1/0;return s+Math.min(E,X,$e)}function En(e){let t=Math.abs(e);return t<=.0031308?e*12.92:1.055*Math.pow(t,1/2.4)-.055}function Pn(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function Kn(e){let[t,n,r,o]=e;t=Math.abs(t%360);let i=n*(1-Math.abs(2*r-1)),s=i*(1-Math.abs(t/60%2-1)),l=0,a=0,c=0;0<=t&&t<60?(l=i,a=s):60<=t&&t<120?(l=s,a=i):120<=t&&t<180?(a=i,c=s):180<=t&&t<240?(a=s,c=i):240<=t&&t<300?(l=s,c=i):300<=t&&t<360&&(l=i,c=s);let u=r-i/2;return[l+u,a+u,c+u,o]}function lo(e){let[t,n,r,o]=e;if(n+r>=1){let s=n/(n+r);return[s,s,s,o]}let i=Kn([t,100,50,o]);for(let s=0;s<3;s++)i[s]*=1-n-r,i[s]+=n;return i}function Rd(e,t=2e-4){let[n,r,o,i]=e,s=Math.abs(r)<t&&Math.abs(o)<t?0:jd(Math.atan2(o,r));for(;s<0;)s+=360;for(;s>=360;)s-=360;return[n,Math.sqrt(r**2+o**2),s,i]}function Dd(e){let[t,n,r,o]=e;if(t===0)return[0,0,0,o];for(;r<0;)r+=360;for(;r>=360;)r-=360;let i=Cd(r);return[t,Math.cos(i)*n,Math.sin(i)*n,o]}function Ud(e){return at(e,Od)}function Ft(e){let[t,n,r,o]=e,[i,s,l]=at([t**3,n**3,r**3,o],V);return[i,s,l,o]}function Be(e){let[t,n,r,o]=e;return[En(t),En(n),En(r),o]}function wi(e){let[t,n,r,o]=at(e,Md);return[Math.cbrt(t),Math.cbrt(n),Math.cbrt(r),o]}function ao(e){return at(e,Td)}function Jn(e){return at(e,Ld)}function Vt(e){let[t,n,r,o]=Ft(Jn(e));if(t>1.001||t<-.001||n>1.001||n<-.001||r>1.001||r<-.001){let[i,s,l]=e,a=Math.max(1e-5,Math.sqrt(s**2+l**2)),c=D(i,0,1),u=s/a,f=l/a,h=Pd(u,f,i,a,c);return Be(Ft(Jn([c*(1-h)+h*i,u*(h*a),f*(h*a),o])))}return Be([t,n,r,o])}function qt(e){return Vt(Dd(e))}function Ie(e){let[t,n,r,o]=e;return[Pn(t),Pn(n),Pn(r),o]}function Xt(e){return Ud(wi(Ie(e)))}function Yt(e){return Rd(Xt(e))}function co(e){return at(e,zd)}function xi(e,t){let[n,r,o,i]=Yt(e);return typeof t.lightness=="number"&&(t.mode==="relative"?n+=t.lightness:n=t.lightness),typeof t.chroma=="number"&&(t.mode==="relative"?r+=t.chroma:r=t.chroma),typeof t.hue=="number"&&(t.mode==="relative"?o+=t.hue:o=t.hue),typeof t.alpha=="number"&&(t.mode==="relative"?i+=t.alpha:i=t.alpha),qt([n,r,o,i])}var Hd={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},uo=Hd,Id=/-?[0-9.]+%?/g,Wd=/^#[0-9a-f]{3,8}$/i,Nd=/^([^( ]+)\s*\(\s*([^)]+)\)$/,Bd=16**6,Zn=16**4,Qn=16**2;function _e(e){let t=Gd(e),n={},r={get hex(){if(n.hex)return n.hex;let[o,i,s,l]=t,a="#";return a+=Mt(Math.round(D(o*255,0,255)).toString(16),2),a+=Mt(Math.round(D(i*255,0,255)).toString(16),2),a+=Mt(Math.round(D(s*255,0,255)).toString(16),2),t[3]<1&&(a+=Mt(Math.round(l*255).toString(16),2)),n.hex=a,n.hex},get hexVal(){if(typeof n.hexVal=="number")return n.hexVal;let[o,i,s,l]=t;return l<1&&console.warn(`hexVal converted a semi-transparent color (${l*100}%) to fully opaque`),o=Math.round(D(o*255,0,255)),i=Math.round(D(i*255,0,255)),s=Math.round(D(s*255,0,255)),n.hexVal=o*Zn+i*Qn+s,n.hexVal},get rgb(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},get rgba(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},rgbVal:t,rgbaVal:t,get linearRGB(){return n.linearRGB||(n.linearRGB=Ue("srgb-linear",Ie(t))),n.linearRGB},get linearRGBVal(){return n.linearRGBVal||(n.linearRGBVal=Ie(t)),n.linearRGBVal},get p3(){return n.p3||(n.p3=Ue("display-p3",t)),n.p3},p3Val:t,get oklab(){return n.oklab||(n.oklab=Ue("oklab",Xt(t))),n.oklab},get oklabVal(){return n.oklabVal||(n.oklabVal=Xt(t)),n.oklabVal},get oklch(){return n.oklch||(n.oklch=Ue("oklch",Yt(t))),n.oklch},get oklchVal(){return n.oklchVal||(n.oklchVal=Yt(t)),n.oklchVal},get xyz(){return n.xyz||(n.xyz=Ue("xyz-d65",ao(Ie(t)))),n.xyz},get xyzVal(){return n.xyzVal||(n.xyzVal=ao(Ie(t))),n.xyzVal},adjust(o){return _e(xi(t,o))}};return r.toString=()=>r.hex,r}function fo(e){if(e>Bd)throw new Error("8-digit hex values (with transparency) aren’t supported");let t=e,n=Math.floor(t/Zn);t-=n*Zn;let r=Math.floor(t/Qn);t-=r*Qn;let o=t;return[n/255,r/255,o/255,1]}function ze(e,t){let n=e.match(Id);if(!n)throw new Error(`Unexpected color format: ${e}`);let r=[0,0,0,1];for(let o=0;o<n.length;o++)n[o]&&(n[o].includes("%")?r[o]=parseFloat(n[o])/100:!t||t[o]===1/0||t[o]===1?r[o]=parseFloat(n[o]):r[o]=parseFloat(n[o])/t[o]);return r}function Gd(e){let t=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw t;if(Array.isArray(e)){if(e.some(s=>typeof s!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[n,r,o,i]=e;return[D(n,0,1),D(r,0,1),D(o,0,1),typeof i=="number"?D(i,0,1):1]}if(typeof e=="number")return fo(e);if(typeof e=="string"){let n=e.trim();if(!n)throw new Error("Expected color, received empty string");let r=n.toLowerCase();if(typeof uo[r]=="number")return fo(uo[r]);if(Wd.test(r)){let l=r.replace("#",""),a=[0,0,0,1];if(l.length===6||l.length===8)for(let c=0;c<l.length/2;c++){let u=c*2,f=u+2,h=l.substring(u,f);a[c]=parseInt(h,16)/255}else if(l.length===3||l.length===4)for(let c=0;c<l.length;c++){let u=l.charAt(c);a[c]=parseInt(`${u}${u}`,16)/255}else throw new Error(`Hex value "${r}" not a valid sRGB color`);return a}let o=n.match(Nd);if(!o)throw t;let[,i,s]=o;if(i==="color"){let l=s.indexOf(" ");i=s.substring(0,l),s=s.substring(l)}switch(i){case"rgb":case"rgba":case"srgb":{let[l,a,c,u]=ze(s,[255,255,255,1]);return[D(l,0,1),D(a,0,1),D(c,0,1),D(u,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let l=ze(s);return Be(l)}case"hsl":case"hsla":{let[l,a,c,u]=ze(s);return Kn([l,D(a,0,1),D(c,0,1),D(u,0,1)])}case"hwb":case"hwba":{let[l,a,c,u]=ze(s);return lo([l,D(a,0,1),D(c,0,1),D(u,0,1)])}case"p3":case"display-p3":{let[l,a,c,u]=ze(s);return[D(l,0,1),D(a,0,1),D(c,0,1),D(u,0,1)]}case"lab":case"oklab":return Vt(ze(s));case"lch":case"oklch":return qt(ze(s));case"xyz":case"xyz-d65":return Be(co(ze(s)))}}if(typeof e=="object"){let n={...e},r=1;for(let o of Object.keys(n))o==="alpha"?r=D(n[o],0,1):n[o.toLowerCase()]=n[o];if("r"in n&&"g"in n&&"b"in n)return[D(n.r,0,1),D(n.g,0,1),D(n.b,0,1),r];if("h"in n&&"s"in n&&"l"in n)return Kn([n.h,D(n.s,0,1),D(n.l,0,1),r]);if("h"in n&&"w"in n&&"b"in n)return lo([n.h,D(n.w,0,1),D(n.b,0,1),r]);if("l"in n&&"a"in n&&"b"in n)return Vt([n.l,n.a,n.b,r]);if("l"in n&&"c"in n&&"h"in n)return qt([n.l,n.c,n.h,r]);if("x"in n&&"y"in n&&"z"in n)return Be(co([n.x,n.y,n.z,r]));throw t}throw t}function yr(e,t,n=.5,r="oklab"){let o=D(n,0,1);if(n===0)return _e(e);if(n===1)return _e(t);let i=1-o,s=o,l={oklch:Yt,oklab:Xt,lms:O=>Ie(wi(O)),linearRGB:Ie,sRGB:O=>O},a={oklch:qt,oklab:Vt,lms:O=>Ft(Be(O)),linearRGB:Be,sRGB:O=>O},c=l[r],u=a[r];if(!c)throw new Error(`Unknown color space "${r}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[f,h,y,b]=_e(e).rgbVal,[g,C,T,w]=_e(t).rgbVal;r==="oklch"&&(f===h&&h===y||g===C&&C===T)&&(c=l.oklab,u=a.oklab);let[$,m,z,v]=c([f,h,y,b]),[M,B,E,p]=c([g,C,T,w]);return r==="oklch"&&Math.abs(E-z)>180&&(Math.max(z,E)===E?E-=360:z-=360),_e(u([$*i+M*s,m*i+B*s,z*i+E*s,v*i+p*s]))}function ki(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?yr(e,"black",r,n):Si(e,-r)}function Si(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?yr(e,"white",r,n):ki(e,-r)}function Kt(e){return _e(e).xyzVal[1]}function Fd(e){return ke(_e(e).oklabVal[0],5)}function Vd(e){return Kt(e)<.36?"dark":"light"}function qd(e,t){let n=Kt(e),r=Kt(t),o=Math.max(n,r),i=Math.min(n,r),s=(o+.05)/(i+.05);return{ratio:s,AA:s>=4.5,AAA:s>=7}}var er={adjust:xi,contrastRatio:qd,darken:ki,from:_e,lighten:Si,lightness:Fd,lightOrDark:Vd,luminance:Kt,mix:yr};function wr(e){var o,i,s;const t=e.dark.l,n=e.dark.c,r=e.dark.a??1;return{dark:{l:t,c:n,a:r},light:{l:((o=e.light)==null?void 0:o.l)??1-t,c:((i=e.light)==null?void 0:i.c)??n,a:((s=e.light)==null?void 0:s.a)??r}}}function Xd(e,t){const n=wr(t);return Object.assign(n,{dark:{h:e},light:{h:e}}),n}const Yd=(e,t,n,r=1)=>er.from(`oklch(${e} ${t}, ${n}, ${r})`);function Kd(e,t){const n={light:{},dark:{}};if(!e.windblade)return n;const{colors:r}=e.windblade;return Object.entries(r).forEach(([o,i])=>{[i.base,...i.on].forEach((l,a)=>{const c=`--${o}-${a===0?"base":`fg-${a}`}`,{dark:u,light:f}=wr(l);n.dark[c]=er.from(`oklch(${u.l} ${u.c}, ${t}, ${u.a})`).rgba,n.light[c]=er.from(`oklch(${f.l} ${f.c}, ${t}, ${f.a})`).rgba})}),n}function Jd(e){let t="";return Object.keys(e).forEach(n=>{t+=`${n}: ${e[n]};
`}),t}const Zd=Object.freeze(Object.defineProperty({__proto__:null,LCHToCSSColor:Yd,getColorSchemeCSSProps:Kd,getLCA:wr,getLCHA:Xd,objToCSS:Jd},Symbol.toStringTag,{value:"Module"}));function Qd(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,i,s;if((i=(o=r.windblade)==null?void 0:o.miscColors)!=null&&i[n[2]])return{[t]:n[2]};if((s=r.windblade)!=null&&s.colors[n[2]])return{[t]:`var(--${n[2]}-base)`}}]}function ef(e){return[new RegExp(`^(${e})-(.+)$`),(t,{theme:n})=>{var i;const r=(i=n.windblade)==null?void 0:i.colors[t[2]];if(!r)return;const o={background:`var(--${t[2]}-base)`,color:`var(--${t[2]}-fg-1)`};for(let s=1;s<=r.on.length;++s)o[`--fg-${s}`]=`var(--${t[2]}-fg-${s})`;return o}]}function tf(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,i;return(i=(o=r.windblade)==null?void 0:o.miscColors)!=null&&i[n[2]]?{[t]:n[2]}:{[t]:`var(--fg-${n[2]})`}}]}const nf=Object.freeze(Object.defineProperty({__proto__:null,colorBgRule:ef,colorRule:Qd,fgColorRule:tf},Symbol.toStringTag,{value:"Module"})),rf={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},G=e=>e.filter(Boolean).join("-");function _i(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"i",t]),G([n,"inline",r]))]}function Ci(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"bs",t]),G([n,"block-start",r])),o(G([e,"be",t]),G([n,"block-end",r])),o(G([e,"i",t]),G([n,"inline",r])),o(G([e,"is",t]),G([n,"inline-start",r])),o(G([e,"ie",t]),G([n,"inline-end",r]))]}function ji(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"ss",t]),G([n,"start-start",r])),o(G([e,"se",t]),G([n,"start-end",r])),o(G([e,"ee",t]),G([n,"end-end",r])),o(G([e,"es",t]),G([n,"end-start",r]))]}const of=Object.freeze(Object.defineProperty({__proto__:null,abbreviations:rf,axisRules:_i,cornerRules:ji,edgeRules:Ci},Symbol.toStringTag,{value:"Module"})),xr={x:["-x"],y:["-y"],z:["-z"],"":["-x","-y"]},ho=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"],Lt=Object.assign({},...ho.map(e=>({[e.replace(/ /,"-")]:e})),...ho.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e}))),fn=["inherit","initial","revert","revert-layer","unset"],kr=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,Ti=/^(-?\d*(?:\.\d+)?)$/i,zi=/^(px)$/i,sf=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function me(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function lf(e){const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(r&&!Number.isNaN(o))return`${me(o)}${r}`}function af(e){if(e==="auto"||e==="a")return"auto"}function cf(e){if(e.match(zi))return`1${e}`;const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o/4)}rem`}function uf(e){if(e.match(zi))return`1${e}`;const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o)}px`}function df(e){if(!Ti.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return me(t)}function ff(e){if(e.endsWith("%")&&(e=e.slice(0,-1)),!Ti.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return`${me(t/100)}`}function hf(e){if(e==="full")return"100%";const[t,n]=e.split("/"),r=Number.parseFloat(t)/Number.parseFloat(n);if(!Number.isNaN(r))return r===0?"0":`${me(r*100)}%`}const gf=/^\[(color|length|position|quoted|string):/i;function hn(e,t){if(e&&e.startsWith("[")&&e.endsWith("]")){let n,r;const o=e.match(gf);if(o?(t||(r=o[1]),n=e.slice(o[0].length,-1)):n=e.slice(1,-1),!n||n==='=""')return;n.startsWith("--")&&(n=`var(${n})`);let i=0;for(const s of n)if(s==="[")i+=1;else if(s==="]"&&(i-=1,i<0))return;if(i)return;switch(r){case"string":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return n.replace(/(url\(.*?\))/g,s=>s.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,s=>{const l=[];return s.replace(/var\((--.+?)[,)]/g,(a,c)=>(l.push(c),a.replace(c,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function mf(e){return hn(e)}function pf(e){return hn(e,"color")}function bf(e){return hn(e,"length")}function vf(e){return hn(e,"position")}function $f(e){if(e.match(/^\$[^\s'"`;{}]/))return`var(--${$r(e.slice(1))})`}function yf(e){const t=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0&&!r?"0s":r?`${me(o)}${r}`:`${me(o)}ms`}function wf(e){const t=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o)}deg`}function xf(e){if(fn.includes(e))return e}function kf(e){if(e.split(",").every(t=>sf.includes(t)))return e}function Sf(e){if(["top","left","right","bottom","center"].includes(e))return e}const _f={__proto__:null,numberWithUnit:lf,auto:af,rem:cf,px:uf,number:df,percent:ff,fraction:hf,bracket:mf,bracketOfColor:pf,bracketOfLength:bf,bracketOfPosition:vf,cssvar:$f,time:yf,degree:wf,global:xf,properties:kf,position:Sf},Oi=ad(_f),H=Oi;function Cf(e,t){const n=e.split(/(?:\/|:)/);return n[0]===`[${t}`?[n.slice(0,2).join(":"),n[2]]:n}function Ae(e,t){return fn.map(n=>[`${e}-${n}`,{[t??e]:n}])}const jf=["%alpha","<alpha-value>"];new RegExp(jf.map(e=>Yu(e)).join("|"));function Mi(e,t,n){var i,s,l;const r=(i=t.windblade)==null?void 0:i.proportions[e];if(r!==void 0)return`${r}${n}`;const o=(l=(s=t.windblade)==null?void 0:s.miscSizes)==null?void 0:l[e];if(o!==void 0)return`${o}`;if(!Number.isNaN(Number(e)))return`${e}${n}`}function gn(e,t,n){return[new RegExp(`^${e}-(.+)$`),([r,o],{theme:i})=>{const s=(n==null?void 0:n.defaultUnit)??"rem",l=Oi.bracket(o);if(l!==void 0)return{[t]:l};let a=Mi(o,i,s);if(a!==void 0)return n!=null&&n.postprocess&&(a=n.postprocess(a)),{[t]:a}}]}function Tf(e,t,n,r){return _i(e,t,n,r,gn)}function zf(e,t,n,r){return Ci(e,t,n,r,gn)}function Of(e,t,n,r){return ji(e,t,n,r,gn)}const Mf=Object.freeze(Object.defineProperty({__proto__:null,axisRules:Tf,cornerRules:Of,edgeRules:zf,resolve:Mi,rule:gn},Symbol.toStringTag,{value:"Module"}));function Lf(e,t,n){return[new RegExp(`^(${e})-(.+)$`),(r,{theme:o})=>{if(!o.windblade)return;const i={},s=`${o.windblade.proportions[r[2]]*o.windblade.time.baseUnitMs}ms`;if(s!==void 0)return i[t]=(n==null?void 0:n(s))??s,i}]}function Af(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{if(!r.windblade)return;const o={},i=r.windblade.time.functions[n[2]];if(i!==void 0)return o[t]=i,o}]}const Ef=Object.freeze(Object.defineProperty({__proto__:null,durationRule:Lf,timingFunctionRule:Af},Symbol.toStringTag,{value:"Module"})),Q=Object.freeze(Object.defineProperty({__proto__:null,color:nf,logical:of,size:Mf,time:Ef},Symbol.toStringTag,{value:"Module"})),Pf={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}};function At(e,t){return{[`${e}-900`]:{base:{dark:{l:t[0].l,c:t[0].c},light:{l:t[9].l,c:t[9].c}},on:[{dark:{l:1,c:0}}]},[`${e}-800`]:{base:{dark:{l:t[1].l,c:t[1].c},light:{l:t[8].l,c:t[8].c}},on:[{dark:{l:1,c:0}}]},[`${e}-700`]:{base:{dark:{l:t[2].l,c:t[2].c},light:{l:t[7].l,c:t[7].c}},on:[{dark:{l:1,c:0}}]},[`${e}-600`]:{base:{dark:{l:t[3].l,c:t[3].c},light:{l:t[6].l,c:t[6].c}},on:[{dark:{l:1,c:0}}]},[`${e}-500`]:{base:{dark:{l:t[4].l,c:t[4].c},light:{l:t[5].l,c:t[5].c}},on:[{dark:{l:1,c:0}}]},[`${e}-400`]:{base:{dark:{l:t[5].l,c:t[5].c},light:{l:t[4].l,c:t[4].c}},on:[{dark:{l:0,c:0}}]},[`${e}-300`]:{base:{dark:{l:t[6].l,c:t[6].c},light:{l:t[3].l,c:t[3].c}},on:[{dark:{l:0,c:0}}]},[`${e}-200`]:{base:{dark:{l:t[7].l,c:t[7].c},light:{l:t[2].l,c:t[2].c}},on:[{dark:{l:0,c:0}}]},[`${e}-100`]:{base:{dark:{l:t[8].l,c:t[8].c},light:{l:t[1].l,c:t[1].c}},on:[{dark:{l:0,c:0}}]},[`${e}-50`]:{base:{dark:{l:t[9].l,c:t[9].c},light:{l:t[0].l,c:t[0].c}},on:[{dark:{l:0,c:0}}]}}}const Rf={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...At("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...At("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...At("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...At("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Df={windblade:{colors:{},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Sr={none:{},material3:Pf,tailwind:Rf,windblade:Df},go=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},Ce=(...e)=>e.reduce((t,n)=>{if(Array.isArray(n))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(n).forEach(r=>{["__proto__","constructor","prototype"].includes(r)||(Array.isArray(t[r])&&Array.isArray(n[r])?t[r]=Ce.options.mergeArrays?Ce.options.uniqueArrayItems?Array.from(new Set(t[r].concat(n[r]))):[...t[r],...n[r]]:n[r]:go(t[r])&&go(n[r])?t[r]=Ce(t[r],n[r]):t[r]=n[r])}),t},{}),tr={mergeArrays:!0,uniqueArrayItems:!0};Ce.options=tr;Ce.withOptions=(e,...t)=>{Ce.options=Object.assign(Object.assign({},tr),e);const n=Ce(...t);return Ce.options=tr,n};const mn={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{},time:{baseUnitMs:150,functions:{default:"linear"}}}},Jt=Object.entries,Pe=Object.keys;function S(e){return e.replace(/&/g,"&amp;").trimStart().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\n/g,"&#10;")}const{color:pt,logical:Ye}=Q;function pn(){const e=[pt.colorRule("bg","background-color"),pt.colorBgRule("bg"),pt.fgColorRule("bg-fg","background-color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            bg-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
            bg-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer for="fg" html="${S(`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full $util"></div>
          </div>
        `)}" />

        <renderer html="${S(`
          <div class="$util size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s flex items-center justify-center text-center">
            Background color
          </div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function _r(){const e=[["bg-none",{"background-image":"none"}],...Pe(Ye.abbreviations.edges).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ye.abbreviations.edges[n]}), var(--wb-gradient-stops))`}]),...Pe(Ye.abbreviations.coners).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ye.abbreviations.coners[n]}), var(--wb-gradient-stops))`}])],t=`
    <page>
      <h1><title /></h1>
      <p>Repalced static colors with sematic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${["bg-none",...Object.keys(Ye.abbreviations.edges).map(n=>`bg-gradient-to-${n}`),...Object.keys(Ye.abbreviations.coners).map(n=>`bg-gradient-to-${n}`)].map(n=>`<util>${n}</util>`).join("")}
        </utils>

        <renderer html="${S(`
          <div class="$util from-accent size-i-full size-b-l.2 rounded-s"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Cr(){const e=[pt.colorRule("from","--wb-gradient-from"),pt.colorRule("to","--wb-gradient-to")],t=`
    <page>
      <h1><title /></h1>
      <p>Repalced static colors with sematic colors. Temporarily missing the 'via' utilities.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${["from","to"].map(n=>`
            <util renderer="${n}">
            ${n}-
              <select>
                <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                  <option value="$name"/>
                </for>
                <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                  <option value="$name"/>
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${S(`
          <div class="bg-gradient-to-ie $util from-accent-2 size-i-full size-b-l.2 rounded-s"></div>
        `)}" />

        <renderer for="from" html="${S(`
          <div class="bg-gradient-to-ie $util to-accent-2 size-i-full size-b-l.2 rounded-s"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const Uf=Object.freeze(Object.defineProperty({__proto__:null,backgroundImage:_r,bgColor:pn,gradientColorStops:Cr},Symbol.toStringTag,{value:"Module"})),{color:Zt,logical:Ke}=Q;function bn(){const e=[...Ke.edgeRules("border","color","border","color",Zt.colorRule),...Ke.edgeRules("border","color-fg","border","color",Zt.fgColorRule)],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            border-color-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util>
            border-color-fg-
            <input type="integer" />
          </util>
          <util>
            border-
            <select>
              ${Object.keys(Ke.abbreviations.axis).map(n=>`<option value="${n}" />`)}
              ${Object.keys(Ke.abbreviations.edges).map(n=>`<option value="${n}" />`)}
            </select>
            -color-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util>
            border-
            <select>
              ${Object.keys(Ke.abbreviations.axis).map(n=>`<option value="${n}" />`)}
              ${Object.keys(Ke.abbreviations.edges).map(n=>`<option value="${n}" />`)}
            </select>
            -color-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          <div class="border border-width-s.2 $util rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function vn(){const e=[Zt.colorRule("outline","outline-color"),Zt.fgColorRule("outline-fg","outline-color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-color-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
            outline-color-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const Hf=Object.freeze(Object.defineProperty({__proto__:null,borderColor:bn,outlineColor:vn},Symbol.toStringTag,{value:"Module"})),{color:nr}=Q;function jr(){const e=[nr.colorRule("accent","accent-color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          accent-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
          accent-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Tr(){const e=[nr.colorRule("caret","caret-color"),nr.fgColorRule("caret-fg","caret-color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          caret-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
          caret-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const If=Object.freeze(Object.defineProperty({__proto__:null,accentColor:jr,caretColor:Tr},Symbol.toStringTag,{value:"Module"})),{color:Qt}=Q;function $n(){const e=[Qt.colorRule("fill","fill"),Qt.fgColorRule("fill-fg","fill")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          fill-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
          fill-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function yn(){const e=[Qt.colorRule("stroke","stroke"),Qt.fgColorRule("stroke-fg","stroke")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          stroke-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
          stroke-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const Wf=Object.freeze(Object.defineProperty({__proto__:null,fill:$n,stroke:yn},Symbol.toStringTag,{value:"Module"})),{color:en}=Q;function wn(){const e=[en.colorRule("text","color"),en.fgColorRule("text-fg","color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            text-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
            text-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function xn(){const e=[en.colorRule("decoration","text-decoration-color"),en.fgColorRule("decoration-fg","text-decoration-color")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses semantic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          decoration-
            <select>
              <for object="theme.windblade.colors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
              <for object="theme.windblade.miscColors" key-as="$name" value-as="$color">
                <option value="$name"/>
              </for>
            </select>
          </util>
          <util renderer="fg">
          decoration-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          <div class="underline $util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const Nf=Object.freeze(Object.defineProperty({__proto__:null,textColor:wn,textDecorationColor:xn},Symbol.toStringTag,{value:"Module"})),{getColorSchemeCSSProps:Bf,objToCSS:Et}=Zd;function kn(){const e=[[/^scheme-(auto|light|dark)-(\d+)$/,(n,{rawSelector:r,theme:o})=>{const i=Number(n[2]??0);if(Number.isNaN(i))return;const s=$r(r),{dark:l,light:a}=Bf(o,i);switch(n[1]){case"light":return`
              .${s} {
                color-scheme: light;
                ${Et(a)}
              }
            `;case"dark":return`
              .${s} {
                color-scheme: dark;
                ${Et(l)}
              }
            `;default:return`
              .${s} {
                color-scheme: light dark;
                ${Et(l)}
              }

              @media (prefers-color-scheme: light) { .${s} {
                  ${Et(a)}
                }
              }
            `}}]],t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for switching color scheme. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it>
        <utils>
          <util>
            scheme-
            <select>
              <option value="auto" />
              <option value="dark" />
              <option value="light" />
            </select>
            -
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util bg-normal p-m rounded-s">
            <div class="bg-surface border border-color-surface p-s rounded-s flex gap-s items-center">
              <div class="size-i-m.2 aspect-1/1 bg-accent rounded-full"></div>
              <div>Hello</div>
            </div>
          </div>
        `)}" />


        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const Gf=Object.freeze(Object.defineProperty({__proto__:null,colorScheme:kn},Symbol.toStringTag,{value:"Module"})),Li=[...pn().rules,..._r().rules,...Cr().rules,...wn().rules,...xn().rules,...bn().rules,...vn().rules,...jr().rules,...Tr().rules,...$n().rules,...yn().rules,...kn().rules],Ff=`
import { defineConfig } from 'unocss';
import windbladeColor from '@windblade/preset-color';

export default defineConfig({
  presets: [
    windbladeColor(),
  ],
});`,Vf=`import { defineConfig, presetMini } from 'unocss';
import windbladeColor from '@windblade/preset-color';

export default defineConfig({
  extendTheme: [
    (theme) => {
      delete theme.colors
    },
  ],
  presets: [
    windbladeColor(),
    presetMini(),
  ],
});`,Ai=`
  <page>
    <h1><title /></h1>
    <p>Just like the complete Windblade, the Color module is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get @windblade/preset-color from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/preset-color" />
    <pre lang="ts" code="${S(Ff)}" />
    <p>That's it! You can now use Windblade's color utilities in your proejct but it is likely that you want more utilities for things like layout and typography, please read on to learn how to use Windblade's color module othether with other UnoCSS presets.</p>

    <h2>Installation with other UnoCSS presets</h2>
    <p>You likely want to combine @windblade/preset-color with other UnoCSS presets (e.g. @unocss/preset-mini) to get utilities for layout, typography and other CSS features. This should generally work without any problems but we recommend removing colors from other presets' configuration to avoid confusion and possible conflicts.</p>
    <p>You will find instructions on how to remove colors from most popuilar UnoCSS presets below. If you are using other presets consult the docs for those presets.</p>

    <h3>@unocss/preset-mini, @unocss/preset-wind &amp; @unocss/preset-uno</h3>
    <p>Use <code>extendTheme</code> property to remove <code>colors</code> from the config.</p>
    <pre lang="ts" code="${S(Vf)}" />
  </page>
`,Rn=mn.windblade,qf=`
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
};`,Xf=`
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
};`,zr=`
  <page>
    <h1><title /></h1>
    <p>Colors in Windblade are based on the <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">OkLCH</a> model and have a 'base' and one or more 'on' colors.</p>

    <h2>Default colors</h2>
    <p>It is highly encouraged that you use your own colors, however, Windblade does come with a set of well-crafted example colors that are designed to demonstrate the semantic color system and were used to build this documnentation.</p>
    <example html="${S(`
      <div class="grid grid-fit-cols-m gap-s.4">
        ${(()=>{const e=Rn==null?void 0:Rn.colors;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
              <div class="bg-${t} flex flex-col border border-color-surface rounded-s overflow-hidden font-bold">
                <h1 class="p-s">${t}</h1>
                <div class="size-b-px shrink-0 bg-fg-1 opacity-[0.1]"></div>
                <div class="size-b-full flex flex-col gap-s p-s">
                  ${n.on.map((r,o)=>`<div class="text-fg-${o+1}">Fg-${o+1}</div>`).join("")}
                </div>
              </div>
            `).join(""):"Error: windblade.colors is not an object."})()}
      </div>
    `)}" />

    <h2>Custom colors</h2>
    <p>Add a color by specifying an object like the following:</p>
    <pre lang="ts" code="${S(qf)}" />

    <p>Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.</p>
    <pre lang="ts" code="${S(Xf)}" />
  </page>
`,Yf=`
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
`,Kf=`
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
`,Jf=`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
`,Zf=`
import { utils } from "@windblade/core";
import { theme } from "@windblade/unocss-preset"; // this is just a source file and it does not know about your theme customizations. If you are using your own colors you should import them instead

const { getColorSchemeCSSProps, objToCSS } = utils

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

export default getBrandColor;`,Or=`
  <page>
    <h1>Using semantic colors</h1>
    <p>Windblade comes with a semantic color system. Refer to colors by their names.</p>
    <pre lang="html" code="${S(Yf)}" />

    <h2>Foreground colors</h2>
    <p>All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.</p>
    <pre lang="html" code="${S(Kf)}" />

    <h2>Color scheme</h2>
    <p>Change hue and color scheme by applying color rules together with or inside of sheme-(auto|light|dark)-{number}.</p>
    <pre lang="html" code="${S('<div class="scheme-auto-80 bg-normal"></div>')}" />

    <p>It is a good idea apply a color scheme at the root of your app.</p>
    <pre lang="html" code="${S(Jf)}" />

    <h2>Using Windblade colors in JavaScrtipt</h2>
    <p>Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.</p>
    <pre lang="ts" code="${S(Zf)}" />
  </page>
`,rr=new Map([["Installation",Ai],["Theme",zr],["Semantic colors",Or]]),Qf=Object.freeze(Object.defineProperty({__proto__:null,categoy:rr,default:rr,installation:Ai,semanticColors:Or,theme:zr},Symbol.toStringTag,{value:"Module"})),Ei=new Map([["Background",new Map([["Background Color",pn().docs],["Background Gradient",_r().docs],["Background Gradient Stops",Cr().docs]])],["Text",new Map([["Text Color",wn().docs],["Text Decoration Color",xn().docs]])],["Border",new Map([["Border Color",bn().docs],["Outline Color",vn().docs]])],["Other",new Map([["Color Scheme",kn().docs],["Accent color",jr().docs],["Caret color",Tr().docs],["Fill",$n().docs],["Stroke Color",yn().docs]])]]),eh=Object.freeze(Object.defineProperty({__proto__:null,accessibility:Gf,backgrounds:Uf,borders:Hf,default:Ei,interactivity:If,svg:Wf,typography:Nf},Symbol.toStringTag,{value:"Module"})),th=new Map([["Usage",rr],...Ei]),nh=Object.freeze(Object.defineProperty({__proto__:null,default:th,rules:eh,usage:Qf},Symbol.toStringTag,{value:"Module"}));function Pi(e={}){return{name:"@windblade/unocss-preset-color",theme:mn,rules:Li,options:e,prefix:void 0}}const rh=Object.freeze(Object.defineProperty({__proto__:null,default:Pi,docs:nh,rules:Li,theme:mn},Symbol.toStringTag,{value:"Module"}));function oh(e,t){let n=e;for(t.windblade&&Object.entries(t.windblade.proportions).forEach(([r,o])=>{n=n.replaceAll(`$${r}`,o.toString())});n.includes("$(");){const r=n.indexOf("$")+1,o=n.substring(r),i=0;let s=i,l=0;for(let c=0;c<o.length;++c)if(o[c]==="("&&++l,o[c]===")"&&--l,l===0){s=c+1;break}const a=o.substring(i,s);try{n=n.replace(`$${a}`,Function(`'use strict'; return (${a})`)())}catch{return e}}return n}const ih=(e,t)=>({matcher:oh(e,t.theme)}),Ri=[ih],sh=`
import { defineConfig } from 'unocss';
import windbladeDollars from '@windblade/preset-dollars';

export default defineConfig({
  presets: [
    windbladeDollars(),
  ],
});`,lh=`
  <page>
    <h1><title /></h1>
    <p>Just like the complete Windblade, the Dollars module is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get @windblade/preset-dollars from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/preset-color" />
    <pre lang="ts" code="${S(sh)}" />
    <p>That's it! You can now use Windblade's dollar syntax in your project.</p>
  </page>
`,ah=`
<div class="grid grid-cols-[auto_$l_auto]"></div>
`,ch=`
<div class="p-s">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>
</div>
`,Mr=`
  <page>
    <h1>Using the $ syntax</h1>
    <p>You can grab proportions from your theme by prefixing their names with <code>$</code>. This is mainly useful inside brackets when you want to set custom values.</p>
    <pre lang="html" code="${S(ah)}" />

    <p>You can also use <code>$</code> to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p>
    <pre lang="html" code="${S(ch)}" />

    <p>Note that <code>$</code> is an UnoCSS <a href="https://github.com/unocss/unocss#custom-variants">variant</a> so it works with UnoCSS utilities that come from other presets too!</p>
  </page>
`,uh=Object.freeze(Object.defineProperty({__proto__:null,default:Mr},Symbol.toStringTag,{value:"Module"})),dh=new Map([["Usage",new Map([["Installation",lh],["$ syntax",Mr]])]]),fh=Object.freeze(Object.defineProperty({__proto__:null,default:dh,dollarSyntax:uh},Symbol.toStringTag,{value:"Module"}));function Di(e={}){return{name:"@windblade/unocss-preset-dollars",options:e,variants:Ri,prefix:void 0}}const hh=Object.freeze(Object.defineProperty({__proto__:null,default:Di,docs:fh,variants:Ri},Symbol.toStringTag,{value:"Module"})),mo={mid:"middle",base:"baseline",btm:"bottom",baseline:"baseline",top:"top",start:"top",middle:"middle",bottom:"bottom",end:"bottom","text-top":"text-top","text-bottom":"text-bottom",sub:"sub",super:"super",...Object.fromEntries(fn.map(e=>[e,e]))};`${Object.keys(mo).join("|")}`;const It={all:"all",colors:["color","background-color","border-color","outline-color","text-decoration-color","fill","stroke"].join(","),none:"none",opacity:"opacity",shadow:"box-shadow",transform:"transform"};function po(e){return H.properties(e)??It[e]}[`${Object.keys(It).join("|")}`,`${[...fn,...Object.keys(It)].join("|")}`,...Ae("transition")];const bo={thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"};function vo(e,t){var n;return((n=t.lineHeight)==null?void 0:n[e])||H.bracket.cssvar.global.rem(e)}`${Object.keys(bo).join("|")}`;const gh=[["justify-start",{"justify-content":"flex-start"}],["justify-end",{"justify-content":"flex-end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-stretch",{"justify-content":"stretch"}],...Ae("justify","justify-content"),["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],...Ae("justify-items"),["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],...Ae("justify-self")],mh=[["content-center",{"align-content":"center"}],["content-start",{"align-content":"flex-start"}],["content-end",{"align-content":"flex-end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],...Ae("content","align-content"),["items-start",{"align-items":"flex-start"}],["items-end",{"align-items":"flex-end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],...Ae("items","align-items"),["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"flex-start"}],["self-end",{"align-self":"flex-end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],...Ae("self","align-self")];[...gh,...mh].flatMap(([e,t])=>[[`flex-${e}`,t],[`grid-${e}`,t]]);const ph=[[/^content-(.+)$/,([,e])=>({content:H.bracket.cssvar(e)})],["content-empty",{content:'""'}],["content-none",{content:"none"}]],$o=["translate","rotate","scale"],Ve=["translateX(var(--un-translate-x))","translateY(var(--un-translate-y))","translateZ(var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" "),bh=["translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" ");[(`${Object.keys(Lt).join("|")}`,`${Object.keys(Lt).join("|")}`),(`${$o.join("|")}`,`${$o.join("|")}`),...Ae("transform")];function yo([,e,t],{theme:n}){var o;const r=((o=n.spacing)==null?void 0:o[t])??H.bracket.cssvar.fraction.rem(t);if(r!=null)return[...xr[e].map(i=>[`--un-translate${i}`,r]),["transform",Ve]]}function wo([,e,t]){const n=H.bracket.cssvar.fraction.percent(t);if(n!=null)return[...xr[e].map(r=>[`--un-scale${r}`,n]),["transform",Ve]]}function xo([,e="",t]){const n=H.bracket.cssvar.degree(t);if(n!=null)return e?{"--un-rotate":0,[`--un-rotate-${e}`]:n,transform:Ve}:{"--un-rotate-x":0,"--un-rotate-y":0,"--un-rotate-z":0,"--un-rotate":n,transform:Ve}}function ko([,e,t]){const n=H.bracket.cssvar.degree(t);if(n!=null)return[...xr[e].map(r=>[`--un-skew${r}`,n]),["transform",Ve]]}function ye(e){return e.replace("col","column")}function or(e){return e[0]==="r"?"Row":"Column"}function vh(e,t,n){var o;const r=(o=t[`gridAuto${or(e)}`])==null?void 0:o[n];if(r!=null)return r;switch(n){case"min":return"min-content";case"max":return"max-content";case"fr":return"minmax(0,1fr)"}return H.bracket.cssvar.auto.rem(n)}const $h=[["grid",{display:"grid"}],["inline-grid",{display:"inline-grid"}],[/^(?:grid-)?(row|col)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-${ye(e)}`]:((r=n[`grid${or(e)}`])==null?void 0:r[t])??H.bracket.cssvar.auto(t)}}],[/^(?:grid-)?(row|col)-span-(.+)$/,([,e,t])=>{if(t==="full")return{[`grid-${ye(e)}`]:"1/-1"};const n=H.bracket.number(t);if(n!=null)return{[`grid-${ye(e)}`]:`span ${n}/span ${n}`}},{autocomplete:["grid-(row|col)-span-<num>","(row|col)-span-<num>"]}],[/^(?:grid-)?(row|col)-start-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-start`]:H.bracket.cssvar(t)??t})],[/^(?:grid-)?(row|col)-end-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-end`]:H.bracket.cssvar(t)??t}),{autocomplete:["grid-(row|col)-(start|end)-<num>"]}],[/^(?:grid-)?auto-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>({[`grid-auto-${ye(e)}`]:vh(e,n,t)}),{autocomplete:["grid-auto-(rows|cols)-<num>"]}],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,([,e])=>({"grid-auto-flow":H.bracket.cssvar(e)})],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,([,e])=>({"grid-auto-flow":ye(e).replace("-"," ")}),{autocomplete:["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"]}],[/^grid-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-template-${ye(e)}`]:((r=n[`gridTemplate${or(e)}`])==null?void 0:r[t])??H.bracket.cssvar(t)}}],[/^grid-(rows|cols)-minmax-([\w.-]+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(auto-fill,minmax(${t},1fr))`})],[/^grid-(rows|cols)-(\d+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(${t},minmax(0,1fr))`}),{autocomplete:["grid-(rows|cols)-<num>","grid-(rows|cols)-none"]}],[/^grid-area(s)?-(.+)$/,([,e,t])=>e!=null?{"grid-template-areas":H.cssvar(t)??t.split("-").map(n=>`"${H.bracket(n)}"`).join(" ")}:{"grid-area":H.bracket.cssvar(t)}],["grid-rows-none",{"grid-template-rows":"none"}],["grid-cols-none",{"grid-template-columns":"none"}]],{logical:Pt}=Q;function Ui(){const e=[[/^(aspect)-(.+)$/,n=>{if(!n[2].includes(":"))return{"aspect-ratio":n[2]}}]],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses CSS ratios instead of presets.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>aspect-<input type="integer" /></util>
          <util>aspect-1/<input type="integer" /></util>
        </utils>

        <renderer html="${S(`
          <div class="size-b-m $util bg-accent rounded-s.4"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Hi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.</p>
    </page>
  `}}function Ii(){const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-after-${r}`,{"break-after":r}]),n=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(r=>`<util>break-after-${r}</util>`).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:t,docs:n}}function Wi(){const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-before-${r}`,{"break-before":r}]),n=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(r=>`<util>break-before-${r}</util>`).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:t,docs:n}}function Ni(){const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"],t={hidden:"none"},n=e.map(o=>[`${o}`,{display:Object.keys(t).includes(o)?t[o]:o}]),r=`
    <page>
      <h1><title /></h1>
      <p>Windblade removes some utilities from this group that cannot be sued semantically.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(o=>`<util>${o}</util>`).join("")}
        </utils>

        <renderer html="${S(`
          <div>
            <div class="bg-accent p-s rounded-s.4 $util">1</div>
            <div class="bg-accent p-s rounded-s.4 $util">2</div>
            <div class="bg-accent p-s rounded-s.4 $util">3</div>
          </div>
        `)}" />

        <h3>Preview</h3>
        <p>Currently our examples of these utilities do not demonstrate their use well. Please feel free to contibute better examples.</p>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:n,docs:r}}function Bi(){const e=[...Jt(Pt.abbreviations.edges).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),...Jt(Pt.abbreviations.coners).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),["object-center",{"object-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[...Object.keys(Pt.abbreviations.edges),...Object.keys(Pt.abbreviations.coners),"center"].map(n=>`<util>object-${n}</util>`).join("")}
        </utils>

        <renderer html="${S(`
          <img class="$util rounded-s.4 max-size-i-l.2 object-none" alt="Random demo" src="https://picsum.photos/600/400" />
        `)}" />

        <h3>Preview</h3>
        <p>Currently our examples of these utilities do not demonstrate their use well. Please feel free to contibute better examples.</p>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{size:Gi}=Q,Fi=[1,2,3,4,5,6,7,8,9].map(e=>`<div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">0${e}</div>`).join(`
`);function Vi(e,t){const n=[[`auto-${e}-auto`,{[`grid-auto-${t}`]:"auto"}],[`auto-${e}-fr`,{[`grid-auto-${t}`]:"minmax(0, 1fr)"}],Gi.rule(`auto-${e}`,`grid-auto-${t}`)],r=`
    <page>
      <h1><title /></h1>
      <p>Added utilities for controlling the size of implicitly-created grid columns with proportion units.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>auto-${e}-auto</util>
          <util>auto-${e}-fr</util>
          <util>
            auto-${e}-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name"/>
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="grid $util ${e==="cols"?"grid-flow-col":"grid-flow-row"} gap-s bg-accent-3 rounded-s.4 size-i-full">
            ${Fi}
          </div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:n,docs:r}}const qi=()=>Vi("cols","columns"),Xi=()=>Vi("rows","rows");function Sn(e,t,n){const r=[Gi.rule(`grid-${e}-${t}s`,`grid-template-${n}s`,{postprocess:i=>`repeat(auto-${e}, minmax(min(${i}, 100%), 1fr))`})],o=`
    <page>
      <h1><title /></h1>
      <p>Utilities specifying the columns in a grid layout using auto-${e}. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            grid-${e}-${t}s-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name"/>
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="grid $util ${t==="row"?"grid-flow-col":"grid-flow-auto"} gap-s bg-accent-3 rounded-s.4 size-i-full">
            ${Fi}
          </div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:r,docs:o}}const Yi=()=>Sn("fit","col","column"),Ki=()=>Sn("fill","col","column"),Ji=()=>Sn("fit","row","row"),Zi=()=>Sn("fill","row","row");function ue(e,t,n,r){return e.map(o=>`
    <for object="${o}" key-as="${t}" value-as="${n}">
      ${r}
    </for>
  `).join("")}const{logical:Dn}=Q;function ct(e){return`
    <select>
      ${[...e.axis?Object.keys(Dn.abbreviations.axis):[],...e.edges?Object.keys(Dn.abbreviations.edges):[],...e.corners?Object.keys(Dn.abbreviations.coners):[]].map(t=>`
        <option value="${t}"/>
      `).join("")}
    </select>
  `}const{size:Qi}=Q;function es(){const e=Qi.edgeRules("p","","padding",""),t=`
    <page>
      <h1><title /></h1>
      <p>Replaced physical properties with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            p-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            p-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util rounded-s bg-accent">
            <div class="border border-dashed rounded-s.2">Padding</div>
          </div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ts(){const e=Qi.edgeRules("m","","margin",""),t=`
    <page>
      <h1><title /></h1>
      <p>Replaced physical properties with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            m-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            m-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="border border-dashed border-color-accent rounded-s.2">
            <div class="$util p-s rounded-s bg-accent">Margin</div>
          </div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ns(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this. Please use gap and flex/grid/columns instead.</p>
    </page>
  `}}const{logical:nt,size:Lr}=Q;function rs(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this, as well as min and max variants, in favor of the size counterparts</p>
    </page>
  `}}function os(){const e=Lr.axisRules("size","","","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Pe(nt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              size-${n}-
              <select>
                ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Pe(nt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${S(`
            <div class="$util ${n==="i"?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
          `)}" />
        `).join("")}

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function is(e){return`
  <div class="$util ${e==="inline"?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`}function ss(){const e=Lr.axisRules("min-size","","min","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the minimum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Pe(nt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              min-size-${n}-
              <select>
                ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name" />
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Pe(nt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${S(`
            ${is(n)}
          `)}" />
        `).join("")}

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ls(){const e=Lr.axisRules("max-size","","max","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the maximum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Pe(nt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              max-size-${n}-
              <select>
                ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Pe(nt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${S(`
            ${is(n)}
          `)}" />
        `).join("")}

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{logical:Rt}=Q;function as(){const e=[...Jt(Rt.abbreviations.edges).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),...Jt(Rt.abbreviations.coners).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),["bg-center",{"background-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>${[...Object.keys(Rt.abbreviations.edges),...Object.keys(Rt.abbreviations.coners),"center"].map(n=>`
          <util>bg-${n}</util>
        `).join("")}</utils>

        <renderer html="${S(`
          <div class="$util rounded-s.4 size-i-full max-size-i-l.2 aspect-10/6" style="background-image: url('https://picsum.photos/600/400')"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{size:_t}=Q;function cs(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font family utilities have been removed.</p>
    </page>
  `}}function us(){const e=[_t.rule("text","font-size")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            text-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ds(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.</p>
    </page>
  `}}function fs(){const e=[_t.rule("tracking","letter-spacing",{defaultUnit:"em"})],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          tracking-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function hs(){const e=[_t.rule("leading","line-height",{defaultUnit:""})],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
          leading-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util text-center" style="max-inline-size: 36ch;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function gs(){const e=[["decoration-from-font",{"text-decoration-thickness":"from-font"}],_t.rule("decoration","text-decoration-thickness")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate thickness values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>decoration-from-font</util>
          <util>
            decoration-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="underline $util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ms(){const e=[_t.rule("underline-offset","text-underline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate ofset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            underline-offset-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="underline $util">Lorem ipsum<div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{logical:So,size:_n}=Q;function ps(){const e=[..._n.cornerRules("rounded","","border","radius"),...So.cornerRules("rounded","full","border","radius",(n,r)=>[n,{[r]:"99999px"}]),...So.cornerRules("rounded","none","border","radius",(n,r)=>[n,{[r]:"none"}])],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            rounded-
            <select>
              <option value="none" />
              <option value="full" />
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            rounded-
            ${ct({corners:!0})}-
            <select>
              <option value="none" />
              <option value="full" />
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="$util size-i-full max-size-i-l.2 aspect-1/1 bg-accent"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function bs(){const e=_n.edgeRules("border","","border","width"),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            border-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            border-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          <div class="border border-color-accent $util rounded-s size-i-full max-size-i-l.2 aspect-1/1"></div>
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function vs(){const e=[_n.rule("outline","outline-width")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function $s(){const e=[_n.rule("outline-offset","outline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate offset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-offset-
            <select>
              ${ue(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function ys(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Divides have been removed.</p>
    </page>
  `}}function ws(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Rings have been removed.</p>
    </page>
  `}}const{size:yh}=Q;function xs(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}}function ks(){const e=[yh.rule("opacity","opacity",{defaultUnit:""})],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses proportions instead of separete values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            opacity-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Ss(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}}const{size:wh}=Q;function _s(){const e=[wh.rule("border-spacing","border-spacing")],t=`
    <page>
      <h1><title /></h1>
      <p>Changing border-spacing for individual axis is not possible at the moment.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            border-spacing-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{time:rt}=Q;function Cs(){const e=[rt.durationRule("duration","transition-duration"),rt.durationRule("delay","transition-delay")],t=`
    <page>
      <h1><title /></h1>
      <p>Time values in Windblade use same proportions as everything else.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${["duration","delay"].map(n=>`
            <util>
              ${n}-
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function js(){const e=[rt.timingFunctionRule("ease","transition-timing-function")],t=`
    <page>
      <h1><title /></h1>
      <p>Time values in Windblade use same proportions as everything else.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            ease-
            <select>
              <for object="theme.windblade.time.functions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Ts(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.</p>
    </page>
  `}}function zs(){const e=[rt.durationRule("animation-duration","animation-duration"),rt.durationRule("animation-delay","animation-delay")],t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for controlling the duration &amp; delay of CSS animations. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${["duration","delay"].map(n=>`
            <util>
              animation-${n}-
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Os(){const e=[rt.timingFunctionRule("animation-ease","animation-timing-function")],t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for controlling the easing of CSS animations. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            animation-ease-
            <select>
              <for object="theme.windblade.time.functions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{size:Cn}=Q;function Ms(){const e=[Cn.rule("scale","transform",{defaultUnit:"",postprocess:n=>`scale${n}`})],t=`
    <page>
      <h1><title /></h1>
      <p>X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            scale-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Ls(){const e=[Cn.rule("rotate","transform",{defaultUnit:"deg",postprocess:n=>`rotate${Number(n)*360}`})],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses proportions instead of separete values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            rotate-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function As(){const e=[Cn.rule("translate","transform",{postprocess:n=>`translate${n}`})],t=`
    <page>
      <h1><title /></h1>
      <p>X and Y variants have been removed because they are not logical properties. Windblade also uses proportions instead of separete values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            translate-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Es(){const e=[Cn.rule("skew","transform",{defaultUnit:"deg",postprocess:n=>`skew${Number(n)*360}`})],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses proportions instead of separete values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            skew-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{size:Ps}=Q;function Rs(){const e=Ps.edgeRules("scroll-m","","scroll-margin",""),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[!1,!0].map(n=>`
            <util>
              scroll-m-
              ${n?`${ct({axis:!0,edges:!0})}-`:""}
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Ds(){const e=Ps.edgeRules("scroll-p","","scroll-padding",""),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[!1,!0].map(n=>`
            <util>
              scroll-p-
              ${n?`${ct({axis:!0,edges:!0})}-`:""}
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Us(){const e=[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],t=`
    <page>
      <h1><title /></h1>
      <p><code>snap-x</code> and <code>snap-y</code> have been removed because they have no logical counterparts yet.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>snap-none</util>
          <util>snap-both</util>
          <util>snap-mandatory</util>
          <util>snap-proximity</util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}function Hs(){const e=[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],t=`
    <page>
      <h1><title /></h1>
      <p><code>pan</code> touch-actions have been removed because they have no logical counterparts yet.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>touch-auto</util>
          <util>touch-none</util>
          <util>touch-pinch-zoom</util>
          <util>touch-manipulation</util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{size:xh}=Q;function Is(){const e=[xh.rule("stroke","stroke-width")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            stroke-
            <select>
              <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                <option value="$name" />
              </for>
            </select>
          </util>
        </utils>

        <renderer html="${S(`
          TODO
        `)}" />

        <h3>Preview</h3>
        <viewport />

        <h3>HTML</h3>
        <html />

        <h3>Generated CSS</h3>
        <css />
      </try-it>
    </page>
  `;return{rules:e,docs:t}}const{logical:Je,size:q}=Q,kh=[...Ui().rules,...Hi().rules,[/^(columns)-(.+)$/,(e,{theme:t})=>{const n=e[2].split(","),r=q.resolve(n[0],t,"rem"),o=n[1];return{columns:[r,o].join(" ")}}],...Ii().rules,...Wi().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...Ni().rules,...Object.keys(Je.abbreviations.inlineEdges).map(e=>[`float-${e}`,{float:Je.abbreviations.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(Je.abbreviations.inlineEdges).map(e=>[`clear-${e}`,{clear:Je.abbreviations.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...Bi().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>Je.axisRules("overflow",e,"overflow","",(t,n)=>[t,{[n]:e}])),...["auto","contain","none"].flatMap(e=>Je.axisRules("overscroll",e,"overscroll-behavior","",(t,n)=>[t,{[n]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...q.edgeRules("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e.replace("invisible","hidden")}]),[/^z-(.+)$/,e=>({"z-index":e[2]})],q.rule("basis","flex-basis"),...q.edgeRules("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[/^(order)-(.+)$/,e=>({order:e[2]})],["order-none",{order:"0"}],...$h,...Yi().rules,...Ki().rules,...Ji().rules,...Zi().rules,...qi().rules,...Xi().rules,q.rule("gap","gap"),q.rule("gap-col","column-gap"),q.rule("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-self-auto",{"place-self":"auto"}],["place-self-start",{"place-self":"start"}],["place-self-end",{"place-self":"end"}],["place-self-center",{"place-self":"center"}],["place-self-stretch",{"place-self":"stretch"}],...es().rules,...ts().rules,...ns().rules,...rs().rules,...os().rules,...ss().rules,...ls().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...as().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...cs().rules,...us().rules,...ds().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...fs().rules,...hs().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...gs().rules,...ms().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],q.rule("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],q.rule("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],...ph,...ps().rules,[/^(border)$/,()=>({"border-style":"solid","border-width":"1px"})],...bs().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...ys().rules,...vs().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...$s().rules,...ws().rules,...xs().rules,...ks().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],q.rule("blur","filter",{postprocess:e=>`blur(${e})`}),q.rule("brightness","filter",{postprocess:e=>`brightness(${e})`}),q.rule("contrast","filter",{postprocess:e=>`contrast(${e})`}),...Ss().rules,q.rule("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),q.rule("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("invert","filter",{postprocess:e=>`invert(${e})`}),q.rule("saturate","filter",{postprocess:e=>`saturate(${e})`}),q.rule("sepia","filter",{postprocess:e=>`sepia(${e})`}),q.rule("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),q.rule("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),q.rule("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),q.rule("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),q.rule("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),q.rule("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),q.rule("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),q.rule("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],..._s().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:{windblade:t}})=>t&&{transition:"all","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-colors)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-opacity)$/,(e,{theme:{windblade:t}})=>t&&{transition:"opacity","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-shadow)$/,(e,{theme:{windblade:t}})=>t&&{transition:"box-shadow","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-transform)$/,(e,{theme:{windblade:t}})=>t&&{transition:"transform","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],...Cs().rules,...js().rules,...Ts().rules,...zs().rules,...Os().rules,...Ms().rules,...Ls().rules,...As().rules,...Es().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...Rs().rules,...Ds().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...Us().rules,...Hs().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...Is().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],Sh=kh,_h=[{getCSS:()=>`
      * {
        padding: 0;
        margin: 0;

        color: inherit;
        background: none;
        border: none;
        font: inherit;
        line-height: 1;

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
    `}],Ch=_h,jh=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
});`,Th=`import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';
import presetVariants from 'unocss-preset-mini-variants';

export default defineConfig({
  presets: [
    presetWindblade(),
    presetVariants(),
  ],
});`,zh=`import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});`,Oh=`
  <page>
    <h1><title /></h1>
    <p>Windblade is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset" />
    <pre lang="ts" code="${S(jh)}" />

    <h2>Recommended additions</h2>
    <p>Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.</p>

    <h3>Getting hover, active, etc.</h3>
    <p>Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.</p>
    <pre lang="sh" code="npm install unocss-preset-mini-variants" />
    <pre lang="ts" code="${S(Th)}" />

    <h3>Getting @apply</h3>
    <p>UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.</p>
    <pre lang="sh" code="npm install -D @unocss/transformer-directives" />
    <pre lang="ts" code="${S(zh)}" />
  </page>
`,Ws=Oh,xe={block:"bg-surface p-s transition text-center rounded-s.4"},Mh=`
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${xe.block}">ss</div>
  <div class="${xe.block}">bs</div>
  <div class="${xe.block}">se</div>

  <div class="${xe.block}">is</div>
  <div class="${xe.block}">center</div>
  <div class="${xe.block}">ie</div>

  <div class="${xe.block}">es</div>
  <div class="${xe.block}">be</div>
  <div class="${xe.block}">ee</div>
</div>`,Lh=`
  <page>
    <h1>Using logical properties</h1>
    <p>Windblade uses logical properties and values only.</p>

    <p>All properties that can be customized on multiple axis/edges/corenrs can be prepended with:</p>
    <ul>
      <li><code>-b</code> for block axis (e.g. <code>size-b</code>).</li>
      <li><code>-i</code> for inline axis (e.g. <code>size-i</code>).</li>
      <li><code>-bs</code> and <code>-be</code> for block start and end edges.</li>
      <li><code>-is</code> and <code>-ie</code> for inline start and end edges.</li>
      <li><code>-ss</code> <code>-se</code> <code>-es</code> <code>-ee</code> for corners (start start, start end, end start &amp; end end).</li>
    </ul>

    <example html="${S(Mh)}" />

    <p>Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. <code>background-position</code> with <code>bg-{corner}</code> utility).</p>
    <p>If you are new to logical properties try playing with <code>bg-gradient-to-{edge/corner}</code> and see which way the gradient goes.</p>
    <p>Please note that <code>width</code> and <code>height</code> are completely removed in favor of <code>size-{axis}</code>.</p>
  </page>
`,Ns=Lh,Ah=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});`,Eh=`
  <page>
    <h1><title /></h1>
    <p>At the moment Windblade only exposes one option which configures which theme preset is used.</p>
    <p>To specify which preset to use define the <code>theme</code> value in the preset options:</p>
    <pre lang="ts" code="${S(Ah)}" />

    <p>The following themes are available:</p>
    <ul>
      ${Object.keys(Sr).map(e=>`<li><code>${e}</code></li>`).join("")}
    </ul>

    <p><small>Please note that the <code>material3</code> theme is not finished and is almost unusable at the moment.</small></p>
  </page>
`,Bs=Eh,Ph=`
  <page>
    <h1>Hover, focus and other states</h1>
    <p>Windblade does not come with functionality like hover or focus states. Please use Windblade together with <a href="https://www.npmjs.com/package/unocss-preset-mini-variants">unocss-preset-mini-variants</a> or other variant implementations if you need this functionality.</p>
  </page>
`,Gs=Ph,Fs=Mr,Vs=Or,ir=new Map([["Installation",Ws],["Options",Bs],["Semantic colors",Vs],["Logical properties",Ns],["$ syntax",Fs],["Hover, focus and other states",Gs]]),Rh=Object.freeze(Object.defineProperty({__proto__:null,categoy:ir,default:ir,dollarSyntax:Fs,installation:Ws,logicalProperties:Ns,options:Bs,semanticColors:Vs,variants:Gs},Symbol.toStringTag,{value:"Module"})),Un=Sr.windblade.windblade,Oe={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Dh=`
const theme: Theme = {
  windblade: {
    proportions: {
      'half': 0.5,
      'full': 1,
      'double': 2,
    },
  },
};`,Uh=`
  <page>
    <h1><title /></h1>
    <p>Proportions are used throughout the whole preset for size, duration, opacity, etc.</p>
    <p>Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.</p>

    <h2>Default proportions</h2>
    <p>By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.</p>
    <example html="${S(`
      <table class="border-collapse">
        <tr class="${Oe.tr}">
          <th class="${Oe.th}">Name</th>
          <th class="${Oe.th}">Value</th>
          <th class="${Oe.th}"></th>
        </tr>
        ${(()=>{const e=Un==null?void 0:Un.proportions;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
              <tr class="${Oe.tr}">
                <td class="${Oe.td} font-semibold">${t}</td>
                <td class="${Oe.td} text-fg-4">${n}</td>
                <td class="${Oe.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
              </tr>
            `).join(""):""})()}
      </table>
    `)}" />

    <h2>Custom proportions</h2>
    <p>Add custom proportions by adding numbers like the following:</p>
    <pre lang="ts" code="${S(Dh)}" />

    <p>Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.</p>
  </page>
`,Hh=Uh,Ih=`
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
  };
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
`,Wh=`
  <page>
    <h1>Other theme objects</h1>
    <p>See the theme type below for other values you can customize.</p>

    <h2>Theme type</h2>
    <pre lang="ts" code="${S(Ih)}" />
  </page>
`,Nh=Wh,qs=zr,sr=new Map([["Semantic Colors",qs],["Proportions",Hh],["Other",Nh]]),Bh=Object.freeze(Object.defineProperty({__proto__:null,categoy:sr,colors:qs,default:sr},Symbol.toStringTag,{value:"Module"})),Xs=new Map([["Layout",new Map([["Aspect Ratio",Ui().docs],["Container",Hi().docs],["Break After",Ii().docs],["Break Before",Wi().docs],["Disaply",Ni().docs],["Object Position",Bi().docs]])],["Flexbox & Grid",new Map([["Grid Auto Columns",qi().docs],["Grid Auto Rows",Xi().docs],["Grid Fit Columns",Yi().docs],["Grid Fit Rows",Ji().docs],["Grid Fill Clumns",Ki().docs],["Grid Fill Rows",Zi().docs]])],["Spacing",new Map([["Padding",es().docs],["Margin",ts().docs],["Space between",ns().docs]])],["Sizing",new Map([["Width & Height",rs().docs],["Size",os().docs],["Min-Size",ss().docs],["Max-Size",ls().docs]])],["Background",new Map([["Color",pn().docs],["Background Position",as().docs]])],["Typography",new Map([["Font Family",cs().docs],["Font Size",us().docs],["Font Smoothing",ds().docs],["Letter Spacing",fs().docs],["Line Height",hs().docs],["Text Color",wn().docs],["Text Decoration Color",xn().docs],["Text Decoration Thickness",gs().docs],["Text Underline Offset",ms().docs]])],["Borders",new Map([["Border Radius",ps().docs],["Border Width",bs().docs],["Border Color",bn().docs],["Outline Width",vs().docs],["Outline Offset",$s().docs],["Outline Color",vn().docs],["Divide",ys().docs],["Ring",ws().docs]])],["Effects",new Map([["Box Shadow",xs().docs],["Opacity",ks().docs]])],["Filters",new Map([["Drop Shadow",Ss().docs]])],["Tables",new Map([["Border spacing",_s().docs]])],["Transitions & Animation",new Map([["Transition Delay & Duration",Cs().docs],["Transition Timing Function",js().docs],["Animations",Ts().docs],["Animation Delay & Duration",zs().docs],["Animation Timing Function",Os().docs]])],["Transforms",new Map([["Scale",Ms().docs],["Rotate",Ls().docs],["Translate",As().docs],["Skew",Es().docs]])],["Interactivity",new Map([["Scroll margin",Rs().docs],["Scroll padding",Ds().docs],["Scroll snap type",Us().docs],["Touch action",Hs().docs]])],["SVG",new Map([["Fill",$n().docs],["Stroke Color",yn().docs],["Stroke Width",Is().docs]])],["Accessibility",new Map([["Color Scheme",kn().docs]])]]),Gh=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Fh=new Map([["Usage",ir],["Theme",sr],...Xs]),Vh=Object.freeze(Object.defineProperty({__proto__:null,default:Fh,rules:Gh,theme:Bh,usage:Rh},Symbol.toStringTag,{value:"Module"}));function Ys(e={}){e.theme=e.theme??"windblade";const t=Pi(),n=Di();return{name:"@windblade/unocss-preset",theme:Ce(_d,mn,Sr[e.theme]),rules:[...t.rules??[],...n.rules??[],...Sh],variants:[...t.variants??[],...n.variants??[]],options:{...t.options,...n.options,...e},postprocess:[],preflights:[...t.preflights??[],...n.preflights??[],...Ch],prefix:void 0,shortcuts:[]}}const qh=Object.freeze(Object.defineProperty({__proto__:null,default:Ys,docs:Vh},Symbol.toStringTag,{value:"Module"})),tn=we(()=>$d({presets:[Ys()],safelist:["scheme-dark-276","scheme-light-296"]})),Xh=x('<div class="bg-surface rounded-s p-s flex gap-s text-fg-3"><div class="i-mdi-exclamation"></div>Please select a utility first'),_o=x("<pre>"),{formatter:Co,highlighter:jo}=He,Ar=fe(),To={pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"},Hn=()=>Xh(),Yh=e=>{const t=ie(Ar);if(e.type==="element")switch(e.name){case"utils":return d(Vu,e);case"renderer":return null;case"viewport":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},get children(){return d(bi,{get html(){return(t==null?void 0:t.html())??""},get css(){var n;return((n=t==null?void 0:t.css())==null?void 0:n.fullCss)??""},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;"})}});case"html":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},keyed:!0,children:({util:n})=>(()=>{const r=_o();return L(o=>{var l,a;const i=To.pre,s=(a=jo())==null?void 0:a.highlight(((l=Co())==null?void 0:l.html_beautify((t==null?void 0:t.html())??""))??"",{language:"xml"}).value.replaceAll(n,`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${n}</span>`);return i!==o._v$&&j(r,o._v$=i),s!==o._v$2&&(r.innerHTML=o._v$2=s),o},{_v$:void 0,_v$2:void 0}),r})()});case"css":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},get children(){const n=_o();return L(r=>{var s,l,a;const o=`${To.pre} css`,i=(a=jo())==null?void 0:a.highlight(((l=Co())==null?void 0:l.css_beautify(((s=t==null?void 0:t.css())==null?void 0:s.shortCss)??""))??"",{language:"css"}).value;return o!==r._v$3&&j(n,r._v$3=o),i!==r._v$4&&(n.innerHTML=r._v$4=i),r},{_v$3:void 0,_v$4:void 0}),n}})}},Kh=e=>{const[t,n]=P(),[r,o]=P(""),[i,s]=P();te(async()=>{var f;const c=(await tn.generate(((f=t())==null?void 0:f.util)??"",{safelist:!1,preflights:!1,minify:!0})).css,u=(await tn.generate(r())).css;s({shortCss:c,fullCss:u})});const l=()=>e.children.map(c=>c.type!=="element"||c.name!=="renderer"||!c.attributes||!c.attributes.html?null:[new RegExp(c.attributes.for??""),c.attributes.html]).filter(Boolean),a=c=>{n(c);for(let u=0;u<l().length;++u){const[f,h]=l()[u];if(f.test(c.renderer)){o(h.replaceAll("$util",c.util));return}}};return d(Ar.Provider,{value:{selectUtil:a,selected:t,html:r,css:i},get children(){return d(lt.Provider,{get value(){return St([Yh])},get children(){return d(se,e)}})}})};function zo(e){let t=tn.config;return e.split(".").forEach(n=>t=t[n]),t}const Jh=e=>{const t=ie(ht),n="'for' requires an 'array' or 'object' attribute",r="'for' requires a 'value-as' attribute",o="'for' with an 'object' attribute requires a 'key-as' attribute",i=e.attributes;if(!i)return d(oe,{children:n});if(i.array)return i.as?d(vt,{get each(){return zo(qn(i.array))},children:s=>d(ht.Provider,{get value(){return{...t,value:s}},get children(){return d(se,e)}})}):d(oe,{children:r});if(i.object){const s=i["value-as"];if(!s)return d(oe,{children:r});const l=i["key-as"];return l?d(vt,{get each(){return Object.entries(zo(qn(i.object))??{})},children:([a,c])=>d(ht.Provider,{get value(){return{...t,[l]:a,[s]:`${c}`}},get children(){return d(se,e)}})}):d(oe,{children:o})}return d(oe,{children:n})},Zh=e=>{const t=ie(ht);return`${t==null?void 0:t[e.var]}`},Qh=e=>{const[t,n]=P("");return te(async()=>{n((await tn.generate(e.html)).css)}),d(bi,{get html(){return e.html},get css(){return t()}})},Oo=x("<pre>"),{highlighter:eg}=He,tg=e=>{var r;const t=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${e.lang??""}`;if(!e.lang)return(()=>{const o=Oo();return j(o,t),_(o,()=>e.value),o})();let n=e.value;try{n=((r=eg())==null?void 0:r.highlight(e.value,{language:e.lang}).value)??""}catch(o){return d(oe,{get children(){return["Failed highlighting code. ",R(()=>o.message)]}})}return(()=>{const o=Oo();return j(o,t),o.innerHTML=n,o})()},ng=x('<h2 class="text-fg-1 font-bold text-m.2">'),rg=x('<h3 class="font-bold text-$($s+$s.2)">'),og=x('<h4 class="font-bold">'),ig=x('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]">'),sg=x('<small class="text-fg-4">'),lg=x('<a class="text-accent transition hover:highlight active:highlight+">'),ag=x('<ul class="p-is-s flex flex-col gap-s.4">'),cg=x('<li class="text-fg-3 font-semibold leading-$($s+$s.2)">'),ug=x('<code class="bg-surface p-i-s.4 rounded-s.4">'),dg=e=>{const t=ie(Ks);switch(e.type){case"text":return e.value;case"element":switch(e.name){case"h1":return(()=>{const n=ng();return _(n,d(se,e)),n})();case"h2":return(()=>{const n=rg();return _(n,d(se,e)),n})();case"h3":return(()=>{const n=og();return _(n,d(se,e)),n})();case"title":return(t==null?void 0:t.title)??d(oe,{children:"No title"});case"p":return(()=>{const n=ig();return _(n,d(se,e)),n})();case"small":return(()=>{const n=sg();return _(n,d(se,e)),n})();case"a":return(()=>{const n=lg();return _(n,d(se,e)),L(()=>{var r;return pe(n,"href",((r=e.attributes)==null?void 0:r.href)??"#")}),n})();case"ul":return(()=>{const n=ag();return _(n,d(se,e)),n})();case"li":return(()=>{const n=cg();return _(n,d(se,e)),n})();case"code":return(()=>{const n=ug();return _(n,d(se,e)),n})();case"pre":return d(tg,{get lang(){var n;return((n=e.attributes)==null?void 0:n.lang)??"txt"},get value(){var n;return((n=e.attributes)==null?void 0:n.code)??""}});case"example":return d(Qh,{get html(){var n;return((n=e.attributes)==null?void 0:n.html)??""}});case"try-it":return d(Kh,e);case"for":return d(Jh,e);case"sample":return d(Y,{get when(){var n;return(n=e.attributes)==null?void 0:n.var},keyed:!0,children:n=>d(Zh,{var:n})});default:return d(oe,{get children(){return["Unsupported XML element: ",R(()=>e.name)]}})}default:return d(oe,{get children(){return["Unsupported XML node type: ",R(()=>e.type)]}})}},fg=e=>d(lt.Provider,{get value(){return St([dg])},get children(){return d(se,e)}}),Ks=fe(),hg=e=>d(Ks.Provider,{get value(){return{title:e.title}},get children(){return d(vt,{get each(){return e.children},children:t=>{switch(t.type){case"element":switch(t.name){case"page":return d(fg,t)}}return d(oe,{children:"Only 'page' tag is recognized as the page root"})}})}}),gg=e=>d(Fe,{class:"p-m.2 [&>*]:m-be-s",get children(){return d(pl,{fallback:"Loading...",get children(){return(()=>{const t=He.xml();if(!t)return"Error: Failed to load XML parser";let n;try{n=t.fromXml(e.page)}catch(r){return d(oe,{get children(){return["Error parsing this page: ",r]}})}return n?d(hg,re(n,{get title(){return e.title}})):d(oe,{children:"Error processing this page"})})()}})}});function Js(e,t,n=0){const r=t[n];if(!r)return e;const o=e.get(decodeURIComponent(r));return o instanceof Map?Js(o,t,++n):o}const mg=()=>{const e=wt(),t=st.getCachedModuleById(e.moduleId),n=()=>t.success,r=()=>decodeURIComponent(e.l6??e.l5??e.l4??e.l3??e.l2??e.l1),o=()=>Js(t.value.docs,[e.l1,e.l2,e.l3,e.l4,e.l5,e.l6]);return d(Y,{get when(){return n()},get fallback(){return d(Fe,{children:"Error"})},get children(){return d(Y,{get when(){return typeof o()=="string"},get fallback(){return d(Fe,{children:"Not a page"})},get children(){return d(gg,{get page(){return o()},get title(){return r()}})}})}})},pg=x('<div class="i-mdi-brightness-4 transition">'),bg=x('<div class="absolute i-mdi-brightness-7 transition">'),vg=x('<div class="absolute i-mdi-brightness-2 transition">'),$g=x('<div class="i-simple-icons-github">'),Mo=x('<img alt="Logo" class="size-b-m.2">'),yg=x('<div class="size-b-full grid" style="grid-template-rows:auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex items-center"><h1 class="font-bold text-fg-1 "></h1><div class="flex-1 flex justify-end"><div>'),wg=x('<div class="i-mdi-dots-vertical">'),xg=x('<div style="z-index:1">'),kg=()=>{const[e,t]=P(0),[n,r]=P(0),[o,i]=P(!1);let s,l;const a=()=>[d(Ne,{href:"/",children:"Home"}),d(Ne,{href:"/docs",children:"Docs"}),d(Le,{get onClick(){return Se.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const f=pg();return L(h=>Me(f,`opacity: ${Se.enforceScheme()===void 0?1:0}`,h)),f})(),(()=>{const f=bg();return L(h=>Me(f,`opacity: ${Se.enforceScheme()==="light"?1:0}`,h)),f})(),(()=>{const f=vg();return L(h=>Me(f,`opacity: ${Se.enforceScheme()==="dark"?1:0}`,h)),f})()]}}),d(li,{href:"https://github.com/StarLederer/windblade",get children(){return $g()}})],c=new ResizeObserver(([f])=>{t(f.borderBoxSize[0].inlineSize)}),u=new ResizeObserver(([f])=>{r(f.borderBoxSize[0].inlineSize)});return te(async()=>{c.disconnect(),s&&c.observe(s)}),te(async()=>{o(),u.disconnect(),l&&u.observe(l)}),te(()=>{i(e()>=n()*1.2)}),(()=>{const f=yg(),h=f.firstChild,y=h.firstChild,b=y.nextSibling,g=b.firstChild;_(y,d(Ne,{style:"none",href:"/",class:"flex gap-s.4 items-center -m-i-s.4 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4",get children(){return[d(Y,{get when(){return Se.scheme()==="dark"},get fallback(){return(()=>{const w=Mo();return pe(w,"src",Ba),w})()},get children(){const w=Mo();return pe(w,"src",Na),w}}),"Windblade"]}}));const C=s;typeof C=="function"?et(C,b):s=b;const T=l;return typeof T=="function"?et(T,g):l=g,_(g,a),_(b,d(Ha,{defaultOpen:!1,get class(){return`${o()?"hidden":""}`},children:({isOpen:w})=>[d(dn,{style:"half",class:"rounded-full p-s",as:$=>d(Ia,$),get children(){return wg()}}),d(Wa,{unmount:!1,class:"relative",get children(){const $=xg();return _($,a),L(()=>j($,`flex flex-col gap-s.2 absolute inset-ie-0 inset-bs-0 bg-surface rounded-s m-b-s.8 p-s.2 border border-color-surface animation-duration-s animation-ease-linear backdrop-blur-s delay-m.2 ${w()?"delay-zero animate-in":"animate-out invisible"}`)),$}})]}),null),_(f,d(br,{}),null),L(w=>{const $=`flex gap-s.4 ${o()?"":"invisible fixed"}`,m=!o();return $!==w._v$&&j(g,w._v$=$),m!==w._v$2&&pe(g,"aria-hidden",w._v$2=m),w},{_v$:void 0,_v$2:void 0}),f})()},Sg=()=>d(aa,{get source(){return jc()},get children(){return d(ca,{get children(){return d(De,{path:"/",component:kg,get children(){return[d(De,{path:"/",component:Jc}),d(De,{path:"/docs",get element(){return d(br,{})},get children(){return[d(De,{path:"/",component:eu}),d(De,{path:"/:moduleId",get element(){return d(Xr,{when:e=>e.moduleId,component:zu})},get children(){return[d(De,{path:"/*",component:Au}),d(De,{path:"/:l1/:l2?/:l3?/:l4?/:l5?/:l6?",get element(){return d(Xr,{when:e=>Object.values(e),component:mg})}})]}})]}})]}})}})}}),_g=x("<div>"),Cg=()=>{st.fetchIndex();const e=()=>`scheme-${Se.scheme()}-${Se.hue()}`;return(()=>{const t=_g();return _(t,d(Sg,{})),L(()=>j(t,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden animate-in animation-duration-m.4`)),t})()};jl(()=>d(Cg,{}),document.body);
