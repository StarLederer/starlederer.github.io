(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const N={context:void 0,registry:void 0};function ft(e){N.context=e}const el=(e,t)=>e===t,Wt=Symbol("solid-proxy"),tl=Symbol("solid-track"),nl=Symbol("solid-dev-component"),Nt={equals:el};let Lo=Uo;const be=1,bt=2,Ao={owned:null,cleanups:null,context:null,owner:null},jn={};var U=null;let S=null,F=null,ae=null,le=null,nn=0;const[rl,Ir]=P(!1);function we(e,t){const n=F,r=U,o=e.length===0,s=o?Ao:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},i=o?e:()=>e(()=>ne(()=>Ee(s)));U=s,F=null;try{return ge(i,!0)}finally{F=n,U=r}}function P(e,t){t=t?Object.assign({},Nt,t):Nt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(S&&S.running&&S.sources.has(n)?o=o(n.tValue):o=o(n.value)),Do(n,o));return[Ro.bind(n),r]}function In(e,t,n){const r=rn(e,t,!0,be);ot(r)}function L(e,t,n){const r=rn(e,t,!1,be);ot(r)}function te(e,t,n){Lo=cl;const r=rn(e,t,!1,be),o=Ge&&on(U,Ge.id);o&&(r.suspense=o),(!n||!n.render)&&(r.user=!0),le?le.push(r):ot(r)}function R(e,t,n){n=n?Object.assign({},Nt,n):Nt;const r=rn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ot(r),Ro.bind(r)}function Dt(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let i=null,l=jn,a=null,u=!1,c=!1,f="initialValue"in s,h=typeof r=="function"&&R(r);const y=new Set,[b,g]=(s.storage||P)(s.initialValue),[C,T]=P(void 0),[w,$]=P(void 0,{equals:!1}),[m,z]=P(f?"ready":"unresolved");if(N.context){a=`${N.context.id}${N.context.count++}`;let p;s.ssrLoadFrom==="initial"?l=s.initialValue:N.load&&(p=N.load(a))&&(l=p[0])}function v(p,O,A,I){return i===p&&(i=null,I!==void 0&&(f=!0),(p===l||O===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(I,{value:O})),l=jn,S&&p&&u?(S.promises.delete(p),u=!1,ge(()=>{S.running=!0,M(O,A)},!1)):M(O,A)),O}function M(p,O){ge(()=>{O===void 0&&g(()=>p),z(O!==void 0?"errored":f?"ready":"unresolved"),T(O);for(const A of y.keys())A.decrement();y.clear()},!1)}function B(){const p=Ge&&on(U,Ge.id),O=b(),A=C();if(A!==void 0&&!i)throw A;return F&&!F.user&&p&&In(()=>{w(),i&&(p.resolved&&S&&u?S.promises.add(i):y.has(p)||(p.increment(),y.add(p)))}),O}function E(p=!0){if(p!==!1&&c)return;c=!1;const O=h?h():r;if(u=S&&S.running,O==null||O===!1){v(i,ne(b));return}S&&i&&S.promises.delete(i);const A=l!==jn?l:ne(()=>o(O,{value:b(),refetching:p}));return typeof A!="object"||!(A&&"then"in A)?(v(i,A,void 0,O),A):(i=A,c=!0,queueMicrotask(()=>c=!1),ge(()=>{z(f?"refreshing":"pending"),$()},!1),A.then(I=>v(A,I,void 0,O),I=>v(A,void 0,Wo(I),O)))}return Object.defineProperties(B,{state:{get:()=>m()},error:{get:()=>C()},loading:{get(){const p=m();return p==="pending"||p==="refreshing"}},latest:{get(){if(!f)return B();const p=C();if(p&&!i)throw p;return b()}}}),h?In(()=>E(!1)):E(!1),[B,{refetch:E,mutate:g}]}function Wn(e){return ge(e,!1)}function ne(e){if(F===null)return e();const t=F;F=null;try{return e()}finally{F=t}}function lr(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(s){s=!1;return}const a=ne(()=>t(l,o,i));return o=l,a}}function ve(e){return U===null||(U.cleanups===null?U.cleanups=[e]:U.cleanups.push(e)),e}function Eo(){return U}function ol(e,t){const n=U,r=F;U=e,F=null;try{return ge(t,!0)}catch(o){cr(o)}finally{U=n,F=r}}function Po(e){if(S&&S.running)return e(),S.done;const t=F,n=U;return Promise.resolve().then(()=>{F=t,U=n;let r;return Ge&&(r=S||(S={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),ge(e,!1),F=U=null,r?r.done:void 0})}function sl(){return[rl,Po]}function il(e){le.push.apply(le,e),e.length=0}function fe(e,t){const n=Symbol("context");return{id:n,Provider:ul(n),defaultValue:e}}function se(e){let t;return(t=on(U,e.id))!==void 0?t:e.defaultValue}function ar(e){const t=R(e),n=R(()=>Nn(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ge;function ll(){return Ge||(Ge=fe({}))}function Ro(){const e=S&&S.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===be)ot(this);else{const t=ae;ae=null,ge(()=>Gt(this),!1),ae=t}if(F){const t=this.observers?this.observers.length:0;F.sources?(F.sources.push(this),F.sourceSlots.push(t)):(F.sources=[this],F.sourceSlots=[t]),this.observers?(this.observers.push(F),this.observerSlots.push(F.sources.length-1)):(this.observers=[F],this.observerSlots=[F.sources.length-1])}return e&&S.sources.has(this)?this.tValue:this.value}function Do(e,t,n){let r=S&&S.running&&S.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(S){const o=S.running;(o||!n&&S.sources.has(e))&&(S.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&ge(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=S&&S.running;i&&S.disposed.has(s)||((i?!s.tState:!s.state)&&(s.pure?ae.push(s):le.push(s),s.observers&&Ho(s)),i?s.tState=be:s.state=be)}if(ae.length>1e6)throw ae=[],new Error},!1)}return t}function ot(e){if(!e.fn)return;Ee(e);const t=U,n=F,r=nn;F=U=e,Wr(e,S&&S.running&&S.sources.has(e)?e.tValue:e.value,r),S&&!S.running&&S.sources.has(e)&&queueMicrotask(()=>{ge(()=>{S&&(S.running=!0),F=U=e,Wr(e,e.tValue,r),F=U=null},!1)}),F=n,U=t}function Wr(e,t,n){let r;try{r=e.fn(t)}catch(o){return e.pure&&(S&&S.running?(e.tState=be,e.tOwned&&e.tOwned.forEach(Ee),e.tOwned=void 0):(e.state=be,e.owned&&e.owned.forEach(Ee),e.owned=null)),e.updatedAt=n+1,cr(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Do(e,r,!0):S&&S.running&&e.pure?(S.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function rn(e,t,n,r=be,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:U,context:null,pure:n};return S&&S.running&&(s.state=0,s.tState=r),U===null||U!==Ao&&(S&&S.running&&U.pure?U.tOwned?U.tOwned.push(s):U.tOwned=[s]:U.owned?U.owned.push(s):U.owned=[s]),s}function Bt(e){const t=S&&S.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===bt)return Gt(e);if(e.suspense&&ne(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<nn);){if(t&&S.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,s=n[r+1];for(;(o=o.owner)&&o!==s;)if(S.disposed.has(o))return}if((t?e.tState:e.state)===be)ot(e);else if((t?e.tState:e.state)===bt){const o=ae;ae=null,ge(()=>Gt(e,n[0]),!1),ae=o}}}function ge(e,t){if(ae)return e();let n=!1;t||(ae=[]),le?n=!0:le=[],nn++;try{const r=e();return al(n),r}catch(r){n||(le=null),ae=null,cr(r)}}function al(e){if(ae&&(Uo(ae),ae=null),e)return;let t;if(S){if(!S.promises.size&&!S.queue.size){const r=S.sources,o=S.disposed;le.push.apply(le,S.effects),t=S.resolve;for(const s of le)"tState"in s&&(s.state=s.tState),delete s.tState;S=null,ge(()=>{for(const s of o)Ee(s);for(const s of r){if(s.value=s.tValue,s.owned)for(let i=0,l=s.owned.length;i<l;i++)Ee(s.owned[i]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}Ir(!1)},!1)}else if(S.running){S.running=!1,S.effects.push.apply(S.effects,le),le=null,Ir(!0);return}}const n=le;le=null,n.length&&ge(()=>Lo(n),!1),t&&t()}function Uo(e){for(let t=0;t<e.length;t++)Bt(e[t])}function cl(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Bt(r)}for(N.context&&ft(),t=0;t<n;t++)Bt(e[t])}function Gt(e,t){const n=S&&S.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const s=n?o.tState:o.state;s===be?o!==t&&(!o.updatedAt||o.updatedAt<nn)&&Bt(o):s===bt&&Gt(o,t)}}}function Ho(e){const t=S&&S.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=bt:r.state=bt,r.pure?ae.push(r):le.push(r),r.observers&&Ho(r))}}function Ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(S&&S.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Ee(e.tOwned[t]);delete e.tOwned}Io(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)Ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}S&&S.running?e.tState=0:e.state=0,e.context=null}function Io(e,t){if(t||(e.tState=0,S.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Io(e.owned[n])}function Wo(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function cr(e,t=U){throw Wo(e)}function on(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:on(e.owner,t):void 0}function Nn(e){if(typeof e=="function"&&!e.length)return Nn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Nn(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ul(e,t){return function(r){let o;return L(()=>o=ne(()=>(U.context={[e]:r.value},ar(()=>r.children))),void 0),o}}const dl=Symbol("fallback");function Nr(e){for(let t=0;t<e.length;t++)e[t]()}function fl(e,t,n={}){let r=[],o=[],s=[],i=0,l=t.length>1?[]:null;return ve(()=>Nr(s)),()=>{let a=e()||[],u,c;return a[tl],ne(()=>{let h=a.length,y,b,g,C,T,w,$,m,z;if(h===0)i!==0&&(Nr(s),s=[],r=[],o=[],i=0,l&&(l=[])),n.fallback&&(r=[dl],o[0]=we(v=>(s[0]=v,n.fallback())),i=1);else if(i===0){for(o=new Array(h),c=0;c<h;c++)r[c]=a[c],o[c]=we(f);i=h}else{for(g=new Array(h),C=new Array(h),l&&(T=new Array(h)),w=0,$=Math.min(i,h);w<$&&r[w]===a[w];w++);for($=i-1,m=h-1;$>=w&&m>=w&&r[$]===a[m];$--,m--)g[m]=o[$],C[m]=s[$],l&&(T[m]=l[$]);for(y=new Map,b=new Array(m+1),c=m;c>=w;c--)z=a[c],u=y.get(z),b[c]=u===void 0?-1:u,y.set(z,c);for(u=w;u<=$;u++)z=r[u],c=y.get(z),c!==void 0&&c!==-1?(g[c]=o[u],C[c]=s[u],l&&(T[c]=l[u]),c=b[c],y.set(z,c)):s[u]();for(c=w;c<h;c++)c in g?(o[c]=g[c],s[c]=C[c],l&&(l[c]=T[c],l[c](c))):o[c]=we(f);o=o.slice(0,i=h),r=a.slice(0)}return o});function f(h){if(s[c]=h,l){const[y,b]=P(c);return l[c]=b,t(a[c],y)}return t(a[c])}}}function d(e,t){return ne(()=>e(t||{}))}function Ct(){return!0}const Bn={get(e,t,n){return t===Wt?n:e.get(t)},has(e,t){return t===Wt?!0:e.has(t)},set:Ct,deleteProperty:Ct,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ct,deleteProperty:Ct}},ownKeys(e){return e.keys()}};function Tn(e){return(e=typeof e=="function"?e():e)?e:{}}function hl(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function re(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&Wt in i,e[s]=typeof i=="function"?(t=!0,R(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const l=Tn(e[i])[s];if(l!==void 0)return l}},has(s){for(let i=e.length-1;i>=0;i--)if(s in Tn(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(Tn(e[i])));return[...new Set(s)]}},Bn);const n={},r={},o=new Set;for(let s=e.length-1;s>=0;s--){const i=e[s];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let a=0,u=l.length;a<u;a++){const c=l[a];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,c);if(!o.has(c))f.get?(o.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:hl.bind(r[c]=[f.get.bind(i)])})):(f.value!==void 0&&o.add(c),n[c]=f.value);else{const h=r[c];h?f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value):n[c]===void 0&&(n[c]=f.value)}}}return n}function No(e,...t){if(Wt in e){const o=new Set(t.length>1?t.flat():t[0]),s=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Bn));return s.push(new Proxy({get(i){return o.has(i)?void 0:e[i]},has(i){return o.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!o.has(i))}},Bn)),s}const n={},r=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,o),i=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,a=0;for(const u of t)u.includes(o)&&(l=!0,i?r[a][o]=s.value:Object.defineProperty(r[a],o,s)),++a;l||(i?n[o]=s.value:Object.defineProperty(n,o,s))}return[...r,n]}let gl=0;function de(){const e=N.context;return e?`${e.id}${e.count++}`:`cl-${gl++}`}const ml=e=>`Stale read from <${e}>.`;function vt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return R(fl(()=>e.each,e.children,t||void 0))}function Y(e){const t=e.keyed,n=R(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return R(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?ne(()=>o(t?r:()=>{if(!ne(n))throw ml("Show");return e.when})):o}return e.fallback},void 0,void 0)}const pl=fe();function bl(e){let t=0,n,r,o,s,i;const[l,a]=P(!1),u=ll(),c={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:l,effects:[],resolved:!1},f=Eo();if(N.context&&N.load){const b=N.context.id+N.context.count;let g=N.load(b);if(g&&(o=g[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[C,T]=P(void 0,{equals:!1});s=C,o.then(w=>{if(w||N.done)return w&&(i=w),T();N.gather(b),ft(r),T(),ft()})}}const h=se(pl);h&&(n=h.register(c.inFallback));let y;return ve(()=>y&&y()),d(u.Provider,{value:c,get children(){return R(()=>{if(i)throw i;if(r=N.context,s)return s(),s=void 0;r&&o==="$$f"&&ft();const b=R(()=>e.children);return R(g=>{const C=c.inFallback(),{showContent:T=!0,showFallback:w=!0}=n?n():{};if((!C||o&&o!=="$$f")&&T)return c.resolved=!0,y&&y(),y=r=o=void 0,il(c.effects),b();if(w)return y?g:we($=>(y=$,r&&(ft({id:r.id+"f",count:0}),r=void 0),e.fallback),f)})})}})}const vl=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$l=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...vl]),yl=new Set(["innerHTML","textContent","innerText","children"]),wl=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),xl=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function kl(e,t){const n=xl[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Sl=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),_l=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Cl={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function jl(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,u=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const c=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],c)}else if(s===l)for(;i<o;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!u){u=new Map;let f=l;for(;f<s;)u.set(n[f],f++)}const c=u.get(t[i]);if(c!=null)if(l<c&&c<s){let f=i,h=1,y;for(;++f<o&&f<s&&!((y=u.get(t[f]))==null||y!==c+h);)h++;if(h>c-l){const b=t[i];for(;l<c;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Br="_$DX_DELEGATE";function Tl(e,t,n,r={}){let o;return we(s=>{o=s,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function x(e,t,n){let r;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},s=t?()=>ne(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function ur(e,t=window.document){const n=t[Br]||(t[Br]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,El))}}function pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function zl(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function j(e,t){t==null?e.removeAttribute("class"):e.className=t}function Bo(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n)}function Ol(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let s,i;for(s=0,i=o.length;s<i;s++){const l=o[s];!l||l==="undefined"||t[l]||(Gr(e,l,!1),delete n[l])}for(s=0,i=r.length;s<i;s++){const l=r[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Gr(e,l,!0),n[l]=a)}return n}function Me(e,t,n){if(!t)return n?pe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function dr(e,t={},n,r){const o={};return r||L(()=>o.children=tt(e,t.children,o.children)),L(()=>t.ref&&t.ref(e)),L(()=>Ml(e,t,n,!0,o,!0)),o}function et(e,t,n){return ne(()=>e(t,n))}function _(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return tt(e,t,r,n);L(o=>tt(e,t(),o,n),r)}function Ml(e,t,n,r,o={},s=!1){t||(t={});for(const i in o)if(!(i in t)){if(i==="children")continue;o[i]=Fr(e,i,null,o[i],n,s)}for(const i in t){if(i==="children"){r||tt(e,t.children);continue}const l=t[i];o[i]=Fr(e,i,l,o[i],n,s)}}function Ll(e){let t,n;if(!N.context||!(t=N.registry.get(n=Pl()))){if(N.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return N.completed&&N.completed.add(t),N.registry.delete(n),t}function Al(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Gr(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function Fr(e,t,n,r,o,s){let i,l,a,u,c;if(t==="style")return Me(e,n,r);if(t==="classList")return Ol(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),h=Sl.has(f);if(!h&&r){const y=Array.isArray(r)?r[0]:r;e.removeEventListener(f,y)}(h||n)&&(Bo(e,f,n,h),h&&ur([f]))}else if(t.slice(0,5)==="attr:")pe(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=yl.has(t))||!o&&((u=kl(t,e.tagName))||(l=$l.has(t)))||(i=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?j(e,n):i&&!l&&!a?e[Al(t)]=n:e[u||t]=n;else{const f=o&&t.indexOf(":")>-1&&Cl[t.split(":")[0]];f?zl(e,f,t,n):pe(e,wl[t]||t,n)}return n}function El(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),N.registry&&!N.done&&(N.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function tt(e,t,n,r,o){if(N.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(N.context)return n;if(s==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Xe(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(N.context)return n;n=Xe(e,n,r)}else{if(s==="function")return L(()=>{let l=t();for(;typeof l=="function";)l=l();n=tt(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Gn(l,t,n,o))return L(()=>n=tt(e,l,n,r,!0)),()=>n;if(N.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=Xe(e,n,r),i)return n}else a?n.length===0?Vr(e,l,r):jl(e,n,l):(n&&Xe(e),Vr(e,l));n=l}else if(t.nodeType){if(N.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=Xe(e,n,r,t);Xe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Gn(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[s],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))o=Gn(e,l,a)||o;else if(u==="function")if(r){for(;typeof l=="function";)l=l();o=Gn(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function Vr(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Xe(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}function Pl(){const e=N.context;return`${e.id}${e.count++}`}const Rl=!1,Dl="http://www.w3.org/2000/svg";function Ul(e,t=!1){return t?document.createElementNS(Dl,e):document.createElement(e)}function Hl(e){const[t,n]=No(e,["component"]),r=R(()=>t.component);return R(()=>{const o=r();switch(typeof o){case"function":return Object.assign(o,{[nl]:!0}),ne(()=>o(n));case"string":const s=_l.has(o),i=N.context?Ll():Ul(o,s);return dr(i,n,s),i}})}function Il(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Wl([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Nl(e){try{return document.querySelector(e)}catch{return null}}function Bl(e,t){const n=Nl(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Go(e,t,n,r){let o=!1;const s=l=>typeof l=="string"?{value:l}:l,i=Wl(P(s(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!o&&t(l),l));return n&&ve(n((l=e())=>{o=!0,i[1](s(l)),o=!1})),{signal:i,utils:r}}function Gl(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:P({value:""})};return e}function Fl(){return Go(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Bl(window.location.hash.slice(1),n)},e=>Il(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Vl(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,s)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const ql=/^(?:[a-z0-9]+:)?\/\//i,Xl=/^\/+|(\/)\/+$/g;function We(e,t=!1){const n=e.replace(Xl,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ut(e,t,n){if(ql.test(t))return;const r=We(e),o=n&&We(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+We(t,!s)}function Yl(e,t){if(e==null)throw new Error(t);return e}function Fo(e,t){return We(e).replace(/\/*(\*.*)?$/g,"")+We(t)}function Kl(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Jl(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),u=a.length-i;if(u<0||u>0&&o===void 0&&!t)return null;const c={path:i?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const y=s[h],b=a[h],g=y[0]===":",C=g?y.slice(1):y;if(g&&zn(b,f(C)))c.params[C]=b;else if(g||!zn(b,y))return null;c.path+=`/${b}`}if(o){const h=u?a.slice(-u).join("/"):"";if(zn(h,f(o)))c.params[o]=h;else return null}return c}}function zn(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Zl(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Vo(e){const t=new Map,n=Eo();return new Proxy({},{get(r,o){return t.has(o)||ol(n,()=>t.set(o,R(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function qo(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return qo(r).reduce((s,i)=>[...s,...o.map(l=>l+i)],[])}const Ql=100,Xo=fe(),sn=fe(),yt=()=>Yl(se(Xo),"Make sure your app is wrapped in a <Router />");let $t;const ln=()=>$t||se(sn)||yt().base,ea=e=>{const t=ln();return R(()=>t.resolvePath(e()))},ta=e=>{const t=yt();return R(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Yo=()=>yt().navigatorFactory(),Fn=()=>yt().location,wt=()=>ln().params;function na(e,t="",n){const{component:r,data:o,children:s}=e,i=!s||Array.isArray(s)&&!s.length,l={key:e,element:r?()=>d(r,{}):()=>{const{element:a}=e;return a===void 0&&n?d(n,{}):a},preload:e.component?r.preload:e.preload,data:o};return Ko(e.path).reduce((a,u)=>{for(const c of qo(u)){const f=Fo(t,c),h=i?f:f.split("/*",1)[0];a.push({...l,originalPath:c,pattern:h,matcher:Jl(h,!i,e.matchFilters)})}return a},[])}function ra(e,t=0){return{routes:e,score:Zl(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Ko(e){return Array.isArray(e)?e:[e]}function Jo(e,t="",n,r=[],o=[]){const s=Ko(e);for(let i=0,l=s.length;i<l;i++){const a=s[i];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=na(a,t,n);for(const c of u){r.push(c);const f=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!f)Jo(a.children,c.pattern,n,r,o);else{const h=ra([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((i,l)=>l.score-i.score)}function oa(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function sa(e,t){const n=new URL("http://sar"),r=R(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),o=R(()=>r().pathname),s=R(()=>r().search,!0),i=R(()=>r().hash),l=R(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Vo(lr(s,()=>Kl(r())))}}function ia(e,t="",n,r){const{signal:[o,s],utils:i={}}=Gl(e),l=i.parsePath||(E=>E),a=i.renderPath||(E=>E),u=i.beforeLeave||Vl(),c=Ut("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[h,y]=P(!1),b=async E=>{y(!0);try{await Po(E)}finally{y(!1)}},[g,C]=P(o().value),[T,w]=P(o().state),$=sa(g,T),m=[],z={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(E){return Ut(c,E)}};if(n)try{$t=z,z.data=n({data:void 0,params:{},location:$,navigate:M(z)})}finally{$t=void 0}function v(E,p,O){ne(()=>{if(typeof p=="number"){p&&(i.go?u.confirm(p,O)&&i.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:I,scroll:X,state:ee}={replace:!1,resolve:!0,scroll:!0,...O},K=I?E.resolvePath(p):Ut("",p);if(K===void 0)throw new Error(`Path '${p}' is not a routable path`);if(m.length>=Ql)throw new Error("Too many redirects");const J=g();if((K!==J||ee!==T())&&!Rl){if(u.confirm(K,O)){const Z=m.push({value:J,replace:A,scroll:X,state:T()});b(()=>{C(K),w(ee)}).then(()=>{m.length===Z&&B({value:K,state:ee})})}}})}function M(E){return E=E||se(sn)||z,(p,O)=>v(E,p,O)}function B(E){const p=m[0];p&&((E.value!==p.value||E.state!==p.state)&&s({...E,replace:p.replace,scroll:p.scroll}),m.length=0)}L(()=>{const{value:E,state:p}=o();ne(()=>{E!==g()&&b(()=>{C(E),w(p)})})});{let E=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const O=p.composedPath().find(J=>J instanceof Node&&J.nodeName.toUpperCase()==="A");if(!O||!O.hasAttribute("link"))return;const A=O.href;if(O.target||!A&&!O.hasAttribute("state"))return;const I=(O.getAttribute("rel")||"").split(/\s+/);if(O.hasAttribute("download")||I&&I.includes("external"))return;const X=new URL(A);if(X.origin!==window.location.origin||c&&X.pathname&&!X.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const ee=l(X.pathname+X.search+X.hash),K=O.getAttribute("state");p.preventDefault(),v(z,ee,{resolve:!1,replace:O.hasAttribute("replace"),scroll:!O.hasAttribute("noscroll"),state:K&&JSON.parse(K)})};ur(["click"]),document.addEventListener("click",E),ve(()=>document.removeEventListener("click",E))}return{base:z,out:f,location:$,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:M,beforeLeave:u}}function la(e,t,n,r,o){const{base:s,location:i,navigatorFactory:l}=e,{pattern:a,element:u,preload:c,data:f}=r().route,h=R(()=>r().path);c&&c();const y={parent:t,pattern:a,get child(){return n()},path:h,params:o,data:t.data,outlet:u,resolvePath(b){return Ut(s.path(),b,h())}};if(f)try{$t=y,y.data=f({data:t.data,params:o,location:i,navigate:l(y)})}finally{$t=void 0}return y}const aa=x("<a link>"),ca=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,i=t||Fl(),l=ia(i,r,o);return d(Xo.Provider,{value:l,get children(){return e.children}})},ua=e=>{const t=yt(),n=ln(),r=ar(()=>e.children),o=R(()=>Jo(r(),Fo(n.pattern,e.base||""),Zo)),s=R(()=>oa(o(),t.location.pathname)),i=Vo(()=>{const c=s(),f={};for(let h=0;h<c.length;h++)Object.assign(f,c[h].params);return f});t.out&&t.out.matches.push(s().map(({route:c,path:f,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:h})));const l=[];let a;const u=R(lr(s,(c,f,h)=>{let y=f&&c.length===f.length;const b=[];for(let g=0,C=c.length;g<C;g++){const T=f&&f[g],w=c[g];h&&T&&w.route.key===T.route.key?b[g]=h[g]:(y=!1,l[g]&&l[g](),we($=>{l[g]=$,b[g]=la(t,b[g-1]||n,()=>u()[g+1],()=>s()[g],i)}))}return l.splice(c.length).forEach(g=>g()),h&&y?h:(a=b[0],b)}));return d(Y,{get when(){return u()&&a},keyed:!0,children:c=>d(sn.Provider,{value:c,get children(){return c.outlet()}})})},De=e=>{const t=ar(()=>e.children);return re(e,{get children(){return t()}})},Zo=()=>{const e=ln();return d(Y,{get when(){return e.child},keyed:!0,children:t=>d(sn.Provider,{value:t,get children(){return t.outlet()}})})};function da(e){e=re({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=No(e,["href","state","class","activeClass","inactiveClass","end"]),n=ea(()=>e.href),r=ta(n),o=Fn(),s=R(()=>{const i=n();if(i===void 0)return!1;const l=We(i.split(/[?#]/,1)[0]).toLowerCase(),a=We(o.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const i=aa();return dr(i,re(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s(),[e.activeClass]:s(),...t.classList}},get["aria-current"](){return s()?"page":void 0}}),!1,!1),i})()}function je(e,t){let n={},r=Object.keys(e);for(let o=0,s=r.length;o<s;o+=1){let i=r[o];t.includes(i)||Object.defineProperty(n,i,{get(){return e[i]},configurable:!0,enumerable:!0})}return n}var Qo=fe();function xt(){let e=se(Qo);if(e)return e;throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.")}function fa(e){return typeof e=="function"&&e.length>0}function ha(e){let t=xt();return R(()=>{let n=e.children;return fa(n)?n(t):n})}function st(e){return{get children(){return d(ha,{get children(){return e.children}})}}}function ga(e){let t,n;if("defaultOpen"in e){let[r,o]=P(e.defaultOpen);t=r,n=s=>{Wn(()=>{var i;o(s),(i=e.onChange)==null||i.call(e,s)})}}else t=()=>e.isOpen,n=r=>{var o;return(o=e.onChange)==null?void 0:o.call(e,r)};return{isOpen(){return t()},setState(r){e.disabled||n(r)},disabled(){return!!e.disabled}}}function ma(e){return typeof e=="function"&&e.length>0}function an(e){let t=ga(e);return d(Qo.Provider,{value:t,get children(){return R(()=>{let n=e.children;return ma(n)?n(t):n})}})}function Re(e,t){return d(Hl,re({get component(){return e()}},t))}function pa(e){return typeof e=="function"}function kt(e,t){return n=>{"ref"in e&&pa(e.ref)&&e.ref(n),t(n)}}function cn(e){return{get disabled(){return e()},get"aria-disabled"(){return e()},get"data-sh-disabled"(){return e()}}}function ba(e){return{get"aria-expanded"(){return e()},get"data-sh-expanded"(){return e()}}}var va='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';function fr(e,t){let n=e.querySelectorAll(va),r=[];for(let o=0,s=n.length;o<s;o+=1)(!t||!t.contains(n[o]))&&r.push(n[o]);return r}function es(e){return!e.matches('[data-sh-disabled="true"]')}function ts(e,t,n){let r=t+n;for(;r>=0&&r<e.length;){if(es(e[r]))return e[r];r+=n}}function ns(e,t,n){let r=t+n;for(n===1&&r===e.length&&(r=0),n===-1&&r===-1&&(r=e.length-1);t!==r;){if(es(e[r]))return e[r];r+=n,n===1&&r>=e.length&&(r=0),n===-1&&r<0&&(r=e.length-1)}}function $a(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ns(e,r,1))==null||n.focus();break}}function ya(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ns(e,r,-1))==null||n.focus();break}}function hr(e){var t;return e.length?((t=ts(e,-1,1))==null||t.focus(),!0):!1}function wa(e){var t;return e.length?((t=ts(e,e.length,-1))==null||t.focus(),!0):!1}function rs(e,t){let n=fr(e);t?!document.activeElement||!e.contains(document.activeElement)?wa(n):ya(n,document.activeElement):!document.activeElement||!e.contains(document.activeElement)?hr(n):$a(n,document.activeElement)}var xa="data-sh";function qe(e){return{[xa]:e}}var ka=qe("button");function Sa(e){let[t,n]=P();return te(()=>{let r=t();if(r instanceof HTMLElement&&r.tagName!=="BUTTON"){let o=s=>{(s.key==="Enter"||s.key===" ")&&r.click()};r.addEventListener("keydown",o),ve(()=>{r.removeEventListener("keydown",o)})}}),Re(()=>{var r;return(r=e.as)!=null?r:"button"},re({get tabindex(){return e.disabled?-1:0},role:"button"},cn(()=>e.disabled),je(e,["as","ref"]),ka,{ref:kt(e,r=>{n(()=>r)})}))}function gr(e,t,n){return d(Y,{get when(){var r;return(r=e.unmount)!=null?r:!0},get fallback(){return n()},get children(){return d(Y,{get when(){return t()},get children(){return n()}})}})}function qr(){var e,t;return(t=(e=window.getSelection())==null?void 0:e.focusNode)==null?void 0:t.parentElement}function _a(e){if(e){let t=e.getAttribute("tabindex");e.setAttribute("tabindex","-1"),e.focus(),e.blur(),t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}var Ca=class{constructor(){typeof document<"u"&&(this.returnElement=document.activeElement,this.fsp=qr()),ve(()=>{this.load()})}load(){this.returnElement instanceof HTMLElement?this.returnElement.focus():_a(this.fsp)}save(){this.returnElement=document.activeElement,this.fsp=qr()}};function un(){return new Ca}var mr=fe();function os(e){let t=se(mr);if(t)return t;throw new Error(`<${e}> must be used inside a <Dialog>`)}var ss=qe("dialog"),ja=qe("dialog-overlay"),Ta=qe("dialog-panel");function za(e){let t=de(),n=de(),r=de(),o=de(),s=un();return d(mr.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(an,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(i){var l,a,u;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((u=e.onClose)==null||u.call(e),s.load())},children:({isOpen:i})=>gr(e,i,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","isOpen","disabled","onOpen","onClose","onChange"]),ss,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},st(e))))})}})}function Oa(e){let t=de(),n=de(),r=de(),o=de(),s=un();return d(mr.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(an,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(i){var l,a,u;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((u=e.onClose)==null||u.call(e),s.load())},children:({isOpen:i})=>gr(e,i,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","defaultOpen","disabled","onOpen","onClose","onChange"]),ss,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},st(e))))})}})}function Ma(e){return"defaultOpen"in e}function La(e){return Ma(e)?d(Oa,e):d(za,e)}function Aa(e){os("DialogOverlay");let t=xt(),[n,r]=P();return te(()=>{let o=n();if(o instanceof HTMLElement){let s=()=>{t.setState(!1)};o.addEventListener("click",s),ve(()=>{o.removeEventListener("click",s)})}}),Re(()=>{var o;return(o=e.as)!=null?o:"div"},re(je(e,["as","children","ref"]),ja,{ref:kt(e,o=>{r(()=>o)})},st(e)))}function Ea(e){let t=os("DialogPanel"),n=xt(),[r,o]=P();return te(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){hr(fr(s));let i=l=>{e.disabled||(l.key==="Tab"?(l.preventDefault(),rs(s,l.shiftKey)):l.key==="Escape"&&n.setState(!1))};s.addEventListener("keydown",i),ve(()=>{s.removeEventListener("keydown",i)})}}),Re(()=>{var s;return(s=e.as)!=null?s:"div"},re(je(e,["as","children","ref"]),Ta,{id:t.panelID,ref:kt(e,s=>{o(()=>s)})},st(e)))}var pr=fe();function is(e){let t=se(pr);if(t)return t;throw new Error(`<${e}> must be used inside a <Popover>`)}var ls=qe("popover"),Pa=qe("popover-button"),Ra=qe("popover-panel");function Da(e){let[t,n]=P(!1),r=de(),o=de(),s=de(),i=un();return d(pr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["isOpen","as","children","disabled","onChange"]),ls,cn(()=>e.disabled),{get children(){return d(an,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(l){var a,u,c;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(u=e.onChange)==null||u.call(e,l),l||((c=e.onClose)==null||c.call(e),i.load())},get children(){return e.children}})}}))}})}function Ua(e){let[t,n]=P(!1),r=de(),o=de(),s=de(),i=un();return d(pr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["defaultOpen","as","children","disabled","onChange"]),ls,cn(()=>e.disabled),{get children(){return d(an,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(l){var a,u,c;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(u=e.onChange)==null||u.call(e,l),l||((c=e.onClose)==null||c.call(e),i.load())},get children(){return e.children}})}}))}})}function Ha(e){return"defaultOpen"in e}function Ia(e){return Ha(e)?d(Ua,e):d(Da,e)}function Wa(e){let t=is("PopoverButton"),n=xt(),[r,o]=P();return te(()=>{let s=r();if(s instanceof HTMLElement){let i=()=>{n.disabled()||e.disabled||n.setState(!n.isOpen())};s.addEventListener("click",i),ve(()=>{s.removeEventListener("click",i)});let l=()=>{t.hovering=!0},a=()=>{t.hovering=!1};s.addEventListener("mouseenter",l),s.addEventListener("mouseleave",a),ve(()=>{s.removeEventListener("mouseenter",l),s.removeEventListener("mouseleave",a)})}}),d(Sa,re(je(e,["children","ref"]),Pa,{id:t.buttonID,ref:kt(e,s=>{o(()=>s),s instanceof HTMLElement&&(t.anchor=s)}),get"aria-controls"(){return n.isOpen()&&t.panelID}},cn(()=>{let s=n.disabled(),i=e.disabled;return s||i}),ba(()=>n.isOpen()),st(e)))}function Na(e){let t=is("PopoverPanel"),n=xt(),[r,o]=P();return te(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){hr(fr(s));let i=a=>{e.disabled||(a.key==="Tab"?(a.preventDefault(),rs(s,a.shiftKey)):a.key==="Escape"&&n.setState(!1))},l=a=>{t.hovering||(!a.relatedTarget||!s.contains(a.relatedTarget))&&n.setState(!1)};s.addEventListener("keydown",i),s.addEventListener("focusout",l),ve(()=>{s.removeEventListener("keydown",i),s.removeEventListener("focusout",l)})}}),gr(e,()=>n.isOpen(),()=>Re(()=>{var s;return(s=e.as)!=null?s:"div"},re(je(e,["as","unmount","children","ref"]),Ra,{id:t.panelID,ref:kt(e,s=>{o(()=>s)})},st(e))))}const Ba=""+new URL("logo-white-c0f694e8.svg",import.meta.url).href,Ga=""+new URL("logo-black-123cdd58.svg",import.meta.url).href,Fa="_button_1ao1a_1",Va="_isGhost_1ao1a_20",qa="_isHalf_1ao1a_21",Xa="_isSecondary_1ao1a_22",Ya="_isSolid_1ao1a_23",dt={button:Fa,isGhost:Va,isHalf:qa,isSecondary:Xa,isSolid:Ya},Ka=x('<div class="flex flex-row items-center justify-center flex-1 gap-s.8">'),dn=e=>{const t=e.as;return d(t,{get class(){return[e.class??"rounded-s p-s",dt.button,(()=>e.style==="none"?"":e.style==="solid"?dt.isSolid:e.style==="secondary"?dt.isSecondary:e.style==="half"?dt.isHalf:dt.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){return R(()=>e.style==="none")()?e.children:(()=>{const n=Ka();return _(n,()=>e.children),n})()}})},Ja=x("<button>"),Le=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Ja();return Bo(n,"click",e.onClick,!0),_(n,()=>t.children),L(r=>{const o=t.class,s=t.style,i=e.type??"button",l=e.disabled;return o!==r._v$&&j(n,r._v$=o),r._v$2=Me(n,s,r._v$2),i!==r._v$3&&pe(n,"type",r._v$3=i),l!==r._v$4&&(n.disabled=r._v$4=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),get children(){return e.children}});ur(["click"]);const Za=x("<a>"),as=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Za();return _(n,()=>t.children),L(r=>{const o=t.class,s=`text-decoration: none; ${t.style}`,i=e.href;return o!==r._v$&&j(n,r._v$=o),r._v$2=Me(n,s,r._v$2),i!==r._v$3&&pe(n,"href",r._v$3=i),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),get children(){return e.children}}),Xr=e=>{const t=wt();return d(Y,{get when(){return e.when(t)},keyed:!0,get children(){return e.component({})}})},Qa=`module.exports = {
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
`,ec=`<div class="bg-red-600 text-red-200"> Red </div>
<div class="bg-green-600 text-green-200"> Green </div>
<div class="bg-blue-600 text-blue-200"> Blue </div>
<div class="bg-blue-600 text-desaturated-blue-200"> Blue but text is desaturated </div>
`,tc=`unocss({
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
`,nc=`<div class="scheme-auto-0 bg-surface"> Red </div>
<div class="scheme-auto-120 bg-surface"> Green </div>
<div class="scheme-auto-240 bg-surface"> Blue </div>
<div class="scheme-auto-240 bg-surface text-fg-2"> Blue but text is desaturated </div>
`,rc=`<div class="bg-blue-100 text-blue-900"> Primary </div>
<div class="bg-blue-100 text-blue-800"> Secondary </div>
<div class="bg-blue-100 text-blue-600"> Tertiary </div>
`,oc=`<div class="bg-blue"> Primary (text-fg-1 is applied by default) </div>
<div class="bg-blue text-fg-2"> Secondary </div>
<div class="bg-blue text-fg-3"> Tertiary </div>
`,sc=`module.exports = {
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
`,lc=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute width-full height-1 inset-bottom-[0.375rem]"></div>
  <!-- (4-1) / 2 -->
  <!-- (1rem - 0.25rem) / 2 -->
  <!-- was hard to calculate and will break if the theme changes -->
</div>
`,ac=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-1 inset-bottom-$(($4-$1)/2)"></div>
  <!-- We did not need to calculate anything and this will not break if proportions change -->
</div>
`,cc=`// Not possible 🙁
`,uc=`import { getLCA, LCHToCSSColor } from "@windblade/core";
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
`,dc="modulepreload",fc=function(e,t){return new URL(e,t).href},Yr={},Qe=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=fc(s,r),s in Yr)return;Yr[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const f=o[c];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":dc,i||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),i)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function hc(){const[e]=Dt(async()=>(await Qe(()=>import("./index-f446294a.js").then(r=>r.i),["./index-f446294a.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[t]=Dt(async()=>(await Qe(()=>import("./index-b295f297.js"),["./index-b295f297.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[n]=Dt(async()=>await Qe(()=>import("./index-6b20c012.js"),[],import.meta.url));return{highlighter:t,formatter:e,xml:n}}const He=we(hc),gc=x('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div>'),Ze=e=>(()=>{const t=gc(),n=t.firstChild;return _(n,()=>e.children),L(()=>j(n,`size-i-full max-size-i-l ${e.class}`)),t})();var mc=()=>{},Kr=(e,t)=>t();function pc(e,t){const n=ne(e),r=n?[n]:[],{onEnter:o=Kr,onExit:s=Kr}=t,[i,l]=P(t.appear?[]:r),[a]=sl();let u,c=!1;function f(b,g){if(!b)return g&&g();c=!0,s(b,()=>{Wn(()=>{c=!1,l(C=>C.filter(T=>T!==b)),g&&g()})})}function h(b){const g=u;if(!g)return b&&b();u=void 0,l(C=>[g,...C]),o(g,b??mc)}const y=t.mode==="out-in"?b=>c||f(b,h):t.mode==="in-out"?b=>h(()=>f(b)):b=>{h(),f(b)};return In(b=>{const g=e();return ne(a)?(a(),b):(g!==b&&(u=g,Wn(()=>ne(()=>y(b)))),g)},t.appear?void 0:n),i}var Jr=e=>e instanceof Element;function Vn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Vn(e(),t);if(Array.isArray(e))for(const n of e){const r=Vn(n,t);if(r)return r}return null}function bc(e,t=Jr,n=Jr){const r=R(e);return R(()=>Vn(r(),t))}function vc(e){return R(()=>{const t=e.name||"s";return{enterActiveClasses:(e.enterActiveClass||t+"-enter-active").split(" "),enterClasses:(e.enterClass||t+"-enter").split(" "),enterToClasses:(e.enterToClass||t+"-enter-to").split(" "),exitActiveClasses:(e.exitActiveClass||t+"-exit-active").split(" "),exitClasses:(e.exitClass||t+"-exit").split(" "),exitToClasses:(e.exitToClass||t+"-exit-to").split(" "),moveClasses:(e.moveClass||t+"-move").split(" ")}})}function cs(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function $c(e,t,n,r){const{enterClasses:o,enterActiveClasses:s,enterToClasses:i}=e,{onBeforeEnter:l,onEnter:a,onAfterEnter:u}=t;l==null||l(n),n.classList.add(...o),n.classList.add(...s),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();a==null||a(n,()=>c())}),cs(()=>{n.classList.remove(...o),n.classList.add(...i),(!a||a.length<2)&&(n.addEventListener("transitionend",c),n.addEventListener("animationend",c))});function c(f){(!f||f.target===n)&&(r==null||r(),n.removeEventListener("transitionend",c),n.removeEventListener("animationend",c),n.classList.remove(...s),n.classList.remove(...i),u==null||u(n))}}function yc(e,t,n,r){const{exitClasses:o,exitActiveClasses:s,exitToClasses:i}=e,{onBeforeExit:l,onExit:a,onAfterExit:u}=t;if(!n.parentNode)return r==null?void 0:r();l==null||l(n),n.classList.add(...o),n.classList.add(...s),a==null||a(n,()=>c()),cs(()=>{n.classList.remove(...o),n.classList.add(...i),(!a||a.length<2)&&(n.addEventListener("transitionend",c),n.addEventListener("animationend",c))});function c(f){(!f||f.target===n)&&(r==null||r(),n.removeEventListener("transitionend",c),n.removeEventListener("animationend",c),n.classList.remove(...s),n.classList.remove(...i),u==null||u(n))}}var wc={inout:"in-out",outin:"out-in"},xc=e=>{const t=vc(e);return pc(bc(()=>e.children),{mode:wc[e.mode],appear:e.appear,onEnter(n,r){$c(t(),e,n,r)},onExit(n,r){yc(t(),e,n,r)}})};const kc=x("<section>"),Zr="animation-duration-m.4",br=e=>{const t=()=>`${e.class} relative size-i-full size-b-full overflow-hidden`,n=e.as??(r=>(()=>{const o=kc();return _(o,()=>r.children),L(()=>j(o,t())),o})());return d(n,{get class(){return t()},get children(){return d(xc,{enterActiveClass:`${Zr} animate-in`,exitActiveClass:`${Zr} animate-out`,get children(){return d(Zo,{})}})}})},Ne=e=>d(dn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>d(da,{get class(){return t.class},get style(){return`text-decoration: none; ${t.style}`},get href(){return e.href},get activeClass(){return e.activeClass},onClick:()=>{var n;(n=e.onClick)==null||n.call(e)},get children(){return t.children}}),get children(){return e.children}}),Sc=x("<div>"),Fe=e=>(()=>{const t=Sc(),n=e.ref;return typeof n=="function"?et(n,t):e.ref=t,_(t,()=>e.children),L(()=>j(t,`${e.class} absolute inset-0 size-i-full size-b-full overflow-auto`)),t})();function _c(e){try{return document.querySelector(e)}catch{return null}}function Cc(e,t){const n=_c(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function jc(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Tc(e="/"){const t=()=>{const n=window.location.search,r=new URLSearchParams(n);return decodeURIComponent(r.get("navigation")??e)};return Go(()=>({value:t(),state:history.state}),({value:n,replace:r,scroll:o,state:s})=>{const i=`?navigation=${encodeURIComponent(n)}`;r?window.history.replaceState(s,"",i):window.history.pushState(s,"",i),Cc(window.location.hash.slice(1),o)},n=>jc(window,"popstate",()=>n()),{go:n=>window.history.go(n)})}const zc=x('<div class="flex flex-col gap-s"><div class="flex flex-col gap-s.4"><h3 class="text-m.2 font-bold text-fg-2"></h3><p class="leading-$($s+$s.2)">'),Oc=e=>d(Ne,{style:"none",class:"size-b-full transition bg-accent-4 text-fg-3 border border-color-surface p-m.2 gap-m.2 rounded-m.2 flex flex-col justify-between",get href(){return e.href},get onClick(){return e.onInspect},get children(){const t=zc(),n=t.firstChild,r=n.firstChild,o=r.nextSibling;return _(r,()=>e.meta.title),_(o,()=>e.meta.description),t}});function vr(e){const[t,n]=P([]);return te(lr(()=>e.each,()=>{const r=[];e.each.forEach((o,s)=>{r.push(e.children([s,o]))}),n(r)})),t}const Mc=x('<ul class="size-i-full list-none grid grid-fit-cols-m gap-s">'),Lc=x("<li>"),Ac=e=>(()=>{const t=Mc();return _(t,d(vr,{get each(){return e.map},children:([n,r])=>(()=>{const o=Lc();return _(o,d(Oc,{get href(){return`/docs/${n}/${r.openOn.join("/")}`},meta:r,onInspect:()=>{var s;return(s=e.onInspect)==null?void 0:s.call(e,n)}})),o})()})),t})(),Qr={dark:240,light:260};function Ec(){const[e,t]=P(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{t(l.matches?"light":"dark")});const[n,r]=P(void 0),o=()=>{switch(n()){case"dark":r("light");break;case"light":r("dark");break;default:r(e()==="light"?"dark":"light")}},s=R(()=>n()??e()??"dark"),i=R(()=>s()==="dark"?Qr.dark:Qr.light);return{scheme:s,hue:i,enforceScheme:n,setEnforceScheme:r,toggleScheme:o}}const Se=we(Ec),Pc=x('<div><span class="text-fg-1 font-semibold">Error:</span> '),oe=e=>(()=>{const t=Pc();return t.firstChild.nextSibling,_(t,()=>e.children,null),L(()=>j(t,`inline-block scheme-${Se.scheme()}-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal`)),t})(),us={complete:{meta:{title:"Complete",description:"Complete package intended to replace Tailwind or unocss-preset-wind. Not recommended at the moment",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>Kh),void 0,import.meta.url)).docs.default},color:{meta:{title:"Color",description:"Semantic color utils from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>oh),void 0,import.meta.url)).docs.default},dollars:{meta:{title:"Dollars",description:"$ syntax from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await Qe(()=>Promise.resolve().then(()=>ph),void 0,import.meta.url)).docs.default}};function Rc(){try{const e=new Map;return Object.entries(us).forEach(([t,n])=>{e.set(t,n.meta)}),{success:!0,value:e}}catch{return{success:!1,error:"An unexpected error occurred"}}}async function Dc(e){try{const t=us[e];return{success:!0,value:{meta:t.meta,docs:await t.loadDocs()}}}catch(t){return{success:!1,error:`${t}`}}}function Uc(){const e=new Map,[t,n]=P();return{index:t,fetchIndex:async()=>{n(Rc())},getModuleById:async i=>{const l=e.get(i);if(l)return{success:!0,value:l};{const a=await Dc(i);return a.success&&e.set(i,a.value),a}},getCachedModuleById:i=>{const l=e.get(i);return l?{success:!0,value:l}:{success:!1,error:"Not cached"}}}}const it=we(Uc),ds=()=>d(Y,{get when(){return it.index()},get fallback(){return d(oe,{children:"Module index not loaded"})},keyed:!0,children:e=>e.success?d(Ac,{get map(){return e.value}}):d(oe,{children:"Error loading index"})}),Hc=x('<div class="grid grid-fit-cols-l.2 gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T🤮ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade ⚡:'),jt=x('<div class="size-b-px bg-surface">'),Tt=x("<pre>"),Ic=x('<div class="i-mdi-arrow-right">'),Wc=x('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.'),Nc=x("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas)."),Bc=x('<section class="p-b-m font-semibold bg-gradient-to-ss from-surface">'),Gc=x(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.`),Fc=x("<h3>Ready to improve your Tailwind workflow?"),Vc=x('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.'),qc=x('<section class="bg-gradient-to-ss from-surface to-normal-2">'),Xc=x("<h4>Not convinced about the whole package?"),Yc=x("<p>Best parts of Windblade are available standalone. Adopt Windblade incrementally or combine parts of it with other UnoCSS presets."),Kc=x('<section class="text-fg-3">'),Jc=x("<footer>"),W={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},Te=e=>(()=>{const t=Hc(),n=t.firstChild,r=n.firstChild,o=n.nextSibling,s=o.firstChild;return _(n,d(Y,{get when(){return e.code.tw.js},keyed:!0,children:i=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const u=`${W.pre} js`,c=(f=He.highlighter())==null?void 0:f.highlight(i,{language:"js"}).value;return u!==a._v$3&&j(l,a._v$3=u),c!==a._v$4&&(l.innerHTML=a._v$4=c),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),_(n,d(Y,{get when(){return e.code.tw.html},keyed:!0,children:i=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const u=W.pre,c=(f=He.highlighter())==null?void 0:f.highlight(i,{language:"xml"}).value;return u!==a._v$5&&j(l,a._v$5=u),c!==a._v$6&&(l.innerHTML=a._v$6=c),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),_(o,d(Y,{get when(){return e.code.wb.js},keyed:!0,children:i=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const u=`${W.pre} js`,c=(f=He.highlighter())==null?void 0:f.highlight(i,{language:"js"}).value;return u!==a._v$7&&j(l,a._v$7=u),c!==a._v$8&&(l.innerHTML=a._v$8=c),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),_(o,d(Y,{get when(){return e.code.wb.html},keyed:!0,children:i=>[jt(),(()=>{const l=Tt();return L(a=>{var f;const u=W.pre,c=(f=He.highlighter())==null?void 0:f.highlight(i,{language:"xml"}).value;return u!==a._v$9&&j(l,a._v$9=u),c!==a._v$10&&(l.innerHTML=a._v$10=c),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),L(i=>{const l=W.h5,a=W.h5;return l!==i._v$&&j(r,i._v$=l),a!==i._v$2&&j(s,i._v$2=a),i},{_v$:void 0,_v$2:void 0}),t})(),eo=()=>d(Ne,{style:"solid",href:"/docs/complete/Usage/Installation",get children(){return["Get started",Ic()]}}),Zc=()=>d(Fe,{get children(){return[(()=>{const e=Bc();return _(e,d(Ze,{class:"flex flex-col items-start",get children(){return[(()=>{const t=Wc(),n=t.firstChild,r=n.nextSibling,o=r.firstChild,s=o.nextSibling,i=s.nextSibling,l=i.nextSibling,a=l.nextSibling;return L(u=>{const c=W.header.li,f=W.header.li,h=W.header.li,y=W.header.li,b=W.header.li;return c!==u._v$11&&j(o,u._v$11=c),f!==u._v$12&&j(s,u._v$12=f),h!==u._v$13&&j(i,u._v$13=h),y!==u._v$14&&j(l,u._v$14=y),b!==u._v$15&&j(a,u._v$15=b),u},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),t})(),(()=>{const t=Nc();return L(()=>j(t,`${W.p} text-fg-3 m-be-s`)),t})(),d(eo,{})]}})),e})(),d(Ze,{get children(){const e=Gc(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,o=r.firstChild,s=o.firstChild,i=s.nextSibling,l=o.nextSibling,a=l.firstChild,u=a.nextSibling,c=l.nextSibling,f=c.firstChild,h=f.nextSibling,y=t.nextSibling,b=y.firstChild,g=b.nextSibling,C=y.nextSibling,T=C.firstChild,w=T.nextSibling,$=C.nextSibling,m=$.firstChild,z=m.nextSibling,v=$.nextSibling,M=v.firstChild,B=M.nextSibling,E=B.nextSibling;return _(o,d(Te,{code:{tw:{js:Qa,html:ec},wb:{js:tc,html:nc}}}),null),_(l,d(Te,{code:{tw:{html:rc},wb:{html:oc}}}),null),_(c,d(Te,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),_(y,d(Te,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all 🙁</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),_(C,d(Te,{code:{tw:{js:sc},wb:{js:ic}}}),null),_($,d(Te,{code:{tw:{js:cc},wb:{js:uc}}}),null),_(v,d(Te,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),E),_(v,d(Te,{code:{tw:{html:lc},wb:{html:ac}}}),null),L(p=>{const O=W.h3,A=W.h4,I=W.p,X=W.h4,ee=W.p,K=W.h4,J=W.p,Z=W.h3,$e=W.p,ut=W.h3,Er=W.p,Pr=W.h3,Rr=W.p,Dr=W.h3,Ur=W.p,Hr=W.p;return O!==p._v$16&&j(n,p._v$16=O),A!==p._v$17&&j(s,p._v$17=A),I!==p._v$18&&j(i,p._v$18=I),X!==p._v$19&&j(a,p._v$19=X),ee!==p._v$20&&j(u,p._v$20=ee),K!==p._v$21&&j(f,p._v$21=K),J!==p._v$22&&j(h,p._v$22=J),Z!==p._v$23&&j(b,p._v$23=Z),$e!==p._v$24&&j(g,p._v$24=$e),ut!==p._v$25&&j(T,p._v$25=ut),Er!==p._v$26&&j(w,p._v$26=Er),Pr!==p._v$27&&j(m,p._v$27=Pr),Rr!==p._v$28&&j(z,p._v$28=Rr),Dr!==p._v$29&&j(M,p._v$29=Dr),Ur!==p._v$30&&j(B,p._v$30=Ur),Hr!==p._v$31&&j(E,p._v$31=Hr),p},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),e}}),(()=>{const e=qc();return _(e,d(Ze,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const t=Fc();return L(()=>j(t,W.h3)),t})(),(()=>{const t=Vc();return L(()=>j(t,W.p)),t})(),d(eo,{})]}})),e})(),(()=>{const e=Kc();return _(e,d(Ze,{class:"flex flex-col items-start gap-s p-b-m.4",get children(){return[(()=>{const t=Xc();return L(()=>j(t,W.h4)),t})(),(()=>{const t=Yc();return L(()=>j(t,W.p)),t})(),d(ds,{})]}})),e})(),(()=>{const e=Jc();return _(e,d(Ze,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",d(as,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})()]}}),Qc=x('<h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Docs'),eu=x('<p class="text-$($s+$s.4) font-semibold m-be-m.2">Please select a Windblade module to see the documentation for.'),tu=()=>d(Fe,{get children(){return d(Ze,{class:"p-b-m.2",get children(){return[Qc(),eu(),d(ds,{})]}})}}),nu="_progress_8tf2m_1",ru="_spin_8tf2m_1",ou={progress:nu,spin:ru},su=x("<div>"),iu=e=>(()=>{const t=su();return L(n=>{const r=ou.progress,o=`--radius: ${e.radius??1}rem`;return r!==n._v$&&j(t,n._v$=r),n._v$2=Me(t,o,n._v$2),n},{_v$:void 0,_v$2:void 0}),t})();let lu=0;const au=()=>`uid-${++lu}`,cu=x('<div class="relative"><select></select><div class="i-mdi-unfold-more-horizontal absolute inset-ie-s inset-b-0 m-auto pointer-events-none">'),uu=e=>(()=>{const t=cu(),n=t.firstChild;return dr(n,re(e,{get class(){return`${e.class} transition size-i-full appearance-none p-s p-ie-$($s*3) hover:highlight active:highlight+`},get onChange(){return e.onChange}}),!1,!0),_(n,()=>e.children),t})(),du=x('<option selected disabled value="">select'),fu=x('<form class="relative"><label class="absolute text-fg-3 inset-i-s inset-bs-s pointer-events-none">Module:'),hu=x("<option>"),gu=e=>{const t=au(),{moduleId:n}=wt(),r=Yo();return(()=>{const o=fu(),s=o.firstChild;return pe(s,"for",t),_(o,d(uu,{id:t,class:"p-bs-m.2 p-s rounded-s cursor-pointer bg-accent-4 hover:bg-accent-3 font-semibold",onChange:i=>{var a;const l=i.target.value;r(`/docs/${l}/${(a=e.index.get(l))==null?void 0:a.openOn.join("/")}`)},get children(){return[du(),d(vr,{get each(){return e.index},children:([i,l])=>(()=>{const a=hu();return a.value=i,a.selected=n===i,_(a,()=>l.title),a})()})]}}),null),o})()},mu=()=>d(Y,{get when(){return it.index()},get fallback(){return d(oe,{children:"Index not loaded"})},keyed:!0,children:e=>e.success?d(gu,{get index(){return e.value}}):d(oe,{children:"Error loading index"})}),pu=x('<div class="absolute inset-0"><div></div><div>'),bu=x('<span class="relative">'),vu=x("<ul>"),$u=x("<li>"),yu=x("<nav>"),fs=fe(),wu=e=>{const t=se(fs),n=`filter: hue-rotate(${3.6*e.i}deg);`,r=()=>t.leafActive(e.path),o=()=>({root:`
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
      `}});return d(t.leafAs,{get path(){return e.path},get class(){return o().root},get children(){return[(()=>{const s=pu(),i=s.firstChild,l=i.nextSibling;return L(a=>{const u=n,c=`${o().dot.all} ${o().dot.glow}`,f=`${o().dot.all} ${o().dot.fg}`;return a._v$=Me(s,u,a._v$),c!==a._v$2&&j(i,a._v$2=c),f!==a._v$3&&j(l,a._v$3=f),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})(),(()=>{const s=bu();return _(s,()=>e.title),s})()]}})},hs=e=>{let t=0;return(()=>{const n=vu();return _(n,d(vr,{get each(){return e.tree},children:([r,o])=>(()=>{const s=$u();return _(s,typeof o=="string"?d(wu,{get path(){return[...e.prefix,r]},title:r,i:++t}):d(hs,{tree:o,get prefix(){return[...e.prefix,r]},get depth(){return e.depth+1}})),s})()})),L(r=>{const o=`list-none flex flex-col ${e.depth>0?"before:font-semibold before:m-be-s before:block gap-s.2":"gap-s"}`,s=e.depth>0?e.prefix.at(-1):void 0;return o!==r._v$4&&j(n,r._v$4=o),s!==r._v$5&&pe(n,"title",r._v$5=s),r},{_v$4:void 0,_v$5:void 0}),n})()},xu=e=>(()=>{const t=yu(),n=e.ref;return typeof n=="function"?et(n,t):e.ref=t,_(t,d(mu,{}),null),_(t,d(fs.Provider,{get value(){return e.settings},get children(){return d(hs,{get tree(){return e.tree},prefix:[],depth:0})}}),null),L(()=>j(t,`${e.class} flex flex-col gap-s`)),t})(),On=x("<div>"),ku=x('<div class="relative flex gap-s items-center p-s.4 p-i-m.2 border-solid border-0 border-be-px border-color-fg-5"><div class="flex flex-wrap gap-s.4 text-fg-3">'),Su=x('<div class="size-i-full size-b-full flex flex-col"><div>'),_u=x('<div class="i-mdi-chevron-right">'),Cu=x("<aside>"),ju=x("<main>"),Tu=x(`<div>Error loading module with ID '<!>'<div class="flex flex-wrap justify-between gap-s.4 m-bs-s">`),zu=e=>{const[t,n]=P(0),[r,o]=P(0),[s,i]=P(!1),[l,a]=P(!1);let u,c;const f=new ResizeObserver(([g])=>{n(g.borderBoxSize[0].inlineSize)}),h=new ResizeObserver(([g])=>{o(g.borderBoxSize[0].inlineSize)});te(async()=>{f.disconnect(),u&&f.observe(u)}),te(async()=>{h.disconnect(),c&&h.observe(c)}),te(()=>{a(t()>=r()*4)});const y=()=>s()||l(),b=d(xu,{get tree(){return e.tree},class:"p-m.2 overflow-auto border-solid border-0 border-ie-px border-color-fg-5 size-i-max size-b-full",ref(g){const C=c;typeof C=="function"?C(g):c=g},settings:{leafActive:g=>Fn().pathname.endsWith(g.join("/").replaceAll(" ","%20")),leafAs:g=>d(Ne,{style:"none",get href(){return`/docs/${e.moduleId}/${g.path.join("/")}`},onClick:()=>i(!1),get class(){return g.class},get children(){return g.children}})}});return(()=>{const g=Su(),C=g.firstChild,T=u;return typeof T=="function"?et(T,g):u=g,_(g,d(Y,{get when(){return!l()},get children(){const w=ku(),$=w.firstChild;return _(w,d(Le,{onClick:()=>i(!s()),class:"p-s.6 rounded-full",style:"half",get children(){return[(()=>{const m=On();return L(()=>j(m,`i-mdi-menu ${s()?"opacity-zero":"opacity-s"} transition`)),m})(),(()=>{const m=On();return L(()=>j(m,`i-mdi-backburger ${s()?"opacity-s":"opacity-zero"} transition absolute`)),m})()]}}),$),_($,d(vt,{get each(){return decodeURIComponent(Fn().pathname).split("/").slice(3)},children:(m,z)=>[(()=>{const v=On();return _(v,m),L(()=>j(v,`${z()===0?"":"text-fg-1 font-semibold"}`)),v})(),R((()=>{const v=R(()=>z()===0);return()=>v()&&_u()})())]})),w}}),C),_(C,d(Y,{get when(){return!l()},get fallback(){return(()=>{const w=Cu();return _(w,b),w})()},get children(){return d(La,{get isOpen(){return y()},onClose:()=>i(!1),style:"z-index: 1;",unmount:!1,title:"Navigation drawer",get children(){return[d(Y,{get when(){return R(()=>!!s())()&&!l()},get children(){return d(Aa,{class:"absolute inset-0",onClick:()=>i(!1)})}}),d(Ea,{get class(){return`bg-normal-3 transition-transform ease-out ${l()?"relative":"absolute inset-b-0 inset-is-0"}`},get style(){return`transform: translateX(${y()?"0":"-100%"})`},children:b})]}})}}),null),_(C,d(br,{get class(){return`flex-1 transition-all ${s()&&!l()?"blur-s.2 opacity-s.4":""}`},as:w=>(()=>{const $=ju();return _($,()=>w.children),L(()=>j($,w.class)),$})()}),null),L(()=>j(C,`size-b-full flex relative ${l()?"flex-row":"flex-col"}`)),g})()},Ou=()=>{const e=wt(),[t,{refetch:n}]=Dt(()=>it.getModuleById(e.moduleId));return d(Fe,{class:"[*]:absolute flex justify-center items-center",get children(){return d(Y,{get when(){return!t.loading},get fallback(){return d(iu,{})},get children(){return d(Y,{get when(){var r;return(r=t())==null?void 0:r.success},get fallback(){return(()=>{const r=Tu(),o=r.firstChild,s=o.nextSibling,i=s.nextSibling,l=i.nextSibling;return _(r,()=>e.moduleId,s),_(l,d(Le,{style:"half",onClick:n,children:"Retry"}),null),_(l,d(Ne,{style:"secondary",href:"/docs",children:"Back to all docs"}),null),r})()},get children(){return d(zu,{get tree(){return t().value.docs},get moduleId(){return e.moduleId}})}})}})}})},Mu=x('<h2 class="text-fg-3 text-s">Navigation error'),Lu=x('<p class="text-m.2 font-bold">The page you are looking for is now a chapter.'),Au=x('<p class="text-$($s+$s.2)">Use the navigation menu to open any page inside this chapter.');function gs(e,t=[]){for(const[n,r]of e.entries()){if(typeof r=="string")return[...t,n];const o=gs(r,[...t,n]);if(o)return o}}const Eu=()=>{const e=wt(),t=Yo(),n=async()=>{const r=await it.getModuleById(e.moduleId);if(!r.success)return;const o=gs(r.value.docs);o&&t(`/docs/${e.moduleId}/${o.join("/")}`)};return d(Fe,{class:"p-m.2 flex flex-col gap-s justify-center items-center text-center font-semibold",get children(){return[Mu(),Lu(),Au(),d(Le,{style:"half",onClick:n,children:"Or find first page"})]}})},lt=fe([]),ms=()=>se(lt)??{};function St(e){return[...ms(),...e]}const ie=e=>{const t=ms();return d(vt,{get each(){return e.children},children:(n,r)=>{for(let o=t.length-1;o>=0;--o){const s=t[o],i=s(n,r());if(i!==void 0)return i}}})},ht=fe();function qn(e){let t=e;const n=se(ht)??{};return Object.entries(n).forEach(([r,o])=>{t=t.replaceAll(r,o)}),t}const Pu=x("<option>"),Ru=x('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value="">'),Du=e=>{const t=()=>qn(e.value);return(()=>{const n=Pu();return _(n,t),L(()=>n.value=t()),n})()},Uu=e=>{switch(e.type){case"element":switch(e.name){case"option":return d(Y,{get when(){var t;return(t=e.attributes)==null?void 0:t.value},keyed:!0,get fallback(){return d(oe,{children:"'option' requires a 'value' attribute"})},children:t=>d(Du,{value:t})})}}},Hu=e=>d(lt.Provider,{get value(){return St([Uu])},get children(){const t=Ru();return t.firstChild,t.addEventListener("change",({target:n})=>e.onChange(n.value)),_(t,d(ie,e),null),t}}),Iu=x('<div class="rounded-s.4 overflow-hidden flex items-center">'),Wu=e=>{const[t,n]=P(1),r=()=>e.onChange(`${t()}`);te(r);const o="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const s=Iu();return _(s,d(Le,{style:"secondary",class:o,onClick:()=>n(t()-1),children:"-"}),null),_(s,d(Le,{style:"secondary",class:o,onClick:r,get children(){return t()}}),null),_(s,d(Le,{style:"secondary",class:o,onClick:()=>n(t()+1),children:"+"}),null),s})()},Nu=x('<tr class="border border-color-transparent border-be-color-fg-5"><td><div></div></td><td class="p-b-s.6 font-semibold flex flex-wrap">'),ps=fe(),Bu=(e,t)=>{const n=se(ps),r=o=>{n==null||n.setPart(t,o),n==null||n.select()};switch(e.type){case"text":return d(Le,{style:"none",class:"text-accent transition ease-in",onClick:()=>r(e.value),get children(){return e.value}});case"element":switch(e.name){case"select":return d(Hu,re(e,{onChange:o=>r(o)}));case"input":return d(Wu,re(e,{onChange:o=>r(o)}))}}},Gu=e=>{const t=se(Ar),[n,r]=P([]),o=(l,a)=>{r(u=>(u[l]=a,[...u]))};te(()=>{e.children.forEach((l,a)=>{switch(l.type){case"text":o(a,l.value);break}})});const s=()=>{const l=n().join("").match(/\S+/g);return l?l.join(""):""},i=()=>{var l;t==null||t.selectUtil({util:s(),renderer:((l=e.attributes)==null?void 0:l.renderer)??""}),e.onSelect()};return d(ps.Provider,{value:{parts:n,setPart:o,select:i},get children(){return d(lt.Provider,{get value(){return St([Bu])},get children(){const l=Nu(),a=l.firstChild,u=a.firstChild,c=a.nextSibling;return _(c,d(ie,e)),L(()=>j(u,`i-mdi-check m-auto transition opacity-${e.selected?"s":"zero"}`)),l}})}})},Fu=x('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody>'),bs=fe(),Mn={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3"},Vu=(e,t)=>{const n=se(bs);if(e.type==="element")switch(e.name){case"util":return d(Gu,re(e,{get selected(){return(n==null?void 0:n.selected())===t},onSelect:()=>n==null?void 0:n.setSelected(t)}))}},qu=e=>{const[t,n]=P(-1);return d(bs.Provider,{value:{selected:t,setSelected:n},get children(){return d(lt.Provider,{get value(){return St([Vu])},get children(){const r=Fu(),o=r.firstChild,s=o.firstChild,i=s.firstChild,l=i.nextSibling,a=o.nextSibling;return _(a,d(ie,e)),L(u=>{const c=Mn.tr,f=`${Mn.th} p-i-s`,h=`${Mn.th} size-i-full`;return c!==u._v$&&j(s,u._v$=c),f!==u._v$2&&j(i,u._v$2=f),h!==u._v$3&&j(l,u._v$3=h),u},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}})},Xu=x("<div>"),Yu=e=>{const[t,n]=P();let r;return te(()=>{if(!r){n(void 0);return}t()||n(r.attachShadow({mode:"open"}))}),te(()=>{const o=t();o&&(o.innerHTML=e.innerHTML)}),(()=>{const o=Xu(),s=r;return typeof s=="function"?et(s,o):r=o,L(()=>j(o,e.class)),o})()},vs=e=>d(Yu,{get class(){return e.class},get innerHTML(){return`
    <div
      id="root"
      class="${Se.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${e.css.replaceAll(":root",":where(#root)")}</style>
      ${e.html}
    </div>
  `}});function Ku(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $r(e){const t=e.length;let n=-1,r,o="";const s=e.charCodeAt(0);for(;++n<t;){if(r=e.charCodeAt(n),r===0){o+="�";continue}if(r===44){o+="\\,";continue}if(r>=1&&r<=31||r===127||n===0&&r>=48&&r<=57||n===1&&r>=48&&r<=57&&s===45){o+=`\\${r.toString(16)} `;continue}if(n===0&&t===1&&r===45){o+=`\\${e.charAt(n)}`;continue}if(r>=128||r===45||r===95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){o+=e.charAt(n);continue}o+=`\\${e.charAt(n)}`}return o}const Ln=$r;function he(e=[]){return Array.isArray(e)?e:[e]}function gt(e){return Array.from(new Set(e))}function ce(e){return typeof e=="string"}function mt(e){return ce(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(t=>t[1]!=null)}function Ju(e){return Array.isArray(e)?e.find(t=>!Array.isArray(t)||Array.isArray(t[0]))?e.map(t=>mt(t)):[e]:[mt(e)]}function Zu(e){return e.filter(([t,n],r)=>{if(t.startsWith("$$"))return!1;for(let o=r-1;o>=0;o--)if(e[o][0]===t&&e[o][1]===n)return!1;return!0})}function An(e){return e==null?"":Zu(e).map(([t,n])=>n!=null?`${t}:${n};`:void 0).filter(Boolean).join("")}function zt(e){return e&&typeof e=="object"&&!Array.isArray(e)}function $s(e,t,n=!1){const r=e,o=t;if(Array.isArray(o))return n&&Array.isArray(o)?[...r,...o]:[...o];const s={...r};return zt(r)&&zt(o)&&Object.keys(o).forEach(i=>{zt(r[i])&&zt(o[i])||Array.isArray(r[i])&&Array.isArray(o[i])?s[i]=$s(r[i],o[i],n):Object.assign(s,{[i]:o[i]})}),s}function Ht(e){let t,n,r;if(Array.isArray(e)){for(n=Array(t=e.length);t--;)n[t]=(r=e[t])&&typeof r=="object"?Ht(r):r;return n}if(Object.prototype.toString.call(e)==="[object Object]"){n={};for(t in e)t==="__proto__"?Object.defineProperty(n,t,{value:Ht(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=(r=e[t])&&typeof r=="object"?Ht(r):r;return n}return e}function Qu(e){return ce(e[0])}function ed(e){return ce(e[0])}const to="$$shortcut-no-merge";function td(e){return typeof e=="function"?{match:e}:e}function no(e){return e.length===3}function nd(e){return e!=null}function rd(){}class od{constructor(){this._map=new Map}get(t,n){const r=this._map.get(t);if(r)return r.get(n)}getFallback(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.has(n)||o.set(n,r),o.get(n)}set(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.set(n,r),this}has(t,n){var r;return(r=this._map.get(t))==null?void 0:r.has(n)}delete(t,n){var r;return((r=this._map.get(t))==null?void 0:r.delete(n))||!1}deleteTop(t){return this._map.delete(t)}map(t){return Array.from(this._map.entries()).flatMap(([n,r])=>Array.from(r.entries()).map(([o,s])=>t(s,n,o)))}}const Ot={};function sd(e=["-",":"]){const t=e.join("|");return Ot[t]||(Ot[t]=new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),Ot[t].lastIndex=0,Ot[t]}function id(e,t=["-",":"],n=5){const r=sd(t);let o=!1,s=e.toString();const i=new Set;do{const l=s;s=s.replace(r,(a,u,c,f)=>t.includes(c)?(i.add(u+c),f.split(/\s/g).filter(Boolean).map(h=>h==="~"?u:h.replace(/^(!?)(.*)/,`$1${u}${c}$2`)).join(" ")):a),o=s!==l,n-=1}while(o&&n);return{prefixes:Array.from(i),expanded:s,hasChanged:o}}function ld(e,t=["-",":"],n=5){const{expanded:r}=id(e.toString(),t,n);return typeof e=="string"?r:e.length()?e.overwrite(0,e.length(),r):e}const ro=new Set;function ad(e){ro.has(e)||(console.warn("[unocss]",e),ro.add(e))}function cd(e){const t=function(r){var s;const o=((s=this.__options)==null?void 0:s.sequence)||[];this.__options.sequence=[];for(const i of o){const l=e[i](r);if(l!=null)return l}};function n(r,o){return r.__options||(r.__options={sequence:[]}),r.__options.sequence.push(o),r}for(const r of Object.keys(e))Object.defineProperty(t,r,{enumerable:!0,get(){return n(this,r)}});return t}const ud=/[\\:]?[\s'"`;{}]+/g;function dd(e){return[...new Set(e.split(ud))]}const fd={name:"@unocss/core/extractor-split",order:0,extract({code:e}){return dd(e)}};function hd(){return{events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}}}const Xn="default",Yn="preflights",gd="shortcuts",md={[Yn]:-100,[gd]:-10,[Xn]:0};function ys(e){return he(e).flatMap(t=>Array.isArray(t)?[t]:Object.entries(t))}const oo="_uno_resolved";function pd(e){var n;if(oo in e)return e;e={...e},Object.defineProperty(e,oo,{value:!0,enumerable:!1});const t=e.shortcuts?ys(e.shortcuts):void 0;if(e.shortcuts=t,e.prefix||e.layer){const r=o=>{o[2]||(o[2]={});const s=o[2];s.prefix==null&&e.prefix&&(s.prefix=he(e.prefix)),s.layer==null&&e.layer&&(s.layer=e.layer)};t==null||t.forEach(r),(n=e.rules)==null||n.forEach(r)}return e}function ws(e){const t=pd(e);if(!t.presets)return[t];const n=(t.presets||[]).flatMap(he).flatMap(ws);return[t,...n]}function so(e={},t={}){var m,z;const n=Object.assign({},t,e),r=gt((n.presets||[]).flatMap(he).flatMap(ws)),o=[...r.filter(v=>v.enforce==="pre"),...r.filter(v=>!v.enforce),...r.filter(v=>v.enforce==="post")],s=[...o,n],i=[...s].reverse(),l=Object.assign({},md,...s.map(v=>v.layers));function a(v){return gt(s.flatMap(M=>he(M[v]||[])))}const u=a("extractors");let c=(m=i.find(v=>v.extractorDefault!==void 0))==null?void 0:m.extractorDefault;c===void 0&&(c=fd),c&&!u.includes(c)&&u.unshift(c),u.sort((v,M)=>(v.order||0)-(M.order||0));const f=a("rules"),h={},y=f.length,b=f.map((v,M)=>{var B;if(Qu(v)){he(((B=v[2])==null?void 0:B.prefix)||"").forEach(p=>{h[p+v[0]]=[M,v[1],v[2],v]});return}return[M,...v]}).filter(Boolean).reverse();let g=bd(s.map(v=>v.theme));const C=a("extendTheme");for(const v of C)g=v(g)||g;const T={templates:gt(s.flatMap(v=>{var M;return he((M=v.autocomplete)==null?void 0:M.templates)})),extractors:s.flatMap(v=>{var M;return he((M=v.autocomplete)==null?void 0:M.extractors)}).sort((v,M)=>(v.order||0)-(M.order||0))};let w=a("separators");w.length||(w=[":","-"]);const $={mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:v=>v,...n,presets:o,envMode:n.envMode||"build",shortcutsLayer:n.shortcutsLayer||"shortcuts",layers:l,theme:g,rulesSize:y,rulesDynamic:b,rulesStaticMap:h,preprocess:a("preprocess"),postprocess:a("postprocess"),preflights:a("preflights"),autocomplete:T,variants:a("variants").map(td).sort((v,M)=>(v.order||0)-(M.order||0)),shortcuts:ys(a("shortcuts")).reverse(),extractors:u,safelist:a("safelist"),separators:w};for(const v of s)(z=v==null?void 0:v.configResolved)==null||z.call(v,$);return $}function bd(e){return e.map(t=>t?Ht(t):{}).reduce((t,n)=>$s(t,n),{})}const vd="0.53.4";class $d{constructor(t={},n={}){this.userConfig=t,this.defaults=n,this.version=vd,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=hd(),this.config=so(t,n),this.events.emit("config",this.config)}setConfig(t,n){t&&(n&&(this.defaults=n),this.userConfig=t,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=so(t,this.defaults),this.events.emit("config",this.config))}async applyExtractors(t,n,r=new Set){var s;const o={original:t,code:t,id:n,extracted:r};for(const i of this.config.extractors){const l=await((s=i.extract)==null?void 0:s.call(i,o));if(l)for(const a of l)r.add(a)}return r}makeContext(t,n){const r={rawSelector:t,currentSelector:n[1],theme:this.config.theme,generator:this,variantHandlers:n[2],constructCSS:(...o)=>this.constructCustomCSS(r,...o),variantMatch:n};return r}async parseToken(t,n){var u;if(this.blocked.has(t))return;const r=`${t}${n?` ${n}`:""}`;if(this._cache.has(r))return this._cache.get(r);let o=t;for(const c of this.config.preprocess)o=c(t);if(this.isBlocked(o)){this.blocked.add(t),this._cache.set(r,null);return}const s=await this.matchVariants(t,o);if(!s||this.isBlocked(s[1])){this.blocked.add(t),this._cache.set(r,null);return}const i=this.makeContext(t,[n||s[0],s[1],s[2],s[3]]);this.config.details&&(i.variants=[...s[3]]);const l=await this.expandShortcut(i.currentSelector,i),a=l?await this.stringifyShortcuts(i.variantMatch,i,l[0],l[1]):(u=await this.parseUtil(i.variantMatch,i))==null?void 0:u.map(c=>this.stringifyUtil(c,i)).filter(nd);if(a!=null&&a.length)return this._cache.set(r,a),a;this._cache.set(r,null)}async generate(t,n={}){const{id:r,scope:o,preflights:s=!0,safelist:i=!0,minify:l=!1}=n,a=ce(t)?await this.applyExtractors(t,r):Array.isArray(t)?new Set(t):t;i&&this.config.safelist.forEach($=>a.add($));const u=l?"":`
`,c=new Set([Xn]),f=new Set,h=new Map;let y={};const b=Array.from(a).map(async $=>{var z;if(f.has($))return;const m=await this.parseToken($);if(m!=null){f.add($);for(const v of m){const M=v[3]||"",B=(z=v[4])==null?void 0:z.layer;h.has(M)||h.set(M,[]),h.get(M).push(v),B&&c.add(B)}}});await Promise.all(b),await(async()=>{if(!s)return;const $={generator:this,theme:this.config.theme},m=new Set([]);this.config.preflights.forEach(({layer:z=Yn})=>{c.add(z),m.add(z)}),y=Object.fromEntries(await Promise.all(Array.from(m).map(async z=>{const M=(await Promise.all(this.config.preflights.filter(B=>(B.layer||Yn)===z).map(async B=>await B.getCSS($)))).filter(Boolean).join(u);return[z,M]})))})();const g=this.config.sortLayers(Array.from(c).sort(($,m)=>(this.config.layers[$]??0)-(this.config.layers[m]??0)||$.localeCompare(m))),C={},T=$=>{if(C[$])return C[$];let m=Array.from(h).sort((v,M)=>{var B;return(this.parentOrders.get(v[0])??0)-(this.parentOrders.get(M[0])??0)||((B=v[0])==null?void 0:B.localeCompare(M[0]||""))||0}).map(([v,M])=>{const B=M.length,E=M.filter(A=>{var I;return(((I=A[4])==null?void 0:I.layer)||Xn)===$}).sort((A,I)=>{var X,ee,K,J,Z,$e,ut;return A[0]-I[0]||(((X=A[4])==null?void 0:X.sort)||0)-(((ee=I[4])==null?void 0:ee.sort)||0)||((Z=(K=A[5])==null?void 0:K.currentSelector)==null?void 0:Z.localeCompare(((J=I[5])==null?void 0:J.currentSelector)??""))||(($e=A[1])==null?void 0:$e.localeCompare(I[1]||""))||((ut=A[2])==null?void 0:ut.localeCompare(I[2]||""))||0}).map(([,A,I,,X,,ee])=>[[[(A&&kd(A,o))??"",(X==null?void 0:X.sort)??0]],I,!!(ee??(X==null?void 0:X.noMerge))]);if(!E.length)return;const p=E.reverse().map(([A,I,X],ee)=>{if(!X&&this.config.mergeSelectors)for(let J=ee+1;J<B;J++){const Z=E[J];if(Z&&!Z[2]&&(A&&Z[0]||A==null&&Z[0]==null)&&Z[1]===I)return A&&Z[0]&&Z[0].push(...A),null}const K=A?gt(A.sort((J,Z)=>{var $e;return J[1]-Z[1]||(($e=J[0])==null?void 0:$e.localeCompare(Z[0]||""))||0}).map(J=>J[0]).filter(Boolean)):[];return K.length?`${K.join(`,${u}`)}{${I}}`:I}).filter(Boolean).reverse().join(u);if(!v)return p;const O=v.split(" $$ ");return`${O.join("{")}{${u}${p}${u}}${O.map(A=>"").join("}")}`}).filter(Boolean).join(u);s&&(m=[y[$],m].filter(Boolean).join(u));const z=l?"":`/* layer: ${$} */${u}`;return C[$]=m?z+m:""},w=($=g,m)=>$.filter(z=>!(m!=null&&m.includes(z))).map(z=>T(z)||"").filter(Boolean).join(u);return{get css(){return w()},layers:g,matched:f,getLayers:w,getLayer:T}}async matchVariants(t,n){const r=new Set,o=[];let s=n||t,i=!1;const l={rawSelector:t,theme:this.config.theme,generator:this};for(;;){i=!1;for(const a of this.config.variants){if(!a.multiPass&&r.has(a))continue;let u=await a.match(s,l);if(u){ce(u)&&(u={matcher:u}),s=u.matcher,o.unshift(u),r.add(a),i=!0;break}}if(!i)break;if(o.length>500)throw new Error(`Too many variants applied to "${t}"`)}return[t,s,o,r]}applyVariants(t,n=t[4],r=t[1]){const s=n.slice().sort((u,c)=>(u.order||0)-(c.order||0)).reduceRight((u,c)=>f=>{var b,g;const h=((b=c.body)==null?void 0:b.call(c,f.entries))||f.entries,y=Array.isArray(c.parent)?c.parent:[c.parent,void 0];return(c.handle??_d)({...f,entries:h,selector:((g=c.selector)==null?void 0:g.call(c,f.selector,h))||f.selector,parent:y[0]||f.parent,parentOrder:y[1]||f.parentOrder,layer:c.layer||f.layer,sort:c.sort||f.sort},u)},u=>u)({prefix:"",selector:Sd(r),pseudo:"",entries:t[2]}),{parent:i,parentOrder:l}=s;i!=null&&l!=null&&this.parentOrders.set(i,l);const a={selector:[s.prefix,s.selector,s.pseudo].join(""),entries:s.entries,parent:i,layer:s.layer,sort:s.sort,noMerge:s.noMerge};for(const u of this.config.postprocess)u(a);return a}constructCustomCSS(t,n,r){const o=mt(n);if(ce(o))return o;const{selector:s,entries:i,parent:l}=this.applyVariants([0,r||t.rawSelector,o,void 0,t.variantHandlers]),a=`${s}{${An(i)}}`;return l?`${l}{${a}}`:a}async parseUtil(t,n,r=!1,o){var c;const[s,i,l]=ce(t)?await this.matchVariants(t):t;this.config.details&&(n.rules=n.rules??[]);const a=this.config.rulesStaticMap[i];if(a&&a[1]&&(r||!((c=a[2])!=null&&c.internal))){this.config.details&&n.rules.push(a[3]);const f=a[0],h=mt(a[1]),y=a[2];return ce(h)?[[f,h,y]]:[[f,s,h,y,l]]}n.variantHandlers=l;const{rulesDynamic:u}=this.config;for(const[f,h,y,b]of u){if(b!=null&&b.internal&&!r)continue;let g=i;if(b!=null&&b.prefix){const $=he(b.prefix);if(o){const m=he(o);if(!$.some(z=>m.includes(z)))continue}else{const m=$.find(z=>i.startsWith(z));if(m==null)continue;g=i.slice(m.length)}}const C=g.match(h);if(!C)continue;const T=await y(C,n);if(!T)continue;this.config.details&&n.rules.push([h,y,b]);const w=Ju(T).filter($=>$.length);if(w.length)return w.map($=>ce($)?[f,$,b]:[f,s,$,b,l])}}stringifyUtil(t,n){if(!t)return;if(no(t))return[t[0],void 0,t[1],void 0,t[2],this.config.details?n:void 0,void 0];const{selector:r,entries:o,parent:s,layer:i,sort:l,noMerge:a}=this.applyVariants(t),u=An(o);if(!u)return;const{layer:c,sort:f,...h}=t[3]??{},y={...h,layer:i??c,sort:l??f};return[t[0],r,u,s,y,this.config.details?n:void 0,a]}async expandShortcut(t,n,r=5){var l;if(r===0)return;const o=this.config.details?a=>{n.shortcuts=n.shortcuts??[],n.shortcuts.push(a)}:rd;let s,i;for(const a of this.config.shortcuts){let u=t;if((l=a[2])!=null&&l.prefix){const f=he(a[2].prefix).find(h=>t.startsWith(h));if(f==null)continue;u=t.slice(f.length)}if(ed(a)){if(a[0]===u){s=s||a[2],i=a[1],o(a);break}}else{const c=u.match(a[0]);if(c&&(i=a[1](c,n)),i){s=s||a[2],o(a);break}}}if(ce(i)&&(i=ld(i.trim()).split(/\s+/g)),!i){const[a,u]=ce(t)?await this.matchVariants(t):t;if(a!==u){const c=await this.expandShortcut(u,n,r-1);c&&(i=c[0].map(f=>ce(f)?a.replace(u,f):f))}}if(i)return[(await Promise.all(i.map(async a=>{var u;return(ce(a)?(u=await this.expandShortcut(a,n,r-1))==null?void 0:u[0]:void 0)||[a]}))).flat(1).filter(Boolean),s]}async stringifyShortcuts(t,n,r,o={layer:this.config.shortcutsLayer}){var c;const s=new od,i=(await Promise.all(gt(r).map(async f=>{const h=ce(f)?await this.parseUtil(f,n,!0,o.prefix):[[1/0,"{inline}",mt(f),void 0,[]]];return h||ad(`unmatched utility "${f}" in shortcut "${t[1]}"`),h||[]}))).flat(1).filter(Boolean).sort((f,h)=>f[0]-h[0]),[l,,a]=t,u=[];for(const f of i){if(no(f)){u.push([f[0],void 0,f[1],void 0,f[2],n,void 0]);continue}const{selector:h,entries:y,parent:b,sort:g,noMerge:C}=this.applyVariants(f,[...f[4],...a],l);s.getFallback(h,b,[[],f[0]])[0].push([y,!!(C??((c=f[3])==null?void 0:c.noMerge)),g??0])}return u.concat(s.map(([f,h],y,b)=>{const g=(T,w,$)=>{const m=Math.max(...$.map(v=>v[1])),z=$.map(v=>v[0]);return(T?[z.flat(1)]:z).map(v=>{const M=An(v);if(M)return[h,y,M,b,{...o,noMerge:w,sort:m},n,void 0]})};return[[f.filter(([,T])=>T).map(([T,,w])=>[T,w]),!0],[f.filter(([,T])=>!T).map(([T,,w])=>[T,w]),!1]].map(([T,w])=>[...g(!1,w,T.filter(([$])=>$.some(m=>m[0]===to))),...g(!0,w,T.filter(([$])=>$.every(m=>m[0]!==to)))])}).flat(2).filter(Boolean))}isBlocked(t){return!t||this.config.blocklist.some(n=>ce(n)?n===t:n.test(t))}}function yd(e,t){return new $d(e,t)}const wd=/\s\$\$\s+/g;function xd(e){return e.match(/\s\$\$\s/)}function kd(e,t){return xd(e)?e.replace(wd,t?` ${t} `:" "):t?`${t} ${e}`:e}const io=/^\[(.+?)(~?=)"(.*)"\]$/;function Sd(e){return io.test(e)?e.replace(io,(t,n,r,o)=>`[${Ln(n)}${r}"${Ln(o)}"]`):`.${Ln(e)}`}function _d(e,t){return t(e)}const Cd={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}};function Mt(e,t=2){let n=e;for(;n.length<t;)n=`0${n}`;return n}function jd(e){return e*(Math.PI/180)}function Td(e){return e*(180/Math.PI)}function D(e,t,n){return Math.min(Math.max(e,t),n)}function Ue(e,t){let[n,r,o,s]=t,i=s<1?`/${ke(s,5)}`:"";switch(e){case"rgb":case"rgba":return s<1?`rgba(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, ${ke(s,5)})`:`rgb(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)})`;case"oklab":case"oklch":return`${e}(${ke(n*100,6)}% ${ke(r,6)} ${ke(o,6)}${i})`;default:return`color(${e} ${ke(n,6)} ${ke(r,6)} ${ke(o,6)}${i})`}}function at(e,t){let n=[...e];for(let r=0;r<t.length;r++){let o=0;for(let s=0;s<t[r].length;s++)o+=e[s]*t[r][s];n[r]=o}return n}function ke(e,t=2){let n=10**t;return Math.round(e*n)/n}var zd=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],Od=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Md=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],V=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],Ld=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],Ad=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function Ed(e,t){let n=[1/0,1/0,1/0,1/0,1/0],r=1/0,o=1/0,s=1/0;-1.88170328*e-.80936493*t>1?(n=[1.19086277,1.76576728,.59662641,.75515197,.56771245],r=4.0767416621,o=-3.3077115913,s=.2309699292):1.81444104*e-1.19445276*t>1?(n=[.73956515,-.45954404,.08285427,.1254107,.14503204],r=-1.2684380046,o=2.6097574011,s=-.3413193965):(n=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],r=-.0041960863,o=-.7034186147,s=1.707614701);let i=n[0]+n[1]*e+n[2]*t+n[3]*e*e+n[4]*e*t,l=.3963377774*e+.2158037573*t,a=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t;{let c=1+i*l,f=1+i*a,h=1+i*u,y=c**3,b=f**3,g=h**3,C=3*l*c**2,T=3*a*f**2,w=3*u*h**2,$=6*l**2*c,m=6*a**2*f,z=6*u**2*h,v=r*y+o*b+s*g,M=r*C+o*T+s*w,B=r*$+o*m+s*z;i=i-v*M/(M*M-.5*v*B)}return i}function Pd(e,t){let n=Ed(e,t),[r,o,s]=Ft(Jn([1,n*e,n*t,1])),i=Math.cbrt(1/Math.max(r,o,s)),l=i*n;return{L:i,C:l}}function Rd(e,t,n,r,o){let s=Pd(e,t);if((n-o)*s.C-(s.L-o)*r<=0)return s.C*o/(r*s.L+s.C*(o-n));let i=s.C*(o-1)/(r*(s.L-1)+s.C*(o-n)),l=n-o,a=r,u=.3963377774*e+.2158037573*t,c=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=l+a*u,y=l+a*c,b=l+a*f,g=o*(1-i)+i*n,C=i*r,T=g+C*u,w=g+C*c,$=g+C*f,m=[[T**3,w**3,$**3],[3*h*T**2,3*y*w**2,3*b*$**2],[6*h**2*T,6*y**2*w,6*b**2*$]],z=V[0][0]*m[0][0]+V[0][1]*m[0][1]+V[0][2]*m[0][2]-1,v=V[0][0]*m[1][0]+V[0][1]*m[1][1]+V[0][2]*m[1][2],M=V[0][0]*m[2][0]+V[0][1]*m[2][1]+V[0][2]*m[2][2],B=v/(v*v-.5*z*M),E=B>=0?-z*B:1/0,p=V[1][0]*m[0][0]+V[1][1]*m[0][1]+V[1][2]*m[0][2]-1,O=V[1][0]*m[1][0]+V[1][1]*m[1][1]+V[1][2]*m[1][2],A=V[1][0]*m[2][0]+V[1][1]*m[2][1]+V[1][2]*m[2][2],I=O/(O*O-.5*p*A),X=I>=0?-p*I:1/0,ee=V[2][0]*m[0][0]+V[2][1]*m[0][1]+V[2][2]*m[0][2]-1,K=V[2][0]*m[1][0]+V[2][1]*m[1][1]+V[2][2]*m[1][2],J=V[2][0]*m[2][0]+V[2][1]*m[2][1]+V[2][2]*m[2][2],Z=K/(K*K-.5*ee*J),$e=Z>=0?-ee*Z:1/0;return i+Math.min(E,X,$e)}function En(e){let t=Math.abs(e);return t<=.0031308?e*12.92:1.055*Math.pow(t,1/2.4)-.055}function Pn(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function Kn(e){let[t,n,r,o]=e;t=Math.abs(t%360);let s=n*(1-Math.abs(2*r-1)),i=s*(1-Math.abs(t/60%2-1)),l=0,a=0,u=0;0<=t&&t<60?(l=s,a=i):60<=t&&t<120?(l=i,a=s):120<=t&&t<180?(a=s,u=i):180<=t&&t<240?(a=i,u=s):240<=t&&t<300?(l=i,u=s):300<=t&&t<360&&(l=s,u=i);let c=r-s/2;return[l+c,a+c,u+c,o]}function lo(e){let[t,n,r,o]=e;if(n+r>=1){let i=n/(n+r);return[i,i,i,o]}let s=Kn([t,100,50,o]);for(let i=0;i<3;i++)s[i]*=1-n-r,s[i]+=n;return s}function Dd(e,t=2e-4){let[n,r,o,s]=e,i=Math.abs(r)<t&&Math.abs(o)<t?0:Td(Math.atan2(o,r));for(;i<0;)i+=360;for(;i>=360;)i-=360;return[n,Math.sqrt(r**2+o**2),i,s]}function Ud(e){let[t,n,r,o]=e;if(t===0)return[0,0,0,o];for(;r<0;)r+=360;for(;r>=360;)r-=360;let s=jd(r);return[t,Math.cos(s)*n,Math.sin(s)*n,o]}function Hd(e){return at(e,Md)}function Ft(e){let[t,n,r,o]=e,[s,i,l]=at([t**3,n**3,r**3,o],V);return[s,i,l,o]}function Be(e){let[t,n,r,o]=e;return[En(t),En(n),En(r),o]}function xs(e){let[t,n,r,o]=at(e,Ld);return[Math.cbrt(t),Math.cbrt(n),Math.cbrt(r),o]}function ao(e){return at(e,zd)}function Jn(e){return at(e,Ad)}function Vt(e){let[t,n,r,o]=Ft(Jn(e));if(t>1.001||t<-.001||n>1.001||n<-.001||r>1.001||r<-.001){let[s,i,l]=e,a=Math.max(1e-5,Math.sqrt(i**2+l**2)),u=D(s,0,1),c=i/a,f=l/a,h=Rd(c,f,s,a,u);return Be(Ft(Jn([u*(1-h)+h*s,c*(h*a),f*(h*a),o])))}return Be([t,n,r,o])}function qt(e){return Vt(Ud(e))}function Ie(e){let[t,n,r,o]=e;return[Pn(t),Pn(n),Pn(r),o]}function Xt(e){return Hd(xs(Ie(e)))}function Yt(e){return Dd(Xt(e))}function co(e){return at(e,Od)}function ks(e,t){let[n,r,o,s]=Yt(e);return typeof t.lightness=="number"&&(t.mode==="relative"?n+=t.lightness:n=t.lightness),typeof t.chroma=="number"&&(t.mode==="relative"?r+=t.chroma:r=t.chroma),typeof t.hue=="number"&&(t.mode==="relative"?o+=t.hue:o=t.hue),typeof t.alpha=="number"&&(t.mode==="relative"?s+=t.alpha:s=t.alpha),qt([n,r,o,s])}var Id={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},uo=Id,Wd=/-?[0-9.]+%?/g,Nd=/^#[0-9a-f]{3,8}$/i,Bd=/^([^( ]+)\s*\(\s*([^)]+)\)$/,Gd=16**6,Zn=16**4,Qn=16**2;function _e(e){let t=Fd(e),n={},r={get hex(){if(n.hex)return n.hex;let[o,s,i,l]=t,a="#";return a+=Mt(Math.round(D(o*255,0,255)).toString(16),2),a+=Mt(Math.round(D(s*255,0,255)).toString(16),2),a+=Mt(Math.round(D(i*255,0,255)).toString(16),2),t[3]<1&&(a+=Mt(Math.round(l*255).toString(16),2)),n.hex=a,n.hex},get hexVal(){if(typeof n.hexVal=="number")return n.hexVal;let[o,s,i,l]=t;return l<1&&console.warn(`hexVal converted a semi-transparent color (${l*100}%) to fully opaque`),o=Math.round(D(o*255,0,255)),s=Math.round(D(s*255,0,255)),i=Math.round(D(i*255,0,255)),n.hexVal=o*Zn+s*Qn+i,n.hexVal},get rgb(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},get rgba(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},rgbVal:t,rgbaVal:t,get linearRGB(){return n.linearRGB||(n.linearRGB=Ue("srgb-linear",Ie(t))),n.linearRGB},get linearRGBVal(){return n.linearRGBVal||(n.linearRGBVal=Ie(t)),n.linearRGBVal},get p3(){return n.p3||(n.p3=Ue("display-p3",t)),n.p3},p3Val:t,get oklab(){return n.oklab||(n.oklab=Ue("oklab",Xt(t))),n.oklab},get oklabVal(){return n.oklabVal||(n.oklabVal=Xt(t)),n.oklabVal},get oklch(){return n.oklch||(n.oklch=Ue("oklch",Yt(t))),n.oklch},get oklchVal(){return n.oklchVal||(n.oklchVal=Yt(t)),n.oklchVal},get xyz(){return n.xyz||(n.xyz=Ue("xyz-d65",ao(Ie(t)))),n.xyz},get xyzVal(){return n.xyzVal||(n.xyzVal=ao(Ie(t))),n.xyzVal},adjust(o){return _e(ks(t,o))}};return r.toString=()=>r.hex,r}function fo(e){if(e>Gd)throw new Error("8-digit hex values (with transparency) aren’t supported");let t=e,n=Math.floor(t/Zn);t-=n*Zn;let r=Math.floor(t/Qn);t-=r*Qn;let o=t;return[n/255,r/255,o/255,1]}function ze(e,t){let n=e.match(Wd);if(!n)throw new Error(`Unexpected color format: ${e}`);let r=[0,0,0,1];for(let o=0;o<n.length;o++)n[o]&&(n[o].includes("%")?r[o]=parseFloat(n[o])/100:!t||t[o]===1/0||t[o]===1?r[o]=parseFloat(n[o]):r[o]=parseFloat(n[o])/t[o]);return r}function Fd(e){let t=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw t;if(Array.isArray(e)){if(e.some(i=>typeof i!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[n,r,o,s]=e;return[D(n,0,1),D(r,0,1),D(o,0,1),typeof s=="number"?D(s,0,1):1]}if(typeof e=="number")return fo(e);if(typeof e=="string"){let n=e.trim();if(!n)throw new Error("Expected color, received empty string");let r=n.toLowerCase();if(typeof uo[r]=="number")return fo(uo[r]);if(Nd.test(r)){let l=r.replace("#",""),a=[0,0,0,1];if(l.length===6||l.length===8)for(let u=0;u<l.length/2;u++){let c=u*2,f=c+2,h=l.substring(c,f);a[u]=parseInt(h,16)/255}else if(l.length===3||l.length===4)for(let u=0;u<l.length;u++){let c=l.charAt(u);a[u]=parseInt(`${c}${c}`,16)/255}else throw new Error(`Hex value "${r}" not a valid sRGB color`);return a}let o=n.match(Bd);if(!o)throw t;let[,s,i]=o;if(s==="color"){let l=i.indexOf(" ");s=i.substring(0,l),i=i.substring(l)}switch(s){case"rgb":case"rgba":case"srgb":{let[l,a,u,c]=ze(i,[255,255,255,1]);return[D(l,0,1),D(a,0,1),D(u,0,1),D(c,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let l=ze(i);return Be(l)}case"hsl":case"hsla":{let[l,a,u,c]=ze(i);return Kn([l,D(a,0,1),D(u,0,1),D(c,0,1)])}case"hwb":case"hwba":{let[l,a,u,c]=ze(i);return lo([l,D(a,0,1),D(u,0,1),D(c,0,1)])}case"p3":case"display-p3":{let[l,a,u,c]=ze(i);return[D(l,0,1),D(a,0,1),D(u,0,1),D(c,0,1)]}case"lab":case"oklab":return Vt(ze(i));case"lch":case"oklch":return qt(ze(i));case"xyz":case"xyz-d65":return Be(co(ze(i)))}}if(typeof e=="object"){let n={...e},r=1;for(let o of Object.keys(n))o==="alpha"?r=D(n[o],0,1):n[o.toLowerCase()]=n[o];if("r"in n&&"g"in n&&"b"in n)return[D(n.r,0,1),D(n.g,0,1),D(n.b,0,1),r];if("h"in n&&"s"in n&&"l"in n)return Kn([n.h,D(n.s,0,1),D(n.l,0,1),r]);if("h"in n&&"w"in n&&"b"in n)return lo([n.h,D(n.w,0,1),D(n.b,0,1),r]);if("l"in n&&"a"in n&&"b"in n)return Vt([n.l,n.a,n.b,r]);if("l"in n&&"c"in n&&"h"in n)return qt([n.l,n.c,n.h,r]);if("x"in n&&"y"in n&&"z"in n)return Be(co([n.x,n.y,n.z,r]));throw t}throw t}function yr(e,t,n=.5,r="oklab"){let o=D(n,0,1);if(n===0)return _e(e);if(n===1)return _e(t);let s=1-o,i=o,l={oklch:Yt,oklab:Xt,lms:O=>Ie(xs(O)),linearRGB:Ie,sRGB:O=>O},a={oklch:qt,oklab:Vt,lms:O=>Ft(Be(O)),linearRGB:Be,sRGB:O=>O},u=l[r],c=a[r];if(!u)throw new Error(`Unknown color space "${r}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[f,h,y,b]=_e(e).rgbVal,[g,C,T,w]=_e(t).rgbVal;r==="oklch"&&(f===h&&h===y||g===C&&C===T)&&(u=l.oklab,c=a.oklab);let[$,m,z,v]=u([f,h,y,b]),[M,B,E,p]=u([g,C,T,w]);return r==="oklch"&&Math.abs(E-z)>180&&(Math.max(z,E)===E?E-=360:z-=360),_e(c([$*s+M*i,m*s+B*i,z*s+E*i,v*s+p*i]))}function Ss(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?yr(e,"black",r,n):_s(e,-r)}function _s(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?yr(e,"white",r,n):Ss(e,-r)}function Kt(e){return _e(e).xyzVal[1]}function Vd(e){return ke(_e(e).oklabVal[0],5)}function qd(e){return Kt(e)<.36?"dark":"light"}function Xd(e,t){let n=Kt(e),r=Kt(t),o=Math.max(n,r),s=Math.min(n,r),i=(o+.05)/(s+.05);return{ratio:i,AA:i>=4.5,AAA:i>=7}}var er={adjust:ks,contrastRatio:Xd,darken:Ss,from:_e,lighten:_s,lightness:Vd,lightOrDark:qd,luminance:Kt,mix:yr};function wr(e){var o,s,i;const t=e.dark.l,n=e.dark.c,r=e.dark.a??1;return{dark:{l:t,c:n,a:r},light:{l:((o=e.light)==null?void 0:o.l)??1-t,c:((s=e.light)==null?void 0:s.c)??n,a:((i=e.light)==null?void 0:i.a)??r}}}function Yd(e,t){const n=wr(t);return Object.assign(n,{dark:{h:e},light:{h:e}}),n}const Kd=(e,t,n,r=1)=>er.from(`oklch(${e} ${t}, ${n}, ${r})`);function Jd(e,t){const n={light:{},dark:{}};if(!e.windblade)return n;const{colors:r}=e.windblade;return Object.entries(r).forEach(([o,s])=>{[s.base,...s.on].forEach((l,a)=>{const u=`--${o}-${a===0?"base":`fg-${a}`}`,{dark:c,light:f}=wr(l);n.dark[u]=er.from(`oklch(${c.l} ${c.c}, ${t}, ${c.a})`).rgba,n.light[u]=er.from(`oklch(${f.l} ${f.c}, ${t}, ${f.a})`).rgba})}),n}function Zd(e){let t="";return Object.keys(e).forEach(n=>{t+=`${n}: ${e[n]};
`}),t}const Qd=Object.freeze(Object.defineProperty({__proto__:null,LCHToCSSColor:Kd,getColorSchemeCSSProps:Jd,getLCA:wr,getLCHA:Yd,objToCSS:Zd},Symbol.toStringTag,{value:"Module"}));function ef(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,s,i;if((s=(o=r.windblade)==null?void 0:o.miscColors)!=null&&s[n[2]])return{[t]:n[2]};if((i=r.windblade)!=null&&i.colors[n[2]])return{[t]:`var(--${n[2]}-base)`}}]}function tf(e){return[new RegExp(`^(${e})-(.+)$`),(t,{theme:n})=>{var s;const r=(s=n.windblade)==null?void 0:s.colors[t[2]];if(!r)return;const o={background:`var(--${t[2]}-base)`,color:`var(--${t[2]}-fg-1)`};for(let i=1;i<=r.on.length;++i)o[`--fg-${i}`]=`var(--${t[2]}-fg-${i})`;return o}]}function nf(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,s;return(s=(o=r.windblade)==null?void 0:o.miscColors)!=null&&s[n[2]]?{[t]:n[2]}:{[t]:`var(--fg-${n[2]})`}}]}const rf=Object.freeze(Object.defineProperty({__proto__:null,colorBgRule:tf,colorRule:ef,fgColorRule:nf},Symbol.toStringTag,{value:"Module"})),of={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},G=e=>e.filter(Boolean).join("-");function Cs(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"i",t]),G([n,"inline",r]))]}function js(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"bs",t]),G([n,"block-start",r])),o(G([e,"be",t]),G([n,"block-end",r])),o(G([e,"i",t]),G([n,"inline",r])),o(G([e,"is",t]),G([n,"inline-start",r])),o(G([e,"ie",t]),G([n,"inline-end",r]))]}function Ts(e,t,n,r,o){return[o(G([e,t]),G([n,r])),o(G([e,"ss",t]),G([n,"start-start",r])),o(G([e,"se",t]),G([n,"start-end",r])),o(G([e,"ee",t]),G([n,"end-end",r])),o(G([e,"es",t]),G([n,"end-start",r]))]}const sf=Object.freeze(Object.defineProperty({__proto__:null,abbreviations:of,axisRules:Cs,cornerRules:Ts,edgeRules:js},Symbol.toStringTag,{value:"Module"})),xr={x:["-x"],y:["-y"],z:["-z"],"":["-x","-y"]},ho=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"],Lt=Object.assign({},...ho.map(e=>({[e.replace(/ /,"-")]:e})),...ho.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e}))),fn=["inherit","initial","revert","revert-layer","unset"],kr=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,zs=/^(-?\d*(?:\.\d+)?)$/i,Os=/^(px)$/i,lf=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function me(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function af(e){const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(r&&!Number.isNaN(o))return`${me(o)}${r}`}function cf(e){if(e==="auto"||e==="a")return"auto"}function uf(e){if(e.match(Os))return`1${e}`;const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o/4)}rem`}function df(e){if(e.match(Os))return`1${e}`;const t=e.match(kr);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o)}px`}function ff(e){if(!zs.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return me(t)}function hf(e){if(e.endsWith("%")&&(e=e.slice(0,-1)),!zs.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return`${me(t/100)}`}function gf(e){if(e==="full")return"100%";const[t,n]=e.split("/"),r=Number.parseFloat(t)/Number.parseFloat(n);if(!Number.isNaN(r))return r===0?"0":`${me(r*100)}%`}const mf=/^\[(color|length|position|quoted|string):/i;function hn(e,t){if(e&&e.startsWith("[")&&e.endsWith("]")){let n,r;const o=e.match(mf);if(o?(t||(r=o[1]),n=e.slice(o[0].length,-1)):n=e.slice(1,-1),!n||n==='=""')return;n.startsWith("--")&&(n=`var(${n})`);let s=0;for(const i of n)if(i==="[")s+=1;else if(i==="]"&&(s-=1,s<0))return;if(s)return;switch(r){case"string":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return n.replace(/(url\(.*?\))/g,i=>i.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,i=>{const l=[];return i.replace(/var\((--.+?)[,)]/g,(a,u)=>(l.push(u),a.replace(u,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function pf(e){return hn(e)}function bf(e){return hn(e,"color")}function vf(e){return hn(e,"length")}function $f(e){return hn(e,"position")}function yf(e){if(e.match(/^\$[^\s'"`;{}]/))return`var(--${$r(e.slice(1))})`}function wf(e){const t=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0&&!r?"0s":r?`${me(o)}${r}`:`${me(o)}ms`}function xf(e){const t=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${me(o)}${r}`:`${me(o)}deg`}function kf(e){if(fn.includes(e))return e}function Sf(e){if(e.split(",").every(t=>lf.includes(t)))return e}function _f(e){if(["top","left","right","bottom","center"].includes(e))return e}const Cf={__proto__:null,numberWithUnit:af,auto:cf,rem:uf,px:df,number:ff,percent:hf,fraction:gf,bracket:pf,bracketOfColor:bf,bracketOfLength:vf,bracketOfPosition:$f,cssvar:yf,time:wf,degree:xf,global:kf,properties:Sf,position:_f},Ms=cd(Cf),H=Ms;function jf(e,t){const n=e.split(/(?:\/|:)/);return n[0]===`[${t}`?[n.slice(0,2).join(":"),n[2]]:n}function Ae(e,t){return fn.map(n=>[`${e}-${n}`,{[t??e]:n}])}const Tf=["%alpha","<alpha-value>"];new RegExp(Tf.map(e=>Ku(e)).join("|"));function Ls(e,t,n){var s,i,l;const r=(s=t.windblade)==null?void 0:s.proportions[e];if(r!==void 0)return`${r}${n}`;const o=(l=(i=t.windblade)==null?void 0:i.miscSizes)==null?void 0:l[e];if(o!==void 0)return`${o}`;if(!Number.isNaN(Number(e)))return`${e}${n}`}function gn(e,t,n){return[new RegExp(`^${e}-(.+)$`),([r,o],{theme:s})=>{const i=(n==null?void 0:n.defaultUnit)??"rem",l=Ms.bracket(o);if(l!==void 0)return{[t]:l};let a=Ls(o,s,i);if(a!==void 0)return n!=null&&n.postprocess&&(a=n.postprocess(a)),{[t]:a}}]}function zf(e,t,n,r){return Cs(e,t,n,r,gn)}function Of(e,t,n,r){return js(e,t,n,r,gn)}function Mf(e,t,n,r){return Ts(e,t,n,r,gn)}const Lf=Object.freeze(Object.defineProperty({__proto__:null,axisRules:zf,cornerRules:Mf,edgeRules:Of,resolve:Ls,rule:gn},Symbol.toStringTag,{value:"Module"}));function Af(e,t,n){return[new RegExp(`^(${e})-(.+)$`),(r,{theme:o})=>{if(!o.windblade)return;const s={},i=`${o.windblade.proportions[r[2]]*o.windblade.time.baseUnitMs}ms`;if(i!==void 0)return s[t]=(n==null?void 0:n(i))??i,s}]}function Ef(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{if(!r.windblade)return;const o={},s=r.windblade.time.functions[n[2]];if(s!==void 0)return o[t]=s,o}]}const Pf=Object.freeze(Object.defineProperty({__proto__:null,durationRule:Af,timingFunctionRule:Ef},Symbol.toStringTag,{value:"Module"})),Q=Object.freeze(Object.defineProperty({__proto__:null,color:rf,logical:sf,size:Lf,time:Pf},Symbol.toStringTag,{value:"Module"})),Rf={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}};function At(e,t){return{[`${e}-900`]:{base:{dark:{l:t[0].l,c:t[0].c},light:{l:t[9].l,c:t[9].c}},on:[{dark:{l:1,c:0}}]},[`${e}-800`]:{base:{dark:{l:t[1].l,c:t[1].c},light:{l:t[8].l,c:t[8].c}},on:[{dark:{l:1,c:0}}]},[`${e}-700`]:{base:{dark:{l:t[2].l,c:t[2].c},light:{l:t[7].l,c:t[7].c}},on:[{dark:{l:1,c:0}}]},[`${e}-600`]:{base:{dark:{l:t[3].l,c:t[3].c},light:{l:t[6].l,c:t[6].c}},on:[{dark:{l:1,c:0}}]},[`${e}-500`]:{base:{dark:{l:t[4].l,c:t[4].c},light:{l:t[5].l,c:t[5].c}},on:[{dark:{l:1,c:0}}]},[`${e}-400`]:{base:{dark:{l:t[5].l,c:t[5].c},light:{l:t[4].l,c:t[4].c}},on:[{dark:{l:0,c:0}}]},[`${e}-300`]:{base:{dark:{l:t[6].l,c:t[6].c},light:{l:t[3].l,c:t[3].c}},on:[{dark:{l:0,c:0}}]},[`${e}-200`]:{base:{dark:{l:t[7].l,c:t[7].c},light:{l:t[2].l,c:t[2].c}},on:[{dark:{l:0,c:0}}]},[`${e}-100`]:{base:{dark:{l:t[8].l,c:t[8].c},light:{l:t[1].l,c:t[1].c}},on:[{dark:{l:0,c:0}}]},[`${e}-50`]:{base:{dark:{l:t[9].l,c:t[9].c},light:{l:t[0].l,c:t[0].c}},on:[{dark:{l:0,c:0}}]}}}const Df={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...At("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...At("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...At("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...At("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Uf={windblade:{colors:{},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Sr={none:{},material3:Rf,tailwind:Df,windblade:Uf},go=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},Ce=(...e)=>e.reduce((t,n)=>{if(Array.isArray(n))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(n).forEach(r=>{["__proto__","constructor","prototype"].includes(r)||(Array.isArray(t[r])&&Array.isArray(n[r])?t[r]=Ce.options.mergeArrays?Ce.options.uniqueArrayItems?Array.from(new Set(t[r].concat(n[r]))):[...t[r],...n[r]]:n[r]:go(t[r])&&go(n[r])?t[r]=Ce(t[r],n[r]):t[r]=n[r])}),t},{}),tr={mergeArrays:!0,uniqueArrayItems:!0};Ce.options=tr;Ce.withOptions=(e,...t)=>{Ce.options=Object.assign(Object.assign({},tr),e);const n=Ce(...t);return Ce.options=tr,n};const mn={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{},time:{baseUnitMs:150,functions:{default:"linear"}}}},Jt=Object.entries,Pe=Object.keys;function k(e){return e.replace(/&/g,"&amp;").trimStart().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\n/g,"&#10;")}const{color:pt,logical:Ye}=Q;function pn(){const e=[pt.colorRule("bg","background-color"),pt.colorBgRule("bg"),pt.fgColorRule("bg-fg","background-color")],t=`
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

        <renderer for="fg" html="${k(`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full $util"></div>
          </div>
        `)}" />

        <renderer html="${k(`
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

        <renderer html="${k(`
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

        <renderer html="${k(`
          <div class="bg-gradient-to-ie $util from-accent-2 size-i-full size-b-l.2 rounded-s"></div>
        `)}" />

        <renderer for="from" html="${k(`
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
  `;return{rules:e,docs:t}}const Hf=Object.freeze(Object.defineProperty({__proto__:null,backgroundImage:_r,bgColor:pn,gradientColorStops:Cr},Symbol.toStringTag,{value:"Module"})),{color:Zt,logical:Ke}=Q;function bn(){const e=[...Ke.edgeRules("border","color","border","color",Zt.colorRule),...Ke.edgeRules("border","color-fg","border","color",Zt.fgColorRule)],t=`
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

        <renderer html="${k(`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const If=Object.freeze(Object.defineProperty({__proto__:null,borderColor:bn,outlineColor:vn},Symbol.toStringTag,{value:"Module"})),{color:nr}=Q;function jr(){const e=[nr.colorRule("accent","accent-color")],t=`
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

        <renderer html="${k(`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const Wf=Object.freeze(Object.defineProperty({__proto__:null,accentColor:jr,caretColor:Tr},Symbol.toStringTag,{value:"Module"})),{color:Qt}=Q;function $n(){const e=[Qt.colorRule("fill","fill"),Qt.fgColorRule("fill-fg","fill")],t=`
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

        <renderer html="${k(`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const Nf=Object.freeze(Object.defineProperty({__proto__:null,fill:$n,stroke:yn},Symbol.toStringTag,{value:"Module"})),{color:en}=Q;function wn(){const e=[en.colorRule("text","color"),en.fgColorRule("text-fg","color")],t=`
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

        <renderer html="${k(`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const Bf=Object.freeze(Object.defineProperty({__proto__:null,textColor:wn,textDecorationColor:xn},Symbol.toStringTag,{value:"Module"})),{getColorSchemeCSSProps:Gf,objToCSS:Et}=Qd;function kn(){const e=[[/^scheme-(auto|light|dark)-(\d+)$/,(n,{rawSelector:r,theme:o})=>{const s=Number(n[2]??0);if(Number.isNaN(s))return;const i=$r(r),{dark:l,light:a}=Gf(o,s);switch(n[1]){case"light":return`
              .${i} {
                color-scheme: light;
                ${Et(a)}
              }
            `;case"dark":return`
              .${i} {
                color-scheme: dark;
                ${Et(l)}
              }
            `;default:return`
              .${i} {
                color-scheme: light dark;
                ${Et(l)}
              }

              @media (prefers-color-scheme: light) { .${i} {
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const Ff=Object.freeze(Object.defineProperty({__proto__:null,colorScheme:kn},Symbol.toStringTag,{value:"Module"})),As=[...pn().rules,..._r().rules,...Cr().rules,...wn().rules,...xn().rules,...bn().rules,...vn().rules,...jr().rules,...Tr().rules,...$n().rules,...yn().rules,...kn().rules],Vf=`
import { defineConfig } from 'unocss';
import windbladeColor from '@windblade/unocss-preset-color';

export default defineConfig({
  presets: [
    windbladeColor(),
  ],
});`,qf=`import { defineConfig, presetMini } from 'unocss';
import windbladeColor from '@windblade/unocss-preset-color';

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
});`,Es=`
  <page>
    <h1><title /></h1>
    <p>Just like the complete Windblade, the Color module is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get @windblade/unocss-preset-color from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset-color" />
    <pre lang="ts" code="${k(Vf)}" />
    <p>That's it! You can now use Windblade's color utilities in your proejct but it is likely that you want more utilities for things like layout and typography, please read on to learn how to use Windblade's color module othether with other UnoCSS presets.</p>

    <h2>Installation with other UnoCSS presets</h2>
    <p>You likely want to combine @windblade/unocss-preset-color with other UnoCSS presets (e.g. @unocss/preset-mini) to get utilities for layout, typography and other CSS features. This should generally work without any problems but we recommend removing colors from other presets' configuration to avoid confusion and possible conflicts.</p>
    <p>You will find instructions on how to remove colors from most popuilar UnoCSS presets below. If you are using other presets consult the docs for those presets.</p>

    <h3>@unocss/preset-mini, @unocss/preset-wind &amp; @unocss/preset-uno</h3>
    <p>Use <code>extendTheme</code> property to remove <code>colors</code> from the config.</p>
    <pre lang="ts" code="${k(qf)}" />
  </page>
`,Rn=mn.windblade,Xf=`
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
};`,Yf=`
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
    <example html="${k(`
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
    <pre lang="ts" code="${k(Xf)}" />

    <p>Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.</p>
    <pre lang="ts" code="${k(Yf)}" />
  </page>
`,Kf=`
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
`,Jf=`
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
`,Zf=`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
`,Qf=`
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
    <pre lang="html" code="${k(Kf)}" />

    <h2>Foreground colors</h2>
    <p>All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.</p>
    <pre lang="html" code="${k(Jf)}" />

    <h2>Color scheme</h2>
    <p>Change hue and color scheme by applying color rules together with or inside of sheme-(auto|light|dark)-{number}.</p>
    <pre lang="html" code="${k('<div class="scheme-auto-80 bg-normal"></div>')}" />

    <p>It is a good idea apply a color scheme at the root of your app.</p>
    <pre lang="html" code="${k(Zf)}" />

    <h2>Using Windblade colors in JavaScrtipt</h2>
    <p>Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.</p>
    <pre lang="ts" code="${k(Qf)}" />
  </page>
`,rr=new Map([["Installation",Es],["Theme",zr],["Semantic colors",Or]]),eh=Object.freeze(Object.defineProperty({__proto__:null,categoy:rr,default:rr,installation:Es,semanticColors:Or,theme:zr},Symbol.toStringTag,{value:"Module"})),Ps=new Map([["Background",new Map([["Background Color",pn().docs],["Background Gradient",_r().docs],["Background Gradient Stops",Cr().docs]])],["Text",new Map([["Text Color",wn().docs],["Text Decoration Color",xn().docs]])],["Border",new Map([["Border Color",bn().docs],["Outline Color",vn().docs]])],["Other",new Map([["Color Scheme",kn().docs],["Accent color",jr().docs],["Caret color",Tr().docs],["Fill",$n().docs],["Stroke Color",yn().docs]])]]),th=Object.freeze(Object.defineProperty({__proto__:null,accessibility:Ff,backgrounds:Hf,borders:If,default:Ps,interactivity:Wf,svg:Nf,typography:Bf},Symbol.toStringTag,{value:"Module"})),nh=new Map([["Usage",rr],...Ps]),rh=Object.freeze(Object.defineProperty({__proto__:null,default:nh,rules:th,usage:eh},Symbol.toStringTag,{value:"Module"}));function Rs(e={}){return{name:"@windblade/unocss-preset-color",theme:mn,rules:As,options:e,prefix:void 0}}const oh=Object.freeze(Object.defineProperty({__proto__:null,default:Rs,docs:rh,rules:As,theme:mn},Symbol.toStringTag,{value:"Module"}));function sh(e,t,n){let r=e;for(n(t).forEach(([o,s])=>{r=r.replaceAll(`$${o}`,s.toString())});r.includes("$(");){const o=r.indexOf("$")+1,s=r.substring(o),i=0;let l=i,a=0;for(let c=0;c<s.length;++c)if(s[c]==="("&&++a,s[c]===")"&&--a,a===0){l=c+1;break}const u=s.substring(i,l);try{r=r.replace(`$${u}`,Function(`'use strict'; return (${u})`)())}catch{return e}}return r}function Ds(e){return(t,{theme:n})=>({matcher:sh(t,n,e)})}function Us(e){return[Ds(e)]}const ih=`
import { defineConfig } from 'unocss';
import windbladeDollars from '@windblade/unocss-preset-dollars';

export default defineConfig({
  presets: [
    windbladeDollars(),
  ],
});`,lh=`
  <page>
    <h1><title /></h1>
    <p>Just like the complete Windblade, the Dollars module is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get @windblade/unocss-preset-dollars from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset-dollars" />
    <pre lang="ts" code="${k(ih)}" />
    <p>That's it! You can now use Windblade's dollar syntax in your project.</p>
  </page>
`,ah=`
import { defineConfig } from 'vite'
import unocss from '@unocss/vite'
import presetDollars from '@windblade/unocss-preset-dollars'

export default defineConfig({
  plugins: [
    unocss({
      presets: [
        presetDollars({
          getVariables: () => ([
            ['small', 0.5],
            ['normal', 1],
            ['large', 2],
          ]),
        }),
      ],
    }),
  ],
})
`,ch=`
import { defineConfig } from 'vite'
import unocss from '@unocss/vite'
import presetDollars from '@windblade/unocss-preset-dollars'

export default defineConfig({
  plugins: [
    unocss({
      theme: {
        things: {
          a: 'foo',
          b: 'bar',
          color: 'oklch(80 0.2 0.8)',
          size: '2rem',
          unit: 16,
        }
      }
      presets: [
        presetDollars({
          getVariables: (theme) => Object.entries(theme.things),
        }),
      ],
    }),
  ],
})
`,uh=`
  <page>
    <h1><title /></h1>
    <p>You can customize where the dollars (key-value pairs) are coming from.</p>

    <p>Define a <code>getVariables</code> function inside the preset options that returns custom dollars as an array of key-value tuples.</p>
    <pre lang="ts" code="${k(ah)}" />

    <p>You can also use the <code>theme</code> argument passed to the <code>getVariables</code> to repalce keys with values from your theme.</p>
    <p>Make sure that values have a <code>toString</code> metod.</p>
    <pre lang="ts" code="${k(ch)}" />

    <p>If you don't provide this option the preset will make key-value pairs out of the <code>theme.windblade.proportions</code> object.</p>
  </page>
`,dh=`
<div class="grid grid-cols-[auto_$l_auto]"></div>
`,fh=`
<div class="p-s">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>
</div>
`,Mr=`
  <page>
    <h1>Using the $ syntax</h1>
    <p>You can grab proportions from your theme by prefixing their names with <code>$</code>. This is mainly useful inside brackets when you want to set custom values.</p>
    <pre lang="html" code="${k(dh)}" />

    <p>You can also use <code>$</code> to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p>
    <pre lang="html" code="${k(fh)}" />

    <p>Note that <code>$</code> is an UnoCSS <a href="https://github.com/unocss/unocss#custom-variants">variant</a> so it works with UnoCSS utilities that come from other presets too!</p>
  </page>
`,hh=Object.freeze(Object.defineProperty({__proto__:null,default:Mr},Symbol.toStringTag,{value:"Module"})),gh=new Map([["Usage",new Map([["Installation",lh],["Options",uh],["$ syntax",Mr]])]]),mh=Object.freeze(Object.defineProperty({__proto__:null,default:gh,dollarSyntax:hh},Symbol.toStringTag,{value:"Module"}));function Hs(e={}){const t=(e==null?void 0:e.getVariables)??(n=>{var r;return(r=n.windblade)!=null&&r.proportions?Object.entries(n.windblade.proportions):[]});return{name:"@windblade/unocss-preset-dollars",options:e,variants:Us(t),prefix:void 0}}const ph=Object.freeze(Object.defineProperty({__proto__:null,createVariantDollars:Ds,createVariants:Us,default:Hs,docs:mh},Symbol.toStringTag,{value:"Module"})),mo={mid:"middle",base:"baseline",btm:"bottom",baseline:"baseline",top:"top",start:"top",middle:"middle",bottom:"bottom",end:"bottom","text-top":"text-top","text-bottom":"text-bottom",sub:"sub",super:"super",...Object.fromEntries(fn.map(e=>[e,e]))};`${Object.keys(mo).join("|")}`;const It={all:"all",colors:["color","background-color","border-color","outline-color","text-decoration-color","fill","stroke"].join(","),none:"none",opacity:"opacity",shadow:"box-shadow",transform:"transform"};function po(e){return H.properties(e)??It[e]}[`${Object.keys(It).join("|")}`,`${[...fn,...Object.keys(It)].join("|")}`,...Ae("transition")];const bo={thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"};function vo(e,t){var n;return((n=t.lineHeight)==null?void 0:n[e])||H.bracket.cssvar.global.rem(e)}`${Object.keys(bo).join("|")}`;const bh=[["justify-start",{"justify-content":"flex-start"}],["justify-end",{"justify-content":"flex-end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-stretch",{"justify-content":"stretch"}],...Ae("justify","justify-content"),["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],...Ae("justify-items"),["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],...Ae("justify-self")],vh=[["content-center",{"align-content":"center"}],["content-start",{"align-content":"flex-start"}],["content-end",{"align-content":"flex-end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],...Ae("content","align-content"),["items-start",{"align-items":"flex-start"}],["items-end",{"align-items":"flex-end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],...Ae("items","align-items"),["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"flex-start"}],["self-end",{"align-self":"flex-end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],...Ae("self","align-self")];[...bh,...vh].flatMap(([e,t])=>[[`flex-${e}`,t],[`grid-${e}`,t]]);const $h=[[/^content-(.+)$/,([,e])=>({content:H.bracket.cssvar(e)})],["content-empty",{content:'""'}],["content-none",{content:"none"}]],$o=["translate","rotate","scale"],Ve=["translateX(var(--un-translate-x))","translateY(var(--un-translate-y))","translateZ(var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" "),yh=["translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" ");[(`${Object.keys(Lt).join("|")}`,`${Object.keys(Lt).join("|")}`),(`${$o.join("|")}`,`${$o.join("|")}`),...Ae("transform")];function yo([,e,t],{theme:n}){var o;const r=((o=n.spacing)==null?void 0:o[t])??H.bracket.cssvar.fraction.rem(t);if(r!=null)return[...xr[e].map(s=>[`--un-translate${s}`,r]),["transform",Ve]]}function wo([,e,t]){const n=H.bracket.cssvar.fraction.percent(t);if(n!=null)return[...xr[e].map(r=>[`--un-scale${r}`,n]),["transform",Ve]]}function xo([,e="",t]){const n=H.bracket.cssvar.degree(t);if(n!=null)return e?{"--un-rotate":0,[`--un-rotate-${e}`]:n,transform:Ve}:{"--un-rotate-x":0,"--un-rotate-y":0,"--un-rotate-z":0,"--un-rotate":n,transform:Ve}}function ko([,e,t]){const n=H.bracket.cssvar.degree(t);if(n!=null)return[...xr[e].map(r=>[`--un-skew${r}`,n]),["transform",Ve]]}function ye(e){return e.replace("col","column")}function or(e){return e[0]==="r"?"Row":"Column"}function wh(e,t,n){var o;const r=(o=t[`gridAuto${or(e)}`])==null?void 0:o[n];if(r!=null)return r;switch(n){case"min":return"min-content";case"max":return"max-content";case"fr":return"minmax(0,1fr)"}return H.bracket.cssvar.auto.rem(n)}const xh=[["grid",{display:"grid"}],["inline-grid",{display:"inline-grid"}],[/^(?:grid-)?(row|col)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-${ye(e)}`]:((r=n[`grid${or(e)}`])==null?void 0:r[t])??H.bracket.cssvar.auto(t)}}],[/^(?:grid-)?(row|col)-span-(.+)$/,([,e,t])=>{if(t==="full")return{[`grid-${ye(e)}`]:"1/-1"};const n=H.bracket.number(t);if(n!=null)return{[`grid-${ye(e)}`]:`span ${n}/span ${n}`}},{autocomplete:["grid-(row|col)-span-<num>","(row|col)-span-<num>"]}],[/^(?:grid-)?(row|col)-start-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-start`]:H.bracket.cssvar(t)??t})],[/^(?:grid-)?(row|col)-end-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-end`]:H.bracket.cssvar(t)??t}),{autocomplete:["grid-(row|col)-(start|end)-<num>"]}],[/^(?:grid-)?auto-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>({[`grid-auto-${ye(e)}`]:wh(e,n,t)}),{autocomplete:["grid-auto-(rows|cols)-<num>"]}],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,([,e])=>({"grid-auto-flow":H.bracket.cssvar(e)})],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,([,e])=>({"grid-auto-flow":ye(e).replace("-"," ")}),{autocomplete:["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"]}],[/^grid-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-template-${ye(e)}`]:((r=n[`gridTemplate${or(e)}`])==null?void 0:r[t])??H.bracket.cssvar(t)}}],[/^grid-(rows|cols)-minmax-([\w.-]+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(auto-fill,minmax(${t},1fr))`})],[/^grid-(rows|cols)-(\d+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(${t},minmax(0,1fr))`}),{autocomplete:["grid-(rows|cols)-<num>","grid-(rows|cols)-none"]}],[/^grid-area(s)?-(.+)$/,([,e,t])=>e!=null?{"grid-template-areas":H.cssvar(t)??t.split("-").map(n=>`"${H.bracket(n)}"`).join(" ")}:{"grid-area":H.bracket.cssvar(t)}],["grid-rows-none",{"grid-template-rows":"none"}],["grid-cols-none",{"grid-template-columns":"none"}]],{logical:Pt}=Q;function Is(){const e=[[/^(aspect)-(.+)$/,n=>{if(!n[2].includes(":"))return{"aspect-ratio":n[2]}}]],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses CSS ratios instead of presets.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>aspect-<input type="integer" /></util>
          <util>aspect-1/<input type="integer" /></util>
        </utils>

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Ws(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.</p>
    </page>
  `}}function Ns(){const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-after-${r}`,{"break-after":r}]),n=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(r=>`<util>break-after-${r}</util>`).join("")}
        </utils>

        <renderer html="${k(`
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
  `;return{rules:t,docs:n}}function Bs(){const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-before-${r}`,{"break-before":r}]),n=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(r=>`<util>break-before-${r}</util>`).join("")}
        </utils>

        <renderer html="${k(`
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
  `;return{rules:t,docs:n}}function Gs(){const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"],t={hidden:"none"},n=e.map(o=>[`${o}`,{display:Object.keys(t).includes(o)?t[o]:o}]),r=`
    <page>
      <h1><title /></h1>
      <p>Windblade removes some utilities from this group that cannot be sued semantically.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(o=>`<util>${o}</util>`).join("")}
        </utils>

        <renderer html="${k(`
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
  `;return{rules:n,docs:r}}function Fs(){const e=[...Jt(Pt.abbreviations.edges).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),...Jt(Pt.abbreviations.coners).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),["object-center",{"object-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[...Object.keys(Pt.abbreviations.edges),...Object.keys(Pt.abbreviations.coners),"center"].map(n=>`<util>object-${n}</util>`).join("")}
        </utils>

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{size:Vs}=Q,qs=[1,2,3,4,5,6,7,8,9].map(e=>`<div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">0${e}</div>`).join(`
`);function Xs(e,t){const n=[[`auto-${e}-auto`,{[`grid-auto-${t}`]:"auto"}],[`auto-${e}-fr`,{[`grid-auto-${t}`]:"minmax(0, 1fr)"}],Vs.rule(`auto-${e}`,`grid-auto-${t}`)],r=`
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

        <renderer html="${k(`
          <div class="grid $util ${e==="cols"?"grid-flow-col":"grid-flow-row"} gap-s bg-accent-3 rounded-s.4 size-i-full">
            ${qs}
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
  `;return{rules:n,docs:r}}const Ys=()=>Xs("cols","columns"),Ks=()=>Xs("rows","rows");function Sn(e,t,n){const r=[Vs.rule(`grid-${e}-${t}s`,`grid-template-${n}s`,{postprocess:s=>`repeat(auto-${e}, minmax(min(${s}, 100%), 1fr))`})],o=`
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

        <renderer html="${k(`
          <div class="grid $util ${t==="row"?"grid-flow-col":"grid-flow-auto"} gap-s bg-accent-3 rounded-s.4 size-i-full">
            ${qs}
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
  `;return{rules:r,docs:o}}const Js=()=>Sn("fit","col","column"),Zs=()=>Sn("fill","col","column"),Qs=()=>Sn("fit","row","row"),ei=()=>Sn("fill","row","row");function ue(e,t,n,r){return e.map(o=>`
    <for object="${o}" key-as="${t}" value-as="${n}">
      ${r}
    </for>
  `).join("")}const{logical:Dn}=Q;function ct(e){return`
    <select>
      ${[...e.axis?Object.keys(Dn.abbreviations.axis):[],...e.edges?Object.keys(Dn.abbreviations.edges):[],...e.corners?Object.keys(Dn.abbreviations.coners):[]].map(t=>`
        <option value="${t}"/>
      `).join("")}
    </select>
  `}const{size:ti}=Q;function ni(){const e=ti.edgeRules("p","","padding",""),t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function ri(){const e=ti.edgeRules("m","","margin",""),t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function oi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this. Please use gap and flex/grid/columns instead.</p>
    </page>
  `}}const{logical:nt,size:Lr}=Q;function si(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this, as well as min and max variants, in favor of the size counterparts</p>
    </page>
  `}}function ii(){const e=Lr.axisRules("size","","","size"),t=`
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
          <renderer for="${n}" html="${k(`
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
  `;return{rules:e,docs:t}}function li(e){return`
  <div class="$util ${e==="inline"?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`}function ai(){const e=Lr.axisRules("min-size","","min","size"),t=`
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
          <renderer for="${n}" html="${k(`
            ${li(n)}
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
  `;return{rules:e,docs:t}}function ci(){const e=Lr.axisRules("max-size","","max","size"),t=`
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
          <renderer for="${n}" html="${k(`
            ${li(n)}
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
  `;return{rules:e,docs:t}}const{logical:Rt}=Q;function ui(){const e=[...Jt(Rt.abbreviations.edges).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),...Jt(Rt.abbreviations.coners).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),["bg-center",{"background-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>${[...Object.keys(Rt.abbreviations.edges),...Object.keys(Rt.abbreviations.coners),"center"].map(n=>`
          <util>bg-${n}</util>
        `).join("")}</utils>

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{size:_t}=Q;function di(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font family utilities have been removed.</p>
    </page>
  `}}function fi(){const e=[_t.rule("text","font-size")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function hi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.</p>
    </page>
  `}}function gi(){const e=[_t.rule("tracking","letter-spacing",{defaultUnit:"em"})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function mi(){const e=[_t.rule("leading","line-height",{defaultUnit:""})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function pi(){const e=[["decoration-from-font",{"text-decoration-thickness":"from-font"}],_t.rule("decoration","text-decoration-thickness")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function bi(){const e=[_t.rule("underline-offset","text-underline-offset")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{logical:So,size:_n}=Q;function vi(){const e=[..._n.cornerRules("rounded","","border","radius"),...So.cornerRules("rounded","full","border","radius",(n,r)=>[n,{[r]:"99999px"}]),...So.cornerRules("rounded","none","border","radius",(n,r)=>[n,{[r]:"none"}])],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function $i(){const e=_n.edgeRules("border","","border","width"),t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function yi(){const e=[_n.rule("outline","outline-width")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function wi(){const e=[_n.rule("outline-offset","outline-offset")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function xi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Divides have been removed.</p>
    </page>
  `}}function ki(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Rings have been removed.</p>
    </page>
  `}}const{size:kh}=Q;function Si(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}}function _i(){const e=[kh.rule("opacity","opacity",{defaultUnit:""})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Ci(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}}const{size:Sh}=Q;function ji(){const e=[Sh.rule("border-spacing","border-spacing")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{time:rt}=Q;function Ti(){const e=[rt.durationRule("duration","transition-duration"),rt.durationRule("delay","transition-delay")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function zi(){const e=[rt.timingFunctionRule("ease","transition-timing-function")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Oi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.</p>
    </page>
  `}}function Mi(){const e=[rt.durationRule("animation-duration","animation-duration"),rt.durationRule("animation-delay","animation-delay")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Li(){const e=[rt.timingFunctionRule("animation-ease","animation-timing-function")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{size:Cn}=Q;function Ai(){const e=[Cn.rule("scale","transform",{defaultUnit:"",postprocess:n=>`scale${n}`})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Ei(){const e=[Cn.rule("rotate","transform",{defaultUnit:"deg",postprocess:n=>`rotate${Number(n)*360}`})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Pi(){const e=[Cn.rule("translate","transform",{postprocess:n=>`translate${n}`})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Ri(){const e=[Cn.rule("skew","transform",{defaultUnit:"deg",postprocess:n=>`skew${Number(n)*360}`})],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{size:Di}=Q;function Ui(){const e=Di.edgeRules("scroll-m","","scroll-margin",""),t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Hi(){const e=Di.edgeRules("scroll-p","","scroll-padding",""),t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Ii(){const e=[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}function Wi(){const e=[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{size:_h}=Q;function Ni(){const e=[_h.rule("stroke","stroke-width")],t=`
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

        <renderer html="${k(`
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
  `;return{rules:e,docs:t}}const{logical:Je,size:q}=Q,Ch=[...Is().rules,...Ws().rules,[/^(columns)-(.+)$/,(e,{theme:t})=>{const n=e[2].split(","),r=q.resolve(n[0],t,"rem"),o=n[1];return{columns:[r,o].join(" ")}}],...Ns().rules,...Bs().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...Gs().rules,...Object.keys(Je.abbreviations.inlineEdges).map(e=>[`float-${e}`,{float:Je.abbreviations.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(Je.abbreviations.inlineEdges).map(e=>[`clear-${e}`,{clear:Je.abbreviations.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...Fs().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>Je.axisRules("overflow",e,"overflow","",(t,n)=>[t,{[n]:e}])),...["auto","contain","none"].flatMap(e=>Je.axisRules("overscroll",e,"overscroll-behavior","",(t,n)=>[t,{[n]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...q.edgeRules("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e.replace("invisible","hidden")}]),[/^z-(.+)$/,e=>({"z-index":e[2]})],q.rule("basis","flex-basis"),...q.edgeRules("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[/^(order)-(.+)$/,e=>({order:e[2]})],["order-none",{order:"0"}],...xh,...Js().rules,...Zs().rules,...Qs().rules,...ei().rules,...Ys().rules,...Ks().rules,q.rule("gap","gap"),q.rule("gap-col","column-gap"),q.rule("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-self-auto",{"place-self":"auto"}],["place-self-start",{"place-self":"start"}],["place-self-end",{"place-self":"end"}],["place-self-center",{"place-self":"center"}],["place-self-stretch",{"place-self":"stretch"}],...ni().rules,...ri().rules,...oi().rules,...si().rules,...ii().rules,...ai().rules,...ci().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...ui().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...di().rules,...fi().rules,...hi().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...gi().rules,...mi().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...pi().rules,...bi().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],q.rule("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],q.rule("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],...$h,...vi().rules,[/^(border)$/,()=>({"border-style":"solid","border-width":"1px"})],...$i().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...xi().rules,...yi().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...wi().rules,...ki().rules,...Si().rules,..._i().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],q.rule("blur","filter",{postprocess:e=>`blur(${e})`}),q.rule("brightness","filter",{postprocess:e=>`brightness(${e})`}),q.rule("contrast","filter",{postprocess:e=>`contrast(${e})`}),...Ci().rules,q.rule("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),q.rule("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("invert","filter",{postprocess:e=>`invert(${e})`}),q.rule("saturate","filter",{postprocess:e=>`saturate(${e})`}),q.rule("sepia","filter",{postprocess:e=>`sepia(${e})`}),q.rule("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),q.rule("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),q.rule("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),q.rule("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),q.rule("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),q.rule("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),q.rule("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),q.rule("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],...ji().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:{windblade:t}})=>t&&{transition:"all","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-colors)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-opacity)$/,(e,{theme:{windblade:t}})=>t&&{transition:"opacity","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-shadow)$/,(e,{theme:{windblade:t}})=>t&&{transition:"box-shadow","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-transform)$/,(e,{theme:{windblade:t}})=>t&&{transition:"transform","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],...Ti().rules,...zi().rules,...Oi().rules,...Mi().rules,...Li().rules,...Ai().rules,...Ei().rules,...Pi().rules,...Ri().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...Ui().rules,...Hi().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...Ii().rules,...Wi().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...Ni().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],jh=Ch,Th=[{getCSS:()=>`
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
    `}],zh=Th,Oh=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
});`,Mh=`import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';
import presetVariants from 'unocss-preset-mini-variants';

export default defineConfig({
  presets: [
    presetWindblade(),
    presetVariants(),
  ],
});`,Lh=`import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});`,Ah=`
  <page>
    <h1><title /></h1>
    <p>Windblade is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset" />
    <pre lang="ts" code="${k(Oh)}" />

    <h2>Recommended additions</h2>
    <p>Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.</p>

    <h3>Getting hover, active, etc.</h3>
    <p>Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.</p>
    <pre lang="sh" code="npm install unocss-preset-mini-variants" />
    <pre lang="ts" code="${k(Mh)}" />

    <h3>Getting @apply</h3>
    <p>UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.</p>
    <pre lang="sh" code="npm install -D @unocss/transformer-directives" />
    <pre lang="ts" code="${k(Lh)}" />
  </page>
`,Bi=Ah,xe={block:"bg-surface p-s transition text-center rounded-s.4"},Eh=`
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
</div>`,Ph=`
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

    <example html="${k(Eh)}" />

    <p>Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. <code>background-position</code> with <code>bg-{corner}</code> utility).</p>
    <p>If you are new to logical properties try playing with <code>bg-gradient-to-{edge/corner}</code> and see which way the gradient goes.</p>
    <p>Please note that <code>width</code> and <code>height</code> are completely removed in favor of <code>size-{axis}</code>.</p>
  </page>
`,Gi=Ph,Rh=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});`,Dh=`
  <page>
    <h1><title /></h1>
    <p>At the moment Windblade only exposes one option which configures which theme preset is used.</p>
    <p>To specify which preset to use define the <code>theme</code> value in the preset options:</p>
    <pre lang="ts" code="${k(Rh)}" />

    <p>The following themes are available:</p>
    <ul>
      ${Object.keys(Sr).map(e=>`<li><code>${e}</code></li>`).join("")}
    </ul>

    <p><small>Please note that the <code>material3</code> theme is not finished and is almost unusable at the moment.</small></p>
  </page>
`,Fi=Dh,Uh=`
  <page>
    <h1>Hover, focus and other states</h1>
    <p>Windblade does not come with functionality like hover or focus states. Please use Windblade together with <a href="https://www.npmjs.com/package/unocss-preset-mini-variants">unocss-preset-mini-variants</a> or other variant implementations if you need this functionality.</p>
  </page>
`,Vi=Uh,qi=Mr,Xi=Or,sr=new Map([["Installation",Bi],["Options",Fi],["Semantic colors",Xi],["Logical properties",Gi],["$ syntax",qi],["Hover, focus and other states",Vi]]),Hh=Object.freeze(Object.defineProperty({__proto__:null,categoy:sr,default:sr,dollarSyntax:qi,installation:Bi,logicalProperties:Gi,options:Fi,semanticColors:Xi,variants:Vi},Symbol.toStringTag,{value:"Module"})),Un=Sr.windblade.windblade,Oe={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Ih=`
const theme: Theme = {
  windblade: {
    proportions: {
      'half': 0.5,
      'full': 1,
      'double': 2,
    },
  },
};`,Wh=`
  <page>
    <h1><title /></h1>
    <p>Proportions are used throughout the whole preset for size, duration, opacity, etc.</p>
    <p>Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.</p>

    <h2>Default proportions</h2>
    <p>By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.</p>
    <example html="${k(`
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
    <pre lang="ts" code="${k(Ih)}" />

    <p>Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.</p>
  </page>
`,Nh=Wh,Bh=`
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
`,Gh=`
  <page>
    <h1>Other theme objects</h1>
    <p>See the theme type below for other values you can customize.</p>

    <h2>Theme type</h2>
    <pre lang="ts" code="${k(Bh)}" />
  </page>
`,Fh=Gh,Yi=zr,ir=new Map([["Semantic Colors",Yi],["Proportions",Nh],["Other",Fh]]),Vh=Object.freeze(Object.defineProperty({__proto__:null,categoy:ir,colors:Yi,default:ir},Symbol.toStringTag,{value:"Module"})),Ki=new Map([["Layout",new Map([["Aspect Ratio",Is().docs],["Container",Ws().docs],["Break After",Ns().docs],["Break Before",Bs().docs],["Disaply",Gs().docs],["Object Position",Fs().docs]])],["Flexbox & Grid",new Map([["Grid Auto Columns",Ys().docs],["Grid Auto Rows",Ks().docs],["Grid Fit Columns",Js().docs],["Grid Fit Rows",Qs().docs],["Grid Fill Clumns",Zs().docs],["Grid Fill Rows",ei().docs]])],["Spacing",new Map([["Padding",ni().docs],["Margin",ri().docs],["Space between",oi().docs]])],["Sizing",new Map([["Width & Height",si().docs],["Size",ii().docs],["Min-Size",ai().docs],["Max-Size",ci().docs]])],["Background",new Map([["Color",pn().docs],["Background Position",ui().docs]])],["Typography",new Map([["Font Family",di().docs],["Font Size",fi().docs],["Font Smoothing",hi().docs],["Letter Spacing",gi().docs],["Line Height",mi().docs],["Text Color",wn().docs],["Text Decoration Color",xn().docs],["Text Decoration Thickness",pi().docs],["Text Underline Offset",bi().docs]])],["Borders",new Map([["Border Radius",vi().docs],["Border Width",$i().docs],["Border Color",bn().docs],["Outline Width",yi().docs],["Outline Offset",wi().docs],["Outline Color",vn().docs],["Divide",xi().docs],["Ring",ki().docs]])],["Effects",new Map([["Box Shadow",Si().docs],["Opacity",_i().docs]])],["Filters",new Map([["Drop Shadow",Ci().docs]])],["Tables",new Map([["Border spacing",ji().docs]])],["Transitions & Animation",new Map([["Transition Delay & Duration",Ti().docs],["Transition Timing Function",zi().docs],["Animations",Oi().docs],["Animation Delay & Duration",Mi().docs],["Animation Timing Function",Li().docs]])],["Transforms",new Map([["Scale",Ai().docs],["Rotate",Ei().docs],["Translate",Pi().docs],["Skew",Ri().docs]])],["Interactivity",new Map([["Scroll margin",Ui().docs],["Scroll padding",Hi().docs],["Scroll snap type",Ii().docs],["Touch action",Wi().docs]])],["SVG",new Map([["Fill",$n().docs],["Stroke Color",yn().docs],["Stroke Width",Ni().docs]])],["Accessibility",new Map([["Color Scheme",kn().docs]])]]),qh=Object.freeze(Object.defineProperty({__proto__:null,default:Ki},Symbol.toStringTag,{value:"Module"})),Xh=new Map([["Usage",sr],["Theme",ir],...Ki]),Yh=Object.freeze(Object.defineProperty({__proto__:null,default:Xh,rules:qh,theme:Vh,usage:Hh},Symbol.toStringTag,{value:"Module"}));function Ji(e={}){e.theme=e.theme??"windblade";const t=Rs(),n=Hs();return{name:"@windblade/unocss-preset",theme:Ce(Cd,mn,Sr[e.theme]),rules:[...t.rules??[],...n.rules??[],...jh],variants:[...t.variants??[],...n.variants??[]],options:{...t.options,...n.options,...e},postprocess:[],preflights:[...t.preflights??[],...n.preflights??[],...zh],prefix:void 0,shortcuts:[]}}const Kh=Object.freeze(Object.defineProperty({__proto__:null,default:Ji,docs:Yh},Symbol.toStringTag,{value:"Module"})),tn=we(()=>yd({presets:[Ji()],safelist:["scheme-dark-276","scheme-light-296"]})),Jh=x('<div class="bg-surface rounded-s p-s flex gap-s text-fg-3"><div class="i-mdi-exclamation"></div>Please select a utility first'),_o=x("<pre>"),{formatter:Co,highlighter:jo}=He,Ar=fe(),To={pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"},Hn=()=>Jh(),Zh=e=>{const t=se(Ar);if(e.type==="element")switch(e.name){case"utils":return d(qu,e);case"renderer":return null;case"viewport":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},get children(){return d(vs,{get html(){return(t==null?void 0:t.html())??""},get css(){var n;return((n=t==null?void 0:t.css())==null?void 0:n.fullCss)??""},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;"})}});case"html":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},keyed:!0,children:({util:n})=>(()=>{const r=_o();return L(o=>{var l,a;const s=To.pre,i=(a=jo())==null?void 0:a.highlight(((l=Co())==null?void 0:l.html_beautify((t==null?void 0:t.html())??""))??"",{language:"xml"}).value.replaceAll(n,`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${n}</span>`);return s!==o._v$&&j(r,o._v$=s),i!==o._v$2&&(r.innerHTML=o._v$2=i),o},{_v$:void 0,_v$2:void 0}),r})()});case"css":return d(Y,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(Hn,{})},get children(){const n=_o();return L(r=>{var i,l,a;const o=`${To.pre} css`,s=(a=jo())==null?void 0:a.highlight(((l=Co())==null?void 0:l.css_beautify(((i=t==null?void 0:t.css())==null?void 0:i.shortCss)??""))??"",{language:"css"}).value;return o!==r._v$3&&j(n,r._v$3=o),s!==r._v$4&&(n.innerHTML=r._v$4=s),r},{_v$3:void 0,_v$4:void 0}),n}})}},Qh=e=>{const[t,n]=P(),[r,o]=P(""),[s,i]=P();te(async()=>{var f;const u=(await tn.generate(((f=t())==null?void 0:f.util)??"",{safelist:!1,preflights:!1,minify:!0})).css,c=(await tn.generate(r())).css;i({shortCss:u,fullCss:c})});const l=()=>e.children.map(u=>u.type!=="element"||u.name!=="renderer"||!u.attributes||!u.attributes.html?null:[new RegExp(u.attributes.for??""),u.attributes.html]).filter(Boolean),a=u=>{n(u);for(let c=0;c<l().length;++c){const[f,h]=l()[c];if(f.test(u.renderer)){o(h.replaceAll("$util",u.util));return}}};return d(Ar.Provider,{value:{selectUtil:a,selected:t,html:r,css:s},get children(){return d(lt.Provider,{get value(){return St([Zh])},get children(){return d(ie,e)}})}})};function zo(e){let t=tn.config;return e.split(".").forEach(n=>t=t[n]),t}const eg=e=>{const t=se(ht),n="'for' requires an 'array' or 'object' attribute",r="'for' requires a 'value-as' attribute",o="'for' with an 'object' attribute requires a 'key-as' attribute",s=e.attributes;if(!s)return d(oe,{children:n});if(s.array)return s.as?d(vt,{get each(){return zo(qn(s.array))},children:i=>d(ht.Provider,{get value(){return{...t,value:i}},get children(){return d(ie,e)}})}):d(oe,{children:r});if(s.object){const i=s["value-as"];if(!i)return d(oe,{children:r});const l=s["key-as"];return l?d(vt,{get each(){return Object.entries(zo(qn(s.object))??{})},children:([a,u])=>d(ht.Provider,{get value(){return{...t,[l]:a,[i]:`${u}`}},get children(){return d(ie,e)}})}):d(oe,{children:o})}return d(oe,{children:n})},tg=e=>{const t=se(ht);return`${t==null?void 0:t[e.var]}`},ng=e=>{const[t,n]=P("");return te(async()=>{n((await tn.generate(e.html)).css)}),d(vs,{get html(){return e.html},get css(){return t()}})},Oo=x("<pre>"),{highlighter:rg}=He,og=e=>{var r;const t=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${e.lang??""}`;if(!e.lang)return(()=>{const o=Oo();return j(o,t),_(o,()=>e.value),o})();let n=e.value;try{n=((r=rg())==null?void 0:r.highlight(e.value,{language:e.lang}).value)??""}catch(o){return d(oe,{get children(){return["Failed highlighting code. ",R(()=>o.message)]}})}return(()=>{const o=Oo();return j(o,t),o.innerHTML=n,o})()},sg=x('<h2 class="text-fg-1 font-bold text-m.2">'),ig=x('<h3 class="font-bold text-$($s+$s.2)">'),lg=x('<h4 class="font-bold">'),ag=x('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]">'),cg=x('<small class="text-fg-4">'),ug=x('<a class="text-accent transition hover:highlight active:highlight+">'),dg=x('<ul class="p-is-s flex flex-col gap-s.4">'),fg=x('<li class="text-fg-3 font-semibold leading-$($s+$s.2)">'),hg=x('<code class="bg-surface p-i-s.4 rounded-s.4">'),gg=e=>{const t=se(Zi);switch(e.type){case"text":return e.value;case"element":switch(e.name){case"h1":return(()=>{const n=sg();return _(n,d(ie,e)),n})();case"h2":return(()=>{const n=ig();return _(n,d(ie,e)),n})();case"h3":return(()=>{const n=lg();return _(n,d(ie,e)),n})();case"title":return(t==null?void 0:t.title)??d(oe,{children:"No title"});case"p":return(()=>{const n=ag();return _(n,d(ie,e)),n})();case"small":return(()=>{const n=cg();return _(n,d(ie,e)),n})();case"a":return(()=>{const n=ug();return _(n,d(ie,e)),L(()=>{var r;return pe(n,"href",((r=e.attributes)==null?void 0:r.href)??"#")}),n})();case"ul":return(()=>{const n=dg();return _(n,d(ie,e)),n})();case"li":return(()=>{const n=fg();return _(n,d(ie,e)),n})();case"code":return(()=>{const n=hg();return _(n,d(ie,e)),n})();case"pre":return d(og,{get lang(){var n;return((n=e.attributes)==null?void 0:n.lang)??"txt"},get value(){var n;return((n=e.attributes)==null?void 0:n.code)??""}});case"example":return d(ng,{get html(){var n;return((n=e.attributes)==null?void 0:n.html)??""}});case"try-it":return d(Qh,e);case"for":return d(eg,e);case"sample":return d(Y,{get when(){var n;return(n=e.attributes)==null?void 0:n.var},keyed:!0,children:n=>d(tg,{var:n})});default:return d(oe,{get children(){return["Unsupported XML element: ",R(()=>e.name)]}})}default:return d(oe,{get children(){return["Unsupported XML node type: ",R(()=>e.type)]}})}},mg=e=>d(lt.Provider,{get value(){return St([gg])},get children(){return d(ie,e)}}),Zi=fe(),pg=e=>d(Zi.Provider,{get value(){return{title:e.title}},get children(){return d(vt,{get each(){return e.children},children:t=>{switch(t.type){case"element":switch(t.name){case"page":return d(mg,t)}}return d(oe,{children:"Only 'page' tag is recognized as the page root"})}})}}),bg=e=>d(Fe,{class:"p-m.2 [&>*]:m-be-s",get children(){return d(bl,{fallback:"Loading...",get children(){return(()=>{const t=He.xml();if(!t)return"Error: Failed to load XML parser";let n;try{n=t.fromXml(e.page)}catch(r){return d(oe,{get children(){return["Error parsing this page: ",r]}})}return n?d(pg,re(n,{get title(){return e.title}})):d(oe,{children:"Error processing this page"})})()}})}});function Qi(e,t,n=0){const r=t[n];if(!r)return e;const o=e.get(decodeURIComponent(r));return o instanceof Map?Qi(o,t,++n):o}const vg=()=>{const e=wt(),t=it.getCachedModuleById(e.moduleId),n=()=>t.success,r=()=>decodeURIComponent(e.l6??e.l5??e.l4??e.l3??e.l2??e.l1),o=()=>Qi(t.value.docs,[e.l1,e.l2,e.l3,e.l4,e.l5,e.l6]);return d(Y,{get when(){return n()},get fallback(){return d(Fe,{children:"Error"})},get children(){return d(Y,{get when(){return typeof o()=="string"},get fallback(){return d(Fe,{children:"Not a page"})},get children(){return d(bg,{get page(){return o()},get title(){return r()}})}})}})},$g=x('<div class="i-mdi-brightness-4 transition">'),yg=x('<div class="absolute i-mdi-brightness-7 transition">'),wg=x('<div class="absolute i-mdi-brightness-2 transition">'),xg=x('<div class="i-simple-icons-github">'),Mo=x('<img alt="Logo" class="size-b-m.2">'),kg=x('<div class="size-b-full grid" style="grid-template-rows:auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex items-center"><h1 class="font-bold text-fg-1 "></h1><div class="flex-1 flex justify-end"><div>'),Sg=x('<div class="i-mdi-dots-vertical">'),_g=x('<div style="z-index:1">'),Cg=()=>{const[e,t]=P(0),[n,r]=P(0),[o,s]=P(!1);let i,l;const a=()=>[d(Ne,{href:"/",children:"Home"}),d(Ne,{href:"/docs",children:"Docs"}),d(Le,{get onClick(){return Se.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const f=$g();return L(h=>Me(f,`opacity: ${Se.enforceScheme()===void 0?1:0}`,h)),f})(),(()=>{const f=yg();return L(h=>Me(f,`opacity: ${Se.enforceScheme()==="light"?1:0}`,h)),f})(),(()=>{const f=wg();return L(h=>Me(f,`opacity: ${Se.enforceScheme()==="dark"?1:0}`,h)),f})()]}}),d(as,{href:"https://github.com/StarLederer/windblade",get children(){return xg()}})],u=new ResizeObserver(([f])=>{t(f.borderBoxSize[0].inlineSize)}),c=new ResizeObserver(([f])=>{r(f.borderBoxSize[0].inlineSize)});return te(async()=>{u.disconnect(),i&&u.observe(i)}),te(async()=>{o(),c.disconnect(),l&&c.observe(l)}),te(()=>{s(e()>=n()*1.2)}),(()=>{const f=kg(),h=f.firstChild,y=h.firstChild,b=y.nextSibling,g=b.firstChild;_(y,d(Ne,{style:"none",href:"/",class:"flex gap-s.4 items-center -m-i-s.4 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4",get children(){return[d(Y,{get when(){return Se.scheme()==="dark"},get fallback(){return(()=>{const w=Mo();return pe(w,"src",Ga),w})()},get children(){const w=Mo();return pe(w,"src",Ba),w}}),"Windblade"]}}));const C=i;typeof C=="function"?et(C,b):i=b;const T=l;return typeof T=="function"?et(T,g):l=g,_(g,a),_(b,d(Ia,{defaultOpen:!1,get class(){return`${o()?"hidden":""}`},children:({isOpen:w})=>[d(dn,{style:"half",class:"rounded-full p-s",as:$=>d(Wa,$),get children(){return Sg()}}),d(Na,{unmount:!1,class:"relative",get children(){const $=_g();return _($,a),L(()=>j($,`flex flex-col gap-s.2 absolute inset-ie-0 inset-bs-0 bg-surface rounded-s m-b-s.8 p-s.2 border border-color-surface animation-duration-s animation-ease-linear backdrop-blur-s delay-m.2 ${w()?"delay-zero animate-in":"animate-out invisible"}`)),$}})]}),null),_(f,d(br,{}),null),L(w=>{const $=`flex gap-s.4 ${o()?"":"invisible fixed"}`,m=!o();return $!==w._v$&&j(g,w._v$=$),m!==w._v$2&&pe(g,"aria-hidden",w._v$2=m),w},{_v$:void 0,_v$2:void 0}),f})()},jg=()=>d(ca,{get source(){return Tc()},get children(){return d(ua,{get children(){return d(De,{path:"/",component:Cg,get children(){return[d(De,{path:"/",component:Zc}),d(De,{path:"/docs",get element(){return d(br,{})},get children(){return[d(De,{path:"/",component:tu}),d(De,{path:"/:moduleId",get element(){return d(Xr,{when:e=>e.moduleId,component:Ou})},get children(){return[d(De,{path:"/*",component:Eu}),d(De,{path:"/:l1/:l2?/:l3?/:l4?/:l5?/:l6?",get element(){return d(Xr,{when:e=>Object.values(e),component:vg})}})]}})]}})]}})}})}}),Tg=x("<div>"),zg=()=>{it.fetchIndex();const e=()=>`scheme-${Se.scheme()}-${Se.hue()}`;return(()=>{const t=Tg();return _(t,d(jg,{})),L(()=>j(t,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden animate-in animation-duration-m.4`)),t})()};Tl(()=>d(zg,{}),document.body);
