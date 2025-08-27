(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const N={context:void 0,registry:void 0};function ht(e){N.context=e}const el=(e,t)=>e===t,Wt=Symbol("solid-proxy"),tl=Symbol("solid-track"),nl=Symbol("solid-dev-component"),Bt={equals:el};let Mo=Do;const ve=1,vt=2,Ao={owned:null,cleanups:null,context:null,owner:null},Tn={};var I=null;let S=null,G=null,ce=null,ae=null,rn=0;const[rl,Hr]=E(!1);function we(e,t){const n=G,r=I,o=e.length===0,s=o?Ao:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},i=o?e:()=>e(()=>ne(()=>Pe(s)));I=s,G=null;try{return me(i,!0)}finally{G=n,I=r}}function E(e,t){t=t?Object.assign({},Bt,t):Bt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(S&&S.running&&S.sources.has(n)?o=o(n.tValue):o=o(n.value)),Ro(n,o));return[Po.bind(n),r]}function Wn(e,t,n){const r=on(e,t,!0,ve);st(r)}function L(e,t,n){const r=on(e,t,!1,ve);st(r)}function te(e,t,n){Mo=cl;const r=on(e,t,!1,ve),o=Ve&&sn(I,Ve.id);o&&(r.suspense=o),(!n||!n.render)&&(r.user=!0),ae?ae.push(r):st(r)}function P(e,t,n){n=n?Object.assign({},Bt,n):Bt;const r=on(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,st(r),Po.bind(r)}function It(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let i=null,l=Tn,a=null,u=!1,c=!1,d="initialValue"in s,h=typeof r=="function"&&P(r);const $=new Set,[p,m]=(s.storage||E)(s.initialValue),[j,C]=E(void 0),[y,k]=E(void 0,{equals:!1}),[g,O]=E(d?"ready":"unresolved");if(N.context){a=`${N.context.id}${N.context.count++}`;let b;s.ssrLoadFrom==="initial"?l=s.initialValue:N.load&&(b=N.load(a))&&(l=b[0])}function v(b,z,W,R){return i===b&&(i=null,R!==void 0&&(d=!0),(b===l||z===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(R,{value:z})),l=Tn,S&&b&&u?(S.promises.delete(b),u=!1,me(()=>{S.running=!0,A(z,W)},!1)):A(z,W)),z}function A(b,z){me(()=>{z===void 0&&m(()=>b),O(z!==void 0?"errored":d?"ready":"unresolved"),C(z);for(const W of $.keys())W.decrement();$.clear()},!1)}function H(){const b=Ve&&sn(I,Ve.id),z=p(),W=j();if(W!==void 0&&!i)throw W;return G&&!G.user&&b&&Wn(()=>{y(),i&&(b.resolved&&S&&u?S.promises.add(i):$.has(b)||(b.increment(),$.add(b)))}),z}function M(b=!0){if(b!==!1&&c)return;c=!1;const z=h?h():r;if(u=S&&S.running,z==null||z===!1){v(i,ne(p));return}S&&i&&S.promises.delete(i);const W=l!==Tn?l:ne(()=>o(z,{value:p(),refetching:b}));return typeof W!="object"||!(W&&"then"in W)?(v(i,W,void 0,z),W):(i=W,c=!0,queueMicrotask(()=>c=!1),me(()=>{O(d?"refreshing":"pending"),k()},!1),W.then(R=>v(W,R,void 0,z),R=>v(W,void 0,No(R),z)))}return Object.defineProperties(H,{state:{get:()=>g()},error:{get:()=>j()},loading:{get(){const b=g();return b==="pending"||b==="refreshing"}},latest:{get(){if(!d)return H();const b=j();if(b&&!i)throw b;return p()}}}),h?Wn(()=>M(!1)):M(!1),[H,{refetch:M,mutate:m}]}function Bn(e){return me(e,!1)}function ne(e){if(G===null)return e();const t=G;G=null;try{return e()}finally{G=t}}function cr(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(s){s=!1;return}const a=ne(()=>t(l,o,i));return o=l,a}}function $e(e){return I===null||(I.cleanups===null?I.cleanups=[e]:I.cleanups.push(e)),e}function Lo(){return I}function ol(e,t){const n=I,r=G;I=e,G=null;try{return me(t,!0)}catch(o){dr(o)}finally{I=n,G=r}}function Eo(e){if(S&&S.running)return e(),S.done;const t=G,n=I;return Promise.resolve().then(()=>{G=t,I=n;let r;return Ve&&(r=S||(S={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),me(e,!1),G=I=null,r?r.done:void 0})}function sl(){return[rl,Eo]}function il(e){ae.push.apply(ae,e),e.length=0}function he(e,t){const n=Symbol("context");return{id:n,Provider:ul(n),defaultValue:e}}function ie(e){let t;return(t=sn(I,e.id))!==void 0?t:e.defaultValue}function ur(e){const t=P(e),n=P(()=>Gn(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ve;function ll(){return Ve||(Ve=he({}))}function Po(){const e=S&&S.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===ve)st(this);else{const t=ce;ce=null,me(()=>Vt(this),!1),ce=t}if(G){const t=this.observers?this.observers.length:0;G.sources?(G.sources.push(this),G.sourceSlots.push(t)):(G.sources=[this],G.sourceSlots=[t]),this.observers?(this.observers.push(G),this.observerSlots.push(G.sources.length-1)):(this.observers=[G],this.observerSlots=[G.sources.length-1])}return e&&S.sources.has(this)?this.tValue:this.value}function Ro(e,t,n){let r=S&&S.running&&S.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(S){const o=S.running;(o||!n&&S.sources.has(e))&&(S.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&me(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=S&&S.running;i&&S.disposed.has(s)||((i?!s.tState:!s.state)&&(s.pure?ce.push(s):ae.push(s),s.observers&&Io(s)),i?s.tState=ve:s.state=ve)}if(ce.length>1e6)throw ce=[],new Error},!1)}return t}function st(e){if(!e.fn)return;Pe(e);const t=I,n=G,r=rn;G=I=e,Wr(e,S&&S.running&&S.sources.has(e)?e.tValue:e.value,r),S&&!S.running&&S.sources.has(e)&&queueMicrotask(()=>{me(()=>{S&&(S.running=!0),G=I=e,Wr(e,e.tValue,r),G=I=null},!1)}),G=n,I=t}function Wr(e,t,n){let r;try{r=e.fn(t)}catch(o){return e.pure&&(S&&S.running?(e.tState=ve,e.tOwned&&e.tOwned.forEach(Pe),e.tOwned=void 0):(e.state=ve,e.owned&&e.owned.forEach(Pe),e.owned=null)),e.updatedAt=n+1,dr(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ro(e,r,!0):S&&S.running&&e.pure?(S.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function on(e,t,n,r=ve,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:I,context:null,pure:n};return S&&S.running&&(s.state=0,s.tState=r),I===null||I!==Ao&&(S&&S.running&&I.pure?I.tOwned?I.tOwned.push(s):I.tOwned=[s]:I.owned?I.owned.push(s):I.owned=[s]),s}function Gt(e){const t=S&&S.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===vt)return Vt(e);if(e.suspense&&ne(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<rn);){if(t&&S.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,s=n[r+1];for(;(o=o.owner)&&o!==s;)if(S.disposed.has(o))return}if((t?e.tState:e.state)===ve)st(e);else if((t?e.tState:e.state)===vt){const o=ce;ce=null,me(()=>Vt(e,n[0]),!1),ce=o}}}function me(e,t){if(ce)return e();let n=!1;t||(ce=[]),ae?n=!0:ae=[],rn++;try{const r=e();return al(n),r}catch(r){n||(ae=null),ce=null,dr(r)}}function al(e){if(ce&&(Do(ce),ce=null),e)return;let t;if(S){if(!S.promises.size&&!S.queue.size){const r=S.sources,o=S.disposed;ae.push.apply(ae,S.effects),t=S.resolve;for(const s of ae)"tState"in s&&(s.state=s.tState),delete s.tState;S=null,me(()=>{for(const s of o)Pe(s);for(const s of r){if(s.value=s.tValue,s.owned)for(let i=0,l=s.owned.length;i<l;i++)Pe(s.owned[i]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}Hr(!1)},!1)}else if(S.running){S.running=!1,S.effects.push.apply(S.effects,ae),ae=null,Hr(!0);return}}const n=ae;ae=null,n.length&&me(()=>Mo(n),!1),t&&t()}function Do(e){for(let t=0;t<e.length;t++)Gt(e[t])}function cl(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Gt(r)}for(N.context&&ht(),t=0;t<n;t++)Gt(e[t])}function Vt(e,t){const n=S&&S.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];if(o.sources){const s=n?o.tState:o.state;s===ve?o!==t&&(!o.updatedAt||o.updatedAt<rn)&&Gt(o):s===vt&&Vt(o,t)}}}function Io(e){const t=S&&S.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=vt:r.state=vt,r.pure?ce.push(r):ae.push(r),r.observers&&Io(r))}}function Pe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(S&&S.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Pe(e.tOwned[t]);delete e.tOwned}Uo(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)Pe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}S&&S.running?e.tState=0:e.state=0,e.context=null}function Uo(e,t){if(t||(e.tState=0,S.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Uo(e.owned[n])}function No(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function dr(e,t=I){throw No(e)}function sn(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:sn(e.owner,t):void 0}function Gn(e){if(typeof e=="function"&&!e.length)return Gn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Gn(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ul(e,t){return function(r){let o;return L(()=>o=ne(()=>(I.context={[e]:r.value},ur(()=>r.children))),void 0),o}}const dl=Symbol("fallback");function Br(e){for(let t=0;t<e.length;t++)e[t]()}function fl(e,t,n={}){let r=[],o=[],s=[],i=0,l=t.length>1?[]:null;return $e(()=>Br(s)),()=>{let a=e()||[],u,c;return a[tl],ne(()=>{let h=a.length,$,p,m,j,C,y,k,g,O;if(h===0)i!==0&&(Br(s),s=[],r=[],o=[],i=0,l&&(l=[])),n.fallback&&(r=[dl],o[0]=we(v=>(s[0]=v,n.fallback())),i=1);else if(i===0){for(o=new Array(h),c=0;c<h;c++)r[c]=a[c],o[c]=we(d);i=h}else{for(m=new Array(h),j=new Array(h),l&&(C=new Array(h)),y=0,k=Math.min(i,h);y<k&&r[y]===a[y];y++);for(k=i-1,g=h-1;k>=y&&g>=y&&r[k]===a[g];k--,g--)m[g]=o[k],j[g]=s[k],l&&(C[g]=l[k]);for($=new Map,p=new Array(g+1),c=g;c>=y;c--)O=a[c],u=$.get(O),p[c]=u===void 0?-1:u,$.set(O,c);for(u=y;u<=k;u++)O=r[u],c=$.get(O),c!==void 0&&c!==-1?(m[c]=o[u],j[c]=s[u],l&&(C[c]=l[u]),c=p[c],$.set(O,c)):s[u]();for(c=y;c<h;c++)c in m?(o[c]=m[c],s[c]=j[c],l&&(l[c]=C[c],l[c](c))):o[c]=we(d);o=o.slice(0,i=h),r=a.slice(0)}return o});function d(h){if(s[c]=h,l){const[$,p]=E(c);return l[c]=p,t(a[c],$)}return t(a[c])}}}function f(e,t){return ne(()=>e(t||{}))}function jt(){return!0}const Vn={get(e,t,n){return t===Wt?n:e.get(t)},has(e,t){return t===Wt?!0:e.has(t)},set:jt,deleteProperty:jt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:jt,deleteProperty:jt}},ownKeys(e){return e.keys()}};function On(e){return(e=typeof e=="function"?e():e)?e:{}}function hl(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function re(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&Wt in i,e[s]=typeof i=="function"?(t=!0,P(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const l=On(e[i])[s];if(l!==void 0)return l}},has(s){for(let i=e.length-1;i>=0;i--)if(s in On(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(On(e[i])));return[...new Set(s)]}},Vn);const n={},r={},o=new Set;for(let s=e.length-1;s>=0;s--){const i=e[s];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let a=0,u=l.length;a<u;a++){const c=l[a];if(c==="__proto__"||c==="constructor")continue;const d=Object.getOwnPropertyDescriptor(i,c);if(!o.has(c))d.get?(o.add(c),Object.defineProperty(n,c,{enumerable:!0,configurable:!0,get:hl.bind(r[c]=[d.get.bind(i)])})):(d.value!==void 0&&o.add(c),n[c]=d.value);else{const h=r[c];h?d.get?h.push(d.get.bind(i)):d.value!==void 0&&h.push(()=>d.value):n[c]===void 0&&(n[c]=d.value)}}}return n}function Ho(e,...t){if(Wt in e){const o=new Set(t.length>1?t.flat():t[0]),s=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Vn));return s.push(new Proxy({get(i){return o.has(i)?void 0:e[i]},has(i){return o.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!o.has(i))}},Vn)),s}const n={},r=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,o),i=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,a=0;for(const u of t)u.includes(o)&&(l=!0,i?r[a][o]=s.value:Object.defineProperty(r[a],o,s)),++a;l||(i?n[o]=s.value:Object.defineProperty(n,o,s))}return[...r,n]}let ml=0;function fe(){const e=N.context;return e?`${e.id}${e.count++}`:`cl-${ml++}`}const gl=e=>`Stale read from <${e}>.`;function $t(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(fl(()=>e.each,e.children,t||void 0))}function X(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return P(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?ne(()=>o(t?r:()=>{if(!ne(n))throw gl("Show");return e.when})):o}return e.fallback},void 0,void 0)}const pl=he();function bl(e){let t=0,n,r,o,s,i;const[l,a]=E(!1),u=ll(),c={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:l,effects:[],resolved:!1},d=Lo();if(N.context&&N.load){const p=N.context.id+N.context.count;let m=N.load(p);if(m&&(o=m[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[j,C]=E(void 0,{equals:!1});s=j,o.then(y=>{if(y||N.done)return y&&(i=y),C();N.gather(p),ht(r),C(),ht()})}}const h=ie(pl);h&&(n=h.register(c.inFallback));let $;return $e(()=>$&&$()),f(u.Provider,{value:c,get children(){return P(()=>{if(i)throw i;if(r=N.context,s)return s(),s=void 0;r&&o==="$$f"&&ht();const p=P(()=>e.children);return P(m=>{const j=c.inFallback(),{showContent:C=!0,showFallback:y=!0}=n?n():{};if((!j||o&&o!=="$$f")&&C)return c.resolved=!0,$&&$(),$=r=o=void 0,il(c.effects),p();if(y)return $?m:we(k=>($=k,r&&(ht({id:r.id+"f",count:0}),r=void 0),e.fallback),d)})})}})}const vl=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$l=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...vl]),yl=new Set(["innerHTML","textContent","innerText","children"]),wl=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),xl=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function kl(e,t){const n=xl[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Sl=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),_l=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Cl={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function jl(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,u=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const c=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],c)}else if(s===l)for(;i<o;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!u){u=new Map;let d=l;for(;d<s;)u.set(n[d],d++)}const c=u.get(t[i]);if(c!=null)if(l<c&&c<s){let d=i,h=1,$;for(;++d<o&&d<s&&!(($=u.get(t[d]))==null||$!==c+h);)h++;if(h>c-l){const p=t[i];for(;l<c;)e.insertBefore(n[l++],p)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Gr="_$DX_DELEGATE";function Tl(e,t,n,r={}){let o;return we(s=>{o=s,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function w(e,t,n){let r;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},s=t?()=>ne(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function fr(e,t=window.document){const n=t[Gr]||(t[Gr]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,El))}}function be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ol(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function T(e,t){t==null?e.removeAttribute("class"):e.className=t}function Wo(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n)}function zl(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let s,i;for(s=0,i=o.length;s<i;s++){const l=o[s];!l||l==="undefined"||t[l]||(Vr(e,l,!1),delete n[l])}for(s=0,i=r.length;s<i;s++){const l=r[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Vr(e,l,!0),n[l]=a)}return n}function Ae(e,t,n){if(!t)return n?be(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function hr(e,t={},n,r){const o={};return r||L(()=>o.children=nt(e,t.children,o.children)),L(()=>t.ref&&t.ref(e)),L(()=>Ml(e,t,n,!0,o,!0)),o}function tt(e,t,n){return ne(()=>e(t,n))}function _(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return nt(e,t,r,n);L(o=>nt(e,t(),o,n),r)}function Ml(e,t,n,r,o={},s=!1){t||(t={});for(const i in o)if(!(i in t)){if(i==="children")continue;o[i]=Fr(e,i,null,o[i],n,s)}for(const i in t){if(i==="children"){r||nt(e,t.children);continue}const l=t[i];o[i]=Fr(e,i,l,o[i],n,s)}}function Al(e){let t,n;if(!N.context||!(t=N.registry.get(n=Pl()))){if(N.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return N.completed&&N.completed.add(t),N.registry.delete(n),t}function Ll(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Vr(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function Fr(e,t,n,r,o,s){let i,l,a,u,c;if(t==="style")return Ae(e,n,r);if(t==="classList")return zl(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),h=Sl.has(d);if(!h&&r){const $=Array.isArray(r)?r[0]:r;e.removeEventListener(d,$)}(h||n)&&(Wo(e,d,n,h),h&&fr([d]))}else if(t.slice(0,5)==="attr:")be(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=yl.has(t))||!o&&((u=kl(t,e.tagName))||(l=$l.has(t)))||(i=e.nodeName.includes("-")))c&&(t=t.slice(5),l=!0),t==="class"||t==="className"?T(e,n):i&&!l&&!a?e[Ll(t)]=n:e[u||t]=n;else{const d=o&&t.indexOf(":")>-1&&Cl[t.split(":")[0]];d?Ol(e,d,t,n):be(e,wl[t]||t,n)}return n}function El(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),N.registry&&!N.done&&(N.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function nt(e,t,n,r,o){if(N.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(N.context)return n;if(s==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Xe(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(N.context)return n;n=Xe(e,n,r)}else{if(s==="function")return L(()=>{let l=t();for(;typeof l=="function";)l=l();n=nt(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Fn(l,t,n,o))return L(()=>n=nt(e,l,n,r,!0)),()=>n;if(N.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=Xe(e,n,r),i)return n}else a?n.length===0?qr(e,l,r):jl(e,n,l):(n&&Xe(e),qr(e,l));n=l}else if(t.nodeType){if(N.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=Xe(e,n,r,t);Xe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Fn(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[s],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))o=Fn(e,l,a)||o;else if(u==="function")if(r){for(;typeof l=="function";)l=l();o=Fn(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function qr(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Xe(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}function Pl(){const e=N.context;return`${e.id}${e.count++}`}const Rl=!1,Dl="http://www.w3.org/2000/svg";function Il(e,t=!1){return t?document.createElementNS(Dl,e):document.createElement(e)}function Ul(e){const[t,n]=Ho(e,["component"]),r=P(()=>t.component);return P(()=>{const o=r();switch(typeof o){case"function":return Object.assign(o,{[nl]:!0}),ne(()=>o(n));case"string":const s=_l.has(o),i=N.context?Al():Il(o,s);return hr(i,n,s),i}})}function Nl(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Hl([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Wl(e){try{return document.querySelector(e)}catch{return null}}function Bl(e,t){const n=Wl(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Bo(e,t,n,r){let o=!1;const s=l=>typeof l=="string"?{value:l}:l,i=Hl(E(s(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!o&&t(l),l));return n&&$e(n((l=e())=>{o=!0,i[1](s(l)),o=!1})),{signal:i,utils:r}}function Gl(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:E({value:""})};return e}function Vl(){return Bo(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Bl(window.location.hash.slice(1),n)},e=>Nl(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Fl(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,s)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const ql=/^(?:[a-z0-9]+:)?\/\//i,Yl=/^\/+|(\/)\/+$/g;function We(e,t=!1){const n=e.replace(Yl,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ut(e,t,n){if(ql.test(t))return;const r=We(e),o=n&&We(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+We(t,!s)}function Xl(e,t){if(e==null)throw new Error(t);return e}function Go(e,t){return We(e).replace(/\/*(\*.*)?$/g,"")+We(t)}function Kl(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Jl(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),u=a.length-i;if(u<0||u>0&&o===void 0&&!t)return null;const c={path:i?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const $=s[h],p=a[h],m=$[0]===":",j=m?$.slice(1):$;if(m&&zn(p,d(j)))c.params[j]=p;else if(m||!zn(p,$))return null;c.path+=`/${p}`}if(o){const h=u?a.slice(-u).join("/"):"";if(zn(h,d(o)))c.params[o]=h;else return null}return c}}function zn(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Zl(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Vo(e){const t=new Map,n=Lo();return new Proxy({},{get(r,o){return t.has(o)||ol(n,()=>t.set(o,P(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Fo(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Fo(r).reduce((s,i)=>[...s,...o.map(l=>l+i)],[])}const Ql=100,qo=he(),ln=he(),wt=()=>Xl(ie(qo),"Make sure your app is wrapped in a <Router />");let yt;const an=()=>yt||ie(ln)||wt().base,ea=e=>{const t=an();return P(()=>t.resolvePath(e()))},ta=e=>{const t=wt();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Yo=()=>wt().navigatorFactory(),qn=()=>wt().location,xt=()=>an().params;function na(e,t="",n){const{component:r,data:o,children:s}=e,i=!s||Array.isArray(s)&&!s.length,l={key:e,element:r?()=>f(r,{}):()=>{const{element:a}=e;return a===void 0&&n?f(n,{}):a},preload:e.component?r.preload:e.preload,data:o};return Xo(e.path).reduce((a,u)=>{for(const c of Fo(u)){const d=Go(t,c),h=i?d:d.split("/*",1)[0];a.push({...l,originalPath:c,pattern:h,matcher:Jl(h,!i,e.matchFilters)})}return a},[])}function ra(e,t=0){return{routes:e,score:Zl(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Xo(e){return Array.isArray(e)?e:[e]}function Ko(e,t="",n,r=[],o=[]){const s=Xo(e);for(let i=0,l=s.length;i<l;i++){const a=s[i];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=na(a,t,n);for(const c of u){r.push(c);const d=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!d)Ko(a.children,c.pattern,n,r,o);else{const h=ra([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((i,l)=>l.score-i.score)}function oa(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function sa(e,t){const n=new URL("http://sar"),r=P(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),o=P(()=>r().pathname),s=P(()=>r().search,!0),i=P(()=>r().hash),l=P(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Vo(cr(s,()=>Kl(r())))}}function ia(e,t="",n,r){const{signal:[o,s],utils:i={}}=Gl(e),l=i.parsePath||(M=>M),a=i.renderPath||(M=>M),u=i.beforeLeave||Fl(),c=Ut("",t),d=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[h,$]=E(!1),p=async M=>{$(!0);try{await Eo(M)}finally{$(!1)}},[m,j]=E(o().value),[C,y]=E(o().state),k=sa(m,C),g=[],O={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(M){return Ut(c,M)}};if(n)try{yt=O,O.data=n({data:void 0,params:{},location:k,navigate:A(O)})}finally{yt=void 0}function v(M,b,z){ne(()=>{if(typeof b=="number"){b&&(i.go?u.confirm(b,z)&&i.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:W,resolve:R,scroll:V,state:K}={replace:!1,resolve:!0,scroll:!0,...z},J=R?M.resolvePath(b):Ut("",b);if(J===void 0)throw new Error(`Path '${b}' is not a routable path`);if(g.length>=Ql)throw new Error("Too many redirects");const oe=m();if((J!==oe||K!==C())&&!Rl){if(u.confirm(J,z)){const Q=g.push({value:oe,replace:W,scroll:V,state:C()});p(()=>{j(J),y(K)}).then(()=>{g.length===Q&&H({value:J,state:K})})}}})}function A(M){return M=M||ie(ln)||O,(b,z)=>v(M,b,z)}function H(M){const b=g[0];b&&((M.value!==b.value||M.state!==b.state)&&s({...M,replace:b.replace,scroll:b.scroll}),g.length=0)}L(()=>{const{value:M,state:b}=o();ne(()=>{M!==m()&&p(()=>{j(M),y(b)})})});{let M=function(b){if(b.defaultPrevented||b.button!==0||b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)return;const z=b.composedPath().find(oe=>oe instanceof Node&&oe.nodeName.toUpperCase()==="A");if(!z||!z.hasAttribute("link"))return;const W=z.href;if(z.target||!W&&!z.hasAttribute("state"))return;const R=(z.getAttribute("rel")||"").split(/\s+/);if(z.hasAttribute("download")||R&&R.includes("external"))return;const V=new URL(W);if(V.origin!==window.location.origin||c&&V.pathname&&!V.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const K=l(V.pathname+V.search+V.hash),J=z.getAttribute("state");b.preventDefault(),v(O,K,{resolve:!1,replace:z.hasAttribute("replace"),scroll:!z.hasAttribute("noscroll"),state:J&&JSON.parse(J)})};fr(["click"]),document.addEventListener("click",M),$e(()=>document.removeEventListener("click",M))}return{base:O,out:d,location:k,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:A,beforeLeave:u}}function la(e,t,n,r,o){const{base:s,location:i,navigatorFactory:l}=e,{pattern:a,element:u,preload:c,data:d}=r().route,h=P(()=>r().path);c&&c();const $={parent:t,pattern:a,get child(){return n()},path:h,params:o,data:t.data,outlet:u,resolvePath(p){return Ut(s.path(),p,h())}};if(d)try{yt=$,$.data=d({data:t.data,params:o,location:i,navigate:l($)})}finally{yt=void 0}return $}const aa=w("<a link>"),ca=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,i=t||Vl(),l=ia(i,r,o);return f(qo.Provider,{value:l,get children(){return e.children}})},ua=e=>{const t=wt(),n=an(),r=ur(()=>e.children),o=P(()=>Ko(r(),Go(n.pattern,e.base||""),Jo)),s=P(()=>oa(o(),t.location.pathname)),i=Vo(()=>{const c=s(),d={};for(let h=0;h<c.length;h++)Object.assign(d,c[h].params);return d});t.out&&t.out.matches.push(s().map(({route:c,path:d,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:d,params:h})));const l=[];let a;const u=P(cr(s,(c,d,h)=>{let $=d&&c.length===d.length;const p=[];for(let m=0,j=c.length;m<j;m++){const C=d&&d[m],y=c[m];h&&C&&y.route.key===C.route.key?p[m]=h[m]:($=!1,l[m]&&l[m](),we(k=>{l[m]=k,p[m]=la(t,p[m-1]||n,()=>u()[m+1],()=>s()[m],i)}))}return l.splice(c.length).forEach(m=>m()),h&&$?h:(a=p[0],p)}));return f(X,{get when(){return u()&&a},keyed:!0,children:c=>f(ln.Provider,{value:c,get children(){return c.outlet()}})})},Ie=e=>{const t=ur(()=>e.children);return re(e,{get children(){return t()}})},Jo=()=>{const e=an();return f(X,{get when(){return e.child},keyed:!0,children:t=>f(ln.Provider,{value:t,get children(){return t.outlet()}})})};function da(e){e=re({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Ho(e,["href","state","class","activeClass","inactiveClass","end"]),n=ea(()=>e.href),r=ta(n),o=qn(),s=P(()=>{const i=n();if(i===void 0)return!1;const l=We(i.split(/[?#]/,1)[0]).toLowerCase(),a=We(o.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const i=aa();return hr(i,re(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s(),[e.activeClass]:s(),...t.classList}},get"aria-current"(){return s()?"page":void 0}}),!1,!1),i})()}function je(e,t){let n={},r=Object.keys(e);for(let o=0,s=r.length;o<s;o+=1){let i=r[o];t.includes(i)||Object.defineProperty(n,i,{get(){return e[i]},configurable:!0,enumerable:!0})}return n}var Zo=he();function kt(){let e=ie(Zo);if(e)return e;throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.")}function fa(e){return typeof e=="function"&&e.length>0}function ha(e){let t=kt();return P(()=>{let n=e.children;return fa(n)?n(t):n})}function it(e){return{get children(){return f(ha,{get children(){return e.children}})}}}function ma(e){let t,n;if("defaultOpen"in e){let[r,o]=E(e.defaultOpen);t=r,n=s=>{Bn(()=>{var i;o(s),(i=e.onChange)==null||i.call(e,s)})}}else t=()=>e.isOpen,n=r=>{var o;return(o=e.onChange)==null?void 0:o.call(e,r)};return{isOpen(){return t()},setState(r){e.disabled||n(r)},disabled(){return!!e.disabled}}}function ga(e){return typeof e=="function"&&e.length>0}function cn(e){let t=ma(e);return f(Zo.Provider,{value:t,get children(){return P(()=>{let n=e.children;return ga(n)?n(t):n})}})}function De(e,t){return f(Ul,re({get component(){return e()}},t))}function pa(e){return typeof e=="function"}function St(e,t){return n=>{"ref"in e&&pa(e.ref)&&e.ref(n),t(n)}}function un(e){return{get disabled(){return e()},get"aria-disabled"(){return e()},get"data-sh-disabled"(){return e()}}}function ba(e){return{get"aria-expanded"(){return e()},get"data-sh-expanded"(){return e()}}}var va='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';function mr(e,t){let n=e.querySelectorAll(va),r=[];for(let o=0,s=n.length;o<s;o+=1)(!t||!t.contains(n[o]))&&r.push(n[o]);return r}function Qo(e){return!e.matches('[data-sh-disabled="true"]')}function es(e,t,n){let r=t+n;for(;r>=0&&r<e.length;){if(Qo(e[r]))return e[r];r+=n}}function ts(e,t,n){let r=t+n;for(n===1&&r===e.length&&(r=0),n===-1&&r===-1&&(r=e.length-1);t!==r;){if(Qo(e[r]))return e[r];r+=n,n===1&&r>=e.length&&(r=0),n===-1&&r<0&&(r=e.length-1)}}function $a(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ts(e,r,1))==null||n.focus();break}}function ya(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=ts(e,r,-1))==null||n.focus();break}}function gr(e){var t;return e.length?((t=es(e,-1,1))==null||t.focus(),!0):!1}function wa(e){var t;return e.length?((t=es(e,e.length,-1))==null||t.focus(),!0):!1}function ns(e,t){let n=mr(e);t?!document.activeElement||!e.contains(document.activeElement)?wa(n):ya(n,document.activeElement):!document.activeElement||!e.contains(document.activeElement)?gr(n):$a(n,document.activeElement)}var xa="data-sh";function Ye(e){return{[xa]:e}}var ka=Ye("button");function Sa(e){let[t,n]=E();return te(()=>{let r=t();if(r instanceof HTMLElement&&r.tagName!=="BUTTON"){let o=s=>{(s.key==="Enter"||s.key===" ")&&r.click()};r.addEventListener("keydown",o),$e(()=>{r.removeEventListener("keydown",o)})}}),De(()=>{var r;return(r=e.as)!=null?r:"button"},re({get tabindex(){return e.disabled?-1:0},role:"button"},un(()=>e.disabled),je(e,["as","ref"]),ka,{ref:St(e,r=>{n(()=>r)})}))}function pr(e,t,n){return f(X,{get when(){var r;return(r=e.unmount)!=null?r:!0},get fallback(){return n()},get children(){return f(X,{get when(){return t()},get children(){return n()}})}})}function Yr(){var e,t;return(t=(e=window.getSelection())==null?void 0:e.focusNode)==null?void 0:t.parentElement}function _a(e){if(e){let t=e.getAttribute("tabindex");e.setAttribute("tabindex","-1"),e.focus(),e.blur(),t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}var Ca=class{constructor(){typeof document<"u"&&(this.returnElement=document.activeElement,this.fsp=Yr()),$e(()=>{this.load()})}load(){this.returnElement instanceof HTMLElement?this.returnElement.focus():_a(this.fsp)}save(){this.returnElement=document.activeElement,this.fsp=Yr()}};function dn(){return new Ca}var br=he();function rs(e){let t=ie(br);if(t)return t;throw new Error(`<${e}> must be used inside a <Dialog>`)}var os=Ye("dialog"),ja=Ye("dialog-overlay"),Ta=Ye("dialog-panel");function Oa(e){let t=fe(),n=fe(),r=fe(),o=fe(),s=dn();return f(br.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return f(cn,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(i){var l,a,u;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((u=e.onClose)==null||u.call(e),s.load())},children:({isOpen:i})=>pr(e,i,()=>De(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","isOpen","disabled","onOpen","onClose","onChange"]),os,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function za(e){let t=fe(),n=fe(),r=fe(),o=fe(),s=dn();return f(br.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return f(cn,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(i){var l,a,u;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((u=e.onClose)==null||u.call(e),s.load())},children:({isOpen:i})=>pr(e,i,()=>De(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["as","children","unmount","defaultOpen","disabled","onOpen","onClose","onChange"]),os,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function Ma(e){return"defaultOpen"in e}function Aa(e){return Ma(e)?f(za,e):f(Oa,e)}function La(e){rs("DialogOverlay");let t=kt(),[n,r]=E();return te(()=>{let o=n();if(o instanceof HTMLElement){let s=()=>{t.setState(!1)};o.addEventListener("click",s),$e(()=>{o.removeEventListener("click",s)})}}),De(()=>{var o;return(o=e.as)!=null?o:"div"},re(je(e,["as","children","ref"]),ja,{ref:St(e,o=>{r(()=>o)})},it(e)))}function Ea(e){let t=rs("DialogPanel"),n=kt(),[r,o]=E();return te(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){gr(mr(s));let i=l=>{e.disabled||(l.key==="Tab"?(l.preventDefault(),ns(s,l.shiftKey)):l.key==="Escape"&&n.setState(!1))};s.addEventListener("keydown",i),$e(()=>{s.removeEventListener("keydown",i)})}}),De(()=>{var s;return(s=e.as)!=null?s:"div"},re(je(e,["as","children","ref"]),Ta,{id:t.panelID,ref:St(e,s=>{o(()=>s)})},it(e)))}var vr=he();function ss(e){let t=ie(vr);if(t)return t;throw new Error(`<${e}> must be used inside a <Popover>`)}var is=Ye("popover"),Pa=Ye("popover-button"),Ra=Ye("popover-panel");function Da(e){let[t,n]=E(!1),r=fe(),o=fe(),s=fe(),i=dn();return f(vr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return De(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["isOpen","as","children","disabled","onChange"]),is,un(()=>e.disabled),{get children(){return f(cn,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(l){var a,u,c;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(u=e.onChange)==null||u.call(e,l),l||((c=e.onClose)==null||c.call(e),i.load())},get children(){return e.children}})}}))}})}function Ia(e){let[t,n]=E(!1),r=fe(),o=fe(),s=fe(),i=dn();return f(vr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return De(()=>{var l;return(l=e.as)!=null?l:"div"},re(je(e,["defaultOpen","as","children","disabled","onChange"]),is,un(()=>e.disabled),{get children(){return f(cn,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(l){var a,u,c;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(u=e.onChange)==null||u.call(e,l),l||((c=e.onClose)==null||c.call(e),i.load())},get children(){return e.children}})}}))}})}function Ua(e){return"defaultOpen"in e}function Na(e){return Ua(e)?f(Ia,e):f(Da,e)}function Ha(e){let t=ss("PopoverButton"),n=kt(),[r,o]=E();return te(()=>{let s=r();if(s instanceof HTMLElement){let i=()=>{n.disabled()||e.disabled||n.setState(!n.isOpen())};s.addEventListener("click",i),$e(()=>{s.removeEventListener("click",i)});let l=()=>{t.hovering=!0},a=()=>{t.hovering=!1};s.addEventListener("mouseenter",l),s.addEventListener("mouseleave",a),$e(()=>{s.removeEventListener("mouseenter",l),s.removeEventListener("mouseleave",a)})}}),f(Sa,re(je(e,["children","ref"]),Pa,{id:t.buttonID,ref:St(e,s=>{o(()=>s),s instanceof HTMLElement&&(t.anchor=s)}),get"aria-controls"(){return n.isOpen()&&t.panelID}},un(()=>{let s=n.disabled(),i=e.disabled;return s||i}),ba(()=>n.isOpen()),it(e)))}function Wa(e){let t=ss("PopoverPanel"),n=kt(),[r,o]=E();return te(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){gr(mr(s));let i=a=>{e.disabled||(a.key==="Tab"?(a.preventDefault(),ns(s,a.shiftKey)):a.key==="Escape"&&n.setState(!1))},l=a=>{t.hovering||(!a.relatedTarget||!s.contains(a.relatedTarget))&&n.setState(!1)};s.addEventListener("keydown",i),s.addEventListener("focusout",l),$e(()=>{s.removeEventListener("keydown",i),s.removeEventListener("focusout",l)})}}),pr(e,()=>n.isOpen(),()=>De(()=>{var s;return(s=e.as)!=null?s:"div"},re(je(e,["as","unmount","children","ref"]),Ra,{id:t.panelID,ref:St(e,s=>{o(()=>s)})},it(e))))}const Ba=""+new URL("logo-white-c0f694e8.svg",import.meta.url).href,Ga=""+new URL("logo-black-123cdd58.svg",import.meta.url).href,Va="_button_1ao1a_1",Fa="_isGhost_1ao1a_20",qa="_isHalf_1ao1a_21",Ya="_isSecondary_1ao1a_22",Xa="_isSolid_1ao1a_23",ft={button:Va,isGhost:Fa,isHalf:qa,isSecondary:Ya,isSolid:Xa},Ka=w('<div class="flex flex-row items-center justify-center flex-1 gap-s.8">'),fn=e=>{const t=e.as;return f(t,{get class(){return[e.class??"rounded-s p-s",ft.button,(()=>e.style==="none"?"":e.style==="solid"?ft.isSolid:e.style==="secondary"?ft.isSecondary:e.style==="half"?ft.isHalf:ft.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){return P(()=>e.style==="none")()?e.children:(()=>{const n=Ka();return _(n,()=>e.children),n})()}})},Ja=w("<button>"),Le=e=>f(fn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Ja();return Wo(n,"click",e.onClick,!0),_(n,()=>t.children),L(r=>{const o=t.class,s=t.style,i=e.type??"button",l=e.disabled;return o!==r._v$&&T(n,r._v$=o),r._v$2=Ae(n,s,r._v$2),i!==r._v$3&&be(n,"type",r._v$3=i),l!==r._v$4&&(n.disabled=r._v$4=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),get children(){return e.children}});fr(["click"]);const Za=w("<a>"),ls=e=>f(fn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Za();return _(n,()=>t.children),L(r=>{const o=t.class,s=`text-decoration: none; ${t.style}`,i=e.href;return o!==r._v$&&T(n,r._v$=o),r._v$2=Ae(n,s,r._v$2),i!==r._v$3&&be(n,"href",r._v$3=i),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),get children(){return e.children}}),Xr=e=>{const t=xt();return f(X,{get when(){return e.when(t)},keyed:!0,get children(){return e.component({})}})},Qa=`module.exports = {
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
`,dc="modulepreload",fc=function(e,t){return new URL(e,t).href},Kr={},et=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=fc(s,r),s in Kr)return;Kr[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===s&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":dc,i||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),i)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};function hc(){const[e]=It(async()=>(await et(()=>import("./index-f446294a.js").then(r=>r.i),["./index-f446294a.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[t]=It(async()=>(await et(()=>import("./index-b295f297.js"),["./index-b295f297.js","./_commonjsHelpers-39b5b250.js"],import.meta.url)).default),[n]=It(async()=>await et(()=>import("./index-6b20c012.js"),[],import.meta.url));return{highlighter:t,formatter:e,xml:n}}const Ne=we(hc),mc=w('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div>'),Qe=e=>(()=>{const t=mc(),n=t.firstChild;return _(n,()=>e.children),L(()=>T(n,`size-i-full max-size-i-l ${e.class}`)),t})();var gc=()=>{},Jr=(e,t)=>t();function pc(e,t){const n=ne(e),r=n?[n]:[],{onEnter:o=Jr,onExit:s=Jr}=t,[i,l]=E(t.appear?[]:r),[a]=sl();let u,c=!1;function d(p,m){if(!p)return m&&m();c=!0,s(p,()=>{Bn(()=>{c=!1,l(j=>j.filter(C=>C!==p)),m&&m()})})}function h(p){const m=u;if(!m)return p&&p();u=void 0,l(j=>[m,...j]),o(m,p??gc)}const $=t.mode==="out-in"?p=>c||d(p,h):t.mode==="in-out"?p=>h(()=>d(p)):p=>{h(),d(p)};return Wn(p=>{const m=e();return ne(a)?(a(),p):(m!==p&&(u=m,Bn(()=>ne(()=>$(p)))),m)},t.appear?void 0:n),i}var Zr=e=>e instanceof Element;function Yn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Yn(e(),t);if(Array.isArray(e))for(const n of e){const r=Yn(n,t);if(r)return r}return null}function bc(e,t=Zr,n=Zr){const r=P(e);return P(()=>Yn(r(),t))}function vc(e){return P(()=>{const t=e.name||"s";return{enterActiveClasses:(e.enterActiveClass||t+"-enter-active").split(" "),enterClasses:(e.enterClass||t+"-enter").split(" "),enterToClasses:(e.enterToClass||t+"-enter-to").split(" "),exitActiveClasses:(e.exitActiveClass||t+"-exit-active").split(" "),exitClasses:(e.exitClass||t+"-exit").split(" "),exitToClasses:(e.exitToClass||t+"-exit-to").split(" "),moveClasses:(e.moveClass||t+"-move").split(" ")}})}function as(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function $c(e,t,n,r){const{enterClasses:o,enterActiveClasses:s,enterToClasses:i}=e,{onBeforeEnter:l,onEnter:a,onAfterEnter:u}=t;l==null||l(n),n.classList.add(...o),n.classList.add(...s),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();a==null||a(n,()=>c())}),as(()=>{n.classList.remove(...o),n.classList.add(...i),(!a||a.length<2)&&(n.addEventListener("transitionend",c),n.addEventListener("animationend",c))});function c(d){(!d||d.target===n)&&(r==null||r(),n.removeEventListener("transitionend",c),n.removeEventListener("animationend",c),n.classList.remove(...s),n.classList.remove(...i),u==null||u(n))}}function yc(e,t,n,r){const{exitClasses:o,exitActiveClasses:s,exitToClasses:i}=e,{onBeforeExit:l,onExit:a,onAfterExit:u}=t;if(!n.parentNode)return r==null?void 0:r();l==null||l(n),n.classList.add(...o),n.classList.add(...s),a==null||a(n,()=>c()),as(()=>{n.classList.remove(...o),n.classList.add(...i),(!a||a.length<2)&&(n.addEventListener("transitionend",c),n.addEventListener("animationend",c))});function c(d){(!d||d.target===n)&&(r==null||r(),n.removeEventListener("transitionend",c),n.removeEventListener("animationend",c),n.classList.remove(...s),n.classList.remove(...i),u==null||u(n))}}var wc={inout:"in-out",outin:"out-in"},xc=e=>{const t=vc(e);return pc(bc(()=>e.children),{mode:wc[e.mode],appear:e.appear,onEnter(n,r){$c(t(),e,n,r)},onExit(n,r){yc(t(),e,n,r)}})};const kc=w("<section>"),Qr="animation-duration-m.4",$r=e=>{const t=()=>`${e.class} relative size-i-full size-b-full overflow-hidden`,n=e.as??(r=>(()=>{const o=kc();return _(o,()=>r.children),L(()=>T(o,t())),o})());return f(n,{get class(){return t()},get children(){return f(xc,{enterActiveClass:`${Qr} animate-in`,exitActiveClass:`${Qr} animate-out`,get children(){return f(Jo,{})}})}})},Be=e=>f(fn,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>f(da,{get class(){return t.class},get style(){return`text-decoration: none; ${t.style}`},get href(){return e.href},get activeClass(){return e.activeClass},onClick:()=>{var n;(n=e.onClick)==null||n.call(e)},get children(){return t.children}}),get children(){return e.children}}),Sc=w("<div>"),Fe=e=>(()=>{const t=Sc(),n=e.ref;return typeof n=="function"?tt(n,t):e.ref=t,_(t,()=>e.children),L(()=>T(t,`${e.class} absolute inset-0 size-i-full size-b-full overflow-auto`)),t})();function _c(e){try{return document.querySelector(e)}catch{return null}}function Cc(e,t){const n=_c(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function jc(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Tc(e="/"){const t=()=>{const n=window.location.search,r=new URLSearchParams(n);return decodeURIComponent(r.get("navigation")??e)};return Bo(()=>({value:t(),state:history.state}),({value:n,replace:r,scroll:o,state:s})=>{const i=`?navigation=${encodeURIComponent(n)}`;r?window.history.replaceState(s,"",i):window.history.pushState(s,"",i),Cc(window.location.hash.slice(1),o)},n=>jc(window,"popstate",()=>n()),{go:n=>window.history.go(n)})}const Oc=w('<div class="flex flex-col gap-s"><div class="flex flex-col gap-s.4"><h3 class="text-m.2 font-bold text-fg-2"></h3><p class="leading-$($s+$s.2)">'),zc=e=>f(Be,{style:"none",class:"size-b-full transition bg-accent-4 text-fg-3 border border-color-surface p-m.2 gap-m.2 rounded-m.2 flex flex-col justify-between",get href(){return e.href},get onClick(){return e.onInspect},get children(){const t=Oc(),n=t.firstChild,r=n.firstChild,o=r.nextSibling;return _(r,()=>e.meta.title),_(o,()=>e.meta.description),t}});function yr(e){const[t,n]=E([]);return te(cr(()=>e.each,()=>{const r=[];e.each.forEach((o,s)=>{r.push(e.children([s,o]))}),n(r)})),t}const Mc=w('<ul class="size-i-full list-none grid grid-fit-cols-m gap-s">'),Ac=w("<li>"),Lc=e=>(()=>{const t=Mc();return _(t,f(yr,{get each(){return e.map},children:([n,r])=>(()=>{const o=Ac();return _(o,f(zc,{get href(){return`/docs/${n}/${r.openOn.join("/")}`},meta:r,onInspect:()=>{var s;return(s=e.onInspect)==null?void 0:s.call(e,n)}})),o})()})),t})(),eo={dark:240,light:260};function Ec(){const[e,t]=E(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{t(l.matches?"light":"dark")});const[n,r]=E(void 0),o=()=>{switch(n()){case"dark":r("light");break;case"light":r("dark");break;default:r(e()==="light"?"dark":"light")}},s=P(()=>n()??e()??"dark"),i=P(()=>s()==="dark"?eo.dark:eo.light);return{scheme:s,hue:i,enforceScheme:n,setEnforceScheme:r,toggleScheme:o}}const Se=we(Ec),Pc=w('<div><span class="text-fg-1 font-semibold">Error:</span> '),se=e=>(()=>{const t=Pc();return t.firstChild.nextSibling,_(t,()=>e.children,null),L(()=>T(t,`inline-block scheme-${Se.scheme()}-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal`)),t})(),cs={complete:{meta:{title:"Complete",description:"Complete package intended to replace Tailwind or unocss-preset-wind. Not recommended at the moment",openOn:["Usage","Installation"]},loadDocs:async()=>(await et(()=>Promise.resolve().then(()=>Jh),void 0,import.meta.url)).docs.default},color:{meta:{title:"Color",description:"Semantic color utils from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await et(()=>Promise.resolve().then(()=>sh),void 0,import.meta.url)).docs.default},dollars:{meta:{title:"Dollars",description:"$ syntax from Windblade.",openOn:["Usage","Installation"]},loadDocs:async()=>(await et(()=>Promise.resolve().then(()=>bh),void 0,import.meta.url)).docs.default}};function Rc(){try{const e=new Map;return Object.entries(cs).forEach(([t,n])=>{e.set(t,n.meta)}),{success:!0,value:e}}catch{return{success:!1,error:"An unexpected error occurred"}}}async function Dc(e){try{const t=cs[e];return{success:!0,value:{meta:t.meta,docs:await t.loadDocs()}}}catch(t){return{success:!1,error:`${t}`}}}function Ic(){const e=new Map,[t,n]=E();return{index:t,fetchIndex:async()=>{n(Rc())},getModuleById:async i=>{const l=e.get(i);if(l)return{success:!0,value:l};{const a=await Dc(i);return a.success&&e.set(i,a.value),a}},getCachedModuleById:i=>{const l=e.get(i);return l?{success:!0,value:l}:{success:!1,error:"Not cached"}}}}const lt=we(Ic),us=()=>f(X,{get when(){return lt.index()},get fallback(){return f(se,{children:"Module index not loaded"})},keyed:!0,children:e=>e.success?f(Lc,{get map(){return e.value}}):f(se,{children:"Error loading index"})}),Uc=w('<div class="grid grid-fit-cols-l.2 gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T🤮ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade ⚡:'),Tt=w('<div class="size-b-px bg-surface">'),Ot=w("<pre>"),Nc=w('<div class="i-mdi-arrow-right">'),Hc=w('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.'),Wc=w("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas)."),Bc=w('<section class="p-b-m font-semibold bg-gradient-to-ss from-surface">'),Gc=w(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.`),Vc=w("<h3>Ready to improve your Tailwind workflow?"),Fc=w('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.'),qc=w('<section class="bg-gradient-to-ss from-surface to-normal-2">'),Yc=w("<h4>Not convinced about the whole package?"),Xc=w("<p>Best parts of Windblade are available standalone. Adopt Windblade incrementally or combine parts of it with other UnoCSS presets."),Kc=w('<section class="text-fg-3">'),Jc=w("<footer>"),U={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},Oe=e=>(()=>{const t=Uc(),n=t.firstChild,r=n.firstChild,o=n.nextSibling,s=o.firstChild;return _(n,f(X,{get when(){return e.code.tw.js},keyed:!0,children:i=>[Tt(),(()=>{const l=Ot();return L(a=>{var d;const u=`${U.pre} js`,c=(d=Ne.highlighter())==null?void 0:d.highlight(i,{language:"js"}).value;return u!==a._v$3&&T(l,a._v$3=u),c!==a._v$4&&(l.innerHTML=a._v$4=c),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),_(n,f(X,{get when(){return e.code.tw.html},keyed:!0,children:i=>[Tt(),(()=>{const l=Ot();return L(a=>{var d;const u=U.pre,c=(d=Ne.highlighter())==null?void 0:d.highlight(i,{language:"xml"}).value;return u!==a._v$5&&T(l,a._v$5=u),c!==a._v$6&&(l.innerHTML=a._v$6=c),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),_(o,f(X,{get when(){return e.code.wb.js},keyed:!0,children:i=>[Tt(),(()=>{const l=Ot();return L(a=>{var d;const u=`${U.pre} js`,c=(d=Ne.highlighter())==null?void 0:d.highlight(i,{language:"js"}).value;return u!==a._v$7&&T(l,a._v$7=u),c!==a._v$8&&(l.innerHTML=a._v$8=c),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),_(o,f(X,{get when(){return e.code.wb.html},keyed:!0,children:i=>[Tt(),(()=>{const l=Ot();return L(a=>{var d;const u=U.pre,c=(d=Ne.highlighter())==null?void 0:d.highlight(i,{language:"xml"}).value;return u!==a._v$9&&T(l,a._v$9=u),c!==a._v$10&&(l.innerHTML=a._v$10=c),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),L(i=>{const l=U.h5,a=U.h5;return l!==i._v$&&T(r,i._v$=l),a!==i._v$2&&T(s,i._v$2=a),i},{_v$:void 0,_v$2:void 0}),t})(),to=()=>f(Be,{style:"solid",href:"/docs/complete/Usage/Installation",get children(){return["Get started",Nc()]}}),Zc=()=>f(Fe,{get children(){return[(()=>{const e=Bc();return _(e,f(Qe,{class:"flex flex-col items-start",get children(){return[(()=>{const t=Hc(),n=t.firstChild,r=n.nextSibling,o=r.firstChild,s=o.nextSibling,i=s.nextSibling,l=i.nextSibling,a=l.nextSibling;return L(u=>{const c=U.header.li,d=U.header.li,h=U.header.li,$=U.header.li,p=U.header.li;return c!==u._v$11&&T(o,u._v$11=c),d!==u._v$12&&T(s,u._v$12=d),h!==u._v$13&&T(i,u._v$13=h),$!==u._v$14&&T(l,u._v$14=$),p!==u._v$15&&T(a,u._v$15=p),u},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),t})(),(()=>{const t=Wc();return L(()=>T(t,`${U.p} text-fg-3 m-be-s`)),t})(),f(to,{})]}})),e})(),f(Qe,{get children(){const e=Gc(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,o=r.firstChild,s=o.firstChild,i=s.nextSibling,l=o.nextSibling,a=l.firstChild,u=a.nextSibling,c=l.nextSibling,d=c.firstChild,h=d.nextSibling,$=t.nextSibling,p=$.firstChild,m=p.nextSibling,j=$.nextSibling,C=j.firstChild,y=C.nextSibling,k=j.nextSibling,g=k.firstChild,O=g.nextSibling,v=k.nextSibling,A=v.firstChild,H=A.nextSibling,M=H.nextSibling;return _(o,f(Oe,{code:{tw:{js:Qa,html:ec},wb:{js:tc,html:nc}}}),null),_(l,f(Oe,{code:{tw:{html:rc},wb:{html:oc}}}),null),_(c,f(Oe,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),_($,f(Oe,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all 🙁</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),_(j,f(Oe,{code:{tw:{js:sc},wb:{js:ic}}}),null),_(k,f(Oe,{code:{tw:{js:cc},wb:{js:uc}}}),null),_(v,f(Oe,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),M),_(v,f(Oe,{code:{tw:{html:lc},wb:{html:ac}}}),null),L(b=>{const z=U.h3,W=U.h4,R=U.p,V=U.h4,K=U.p,J=U.h4,oe=U.p,Q=U.h3,ee=U.p,Te=U.h3,dt=U.p,Rr=U.h3,Dr=U.p,Ir=U.h3,Ur=U.p,Nr=U.p;return z!==b._v$16&&T(n,b._v$16=z),W!==b._v$17&&T(s,b._v$17=W),R!==b._v$18&&T(i,b._v$18=R),V!==b._v$19&&T(a,b._v$19=V),K!==b._v$20&&T(u,b._v$20=K),J!==b._v$21&&T(d,b._v$21=J),oe!==b._v$22&&T(h,b._v$22=oe),Q!==b._v$23&&T(p,b._v$23=Q),ee!==b._v$24&&T(m,b._v$24=ee),Te!==b._v$25&&T(C,b._v$25=Te),dt!==b._v$26&&T(y,b._v$26=dt),Rr!==b._v$27&&T(g,b._v$27=Rr),Dr!==b._v$28&&T(O,b._v$28=Dr),Ir!==b._v$29&&T(A,b._v$29=Ir),Ur!==b._v$30&&T(H,b._v$30=Ur),Nr!==b._v$31&&T(M,b._v$31=Nr),b},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),e}}),(()=>{const e=qc();return _(e,f(Qe,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const t=Vc();return L(()=>T(t,U.h3)),t})(),(()=>{const t=Fc();return L(()=>T(t,U.p)),t})(),f(to,{})]}})),e})(),(()=>{const e=Kc();return _(e,f(Qe,{class:"flex flex-col items-start gap-s p-b-m.4",get children(){return[(()=>{const t=Yc();return L(()=>T(t,U.h4)),t})(),(()=>{const t=Xc();return L(()=>T(t,U.p)),t})(),f(us,{})]}})),e})(),(()=>{const e=Jc();return _(e,f(Qe,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",f(ls,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})()]}}),Qc=w('<h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Docs'),eu=w('<p class="text-$($s+$s.4) font-semibold m-be-m.2">Please select a Windblade module to see the documentation for.'),tu=()=>f(Fe,{get children(){return f(Qe,{class:"p-b-m.2",get children(){return[Qc(),eu(),f(us,{})]}})}}),nu="_progress_8tf2m_1",ru="_spin_8tf2m_1",ou={progress:nu,spin:ru},su=w("<div>"),iu=e=>(()=>{const t=su();return L(n=>{const r=ou.progress,o=`--radius: ${e.radius??1}rem`;return r!==n._v$&&T(t,n._v$=r),n._v$2=Ae(t,o,n._v$2),n},{_v$:void 0,_v$2:void 0}),t})();let lu=0;const au=()=>`uid-${++lu}`,cu=w('<div class="relative"><select></select><div class="i-mdi-unfold-more-horizontal absolute inset-ie-s inset-b-0 m-auto pointer-events-none">'),uu=e=>(()=>{const t=cu(),n=t.firstChild;return hr(n,re(e,{get class(){return`${e.class} transition size-i-full appearance-none p-s p-ie-$($s*3) hover:highlight active:highlight+`},get onChange(){return e.onChange}}),!1,!0),_(n,()=>e.children),t})(),du=w('<option selected disabled value="">select'),fu=w('<form class="relative"><label class="absolute text-fg-3 inset-i-s inset-bs-s pointer-events-none">Module:'),hu=w("<option>"),mu=e=>{const t=au(),{moduleId:n}=xt(),r=Yo();return(()=>{const o=fu(),s=o.firstChild;return be(s,"for",t),_(o,f(uu,{id:t,class:"p-bs-m.2 p-s rounded-s cursor-pointer bg-accent-4 hover:bg-accent-3 font-semibold",onChange:i=>{var a;const l=i.target.value;r(`/docs/${l}/${(a=e.index.get(l))==null?void 0:a.openOn.join("/")}`)},get children(){return[du(),f(yr,{get each(){return e.index},children:([i,l])=>(()=>{const a=hu();return a.value=i,a.selected=n===i,_(a,()=>l.title),a})()})]}}),null),o})()},gu=()=>f(X,{get when(){return lt.index()},get fallback(){return f(se,{children:"Index not loaded"})},keyed:!0,children:e=>e.success?f(mu,{get index(){return e.value}}):f(se,{children:"Error loading index"})}),pu=w('<div class="absolute inset-0"><div></div><div>'),bu=w('<span class="relative">'),vu=w("<ul>"),$u=w("<li>"),yu=w("<nav>"),ds=he(),wu=e=>{const t=ie(ds),n=`filter: hue-rotate(${3.6*e.i}deg);`,r=()=>t.leafActive(e.path),o=()=>({root:`
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
      `}});return f(t.leafAs,{get path(){return e.path},get class(){return o().root},get children(){return[(()=>{const s=pu(),i=s.firstChild,l=i.nextSibling;return L(a=>{const u=n,c=`${o().dot.all} ${o().dot.glow}`,d=`${o().dot.all} ${o().dot.fg}`;return a._v$=Ae(s,u,a._v$),c!==a._v$2&&T(i,a._v$2=c),d!==a._v$3&&T(l,a._v$3=d),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})(),(()=>{const s=bu();return _(s,()=>e.title),s})()]}})},fs=e=>{let t=0;return(()=>{const n=vu();return _(n,f(yr,{get each(){return e.tree},children:([r,o])=>(()=>{const s=$u();return _(s,typeof o=="string"?f(wu,{get path(){return[...e.prefix,r]},title:r,i:++t}):f(fs,{tree:o,get prefix(){return[...e.prefix,r]},get depth(){return e.depth+1}})),s})()})),L(r=>{const o=`list-none flex flex-col ${e.depth>0?"before:font-semibold before:m-be-s before:block gap-s.2":"gap-s"}`,s=e.depth>0?e.prefix.at(-1):void 0;return o!==r._v$4&&T(n,r._v$4=o),s!==r._v$5&&be(n,"title",r._v$5=s),r},{_v$4:void 0,_v$5:void 0}),n})()},xu=e=>(()=>{const t=yu(),n=e.ref;return typeof n=="function"?tt(n,t):e.ref=t,_(t,f(gu,{}),null),_(t,f(ds.Provider,{get value(){return e.settings},get children(){return f(fs,{get tree(){return e.tree},prefix:[],depth:0})}}),null),L(()=>T(t,`${e.class} flex flex-col gap-s`)),t})(),Mn=w("<div>"),ku=w('<div class="relative flex gap-s items-center p-s.4 p-i-m.2 border-solid border-0 border-be-px border-color-fg-5"><div class="flex flex-wrap gap-s.4 text-fg-3">'),Su=w('<div class="size-i-full size-b-full flex flex-col"><div>'),_u=w('<div class="i-mdi-chevron-right">'),Cu=w("<aside>"),ju=w("<main>"),Tu=w(`<div>Error loading module with ID '<!>'<div class="flex flex-wrap justify-between gap-s.4 m-bs-s">`),Ou=e=>{const[t,n]=E(0),[r,o]=E(0),[s,i]=E(!1),[l,a]=E(!1);let u,c;const d=new ResizeObserver(([m])=>{n(m.borderBoxSize[0].inlineSize)}),h=new ResizeObserver(([m])=>{o(m.borderBoxSize[0].inlineSize)});te(async()=>{d.disconnect(),u&&d.observe(u)}),te(async()=>{h.disconnect(),c&&h.observe(c)}),te(()=>{a(t()>=r()*4)});const $=()=>s()||l(),p=f(xu,{get tree(){return e.tree},class:"p-m.2 overflow-auto border-solid border-0 border-ie-px border-color-fg-5 size-i-max size-b-full",ref(m){const j=c;typeof j=="function"?j(m):c=m},settings:{leafActive:m=>qn().pathname.endsWith(m.join("/").replaceAll(" ","%20")),leafAs:m=>f(Be,{style:"none",get href(){return`/docs/${e.moduleId}/${m.path.join("/")}`},onClick:()=>i(!1),get class(){return m.class},get children(){return m.children}})}});return(()=>{const m=Su(),j=m.firstChild,C=u;return typeof C=="function"?tt(C,m):u=m,_(m,f(X,{get when(){return!l()},get children(){const y=ku(),k=y.firstChild;return _(y,f(Le,{onClick:()=>i(!s()),class:"p-s.6 rounded-full",style:"half",get children(){return[(()=>{const g=Mn();return L(()=>T(g,`i-mdi-menu ${s()?"opacity-zero":"opacity-s"} transition`)),g})(),(()=>{const g=Mn();return L(()=>T(g,`i-mdi-backburger ${s()?"opacity-s":"opacity-zero"} transition absolute`)),g})()]}}),k),_(k,f($t,{get each(){return decodeURIComponent(qn().pathname).split("/").slice(3)},children:(g,O)=>[(()=>{const v=Mn();return _(v,g),L(()=>T(v,`${O()===0?"":"text-fg-1 font-semibold"}`)),v})(),P((()=>{const v=P(()=>O()===0);return()=>v()&&_u()})())]})),y}}),j),_(j,f(X,{get when(){return!l()},get fallback(){return(()=>{const y=Cu();return _(y,p),y})()},get children(){return f(Aa,{get isOpen(){return $()},onClose:()=>i(!1),style:"z-index: 1;",unmount:!1,title:"Navigation drawer",get children(){return[f(X,{get when(){return P(()=>!!s())()&&!l()},get children(){return f(La,{class:"absolute inset-0",onClick:()=>i(!1)})}}),f(Ea,{get class(){return`bg-normal-3 transition-transform ease-out ${l()?"relative":"absolute inset-b-0 inset-is-0"}`},get style(){return`transform: translateX(${$()?"0":"-100%"})`},children:p})]}})}}),null),_(j,f($r,{get class(){return`flex-1 transition-all ${s()&&!l()?"blur-s.2 opacity-s.4":""}`},as:y=>(()=>{const k=ju();return _(k,()=>y.children),L(()=>T(k,y.class)),k})()}),null),L(()=>T(j,`size-b-full flex relative ${l()?"flex-row":"flex-col"}`)),m})()},zu=()=>{const e=xt(),[t,{refetch:n}]=It(()=>lt.getModuleById(e.moduleId));return f(Fe,{class:"[*]:absolute flex justify-center items-center",get children(){return f(X,{get when(){return!t.loading},get fallback(){return f(iu,{})},get children(){return f(X,{get when(){var r;return(r=t())==null?void 0:r.success},get fallback(){return(()=>{const r=Tu(),o=r.firstChild,s=o.nextSibling,i=s.nextSibling,l=i.nextSibling;return _(r,()=>e.moduleId,s),_(l,f(Le,{style:"half",onClick:n,children:"Retry"}),null),_(l,f(Be,{style:"secondary",href:"/docs",children:"Back to all docs"}),null),r})()},get children(){return f(Ou,{get tree(){return t().value.docs},get moduleId(){return e.moduleId}})}})}})}})},Mu=w('<h2 class="text-fg-3 text-s">Navigation error'),Au=w('<p class="text-m.2 font-bold">The page you are looking for is now a chapter.'),Lu=w('<p class="text-$($s+$s.2)">Use the navigation menu to open any page inside this chapter.');function hs(e,t=[]){for(const[n,r]of e.entries()){if(typeof r=="string")return[...t,n];const o=hs(r,[...t,n]);if(o)return o}}const Eu=()=>{const e=xt(),t=Yo(),n=async()=>{const r=await lt.getModuleById(e.moduleId);if(!r.success)return;const o=hs(r.value.docs);o&&t(`/docs/${e.moduleId}/${o.join("/")}`)};return f(Fe,{class:"p-m.2 flex flex-col gap-s justify-center items-center text-center font-semibold",get children(){return[Mu(),Au(),Lu(),f(Le,{style:"half",onClick:n,children:"Or find first page"})]}})},at=he([]),ms=()=>ie(at)??{};function _t(e){return[...ms(),...e]}const le=e=>{const t=ms();return f($t,{get each(){return e.children},children:(n,r)=>{for(let o=t.length-1;o>=0;--o){const s=t[o],i=s(n,r());if(i!==void 0)return i}}})},mt=he();function Xn(e){let t=e;const n=ie(mt)??{};return Object.entries(n).forEach(([r,o])=>{t=t.replaceAll(r,o)}),t}const Pu=w("<option>"),Ru=w('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value="">'),Du=e=>{const t=()=>Xn(e.value);return(()=>{const n=Pu();return _(n,t),L(()=>n.value=t()),n})()},Iu=e=>{switch(e.type){case"element":switch(e.name){case"option":return f(X,{get when(){var t;return(t=e.attributes)==null?void 0:t.value},keyed:!0,get fallback(){return f(se,{children:"'option' requires a 'value' attribute"})},children:t=>f(Du,{value:t})})}}},Uu=e=>f(at.Provider,{get value(){return _t([Iu])},get children(){const t=Ru();return t.firstChild,t.addEventListener("change",({target:n})=>e.onChange(n.value)),_(t,f(le,e),null),t}}),Nu=w('<div class="rounded-s.4 overflow-hidden flex items-center">'),Hu=e=>{const[t,n]=E(1),r=()=>e.onChange(`${t()}`);te(r);const o="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const s=Nu();return _(s,f(Le,{style:"secondary",class:o,onClick:()=>n(t()-1),children:"-"}),null),_(s,f(Le,{style:"secondary",class:o,onClick:r,get children(){return t()}}),null),_(s,f(Le,{style:"secondary",class:o,onClick:()=>n(t()+1),children:"+"}),null),s})()},Wu=w('<tr class="border border-color-transparent border-be-color-fg-5"><td><div></div></td><td class="p-b-s.6 font-semibold flex flex-wrap">'),gs=he(),Bu=(e,t)=>{const n=ie(gs),r=o=>{n==null||n.setPart(t,o),n==null||n.select()};switch(e.type){case"text":return f(Le,{style:"none",class:"text-accent transition ease-in",onClick:()=>r(e.value),get children(){return e.value}});case"element":switch(e.name){case"select":return f(Uu,re(e,{onChange:o=>r(o)}));case"input":return f(Hu,re(e,{onChange:o=>r(o)}))}}},Gu=e=>{const t=ie(Pr),[n,r]=E([]),o=(l,a)=>{r(u=>(u[l]=a,[...u]))};te(()=>{e.children.forEach((l,a)=>{switch(l.type){case"text":o(a,l.value);break}})});const s=()=>{const l=n().join("").match(/\S+/g);return l?l.join(""):""},i=()=>{var l;t==null||t.selectUtil({util:s(),renderer:((l=e.attributes)==null?void 0:l.renderer)??""}),e.onSelect()};return f(gs.Provider,{value:{parts:n,setPart:o,select:i},get children(){return f(at.Provider,{get value(){return _t([Bu])},get children(){const l=Wu(),a=l.firstChild,u=a.firstChild,c=a.nextSibling;return _(c,f(le,e)),L(()=>T(u,`i-mdi-check m-auto transition opacity-${e.selected?"s":"zero"}`)),l}})}})},Vu=w('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody>'),ps=he(),An={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3"},Fu=(e,t)=>{const n=ie(ps);if(e.type==="element")switch(e.name){case"util":return f(Gu,re(e,{get selected(){return(n==null?void 0:n.selected())===t},onSelect:()=>n==null?void 0:n.setSelected(t)}))}},qu=e=>{const[t,n]=E(-1);return f(ps.Provider,{value:{selected:t,setSelected:n},get children(){return f(at.Provider,{get value(){return _t([Fu])},get children(){const r=Vu(),o=r.firstChild,s=o.firstChild,i=s.firstChild,l=i.nextSibling,a=o.nextSibling;return _(a,f(le,e)),L(u=>{const c=An.tr,d=`${An.th} p-i-s`,h=`${An.th} size-i-full`;return c!==u._v$&&T(s,u._v$=c),d!==u._v$2&&T(i,u._v$2=d),h!==u._v$3&&T(l,u._v$3=h),u},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}})},Yu=w("<div>"),Xu=e=>{const[t,n]=E();let r;return te(()=>{if(!r){n(void 0);return}t()||n(r.attachShadow({mode:"open"}))}),te(()=>{const o=t();o&&(o.innerHTML=e.innerHTML)}),(()=>{const o=Yu(),s=r;return typeof s=="function"?tt(s,o):r=o,L(()=>T(o,e.class)),o})()},bs=e=>f(Xu,{get class(){return e.class},get innerHTML(){return`
    <div
      id="root"
      class="${Se.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${e.css.replaceAll(":root",":where(#root)")}</style>
      ${e.html}
    </div>
  `}});function Ku(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wr(e){const t=e.length;let n=-1,r,o="";const s=e.charCodeAt(0);for(;++n<t;){if(r=e.charCodeAt(n),r===0){o+="�";continue}if(r===44){o+="\\,";continue}if(r>=1&&r<=31||r===127||n===0&&r>=48&&r<=57||n===1&&r>=48&&r<=57&&s===45){o+=`\\${r.toString(16)} `;continue}if(n===0&&t===1&&r===45){o+=`\\${e.charAt(n)}`;continue}if(r>=128||r===45||r===95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){o+=e.charAt(n);continue}o+=`\\${e.charAt(n)}`}return o}const Ln=wr;function pe(e=[]){return Array.isArray(e)?e:[e]}function gt(e){return Array.from(new Set(e))}function ue(e){return typeof e=="string"}function pt(e){return ue(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(t=>t[1]!=null)}function Ju(e){return Array.isArray(e)?e.find(t=>!Array.isArray(t)||Array.isArray(t[0]))?e.map(t=>pt(t)):[e]:[pt(e)]}function Zu(e){return e.filter(([t,n],r)=>{if(t.startsWith("$$"))return!1;for(let o=r-1;o>=0;o--)if(e[o][0]===t&&e[o][1]===n)return!1;return!0})}function En(e){return e==null?"":Zu(e).map(([t,n])=>n!=null?`${t}:${n};`:void 0).filter(Boolean).join("")}function zt(e){return e&&typeof e=="object"&&!Array.isArray(e)}function vs(e,t,n=!1){const r=e,o=t;if(Array.isArray(o))return n&&Array.isArray(o)?[...r,...o]:[...o];const s={...r};return zt(r)&&zt(o)&&Object.keys(o).forEach(i=>{zt(r[i])&&zt(o[i])||Array.isArray(r[i])&&Array.isArray(o[i])?s[i]=vs(r[i],o[i],n):Object.assign(s,{[i]:o[i]})}),s}function Nt(e){let t,n,r;if(Array.isArray(e)){for(n=Array(t=e.length);t--;)n[t]=(r=e[t])&&typeof r=="object"?Nt(r):r;return n}if(Object.prototype.toString.call(e)==="[object Object]"){n={};for(t in e)t==="__proto__"?Object.defineProperty(n,t,{value:Nt(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=(r=e[t])&&typeof r=="object"?Nt(r):r;return n}return e}function Qu(e){return ue(e[0])}function ed(e){return ue(e[0])}const no="$$shortcut-no-merge";function td(e){return typeof e=="function"?{match:e}:e}function ro(e){return e.length===3}function nd(e){return e!=null}function rd(){}class od{constructor(){this._map=new Map}get(t,n){const r=this._map.get(t);if(r)return r.get(n)}getFallback(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.has(n)||o.set(n,r),o.get(n)}set(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.set(n,r),this}has(t,n){var r;return(r=this._map.get(t))==null?void 0:r.has(n)}delete(t,n){var r;return((r=this._map.get(t))==null?void 0:r.delete(n))||!1}deleteTop(t){return this._map.delete(t)}map(t){return Array.from(this._map.entries()).flatMap(([n,r])=>Array.from(r.entries()).map(([o,s])=>t(s,n,o)))}}class $s extends Set{constructor(t){super(t),this._map??(this._map=new Map);for(const n of t??[])this.add(n)}add(t){return this._map??(this._map=new Map),this._map.set(t,(this._map.get(t)??0)+1),super.add(t)}delete(t){return this._map.delete(t),super.delete(t)}clear(){this._map.clear(),super.clear()}getCount(t){return this._map.get(t)??0}setCount(t,n){return this._map.set(t,n),super.add(t)}}function Pn(e){return e instanceof $s}const Mt={};function sd(e=["-",":"]){const t=e.join("|");return Mt[t]||(Mt[t]=new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),Mt[t].lastIndex=0,Mt[t]}function id(e,t=["-",":"],n=5){const r=sd(t);let o,s=e.toString();const i=new Set,l=new Map;do o=!1,s=s.replace(r,(u,c,d,h,$)=>{var j;if(!t.includes(d))return u;o=!0,i.add(c+d);const p=$+c.length+d.length+1,m={length:u.length,items:[]};l.set($,m);for(const C of[...h.matchAll(/\S+/g)]){const y=p+C.index;let k=(j=l.get(y))==null?void 0:j.items;k?l.delete(y):k=[{offset:y,length:C[0].length,className:C[0]}];for(const g of k)g.className=g.className==="~"?c:g.className.replace(/^(!?)(.*)/,`$1${c}${d}$2`),m.items.push(g)}return"$".repeat(u.length)}),n-=1;while(o&&n);let a;if(typeof e=="string"){a="";let u=0;for(const[c,d]of l)a+=e.slice(u,c),a+=d.items.map(h=>h.className).join(" "),u=c+d.length;a+=e.slice(u)}else{a=e;for(const[u,c]of l)a.overwrite(u,u+c.length,c.items.map(d=>d.className).join(" "))}return{prefixes:Array.from(i),hasChanged:o,groupsByOffset:l,get expanded(){return a.toString()}}}function ld(e,t=["-",":"],n=5){const r=id(e,t,n);return typeof e=="string"?r.expanded:e}const oo=new Set;function ad(e){oo.has(e)||(console.warn("[unocss]",e),oo.add(e))}function cd(e){const t=function(r){var s;const o=((s=this.__options)==null?void 0:s.sequence)||[];this.__options.sequence=[];for(const i of o){const l=e[i](r);if(l!=null)return l}};function n(r,o){return r.__options||(r.__options={sequence:[]}),r.__options.sequence.push(o),r}for(const r of Object.keys(e))Object.defineProperty(t,r,{enumerable:!0,get(){return n(this,r)}});return t}const ud=/[\\:]?[\s'"`;{}]+/g;function dd(e){return e.split(ud)}const fd={name:"@unocss/core/extractor-split",order:0,extract({code:e}){return dd(e)}};function hd(){return{events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}}}const Kn="default",Jn="preflights",md="shortcuts",gd="imports",pd={[gd]:-200,[Jn]:-100,[md]:-10,[Kn]:0};function ys(e){return pe(e).flatMap(t=>Array.isArray(t)?[t]:Object.entries(t))}const so="_uno_resolved";function bd(e){var n;if(so in e)return e;e={...e},Object.defineProperty(e,so,{value:!0,enumerable:!1});const t=e.shortcuts?ys(e.shortcuts):void 0;if(e.shortcuts=t,e.prefix||e.layer){const r=o=>{o[2]||(o[2]={});const s=o[2];s.prefix==null&&e.prefix&&(s.prefix=pe(e.prefix)),s.layer==null&&e.layer&&(s.layer=e.layer)};t==null||t.forEach(r),(n=e.rules)==null||n.forEach(r)}return e}function ws(e){const t=bd(e);if(!t.presets)return[t];const n=(t.presets||[]).flatMap(pe).flatMap(ws);return[t,...n]}function io(e={},t={}){var g,O;const n=Object.assign({},t,e),r=gt((n.presets||[]).flatMap(pe).flatMap(ws)),o=[...r.filter(v=>v.enforce==="pre"),...r.filter(v=>!v.enforce),...r.filter(v=>v.enforce==="post")],s=[...o,n],i=[...s].reverse(),l=Object.assign({},pd,...s.map(v=>v.layers));function a(v){return gt(s.flatMap(A=>pe(A[v]||[])))}const u=a("extractors");let c=(g=i.find(v=>v.extractorDefault!==void 0))==null?void 0:g.extractorDefault;c===void 0&&(c=fd),c&&!u.includes(c)&&u.unshift(c),u.sort((v,A)=>(v.order||0)-(A.order||0));const d=a("rules"),h={},$=d.length,p=d.map((v,A)=>{var H;if(Qu(v)){pe(((H=v[2])==null?void 0:H.prefix)||"").forEach(b=>{h[b+v[0]]=[A,v[1],v[2],v]});return}return[A,...v]}).filter(Boolean).reverse();let m=vd(s.map(v=>v.theme));const j=a("extendTheme");for(const v of j)m=v(m)||m;const C={templates:gt(s.flatMap(v=>{var A;return pe((A=v.autocomplete)==null?void 0:A.templates)})),extractors:s.flatMap(v=>{var A;return pe((A=v.autocomplete)==null?void 0:A.extractors)}).sort((v,A)=>(v.order||0)-(A.order||0)),shorthands:$d(s.map(v=>{var A;return((A=v.autocomplete)==null?void 0:A.shorthands)||{}}))};let y=a("separators");y.length||(y=[":","-"]);const k={mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:v=>v,...n,presets:o,envMode:n.envMode||"build",shortcutsLayer:n.shortcutsLayer||"shortcuts",layers:l,theme:m,rulesSize:$,rulesDynamic:p,rulesStaticMap:h,preprocess:a("preprocess"),postprocess:a("postprocess"),preflights:a("preflights"),autocomplete:C,variants:a("variants").map(td).sort((v,A)=>(v.order||0)-(A.order||0)),shortcuts:ys(a("shortcuts")).reverse(),extractors:u,safelist:a("safelist"),separators:y};for(const v of s)(O=v==null?void 0:v.configResolved)==null||O.call(v,k);return k}function vd(e){return e.map(t=>t?Nt(t):{}).reduce((t,n)=>vs(t,n),{})}function $d(e){return e.reduce((t,n)=>{const r={};for(const o in n){const s=n[o];Array.isArray(s)?r[o]=`(${s.join("|")})`:r[o]=s}return{...t,...r}},{})}const yd="0.55.0";class wd{constructor(t={},n={}){this.userConfig=t,this.defaults=n,this.version=yd,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=hd(),this.config=io(t,n),this.events.emit("config",this.config)}setConfig(t,n){t&&(n&&(this.defaults=n),this.userConfig=t,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=io(t,this.defaults),this.events.emit("config",this.config))}async applyExtractors(t,n,r=new Set){var s;const o={original:t,code:t,id:n,extracted:r,envMode:this.config.envMode};for(const i of this.config.extractors){const l=await((s=i.extract)==null?void 0:s.call(i,o));if(l)if(Pn(l)&&Pn(r))for(const a of l)r.setCount(a,r.getCount(a)+l.getCount(a));else for(const a of l)r.add(a)}return r}makeContext(t,n){const r={rawSelector:t,currentSelector:n[1],theme:this.config.theme,generator:this,variantHandlers:n[2],constructCSS:(...o)=>this.constructCustomCSS(r,...o),variantMatch:n};return r}async parseToken(t,n){var u;if(this.blocked.has(t))return;const r=`${t}${n?` ${n}`:""}`;if(this._cache.has(r))return this._cache.get(r);let o=t;for(const c of this.config.preprocess)o=c(t);if(this.isBlocked(o)){this.blocked.add(t),this._cache.set(r,null);return}const s=await this.matchVariants(t,o);if(!s||this.isBlocked(s[1])){this.blocked.add(t),this._cache.set(r,null);return}const i=this.makeContext(t,[n||s[0],s[1],s[2],s[3]]);this.config.details&&(i.variants=[...s[3]]);const l=await this.expandShortcut(i.currentSelector,i),a=l?await this.stringifyShortcuts(i.variantMatch,i,l[0],l[1]):(u=await this.parseUtil(i.variantMatch,i))==null?void 0:u.map(c=>this.stringifyUtil(c,i)).filter(nd);if(a!=null&&a.length)return this._cache.set(r,a),a;this._cache.set(r,null)}async generate(t,n={}){const{id:r,scope:o,preflights:s=!0,safelist:i=!0,minify:l=!1,extendedInfo:a=!1}=n,u=ue(t)?await this.applyExtractors(t,r,a?new $s:new Set):Array.isArray(t)?new Set(t):t;i&&this.config.safelist.forEach(g=>{u.has(g)||u.add(g)});const c=l?"":`
`,d=new Set([Kn]),h=a?new Map:new Set,$=new Map;let p={};const m=Array.from(u).map(async g=>{var v;if(h.has(g))return;const O=await this.parseToken(g);if(O!=null){h instanceof Map?h.set(g,{data:O,count:Pn(u)?u.getCount(g):-1}):h.add(g);for(const A of O){const H=A[3]||"",M=(v=A[4])==null?void 0:v.layer;$.has(H)||$.set(H,[]),$.get(H).push(A),M&&d.add(M)}}});await Promise.all(m),await(async()=>{if(!s)return;const g={generator:this,theme:this.config.theme},O=new Set([]);this.config.preflights.forEach(({layer:v=Jn})=>{d.add(v),O.add(v)}),p=Object.fromEntries(await Promise.all(Array.from(O).map(async v=>{const H=(await Promise.all(this.config.preflights.filter(M=>(M.layer||Jn)===v).map(async M=>await M.getCSS(g)))).filter(Boolean).join(c);return[v,H]})))})();const j=this.config.sortLayers(Array.from(d).sort((g,O)=>(this.config.layers[g]??0)-(this.config.layers[O]??0)||g.localeCompare(O))),C={},y=g=>{if(C[g])return C[g];let O=Array.from($).sort((A,H)=>{var M;return(this.parentOrders.get(A[0])??0)-(this.parentOrders.get(H[0])??0)||((M=A[0])==null?void 0:M.localeCompare(H[0]||""))||0}).map(([A,H])=>{const M=H.length,b=H.filter(R=>{var V;return(((V=R[4])==null?void 0:V.layer)||Kn)===g}).sort((R,V)=>{var K,J,oe,Q,ee,Te,dt;return R[0]-V[0]||(((K=R[4])==null?void 0:K.sort)||0)-(((J=V[4])==null?void 0:J.sort)||0)||((ee=(oe=R[5])==null?void 0:oe.currentSelector)==null?void 0:ee.localeCompare(((Q=V[5])==null?void 0:Q.currentSelector)??""))||((Te=R[1])==null?void 0:Te.localeCompare(V[1]||""))||((dt=R[2])==null?void 0:dt.localeCompare(V[2]||""))||0}).map(([,R,V,,K,,J])=>[[[(R&&_d(R,o))??"",(K==null?void 0:K.sort)??0]],V,!!(J??(K==null?void 0:K.noMerge))]);if(!b.length)return;const z=b.reverse().map(([R,V,K],J)=>{if(!K&&this.config.mergeSelectors)for(let Q=J+1;Q<M;Q++){const ee=b[Q];if(ee&&!ee[2]&&(R&&ee[0]||R==null&&ee[0]==null)&&ee[1]===V)return R&&ee[0]&&ee[0].push(...R),null}const oe=R?gt(R.sort((Q,ee)=>{var Te;return Q[1]-ee[1]||((Te=Q[0])==null?void 0:Te.localeCompare(ee[0]||""))||0}).map(Q=>Q[0]).filter(Boolean)):[];return oe.length?`${oe.join(`,${c}`)}{${V}}`:V}).filter(Boolean).reverse().join(c);if(!A)return z;const W=A.split(" $$ ");return`${W.join("{")}{${c}${z}${c}}${W.map(R=>"").join("}")}`}).filter(Boolean).join(c);s&&(O=[p[g],O].filter(Boolean).join(c));const v=l?"":`/* layer: ${g} */${c}`;return C[g]=O?v+O:""},k=(g=j,O)=>g.filter(v=>!(O!=null&&O.includes(v))).map(v=>y(v)||"").filter(Boolean).join(c);return{get css(){return k()},layers:j,matched:h,getLayers:k,getLayer:y}}async matchVariants(t,n){const r=new Set,o=[];let s=n||t,i=!1;const l={rawSelector:t,theme:this.config.theme,generator:this};for(;;){i=!1;for(const a of this.config.variants){if(!a.multiPass&&r.has(a))continue;let u=await a.match(s,l);if(u){if(ue(u)){if(u===s)continue;u={matcher:u}}s=u.matcher,o.unshift(u),r.add(a),i=!0;break}}if(!i)break;if(o.length>500)throw new Error(`Too many variants applied to "${t}"`)}return[t,s,o,r]}applyVariants(t,n=t[4],r=t[1]){const s=n.slice().sort((u,c)=>(u.order||0)-(c.order||0)).reduceRight((u,c)=>d=>{var p,m;const h=((p=c.body)==null?void 0:p.call(c,d.entries))||d.entries,$=Array.isArray(c.parent)?c.parent:[c.parent,void 0];return(c.handle??jd)({...d,entries:h,selector:((m=c.selector)==null?void 0:m.call(c,d.selector,h))||d.selector,parent:$[0]||d.parent,parentOrder:$[1]||d.parentOrder,layer:c.layer||d.layer,sort:c.sort||d.sort},u)},u=>u)({prefix:"",selector:Cd(r),pseudo:"",entries:t[2]}),{parent:i,parentOrder:l}=s;i!=null&&l!=null&&this.parentOrders.set(i,l);const a={selector:[s.prefix,s.selector,s.pseudo].join(""),entries:s.entries,parent:i,layer:s.layer,sort:s.sort,noMerge:s.noMerge};for(const u of this.config.postprocess)u(a);return a}constructCustomCSS(t,n,r){const o=pt(n);if(ue(o))return o;const{selector:s,entries:i,parent:l}=this.applyVariants([0,r||t.rawSelector,o,void 0,t.variantHandlers]),a=`${s}{${En(i)}}`;return l?`${l}{${a}}`:a}async parseUtil(t,n,r=!1,o){var c;const[s,i,l]=ue(t)?await this.matchVariants(t):t;this.config.details&&(n.rules=n.rules??[]);const a=this.config.rulesStaticMap[i];if(a&&a[1]&&(r||!((c=a[2])!=null&&c.internal))){this.config.details&&n.rules.push(a[3]);const d=a[0],h=pt(a[1]),$=a[2];return ue(h)?[[d,h,$]]:[[d,s,h,$,l]]}n.variantHandlers=l;const{rulesDynamic:u}=this.config;for(const[d,h,$,p]of u){if(p!=null&&p.internal&&!r)continue;let m=i;if(p!=null&&p.prefix){const k=pe(p.prefix);if(o){const g=pe(o);if(!k.some(O=>g.includes(O)))continue}else{const g=k.find(O=>i.startsWith(O));if(g==null)continue;m=i.slice(g.length)}}const j=m.match(h);if(!j)continue;const C=await $(j,n);if(!C)continue;this.config.details&&n.rules.push([h,$,p]);const y=Ju(C).filter(k=>k.length);if(y.length)return y.map(k=>ue(k)?[d,k,p]:[d,s,k,p,l])}}stringifyUtil(t,n){if(!t)return;if(ro(t))return[t[0],void 0,t[1],void 0,t[2],this.config.details?n:void 0,void 0];const{selector:r,entries:o,parent:s,layer:i,sort:l,noMerge:a}=this.applyVariants(t),u=En(o);if(!u)return;const{layer:c,sort:d,...h}=t[3]??{},$={...h,layer:i??c,sort:l??d};return[t[0],r,u,s,$,this.config.details?n:void 0,a]}async expandShortcut(t,n,r=5){var l;if(r===0)return;const o=this.config.details?a=>{n.shortcuts=n.shortcuts??[],n.shortcuts.push(a)}:rd;let s,i;for(const a of this.config.shortcuts){let u=t;if((l=a[2])!=null&&l.prefix){const d=pe(a[2].prefix).find(h=>t.startsWith(h));if(d==null)continue;u=t.slice(d.length)}if(ed(a)){if(a[0]===u){s=s||a[2],i=a[1],o(a);break}}else{const c=u.match(a[0]);if(c&&(i=a[1](c,n)),i){s=s||a[2],o(a);break}}}if(ue(i)&&(i=ld(i.trim()).split(/\s+/g)),!i){const[a,u]=ue(t)?await this.matchVariants(t):t;if(a!==u){const c=await this.expandShortcut(u,n,r-1);c&&(i=c[0].map(d=>ue(d)?a.replace(u,d):d))}}if(i)return[(await Promise.all(i.map(async a=>{var u;return(ue(a)?(u=await this.expandShortcut(a,n,r-1))==null?void 0:u[0]:void 0)||[a]}))).flat(1).filter(Boolean),s]}async stringifyShortcuts(t,n,r,o={layer:this.config.shortcutsLayer}){var c;const s=new od,i=(await Promise.all(gt(r).map(async d=>{const h=ue(d)?await this.parseUtil(d,n,!0,o.prefix):[[Number.POSITIVE_INFINITY,"{inline}",pt(d),void 0,[]]];return h||ad(`unmatched utility "${d}" in shortcut "${t[1]}"`),h||[]}))).flat(1).filter(Boolean).sort((d,h)=>d[0]-h[0]),[l,,a]=t,u=[];for(const d of i){if(ro(d)){u.push([d[0],void 0,d[1],void 0,d[2],n,void 0]);continue}const{selector:h,entries:$,parent:p,sort:m,noMerge:j}=this.applyVariants(d,[...d[4],...a],l);s.getFallback(h,p,[[],d[0]])[0].push([$,!!(j??((c=d[3])==null?void 0:c.noMerge)),m??0])}return u.concat(s.map(([d,h],$,p)=>{const m=(C,y,k)=>{const g=Math.max(...k.map(v=>v[1])),O=k.map(v=>v[0]);return(C?[O.flat(1)]:O).map(v=>{const A=En(v);if(A)return[h,$,A,p,{...o,noMerge:y,sort:g},n,void 0]})};return[[d.filter(([,C])=>C).map(([C,,y])=>[C,y]),!0],[d.filter(([,C])=>!C).map(([C,,y])=>[C,y]),!1]].map(([C,y])=>[...m(!1,y,C.filter(([k])=>k.some(g=>g[0]===no))),...m(!0,y,C.filter(([k])=>k.every(g=>g[0]!==no)))])}).flat(2).filter(Boolean))}isBlocked(t){return!t||this.config.blocklist.some(n=>ue(n)?n===t:n.test(t))}}function xd(e,t){return new wd(e,t)}const kd=/\s\$\$\s+/g;function Sd(e){return e.match(/\s\$\$\s/)}function _d(e,t){return Sd(e)?e.replace(kd,t?` ${t} `:" "):t?`${t} ${e}`:e}const lo=/^\[(.+?)(~?=)"(.*)"\]$/;function Cd(e){return lo.test(e)?e.replace(lo,(t,n,r,o)=>`[${Ln(n)}${r}"${Ln(o)}"]`):`.${Ln(e)}`}function jd(e,t){return t(e)}const Td={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}};function At(e,t=2){let n=e;for(;n.length<t;)n=`0${n}`;return n}function Od(e){return e*(Math.PI/180)}function zd(e){return e*(180/Math.PI)}function D(e,t,n){return Math.min(Math.max(e,t),n)}function Ue(e,t){let[n,r,o,s]=t,i=s<1?`/${ke(s,5)}`:"";switch(e){case"rgb":case"rgba":return s<1?`rgba(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, ${ke(s,5)})`:`rgb(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)})`;case"oklab":case"oklch":return`${e}(${ke(n*100,6)}% ${ke(r,6)} ${ke(o,6)}${i})`;default:return`color(${e} ${ke(n,6)} ${ke(r,6)} ${ke(o,6)}${i})`}}function ct(e,t){let n=[...e];for(let r=0;r<t.length;r++){let o=0;for(let s=0;s<t[r].length;s++)o+=e[s]*t[r][s];n[r]=o}return n}function ke(e,t=2){let n=10**t;return Math.round(e*n)/n}var Md=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],Ad=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Ld=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],F=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],Ed=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],Pd=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function Rd(e,t){let n=[1/0,1/0,1/0,1/0,1/0],r=1/0,o=1/0,s=1/0;-1.88170328*e-.80936493*t>1?(n=[1.19086277,1.76576728,.59662641,.75515197,.56771245],r=4.0767416621,o=-3.3077115913,s=.2309699292):1.81444104*e-1.19445276*t>1?(n=[.73956515,-.45954404,.08285427,.1254107,.14503204],r=-1.2684380046,o=2.6097574011,s=-.3413193965):(n=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],r=-.0041960863,o=-.7034186147,s=1.707614701);let i=n[0]+n[1]*e+n[2]*t+n[3]*e*e+n[4]*e*t,l=.3963377774*e+.2158037573*t,a=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t;{let c=1+i*l,d=1+i*a,h=1+i*u,$=c**3,p=d**3,m=h**3,j=3*l*c**2,C=3*a*d**2,y=3*u*h**2,k=6*l**2*c,g=6*a**2*d,O=6*u**2*h,v=r*$+o*p+s*m,A=r*j+o*C+s*y,H=r*k+o*g+s*O;i=i-v*A/(A*A-.5*v*H)}return i}function Dd(e,t){let n=Rd(e,t),[r,o,s]=Ft(Qn([1,n*e,n*t,1])),i=Math.cbrt(1/Math.max(r,o,s)),l=i*n;return{L:i,C:l}}function Id(e,t,n,r,o){let s=Dd(e,t);if((n-o)*s.C-(s.L-o)*r<=0)return s.C*o/(r*s.L+s.C*(o-n));let i=s.C*(o-1)/(r*(s.L-1)+s.C*(o-n)),l=n-o,a=r,u=.3963377774*e+.2158037573*t,c=-.1055613458*e-.0638541728*t,d=-.0894841775*e-1.291485548*t,h=l+a*u,$=l+a*c,p=l+a*d,m=o*(1-i)+i*n,j=i*r,C=m+j*u,y=m+j*c,k=m+j*d,g=[[C**3,y**3,k**3],[3*h*C**2,3*$*y**2,3*p*k**2],[6*h**2*C,6*$**2*y,6*p**2*k]],O=F[0][0]*g[0][0]+F[0][1]*g[0][1]+F[0][2]*g[0][2]-1,v=F[0][0]*g[1][0]+F[0][1]*g[1][1]+F[0][2]*g[1][2],A=F[0][0]*g[2][0]+F[0][1]*g[2][1]+F[0][2]*g[2][2],H=v/(v*v-.5*O*A),M=H>=0?-O*H:1/0,b=F[1][0]*g[0][0]+F[1][1]*g[0][1]+F[1][2]*g[0][2]-1,z=F[1][0]*g[1][0]+F[1][1]*g[1][1]+F[1][2]*g[1][2],W=F[1][0]*g[2][0]+F[1][1]*g[2][1]+F[1][2]*g[2][2],R=z/(z*z-.5*b*W),V=R>=0?-b*R:1/0,K=F[2][0]*g[0][0]+F[2][1]*g[0][1]+F[2][2]*g[0][2]-1,J=F[2][0]*g[1][0]+F[2][1]*g[1][1]+F[2][2]*g[1][2],oe=F[2][0]*g[2][0]+F[2][1]*g[2][1]+F[2][2]*g[2][2],Q=J/(J*J-.5*K*oe),ee=Q>=0?-K*Q:1/0;return i+Math.min(M,V,ee)}function Rn(e){let t=Math.abs(e);return t<=.0031308?e*12.92:1.055*Math.pow(t,1/2.4)-.055}function Dn(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function Zn(e){let[t,n,r,o]=e;t=Math.abs(t%360);let s=n*(1-Math.abs(2*r-1)),i=s*(1-Math.abs(t/60%2-1)),l=0,a=0,u=0;0<=t&&t<60?(l=s,a=i):60<=t&&t<120?(l=i,a=s):120<=t&&t<180?(a=s,u=i):180<=t&&t<240?(a=i,u=s):240<=t&&t<300?(l=i,u=s):300<=t&&t<360&&(l=s,u=i);let c=r-s/2;return[l+c,a+c,u+c,o]}function ao(e){let[t,n,r,o]=e;if(n+r>=1){let i=n/(n+r);return[i,i,i,o]}let s=Zn([t,100,50,o]);for(let i=0;i<3;i++)s[i]*=1-n-r,s[i]+=n;return s}function Ud(e,t=2e-4){let[n,r,o,s]=e,i=Math.abs(r)<t&&Math.abs(o)<t?0:zd(Math.atan2(o,r));for(;i<0;)i+=360;for(;i>=360;)i-=360;return[n,Math.sqrt(r**2+o**2),i,s]}function Nd(e){let[t,n,r,o]=e;if(t===0)return[0,0,0,o];for(;r<0;)r+=360;for(;r>=360;)r-=360;let s=Od(r);return[t,Math.cos(s)*n,Math.sin(s)*n,o]}function Hd(e){return ct(e,Ld)}function Ft(e){let[t,n,r,o]=e,[s,i,l]=ct([t**3,n**3,r**3,o],F);return[s,i,l,o]}function Ge(e){let[t,n,r,o]=e;return[Rn(t),Rn(n),Rn(r),o]}function xs(e){let[t,n,r,o]=ct(e,Ed);return[Math.cbrt(t),Math.cbrt(n),Math.cbrt(r),o]}function co(e){return ct(e,Md)}function Qn(e){return ct(e,Pd)}function qt(e){let[t,n,r,o]=Ft(Qn(e));if(t>1.001||t<-.001||n>1.001||n<-.001||r>1.001||r<-.001){let[s,i,l]=e,a=Math.max(1e-5,Math.sqrt(i**2+l**2)),u=D(s,0,1),c=i/a,d=l/a,h=Id(c,d,s,a,u);return Ge(Ft(Qn([u*(1-h)+h*s,c*(h*a),d*(h*a),o])))}return Ge([t,n,r,o])}function Yt(e){return qt(Nd(e))}function He(e){let[t,n,r,o]=e;return[Dn(t),Dn(n),Dn(r),o]}function Xt(e){return Hd(xs(He(e)))}function Kt(e){return Ud(Xt(e))}function uo(e){return ct(e,Ad)}function ks(e,t){let[n,r,o,s]=Kt(e);return typeof t.lightness=="number"&&(t.mode==="relative"?n+=t.lightness:n=t.lightness),typeof t.chroma=="number"&&(t.mode==="relative"?r+=t.chroma:r=t.chroma),typeof t.hue=="number"&&(t.mode==="relative"?o+=t.hue:o=t.hue),typeof t.alpha=="number"&&(t.mode==="relative"?s+=t.alpha:s=t.alpha),Yt([n,r,o,s])}var Wd={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},fo=Wd,Bd=/-?[0-9.]+%?/g,Gd=/^#[0-9a-f]{3,8}$/i,Vd=/^([^( ]+)\s*\(\s*([^)]+)\)$/,Fd=16**6,er=16**4,tr=16**2;function _e(e){let t=qd(e),n={},r={get hex(){if(n.hex)return n.hex;let[o,s,i,l]=t,a="#";return a+=At(Math.round(D(o*255,0,255)).toString(16),2),a+=At(Math.round(D(s*255,0,255)).toString(16),2),a+=At(Math.round(D(i*255,0,255)).toString(16),2),t[3]<1&&(a+=At(Math.round(l*255).toString(16),2)),n.hex=a,n.hex},get hexVal(){if(typeof n.hexVal=="number")return n.hexVal;let[o,s,i,l]=t;return l<1&&console.warn(`hexVal converted a semi-transparent color (${l*100}%) to fully opaque`),o=Math.round(D(o*255,0,255)),s=Math.round(D(s*255,0,255)),i=Math.round(D(i*255,0,255)),n.hexVal=o*er+s*tr+i,n.hexVal},get rgb(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},get rgba(){return n.rgb||(n.rgb=Ue("rgb",t)),n.rgb},rgbVal:t,rgbaVal:t,get linearRGB(){return n.linearRGB||(n.linearRGB=Ue("srgb-linear",He(t))),n.linearRGB},get linearRGBVal(){return n.linearRGBVal||(n.linearRGBVal=He(t)),n.linearRGBVal},get p3(){return n.p3||(n.p3=Ue("display-p3",t)),n.p3},p3Val:t,get oklab(){return n.oklab||(n.oklab=Ue("oklab",Xt(t))),n.oklab},get oklabVal(){return n.oklabVal||(n.oklabVal=Xt(t)),n.oklabVal},get oklch(){return n.oklch||(n.oklch=Ue("oklch",Kt(t))),n.oklch},get oklchVal(){return n.oklchVal||(n.oklchVal=Kt(t)),n.oklchVal},get xyz(){return n.xyz||(n.xyz=Ue("xyz-d65",co(He(t)))),n.xyz},get xyzVal(){return n.xyzVal||(n.xyzVal=co(He(t))),n.xyzVal},adjust(o){return _e(ks(t,o))}};return r.toString=()=>r.hex,r}function ho(e){if(e>Fd)throw new Error("8-digit hex values (with transparency) aren’t supported");let t=e,n=Math.floor(t/er);t-=n*er;let r=Math.floor(t/tr);t-=r*tr;let o=t;return[n/255,r/255,o/255,1]}function ze(e,t){let n=e.match(Bd);if(!n)throw new Error(`Unexpected color format: ${e}`);let r=[0,0,0,1];for(let o=0;o<n.length;o++)n[o]&&(n[o].includes("%")?r[o]=parseFloat(n[o])/100:!t||t[o]===1/0||t[o]===1?r[o]=parseFloat(n[o]):r[o]=parseFloat(n[o])/t[o]);return r}function qd(e){let t=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw t;if(Array.isArray(e)){if(e.some(i=>typeof i!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[n,r,o,s]=e;return[D(n,0,1),D(r,0,1),D(o,0,1),typeof s=="number"?D(s,0,1):1]}if(typeof e=="number")return ho(e);if(typeof e=="string"){let n=e.trim();if(!n)throw new Error("Expected color, received empty string");let r=n.toLowerCase();if(typeof fo[r]=="number")return ho(fo[r]);if(Gd.test(r)){let l=r.replace("#",""),a=[0,0,0,1];if(l.length===6||l.length===8)for(let u=0;u<l.length/2;u++){let c=u*2,d=c+2,h=l.substring(c,d);a[u]=parseInt(h,16)/255}else if(l.length===3||l.length===4)for(let u=0;u<l.length;u++){let c=l.charAt(u);a[u]=parseInt(`${c}${c}`,16)/255}else throw new Error(`Hex value "${r}" not a valid sRGB color`);return a}let o=n.match(Vd);if(!o)throw t;let[,s,i]=o;if(s==="color"){let l=i.indexOf(" ");s=i.substring(0,l),i=i.substring(l)}switch(s){case"rgb":case"rgba":case"srgb":{let[l,a,u,c]=ze(i,[255,255,255,1]);return[D(l,0,1),D(a,0,1),D(u,0,1),D(c,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let l=ze(i);return Ge(l)}case"hsl":case"hsla":{let[l,a,u,c]=ze(i);return Zn([l,D(a,0,1),D(u,0,1),D(c,0,1)])}case"hwb":case"hwba":{let[l,a,u,c]=ze(i);return ao([l,D(a,0,1),D(u,0,1),D(c,0,1)])}case"p3":case"display-p3":{let[l,a,u,c]=ze(i);return[D(l,0,1),D(a,0,1),D(u,0,1),D(c,0,1)]}case"lab":case"oklab":return qt(ze(i));case"lch":case"oklch":return Yt(ze(i));case"xyz":case"xyz-d65":return Ge(uo(ze(i)))}}if(typeof e=="object"){let n={...e},r=1;for(let o of Object.keys(n))o==="alpha"?r=D(n[o],0,1):n[o.toLowerCase()]=n[o];if("r"in n&&"g"in n&&"b"in n)return[D(n.r,0,1),D(n.g,0,1),D(n.b,0,1),r];if("h"in n&&"s"in n&&"l"in n)return Zn([n.h,D(n.s,0,1),D(n.l,0,1),r]);if("h"in n&&"w"in n&&"b"in n)return ao([n.h,D(n.w,0,1),D(n.b,0,1),r]);if("l"in n&&"a"in n&&"b"in n)return qt([n.l,n.a,n.b,r]);if("l"in n&&"c"in n&&"h"in n)return Yt([n.l,n.c,n.h,r]);if("x"in n&&"y"in n&&"z"in n)return Ge(uo([n.x,n.y,n.z,r]));throw t}throw t}function xr(e,t,n=.5,r="oklab"){let o=D(n,0,1);if(n===0)return _e(e);if(n===1)return _e(t);let s=1-o,i=o,l={oklch:Kt,oklab:Xt,lms:z=>He(xs(z)),linearRGB:He,sRGB:z=>z},a={oklch:Yt,oklab:qt,lms:z=>Ft(Ge(z)),linearRGB:Ge,sRGB:z=>z},u=l[r],c=a[r];if(!u)throw new Error(`Unknown color space "${r}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[d,h,$,p]=_e(e).rgbVal,[m,j,C,y]=_e(t).rgbVal;r==="oklch"&&(d===h&&h===$||m===j&&j===C)&&(u=l.oklab,c=a.oklab);let[k,g,O,v]=u([d,h,$,p]),[A,H,M,b]=u([m,j,C,y]);return r==="oklch"&&Math.abs(M-O)>180&&(Math.max(O,M)===M?M-=360:O-=360),_e(c([k*s+A*i,g*s+H*i,O*s+M*i,v*s+b*i]))}function Ss(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?xr(e,"black",r,n):_s(e,-r)}function _s(e,t,n="oklab"){let r=D(t,-1,1);return r>=0?xr(e,"white",r,n):Ss(e,-r)}function Jt(e){return _e(e).xyzVal[1]}function Yd(e){return ke(_e(e).oklabVal[0],5)}function Xd(e){return Jt(e)<.36?"dark":"light"}function Kd(e,t){let n=Jt(e),r=Jt(t),o=Math.max(n,r),s=Math.min(n,r),i=(o+.05)/(s+.05);return{ratio:i,AA:i>=4.5,AAA:i>=7}}var nr={adjust:ks,contrastRatio:Kd,darken:Ss,from:_e,lighten:_s,lightness:Yd,lightOrDark:Xd,luminance:Jt,mix:xr};function kr(e){var o,s,i;const t=e.dark.l,n=e.dark.c,r=e.dark.a??1;return{dark:{l:t,c:n,a:r},light:{l:((o=e.light)==null?void 0:o.l)??1-t,c:((s=e.light)==null?void 0:s.c)??n,a:((i=e.light)==null?void 0:i.a)??r}}}function Jd(e,t){const n=kr(t);return Object.assign(n,{dark:{h:e},light:{h:e}}),n}const Zd=(e,t,n,r=1)=>nr.from(`oklch(${e} ${t}, ${n}, ${r})`);function Qd(e,t){const n={light:{},dark:{}};if(!e.windblade)return n;const{colors:r}=e.windblade;return Object.entries(r).forEach(([o,s])=>{[s.base,...s.on].forEach((l,a)=>{const u=`--${o}-${a===0?"base":`fg-${a}`}`,{dark:c,light:d}=kr(l);n.dark[u]=nr.from(`oklch(${c.l} ${c.c}, ${t}, ${c.a})`).rgba,n.light[u]=nr.from(`oklch(${d.l} ${d.c}, ${t}, ${d.a})`).rgba})}),n}function ef(e){let t="";return Object.keys(e).forEach(n=>{t+=`${n}: ${e[n]};
`}),t}const tf=Object.freeze(Object.defineProperty({__proto__:null,LCHToCSSColor:Zd,getColorSchemeCSSProps:Qd,getLCA:kr,getLCHA:Jd,objToCSS:ef},Symbol.toStringTag,{value:"Module"}));function nf(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,s,i;if((s=(o=r.windblade)==null?void 0:o.miscColors)!=null&&s[n[2]])return{[t]:n[2]};if((i=r.windblade)!=null&&i.colors[n[2]])return{[t]:`var(--${n[2]}-base)`}}]}function rf(e){return[new RegExp(`^(${e})-(.+)$`),(t,{theme:n})=>{var s;const r=(s=n.windblade)==null?void 0:s.colors[t[2]];if(!r)return;const o={background:`var(--${t[2]}-base)`,color:`var(--${t[2]}-fg-1)`};for(let i=1;i<=r.on.length;++i)o[`--fg-${i}`]=`var(--${t[2]}-fg-${i})`;return o}]}function of(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o,s;return(s=(o=r.windblade)==null?void 0:o.miscColors)!=null&&s[n[2]]?{[t]:n[2]}:{[t]:`var(--fg-${n[2]})`}}]}const sf=Object.freeze(Object.defineProperty({__proto__:null,colorBgRule:rf,colorRule:nf,fgColorRule:of},Symbol.toStringTag,{value:"Module"})),lf={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},B=e=>e.filter(Boolean).join("-");function Cs(e,t,n,r,o){return[o(B([e,t]),B([n,r])),o(B([e,"b",t]),B([n,"block",r])),o(B([e,"i",t]),B([n,"inline",r]))]}function js(e,t,n,r,o){return[o(B([e,t]),B([n,r])),o(B([e,"b",t]),B([n,"block",r])),o(B([e,"bs",t]),B([n,"block-start",r])),o(B([e,"be",t]),B([n,"block-end",r])),o(B([e,"i",t]),B([n,"inline",r])),o(B([e,"is",t]),B([n,"inline-start",r])),o(B([e,"ie",t]),B([n,"inline-end",r]))]}function Ts(e,t,n,r,o){return[o(B([e,t]),B([n,r])),o(B([e,"ss",t]),B([n,"start-start",r])),o(B([e,"se",t]),B([n,"start-end",r])),o(B([e,"ee",t]),B([n,"end-end",r])),o(B([e,"es",t]),B([n,"end-start",r]))]}const af=Object.freeze(Object.defineProperty({__proto__:null,abbreviations:lf,axisRules:Cs,cornerRules:Ts,edgeRules:js},Symbol.toStringTag,{value:"Module"})),Sr={x:["-x"],y:["-y"],z:["-z"],"":["-x","-y"]},mo=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"],Lt=Object.assign({},...mo.map(e=>({[e.replace(/ /,"-")]:e})),...mo.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e}))),hn=["inherit","initial","revert","revert-layer","unset"],_r=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,Os=/^(-?\d*(?:\.\d+)?)$/i,zs=/^(px)$/i,cf=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function ge(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function uf(e){const t=e.match(_r);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(r&&!Number.isNaN(o))return`${ge(o)}${r}`}function df(e){if(e==="auto"||e==="a")return"auto"}function ff(e){if(e.match(zs))return`1${e}`;const t=e.match(_r);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${ge(o)}${r}`:`${ge(o/4)}rem`}function hf(e){if(e.match(zs))return`1${e}`;const t=e.match(_r);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${ge(o)}${r}`:`${ge(o)}px`}function mf(e){if(!Os.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return ge(t)}function gf(e){if(e.endsWith("%")&&(e=e.slice(0,-1)),!Os.test(e))return;const t=Number.parseFloat(e);if(!Number.isNaN(t))return`${ge(t/100)}`}function pf(e){if(e==="full")return"100%";const[t,n]=e.split("/"),r=Number.parseFloat(t)/Number.parseFloat(n);if(!Number.isNaN(r))return r===0?"0":`${ge(r*100)}%`}const bf=/^\[(color|length|position|quoted|string):/i;function mn(e,t){if(e&&e.startsWith("[")&&e.endsWith("]")){let n,r;const o=e.match(bf);if(o?(t||(r=o[1]),n=e.slice(o[0].length,-1)):n=e.slice(1,-1),!n||n==='=""')return;n.startsWith("--")&&(n=`var(${n})`);let s=0;for(const i of n)if(i==="[")s+=1;else if(i==="]"&&(s-=1,s<0))return;if(s)return;switch(r){case"string":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return n.replace(/(url\(.*?\))/g,i=>i.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,i=>{const l=[];return i.replace(/var\((--.+?)[,)]/g,(a,u)=>(l.push(u),a.replace(u,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function vf(e){return mn(e)}function $f(e){return mn(e,"color")}function yf(e){return mn(e,"length")}function wf(e){return mn(e,"position")}function xf(e){if(e.match(/^\$[^\s'"`;{}]/))return`var(--${wr(e.slice(1))})`}function kf(e){const t=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0&&!r?"0s":r?`${ge(o)}${r}`:`${ge(o)}ms`}function Sf(e){const t=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!t)return;const[,n,r]=t,o=Number.parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${ge(o)}${r}`:`${ge(o)}deg`}function _f(e){if(hn.includes(e))return e}function Cf(e){if(e.split(",").every(t=>cf.includes(t)))return e}function jf(e){if(["top","left","right","bottom","center"].includes(e))return e}const Tf={__proto__:null,numberWithUnit:uf,auto:df,rem:ff,px:hf,number:mf,percent:gf,fraction:pf,bracket:vf,bracketOfColor:$f,bracketOfLength:yf,bracketOfPosition:wf,cssvar:xf,time:kf,degree:Sf,global:_f,properties:Cf,position:jf},Ms=cd(Tf),Y=Ms;function Ee(e,t){return hn.map(n=>[`${e}-${n}`,{[t??e]:n}])}const Of=["%alpha","<alpha-value>"];new RegExp(Of.map(e=>Ku(e)).join("|"));function As(e,t,n){var s,i,l;const r=(s=t.windblade)==null?void 0:s.proportions[e];if(r!==void 0)return`${r}${n}`;const o=(l=(i=t.windblade)==null?void 0:i.miscSizes)==null?void 0:l[e];if(o!==void 0)return`${o}`;if(!Number.isNaN(Number(e)))return`${e}${n}`}function gn(e,t,n){return[new RegExp(`^${e}-(.+)$`),([r,o],{theme:s})=>{const i=(n==null?void 0:n.defaultUnit)??"rem",l=Ms.bracket(o);if(l!==void 0)return{[t]:l};let a=As(o,s,i);if(a!==void 0)return n!=null&&n.postprocess&&(a=n.postprocess(a)),{[t]:a}}]}function zf(e,t,n,r){return Cs(e,t,n,r,gn)}function Mf(e,t,n,r){return js(e,t,n,r,gn)}function Af(e,t,n,r){return Ts(e,t,n,r,gn)}const Lf=Object.freeze(Object.defineProperty({__proto__:null,axisRules:zf,cornerRules:Af,edgeRules:Mf,resolve:As,rule:gn},Symbol.toStringTag,{value:"Module"}));function Ef(e,t,n){return[new RegExp(`^(${e})-(.+)$`),(r,{theme:o})=>{if(!o.windblade)return;const s={},i=`${o.windblade.proportions[r[2]]*o.windblade.time.baseUnitMs}ms`;if(i!==void 0)return s[t]=(n==null?void 0:n(i))??i,s}]}function Pf(e,t){return[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{if(!r.windblade)return;const o={},s=r.windblade.time.functions[n[2]];if(s!==void 0)return o[t]=s,o}]}const Rf=Object.freeze(Object.defineProperty({__proto__:null,durationRule:Ef,timingFunctionRule:Pf},Symbol.toStringTag,{value:"Module"})),Z=Object.freeze(Object.defineProperty({__proto__:null,color:sf,logical:af,size:Lf,time:Rf},Symbol.toStringTag,{value:"Module"})),Df={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}};function Et(e,t){return{[`${e}-900`]:{base:{dark:{l:t[0].l,c:t[0].c},light:{l:t[9].l,c:t[9].c}},on:[{dark:{l:1,c:0}}]},[`${e}-800`]:{base:{dark:{l:t[1].l,c:t[1].c},light:{l:t[8].l,c:t[8].c}},on:[{dark:{l:1,c:0}}]},[`${e}-700`]:{base:{dark:{l:t[2].l,c:t[2].c},light:{l:t[7].l,c:t[7].c}},on:[{dark:{l:1,c:0}}]},[`${e}-600`]:{base:{dark:{l:t[3].l,c:t[3].c},light:{l:t[6].l,c:t[6].c}},on:[{dark:{l:1,c:0}}]},[`${e}-500`]:{base:{dark:{l:t[4].l,c:t[4].c},light:{l:t[5].l,c:t[5].c}},on:[{dark:{l:1,c:0}}]},[`${e}-400`]:{base:{dark:{l:t[5].l,c:t[5].c},light:{l:t[4].l,c:t[4].c}},on:[{dark:{l:0,c:0}}]},[`${e}-300`]:{base:{dark:{l:t[6].l,c:t[6].c},light:{l:t[3].l,c:t[3].c}},on:[{dark:{l:0,c:0}}]},[`${e}-200`]:{base:{dark:{l:t[7].l,c:t[7].c},light:{l:t[2].l,c:t[2].c}},on:[{dark:{l:0,c:0}}]},[`${e}-100`]:{base:{dark:{l:t[8].l,c:t[8].c},light:{l:t[1].l,c:t[1].c}},on:[{dark:{l:0,c:0}}]},[`${e}-50`]:{base:{dark:{l:t[9].l,c:t[9].c},light:{l:t[0].l,c:t[0].c}},on:[{dark:{l:0,c:0}}]}}}const If={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...Et("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...Et("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...Et("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...Et("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Uf={windblade:{colors:{},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Cr={none:{},material3:Df,tailwind:If,windblade:Uf},go=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},Ce=(...e)=>e.reduce((t,n)=>{if(Array.isArray(n))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(n).forEach(r=>{["__proto__","constructor","prototype"].includes(r)||(Array.isArray(t[r])&&Array.isArray(n[r])?t[r]=Ce.options.mergeArrays?Ce.options.uniqueArrayItems?Array.from(new Set(t[r].concat(n[r]))):[...t[r],...n[r]]:n[r]:go(t[r])&&go(n[r])?t[r]=Ce(t[r],n[r]):t[r]=n[r])}),t},{}),rr={mergeArrays:!0,uniqueArrayItems:!0};Ce.options=rr;Ce.withOptions=(e,...t)=>{Ce.options=Object.assign(Object.assign({},rr),e);const n=Ce(...t);return Ce.options=rr,n};const pn={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{},time:{baseUnitMs:150,functions:{default:"linear"}}}},Zt=Object.entries,Re=Object.keys;function x(e){return e.replace(/&/g,"&amp;").trimStart().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\n/g,"&#10;")}const{color:bt,logical:Ke}=Z;function bn(){const e=[bt.colorRule("bg","background-color"),bt.colorBgRule("bg"),bt.fgColorRule("bg-fg","background-color")],t=`
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

        <renderer for="fg" html="${x(`
          <div class="size-i-full aspect-1/1 max-size-i-m max-size-b-m rounded-s p-s bg-accent">
            <div class="size-i-full aspect-1/1 rounded-full $util"></div>
          </div>
        `)}" />

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function jr(){const e=[["bg-none",{"background-image":"none"}],...Re(Ke.abbreviations.edges).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ke.abbreviations.edges[n]}), var(--wb-gradient-stops))`}]),...Re(Ke.abbreviations.coners).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ke.abbreviations.coners[n]}), var(--wb-gradient-stops))`}])],t=`
    <page>
      <h1><title /></h1>
      <p>Repalced static colors with sematic colors.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${["bg-none",...Object.keys(Ke.abbreviations.edges).map(n=>`bg-gradient-to-${n}`),...Object.keys(Ke.abbreviations.coners).map(n=>`bg-gradient-to-${n}`)].map(n=>`<util>${n}</util>`).join("")}
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Tr(){const e=[bt.colorRule("from","--wb-gradient-from"),bt.colorRule("to","--wb-gradient-to")],t=`
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

        <renderer html="${x(`
          <div class="bg-gradient-to-ie $util from-accent-2 size-i-full size-b-l.2 rounded-s"></div>
        `)}" />

        <renderer for="from" html="${x(`
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
  `;return{rules:e,docs:t}}const Nf=Object.freeze(Object.defineProperty({__proto__:null,backgroundImage:jr,bgColor:bn,gradientColorStops:Tr},Symbol.toStringTag,{value:"Module"})),{color:Qt,logical:Je}=Z;function vn(){const e=[...Je.edgeRules("border","color","border","color",Qt.colorRule),...Je.edgeRules("border","color-fg","border","color",Qt.fgColorRule)],t=`
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
              ${Object.keys(Je.abbreviations.axis).map(n=>`<option value="${n}" />`)}
              ${Object.keys(Je.abbreviations.edges).map(n=>`<option value="${n}" />`)}
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
              ${Object.keys(Je.abbreviations.axis).map(n=>`<option value="${n}" />`)}
              ${Object.keys(Je.abbreviations.edges).map(n=>`<option value="${n}" />`)}
            </select>
            -color-fg-
            <input type="integer" />
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function $n(){const e=[Qt.colorRule("outline","outline-color"),Qt.fgColorRule("outline-fg","outline-color")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const Hf=Object.freeze(Object.defineProperty({__proto__:null,borderColor:vn,outlineColor:$n},Symbol.toStringTag,{value:"Module"})),{color:or}=Z;function Or(){const e=[or.colorRule("accent","accent-color")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function zr(){const e=[or.colorRule("caret","caret-color"),or.fgColorRule("caret-fg","caret-color")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const Wf=Object.freeze(Object.defineProperty({__proto__:null,accentColor:Or,caretColor:zr},Symbol.toStringTag,{value:"Module"})),{color:en}=Z;function yn(){const e=[en.colorRule("fill","fill"),en.fgColorRule("fill-fg","fill")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function wn(){const e=[en.colorRule("stroke","stroke"),en.fgColorRule("stroke-fg","stroke")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const Bf=Object.freeze(Object.defineProperty({__proto__:null,fill:yn,stroke:wn},Symbol.toStringTag,{value:"Module"})),{color:tn}=Z;function xn(){const e=[tn.colorRule("text","color"),tn.fgColorRule("text-fg","color")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function kn(){const e=[tn.colorRule("decoration","text-decoration-color"),tn.fgColorRule("decoration-fg","text-decoration-color")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const Gf=Object.freeze(Object.defineProperty({__proto__:null,textColor:xn,textDecorationColor:kn},Symbol.toStringTag,{value:"Module"})),{getColorSchemeCSSProps:Vf,objToCSS:Pt}=tf;function Sn(){const e=[[/^scheme-(auto|light|dark)-(\d+)$/,(n,{rawSelector:r,theme:o})=>{const s=Number(n[2]??0);if(Number.isNaN(s))return;const i=wr(r),{dark:l,light:a}=Vf(o,s);switch(n[1]){case"light":return`
              .${i} {
                color-scheme: light;
                ${Pt(a)}
              }
            `;case"dark":return`
              .${i} {
                color-scheme: dark;
                ${Pt(l)}
              }
            `;default:return`
              .${i} {
                color-scheme: light dark;
                ${Pt(l)}
              }

              @media (prefers-color-scheme: light) { .${i} {
                  ${Pt(a)}
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const Ff=Object.freeze(Object.defineProperty({__proto__:null,colorScheme:Sn},Symbol.toStringTag,{value:"Module"})),Ls=[...bn().rules,...jr().rules,...Tr().rules,...xn().rules,...kn().rules,...vn().rules,...$n().rules,...Or().rules,...zr().rules,...yn().rules,...wn().rules,...Sn().rules],qf=`
import { defineConfig } from 'unocss';
import windbladeColor from '@windblade/unocss-preset-color';

export default defineConfig({
  presets: [
    windbladeColor(),
  ],
});`,Yf=`import { defineConfig, presetMini } from 'unocss';
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
    <pre lang="ts" code="${x(qf)}" />
    <p>That's it! You can now use Windblade's color utilities in your proejct but it is likely that you want more utilities for things like layout and typography, please read on to learn how to use Windblade's color module othether with other UnoCSS presets.</p>

    <h2>Installation with other UnoCSS presets</h2>
    <p>You likely want to combine @windblade/unocss-preset-color with other UnoCSS presets (e.g. @unocss/preset-mini) to get utilities for layout, typography and other CSS features. This should generally work without any problems but we recommend removing colors from other presets' configuration to avoid confusion and possible conflicts.</p>
    <p>You will find instructions on how to remove colors from most popuilar UnoCSS presets below. If you are using other presets consult the docs for those presets.</p>

    <h3>@unocss/preset-mini, @unocss/preset-wind &amp; @unocss/preset-uno</h3>
    <p>Use <code>extendTheme</code> property to remove <code>colors</code> from the config.</p>
    <pre lang="ts" code="${x(Yf)}" />
  </page>
`,In=pn.windblade,Xf=`
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
};`,Kf=`
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
};`,Mr=`
  <page>
    <h1><title /></h1>
    <p>Colors in Windblade are based on the <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">OkLCH</a> model and have a 'base' and one or more 'on' colors.</p>

    <h2>Default colors</h2>
    <p>It is highly encouraged that you use your own colors, however, Windblade does come with a set of well-crafted example colors that are designed to demonstrate the semantic color system and were used to build this documnentation.</p>
    <example html="${x(`
      <div class="grid grid-fit-cols-m gap-s.4">
        ${(()=>{const e=In==null?void 0:In.colors;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
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
    <pre lang="ts" code="${x(Xf)}" />

    <p>Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.</p>
    <pre lang="ts" code="${x(Kf)}" />
  </page>
`,Jf=`
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
`,Zf=`
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
`,Qf=`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
`,eh=`
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

export default getBrandColor;`,Ar=`
  <page>
    <h1>Using semantic colors</h1>
    <p>Windblade comes with a semantic color system. Refer to colors by their names.</p>
    <pre lang="html" code="${x(Jf)}" />

    <h2>Foreground colors</h2>
    <p>All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.</p>
    <pre lang="html" code="${x(Zf)}" />

    <h2>Color scheme</h2>
    <p>Change hue and color scheme by applying color rules together with or inside of sheme-(auto|light|dark)-{number}.</p>
    <pre lang="html" code="${x('<div class="scheme-auto-80 bg-normal"></div>')}" />

    <p>It is a good idea apply a color scheme at the root of your app.</p>
    <pre lang="html" code="${x(Qf)}" />

    <h2>Using Windblade colors in JavaScrtipt</h2>
    <p>Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.</p>
    <pre lang="ts" code="${x(eh)}" />
  </page>
`,sr=new Map([["Installation",Es],["Theme",Mr],["Semantic colors",Ar]]),th=Object.freeze(Object.defineProperty({__proto__:null,categoy:sr,default:sr,installation:Es,semanticColors:Ar,theme:Mr},Symbol.toStringTag,{value:"Module"})),Ps=new Map([["Background",new Map([["Background Color",bn().docs],["Background Gradient",jr().docs],["Background Gradient Stops",Tr().docs]])],["Text",new Map([["Text Color",xn().docs],["Text Decoration Color",kn().docs]])],["Border",new Map([["Border Color",vn().docs],["Outline Color",$n().docs]])],["Other",new Map([["Color Scheme",Sn().docs],["Accent color",Or().docs],["Caret color",zr().docs],["Fill",yn().docs],["Stroke Color",wn().docs]])]]),nh=Object.freeze(Object.defineProperty({__proto__:null,accessibility:Ff,backgrounds:Nf,borders:Hf,default:Ps,interactivity:Wf,svg:Bf,typography:Gf},Symbol.toStringTag,{value:"Module"})),rh=new Map([["Usage",sr],...Ps]),oh=Object.freeze(Object.defineProperty({__proto__:null,default:rh,rules:nh,usage:th},Symbol.toStringTag,{value:"Module"}));function Rs(e={}){return{name:"@windblade/unocss-preset-color",theme:pn,rules:Ls,options:e,prefix:void 0}}const sh=Object.freeze(Object.defineProperty({__proto__:null,default:Rs,docs:oh,rules:Ls,theme:pn},Symbol.toStringTag,{value:"Module"}));function ih(e,t,n){let r=e;for(n(t).forEach(([o,s])=>{r=r.replaceAll(`$${o}`,s.toString())});r.includes("$(");){const o=r.indexOf("$")+1,s=r.substring(o),i=0;let l=i,a=0;for(let c=0;c<s.length;++c)if(s[c]==="("&&++a,s[c]===")"&&--a,a===0){l=c+1;break}const u=s.substring(i,l);try{r=r.replace(`$${u}`,Function(`'use strict'; return (${u})`)())}catch{return e}}return r}function Ds(e){return(t,{theme:n})=>({matcher:ih(t,n,e)})}function Is(e){return[Ds(e)]}const lh=`
import { defineConfig } from 'unocss';
import windbladeDollars from '@windblade/unocss-preset-dollars';

export default defineConfig({
  presets: [
    windbladeDollars(),
  ],
});`,ah=`
  <page>
    <h1><title /></h1>
    <p>Just like the complete Windblade, the Dollars module is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get @windblade/unocss-preset-dollars from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset-dollars" />
    <pre lang="ts" code="${x(lh)}" />
    <p>That's it! You can now use Windblade's dollar syntax in your project.</p>
  </page>
`,ch=`
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
`,uh=`
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
`,dh=`
  <page>
    <h1><title /></h1>
    <p>You can customize where the dollars (key-value pairs) are coming from.</p>

    <p>Define a <code>getVariables</code> function inside the preset options that returns custom dollars as an array of key-value tuples.</p>
    <pre lang="ts" code="${x(ch)}" />

    <p>You can also use the <code>theme</code> argument passed to the <code>getVariables</code> to repalce keys with values from your theme.</p>
    <p>Make sure that values have a <code>toString</code> metod.</p>
    <pre lang="ts" code="${x(uh)}" />

    <p>If you don't provide this option the preset will make key-value pairs out of the <code>theme.windblade.proportions</code> object.</p>
  </page>
`,fh=`
<div class="grid grid-cols-[auto_$l_auto]"></div>
`,hh=`
<div class="p-s">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>
</div>
`,Lr=`
  <page>
    <h1>Using the $ syntax</h1>
    <p>You can grab proportions from your theme by prefixing their names with <code>$</code>. This is mainly useful inside brackets when you want to set custom values.</p>
    <pre lang="html" code="${x(fh)}" />

    <p>You can also use <code>$</code> to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p>
    <pre lang="html" code="${x(hh)}" />

    <p>Note that <code>$</code> is an UnoCSS <a href="https://github.com/unocss/unocss#custom-variants">variant</a> so it works with UnoCSS utilities that come from other presets too!</p>
  </page>
`,mh=Object.freeze(Object.defineProperty({__proto__:null,default:Lr},Symbol.toStringTag,{value:"Module"})),gh=new Map([["Usage",new Map([["Installation",ah],["Options",dh],["$ syntax",Lr]])]]),ph=Object.freeze(Object.defineProperty({__proto__:null,default:gh,dollarSyntax:mh},Symbol.toStringTag,{value:"Module"}));function Us(e={}){const t=(e==null?void 0:e.getVariables)??(n=>{var r;return(r=n.windblade)!=null&&r.proportions?Object.entries(n.windblade.proportions):[]});return{name:"@windblade/unocss-preset-dollars",options:e,variants:Is(t),prefix:void 0}}const bh=Object.freeze(Object.defineProperty({__proto__:null,createVariantDollars:Ds,createVariants:Is,default:Us,docs:ph},Symbol.toStringTag,{value:"Module"})),po={mid:"middle",base:"baseline",btm:"bottom",baseline:"baseline",top:"top",start:"top",middle:"middle",bottom:"bottom",end:"bottom","text-top":"text-top","text-bottom":"text-bottom",sub:"sub",super:"super",...Object.fromEntries(hn.map(e=>[e,e]))};`${Object.keys(po).join("|")}`;const Ht={all:"all",colors:["color","background-color","border-color","outline-color","text-decoration-color","fill","stroke"].join(","),none:"none",opacity:"opacity",shadow:"box-shadow",transform:"transform"};function bo(e){return Y.properties(e)??Ht[e]}[`${Object.keys(Ht).join("|")}`,`${[...hn,...Object.keys(Ht)].join("|")}`,...Ee("transition")];const vh=[["justify-start",{"justify-content":"flex-start"}],["justify-end",{"justify-content":"flex-end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-stretch",{"justify-content":"stretch"}],...Ee("justify","justify-content"),["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],...Ee("justify-items"),["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],...Ee("justify-self")],$h=[["content-center",{"align-content":"center"}],["content-start",{"align-content":"flex-start"}],["content-end",{"align-content":"flex-end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],...Ee("content","align-content"),["items-start",{"align-items":"flex-start"}],["items-end",{"align-items":"flex-end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],...Ee("items","align-items"),["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"flex-start"}],["self-end",{"align-self":"flex-end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],...Ee("self","align-self")];[...vh,...$h].flatMap(([e,t])=>[[`flex-${e}`,t],[`grid-${e}`,t]]);const yh=[[/^content-(.+)$/,([,e])=>({content:Y.bracket.cssvar(e)})],["content-empty",{content:'""'}],["content-none",{content:"none"}]],vo=["translate","rotate","scale"],qe=["translateX(var(--un-translate-x))","translateY(var(--un-translate-y))","translateZ(var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" "),wh=["translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" ");[(`${Object.keys(Lt).join("|")}`,`${Object.keys(Lt).join("|")}`),(`${vo.join("|")}`,`${vo.join("|")}`),...Ee("transform")];function $o([,e,t],{theme:n}){var o;const r=((o=n.spacing)==null?void 0:o[t])??Y.bracket.cssvar.fraction.rem(t);if(r!=null)return[...Sr[e].map(s=>[`--un-translate${s}`,r]),["transform",qe]]}function yo([,e,t]){const n=Y.bracket.cssvar.fraction.percent(t);if(n!=null)return[...Sr[e].map(r=>[`--un-scale${r}`,n]),["transform",qe]]}function wo([,e="",t]){const n=Y.bracket.cssvar.degree(t);if(n!=null)return e?{"--un-rotate":0,[`--un-rotate-${e}`]:n,transform:qe}:{"--un-rotate-x":0,"--un-rotate-y":0,"--un-rotate-z":0,"--un-rotate":n,transform:qe}}function xo([,e,t]){const n=Y.bracket.cssvar.degree(t);if(n!=null)return[...Sr[e].map(r=>[`--un-skew${r}`,n]),["transform",qe]]}function ye(e){return e.replace("col","column")}function ir(e){return e[0]==="r"?"Row":"Column"}function xh(e,t,n){var o;const r=(o=t[`gridAuto${ir(e)}`])==null?void 0:o[n];if(r!=null)return r;switch(n){case"min":return"min-content";case"max":return"max-content";case"fr":return"minmax(0,1fr)"}return Y.bracket.cssvar.auto.rem(n)}const kh=[["grid",{display:"grid"}],["inline-grid",{display:"inline-grid"}],[/^(?:grid-)?(row|col)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-${ye(e)}`]:((r=n[`grid${ir(e)}`])==null?void 0:r[t])??Y.bracket.cssvar.auto(t)}}],[/^(?:grid-)?(row|col)-span-(.+)$/,([,e,t])=>{if(t==="full")return{[`grid-${ye(e)}`]:"1/-1"};const n=Y.bracket.number(t);if(n!=null)return{[`grid-${ye(e)}`]:`span ${n}/span ${n}`}},{autocomplete:["grid-(row|col)-span-<num>","(row|col)-span-<num>"]}],[/^(?:grid-)?(row|col)-start-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-start`]:Y.bracket.cssvar(t)??t})],[/^(?:grid-)?(row|col)-end-(.+)$/,([,e,t])=>({[`grid-${ye(e)}-end`]:Y.bracket.cssvar(t)??t}),{autocomplete:["grid-(row|col)-(start|end)-<num>"]}],[/^(?:grid-)?auto-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>({[`grid-auto-${ye(e)}`]:xh(e,n,t)}),{autocomplete:["grid-auto-(rows|cols)-<num>"]}],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,([,e])=>({"grid-auto-flow":Y.bracket.cssvar(e)})],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,([,e])=>({"grid-auto-flow":ye(e).replace("-"," ")}),{autocomplete:["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"]}],[/^grid-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>{var r;return{[`grid-template-${ye(e)}`]:((r=n[`gridTemplate${ir(e)}`])==null?void 0:r[t])??Y.bracket.cssvar(t)}}],[/^grid-(rows|cols)-minmax-([\w.-]+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(auto-fill,minmax(${t},1fr))`})],[/^grid-(rows|cols)-(\d+)$/,([,e,t])=>({[`grid-template-${ye(e)}`]:`repeat(${t},minmax(0,1fr))`}),{autocomplete:["grid-(rows|cols)-<num>","grid-(rows|cols)-none"]}],[/^grid-area(s)?-(.+)$/,([,e,t])=>e!=null?{"grid-template-areas":Y.cssvar(t)??t.split("-").map(n=>`"${Y.bracket(n)}"`).join(" ")}:{"grid-area":Y.bracket.cssvar(t)}],["grid-rows-none",{"grid-template-rows":"none"}],["grid-cols-none",{"grid-template-columns":"none"}]],{logical:Rt}=Z;function Ns(){const e=[[/^(aspect)-(.+)$/,n=>{if(!n[2].includes(":"))return{"aspect-ratio":n[2]}}]],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade uses CSS ratios instead of presets.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>aspect-<input type="integer" /></util>
          <util>aspect-1/<input type="integer" /></util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Hs(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.</p>
    </page>
  `}}function Ws(){const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-after-${r}`,{"break-after":r}]),n=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${e.map(r=>`<util>break-after-${r}</util>`).join("")}
        </utils>

        <renderer html="${x(`
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

        <renderer html="${x(`
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

        <renderer html="${x(`
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
  `;return{rules:n,docs:r}}function Vs(){const e=[...Zt(Rt.abbreviations.edges).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),...Zt(Rt.abbreviations.coners).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),["object-center",{"object-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[...Object.keys(Rt.abbreviations.edges),...Object.keys(Rt.abbreviations.coners),"center"].map(n=>`<util>object-${n}</util>`).join("")}
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{size:Fs}=Z,qs=[1,2,3,4,5,6,7,8,9].map(e=>`<div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">0${e}</div>`).join(`
`);function Ys(e,t){const n=[[`auto-${e}-auto`,{[`grid-auto-${t}`]:"auto"}],[`auto-${e}-fr`,{[`grid-auto-${t}`]:"minmax(0, 1fr)"}],Fs.rule(`auto-${e}`,`grid-auto-${t}`)],r=`
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

        <renderer html="${x(`
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
  `;return{rules:n,docs:r}}const Xs=()=>Ys("cols","columns"),Ks=()=>Ys("rows","rows");function _n(e,t,n){const r=[Fs.rule(`grid-${e}-${t}s`,`grid-template-${n}s`,{postprocess:s=>`repeat(auto-${e}, minmax(min(${s}, 100%), 1fr))`})],o=`
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

        <renderer html="${x(`
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
  `;return{rules:r,docs:o}}const Js=()=>_n("fit","col","column"),Zs=()=>_n("fill","col","column"),Qs=()=>_n("fit","row","row"),ei=()=>_n("fill","row","row");function de(e,t,n,r){return e.map(o=>`
    <for object="${o}" key-as="${t}" value-as="${n}">
      ${r}
    </for>
  `).join("")}const{logical:Un}=Z;function ut(e){return`
    <select>
      ${[...e.axis?Object.keys(Un.abbreviations.axis):[],...e.edges?Object.keys(Un.abbreviations.edges):[],...e.corners?Object.keys(Un.abbreviations.coners):[]].map(t=>`
        <option value="${t}"/>
      `).join("")}
    </select>
  `}const{size:ti}=Z;function ni(){const e=ti.edgeRules("p","","padding",""),t=`
    <page>
      <h1><title /></h1>
      <p>Replaced physical properties with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            p-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            p-
            ${ut({axis:!0,edges:!0})}-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            m-
            ${ut({axis:!0,edges:!0})}-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `}}const{logical:rt,size:Er}=Z;function si(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this, as well as min and max variants, in favor of the size counterparts</p>
    </page>
  `}}function ii(){const e=Er.axisRules("size","","","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Re(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              size-${n}-
              <select>
                ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Re(rt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${x(`
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
`}function ai(){const e=Er.axisRules("min-size","","min","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the minimum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Re(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              min-size-${n}-
              <select>
                ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name" />
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Re(rt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${x(`
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
  `;return{rules:e,docs:t}}function ci(){const e=Er.axisRules("max-size","","max","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the maximum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Re(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              max-size-${n}-
              <select>
                ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Re(rt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${x(`
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
  `;return{rules:e,docs:t}}const{logical:Dt}=Z;function ui(){const e=[...Zt(Dt.abbreviations.edges).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),...Zt(Dt.abbreviations.coners).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),["bg-center",{"background-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>${[...Object.keys(Dt.abbreviations.edges),...Object.keys(Dt.abbreviations.coners),"center"].map(n=>`
          <util>bg-${n}</util>
        `).join("")}</utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{size:Ct}=Z;function di(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font family utilities have been removed.</p>
    </page>
  `}}function fi(){const e=[Ct.rule("text","font-size")],t=`
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

        <renderer html="${x(`
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
  `}}function mi(){const e=[Ct.rule("tracking","letter-spacing",{defaultUnit:"em"})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function gi(){const e=[Ct.rule("leading","line-height",{defaultUnit:""})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function pi(){const e=[["decoration-from-font",{"text-decoration-thickness":"from-font"}],Ct.rule("decoration","text-decoration-thickness")],t=`
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
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function bi(){const e=[Ct.rule("underline-offset","text-underline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate ofset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            underline-offset-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{logical:ko,size:Cn}=Z;function vi(){const e=[...Cn.cornerRules("rounded","","border","radius"),...ko.cornerRules("rounded","full","border","radius",(n,r)=>[n,{[r]:"99999px"}]),...ko.cornerRules("rounded","none","border","radius",(n,r)=>[n,{[r]:"none"}])],t=`
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
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            rounded-
            ${ut({corners:!0})}-
            <select>
              <option value="none" />
              <option value="full" />
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function $i(){const e=Cn.edgeRules("border","","border","width"),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            border-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            border-
            ${ut({axis:!0,edges:!0})}-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function yi(){const e=[Cn.rule("outline","outline-width")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function wi(){const e=[Cn.rule("outline-offset","outline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate offset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-offset-
            <select>
              ${de(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
        </utils>

        <renderer html="${x(`
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
  `}}const{size:Sh}=Z;function Si(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}}function _i(){const e=[Sh.rule("opacity","opacity",{defaultUnit:""})],t=`
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

        <renderer html="${x(`
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
  `}}const{size:_h}=Z;function ji(){const e=[_h.rule("border-spacing","border-spacing")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{time:ot}=Z;function Ti(){const e=[ot.durationRule("duration","transition-duration"),ot.durationRule("delay","transition-delay")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Oi(){const e=[ot.timingFunctionRule("ease","transition-timing-function")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function zi(){return{rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.</p>
    </page>
  `}}function Mi(){const e=[ot.durationRule("animation-duration","animation-duration"),ot.durationRule("animation-delay","animation-delay")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Ai(){const e=[ot.timingFunctionRule("animation-ease","animation-timing-function")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{size:jn}=Z;function Li(){const e=[jn.rule("scale","transform",{defaultUnit:"",postprocess:n=>`scale${n}`})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Ei(){const e=[jn.rule("rotate","transform",{defaultUnit:"deg",postprocess:n=>`rotate${Number(n)*360}`})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Pi(){const e=[jn.rule("translate","transform",{postprocess:n=>`translate${n}`})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Ri(){const e=[jn.rule("skew","transform",{defaultUnit:"deg",postprocess:n=>`skew${Number(n)*360}`})],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{size:Di}=Z;function Ii(){const e=Di.edgeRules("scroll-m","","scroll-margin",""),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[!1,!0].map(n=>`
            <util>
              scroll-m-
              ${n?`${ut({axis:!0,edges:!0})}-`:""}
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Ui(){const e=Di.edgeRules("scroll-p","","scroll-padding",""),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[!1,!0].map(n=>`
            <util>
              scroll-p-
              ${n?`${ut({axis:!0,edges:!0})}-`:""}
              <select>
                <for object="theme.windblade.proportions" key-as="$name" value-as="$value">
                  <option value="$name" />
                </for>
              </select>
            </util>
          `).join("")}
        </utils>

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Ni(){const e=[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}function Hi(){const e=[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{size:Ch}=Z;function Wi(){const e=[Ch.rule("stroke","stroke-width")],t=`
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

        <renderer html="${x(`
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
  `;return{rules:e,docs:t}}const{logical:Ze,size:q}=Z,jh=[...Ns().rules,...Hs().rules,[/^(columns)-(.+)$/,(e,{theme:t})=>{const n=e[2].split(","),r=q.resolve(n[0],t,"rem"),o=n[1];return{columns:[r,o].join(" ")}}],...Ws().rules,...Bs().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...Gs().rules,...Object.keys(Ze.abbreviations.inlineEdges).map(e=>[`float-${e}`,{float:Ze.abbreviations.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(Ze.abbreviations.inlineEdges).map(e=>[`clear-${e}`,{clear:Ze.abbreviations.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...Vs().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>Ze.axisRules("overflow",e,"overflow","",(t,n)=>[t,{[n]:e}])),...["auto","contain","none"].flatMap(e=>Ze.axisRules("overscroll",e,"overscroll-behavior","",(t,n)=>[t,{[n]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...q.edgeRules("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e.replace("invisible","hidden")}]),[/^z-(.+)$/,e=>({"z-index":e[2]})],q.rule("basis","flex-basis"),...q.edgeRules("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[/^(order)-(.+)$/,e=>({order:e[2]})],["order-none",{order:"0"}],...kh,...Js().rules,...Zs().rules,...Qs().rules,...ei().rules,...Xs().rules,...Ks().rules,q.rule("gap","gap"),q.rule("gap-col","column-gap"),q.rule("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-self-auto",{"place-self":"auto"}],["place-self-start",{"place-self":"start"}],["place-self-end",{"place-self":"end"}],["place-self-center",{"place-self":"center"}],["place-self-stretch",{"place-self":"stretch"}],...ni().rules,...ri().rules,...oi().rules,...si().rules,...ii().rules,...ai().rules,...ci().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...ui().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...di().rules,...fi().rules,...hi().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...mi().rules,...gi().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...pi().rules,...bi().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],q.rule("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],q.rule("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],...yh,...vi().rules,[/^(border)$/,()=>({"border-style":"solid","border-width":"1px"})],...$i().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...xi().rules,...yi().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...wi().rules,...ki().rules,...Si().rules,..._i().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],q.rule("blur","filter",{postprocess:e=>`blur(${e})`}),q.rule("brightness","filter",{postprocess:e=>`brightness(${e})`}),q.rule("contrast","filter",{postprocess:e=>`contrast(${e})`}),...Ci().rules,q.rule("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),q.rule("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("invert","filter",{postprocess:e=>`invert(${e})`}),q.rule("saturate","filter",{postprocess:e=>`saturate(${e})`}),q.rule("sepia","filter",{postprocess:e=>`sepia(${e})`}),q.rule("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),q.rule("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),q.rule("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),q.rule("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),q.rule("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),q.rule("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),q.rule("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),q.rule("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),q.rule("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],...ji().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:{windblade:t}})=>t&&{transition:"all","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-colors)$/,(e,{theme:{windblade:t}})=>t&&{transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-opacity)$/,(e,{theme:{windblade:t}})=>t&&{transition:"opacity","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-shadow)$/,(e,{theme:{windblade:t}})=>t&&{transition:"box-shadow","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],[/^(transition-transform)$/,(e,{theme:{windblade:t}})=>t&&{transition:"transform","transition-timing-function":t.time.functions.default,"transition-duration":`${t.time.baseUnitMs}ms`}],...Ti().rules,...Oi().rules,...zi().rules,...Mi().rules,...Ai().rules,...Li().rules,...Ei().rules,...Pi().rules,...Ri().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...Ii().rules,...Ui().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...Ni().rules,...Hi().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...Wi().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],Th=jh,Oh=[{getCSS:()=>`
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
    `}],zh=Oh,Mh=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
});`,Ah=`import { defineConfig } from 'unocss';
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
});`,Eh=`
  <page>
    <h1><title /></h1>
    <p>Windblade is an UnoCSS preset, please follow its own <a href="https://unocss.dev/integrations">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install @windblade/unocss-preset" />
    <pre lang="ts" code="${x(Mh)}" />

    <h2>Recommended additions</h2>
    <p>Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.</p>

    <h3>Getting hover, active, etc.</h3>
    <p>Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.</p>
    <pre lang="sh" code="npm install unocss-preset-mini-variants" />
    <pre lang="ts" code="${x(Ah)}" />

    <h3>Getting @apply</h3>
    <p>UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.</p>
    <pre lang="sh" code="npm install -D @unocss/transformer-directives" />
    <pre lang="ts" code="${x(Lh)}" />
  </page>
`,Bi=Eh,xe={block:"bg-surface p-s transition text-center rounded-s.4"},Ph=`
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
</div>`,Rh=`
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

    <example html="${x(Ph)}" />

    <p>Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. <code>background-position</code> with <code>bg-{corner}</code> utility).</p>
    <p>If you are new to logical properties try playing with <code>bg-gradient-to-{edge/corner}</code> and see which way the gradient goes.</p>
    <p>Please note that <code>width</code> and <code>height</code> are completely removed in favor of <code>size-{axis}</code>.</p>
  </page>
`,Gi=Rh,Dh=`
import { defineConfig } from 'unocss';
import presetWindblade from '@windblade/unocss-preset';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});`,Ih=`
  <page>
    <h1><title /></h1>
    <p>At the moment Windblade only exposes one option which configures which theme preset is used.</p>
    <p>To specify which preset to use define the <code>theme</code> value in the preset options:</p>
    <pre lang="ts" code="${x(Dh)}" />

    <p>The following themes are available:</p>
    <ul>
      ${Object.keys(Cr).map(e=>`<li><code>${e}</code></li>`).join("")}
    </ul>

    <p><small>Please note that the <code>material3</code> theme is not finished and is almost unusable at the moment.</small></p>
  </page>
`,Vi=Ih,Uh=`
  <page>
    <h1>Hover, focus and other states</h1>
    <p>Windblade does not come with functionality like hover or focus states. Please use Windblade together with <a href="https://www.npmjs.com/package/unocss-preset-mini-variants">unocss-preset-mini-variants</a> or other variant implementations if you need this functionality.</p>
  </page>
`,Fi=Uh,qi=Lr,Yi=Ar,lr=new Map([["Installation",Bi],["Options",Vi],["Semantic colors",Yi],["Logical properties",Gi],["$ syntax",qi],["Hover, focus and other states",Fi]]),Nh=Object.freeze(Object.defineProperty({__proto__:null,categoy:lr,default:lr,dollarSyntax:qi,installation:Bi,logicalProperties:Gi,options:Vi,semanticColors:Yi,variants:Fi},Symbol.toStringTag,{value:"Module"})),Nn=Cr.windblade.windblade,Me={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Hh=`
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
    <example html="${x(`
      <table class="border-collapse">
        <tr class="${Me.tr}">
          <th class="${Me.th}">Name</th>
          <th class="${Me.th}">Value</th>
          <th class="${Me.th}"></th>
        </tr>
        ${(()=>{const e=Nn==null?void 0:Nn.proportions;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
              <tr class="${Me.tr}">
                <td class="${Me.td} font-semibold">${t}</td>
                <td class="${Me.td} text-fg-4">${n}</td>
                <td class="${Me.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
              </tr>
            `).join(""):""})()}
      </table>
    `)}" />

    <h2>Custom proportions</h2>
    <p>Add custom proportions by adding numbers like the following:</p>
    <pre lang="ts" code="${x(Hh)}" />

    <p>Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.</p>
  </page>
`,Bh=Wh,Gh=`
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
`,Vh=`
  <page>
    <h1>Other theme objects</h1>
    <p>See the theme type below for other values you can customize.</p>

    <h2>Theme type</h2>
    <pre lang="ts" code="${x(Gh)}" />
  </page>
`,Fh=Vh,Xi=Mr,ar=new Map([["Semantic Colors",Xi],["Proportions",Bh],["Other",Fh]]),qh=Object.freeze(Object.defineProperty({__proto__:null,categoy:ar,colors:Xi,default:ar},Symbol.toStringTag,{value:"Module"})),Ki=new Map([["Layout",new Map([["Aspect Ratio",Ns().docs],["Container",Hs().docs],["Break After",Ws().docs],["Break Before",Bs().docs],["Disaply",Gs().docs],["Object Position",Vs().docs]])],["Flexbox & Grid",new Map([["Grid Auto Columns",Xs().docs],["Grid Auto Rows",Ks().docs],["Grid Fit Columns",Js().docs],["Grid Fit Rows",Qs().docs],["Grid Fill Clumns",Zs().docs],["Grid Fill Rows",ei().docs]])],["Spacing",new Map([["Padding",ni().docs],["Margin",ri().docs],["Space between",oi().docs]])],["Sizing",new Map([["Width & Height",si().docs],["Size",ii().docs],["Min-Size",ai().docs],["Max-Size",ci().docs]])],["Background",new Map([["Color",bn().docs],["Background Position",ui().docs]])],["Typography",new Map([["Font Family",di().docs],["Font Size",fi().docs],["Font Smoothing",hi().docs],["Letter Spacing",mi().docs],["Line Height",gi().docs],["Text Color",xn().docs],["Text Decoration Color",kn().docs],["Text Decoration Thickness",pi().docs],["Text Underline Offset",bi().docs]])],["Borders",new Map([["Border Radius",vi().docs],["Border Width",$i().docs],["Border Color",vn().docs],["Outline Width",yi().docs],["Outline Offset",wi().docs],["Outline Color",$n().docs],["Divide",xi().docs],["Ring",ki().docs]])],["Effects",new Map([["Box Shadow",Si().docs],["Opacity",_i().docs]])],["Filters",new Map([["Drop Shadow",Ci().docs]])],["Tables",new Map([["Border spacing",ji().docs]])],["Transitions & Animation",new Map([["Transition Delay & Duration",Ti().docs],["Transition Timing Function",Oi().docs],["Animations",zi().docs],["Animation Delay & Duration",Mi().docs],["Animation Timing Function",Ai().docs]])],["Transforms",new Map([["Scale",Li().docs],["Rotate",Ei().docs],["Translate",Pi().docs],["Skew",Ri().docs]])],["Interactivity",new Map([["Scroll margin",Ii().docs],["Scroll padding",Ui().docs],["Scroll snap type",Ni().docs],["Touch action",Hi().docs]])],["SVG",new Map([["Fill",yn().docs],["Stroke Color",wn().docs],["Stroke Width",Wi().docs]])],["Accessibility",new Map([["Color Scheme",Sn().docs]])]]),Yh=Object.freeze(Object.defineProperty({__proto__:null,default:Ki},Symbol.toStringTag,{value:"Module"})),Xh=new Map([["Usage",lr],["Theme",ar],...Ki]),Kh=Object.freeze(Object.defineProperty({__proto__:null,default:Xh,rules:Yh,theme:qh,usage:Nh},Symbol.toStringTag,{value:"Module"}));function Ji(e={}){e.theme=e.theme??"windblade";const t=Rs(),n=Us();return{name:"@windblade/unocss-preset",theme:Ce(Td,pn,Cr[e.theme]),rules:[...t.rules??[],...n.rules??[],...Th],variants:[...t.variants??[],...n.variants??[]],options:{...t.options,...n.options,...e},postprocess:[],preflights:[...t.preflights??[],...n.preflights??[],...zh],prefix:void 0,shortcuts:[]}}const Jh=Object.freeze(Object.defineProperty({__proto__:null,default:Ji,docs:Kh},Symbol.toStringTag,{value:"Module"})),nn=we(()=>xd({presets:[Ji()],safelist:["scheme-dark-276","scheme-light-296"]})),Zh=w('<div class="bg-surface rounded-s p-s flex gap-s text-fg-3"><div class="i-mdi-exclamation"></div>Please select a utility first'),So=w("<pre>"),{formatter:_o,highlighter:Co}=Ne,Pr=he(),jo={pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"},Hn=()=>Zh(),Qh=e=>{const t=ie(Pr);if(e.type==="element")switch(e.name){case"utils":return f(qu,e);case"renderer":return null;case"viewport":return f(X,{get when(){return t==null?void 0:t.selected()},get fallback(){return f(Hn,{})},get children(){return f(bs,{get html(){return(t==null?void 0:t.html())??""},get css(){var n;return((n=t==null?void 0:t.css())==null?void 0:n.fullCss)??""},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;"})}});case"html":return f(X,{get when(){return t==null?void 0:t.selected()},get fallback(){return f(Hn,{})},keyed:!0,children:({util:n})=>(()=>{const r=So();return L(o=>{var l,a;const s=jo.pre,i=(a=Co())==null?void 0:a.highlight(((l=_o())==null?void 0:l.html_beautify((t==null?void 0:t.html())??""))??"",{language:"xml"}).value.replaceAll(n,`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${n}</span>`);return s!==o._v$&&T(r,o._v$=s),i!==o._v$2&&(r.innerHTML=o._v$2=i),o},{_v$:void 0,_v$2:void 0}),r})()});case"css":return f(X,{get when(){return t==null?void 0:t.selected()},get fallback(){return f(Hn,{})},get children(){const n=So();return L(r=>{var i,l,a;const o=`${jo.pre} css`,s=(a=Co())==null?void 0:a.highlight(((l=_o())==null?void 0:l.css_beautify(((i=t==null?void 0:t.css())==null?void 0:i.shortCss)??""))??"",{language:"css"}).value;return o!==r._v$3&&T(n,r._v$3=o),s!==r._v$4&&(n.innerHTML=r._v$4=s),r},{_v$3:void 0,_v$4:void 0}),n}})}},em=e=>{const[t,n]=E(),[r,o]=E(""),[s,i]=E();te(async()=>{var d;const u=(await nn.generate(((d=t())==null?void 0:d.util)??"",{safelist:!1,preflights:!1,minify:!0})).css,c=(await nn.generate(r())).css;i({shortCss:u,fullCss:c})});const l=()=>e.children.map(u=>u.type!=="element"||u.name!=="renderer"||!u.attributes||!u.attributes.html?null:[new RegExp(u.attributes.for??""),u.attributes.html]).filter(Boolean),a=u=>{n(u);for(let c=0;c<l().length;++c){const[d,h]=l()[c];if(d.test(u.renderer)){o(h.replaceAll("$util",u.util));return}}};return f(Pr.Provider,{value:{selectUtil:a,selected:t,html:r,css:s},get children(){return f(at.Provider,{get value(){return _t([Qh])},get children(){return f(le,e)}})}})};function To(e){let t=nn.config;return e.split(".").forEach(n=>t=t[n]),t}const tm=e=>{const t=ie(mt),n="'for' requires an 'array' or 'object' attribute",r="'for' requires a 'value-as' attribute",o="'for' with an 'object' attribute requires a 'key-as' attribute",s=e.attributes;if(!s)return f(se,{children:n});if(s.array)return s.as?f($t,{get each(){return To(Xn(s.array))},children:i=>f(mt.Provider,{get value(){return{...t,value:i}},get children(){return f(le,e)}})}):f(se,{children:r});if(s.object){const i=s["value-as"];if(!i)return f(se,{children:r});const l=s["key-as"];return l?f($t,{get each(){return Object.entries(To(Xn(s.object))??{})},children:([a,u])=>f(mt.Provider,{get value(){return{...t,[l]:a,[i]:`${u}`}},get children(){return f(le,e)}})}):f(se,{children:o})}return f(se,{children:n})},nm=e=>{const t=ie(mt);return`${t==null?void 0:t[e.var]}`},rm=e=>{const[t,n]=E("");return te(async()=>{n((await nn.generate(e.html)).css)}),f(bs,{get html(){return e.html},get css(){return t()}})},Oo=w("<pre>"),{highlighter:om}=Ne,sm=e=>{var r;const t=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${e.lang??""}`;if(!e.lang)return(()=>{const o=Oo();return T(o,t),_(o,()=>e.value),o})();let n=e.value;try{n=((r=om())==null?void 0:r.highlight(e.value,{language:e.lang}).value)??""}catch(o){return f(se,{get children(){return["Failed highlighting code. ",P(()=>o.message)]}})}return(()=>{const o=Oo();return T(o,t),o.innerHTML=n,o})()},im=w('<h2 class="text-fg-1 font-bold text-m.2">'),lm=w('<h3 class="font-bold text-$($s+$s.2)">'),am=w('<h4 class="font-bold">'),cm=w('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]">'),um=w('<small class="text-fg-4">'),dm=w('<a class="text-accent transition hover:highlight active:highlight+">'),fm=w('<ul class="p-is-s flex flex-col gap-s.4">'),hm=w('<li class="text-fg-3 font-semibold leading-$($s+$s.2)">'),mm=w('<code class="bg-surface p-i-s.4 rounded-s.4">'),gm=e=>{const t=ie(Zi);switch(e.type){case"text":return e.value;case"element":switch(e.name){case"h1":return(()=>{const n=im();return _(n,f(le,e)),n})();case"h2":return(()=>{const n=lm();return _(n,f(le,e)),n})();case"h3":return(()=>{const n=am();return _(n,f(le,e)),n})();case"title":return(t==null?void 0:t.title)??f(se,{children:"No title"});case"p":return(()=>{const n=cm();return _(n,f(le,e)),n})();case"small":return(()=>{const n=um();return _(n,f(le,e)),n})();case"a":return(()=>{const n=dm();return _(n,f(le,e)),L(()=>{var r;return be(n,"href",((r=e.attributes)==null?void 0:r.href)??"#")}),n})();case"ul":return(()=>{const n=fm();return _(n,f(le,e)),n})();case"li":return(()=>{const n=hm();return _(n,f(le,e)),n})();case"code":return(()=>{const n=mm();return _(n,f(le,e)),n})();case"pre":return f(sm,{get lang(){var n;return((n=e.attributes)==null?void 0:n.lang)??"txt"},get value(){var n;return((n=e.attributes)==null?void 0:n.code)??""}});case"example":return f(rm,{get html(){var n;return((n=e.attributes)==null?void 0:n.html)??""}});case"try-it":return f(em,e);case"for":return f(tm,e);case"sample":return f(X,{get when(){var n;return(n=e.attributes)==null?void 0:n.var},keyed:!0,children:n=>f(nm,{var:n})});default:return f(se,{get children(){return["Unsupported XML element: ",P(()=>e.name)]}})}default:return f(se,{get children(){return["Unsupported XML node type: ",P(()=>e.type)]}})}},pm=e=>f(at.Provider,{get value(){return _t([gm])},get children(){return f(le,e)}}),Zi=he(),bm=e=>f(Zi.Provider,{get value(){return{title:e.title}},get children(){return f($t,{get each(){return e.children},children:t=>{switch(t.type){case"element":switch(t.name){case"page":return f(pm,t)}}return f(se,{children:"Only 'page' tag is recognized as the page root"})}})}}),vm=e=>f(Fe,{class:"p-m.2 [&>*]:m-be-s",get children(){return f(bl,{fallback:"Loading...",get children(){return(()=>{const t=Ne.xml();if(!t)return"Error: Failed to load XML parser";let n;try{n=t.fromXml(e.page)}catch(r){return f(se,{get children(){return["Error parsing this page: ",r]}})}return n?f(bm,re(n,{get title(){return e.title}})):f(se,{children:"Error processing this page"})})()}})}});function Qi(e,t,n=0){const r=t[n];if(!r)return e;const o=e.get(decodeURIComponent(r));return o instanceof Map?Qi(o,t,++n):o}const $m=()=>{const e=xt(),t=lt.getCachedModuleById(e.moduleId),n=()=>t.success,r=()=>decodeURIComponent(e.l6??e.l5??e.l4??e.l3??e.l2??e.l1),o=()=>Qi(t.value.docs,[e.l1,e.l2,e.l3,e.l4,e.l5,e.l6]);return f(X,{get when(){return n()},get fallback(){return f(Fe,{children:"Error"})},get children(){return f(X,{get when(){return typeof o()=="string"},get fallback(){return f(Fe,{children:"Not a page"})},get children(){return f(vm,{get page(){return o()},get title(){return r()}})}})}})},ym=w('<div class="i-mdi-brightness-4 transition">'),wm=w('<div class="absolute i-mdi-brightness-7 transition">'),xm=w('<div class="absolute i-mdi-brightness-2 transition">'),km=w('<div class="i-simple-icons-github">'),zo=w('<img alt="Logo" class="size-b-m.2">'),Sm=w('<div class="size-b-full grid" style="grid-template-rows:auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex items-center"><h1 class="font-bold text-fg-1 "></h1><div class="flex-1 flex justify-end"><div>'),_m=w('<div class="i-mdi-dots-vertical">'),Cm=w('<div style="z-index:1">'),jm=()=>{const[e,t]=E(0),[n,r]=E(0),[o,s]=E(!1);let i,l;const a=()=>[f(Be,{href:"/",children:"Home"}),f(Be,{href:"/docs",children:"Docs"}),f(Le,{get onClick(){return Se.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const d=ym();return L(h=>Ae(d,`opacity: ${Se.enforceScheme()===void 0?1:0}`,h)),d})(),(()=>{const d=wm();return L(h=>Ae(d,`opacity: ${Se.enforceScheme()==="light"?1:0}`,h)),d})(),(()=>{const d=xm();return L(h=>Ae(d,`opacity: ${Se.enforceScheme()==="dark"?1:0}`,h)),d})()]}}),f(ls,{href:"https://github.com/StarLederer/windblade",get children(){return km()}})],u=new ResizeObserver(([d])=>{t(d.borderBoxSize[0].inlineSize)}),c=new ResizeObserver(([d])=>{r(d.borderBoxSize[0].inlineSize)});return te(async()=>{u.disconnect(),i&&u.observe(i)}),te(async()=>{o(),c.disconnect(),l&&c.observe(l)}),te(()=>{s(e()>=n()*1.2)}),(()=>{const d=Sm(),h=d.firstChild,$=h.firstChild,p=$.nextSibling,m=p.firstChild;_($,f(Be,{style:"none",href:"/",class:"flex gap-s.4 items-center -m-i-s.4 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4",get children(){return[f(X,{get when(){return Se.scheme()==="dark"},get fallback(){return(()=>{const y=zo();return be(y,"src",Ga),y})()},get children(){const y=zo();return be(y,"src",Ba),y}}),"Windblade"]}}));const j=i;typeof j=="function"?tt(j,p):i=p;const C=l;return typeof C=="function"?tt(C,m):l=m,_(m,a),_(p,f(Na,{defaultOpen:!1,get class(){return`${o()?"hidden":""}`},children:({isOpen:y})=>[f(fn,{style:"half",class:"rounded-full p-s",as:k=>f(Ha,k),get children(){return _m()}}),f(Wa,{unmount:!1,class:"relative",get children(){const k=Cm();return _(k,a),L(()=>T(k,`flex flex-col gap-s.2 absolute inset-ie-0 inset-bs-0 bg-surface rounded-s m-b-s.8 p-s.2 border border-color-surface animation-duration-s animation-ease-linear backdrop-blur-s delay-m.2 ${y()?"delay-zero animate-in":"animate-out invisible"}`)),k}})]}),null),_(d,f($r,{}),null),L(y=>{const k=`flex gap-s.4 ${o()?"":"invisible fixed"}`,g=!o();return k!==y._v$&&T(m,y._v$=k),g!==y._v$2&&be(m,"aria-hidden",y._v$2=g),y},{_v$:void 0,_v$2:void 0}),d})()},Tm=()=>f(ca,{get source(){return Tc()},get children(){return f(ua,{get children(){return f(Ie,{path:"/",component:jm,get children(){return[f(Ie,{path:"/",component:Zc}),f(Ie,{path:"/docs",get element(){return f($r,{})},get children(){return[f(Ie,{path:"/",component:tu}),f(Ie,{path:"/:moduleId",get element(){return f(Xr,{when:e=>e.moduleId,component:zu})},get children(){return[f(Ie,{path:"/*",component:Eu}),f(Ie,{path:"/:l1/:l2?/:l3?/:l4?/:l5?/:l6?",get element(){return f(Xr,{when:e=>Object.values(e),component:$m})}})]}})]}})]}})}})}}),Om=w("<div>"),zm=()=>{lt.fetchIndex();const e=()=>`scheme-${Se.scheme()}-${Se.hue()}`;return(()=>{const t=Om();return _(t,f(Tm,{})),L(()=>T(t,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden animate-in animation-duration-m.4`)),t})()};Tl(()=>f(zm,{}),document.body);
