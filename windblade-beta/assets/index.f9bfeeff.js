(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const U={};function ft(e){U.context=e}const Xi=(e,t)=>e===t,Rt=Symbol("solid-proxy"),Ki=Symbol("solid-track"),Pt={equals:Xi};let wo=jo;const fe=1,Me=2,xo={owned:null,cleanups:null,context:null,owner:null},wn={};var W=null;let x=null,I=null,le=null,ie=null,Jn=0;const[sm,Mr]=E(!1);function ye(e,t){const n=I,r=W,o=e.length===0,s=o?xo:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},i=o?e:()=>e(()=>he(()=>Ae(s)));W=s,I=null;try{return ge(i,!0)}finally{I=n,W=r}}function E(e,t){t=t?Object.assign({},Pt,t):Pt;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(x&&x.running&&x.sources.has(n)?o=o(n.tValue):o=o(n.value)),zo(n,o));return[Co.bind(n),r]}function En(e,t,n){const r=Zt(e,t,!0,fe);st(r)}function P(e,t,n){const r=Zt(e,t,!1,fe);st(r)}function ne(e,t,n){wo=tl;const r=Zt(e,t,!1,fe),o=Ie&&Qt(W,Ie.id);o&&(r.suspense=o),r.user=!0,ie?ie.push(r):st(r)}function D(e,t,n){n=n?Object.assign({},Pt,n):Pt;const r=Zt(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,st(r),Co.bind(r)}function xn(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let i=null,l=wn,a=null,c=!1,u=!1,f="initialValue"in s,h=typeof r=="function"&&D(r);const y=new Set,[b,m]=(s.storage||E)(s.initialValue),[w,p]=E(void 0),[v,$]=E(void 0,{equals:!1}),[g,C]=E(f?"ready":"unresolved");if(U.context){a=`${U.context.id}${U.context.count++}`;let _;s.ssrLoadFrom==="initial"?l=s.initialValue:U.load&&(_=U.load(a))&&(l=_[0])}function j(_,M,L,F){return i===_&&(i=null,f=!0,(_===l||M===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(F,{value:M})),l=wn,x&&_&&c?(x.promises.delete(_),c=!1,ge(()=>{x.running=!0,N(M,L)},!1)):N(M,L)),M}function N(_,M){ge(()=>{M===void 0&&m(()=>_),C(M!==void 0?"errored":"ready"),p(M);for(const L of y.keys())L.decrement();y.clear()},!1)}function q(){const _=Ie&&Qt(W,Ie.id),M=b(),L=w();if(L!==void 0&&!i)throw L;return I&&!I.user&&_&&En(()=>{v(),i&&(_.resolved&&x&&c?x.promises.add(i):y.has(_)||(_.increment(),y.add(_)))}),M}function A(_=!0){if(_!==!1&&u)return;u=!1;const M=h?h():r;if(c=x&&x.running,M==null||M===!1){j(i,he(b));return}x&&i&&x.promises.delete(i);const L=l!==wn?l:he(()=>o(M,{value:b(),refetching:_}));return typeof L!="object"||!(L&&"then"in L)?(j(i,L,void 0,M),L):(i=L,u=!0,queueMicrotask(()=>u=!1),ge(()=>{C(f?"refreshing":"pending"),$()},!1),L.then(F=>j(L,F,void 0,M),F=>j(L,void 0,Mo(F),M)))}return Object.defineProperties(q,{state:{get:()=>g()},error:{get:()=>w()},loading:{get(){const _=g();return _==="pending"||_==="refreshing"}},latest:{get(){if(!f)return q();const _=w();if(_&&!i)throw _;return b()}}}),h?En(()=>A(!1)):A(!1),[q,{refetch:A,mutate:m}]}function ko(e){return ge(e,!1)}function he(e){if(I===null)return e();const t=I;I=null;try{return e()}finally{I=t}}function So(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(s){s=!1;return}const a=he(()=>t(l,o,i));return o=l,a}}function ve(e){return W===null||(W.cleanups===null?W.cleanups=[e]:W.cleanups.push(e)),e}function _o(){return W}function Yi(e,t){const n=W,r=I;W=e,I=null;try{return ge(t,!0)}catch(o){Zn(o)}finally{W=n,I=r}}function Ji(e){if(x&&x.running)return e(),x.done;const t=I,n=W;return Promise.resolve().then(()=>{I=t,W=n;let r;return Ie&&(r=x||(x={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),ge(e,!1),I=W=null,r?r.done:void 0})}function Zi(e){ie.push.apply(ie,e),e.length=0}function pe(e,t){const n=Symbol("context");return{id:n,Provider:nl(n),defaultValue:e}}function ae(e){let t;return(t=Qt(W,e.id))!==void 0?t:e.defaultValue}function Jt(e){const t=D(e),n=D(()=>Rn(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ie;function Qi(){return Ie||(Ie=pe({}))}function Co(){const e=x&&x.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===fe||e&&this.tState===fe)st(this);else{const t=le;le=null,ge(()=>Dt(this),!1),le=t}if(I){const t=this.observers?this.observers.length:0;I.sources?(I.sources.push(this),I.sourceSlots.push(t)):(I.sources=[this],I.sourceSlots=[t]),this.observers?(this.observers.push(I),this.observerSlots.push(I.sources.length-1)):(this.observers=[I],this.observerSlots=[I.sources.length-1])}return e&&x.sources.has(this)?this.tValue:this.value}function zo(e,t,n){let r=x&&x.running&&x.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(x){const o=x.running;(o||!n&&x.sources.has(e))&&(x.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&ge(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=x&&x.running;i&&x.disposed.has(s)||((i&&!s.tState||!i&&!s.state)&&(s.pure?le.push(s):ie.push(s),s.observers&&To(s)),i?s.tState=fe:s.state=fe)}if(le.length>1e6)throw le=[],new Error},!1)}return t}function st(e){if(!e.fn)return;Ae(e);const t=W,n=I,r=Jn;I=W=e,Lr(e,x&&x.running&&x.sources.has(e)?e.tValue:e.value,r),x&&!x.running&&x.sources.has(e)&&queueMicrotask(()=>{ge(()=>{x&&(x.running=!0),I=W=e,Lr(e,e.tValue,r),I=W=null},!1)}),I=n,W=t}function Lr(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(x&&x.running?(e.tState=fe,e.tOwned&&e.tOwned.forEach(Ae),e.tOwned=void 0):(e.state=fe,e.owned&&e.owned.forEach(Ae),e.owned=null)),Zn(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?zo(e,r,!0):x&&x.running&&e.pure?(x.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function Zt(e,t,n,r=fe,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:W,context:null,pure:n};return x&&x.running&&(s.state=0,s.tState=r),W===null||W!==xo&&(x&&x.running&&W.pure?W.tOwned?W.tOwned.push(s):W.tOwned=[s]:W.owned?W.owned.push(s):W.owned=[s]),s}function Nt(e){const t=x&&x.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===Me||t&&e.tState===Me)return Dt(e);if(e.suspense&&he(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Jn);){if(t&&x.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,s=n[r+1];for(;(o=o.owner)&&o!==s;)if(x.disposed.has(o))return}if(!t&&e.state===fe||t&&e.tState===fe)st(e);else if(!t&&e.state===Me||t&&e.tState===Me){const o=le;le=null,ge(()=>Dt(e,n[0]),!1),le=o}}}function ge(e,t){if(le)return e();let n=!1;t||(le=[]),ie?n=!0:ie=[],Jn++;try{const r=e();return el(n),r}catch(r){n||(ie=null),le=null,Zn(r)}}function el(e){if(le&&(jo(le),le=null),e)return;let t;if(x){if(!x.promises.size&&!x.queue.size){const r=x.sources,o=x.disposed;ie.push.apply(ie,x.effects),t=x.resolve;for(const s of ie)"tState"in s&&(s.state=s.tState),delete s.tState;x=null,ge(()=>{for(const s of o)Ae(s);for(const s of r){if(s.value=s.tValue,s.owned)for(let i=0,l=s.owned.length;i<l;i++)Ae(s.owned[i]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}Mr(!1)},!1)}else if(x.running){x.running=!1,x.effects.push.apply(x.effects,ie),ie=null,Mr(!0);return}}const n=ie;ie=null,n.length&&ge(()=>wo(n),!1),t&&t()}function jo(e){for(let t=0;t<e.length;t++)Nt(e[t])}function tl(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Nt(r)}for(U.context&&ft(),t=0;t<n;t++)Nt(e[t])}function Dt(e,t){const n=x&&x.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&o.state===fe||n&&o.tState===fe?o!==t&&Nt(o):(!n&&o.state===Me||n&&o.tState===Me)&&Dt(o,t))}}function To(e){const t=x&&x.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=Me:r.state=Me,r.pure?le.push(r):ie.push(r),r.observers&&To(r))}}function Ae(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(x&&x.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)Ae(e.tOwned[t]);delete e.tOwned}Oo(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)Ae(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}x&&x.running?e.tState=0:e.state=0,e.context=null}function Oo(e,t){if(t||(e.tState=0,x.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Oo(e.owned[n])}function Mo(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Zn(e){throw e=Mo(e),e}function Qt(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Qt(e.owner,t):void 0}function Rn(e){if(typeof e=="function"&&!e.length)return Rn(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Rn(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function nl(e,t){return function(r){let o;return P(()=>o=he(()=>(W.context={[e]:r.value},Jt(()=>r.children))),void 0),o}}const rl=Symbol("fallback");function Ar(e){for(let t=0;t<e.length;t++)e[t]()}function ol(e,t,n={}){let r=[],o=[],s=[],i=0,l=t.length>1?[]:null;return ve(()=>Ar(s)),()=>{let a=e()||[],c,u;return a[Ki],he(()=>{let h=a.length,y,b,m,w,p,v,$,g,C;if(h===0)i!==0&&(Ar(s),s=[],r=[],o=[],i=0,l&&(l=[])),n.fallback&&(r=[rl],o[0]=ye(j=>(s[0]=j,n.fallback())),i=1);else if(i===0){for(o=new Array(h),u=0;u<h;u++)r[u]=a[u],o[u]=ye(f);i=h}else{for(m=new Array(h),w=new Array(h),l&&(p=new Array(h)),v=0,$=Math.min(i,h);v<$&&r[v]===a[v];v++);for($=i-1,g=h-1;$>=v&&g>=v&&r[$]===a[g];$--,g--)m[g]=o[$],w[g]=s[$],l&&(p[g]=l[$]);for(y=new Map,b=new Array(g+1),u=g;u>=v;u--)C=a[u],c=y.get(C),b[u]=c===void 0?-1:c,y.set(C,u);for(c=v;c<=$;c++)C=r[c],u=y.get(C),u!==void 0&&u!==-1?(m[u]=o[c],w[u]=s[c],l&&(p[u]=l[c]),u=b[u],y.set(C,u)):s[c]();for(u=v;u<h;u++)u in m?(o[u]=m[u],s[u]=w[u],l&&(l[u]=p[u],l[u](u))):o[u]=ye(f);o=o.slice(0,i=h),r=a.slice(0)}return o});function f(h){if(s[u]=h,l){const[y,b]=E(u);return l[u]=b,t(a[u],y)}return t(a[u])}}}function d(e,t){return he(()=>e(t||{}))}function xt(){return!0}const Pn={get(e,t,n){return t===Rt?n:e.get(t)},has(e,t){return t===Rt?!0:e.has(t)},set:xt,deleteProperty:xt,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:xt,deleteProperty:xt}},ownKeys(e){return e.keys()}};function kn(e){return(e=typeof e=="function"?e():e)?e:{}}function re(...e){let t=!1;for(let r=0;r<e.length;r++){const o=e[r];t=t||!!o&&Rt in o,e[r]=typeof o=="function"?(t=!0,D(o)):o}if(t)return new Proxy({get(r){for(let o=e.length-1;o>=0;o--){const s=kn(e[o])[r];if(s!==void 0)return s}},has(r){for(let o=e.length-1;o>=0;o--)if(r in kn(e[o]))return!0;return!1},keys(){const r=[];for(let o=0;o<e.length;o++)r.push(...Object.keys(kn(e[o])));return[...new Set(r)]}},Pn);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const o=Object.getOwnPropertyDescriptors(e[r]);for(const s in o)s in n||Object.defineProperty(n,s,{enumerable:!0,get(){for(let i=e.length-1;i>=0;i--){const l=(e[i]||{})[s];if(l!==void 0)return l}}})}return n}function Lo(e,...t){const n=new Set(t.flat());if(Rt in e){const o=t.map(s=>new Proxy({get(i){return s.includes(i)?e[i]:void 0},has(i){return s.includes(i)&&i in e},keys(){return s.filter(i=>i in e)}},Pn));return o.push(new Proxy({get(s){return n.has(s)?void 0:e[s]},has(s){return n.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!n.has(s))}},Pn)),o}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(o=>!n.has(o))),t.map(o=>{const s={};for(let i=0;i<o.length;i++){const l=o[i];l in e&&Object.defineProperty(s,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return s})}let sl=0;function de(){const e=U.context;return e?`${e.id}${e.count++}`:`cl-${sl++}`}function Ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return D(ol(()=>e.each,e.children,t||void 0))}function te(e){let t=!1;const n=e.keyed,r=D(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return D(()=>{const o=r();if(o){const s=e.children,i=typeof s=="function"&&s.length>0;return t=n||i,i?he(()=>s(o)):s}return e.fallback},void 0,void 0)}const il=pe();function ll(e){let t=0,n,r,o,s,i;const[l,a]=E(!1),c=Qi(),u={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:l,effects:[],resolved:!1},f=_o();if(U.context&&U.load){const b=U.context.id+U.context.count;let m=U.load(b);if(m&&(o=m[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[w,p]=E(void 0,{equals:!1});s=w,o.then(v=>{if(v||U.done)return v&&(i=v),p();U.gather(b),ft(r),p(),ft()})}}const h=ae(il);h&&(n=h.register(u.inFallback));let y;return ve(()=>y&&y()),d(c.Provider,{value:u,get children(){return D(()=>{if(i)throw i;if(r=U.context,s)return s(),s=void 0;r&&o==="$$f"&&ft();const b=D(()=>e.children);return D(m=>{const w=u.inFallback(),{showContent:p=!0,showFallback:v=!0}=n?n():{};if((!w||o&&o!=="$$f")&&p)return u.resolved=!0,y&&y(),y=r=o=void 0,Zi(u.effects),b();if(!!v)return y?m:ye($=>(y=$,r&&(ft({id:r.id+"f",count:0}),r=void 0),e.fallback),f)})})}})}const al=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],cl=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...al]),ul=new Set(["innerHTML","textContent","innerText","children"]),dl=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Er=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),fl=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),hl=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ml={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function gl(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,c=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const u=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],u)}else if(s===l)for(;i<o;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!c){c=new Map;let f=l;for(;f<s;)c.set(n[f],f++)}const u=c.get(t[i]);if(u!=null)if(l<u&&u<s){let f=i,h=1,y;for(;++f<o&&f<s&&!((y=c.get(t[f]))==null||y!==u+h);)h++;if(h>u-l){const b=t[i];for(;l<u;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Rr="_$DX_DELEGATE";function pl(e,t,n,r={}){let o;return ye(s=>{o=s,t===document?e():z(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function S(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function en(e,t=window.document){const n=t[Rr]||(t[Rr]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,xl))}}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function bl(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function O(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ao(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n)}function vl(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let s,i;for(s=0,i=o.length;s<i;s++){const l=o[s];!l||l==="undefined"||t[l]||(Pr(e,l,!1),delete n[l])}for(s=0,i=r.length;s<i;s++){const l=r[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(Pr(e,l,!0),n[l]=a)}return n}function Ue(e,t,n){if(!t)return n?Se(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function Eo(e,t={},n,r){const o={};return r||P(()=>o.children=nt(e,t.children,o.children)),P(()=>t.ref&&t.ref(e)),P(()=>$l(e,t,n,!0,o,!0)),o}function pt(e,t,n){return he(()=>e(t,n))}function z(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return nt(e,t,r,n);P(o=>nt(e,t(),o,n),r)}function $l(e,t,n,r,o={},s=!1){t||(t={});for(const i in o)if(!(i in t)){if(i==="children")continue;o[i]=Nr(e,i,null,o[i],n,s)}for(const i in t){if(i==="children"){r||nt(e,t.children);continue}const l=t[i];o[i]=Nr(e,i,l,o[i],n,s)}}function yl(e){let t,n;return!U.context||!(t=U.registry.get(n=kl()))?e.cloneNode(!0):(U.completed&&U.completed.add(t),U.registry.delete(n),t)}function wl(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Pr(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function Nr(e,t,n,r,o,s){let i,l,a;if(t==="style")return Ue(e,n,r);if(t==="classList")return vl(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=fl.has(c);if(!u&&r){const f=Array.isArray(r)?r[0]:r;e.removeEventListener(c,f)}(u||n)&&(Ao(e,c,n,u),u&&en([c]))}else if((a=ul.has(t))||!o&&(Er[t]||(l=cl.has(t)))||(i=e.nodeName.includes("-")))t==="class"||t==="className"?O(e,n):i&&!l&&!a?e[wl(t)]=n:e[Er[t]||t]=n;else{const c=o&&t.indexOf(":")>-1&&ml[t.split(":")[0]];c?bl(e,c,t,n):Se(e,dl[t]||t,n)}return n}function xl(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),U.registry&&!U.done&&(U.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let o=r.nextSibling;r.remove(),r=o}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function nt(e,t,n,r,o){for(U.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(U.context)return n;if(s==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Ke(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(U.context)return n;n=Ke(e,n,r)}else{if(s==="function")return P(()=>{let l=t();for(;typeof l=="function";)l=l();n=nt(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Nn(l,t,n,o))return P(()=>n=nt(e,l,n,r,!0)),()=>n;if(U.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=Ke(e,n,r),i)return n}else a?n.length===0?Dr(e,l,r):gl(e,n,l):(n&&Ke(e),Dr(e,l));n=l}else if(t instanceof Node){if(U.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=Ke(e,n,r,t);Ke(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Nn(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[s];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))o=Nn(e,l,a)||o;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();o=Nn(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const c=String(l);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function Dr(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Ke(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}function kl(){const e=U.context;return`${e.id}${e.count++}`}const Sl=!1,_l="http://www.w3.org/2000/svg";function Cl(e,t=!1){return t?document.createElementNS(_l,e):document.createElement(e)}function zl(e){const[t,n]=Lo(e,["component"]),r=D(()=>t.component);return D(()=>{const o=r();switch(typeof o){case"function":return he(()=>o(n));case"string":const s=hl.has(o),i=U.context?yl():Cl(o,s);return Eo(i,n,s),i}})}function jl(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Tl([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Ol(e){try{return document.querySelector(e)}catch{return null}}function Ml(e,t){const n=Ol(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Ro(e,t,n,r){let o=!1;const s=l=>typeof l=="string"?{value:l}:l,i=Tl(E(s(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!o&&t(l),l));return n&&ve(n((l=e())=>{o=!0,i[1](s(l)),o=!1})),{signal:i,utils:r}}function Ll(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:E({value:""})};return e}function Al(){return Ro(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Ml(window.location.hash.slice(1),n)},e=>jl(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function El(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,s)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const Rl=/^(?:[a-z0-9]+:)?\/\//i,Pl=/^\/+|(\/)\/+$/g;function Fe(e,t=!1){const n=e.replace(Pl,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Lt(e,t,n){if(Rl.test(t))return;const r=Fe(e),o=n&&Fe(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+Fe(t,!s)}function Nl(e,t){if(e==null)throw new Error(t);return e}function Po(e,t){return Fe(e).replace(/\/*(\*.*)?$/g,"")+Fe(t)}function Dl(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function No(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const y=s[h],b=a[h],m=y[0]===":",w=m?y.slice(1):y;if(m&&Sn(b,f(w)))u.params[w]=b;else if(m||!Sn(b,y))return null;u.path+=`/${b}`}if(o){const h=c?a.slice(-c).join("/"):"";if(Sn(h,f(o)))u.params[o]=h;else return null}return u}}function Sn(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Hl(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Do(e){const t=new Map,n=_o();return new Proxy({},{get(r,o){return t.has(o)||Yi(n,()=>t.set(o,D(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Qn(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Qn(r).reduce((s,i)=>[...s,...o.map(l=>l+i)],[])}const Wl=100,Ho=pe(),tn=pe(),nn=()=>Nl(ae(Ho),"Make sure your app is wrapped in a <Router />");let bt;const er=()=>bt||ae(tn)||nn().base,Ul=e=>{const t=er();return D(()=>t.resolvePath(e()))},Fl=e=>{const t=nn();return D(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Wo=()=>nn().location,Bl=(e,t)=>{const n=Wo(),r=D(()=>Qn(e()).map(o=>No(o,void 0,t)));return D(()=>{for(const o of r()){const s=o(n.pathname);if(s)return s}})};function Gl(e,t="",n){const{component:r,data:o,children:s}=e,i=!s||Array.isArray(s)&&!s.length,l={key:e,element:r?()=>d(r,{}):()=>{const{element:a}=e;return a===void 0&&n?d(n,{}):a},preload:e.component?r.preload:e.preload,data:o};return Uo(e.path).reduce((a,c)=>{for(const u of Qn(c)){const f=Po(t,u),h=i?f:f.split("/*",1)[0];a.push({...l,originalPath:u,pattern:h,matcher:No(h,!i,e.matchFilters)})}return a},[])}function Il(e,t=0){return{routes:e,score:Hl(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Uo(e){return Array.isArray(e)?e:[e]}function Fo(e,t="",n,r=[],o=[]){const s=Uo(e);for(let i=0,l=s.length;i<l;i++){const a=s[i];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const c=Gl(a,t,n);for(const u of c){r.push(u);const f=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!f)Fo(a.children,u.pattern,n,r,o);else{const h=Il([...r],o.length);o.push(h)}r.pop()}}}return r.length?o:o.sort((i,l)=>l.score-i.score)}function Vl(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function ql(e,t){const n=new URL("http://sar"),r=D(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),o=D(()=>r().pathname),s=D(()=>r().search,!0),i=D(()=>r().hash),l=D(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Do(So(s,()=>Dl(r())))}}function Xl(e,t="",n,r){const{signal:[o,s],utils:i={}}=Ll(e),l=i.parsePath||(A=>A),a=i.renderPath||(A=>A),c=i.beforeLeave||El(),u=Lt("",t),f=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,y]=E(!1),b=async A=>{y(!0);try{await Ji(A)}finally{y(!1)}},[m,w]=E(o().value),[p,v]=E(o().state),$=ql(m,p),g=[],C={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(A){return Lt(u,A)}};if(n)try{bt=C,C.data=n({data:void 0,params:{},location:$,navigate:N(C)})}finally{bt=void 0}function j(A,_,M){he(()=>{if(typeof _=="number"){_&&(i.go?c.confirm(_,M)&&i.go(_):console.warn("Router integration does not support relative routing"));return}const{replace:L,resolve:F,scroll:T,state:J}={replace:!1,resolve:!0,scroll:!0,...M},K=F?A.resolvePath(_):Lt("",_);if(K===void 0)throw new Error(`Path '${_}' is not a routable path`);if(g.length>=Wl)throw new Error("Too many redirects");const Y=m();if((K!==Y||J!==p())&&!Sl){if(c.confirm(K,M)){const ee=g.push({value:Y,replace:L,scroll:T,state:p()});b(()=>{w(K),v(J)}).then(()=>{g.length===ee&&q({value:K,state:J})})}}})}function N(A){return A=A||ae(tn)||C,(_,M)=>j(A,_,M)}function q(A){const _=g[0];_&&((A.value!==_.value||A.state!==_.state)&&s({...A,replace:_.replace,scroll:_.scroll}),g.length=0)}P(()=>{const{value:A,state:_}=o();he(()=>{A!==m()&&b(()=>{w(A),v(_)})})});{let A=function(_){if(_.defaultPrevented||_.button!==0||_.metaKey||_.altKey||_.ctrlKey||_.shiftKey)return;const M=_.composedPath().find(Y=>Y instanceof Node&&Y.nodeName.toUpperCase()==="A");if(!M||!M.hasAttribute("link"))return;const L=M.href;if(M.target||!L&&!M.hasAttribute("state"))return;const F=(M.getAttribute("rel")||"").split(/\s+/);if(M.hasAttribute("download")||F&&F.includes("external"))return;const T=new URL(L);if(T.origin!==window.location.origin||u&&T.pathname&&!T.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const J=l(T.pathname+T.search+T.hash),K=M.getAttribute("state");_.preventDefault(),j(C,J,{resolve:!1,replace:M.hasAttribute("replace"),scroll:!M.hasAttribute("noscroll"),state:K&&JSON.parse(K)})};en(["click"]),document.addEventListener("click",A),ve(()=>document.removeEventListener("click",A))}return{base:C,out:f,location:$,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:N,beforeLeave:c}}function Kl(e,t,n,r,o){const{base:s,location:i,navigatorFactory:l}=e,{pattern:a,element:c,preload:u,data:f}=r().route,h=D(()=>r().path);u&&u();const y={parent:t,pattern:a,get child(){return n()},path:h,params:o,data:t.data,outlet:c,resolvePath(b){return Lt(s.path(),b,h())}};if(f)try{bt=y,y.data=f({data:t.data,params:o,location:i,navigate:l(y)})}finally{bt=void 0}return y}const Yl=S("<a link></a>"),Jl=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,i=t||Al(),l=Xl(i,r,o);return d(Ho.Provider,{value:l,get children(){return e.children}})},Zl=e=>{const t=nn(),n=er(),r=Jt(()=>e.children),o=D(()=>Fo(r(),Po(n.pattern,e.base||""),Bo)),s=D(()=>Vl(o(),t.location.pathname)),i=Do(()=>{const u=s(),f={};for(let h=0;h<u.length;h++)Object.assign(f,u[h].params);return f});t.out&&t.out.matches.push(s().map(({route:u,path:f,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:f,params:h})));const l=[];let a;const c=D(So(s,(u,f,h)=>{let y=f&&u.length===f.length;const b=[];for(let m=0,w=u.length;m<w;m++){const p=f&&f[m],v=u[m];h&&p&&v.route.key===p.route.key?b[m]=h[m]:(y=!1,l[m]&&l[m](),ye($=>{l[m]=$,b[m]=Kl(t,b[m-1]||n,()=>c()[m+1],()=>s()[m],i)}))}return l.splice(u.length).forEach(m=>m()),h&&y?h:(a=b[0],b)}));return d(te,{get when(){return c()&&a},children:u=>d(tn.Provider,{value:u,get children(){return u.outlet()}})})},Be=e=>{const t=Jt(()=>e.children);return re(e,{get children(){return t()}})},Bo=()=>{const e=er();return d(te,{get when(){return e.child},children:t=>d(tn.Provider,{value:t,get children(){return t.outlet()}})})};function Ql(e){e=re({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Lo(e,["href","state","class","activeClass","inactiveClass","end"]),n=Ul(()=>e.href),r=Fl(n),o=Wo(),s=D(()=>{const i=n();if(i===void 0)return!1;const l=Fe(i.split(/[?#]/,1)[0]).toLowerCase(),a=Fe(o.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const i=Yl.cloneNode(!0);return Eo(i,re(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s(),[e.activeClass]:s(),...t.classList}},get["aria-current"](){return s()?"page":void 0}}),!1,!1),i})()}function _e(e,t){let n={},r=Object.keys(e);for(let o=0,s=r.length;o<s;o+=1){let i=r[o];t.includes(i)||Object.defineProperty(n,i,{get(){return e[i]},configurable:!0,enumerable:!0})}return n}var Go=pe();function vt(){let e=ae(Go);if(e)return e;throw new Error("`useHeadlessDisclosureProperties` must be used within `<HeadlessDisclosureRoot>`.")}function ea(e){return typeof e=="function"&&e.length>0}function ta(e){let t=vt();return D(()=>{let n=e.children;return ea(n)?n(t):n})}function it(e){return{get children(){return d(ta,{get children(){return e.children}})}}}function na(e){let t,n;if("defaultOpen"in e){let[r,o]=E(e.defaultOpen);t=r,n=s=>{ko(()=>{var i;o(s),(i=e.onChange)==null||i.call(e,s)})}}else t=()=>e.isOpen,n=r=>{var o;return(o=e.onChange)==null?void 0:o.call(e,r)};return{isOpen(){return t()},setState(r){e.disabled||n(r)},disabled(){return!!e.disabled}}}function ra(e){return typeof e=="function"&&e.length>0}function rn(e){let t=na(e);return d(Go.Provider,{value:t,get children(){return D(()=>{let n=e.children;return ra(n)?n(t):n})}})}function Re(e,t){return d(zl,re({get component(){return e()}},t))}function oa(e){return typeof e=="function"}function $t(e,t){return n=>{"ref"in e&&oa(e.ref)&&e.ref(n),t(n)}}function on(e){return{get disabled(){return e()},get"aria-disabled"(){return e()},get"data-sh-disabled"(){return e()}}}function sa(e){return{get"aria-expanded"(){return e()},get"data-sh-expanded"(){return e()}}}var ia='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';function tr(e,t){let n=e.querySelectorAll(ia),r=[];for(let o=0,s=n.length;o<s;o+=1)(!t||!t.contains(n[o]))&&r.push(n[o]);return r}function Io(e){return!e.matches('[data-sh-disabled="true"]')}function Vo(e,t,n){let r=t+n;for(;r>=0&&r<e.length;){if(Io(e[r]))return e[r];r+=n}}function qo(e,t,n){let r=t+n;for(n===1&&r===e.length&&(r=0),n===-1&&r===-1&&(r=e.length-1);t!==r;){if(Io(e[r]))return e[r];r+=n,n===1&&r>=e.length&&(r=0),n===-1&&r<0&&(r=e.length-1)}}function la(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=qo(e,r,1))==null||n.focus();break}}function aa(e,t){var n;for(let r=0,o=e.length;r<o;r+=1)if(t===e[r]){(n=qo(e,r,-1))==null||n.focus();break}}function nr(e){var t;return e.length?((t=Vo(e,-1,1))==null||t.focus(),!0):!1}function ca(e){var t;return e.length?((t=Vo(e,e.length,-1))==null||t.focus(),!0):!1}function Xo(e,t){let n=tr(e);t?!document.activeElement||!e.contains(document.activeElement)?ca(n):aa(n,document.activeElement):!document.activeElement||!e.contains(document.activeElement)?nr(n):la(n,document.activeElement)}var ua="data-sh";function Xe(e){return{[ua]:e}}var da=Xe("button");function fa(e){let[t,n]=E();return ne(()=>{let r=t();if(r instanceof HTMLElement&&r.tagName!=="BUTTON"){let o=s=>{(s.key==="Enter"||s.key===" ")&&r.click()};r.addEventListener("keydown",o),ve(()=>{r.removeEventListener("keydown",o)})}}),Re(()=>{var r;return(r=e.as)!=null?r:"button"},re({get tabindex(){return e.disabled?-1:0},role:"button"},on(()=>e.disabled),_e(e,["as","ref"]),da,{ref:$t(e,r=>{n(()=>r)})}))}function rr(e,t,n){return d(te,{get when(){var r;return(r=e.unmount)!=null?r:!0},get fallback(){return n()},get children(){return d(te,{get when(){return t()},get children(){return n()}})}})}function Hr(){var e,t;return(t=(e=window.getSelection())==null?void 0:e.focusNode)==null?void 0:t.parentElement}function ha(e){if(e){let t=e.getAttribute("tabindex");e.setAttribute("tabindex","-1"),e.focus(),e.blur(),t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}var ma=class{constructor(){typeof document<"u"&&(this.returnElement=document.activeElement,this.fsp=Hr()),ve(()=>{this.load()})}load(){this.returnElement instanceof HTMLElement?this.returnElement.focus():ha(this.fsp)}save(){this.returnElement=document.activeElement,this.fsp=Hr()}};function sn(){return new ma}var or=pe();function Ko(e){let t=ae(or);if(t)return t;throw new Error(`<${e}> must be used inside a <Dialog>`)}var Yo=Xe("dialog"),ga=Xe("dialog-overlay"),pa=Xe("dialog-panel");function ba(e){let t=de(),n=de(),r=de(),o=de(),s=sn();return d(or.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(rn,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(i){var l,a,c;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((c=e.onClose)==null||c.call(e),s.load())},children:({isOpen:i})=>rr(e,i,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(_e(e,["as","children","unmount","isOpen","disabled","onOpen","onClose","onChange"]),Yo,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function va(e){let t=de(),n=de(),r=de(),o=de(),s=sn();return d(or.Provider,{value:{ownerID:t,panelID:n,titleID:r,descriptionID:o},get children(){return d(rn,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(i){var l,a,c;i&&(s.save(),(l=e.onOpen)==null||l.call(e)),(a=e.onChange)==null||a.call(e,i),i||((c=e.onClose)==null||c.call(e),s.load())},children:({isOpen:i})=>rr(e,i,()=>Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(_e(e,["as","children","unmount","defaultOpen","disabled","onOpen","onClose","onChange"]),Yo,{id:t,role:"dialog","aria-modal":!0,"aria-labelledby":r,"aria-describedby":o},it(e))))})}})}function $a(e){return"defaultOpen"in e}function ya(e){return $a(e)?d(va,e):d(ba,e)}function wa(e){Ko("DialogOverlay");let t=vt(),[n,r]=E();return ne(()=>{let o=n();if(o instanceof HTMLElement){let s=()=>{t.setState(!1)};o.addEventListener("click",s),ve(()=>{o.removeEventListener("click",s)})}}),Re(()=>{var o;return(o=e.as)!=null?o:"div"},re(_e(e,["as","children","ref"]),ga,{ref:$t(e,o=>{r(()=>o)})},it(e)))}function xa(e){let t=Ko("DialogPanel"),n=vt(),[r,o]=E();return ne(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){nr(tr(s));let i=l=>{e.disabled||(l.key==="Tab"?(l.preventDefault(),Xo(s,l.shiftKey)):l.key==="Escape"&&n.setState(!1))};s.addEventListener("keydown",i),ve(()=>{s.removeEventListener("keydown",i)})}}),Re(()=>{var s;return(s=e.as)!=null?s:"div"},re(_e(e,["as","children","ref"]),pa,{id:t.panelID,ref:$t(e,s=>{o(()=>s)})},it(e)))}var sr=pe();function Jo(e){let t=ae(sr);if(t)return t;throw new Error(`<${e}> must be used inside a <Popover>`)}var Zo=Xe("popover"),ka=Xe("popover-button"),Sa=Xe("popover-panel");function _a(e){let[t,n]=E(!1),r=de(),o=de(),s=de(),i=sn();return d(sr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(_e(e,["isOpen","as","children","disabled","onChange"]),Zo,on(()=>e.disabled),{get children(){return d(rn,{get isOpen(){return e.isOpen},get disabled(){return e.disabled},onChange(l){var a,c,u;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((u=e.onClose)==null||u.call(e),i.load())},get children(){return e.children}})}}))}})}function Ca(e){let[t,n]=E(!1),r=de(),o=de(),s=de(),i=sn();return d(sr.Provider,{value:{ownerID:r,buttonID:o,panelID:s,get hovering(){return t()},set hovering(l){n(l)}},get children(){return Re(()=>{var l;return(l=e.as)!=null?l:"div"},re(_e(e,["defaultOpen","as","children","disabled","onChange"]),Zo,on(()=>e.disabled),{get children(){return d(rn,{get defaultOpen(){return e.defaultOpen},get disabled(){return e.disabled},onChange(l){var a,c,u;l&&(i.save(),(a=e.onOpen)==null||a.call(e)),(c=e.onChange)==null||c.call(e,l),l||((u=e.onClose)==null||u.call(e),i.load())},get children(){return e.children}})}}))}})}function za(e){return"defaultOpen"in e}function ja(e){return za(e)?d(Ca,e):d(_a,e)}function Ta(e){let t=Jo("PopoverButton"),n=vt(),[r,o]=E();return ne(()=>{let s=r();if(s instanceof HTMLElement){let i=()=>{n.disabled()||e.disabled||n.setState(!n.isOpen())};s.addEventListener("click",i),ve(()=>{s.removeEventListener("click",i)});let l=()=>{t.hovering=!0},a=()=>{t.hovering=!1};s.addEventListener("mouseenter",l),s.addEventListener("mouseleave",a),ve(()=>{s.removeEventListener("mouseenter",l),s.removeEventListener("mouseleave",a)})}}),d(fa,re(_e(e,["children","ref"]),ka,{id:t.buttonID,ref:$t(e,s=>{o(()=>s),s instanceof HTMLElement&&(t.anchor=s)}),get"aria-controls"(){return n.isOpen()&&t.panelID}},on(()=>{let s=n.disabled(),i=e.disabled;return s||i}),sa(()=>n.isOpen()),it(e)))}function Oa(e){let t=Jo("PopoverPanel"),n=vt(),[r,o]=E();return ne(()=>{let s=r();if(s instanceof HTMLElement&&n.isOpen()){nr(tr(s));let i=a=>{e.disabled||(a.key==="Tab"?(a.preventDefault(),Xo(s,a.shiftKey)):a.key==="Escape"&&n.setState(!1))},l=a=>{t.hovering||(!a.relatedTarget||!s.contains(a.relatedTarget))&&n.setState(!1)};s.addEventListener("keydown",i),s.addEventListener("focusout",l),ve(()=>{s.removeEventListener("keydown",i),s.removeEventListener("focusout",l)})}}),rr(e,()=>n.isOpen(),()=>Re(()=>{var s;return(s=e.as)!=null?s:"div"},re(_e(e,["as","unmount","children","ref"]),Sa,{id:t.panelID,ref:$t(e,s=>{o(()=>s)})},it(e))))}const Ma="_button_1yuv8_1",La="_isGhost_1yuv8_20",Aa="_isHalf_1yuv8_38",Ea="_isSecondary_1yuv8_42",Ra="_isSolid_1yuv8_46",ut={button:Ma,isGhost:La,isHalf:Aa,isSecondary:Ea,isSolid:Ra},Pa=S('<div class="flex flex-row items-center justify-center flex-1 gap-s.8"></div>'),ln=e=>{const t=e.as;return d(t,{get class(){var n;return[(n=e.class)!=null?n:"rounded-s p-s",ut.button,(()=>e.style==="none"?"":e.style==="solid"?ut.isSolid:e.style==="secondary"?ut.isSecondary:e.style==="half"?ut.isHalf:ut.isGhost)()].join(" ")},get style(){return`${e.hue!=null?`--hue: ${e.hue};`:""}`},get children(){return D(()=>e.style==="none")()?e.children:(()=>{const n=Pa.cloneNode(!0);return z(n,()=>e.children),n})()}})},Na=S("<button></button>"),et=e=>d(ln,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Na.cloneNode(!0);return Ao(n,"click",e.onClick,!0),z(n,()=>t.children),P(r=>{var a;const o=t.class,s=t.style,i=(a=e.type)!=null?a:"button",l=e.disabled;return o!==r._v$&&O(n,r._v$=o),r._v$2=Ue(n,s,r._v$2),i!==r._v$3&&Se(n,"type",r._v$3=i),l!==r._v$4&&(n.disabled=r._v$4=l),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),n})(),get children(){return e.children}});en(["click"]);const Da=S("<a></a>"),Qo=e=>d(ln,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>(()=>{const n=Da.cloneNode(!0);return z(n,()=>t.children),P(r=>{const o=t.class,s=`text-decoration: none; ${t.style}`,i=e.href;return o!==r._v$&&O(n,r._v$=o),r._v$2=Ue(n,s,r._v$2),i!==r._v$3&&Se(n,"href",r._v$3=i),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),get children(){return e.children}}),Ha=""+new URL("logo-white.c0f694e8.svg",import.meta.url).href,Wa=""+new URL("logo-black.123cdd58.svg",import.meta.url).href,Ua=`module.exports = {
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
`,Fa=`<div class="bg-red-600 text-red-200"> Red </div>
<div class="bg-green-600 text-green-200"> Green </div>
<div class="bg-blue-600 text-blue-200"> Blue </div>
<div class="bg-blue-600 text-desaturated-blue-200"> Blue but text is desaturated </div>
`,Ba=`unocss({
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
`,Ga=`<div class="scheme-auto-0 bg-surface"> Red </div>
<div class="scheme-auto-120 bg-surface"> Green </div>
<div class="scheme-auto-240 bg-surface"> Blue </div>
<div class="scheme-auto-240 bg-surface text-fg-2"> Blue but text is desaturated </div>
`,Ia=`<div class="bg-blue-100 text-blue-900"> Primary </div>
<div class="bg-blue-100 text-blue-800"> Secondary </div>
<div class="bg-blue-100 text-blue-600"> Tertiary </div>
`,Va=`<div class="bg-blue"> Primary (text-fg-1 is applied by default) </div>
<div class="bg-blue text-fg-2"> Secondary </div>
<div class="bg-blue text-fg-3"> Tertiary </div>
`,qa=`module.exports = {
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
`,Xa=`unocss({
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
`,Ka=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute width-full height-1 inset-bottom-[0.375rem]"></div>
  <!-- (4-1) / 2 -->
  <!-- (1rem - 0.25rem) / 2 -->
  <!-- was hard to calculate and will break if the theme changes -->
</div>
`,Ya=`<div class="p-4">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-1 inset-bottom-$(($4-$1)/2)"></div>
  <!-- We did not need to calculate anything and this will not break if proportions change -->
</div>
`,Ja=`// Not possible \u{1F641}
`,Za=`import { getLCA, LCHToCSSColor } from "unocss-preset-windblade/core";
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
`,Qa="modulepreload",ec=function(e,t){return new URL(e,t).href},Wr={},tt=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ec(s,r),s in Wr)return;Wr[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Qa,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},tc=()=>{const[e]=xn(async()=>(await tt(()=>import("./index.c770f1ba.js").then(r=>r.i),[],import.meta.url)).default),[t]=xn(async()=>(await tt(()=>import("./index.0763474a.js"),[],import.meta.url)).default),[n]=xn(async()=>await tt(()=>import("./index.31d8c999.js"),[],import.meta.url));return{highlighter:t,formatter:e,xml:n}},De=ye(tc),nc=S('<div class="flex flex-col items-center p-i-m.2 size-i-full"><div></div></div>'),Qe=e=>(()=>{const t=nc.cloneNode(!0),n=t.firstChild;return z(n,()=>e.children),P(()=>O(n,`size-i-full max-size-i-l ${e.class}`)),t})();function Ur(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}const rc=e=>{let t,n=!0;const[r,o]=E(),[s,i]=E(),l=Jt(()=>e.children),{onBeforeEnter:a,onEnter:c,onAfterEnter:u,onBeforeExit:f,onExit:h,onAfterExit:y}=e,b=D(()=>{const p=e.name||"s";return{enterActiveClass:e.enterActiveClass||p+"-enter-active",enterClass:e.enterClass||p+"-enter",enterToClass:e.enterToClass||p+"-enter-to",exitActiveClass:e.exitActiveClass||p+"-exit-active",exitClass:e.exitClass||p+"-exit",exitToClass:e.exitToClass||p+"-exit-to"}});function m(p,v){if(!n||e.appear){let j=function(N){p&&(!N||N.target===p)&&(p.removeEventListener("transitionend",j),p.removeEventListener("animationend",j),p.classList.remove(...g),p.classList.remove(...C),ko(()=>{r()!==p&&o(p),s()===p&&i(void 0)}),u&&u(p),e.mode==="inout"&&w(p,v))};const $=b().enterClass.split(" "),g=b().enterActiveClass.split(" "),C=b().enterToClass.split(" ");a&&a(p),p.classList.add(...$),p.classList.add(...g),Ur(()=>{p.classList.remove(...$),p.classList.add(...C),c&&c(p,()=>j()),(!c||c.length<2)&&(p.addEventListener("transitionend",j),p.addEventListener("animationend",j))})}v&&!e.mode?i(p):o(p)}function w(p,v){const $=b().exitClass.split(" "),g=b().exitActiveClass.split(" "),C=b().exitToClass.split(" ");if(!v.parentNode)return j();f&&f(v),v.classList.add(...$),v.classList.add(...g),Ur(()=>{v.classList.remove(...$),v.classList.add(...C)}),h&&h(v,()=>j()),(!h||h.length<2)&&(v.addEventListener("transitionend",j),v.addEventListener("animationend",j));function j(N){(!N||N.target===v)&&(v.removeEventListener("transitionend",j),v.removeEventListener("animationend",j),v.classList.remove(...g),v.classList.remove(...C),r()===v&&o(void 0),y&&y(v),e.mode==="outin"&&m(p,v))}}return En(p=>{for(t=l();typeof t=="function";)t=t();return he(()=>(t&&t!==p&&(e.mode!=="outin"?m(t,p):n&&o(t)),p&&p!==t&&e.mode!=="inout"&&w(t,p),n=!1,t))}),[r,s]},oc=S('<section class="relative size-i-full size-b-full"></section>'),Fr="animation-duration-m.4",es=()=>(()=>{const e=oc.cloneNode(!0);return z(e,d(rc,{appear:!0,enterActiveClass:`${Fr} animate-in`,exitActiveClass:`${Fr} animate-out`,get children(){return d(Bo,{})}})),e})(),He=e=>d(ln,{get class(){return e.class},get style(){return e.style},get hue(){return e.hue},as:t=>d(Ql,{get class(){return t.class},get style(){return`text-decoration: none; ${t.style}`},get href(){return e.href},get activeClass(){return e.activeClass},onClick:()=>{var n;(n=e.onClick)==null||n.call(e)},get children(){return t.children}}),get children(){return e.children}});function sc(e){try{return document.querySelector(e)}catch{return null}}function ic(e,t){const n=sc(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function lc(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function ac(e="/"){const t=()=>{var s;const n=window.location.search,r=new URLSearchParams(n);return decodeURIComponent((s=r.get("navigation"))!=null?s:e)};return Ro(()=>({value:t(),state:history.state}),({value:n,replace:r,scroll:o,state:s})=>{const i=`?navigation=${encodeURIComponent(n)}`;r?window.history.replaceState(s,"",i):window.history.pushState(s,"",i),ic(window.location.hash.slice(1),o)},n=>lc(window,"popstate",()=>n()),{go:n=>window.history.go(n)})}const cc=S('<div class="grid grid-fit-cols-l.2 gap-s.4"><div class="bg-surface rounded-s flex flex-col"><h5>T\u{1F92E}ilwind:</h5></div><div class="bg-surface rounded-s flex flex-col"><h5>Windblade \u26A1:</h5></div></div>'),kt=S('<div class="size-b-px bg-surface"></div>'),St=S("<pre></pre>"),uc=S('<div class="i-mdi-arrow-right"></div>'),dc=S('<div class="font-bold text-m.2"><h2 class="text-fg-1 text-m.4 font-extrabold m-be-s">Essentailly Tailwind&nbsp;<span class="text-fg-1 text-m.2 font-extrabold">but:</span></h2><ul class="list-none m-be-s flex flex-wrap gap-s.4 max-size-i-[$l.8%]"><li>UnoCSS preset,</li><li>Better color system,</li><li>Logical properties,</li><li>Easier to customize,</li><li>Has Javascript core.</li></ul></div>'),fc=S("<p>Windblade is a Tailwind-inspired UnoCSS preset that does multiple things better than Tailwind. First, Windblade uses semantic hue-less colors that automatically adapt to the browser color scheme. Second, it uses logical properties instead of right-to-left, top-to-bottom ones and polyfills logical values which have not been implemented in CSS yet. Third, it has a much simpler theme that is faster to customize and fit your design language. And finally, it has a Javascript core that gives access to design tokens at runtime (e.g. for drawing to canvas).</p>"),hc=S(`<div class="flex flex-col gap-m p-b-m text-fg-3"><section class="flex flex-col gap-m.2"><h3>Semantic colors</h3><div class="flex flex-col gap-m.4"><section class="flex flex-col gap-s"><h4>Tailwind has too many colors</h4><p>Tailwind has an incomprehensible amount of colors which is very hard to customize. Windblade's semantic colors solve this by using color "meanings" like 'background' or 'surface' instead of actual color values like 'red', 'green', 'blue' or 'desaturated blue' and generating both background and foreground colors. OkLCH model is used in the background to power this so you can use any hue you need by changing color scheme.</p></section><section class="flex flex-col gap-s"><h4>Foreground colors in Tailwind are too much manual work</h4><p>Tailwind provides a color framework but does not help you use it. Windblade's semantic colors solve this by automatically applying foreground colors and giving you semantic variations of them.</p></section><section class="flex flex-col gap-s"><h4>Color-scheme adaptation with Tailwind is a nightmare</h4><p>Because Tailwind defines static color values you have to manually set light and dark colors every time which is twice as much code as it could be. Windblade's semantic colors solve this by flipping the lightness value so you only declare what the color means, and Windblade figures out exactly what it should look like in different color schemes.</p></section></div></section><section class="flex flex-col gap-s"><h3>Logical properties</h3><p>Tailwind is very hard to use for multilanguage applications because layout reorientation has to be done manually. Windblade solves this by replacing all physical properties with logical counterparts even where CSS doesn't support it yet.</p></section><section class="flex flex-col gap-s"><h3>Simpler theme</h3><p>Tailwind configures a lot of things separately which takes a long time to customize and could just be automated. Windblade has a simpler theme that you can bend completely to your design language and rhythm very quickly.</p></section><section class="flex flex-col gap-s"><h3>Javascript core</h3><p>Windblade has a Javascript core that can be used in your front-end to process your design tokens. This is mostly useful in sitations when you need to draw to an HTML canvas with Windblade colors.</p></section><section class="flex flex-col gap-s"><h3>Bonus: calculations</h3><p>Both Windblade and Tailwind allow you to set custom values suing the backet syntax, however only in Tailwind that means that you lose access to the design tokens. Windblade allows you to grab relevant to the rule values from your theme by prefixing them with <code>$</code>.</p><p>You can also use the <code>$</code> syntax to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p></section></div>`),mc=S("<h3>Ready to improve your Tailwind workflow?</h3>"),gc=S('<p>Learn how to set up, customize and use Windblade. No preliminary knowledge of Tailwind required <span class="text-fg-3">(Actually it is required at the moment but we are working to change that)</span>.</p>'),pc=S('<div class="absolute size-i-full size-b-full overflow-auto"><section class="p--bm.2 p-b-m font-semibold bg-gradient-to-ss from-surface"></section><section class="bg-gradient-to-ss from-surface to-normal-2"></section><footer></footer></div>'),B={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},ze=e=>(()=>{const t=cc.cloneNode(!0),n=t.firstChild,r=n.firstChild,o=n.nextSibling,s=o.firstChild;return z(n,d(te,{get when(){return e.code.tw.js},keyed:!0,children:i=>[kt.cloneNode(!0),(()=>{const l=St.cloneNode(!0);return P(a=>{var f;const c=`${B.pre} js`,u=(f=De.highlighter())==null?void 0:f.highlight(i,{language:"js"}).value;return c!==a._v$3&&O(l,a._v$3=c),u!==a._v$4&&(l.innerHTML=a._v$4=u),a},{_v$3:void 0,_v$4:void 0}),l})()]}),null),z(n,d(te,{get when(){return e.code.tw.html},keyed:!0,children:i=>[kt.cloneNode(!0),(()=>{const l=St.cloneNode(!0);return P(a=>{var f;const c=B.pre,u=(f=De.highlighter())==null?void 0:f.highlight(i,{language:"xml"}).value;return c!==a._v$5&&O(l,a._v$5=c),u!==a._v$6&&(l.innerHTML=a._v$6=u),a},{_v$5:void 0,_v$6:void 0}),l})()]}),null),z(o,d(te,{get when(){return e.code.wb.js},keyed:!0,children:i=>[kt.cloneNode(!0),(()=>{const l=St.cloneNode(!0);return P(a=>{var f;const c=`${B.pre} js`,u=(f=De.highlighter())==null?void 0:f.highlight(i,{language:"js"}).value;return c!==a._v$7&&O(l,a._v$7=c),u!==a._v$8&&(l.innerHTML=a._v$8=u),a},{_v$7:void 0,_v$8:void 0}),l})()]}),null),z(o,d(te,{get when(){return e.code.wb.html},keyed:!0,children:i=>[kt.cloneNode(!0),(()=>{const l=St.cloneNode(!0);return P(a=>{var f;const c=B.pre,u=(f=De.highlighter())==null?void 0:f.highlight(i,{language:"xml"}).value;return c!==a._v$9&&O(l,a._v$9=c),u!==a._v$10&&(l.innerHTML=a._v$10=u),a},{_v$9:void 0,_v$10:void 0}),l})()]}),null),P(i=>{const l=B.h5,a=B.h5;return l!==i._v$&&O(r,i._v$=l),a!==i._v$2&&O(s,i._v$2=a),i},{_v$:void 0,_v$2:void 0}),t})(),Br=()=>d(He,{style:"solid",href:"/docs/Usage/Installation",get children(){return["Get started",uc.cloneNode(!0)]}}),bc=()=>(()=>{const e=pc.cloneNode(!0),t=e.firstChild,n=t.nextSibling,r=n.nextSibling;return z(t,d(Qe,{class:"flex flex-col items-start",get children(){return[(()=>{const o=dc.cloneNode(!0),s=o.firstChild,i=s.nextSibling,l=i.firstChild,a=l.nextSibling,c=a.nextSibling,u=c.nextSibling,f=u.nextSibling;return P(h=>{const y=B.header.li,b=B.header.li,m=B.header.li,w=B.header.li,p=B.header.li;return y!==h._v$11&&O(l,h._v$11=y),b!==h._v$12&&O(a,h._v$12=b),m!==h._v$13&&O(c,h._v$13=m),w!==h._v$14&&O(u,h._v$14=w),p!==h._v$15&&O(f,h._v$15=p),h},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),o})(),(()=>{const o=fc.cloneNode(!0);return P(()=>O(o,`${B.p} text-fg-3 m-be-s`)),o})(),d(Br,{})]}})),z(e,d(Qe,{get children(){const o=hc.cloneNode(!0),s=o.firstChild,i=s.firstChild,l=i.nextSibling,a=l.firstChild,c=a.firstChild,u=c.nextSibling,f=a.nextSibling,h=f.firstChild,y=h.nextSibling,b=f.nextSibling,m=b.firstChild,w=m.nextSibling,p=s.nextSibling,v=p.firstChild,$=v.nextSibling,g=p.nextSibling,C=g.firstChild,j=C.nextSibling,N=g.nextSibling,q=N.firstChild,A=q.nextSibling,_=N.nextSibling,M=_.firstChild,L=M.nextSibling,F=L.nextSibling;return z(a,d(ze,{code:{tw:{js:Ua,html:Fa},wb:{js:Ba,html:Ga}}}),null),z(f,d(ze,{code:{tw:{html:Ia},wb:{html:Va}}}),null),z(b,d(ze,{code:{tw:{html:'<div class="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"> Hello </div>'},wb:{html:'<div class="bg-blue"> Hello </div>'}}}),null),z(p,d(ze,{code:{tw:{html:`<div class="rtl:m-right-l ltr:m-left-l"></div>
<div>Horizontal writing modes are not supported at all \u{1F641}</div>`},wb:{html:`<div class="m-ie-l"></div>
<div class="size-i-l"> Size in the direction of writing (width if horizontal, height if vertical) </div>`}}}),null),z(g,d(ze,{code:{tw:{js:qa},wb:{js:Xa}}}),null),z(N,d(ze,{code:{tw:{js:Ja},wb:{js:Za}}}),null),z(_,d(ze,{code:{tw:{html:'<div class="grid grid-template-cols-[auto_208px_auto]"></div>'},wb:{html:'<div class="grid grid-template-cols-[auto_$52_auto]"></div>'}}}),F),z(_,d(ze,{code:{tw:{html:Ka},wb:{html:Ya}}}),null),P(T=>{const J=B.h3,K=B.h4,Y=B.p,ee=B.h4,Pe=B.p,yr=B.h4,wr=B.p,xr=B.h3,kr=B.p,Sr=B.h3,_r=B.p,Cr=B.h3,zr=B.p,jr=B.h3,Tr=B.p,Or=B.p;return J!==T._v$16&&O(i,T._v$16=J),K!==T._v$17&&O(c,T._v$17=K),Y!==T._v$18&&O(u,T._v$18=Y),ee!==T._v$19&&O(h,T._v$19=ee),Pe!==T._v$20&&O(y,T._v$20=Pe),yr!==T._v$21&&O(m,T._v$21=yr),wr!==T._v$22&&O(w,T._v$22=wr),xr!==T._v$23&&O(v,T._v$23=xr),kr!==T._v$24&&O($,T._v$24=kr),Sr!==T._v$25&&O(C,T._v$25=Sr),_r!==T._v$26&&O(j,T._v$26=_r),Cr!==T._v$27&&O(q,T._v$27=Cr),zr!==T._v$28&&O(A,T._v$28=zr),jr!==T._v$29&&O(M,T._v$29=jr),Tr!==T._v$30&&O(L,T._v$30=Tr),Or!==T._v$31&&O(F,T._v$31=Or),T},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0}),o}}),n),z(n,d(Qe,{class:"flex flex-col items-start gap-s p-b-m",get children(){return[(()=>{const o=mc.cloneNode(!0);return P(()=>O(o,B.h3)),o})(),(()=>{const o=gc.cloneNode(!0);return P(()=>O(o,B.p)),o})(),d(Br,{})]}})),z(r,d(Qe,{class:"flex items-center gap-s.4 p-b-m.2",get children(){return["Made by ",d(Qo,{href:"https://github.com/StarLederer",children:"Star Lederer"})]}})),e})(),ts=e=>e.replaceAll(" ","_").replaceAll("/","\\"),vc=S('<div class="absolute inset-0"><div></div><div></div></div>'),$c=S('<span class="relative"></span>'),yc=S("<ul></ul>"),wc=S("<li></li>"),xc=e=>{const t=`/${e.path.map(o=>ts(o)).join("/")}`,n=Bl(()=>t),r=`filter: hue-rotate(${3.6*e.i}deg);`;return d(He,{style:"none",href:t,get class(){return`${n()?"bg-surface text-fg-1":"text-fg-3"} block relative p-s.6 p-i-s p-is-m.2 rounded-full text-start justify-start transition ease-out overflow-hidden hover:bg-accent-3 hover:text-fg-1`},get children(){return[(()=>{const o=vc.cloneNode(!0),s=o.firstChild,i=s.nextSibling;return P(l=>{const a=r,c=`${n()?"bg-accent-2":"bg-transparent"} blur-s transition absolute size-b-m.2 size-i-m.2 rounded-full inset-0 inset-b-0 m-b-auto`,u=`${n()?"bg-accent":"bg-accent-2"} size-b-s.4 size-i-s.4 transition absolute rounded-full inset-0 inset-b-0 m-b-auto m-is-$(($m.2-$s.4)/2)`;return l._v$=Ue(o,a,l._v$),c!==l._v$2&&O(s,l._v$2=c),u!==l._v$3&&O(i,l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),o})(),(()=>{const o=$c.cloneNode(!0);return z(o,()=>e.title),o})()]}})},ns=e=>{let t=0;const n=()=>{var r;return(r=e.depth)!=null?r:0};return(()=>{const r=yc.cloneNode(!0);return z(r,d(Ve,{get each(){return e.tree},children:({name:o,value:s})=>(()=>{const i=wc.cloneNode(!0);return z(i,typeof s=="string"?d(xc,{get path(){return[...e.prefix,o]},title:o,i:++t}):d(ns,{tree:s,get prefix(){return[...e.prefix,o]},get depth(){return n()+1}})),i})()})),P(o=>{const s=`list-none flex flex-col ${n()>0?"before:font-semibold before:m-be-s before:block gap-s.2":"gap-s"}`,i=n()>0?e.prefix.at(-1):void 0;return s!==o._v$4&&O(r,o._v$4=s),i!==o._v$5&&Se(r,"title",o._v$5=i),o},{_v$4:void 0,_v$5:void 0}),r})()},kc=S('<div class="inline-block scheme-auto-0 bg-surface p-s.4 p-i-s rounded-s text-fg-2 font-normal"><span class="text-fg-1 font-semibold">Error:</span> </div>'),me=e=>(()=>{const t=kc.cloneNode(!0);return t.firstChild.nextSibling,z(t,()=>e.children,null),t})(),lt=pe([]),rs=()=>{var e;return(e=ae(lt))!=null?e:{}},yt=e=>[...rs(),...e],se=e=>{const t=rs();return d(Ve,{get each(){return e.children},children:(n,r)=>{for(let o=t.length-1;o>=0;--o){const s=t[o],i=s(n,r());if(i!==void 0)return i}}})},Gr=S("<pre></pre>"),{highlighter:Sc}=De,_c=e=>{var r,o,s;const t=`bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto ${(r=e.lang)!=null?r:""}`;if(!e.lang)return(()=>{const i=Gr.cloneNode(!0);return O(i,t),z(i,()=>e.value),i})();let n=e.value;try{n=(s=(o=Sc())==null?void 0:o.highlight(e.value,{language:e.lang}).value)!=null?s:""}catch(i){return d(me,{get children(){return["Failed highlighting code. ",D(()=>i.message)]}})}return(()=>{const i=Gr.cloneNode(!0);return O(i,t),i.innerHTML=n,i})()},ht=pe(),Dn=e=>{var r;let t=e;const n=(r=ae(ht))!=null?r:{};return Object.entries(n).forEach(([o,s])=>{t=t.replaceAll(o,s)}),t},Cc=S("<option></option>"),zc=S('<select name="colors" class="size-b-full bg-accent-2 rounded-s.4 min-size-i-0 size-b-m.2 p-i-s.4 leading-s transition ease-out hover:highlight active:highlight+"><option value=""></option></select>'),jc=e=>{const t=()=>Dn(e.value);return(()=>{const n=Cc.cloneNode(!0);return z(n,t),P(()=>n.value=t()),n})()},Tc=e=>{switch(e.type){case"element":switch(e.name){case"option":return d(te,{get when(){var t;return(t=e.attributes)==null?void 0:t.value},keyed:!0,fallback:()=>d(me,{children:"'option' requires a 'value' attribute"}),children:t=>d(jc,{value:t})})}}},Oc=e=>d(lt.Provider,{get value(){return yt([Tc])},get children(){const t=zc.cloneNode(!0);return t.firstChild,t.addEventListener("change",({target:n})=>e.onChange(n.value)),z(t,d(se,e),null),t}}),Mc=S('<div class="rounded-s.4 overflow-hidden flex items-center"></div>'),Lc=e=>{const[t,n]=E(1),r=()=>e.onChange(`${t()}`);ne(r);const o="size-b-m.2 p-i-s.6 self-stretch";return(()=>{const s=Mc.cloneNode(!0);return z(s,d(et,{style:"secondary",class:o,onClick:()=>n(t()-1),children:"-"}),null),z(s,d(et,{style:"secondary",class:o,onClick:r,children:t}),null),z(s,d(et,{style:"secondary",class:o,onClick:()=>n(t()+1),children:"+"}),null),s})()},Ac=S('<tr class="border border-color-transparent border-be-color-fg-5"><td><div></div></td><td class="p-b-s.6 font-semibold flex flex-wrap"></td></tr>'),os=pe(),Ec=(e,t)=>{const n=ae(os),r=o=>{n==null||n.setPart(t,o),n==null||n.select()};switch(e.type){case"text":return d(et,{style:"none",class:"text-accent transition ease-in",onClick:()=>r(e.value),get children(){return e.value}});case"element":switch(e.name){case"select":return d(Oc,re(e,{onChange:o=>r(o)}));case"input":return d(Lc,re(e,{onChange:o=>r(o)}))}}},Rc=e=>{const t=ae($r),[n,r]=E([]),o=(l,a)=>{r(c=>(c[l]=a,[...c]))};ne(()=>{e.children.forEach((l,a)=>{switch(l.type){case"text":o(a,l.value);break}})});const s=()=>{const l=n().join("").match(/\S+/g);return l?l.join(""):""},i=()=>{var l,a;t==null||t.selectUtil({util:s(),renderer:(a=(l=e.attributes)==null?void 0:l.renderer)!=null?a:""}),e.onSelect()};return d(os.Provider,{value:{parts:n,setPart:o,select:i},get children(){return d(lt.Provider,{get value(){return yt([Ec])},get children(){const l=Ac.cloneNode(!0),a=l.firstChild,c=a.firstChild,u=a.nextSibling;return z(u,d(se,e)),P(()=>O(c,`i-mdi-check m-auto transition opacity-${e.selected?"s":"zero"}`)),l}})}})},Pc=S('<table class="border-collapse"><thead class="font-semibold"><tr><th><div class="i-mdi-minus"></div></th><th>Utility</th></tr></thead><tbody></tbody></table>'),ss=pe(),_n={tr:"border border-color-transparent border-be-color-fg-5",th:"p-b-s.6 text-start text-fg-3"},Nc=(e,t)=>{const n=ae(ss);if(e.type==="element")switch(e.name){case"util":return d(Rc,re(e,{get selected(){return(n==null?void 0:n.selected())===t},onSelect:()=>n==null?void 0:n.setSelected(t)}))}},Dc=e=>{const[t,n]=E(-1);return d(ss.Provider,{value:{selected:t,setSelected:n},get children(){return d(lt.Provider,{get value(){return yt([Nc])},get children(){const r=Pc.cloneNode(!0),o=r.firstChild,s=o.firstChild,i=s.firstChild,l=i.nextSibling,a=o.nextSibling;return z(a,d(se,e)),P(c=>{const u=_n.tr,f=`${_n.th} p-i-s`,h=`${_n.th} size-i-full`;return u!==c._v$&&O(s,c._v$=u),f!==c._v$2&&O(i,c._v$2=f),h!==c._v$3&&O(l,c._v$3=h),c},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}})},Hc=S("<div></div>"),Wc=e=>{const[t,n]=E();let r;return ne(()=>{if(!r){n(void 0);return}t()||n(r.attachShadow({mode:"open"}))}),ne(()=>{const o=t();!o||(o.innerHTML=e.innerHTML)}),(()=>{const o=Hc.cloneNode(!0),s=r;return typeof s=="function"?pt(s,o):r=o,P(()=>O(o,e.class)),o})()},Ir={dark:240,light:260};function Uc(){const[e,t]=E(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",l=>{t(l.matches?"light":"dark")});const[n,r]=E(void 0),o=()=>{switch(n()){case"dark":r("light");break;case"light":r("dark");break;default:r(e()==="light"?"dark":"light")}},s=D(()=>{var l,a;return(a=(l=n())!=null?l:e())!=null?a:"dark"}),i=D(()=>s()==="dark"?Ir.dark:Ir.light);return{scheme:s,hue:i,enforceScheme:n,setEnforceScheme:r,toggleScheme:o}}const Oe=ye(Uc),is=e=>d(Wc,{get class(){return e.class},get innerHTML(){return`
    <div
      id="root"
      class="${Oe.scheme()==="dark"?"scheme-dark-276":"scheme-light-296"}"
      style="${e.rootStyle}"
    >
      <style>${e.css.replaceAll(":root",":where(#root)")}</style>
      ${e.html}
    </div>
  `}});function Fc(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ir(e){const t=e.length;let n=-1,r,o="";const s=e.charCodeAt(0);for(;++n<t;){if(r=e.charCodeAt(n),r===0){o+="\uFFFD";continue}if(r===44){o+="\\,";continue}if(r>=1&&r<=31||r===127||n===0&&r>=48&&r<=57||n===1&&r>=48&&r<=57&&s===45){o+=`\\${r.toString(16)} `;continue}if(n===0&&t===1&&r===45){o+=`\\${e.charAt(n)}`;continue}if(r>=128||r===45||r===95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){o+=e.charAt(n);continue}o+=`\\${e.charAt(n)}`}return o}const Cn=ir;function ue(e=[]){return Array.isArray(e)?e:[e]}function Ht(e){return Array.from(new Set(e))}function oe(e){return typeof e=="string"}function mt(e){return oe(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(t=>t[1]!=null)}function Bc(e){return Array.isArray(e)?e.find(t=>!Array.isArray(t)||Array.isArray(t[0]))?e.map(t=>mt(t)):[e]:[mt(e)]}function Gc(e){return e.filter(([t,n],r)=>{if(t.startsWith("$$"))return!1;for(let o=r-1;o>=0;o--)if(e[o][0]===t&&e[o][1]===n)return!1;return!0})}function zn(e){return e==null?"":Gc(e).map(([t,n])=>n!=null?`${t}:${n};`:void 0).filter(Boolean).join("")}function _t(e){return e&&typeof e=="object"&&!Array.isArray(e)}function ls(e,t){const n=e,r=t;if(Array.isArray(n))return[...r];const o={...n};return _t(n)&&_t(r)&&Object.keys(r).forEach(s=>{_t(n[s])&&_t(r[s])||Array.isArray(n[s])&&Array.isArray(r[s])?o[s]=ls(n[s],r[s]):Object.assign(o,{[s]:r[s]})}),o}function At(e){let t,n,r;if(Array.isArray(e)){for(n=Array(t=e.length);t--;)n[t]=(r=e[t])&&typeof r=="object"?At(r):r;return n}if(Object.prototype.toString.call(e)==="[object Object]"){n={};for(t in e)t==="__proto__"?Object.defineProperty(n,t,{value:At(e[t]),configurable:!0,enumerable:!0,writable:!0}):n[t]=(r=e[t])&&typeof r=="object"?At(r):r;return n}return e}function Ic(e){return oe(e[0])}function Vc(e){return oe(e[0])}const qc=/[\w\u00A0-\uFFFF-_:%-?]/,Vr="$$shortcut-no-merge";function Xc(e=""){return qc.test(e)}function Kc(e){return typeof e=="function"?{match:e}:e}function qr(e){return e.length===3}function Yc(e){return e!=null}function Jc(){}class Zc{constructor(){this._map=new Map}get(t,n){const r=this._map.get(t);if(r)return r.get(n)}getFallback(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.has(n)||o.set(n,r),o.get(n)}set(t,n,r){let o=this._map.get(t);return o||(o=new Map,this._map.set(t,o)),o.set(n,r),this}has(t,n){var r;return(r=this._map.get(t))==null?void 0:r.has(n)}delete(t,n){var r;return((r=this._map.get(t))==null?void 0:r.delete(n))||!1}deleteTop(t){return this._map.delete(t)}map(t){return Array.from(this._map.entries()).flatMap(([n,r])=>Array.from(r.entries()).map(([o,s])=>t(s,n,o)))}}const Ct={};function Qc(e=["-",":"]){const t=e.join("|");return Ct[t]||(Ct[t]=new RegExp(`((?:[!@\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),Ct[t].lastIndex=0,Ct[t]}function eu(e,t=["-",":"],n=5){const r=Qc(t);let o=!1,s=e.toString();const i=new Set;do{const l=s;s=s.replace(r,(a,c,u,f)=>t.includes(u)?(i.add(c+u),f.split(/\s/g).filter(Boolean).map(h=>h==="~"?c:h.replace(/^(!?)(.*)/,`$1${c}${u}$2`)).join(" ")):a),o=s!==l,n-=1}while(o&&n);return{prefixes:Array.from(i),expanded:s,hasChanged:o}}function tu(e,t=["-",":"],n=5){const{expanded:r}=eu(e.toString(),t,n);return typeof e=="string"?r:e.length()?e.overwrite(0,e.length(),r):e}const Xr=new Set;function nu(e){Xr.has(e)||(console.warn("[unocss]",e),Xr.add(e))}function ru(e){const t=function(r){var s;const o=((s=this.__options)==null?void 0:s.sequence)||[];this.__options.sequence=[];for(const i of o){const l=e[i](r);if(l!=null)return l}};function n(r,o){return r.__options||(r.__options={sequence:[]}),r.__options.sequence.push(o),r}for(const r of Object.keys(e))Object.defineProperty(t,r,{enumerable:!0,get(){return n(this,r)}});return t}const ou=/\\?[\s'"`;{}]+/g,as=/\[(\\\W|[\w-])+:['"]?\S+?['"]?\]/g,su=new RegExp(`^${as.source}$`),iu=e=>{var n;const t=new Set;for(const r of e.matchAll(as))!((n=e[r.index-1])!=null&&n.match(/^[\s'"`]/))||t.add(r[0]);return e.split(ou).forEach(r=>{Xc(r)&&!su.test(r)&&t.add(r)}),[...t]},lu={name:"split",order:0,extract({code:e}){return iu(e)}};function au(){return{events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}}}const Hn="default",Wn="preflights",cu="shortcuts",uu={[Wn]:-100,[cu]:-10,[Hn]:0};function cs(e){return ue(e).flatMap(t=>Array.isArray(t)?[t]:Object.entries(t))}function du(e){var n;const t=e.shortcuts?cs(e.shortcuts):void 0;if(e.shortcuts=t,e.prefix||e.layer){const r=o=>{o[2]||(o[2]={});const s=o[2];s.prefix==null&&e.prefix&&(s.prefix=ue(e.prefix)),s.layer==null&&e.layer&&(s.layer=e.layer)};t==null||t.forEach(r),(n=e.rules)==null||n.forEach(r)}return e}function Kr(e={},t={}){const n=Object.assign({},t,e),r=(n.presets||[]).flatMap(ue).map(du),o=[...r.filter(m=>m.enforce==="pre"),...r.filter(m=>!m.enforce),...r.filter(m=>m.enforce==="post")],s=Object.assign(uu,...r.map(m=>m.layers),e.layers);function i(m){return Ht([...o.flatMap(w=>ue(w[m]||[])),...ue(n[m]||[])])}const l=i("extractors");l.length||l.push(lu),l.sort((m,w)=>(m.order||0)-(w.order||0));const a=i("rules"),c={},u=a.length,f=a.map((m,w)=>{var p;if(Ic(m)){ue(((p=m[2])==null?void 0:p.prefix)||"").forEach($=>{c[$+m[0]]=[w,m[1],m[2],m]});return}return[w,...m]}).filter(Boolean).reverse(),h=At([...o.map(m=>m.theme||{}),n.theme||{}].reduce((m,w)=>ls(m,w),{}));i("extendTheme").forEach(m=>m(h));const y={templates:Ht(o.map(m=>{var w;return ue((w=m.autocomplete)==null?void 0:w.templates)}).flat()),extractors:o.map(m=>{var w;return ue((w=m.autocomplete)==null?void 0:w.extractors)}).flat().sort((m,w)=>(m.order||0)-(w.order||0))};let b=ue(i("separators"));return b.length||(b=[":","-"]),{mergeSelectors:!0,warn:!0,blocklist:[],sortLayers:m=>m,...n,presets:o,envMode:n.envMode||"build",shortcutsLayer:n.shortcutsLayer||"shortcuts",layers:s,theme:h,rulesSize:u,rulesDynamic:f,rulesStaticMap:c,preprocess:i("preprocess"),postprocess:i("postprocess"),preflights:i("preflights"),autocomplete:y,variants:i("variants").map(Kc),shortcuts:cs(i("shortcuts")).reverse(),extractors:l,safelist:i("safelist"),separators:b}}const fu="0.49.8";class hu{constructor(t={},n={}){this.userConfig=t,this.defaults=n,this.version=fu,this._cache=new Map,this.blocked=new Set,this.parentOrders=new Map,this.events=au(),this.config=Kr(t,n),this.events.emit("config",this.config)}setConfig(t,n){!t||(n&&(this.defaults=n),this.userConfig=t,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=Kr(t,this.defaults),this.events.emit("config",this.config))}async applyExtractors(t,n,r=new Set){const o={get original(){return t},code:t,id:n};for(const s of this.config.extractors){const i=await s.extract(o);if(i)for(const l of i)r.add(l)}return r}makeContext(t,n){const r={rawSelector:t,currentSelector:n[1],theme:this.config.theme,generator:this,variantHandlers:n[2],constructCSS:(...o)=>this.constructCustomCSS(r,...o),variantMatch:n};return r}async parseToken(t,n){var c;if(this.blocked.has(t))return;const r=`${t}${n?` ${n}`:""}`;if(this._cache.has(r))return this._cache.get(r);let o=t;for(const u of this.config.preprocess)o=u(t);if(this.isBlocked(o)){this.blocked.add(t),this._cache.set(r,null);return}const s=this.matchVariants(t,o);if(!s||this.isBlocked(s[1])){this.blocked.add(t),this._cache.set(r,null);return}const i=this.makeContext(t,[n||s[0],s[1],s[2],s[3]]);this.config.details&&(i.variants=[...s[3]]);const l=this.expandShortcut(i.currentSelector,i),a=l?await this.stringifyShortcuts(i.variantMatch,i,l[0],l[1]):(c=await this.parseUtil(i.variantMatch,i))==null?void 0:c.map(u=>this.stringifyUtil(u,i)).filter(Yc);if(a!=null&&a.length)return this._cache.set(r,a),a;this._cache.set(r,null)}async generate(t,n={}){const{id:r,scope:o,preflights:s=!0,safelist:i=!0,minify:l=!1}=n,a=oe(t)?await this.applyExtractors(t,r):Array.isArray(t)?new Set(t):t;i&&this.config.safelist.forEach($=>a.add($));const c=l?"":`
`,u=new Set([Hn]),f=new Set,h=new Map;let y={};const b=Array.from(a).map(async $=>{var C;if(f.has($))return;const g=await this.parseToken($);if(g!=null){f.add($);for(const j of g){const N=j[3]||"",q=(C=j[4])==null?void 0:C.layer;h.has(N)||h.set(N,[]),h.get(N).push(j),q&&u.add(q)}}});await Promise.all(b),await(async()=>{if(!s)return;const $={generator:this,theme:this.config.theme},g=new Set([]);this.config.preflights.forEach(({layer:C=Wn})=>{u.add(C),g.add(C)}),y=Object.fromEntries(await Promise.all(Array.from(g).map(async C=>{const N=(await Promise.all(this.config.preflights.filter(q=>(q.layer||Wn)===C).map(async q=>await q.getCSS($)))).filter(Boolean).join(c);return[C,N]})))})();const m=this.config.sortLayers(Array.from(u).sort(($,g)=>{var C,j;return((C=this.config.layers[$])!=null?C:0)-((j=this.config.layers[g])!=null?j:0)||$.localeCompare(g)})),w={},p=$=>{if(w[$])return w[$];let g=Array.from(h).sort((j,N)=>{var q,A,_;return((q=this.parentOrders.get(j[0]))!=null?q:0)-((A=this.parentOrders.get(N[0]))!=null?A:0)||((_=j[0])==null?void 0:_.localeCompare(N[0]||""))||0}).map(([j,N])=>{const q=N.length,A=N.filter(L=>{var F;return(((F=L[4])==null?void 0:F.layer)||Hn)===$}).sort((L,F)=>{var T,J,K,Y;return L[0]-F[0]||(((T=L[4])==null?void 0:T.sort)||0)-(((J=F[4])==null?void 0:J.sort)||0)||((K=L[1])==null?void 0:K.localeCompare(F[1]||""))||((Y=L[2])==null?void 0:Y.localeCompare(F[2]||""))||0}).map(([,L,F,,T,,J])=>{var Y;const K=L&&bu(L,o);return[[[K!=null?K:"",(Y=T==null?void 0:T.sort)!=null?Y:0]],F,!!(J!=null?J:T==null?void 0:T.noMerge)]});if(!A.length)return;const _=A.reverse().map(([L,F,T],J)=>{if(!T&&this.config.mergeSelectors)for(let Y=J+1;Y<q;Y++){const ee=A[Y];if(ee&&!ee[2]&&(L&&ee[0]||L==null&&ee[0]==null)&&ee[1]===F)return L&&ee[0]&&ee[0].push(...L),null}const K=L?Ht(L.sort((Y,ee)=>{var Pe;return Y[1]-ee[1]||((Pe=Y[0])==null?void 0:Pe.localeCompare(ee[0]||""))||0}).map(Y=>Y[0]).filter(Boolean)):[];return K.length?`${K.join(`,${c}`)}{${F}}`:F}).filter(Boolean).reverse().join(c);if(!j)return _;const M=j.split(" $$ ");return`${M.join("{")}{${c}${_}${c}}${M.map(L=>"").join("}")}`}).filter(Boolean).join(c);s&&(g=[y[$],g].filter(Boolean).join(c));const C=l?"":`/* layer: ${$} */${c}`;return w[$]=g?C+g:""},v=($=m,g)=>$.filter(C=>!(g!=null&&g.includes(C))).map(C=>p(C)||"").filter(Boolean).join(c);return{get css(){return v()},layers:m,matched:f,getLayers:v,getLayer:p}}matchVariants(t,n){const r=new Set,o=[];let s=n||t,i=!1;const l={rawSelector:t,theme:this.config.theme,generator:this};for(;;){i=!1;for(const a of this.config.variants){if(!a.multiPass&&r.has(a))continue;let c=a.match(s,l);if(!!c){oe(c)&&(c={matcher:c}),s=c.matcher,o.unshift(c),r.add(a),i=!0;break}}if(!i)break;if(o.length>500)throw new Error(`Too many variants applied to "${t}"`)}return[t,s,o,r]}applyVariants(t,n=t[4],r=t[1]){const s=n.slice().sort((c,u)=>(c.order||0)-(u.order||0)).reduceRight((c,u)=>f=>{var b,m,w;const h=((b=u.body)==null?void 0:b.call(u,f.entries))||f.entries,y=Array.isArray(u.parent)?u.parent:[u.parent,void 0];return((m=u.handle)!=null?m:yu)({...f,entries:h,selector:((w=u.selector)==null?void 0:w.call(u,f.selector,h))||f.selector,parent:y[0]||f.parent,parentOrder:y[1]||f.parentOrder,layer:u.layer||f.layer,sort:u.sort||f.sort},c)},c=>c)({prefix:"",selector:$u(r),pseudo:"",entries:t[2]}),{parent:i,parentOrder:l}=s;i!=null&&l!=null&&this.parentOrders.set(i,l);const a={selector:vu([s.prefix,s.selector,s.pseudo].join("")),entries:s.entries,parent:i,layer:s.layer,sort:s.sort,noMerge:s.noMerge};for(const c of this.config.postprocess)c(a);return a}constructCustomCSS(t,n,r){const o=mt(n);if(oe(o))return o;const{selector:s,entries:i,parent:l}=this.applyVariants([0,r||t.rawSelector,o,void 0,t.variantHandlers]),a=`${s}{${zn(i)}}`;return l?`${l}{${a}}`:a}async parseUtil(t,n,r=!1,o){var u,f;const[s,i,l]=oe(t)?this.matchVariants(t):t;this.config.details&&(n.rules=(u=n.rules)!=null?u:[]);const a=this.config.rulesStaticMap[i];if(a&&a[1]&&(r||!((f=a[2])!=null&&f.internal))){this.config.details&&n.rules.push(a[3]);const h=a[0],y=mt(a[1]),b=a[2];return oe(y)?[[h,y,b]]:[[h,s,y,b,l]]}n.variantHandlers=l;const{rulesDynamic:c}=this.config;for(const[h,y,b,m]of c){if((m==null?void 0:m.internal)&&!r)continue;let w=i;if(m!=null&&m.prefix){const g=ue(m.prefix);if(o){const C=ue(o);if(!g.some(j=>C.includes(j)))continue}else{const C=g.find(j=>i.startsWith(j));if(C==null)continue;w=i.slice(C.length)}}const p=w.match(y);if(!p)continue;const v=await b(p,n);if(!v)continue;this.config.details&&n.rules.push([y,b,m]);const $=Bc(v).filter(g=>g.length);if($.length)return $.map(g=>oe(g)?[h,g,m]:[h,s,g,m,l])}}stringifyUtil(t,n){var b;if(!t)return;if(qr(t))return[t[0],void 0,t[1],void 0,t[2],this.config.details?n:void 0,void 0];const{selector:r,entries:o,parent:s,layer:i,sort:l,noMerge:a}=this.applyVariants(t),c=zn(o);if(!c)return;const{layer:u,sort:f,...h}=(b=t[3])!=null?b:{},y={...h,layer:i!=null?i:u,sort:l!=null?l:f};return[t[0],r,c,s,y,this.config.details?n:void 0,a]}expandShortcut(t,n,r=5){var l;if(r===0)return;const o=this.config.details?a=>{var c;n.shortcuts=(c=n.shortcuts)!=null?c:[],n.shortcuts.push(a)}:Jc;let s,i;for(const a of this.config.shortcuts){let c=t;if((l=a[2])!=null&&l.prefix){const f=ue(a[2].prefix).find(h=>t.startsWith(h));if(f==null)continue;c=t.slice(f.length)}if(Vc(a)){if(a[0]===c){s=s||a[2],i=a[1],o(a);break}}else{const u=c.match(a[0]);if(u&&(i=a[1](u,n)),i){s=s||a[2],o(a);break}}}if(oe(i)&&(i=tu(i.trim()).split(/\s+/g)),!i){const[a,c]=oe(t)?this.matchVariants(t):t;if(a!==c){const u=this.expandShortcut(c,n,r-1);u&&(i=u[0].map(f=>oe(f)?a.replace(c,f):f))}}if(!!i)return[i.flatMap(a=>{var c;return(oe(a)?(c=this.expandShortcut(a,n,r-1))==null?void 0:c[0]:void 0)||[a]}).filter(Boolean),s]}async stringifyShortcuts(t,n,r,o={layer:this.config.shortcutsLayer}){var u;const s=new Zc,i=(await Promise.all(Ht(r).map(async f=>{const h=oe(f)?await this.parseUtil(f,n,!0,o.prefix):[[1/0,"{inline}",mt(f),void 0,[]]];return h||nu(`unmatched utility "${f}" in shortcut "${t[1]}"`),h||[]}))).flat(1).filter(Boolean).sort((f,h)=>f[0]-h[0]),[l,,a]=t,c=[];for(const f of i){if(qr(f)){c.push([f[0],void 0,f[1],void 0,f[2],n,void 0]);continue}const{selector:h,entries:y,parent:b,sort:m,noMerge:w}=this.applyVariants(f,[...f[4],...a],l);s.getFallback(h,b,[[],f[0]])[0].push([y,!!(w!=null?w:(u=f[3])==null?void 0:u.noMerge),m!=null?m:0])}return c.concat(s.map(([f,h],y,b)=>{const m=(p,v,$)=>{const g=Math.max(...$.map(j=>j[1])),C=$.map(j=>j[0]);return(p?[C.flat(1)]:C).map(j=>{const N=zn(j);if(N)return[h,y,N,b,{...o,noMerge:v,sort:g},n,void 0]})};return[[f.filter(([,p])=>p).map(([p,,v])=>[p,v]),!0],[f.filter(([,p])=>!p).map(([p,,v])=>[p,v]),!1]].map(([p,v])=>[...m(!1,v,p.filter(([$])=>$.some(g=>g[0]===Vr))),...m(!0,v,p.filter(([$])=>$.every(g=>g[0]!==Vr)))])}).flat(2).filter(Boolean))}isBlocked(t){return!t||this.config.blocklist.some(n=>oe(n)?n===t:n.test(t))}}function mu(e,t){return new hu(e,t)}const gu=/\s\$\$\s+/g,pu=e=>e.match(/\s\$\$\s/);function bu(e,t){return pu(e)?e.replace(gu,t?` ${t} `:" "):t?`${t} ${e}`:e}function vu(e){const t=e.match(/::[\w-]+(\([\w-]+\))?/g);if(t){for(const n of t)e=e.replace(n,"");e+=t.join("")}return e}const Yr=/^\[(.+?)(~?=)"(.*)"\]$/;function $u(e){return Yr.test(e)?e.replace(Yr,(t,n,r,o)=>`[${Cn(n)}${r}"${Cn(o)}"]`):`.${Cn(e)}`}function yu(e,t){return t(e)}const wu={windblade:{colors:{},miscColors:{transparent:"transparent",inherit:"inherit",currentColor:"currentColor"},proportions:{},miscSizes:{0:"0px",px:"1px",half:"50%",full:"100%",auto:"auto",min:"min-content",max:"max-content",fit:"fit-content"},time:{baseUnitMs:0,functions:{default:"linear"}}}};function zt(e,t=2){let n=e;for(;n.length<t;)n=`0${n}`;return n}function xu(e){return e*(Math.PI/180)}function ku(e){return e*(180/Math.PI)}function H(e,t,n){return Math.min(Math.max(e,t),n)}function Ne(e,t){let[n,r,o,s]=t,i=s<1?`/${xe(s,5)}`:"";switch(e){case"rgb":case"rgba":return s<1?`rgba(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)}, ${xe(s,5)})`:`rgb(${Math.round(n*255)}, ${Math.round(r*255)}, ${Math.round(o*255)})`;case"oklab":case"oklch":return`${e}(${xe(n*100,6)}% ${xe(r,6)} ${xe(o,6)}${i})`;default:return`color(${e} ${xe(n,6)} ${xe(r,6)} ${xe(o,6)}${i})`}}function at(e,t){let n=[...e];for(let r=0;r<t.length;r++){let o=0;for(let s=0;s<t[r].length;s++)o+=e[s]*t[r][s];n[r]=o}return n}function xe(e,t=2){let n=10**t;return Math.round(e*n)/n}var Su=[[.4123907992659593,.357584339383878,.1804807884018343],[.2126390058715102,.715168678767756,.0721923153607337],[.0193308187155918,.119194779794626,.9505321522496607]],_u=[[3.240969941904522,-1.537383177570094,-.4986107602930034],[-.9692436362808793,1.8759675015077202,.0415550574071756],[.0556300796969937,-.2039769588889766,1.0569715142428782]],Cu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],V=[[4.0767416621,-3.3077115913,.2309699292],[-1.2684380046,2.6097574011,-.3413193965],[-.0041960863,-.7034186147,1.707614701]],zu=[[.4122214708,.5363325363,.0514459929],[.2119034982,.6806995451,.1073969566],[.0883024619,.2817188376,.6299787005]],ju=[[1,.39633779217376774,.2158037580607588],[1,-.10556134232365633,-.0638541747717059],[1,-.08948418209496574,-1.2914855378640917]];function Tu(e,t){let n=[1/0,1/0,1/0,1/0,1/0],r=1/0,o=1/0,s=1/0;-1.88170328*e-.80936493*t>1?(n=[1.19086277,1.76576728,.59662641,.75515197,.56771245],r=4.0767416621,o=-3.3077115913,s=.2309699292):1.81444104*e-1.19445276*t>1?(n=[.73956515,-.45954404,.08285427,.1254107,.14503204],r=-1.2684380046,o=2.6097574011,s=-.3413193965):(n=[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167],r=-.0041960863,o=-.7034186147,s=1.707614701);let i=n[0]+n[1]*e+n[2]*t+n[3]*e*e+n[4]*e*t,l=.3963377774*e+.2158037573*t,a=-.1055613458*e-.0638541728*t,c=-.0894841775*e-1.291485548*t;{let u=1+i*l,f=1+i*a,h=1+i*c,y=u**3,b=f**3,m=h**3,w=3*l*u**2,p=3*a*f**2,v=3*c*h**2,$=6*l**2*u,g=6*a**2*f,C=6*c**2*h,j=r*y+o*b+s*m,N=r*w+o*p+s*v,q=r*$+o*g+s*C;i=i-j*N/(N*N-.5*j*q)}return i}function Ou(e,t){let n=Tu(e,t),[r,o,s]=Wt(Fn([1,n*e,n*t,1])),i=Math.cbrt(1/Math.max(r,o,s)),l=i*n;return{L:i,C:l}}function Mu(e,t,n,r,o){let s=Ou(e,t);if((n-o)*s.C-(s.L-o)*r<=0)return s.C*o/(r*s.L+s.C*(o-n));let i=s.C*(o-1)/(r*(s.L-1)+s.C*(o-n)),l=n-o,a=r,c=.3963377774*e+.2158037573*t,u=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=l+a*c,y=l+a*u,b=l+a*f,m=o*(1-i)+i*n,w=i*r,p=m+w*c,v=m+w*u,$=m+w*f,g=[[p**3,v**3,$**3],[3*h*p**2,3*y*v**2,3*b*$**2],[6*h**2*p,6*y**2*v,6*b**2*$]],C=V[0][0]*g[0][0]+V[0][1]*g[0][1]+V[0][2]*g[0][2]-1,j=V[0][0]*g[1][0]+V[0][1]*g[1][1]+V[0][2]*g[1][2],N=V[0][0]*g[2][0]+V[0][1]*g[2][1]+V[0][2]*g[2][2],q=j/(j*j-.5*C*N),A=q>=0?-C*q:1/0,_=V[1][0]*g[0][0]+V[1][1]*g[0][1]+V[1][2]*g[0][2]-1,M=V[1][0]*g[1][0]+V[1][1]*g[1][1]+V[1][2]*g[1][2],L=V[1][0]*g[2][0]+V[1][1]*g[2][1]+V[1][2]*g[2][2],F=M/(M*M-.5*_*L),T=F>=0?-_*F:1/0,J=V[2][0]*g[0][0]+V[2][1]*g[0][1]+V[2][2]*g[0][2]-1,K=V[2][0]*g[1][0]+V[2][1]*g[1][1]+V[2][2]*g[1][2],Y=V[2][0]*g[2][0]+V[2][1]*g[2][1]+V[2][2]*g[2][2],ee=K/(K*K-.5*J*Y),Pe=ee>=0?-J*ee:1/0;return i+Math.min(A,T,Pe)}function jn(e){let t=Math.abs(e);return t<=.0031308?e*12.92:1.055*Math.pow(t,1/2.4)-.055}function Tn(e){return Math.abs(e)<=.04045?e/12.92:((Math.abs(e)+.055)/1.055)**2.4}function Un(e){let[t,n,r,o]=e;t=Math.abs(t%360);let s=n*(1-Math.abs(2*r-1)),i=s*(1-Math.abs(t/60%2-1)),l=0,a=0,c=0;0<=t&&t<60?(l=s,a=i):60<=t&&t<120?(l=i,a=s):120<=t&&t<180?(a=s,c=i):180<=t&&t<240?(a=i,c=s):240<=t&&t<300?(l=i,c=s):300<=t&&t<360&&(l=s,c=i);let u=r-s/2;return[l+u,a+u,c+u,o]}function Jr(e){let[t,n,r,o]=e;if(n+r>=1){let i=n/(n+r);return[i,i,i,o]}let s=Un([t,100,50,o]);for(let i=0;i<3;i++)s[i]*=1-n-r,s[i]+=n;return s}function Lu(e,t=2e-4){let[n,r,o,s]=e,i=Math.abs(r)<t&&Math.abs(o)<t?0:ku(Math.atan2(o,r));for(;i<0;)i+=360;for(;i>=360;)i-=360;return[n,Math.sqrt(r**2+o**2),i,s]}function Au(e){let[t,n,r,o]=e;if(t===0)return[0,0,0,o];for(;r<0;)r+=360;for(;r>=360;)r-=360;let s=xu(r);return[t,Math.cos(s)*n,Math.sin(s)*n,o]}function Eu(e){return at(e,Cu)}function Wt(e){let[t,n,r,o]=e,[s,i,l]=at([t**3,n**3,r**3,o],V);return[s,i,l,o]}function Ge(e){let[t,n,r,o]=e;return[jn(t),jn(n),jn(r),o]}function us(e){let[t,n,r,o]=at(e,zu);return[Math.cbrt(t),Math.cbrt(n),Math.cbrt(r),o]}function Zr(e){return at(e,Su)}function Fn(e){return at(e,ju)}function Ut(e){let[t,n,r,o]=Wt(Fn(e));if(t>1.001||t<-.001||n>1.001||n<-.001||r>1.001||r<-.001){let[s,i,l]=e,a=Math.max(1e-5,Math.sqrt(i**2+l**2)),c=H(s,0,1),u=i/a,f=l/a,h=Mu(u,f,s,a,c);return Ge(Wt(Fn([c*(1-h)+h*s,u*(h*a),f*(h*a),o])))}return Ge([t,n,r,o])}function Ft(e){return Ut(Au(e))}function We(e){let[t,n,r,o]=e;return[Tn(t),Tn(n),Tn(r),o]}function Bt(e){return Eu(us(We(e)))}function Gt(e){return Lu(Bt(e))}function Qr(e){return at(e,_u)}function ds(e,t){let[n,r,o,s]=Gt(e);return typeof t.lightness=="number"&&(t.mode==="relative"?n+=t.lightness:n=t.lightness),typeof t.chroma=="number"&&(t.mode==="relative"?r+=t.chroma:r=t.chroma),typeof t.hue=="number"&&(t.mode==="relative"?o+=t.hue:o=t.hue),typeof t.alpha=="number"&&(t.mode==="relative"?s+=t.alpha:s=t.alpha),Ft([n,r,o,s])}var Ru={black:0,silver:12632256,gray:8421504,white:16777215,maroon:8388608,red:16711680,purple:8388736,fuchsia:16711935,green:32768,lime:65280,olive:8421376,yellow:16776960,navy:128,blue:255,teal:32896,aqua:65535,orange:16753920,aliceblue:15792383,antiquewhite:16444375,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,blanchedalmond:16772045,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,limegreen:3329330,linen:16445670,magenta:16711935,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,oldlace:16643558,olivedrab:7048739,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,whitesmoke:16119285,yellowgreen:10145074,rebeccapurple:6697881},eo=Ru,Pu=/-?[0-9.]+%?/g,Nu=/^#[0-9a-f]{3,8}$/i,Du=16**6,Bn=16**4,Gn=16**2;function ke(e){let t=Hu(e),n={get hex(){let[r,o,s,i]=t,l="#";return l+=zt(Math.round(H(r*255,0,255)).toString(16),2),l+=zt(Math.round(H(o*255,0,255)).toString(16),2),l+=zt(Math.round(H(s*255,0,255)).toString(16),2),t[3]<1&&(l+=zt(Math.round(i*255).toString(16),2)),l},get hexVal(){let[r,o,s,i]=t;return i<1&&console.warn(`hexVal converted a semi-transparent color (${i*100}%) to fully opaque`),r=Math.round(H(r*255,0,255)),o=Math.round(H(o*255,0,255)),s=Math.round(H(s*255,0,255)),r*Bn+o*Gn+s},get rgb(){return Ne("rgb",t)},rgbVal:t,get rgba(){return Ne("rgb",t)},rgbaVal:t,get linearRGB(){return Ne("srgb-linear",We(t))},get linearRGBVal(){return We(t)},get p3(){return Ne("display-p3",t)},p3Val:t,get oklab(){return Ne("oklab",Bt(t))},get oklabVal(){return Bt(t)},get oklch(){return Ne("oklch",Gt(t))},get oklchVal(){return Gt(t)},get xyz(){return Ne("xyz-d65",Zr(We(t)))},get xyzVal(){return Zr(We(t))},adjust(r){return ke(ds(t,r))}};return n.toString=()=>n.hex,n}function to(e){if(e>Du)throw new Error("8-digit hex values (with transparency) aren\u2019t supported");let t=e,n=Math.floor(t/Bn);t-=n*Bn;let r=Math.floor(t/Gn);t-=r*Gn;let o=t;return[n/255,r/255,o/255,1]}function je(e,t){let n=e.match(Pu);if(!n)throw new Error(`Unexpected color format: ${e}`);let r=[0,0,0,1];return n.forEach((o,s)=>{o.includes("%")?r[s]=parseFloat(o)/100:!t||t[s]===1/0||t[s]===1?r[s]=parseFloat(o):r[s]=parseFloat(o)/t[s]}),r}function Hu(e){let t=new Error(`Unable to parse color ${JSON.stringify(e)}`);if(e==null||e==null||typeof e=="boolean")throw t;if(Array.isArray(e)){if(e.some(i=>typeof i!="number"))throw new Error(`Color array must be numbers, received ${e}`);if(e.length<3||e.length>4)throw new Error(`Expected [R, G, B, A?], received ${e}`);let[n,r,o,s]=e;return[H(n,0,1),H(r,0,1),H(o,0,1),typeof s=="number"?H(s,0,1):1]}if(typeof e=="number")return to(e);if(typeof e=="string"){let n=e.trim();if(!n)throw new Error("Expected color, received empty string");let r=n.toLowerCase();if(typeof eo[r]=="number")return to(eo[r]);if(Nu.test(r)){let i=r.replace("#",""),l=[0,0,0,1];if(i.length===6||i.length===8)for(let a=0;a<i.length/2;a++){let c=a*2,u=c+2,f=i.substring(c,u);l[a]=parseInt(f,16)/255}else if(i.length===3||i.length===4)for(let a=0;a<i.length;a++){let c=i.charAt(a);l[a]=parseInt(`${c}${c}`,16)/255}else throw new Error(`Hex value "${r}" not a valid sRGB color`);return l}let[o,s]=n.split("(");if(o==="color"){let i=s.indexOf(" ");o=s.substring(0,i),s=s.substring(i)}switch(o){case"rgb":case"rgba":case"srgb":{let[i,l,a,c]=je(s,[255,255,255,1]);return[H(i,0,1),H(l,0,1),H(a,0,1),H(c,0,1)]}case"linear-rgb":case"linear-srgb":case"rgb-linear":case"srgb-linear":{let i=je(s);return Ge(i)}case"hsl":case"hsla":{let[i,l,a,c]=je(s);return Un([i,H(l,0,1),H(a,0,1),H(c,0,1)])}case"hwb":case"hwba":{let[i,l,a,c]=je(s);return Jr([i,H(l,0,1),H(a,0,1),H(c,0,1)])}case"p3":case"display-p3":{let[i,l,a,c]=je(s);return[H(i,0,1),H(l,0,1),H(a,0,1),H(c,0,1)]}case"oklab":return Ut(je(s));case"oklch":return Ft(je(s));case"xyz":case"xyz-d65":return Ge(Qr(je(s)))}}if(typeof e=="object"){let n={...e},r=1;for(let o of Object.keys(n))o==="alpha"?r=H(n[o],0,1):n[o.toLowerCase()]=n[o];if("r"in n&&"g"in n&&"b"in n)return[H(n.r,0,1),H(n.g,0,1),H(n.b,0,1),r];if("h"in n&&"s"in n&&"l"in n)return Un([n.h,H(n.s,0,1),H(n.l,0,1),r]);if("h"in n&&"w"in n&&"b"in n)return Jr([n.h,H(n.w,0,1),H(n.b,0,1),r]);if("l"in n&&"a"in n&&"b"in n)return Ut([n.l,n.a,n.b,r]);if("l"in n&&"c"in n&&"h"in n)return Ft([n.l,n.c,n.h,r]);if("x"in n&&"y"in n&&"z"in n)return Ge(Qr([n.x,n.y,n.z,r]));throw t}throw t}function lr(e,t,n=.5,r="oklab"){let o=H(n,0,1);if(n===0)return ke(e);if(n===1)return ke(t);let s=1-o,i=o,l={oklch:Gt,oklab:Bt,lms:M=>We(us(M)),linearRGB:We,sRGB:M=>M},a={oklch:Ft,oklab:Ut,lms:M=>Wt(Ge(M)),linearRGB:Ge,sRGB:M=>M},c=l[r],u=a[r];if(!c)throw new Error(`Unknown color space "${r}", try "oklab", "oklch", "linearRGB", or "sRGB"`);let[f,h,y,b]=ke(e).rgbVal,[m,w,p,v]=ke(t).rgbVal;r==="oklch"&&(f===h&&h===y||m===w&&w===p)&&(c=l.oklab,u=a.oklab);let[$,g,C,j]=c([f,h,y,b]),[N,q,A,_]=c([m,w,p,v]);return r==="oklch"&&Math.abs(A-C)>180&&(Math.max(C,A)===A?A-=360:C-=360),ke(u([$*s+N*i,g*s+q*i,C*s+A*i,j*s+_*i]))}function fs(e,t,n="oklab"){let r=H(t,-1,1);return r>=0?lr(e,"black",r,n):hs(e,-r)}function hs(e,t,n="oklab"){let r=H(t,-1,1);return r>=0?lr(e,"white",r,n):fs(e,-r)}function It(e){return ke(e).xyzVal[1]}function Wu(e){return xe(ke(e).oklabVal[0],5)}function Uu(e){return It(e)<.36?"dark":"light"}function Fu(e,t){let n=It(e),r=It(t),o=Math.max(n,r),s=Math.min(n,r),i=(o+.05)/(s+.05);return{ratio:i,AA:i>=4.5,AAA:i>=7}}var In={adjust:ds,contrastRatio:Fu,darken:fs,from:ke,lighten:hs,lightness:Wu,lightOrDark:Uu,luminance:It,mix:lr};const ar=e=>{var o,s,i,l,a,c,u;const t=e.dark.l,n=e.dark.c,r=(o=e.dark.a)!=null?o:1;return{dark:{l:t,c:n,a:r},light:{l:(i=(s=e.light)==null?void 0:s.l)!=null?i:1-t,c:(a=(l=e.light)==null?void 0:l.c)!=null?a:n,a:(u=(c=e.light)==null?void 0:c.a)!=null?u:r}}},Bu=(e,t)=>{const n=ar(t);return Object.assign(n,{dark:{h:e},light:{h:e}}),n},Gu=(e,t,n,r=1)=>In.from(`oklch(${e} ${t}, ${n}, ${r})`),Iu=(e,t)=>{const{windblade:n}=e,{colors:r}=n,o={light:{},dark:{}};return Object.entries(r).forEach(([s,i])=>{[i.base,...i.on].forEach((a,c)=>{const u=`--${s}-${c===0?"base":`fg-${c}`}`,{dark:f,light:h}=ar(a);o.dark[u]=In.from(`oklch(${f.l} ${f.c}, ${t}, ${f.a})`).rgba,o.light[u]=In.from(`oklch(${h.l} ${h.c}, ${t}, ${h.a})`).rgba})}),o},Vu=e=>{let t="";return Object.keys(e).forEach(n=>{t+=`${n}: ${e[n]};
`}),t},qu=Object.freeze(Object.defineProperty({__proto__:null,objToCSS:Vu,getLCA:ar,getLCHA:Bu,LCHToCSSColor:Gu,getColorSchemeCSSProps:Iu},Symbol.toStringTag,{value:"Module"})),Xu=(e,t)=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o;if((o=r.windblade.miscColors)!=null&&o[n[2]])return{[t]:n[2]};if(r.windblade.colors[n[2]])return{[t]:`var(--${n[2]}-base)`}}],Ku=e=>[new RegExp(`^(${e})-(.+)$`),(t,{theme:n})=>{const r=n.windblade.colors[t[2]];if(!r)return;const o={background:`var(--${t[2]}-base)`,color:`var(--${t[2]}-fg-1)`};for(let s=1;s<=r.on.length;++s)o[`--fg-${s}`]=`var(--${t[2]}-fg-${s})`;return o}],Yu=(e,t)=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{var o;return(o=r.windblade.miscColors)!=null&&o[n[2]]?{[t]:n[2]}:{[t]:`var(--fg-${n[2]})`}}],Ju=Object.freeze(Object.defineProperty({__proto__:null,colorRule:Xu,colorBgRule:Ku,fgColorRule:Yu},Symbol.toStringTag,{value:"Module"})),Zu={axis:{b:"block",i:"inline"},edges:{bs:"block-start",be:"block-end",is:"inline-start",ie:"inline-end"},blockEdges:{bs:"block-start",be:"block-end"},inlineEdges:{is:"inline-start",ie:"inline-end"},coners:{ss:"start-start",se:"start-end",es:"end-start",ee:"end-end"}},G=e=>e.filter(Boolean).join("-"),ms=(e,t,n,r,o)=>[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"i",t]),G([n,"inline",r]))],gs=(e,t,n,r,o)=>[o(G([e,t]),G([n,r])),o(G([e,"b",t]),G([n,"block",r])),o(G([e,"bs",t]),G([n,"block-start",r])),o(G([e,"be",t]),G([n,"block-end",r])),o(G([e,"i",t]),G([n,"inline",r])),o(G([e,"is",t]),G([n,"inline-start",r])),o(G([e,"ie",t]),G([n,"inline-end",r]))],ps=(e,t,n,r,o)=>[o(G([e,t]),G([n,r])),o(G([e,"ss",t]),G([n,"start-start",r])),o(G([e,"se",t]),G([n,"start-end",r])),o(G([e,"ee",t]),G([n,"end-end",r])),o(G([e,"es",t]),G([n,"end-start",r]))],Qu=Object.freeze(Object.defineProperty({__proto__:null,abbreviations:Zu,axisRules:ms,edgeRules:gs,cornerRules:ps},Symbol.toStringTag,{value:"Module"})),bs={x:["-x"],y:["-y"],z:["-z"],"":["-x","-y"]},no=["top","top center","top left","top right","bottom","bottom center","bottom left","bottom right","left","left center","left top","left bottom","right","right center","right top","right bottom","center","center top","center bottom","center left","center right","center center"],jt=Object.assign({},...no.map(e=>({[e.replace(/ /,"-")]:e})),...no.map(e=>({[e.replace(/\b(\w)\w+/g,"$1").replace(/ /,"")]:e}))),Ce=["inherit","initial","revert","revert-layer","unset"],cr=/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i,ed=/^(-?\d*(?:\.\d+)?)$/i,vs=/^(px)$/i,td=["color","border-color","background-color","flex-grow","flex","flex-shrink","caret-color","font","gap","opacity","visibility","z-index","font-weight","zoom","text-shadow","transform","box-shadow","background-position","left","right","top","bottom","object-position","max-height","min-height","max-width","min-width","height","width","border-width","margin","padding","outline-width","outline-offset","font-size","line-height","text-indent","vertical-align","border-spacing","letter-spacing","word-spacing","stroke","filter","backdrop-filter","fill","mask","mask-size","mask-border","clip-path","clip","border-radius"];function be(e){return e.toFixed(10).replace(/\.0+$/,"").replace(/(\.\d+?)0+$/,"$1")}function nd(e){const t=e.match(cr);if(!t)return;const[,n,r]=t,o=parseFloat(n);if(r&&!Number.isNaN(o))return`${be(o)}${r}`}function rd(e){if(e==="auto"||e==="a")return"auto"}function od(e){if(e.match(vs))return`1${e}`;const t=e.match(cr);if(!t)return;const[,n,r]=t,o=parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${be(o)}${r}`:`${be(o/4)}rem`}function sd(e){if(e.match(vs))return`1${e}`;const t=e.match(cr);if(!t)return;const[,n,r]=t,o=parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${be(o)}${r}`:`${be(o)}px`}function id(e){if(!ed.test(e))return;const t=parseFloat(e);if(!Number.isNaN(t))return be(t)}function ld(e){e.endsWith("%")&&(e=e.slice(0,-1));const t=parseFloat(e);if(!Number.isNaN(t))return`${be(t/100)}`}function ad(e){if(e==="full")return"100%";const[t,n]=e.split("/"),r=parseFloat(t)/parseFloat(n);if(!Number.isNaN(r))return r===0?"0":`${be(r*100)}%`}const cd=/^\[(color|length|position|quoted|string):/i;function an(e,t){if(e&&e.startsWith("[")&&e.endsWith("]")){let n,r;const o=e.match(cd);if(o?(t||(r=o[1]),n=e.slice(o[0].length,-1)):n=e.slice(1,-1),!n)return;let s=0;for(const i of n)if(i==="[")s+=1;else if(i==="]"&&(s-=1,s<0))return;if(s)return;switch(r){case"string":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_");case"quoted":return n.replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(["\\])/g,"\\$1").replace(/^(.+)$/,'"$1"')}return n.replace(/(url\(.*?\))/g,i=>i.replace(/_/g,"\\_")).replace(/(^|[^\\])_/g,"$1 ").replace(/\\_/g,"_").replace(/(?:calc|clamp|max|min)\((.*)/g,i=>{const l=[];return i.replace(/var\((--.+?)[,)]/g,(a,c)=>(l.push(c),a.replace(c,"--un-calc"))).replace(/(-?\d*\.?\d(?!\b-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 ").replace(/--un-calc/g,()=>l.shift())})}}function ud(e){return an(e)}function dd(e){return an(e,"color")}function fd(e){return an(e,"length")}function hd(e){return an(e,"position")}function md(e){if(e.match(/^\$\S/))return`var(--${ir(e.slice(1))})`}function gd(e){const t=e.match(/^(-?[0-9.]+)(s|ms)?$/i);if(!t)return;const[,n,r]=t,o=parseFloat(n);if(!Number.isNaN(o))return o===0&&!r?"0s":r?`${be(o)}${r}`:`${be(o)}ms`}function pd(e){const t=e.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);if(!t)return;const[,n,r]=t,o=parseFloat(n);if(!Number.isNaN(o))return o===0?"0":r?`${be(o)}${r}`:`${be(o)}deg`}function bd(e){if(Ce.includes(e))return e}function vd(e){if(e.split(",").every(t=>td.includes(t)))return e}function $d(e){if(["top","left","right","bottom","center"].includes(e))return e}const yd={__proto__:null,numberWithUnit:nd,auto:rd,rem:od,px:sd,number:id,percent:ld,fraction:ad,bracket:ud,bracketOfColor:dd,bracketOfLength:fd,bracketOfPosition:hd,cssvar:md,time:gd,degree:pd,global:bd,properties:vd,position:$d},R=ru(yd);function On(e,t){let n=e.colors,r=-1;for(const o of t){if(r+=1,n&&typeof n!="string"){const s=t.slice(r).join("-").replace(/(-[a-z])/g,i=>i.slice(1).toUpperCase());if(n[s])return n[s];if(n[o]){n=n[o];continue}}return}return n}function $s(e,t){const n=e.split(/(?:\/|:)/);return n[0]===`[${t}`?[n.slice(0,2).join(":"),n[2]]:n}function wd(e,t){const[n,r]=$s(e,"color"),o=n.replace(/([a-z])([0-9])/g,"$1-$2").split(/-/g),[s]=o;if(!s)return;let i;const l=R.bracketOfColor(n),a=l||n;a.match(/^#[\da-fA-F]+/g)?i=a:a.match(/^hex-[\da-fA-F]+/g)?i=`#${a.slice(4)}`:n.startsWith("$")&&(i=R.cssvar(n)),i=i||l;let c="DEFAULT";if(!i){let u;const[f]=o.slice(-1);f.match(/^\d+$/)?(c=f,u=On(t,o.slice(0,-1)),!u||typeof u=="string"?i=void 0:i=u[c]):(u=On(t,o),!u&&o.length<=2&&([,c=c]=o,u=On(t,[s])),typeof u=="string"?i=u:c&&u&&(i=u[c]))}return{opacity:r,name:s,no:c,color:i,cssColor:_d(i),alpha:R.bracket.cssvar.percent(r!=null?r:"")}}function xd(e,t,n){return([,r],{theme:o})=>{const s=wd(r,o);if(!s)return;const{alpha:i,color:l,cssColor:a}=s,c={};if(a?i!=null?c[e]=Mn(a,i):(c[`--un-${t}-opacity`]=Cd(a),c[e]=Mn(a,`var(--un-${t}-opacity)`)):l&&(c[e]=Mn(l,i)),(n==null?void 0:n(c))!==!1)return c}}function Z(e,t){return Ce.map(n=>[`${e}-${n}`,{[t!=null?t:e]:n}])}function kd(e,t,n,r){if(e===""||(oe(r)&&(r=[r]),r.length===0))return;const o=e.length;let s=0;for(let i=0;i<o;i++)switch(e[i]){case t:s++;break;case n:if(--s<0)return;break;default:for(const l of r){const a=l.length;if(a&&l===e.slice(i,i+a)&&s===0)return i===0||i===o-a?void 0:[e.slice(0,i),e.slice(i+a)]}}return[e,""]}function Vn(e,t,n){n=n!=null?n:10;const r=[];let o=0;for(;e!=="";){if(++o>n)return;const s=kd(e,"(",")",t);if(!s)return;const[i,l]=s;r.push(i),e=l}if(r.length>0)return r}const ur=["hsl","hsla","hwb","lab","lch","oklab","oklch","rgb","rgba"],ys=["%alpha","<alpha-value>"],Sd=new RegExp(ys.map(e=>Fc(e)).join("|"));function _d(e=""){const t=zd(e);if(t==null||t===!1)return;const{type:n,components:r,alpha:o}=t,s=n.toLowerCase();if(r.length!==0&&!(["rgba","hsla"].includes(s)&&o==null)&&!(ur.includes(s)&&![1,3].includes(r.length)))return{type:s,components:r.map(i=>typeof i=="string"?i.trim():i),alpha:typeof o=="string"?o.trim():o}}function Cd(e){var n;const t=(n=e.alpha)!=null?n:1;return typeof t=="string"&&ys.includes(t)?1:t}function Mn(e,t){if(typeof e=="string")return e.replace(Sd,`${t!=null?t:1}`);const{components:n}=e;let{alpha:r,type:o}=e;return r=t!=null?t:r,o=o.toLowerCase(),["hsla","hsl","rgba","rgb"].includes(o)?`${o.replace("a","")}a(${n.join(",")}${r==null?"":`,${r}`})`:(r=r==null?"":` / ${r}`,ur.includes(o)?`${o}(${n.join(" ")}${r})`:`color(${o} ${n.join(" ")}${r})`)}function zd(e){if(!e)return;let t=jd(e);if(t!=null||(t=Td(e),t!=null)||(t=Od(e),t!=null)||(t=Ld(e),t!=null)||(t=Ad(e),t!=null))return t}function jd(e){const[,t]=e.match(/^#([\da-f]+)$/i)||[];if(!!t)switch(t.length){case 3:case 4:const n=Array.from(t,o=>Number.parseInt(o,16)).map(o=>o<<4|o);return{type:"rgb",components:n.slice(0,3),alpha:t.length===3?void 0:Math.round(n[3]/255*100)/100};case 6:case 8:const r=Number.parseInt(t,16);return{type:"rgb",components:t.length===6?[r>>16&255,r>>8&255,r&255]:[r>>24&255,r>>16&255,r>>8&255],alpha:t.length===6?void 0:Math.round((r&255)/255*100)/100}}}function Td(e){const t={rebeccapurple:[102,51,153,1]}[e];if(t!=null)return{type:"rgb",components:t.slice(0,3),alpha:t[3]}}function Od(e){const t=e.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);if(!t)return;const[,n,r]=t,o=Vn(r,",",5);if(o){if([3,4].includes(o.length))return{type:n,components:o.slice(0,3),alpha:o[3]};if(o.length!==1)return!1}}const Md=new RegExp(`^(${ur.join("|")})\\((.+)\\)$`,"i");function Ld(e){const t=e.match(Md);if(!t)return;const[,n,r]=t,o=ws(`${n} ${r}`);if(o){const{alpha:s,components:[i,...l]}=o;return{type:i,components:l,alpha:s}}}function Ad(e){const t=e.match(/^color\((.+)\)$/);if(!t)return;const n=ws(t[1]);if(n){const{alpha:r,components:[o,...s]}=n;return{type:o,components:s,alpha:r}}}function ws(e){const t=Vn(e," ");if(!t)return;let n=t.length;if(t[n-2]==="/")return{components:t.slice(0,n-2),alpha:t[n-1]};if(t[n-2]!=null&&(t[n-2].endsWith("/")||t[n-1].startsWith("/"))){const s=t.splice(n-2);t.push(s.join(" ")),--n}const r=Vn(t[n-1],"/",2);if(!r)return;if(r.length===1||r[r.length-1]==="")return{components:t};const o=r.pop();return t[n-1]=r.join("/"),{components:t,alpha:o}}const xs=(e,t,n)=>{var s;const r=t.windblade.proportions[e];if(r!==void 0)return`${r}${n}`;const o=(s=t.windblade.miscSizes)==null?void 0:s[e];if(o!==void 0)return`${o}`;if(!Number.isNaN(Number(e)))return`${e}${n}`},cn=(e,t,n)=>[new RegExp(`^${e}-(.+)$`),([r,o],{theme:s})=>{var c;const i=(c=n==null?void 0:n.defaultUnit)!=null?c:"rem",l=R.bracket(o);if(l!==void 0)return{[t]:l};let a=xs(o,s,i);if(a!==void 0)return n!=null&&n.postprocess&&(a=n.postprocess(a)),{[t]:a}}],Ed=(e,t,n,r)=>ms(e,t,n,r,cn),Rd=(e,t,n,r)=>gs(e,t,n,r,cn),Pd=(e,t,n,r)=>ps(e,t,n,r,cn),Nd=Object.freeze(Object.defineProperty({__proto__:null,resolve:xs,rule:cn,axisRules:Ed,edgeRules:Rd,cornerRules:Pd},Symbol.toStringTag,{value:"Module"})),Dd=(e,t,n)=>[new RegExp(`^(${e})-(.+)$`),(r,{theme:o})=>{var l;const s={},i=`${o.windblade.proportions[r[2]]*o.windblade.time.baseUnitMs}ms`;if(i!==void 0)return s[t]=(l=n==null?void 0:n(i))!=null?l:i,s}],Hd=(e,t)=>[new RegExp(`^(${e})-(.+)$`),(n,{theme:r})=>{const o={},s=r.windblade.time.functions[n[2]];if(s!==void 0)return o[t]=s,o}],Wd=Object.freeze(Object.defineProperty({__proto__:null,durationRule:Dd,timingFunctionRule:Hd},Symbol.toStringTag,{value:"Module"})),Q=Object.freeze(Object.defineProperty({__proto__:null,color:Ju,logical:Qu,size:Nd,time:Wd},Symbol.toStringTag,{value:"Module"})),ro=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},Le=(...e)=>e.reduce((t,n)=>{if(Array.isArray(n))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(n).forEach(r=>{["__proto__","constructor","prototype"].includes(r)||(Array.isArray(t[r])&&Array.isArray(n[r])?t[r]=Le.options.mergeArrays?Array.from(new Set(t[r].concat(n[r]))):n[r]:ro(t[r])&&ro(n[r])?t[r]=Le(t[r],n[r]):t[r]=n[r])}),t},{}),ks={mergeArrays:!0};Le.options=ks;Le.withOptions=(e,...t)=>{Le.options=Object.assign({mergeArrays:!0},e);const n=Le(...t);return Le.options=ks,n};const Vt=Object.entries,Ee=Object.keys,Ss=e=>{if(e instanceof Map){const t=[];return e.forEach((n,r)=>{t.push({name:r,value:Ss(n)})}),t}return e},dr=e=>Ss(e),k=e=>e.replace(/&/g,"&amp;").trimStart().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\n/g,"&#10;"),{color:gt,logical:Ye}=Q,un=()=>{const e=[gt.colorRule("bg","background-color"),gt.colorBgRule("bg"),gt.fgColorRule("bg-fg","background-color")],t=`
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
  `;return{rules:e,docs:t}},fr=()=>{const e=[["bg-none",{"background-image":"none"}],...Ee(Ye.abbreviations.edges).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ye.abbreviations.edges[n]}), var(--wb-gradient-stops))`}]),...Ee(Ye.abbreviations.coners).map(n=>[`bg-gradient-to-${n}`,{"--wb-gradient-stops":"var(--wb-gradient-from, transparent), var(--wb-gradient-to, transparent)","background-image":`linear-gradient(to var(--${Ye.abbreviations.coners[n]}), var(--wb-gradient-stops))`}])],t=`
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
  `;return{rules:e,docs:t}},hr=()=>{const e=[gt.colorRule("from","--wb-gradient-from"),gt.colorRule("to","--wb-gradient-to")],t=`
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
  `;return{rules:e,docs:t}},Ud=Object.freeze(Object.defineProperty({__proto__:null,bgColor:un,backgroundImage:fr,gradientColorStops:hr},Symbol.toStringTag,{value:"Module"})),{color:qt,logical:Je}=Q,dn=()=>{const e=[...Je.edgeRules("border","color","border","color",qt.colorRule),...Je.edgeRules("border","color-fg","border","color",qt.fgColorRule)],t=`
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
            border-color-fg
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
  `;return{rules:e,docs:t}},fn=()=>{const e=[qt.colorRule("outline","outline-color"),qt.fgColorRule("outline-fg","outline-color")],t=`
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
  `;return{rules:e,docs:t}},Fd=Object.freeze(Object.defineProperty({__proto__:null,borderColor:dn,outlineColor:fn},Symbol.toStringTag,{value:"Module"})),{color:qn}=Q,mr=()=>{const e=[qn.colorRule("accent","accent-color")],t=`
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
  `;return{rules:e,docs:t}},gr=()=>{const e=[qn.colorRule("caret","caret-color"),qn.fgColorRule("caret-fg","caret-color")],t=`
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
  `;return{rules:e,docs:t}},Bd=Object.freeze(Object.defineProperty({__proto__:null,accentColor:mr,caretColor:gr},Symbol.toStringTag,{value:"Module"})),{color:Xt}=Q,hn=()=>{const e=[Xt.colorRule("fill","fill"),Xt.fgColorRule("fill-fg","fill")],t=`
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
  `;return{rules:e,docs:t}},mn=()=>{const e=[Xt.colorRule("stroke","stroke"),Xt.fgColorRule("stroke-fg","stroke")],t=`
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
  `;return{rules:e,docs:t}},Gd=Object.freeze(Object.defineProperty({__proto__:null,fill:hn,stroke:mn},Symbol.toStringTag,{value:"Module"})),{color:Kt}=Q,gn=()=>{const e=[Kt.colorRule("text","color"),Kt.fgColorRule("text-fg","color")],t=`
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
  `;return{rules:e,docs:t}},pn=()=>{const e=[Kt.colorRule("decoration","text-decoration-color"),Kt.fgColorRule("decoration-fg","text-decoration-color")],t=`
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
  `;return{rules:e,docs:t}},Id=Object.freeze(Object.defineProperty({__proto__:null,textColor:gn,textDecorationColor:pn},Symbol.toStringTag,{value:"Module"})),{getColorSchemeCSSProps:Vd,objToCSS:dt}=qu,bn=()=>{const e=[[/^scheme-(dark|light|inverse|auto)-(\d+)$/,(n,{rawSelector:r,theme:o})=>{var c;const s=Number((c=n[2])!=null?c:0);if(Number.isNaN(s))return;const i=ir(r),{dark:l,light:a}=Vd(o,s);switch(n[1]){case"light":return`
              .${i} {
                ${dt(a)}
              }
            `;case"dark":return`
              .${i} {
                ${dt(l)}
              }
            `;default:return`
              .${i},
              .scheme-dark.${i},
              .scheme-dark .${i} {
                ${dt(l)}
              }
              .scheme-light.${i},
              .scheme-light .${i} {
                ${dt(a)}
              }
              @media (prefers-color-scheme: light) { .${i} {
                  ${dt(a)}
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
              <option value="dark" />
              <option value="light" />
            </select>
          </util>
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
  `;return{rules:e,docs:t}},qd=Object.freeze(Object.defineProperty({__proto__:null,colorScheme:bn},Symbol.toStringTag,{value:"Module"})),_s=[...un().rules,...fr().rules,...hr().rules,...gn().rules,...pn().rules,...dn().rules,...fn().rules,...mr().rules,...gr().rules,...hn().rules,...mn().rules,...bn().rules],Cs=new Map([["Background",new Map([["Background Color",un().docs],["Background Gradient",fr().docs],["Background Gradient Stops",hr().docs]])],["Text",new Map([["Text Color",gn().docs],["Text Decoration Color",pn().docs]])],["Border",new Map([["Border Color",dn().docs],["Outline Color",fn().docs]])],["Other",new Map([["Color Scheme",bn().docs],["Accent color",mr().docs],["Caret color",gr().docs],["Fill",hn().docs],["Stroke Color",mn().docs]])]]),Xd=Object.freeze(Object.defineProperty({__proto__:null,default:Cs,backgrounds:Ud,borders:Fd,interactivity:Bd,svg:Gd,typography:Id,accessibility:qd},Symbol.toStringTag,{value:"Module"})),Kd=new Map([...Cs]),Yd=dr(Kd),Jd=Object.freeze(Object.defineProperty({__proto__:null,default:Yd,rules:Xd},Symbol.toStringTag,{value:"Module"})),zs=(e={})=>({name:"@windblade/unocss-preset-color",rules:_s,options:e,prefix:void 0}),Zd=Object.freeze(Object.defineProperty({__proto__:null,default:zs,rules:_s,docs:Jd},Symbol.toStringTag,{value:"Module"})),Qd=(e,t)=>{let n=e;for(Object.entries(t.windblade.proportions).forEach(([r,o])=>{n=n.replaceAll(`$${r}`,o.toString())});n.includes("$(");){const r=n.indexOf("$")+1,o=n.substring(r),s=0;let i=s,l=0;for(let c=0;c<o.length;++c)if(o[c]==="("&&++l,o[c]===")"&&--l,l===0){i=c+1;break}const a=o.substring(s,i);try{n=n.replace(`$${a}`,Function(`'use strict'; return (${a})`)())}catch{return e}}return n},ef=(e,t)=>({matcher:Qd(e,t.theme)}),js=[ef],tf=`
<div class="grid grid-cols-[auto_$l_auto]"></div>
`,nf=`
<div class="p-s">
  Label
  <!-- Custom underline -->
  <div class="absolute size-i-full size-b-s.2 inset-bottom-$(($s-$s.2)/2)"></div>
</div>
`,pr=`
  <page>
    <h1>Using the $ syntax</h1>
    <p>You can grab proportions from your theme by prefixing their names with <code>$</code>. This is mainly useful inside brackets when you want to set custom values.</p>
    <pre lang="html" code="${k(tf)}" />

    <p>You can also use <code>$</code> to conveniently perform operations with your design tokens without breaking out of your design system or using <code>calc()</code>.</p>
    <pre lang="html" code="${k(nf)}" />

    <p>Note that <code>$</code> is an UnoCSS <a href="https://github.com/unocss/unocss#custom-variants">variant</a> so it works with UnoCSS utilities that come from other presets too!</p>
  </page>
`,rf=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"})),of=new Map([["Usage",new Map([["$ syntax",pr]])]]),sf=dr(of),lf=Object.freeze(Object.defineProperty({__proto__:null,default:sf,dollarSyntax:rf},Symbol.toStringTag,{value:"Module"})),Ts=(e={})=>({name:"@windblade/unocss-preset-dollars",options:e,variants:js,prefix:void 0}),af=Object.freeze(Object.defineProperty({__proto__:null,default:Ts,variants:js,docs:lf},Symbol.toStringTag,{value:"Module"})),oo={mid:"middle",base:"baseline",btm:"bottom",baseline:"baseline",top:"top",start:"top",middle:"middle",bottom:"bottom",end:"bottom","text-top":"text-top","text-bottom":"text-bottom",sub:"sub",super:"super",...Object.fromEntries(Ce.map(e=>[e,e]))};`${Object.keys(oo).join("|")}`;["center","left","right","justify","start","end",...Ce].map(e=>[`text-${e}`,{"text-align":e}]);[xd("outline-color","outline-color"),...["auto","dashed","dotted","double","hidden","solid","groove","ridge","inset","outset",...Ce].map(e=>[`outline-${e}`,{"outline-style":e}])];[...Ce];[...Ce];const Et={all:"all",colors:["color","background-color","border-color","outline-color","text-decoration-color","fill","stroke"].join(","),none:"none",opacity:"opacity",shadow:"box-shadow",transform:"transform"},so=e=>{var t;return(t=R.properties(e))!=null?t:Et[e]};[`${Object.keys(Et).join("|")}`,`${[...Ce,...Object.keys(Et)].join("|")}`,...Z("transition")];const io={thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"};function lo(e,t){var n;return((n=t.lineHeight)==null?void 0:n[e])||R.bracket.cssvar.global.rem(e)}`${Object.keys(io).join("|")}`;[...Ce];[...Z("justify","justify-content"),...Z("justify-items"),...Z("justify-self")];[...Z("content","align-content"),...Z("items","align-items"),...Z("self","align-self")];[...Z("place-content"),...Z("place-items"),...Z("place-self")];[...Z("float"),...Z("clear")];[...Z("box","box-sizing")];[...Z("backface","backface-visibility")];[...Z("pointer-events")];[...Z("resize")];[...Z("select","user-select")];[...Z("content-visibility")];const cf=[[/^content-(.+)$/,([,e])=>({content:R.bracket.cssvar(e)})],["content-empty",{content:'""'}],["content-none",{content:'""'}]];[...Z("case","text-transform")];const ao=["translate","rotate","scale"],qe=["translateX(var(--un-translate-x))","translateY(var(--un-translate-y))","translateZ(var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" "),uf=["translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))","rotate(var(--un-rotate))","rotateX(var(--un-rotate-x))","rotateY(var(--un-rotate-y))","rotateZ(var(--un-rotate-z))","skewX(var(--un-skew-x))","skewY(var(--un-skew-y))","scaleX(var(--un-scale-x))","scaleY(var(--un-scale-y))","scaleZ(var(--un-scale-z))"].join(" ");[(`${Object.keys(jt).join("|")}`,`${Object.keys(jt).join("|")}`),(`${ao.join("|")}`,`${ao.join("|")}`),...Z("transform")];function co([,e,t],{theme:n}){var o,s;const r=(s=(o=n.spacing)==null?void 0:o[t])!=null?s:R.bracket.cssvar.fraction.rem(t);if(r!=null)return[...bs[e].map(i=>[`--un-translate${i}`,r]),["transform",qe]]}function uo([,e,t]){const n=R.bracket.cssvar.fraction.percent(t);if(n!=null)return[...bs[e].map(r=>[`--un-scale${r}`,n]),["transform",qe]]}function fo([,e="",t]){const n=R.bracket.cssvar.degree(t);if(n!=null)return e?{"--un-rotate":0,[`--un-rotate-${e}`]:n,transform:qe}:{"--un-rotate-x":0,"--un-rotate-y":0,"--un-rotate-z":0,"--un-rotate":n,transform:qe}}function df([,e,t]){const n=R.bracket.cssvar.degree(t);if(n!=null)return{[`--un-skew-${e}`]:n,transform:qe}}const $e=e=>e.replace("col","column"),Xn=e=>e[0]==="r"?"Row":"Column",ff=(e,t,n)=>{var o;const r=(o=t[`gridAuto${Xn(e)}`])==null?void 0:o[n];if(r!=null)return r;switch(n){case"min":return"min-content";case"max":return"max-content";case"fr":return"minmax(0,1fr)"}return R.bracket.cssvar.auto.rem(n)},hf=[["grid",{display:"grid"}],["inline-grid",{display:"inline-grid"}],[/^(?:grid-)?(row|col)-(.+)$/,([,e,t],{theme:n})=>{var r,o;return{[`grid-${$e(e)}`]:(o=(r=n[`grid${Xn(e)}`])==null?void 0:r[t])!=null?o:R.bracket.cssvar.auto(t)}}],[/^(?:grid-)?(row|col)-span-(.+)$/,([,e,t])=>{if(t==="full")return{[`grid-${$e(e)}`]:"1/-1"};const n=R.bracket.number(t);if(n!=null)return{[`grid-${$e(e)}`]:`span ${n}/span ${n}`}},{autocomplete:["grid-(row|col)-span-<num>","(row|col)-span-<num>"]}],[/^(?:grid-)?(row|col)-start-(.+)$/,([,e,t])=>{var n;return{[`grid-${$e(e)}-start`]:(n=R.bracket.cssvar(t))!=null?n:t}}],[/^(?:grid-)?(row|col)-end-(.+)$/,([,e,t])=>{var n;return{[`grid-${$e(e)}-end`]:(n=R.bracket.cssvar(t))!=null?n:t}},{autocomplete:["grid-(row|col)-(start|end)-<num>"]}],[/^(?:grid-)?auto-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>({[`grid-auto-${$e(e)}`]:ff(e,n,t)}),{autocomplete:["grid-auto-(rows|cols)-<num>"]}],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/,([,e])=>({"grid-auto-flow":R.bracket.cssvar(e)})],[/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/,([,e])=>({"grid-auto-flow":$e(e).replace("-"," ")}),{autocomplete:["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"]}],[/^grid-(rows|cols)-(.+)$/,([,e,t],{theme:n})=>{var r,o;return{[`grid-template-${$e(e)}`]:(o=(r=n[`gridTemplate${Xn(e)}`])==null?void 0:r[t])!=null?o:R.bracket.cssvar(t)}}],[/^grid-(rows|cols)-minmax-([\w.-]+)$/,([,e,t])=>({[`grid-template-${$e(e)}`]:`repeat(auto-fill,minmax(${t},1fr))`})],[/^grid-(rows|cols)-(\d+)$/,([,e,t])=>({[`grid-template-${$e(e)}`]:`repeat(${t},minmax(0,1fr))`}),{autocomplete:["grid-(rows|cols)-<num>","grid-(rows|cols)-none"]}],[/^grid-area(s)?-(.+)$/,([,e,t])=>{var n;return e!=null?{"grid-template-areas":(n=R.cssvar(t))!=null?n:t.split("-").map(r=>`"${R.bracket(r)}"`).join(" ")}:{"grid-area":R.bracket.cssvar(t)}}],["grid-rows-none",{"grid-template-rows":"none"}],["grid-cols-none",{"grid-template-columns":"none"}]],{logical:Tt}=Q,Os=()=>{const e=[[/^(aspect)-(.+)$/,n=>{if(!n[2].includes(":"))return{"aspect-ratio":n[2]}}]],t=`
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
  `;return{rules:e,docs:t}},Ms=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Windblade does not have container utilities or breakpoints becase it focuses on intrinsic sizing instead.</p>
    </page>
  `}),Ls=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-after-${r}`,{"break-after":r}]),n=`
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
  `;return{rules:t,docs:n}},As=()=>{const e=["auto","avoid","all","avoid-page","page","recto","verso","column"],t=e.map(r=>[`break-before-${r}`,{"break-before":r}]),n=`
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
  `;return{rules:t,docs:n}},Es=()=>{const e=["block","inline-block","inline","flex","inline-flex","flow-root","grid","inline-grid","contents","hidden"],t={hidden:"none"},n=e.map(o=>[`${o}`,{display:Object.keys(t).includes(o)?t[o]:o}]),r=`
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
  `;return{rules:n,docs:r}},Rs=()=>{const e=[...Vt(Tt.abbreviations.edges).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),...Vt(Tt.abbreviations.coners).map(([n,r])=>[`object-${n}`,{"object-position":`var(--${r})`}]),["object-center",{"object-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${[...Object.keys(Tt.abbreviations.edges),...Object.keys(Tt.abbreviations.coners),"center"].map(n=>`<util>object-${n}</util>`).join("")}
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
  `;return{rules:e,docs:t}},{size:Ps}=Q,Ns=[1,2,3,4,5,6,7,8,9].map(e=>`<div class="bg-accent rounded-s.4 p-s flex items-center justify-center text-center">0${e}</div>`).join(`
`),Ds=(e,t)=>()=>{const n=[[`auto-${e}-auto`,{[`grid-auto-${t}`]:"auto"}],[`auto-${e}-fr`,{[`grid-auto-${t}`]:"minmax(0, 1fr)"}],Ps.rule(`auto-${e}`,`grid-auto-${t}`)],r=`
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
            ${Ns}
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
  `;return{rules:n,docs:r}},Hs=Ds("cols","columns"),Ws=Ds("rows","rows"),vn=(e,t,n)=>()=>{const r=[Ps.rule(`grid-${e}-${t}s`,`grid-template-${n}s`,{postprocess:s=>`repeat(auto-${e}, minmax(min(${s}, 100%), 1fr))`})],o=`
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
            ${Ns}
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
  `;return{rules:r,docs:o}},Us=vn("fit","col","column"),Fs=vn("fill","col","column"),Bs=vn("fit","row","row"),Gs=vn("fill","row","row"),ce=(e,t,n,r)=>e.map(o=>`
  <for object="${o}" key-as="${t}" value-as="${n}">
    ${r}
  </for>
`).join(""),{logical:Ln}=Q,ct=e=>`
  <select>
    ${[...e.axis?Object.keys(Ln.abbreviations.axis):[],...e.edges?Object.keys(Ln.abbreviations.edges):[],...e.corners?Object.keys(Ln.abbreviations.coners):[]].map(t=>`
      <option value="${t}"/>
    `).join("")}
  </select>
`,{logical:im,size:Is}=Q,Vs=()=>{const e=Is.edgeRules("p","","padding",""),t=`
    <page>
      <h1><title /></h1>
      <p>Replaced physical properties with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            p-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            p-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
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
  `;return{rules:e,docs:t}},qs=()=>{const e=Is.edgeRules("m","","margin",""),t=`
    <page>
      <h1><title /></h1>
      <p>Replaced physical properties with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            m-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                <option value="$name"/>
              `)}
            </select>
          </util>
          <util>
            m-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
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
  `;return{rules:e,docs:t}},Xs=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this. Please use gap and flex/grid/columns instead.</p>
    </page>
  `}),{logical:rt,size:br}=Q,Ks=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Removed this, as well as min and max variants, in favor of the size counterparts</p>
    </page>
  `}),Ys=()=>{const e=br.axisRules("size","","","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Ee(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              size-${n}-
              <select>
                ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Ee(rt.abbreviations.axis).map(n=>`
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
  `;return{rules:e,docs:t}},Js=e=>`
  <div class="$util ${e==="inline"?"min-size-b-m.2":"min-size-i-m.2"} bg-accent rounded-s"></div>
`,Zs=()=>{const e=br.axisRules("min-size","","min","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the minimum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Ee(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              min-size-${n}-
              <select>
                ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name" />
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Ee(rt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${k(`
            ${Js(n)}
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
  `;return{rules:e,docs:t}},Qs=()=>{const e=br.axisRules("max-size","","max","size"),t=`
    <page>
      <h1><title /></h1>
      <p>Utilities for setting the maximum size of an element. Missing from Tailwind.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          ${Ee(rt.abbreviations.axis).map(n=>`
            <util renderer="${n}">
              max-size-${n}-
              <select>
                ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$val",`
                  <option value="$name"/>
                `)}
              </select>
            </util>
          `).join("")}
        </utils>

        ${Ee(rt.abbreviations.axis).map(n=>`
          <renderer for="${n}" html="${k(`
            ${Js(n)}
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
  `;return{rules:e,docs:t}},{logical:Ot}=Q,ei=()=>{const e=[...Vt(Ot.abbreviations.edges).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),...Vt(Ot.abbreviations.coners).map(([n,r])=>[`bg-${n}`,{"background-position":`var(--${r})`}]),["bg-center",{"background-position":"center"}]],t=`
    <page>
      <h1><title /></h1>
      <p>Physical properties replaced with logocal.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>${[...Object.keys(Ot.abbreviations.edges),...Object.keys(Ot.abbreviations.coners),"center"].map(n=>`
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
  `;return{rules:e,docs:t}},{size:wt}=Q,ti=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font family utilities have been removed.</p>
    </page>
  `}),ni=()=>{const e=[wt.rule("text","font-size")],t=`
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
  `;return{rules:e,docs:t}},ri=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Font smoothing has been removed because Windblade sets it by default in preflight and it should never be changed. Plese open an issue if this is wrong.</p>
    </page>
  `}),oi=()=>{const e=[wt.rule("tracking","letter-spacing",{defaultUnit:"em"})],t=`
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
  `;return{rules:e,docs:t}},si=()=>{const e=[wt.rule("leading","line-height",{defaultUnit:""})],t=`
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
  `;return{rules:e,docs:t}},ii=()=>{const e=[["decoration-from-font",{"text-decoration-thickness":"from-font"}],wt.rule("decoration","text-decoration-thickness")],t=`
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
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},li=()=>{const e=[wt.rule("underline-offset","text-underline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate ofset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            underline-offset-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},{logical:ho,size:$n}=Q,ai=()=>{const e=[...$n.cornerRules("rounded","","border","radius"),...ho.cornerRules("rounded","full","border","radius",(n,r)=>[n,{[r]:"99999px"}]),...ho.cornerRules("rounded","none","border","radius",(n,r)=>[n,{[r]:"none"}])],t=`
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
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            rounded-
            ${ct({corners:!0})}-
            <select>
              <option value="none" />
              <option value="full" />
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},ci=()=>{const e=$n.edgeRules("border","","border","width"),t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values, and physical properties are replaced with logical.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            border-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
            </select>
          </util>
          <util>
            border-
            ${ct({axis:!0,edges:!0})}-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},ui=()=>{const e=[$n.rule("outline","outline-width")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate size values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},di=()=>{const e=[$n.rule("outline-offset","outline-offset")],t=`
    <page>
      <h1><title /></h1>
      <p>Windblade proportions are used instead of separate offset values.</p>

      <h2>Try it</h2>
      <try-it selected="$util">
        <utils>
          <util>
            outline-offset-
            <select>
              ${ce(["theme.windblade.proportions","theme.windblade.miscSizes"],"$name","$value",'<option value="$name" />')}
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
  `;return{rules:e,docs:t}},fi=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Divides have been removed.</p>
    </page>
  `}),hi=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Rings have been removed.</p>
    </page>
  `}),{size:mf}=Q,mi=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Box shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}),gi=()=>{const e=[mf.rule("opacity","opacity",{defaultUnit:""})],t=`
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
  `;return{rules:e,docs:t}},pi=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Drop shadows are removed for now because Tailwind's implementation is too limiting. Discussion in progress.</p>
    </page>
  `}),{size:gf}=Q,bi=()=>{const e=[gf.rule("border-spacing","border-spacing")],t=`
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
  `;return{rules:e,docs:t}},{time:ot}=Q,vi=()=>{const e=[ot.durationRule("duration","transition-duration"),ot.durationRule("delay","transition-delay")],t=`
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
  `;return{rules:e,docs:t}},$i=()=>{const e=[ot.timingFunctionRule("ease","transition-timing-function")],t=`
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
  `;return{rules:e,docs:t}},yi=()=>({rules:[],docs:`
    <page>
      <h1><title /></h1>
      <p>Animations are missing at the moment because we are unsure how to implement them in a way that they can use theme proportions. Discussion in progress. You can, however, use animation control utilities, which are missing from Tailwind.</p>
    </page>
  `}),wi=()=>{const e=[ot.durationRule("animation-duration","animation-duration"),ot.durationRule("animation-delay","animation-delay")],t=`
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
  `;return{rules:e,docs:t}},xi=()=>{const e=[ot.timingFunctionRule("animation-ease","animation-timing-function")],t=`
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
  `;return{rules:e,docs:t}},{size:yn}=Q,ki=()=>{const e=[yn.rule("scale","transform",{defaultUnit:"",postprocess:n=>`scale${n}`})],t=`
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
  `;return{rules:e,docs:t}},Si=()=>{const e=[yn.rule("rotate","transform",{defaultUnit:"deg",postprocess:n=>`rotate${Number(n)*360}`})],t=`
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
  `;return{rules:e,docs:t}},_i=()=>{const e=[yn.rule("translate","transform",{postprocess:n=>`translate${n}`})],t=`
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
  `;return{rules:e,docs:t}},Ci=()=>{const e=[yn.rule("skew","transform",{defaultUnit:"deg",postprocess:n=>`skew${Number(n)*360}`})],t=`
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
  `;return{rules:e,docs:t}},{logical:lm,size:zi}=Q,ji=()=>{const e=zi.edgeRules("scroll-m","","scroll-margin",""),t=`
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
  `;return{rules:e,docs:t}},Ti=()=>{const e=zi.edgeRules("scroll-p","","scroll-padding",""),t=`
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
  `;return{rules:e,docs:t}},Oi=()=>{const e=[["snap-none",{"scroll-snap-type":"none"}],["snap-both",{"scroll-snap-type":"both var(--wb-scroll-snap-strictness)"}],["snap-mandatory",{"--wb-scroll-snap-strictness":"mandatory"}],["snap-proximity",{"--wb-scroll-snap-strictness":"proximity"}]],t=`
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
  `;return{rules:e,docs:t}},Mi=()=>{const e=[["touch-auto",{"touch-action":"auto"}],["touch-none",{"touch-action":"none"}],["touch-pinch-zoom",{"touch-action":"pinch-zoom"}],["touch-manipulation",{"touch-action":"manipulation"}]],t=`
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
  `;return{rules:e,docs:t}},{size:pf}=Q,Li=()=>{const e=[pf.rule("stroke","stroke-width")],t=`
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
  `;return{rules:e,docs:t}},{logical:Ze,size:X}=Q,bf=[...Os().rules,...Ms().rules,[/^(columns)-(.+)$/,(e,{theme:t})=>{const n=e[2].split(","),r=X.resolve(n[0],t,"rem"),o=n[1];return{columns:[r,o].join(" ")}}],...Ls().rules,...As().rules,...["auto","avoid","all","avoid-page","avoid-column"].map(e=>[`break-inside-${e}`,{"break-inside":e}]),...["clone","slice"].map(e=>[`box-decoration-${e}`,{"box-decoration":e}]),...["border","content"].map(e=>[`box-${e}`,{"box-sizing":`${e}-box`}]),...Es().rules,...Object.keys(Ze.abbreviations.inlineEdges).map(e=>[`float-${e}`,{float:Ze.abbreviations.inlineEdges[e]}]),["float-none",{float:"none"}],...Object.keys(Ze.abbreviations.inlineEdges).map(e=>[`clear-${e}`,{clear:Ze.abbreviations.inlineEdges[e]}]),...["both","none"].map(e=>[`clear-${e}`,{clear:e}]),["isolate",{isolation:"isolate"}],["isolation-auto",{isolation:"auto"}],...["contain","cover","fill","none","scale-down"].map(e=>[`object-${e}`,{"object-fit":e}]),...Rs().rules,...["auto","hidden","clip","visible","scroll"].flatMap(e=>Ze.axisRules("overflow",e,"overflow","",(t,n)=>[t,{[n]:e}])),...["auto","contain","none"].flatMap(e=>Ze.axisRules("overscroll",e,"overscroll-behavior","",(t,n)=>[t,{[n]:e}])),...["static","fixed","absolute","relative","sticky"].map(e=>[e,{position:e}]),...X.edgeRules("inset","","inset",""),...["visible","invisible","collapse"].map(e=>[e,{visibility:e.replace("invisible","hidden")}]),[/^z-(.+)$/,e=>({"z-index":e[2]})],X.rule("basis","flex-basis"),...X.edgeRules("inset","","inset",""),["flex-col",{"flex-direction":"column"}],["flex-col-reverse",{"flex-direction":"column-reverse"}],["flex-row",{"flex-direction":"row"}],["flex-row-reverse",{"flex-direction":"row-reverse"}],...["wrap","wrap-reverse","nowrap"].map(e=>[`flex-${e}`,{"flex-wrap":e}]),["flex-1",{flex:"1 1 0%"}],["flex-auto",{flex:"1 1 auto"}],["flex-initial",{flex:"0 1 auto"}],["flex-none",{flex:"none"}],["grow",{"flex-grow":"1"}],["grow-0",{"flex-grow":"0"}],["shrink",{"flex-shrink":"1"}],["shrink-0",{"flex-shrink":"0"}],[/^(order)-(.+)$/,e=>({order:e[2]})],["order-none",{order:"0"}],...hf,...Us().rules,...Fs().rules,...Bs().rules,...Gs().rules,...Hs().rules,...Ws().rules,X.rule("gap","gap"),X.rule("gap-col","column-gap"),X.rule("gap-row","row-gap"),["justify-start",{"justify-content":"start"}],["justify-end",{"justify-content":"end"}],["justify-center",{"justify-content":"center"}],["justify-between",{"justify-content":"space-between"}],["justify-around",{"justify-content":"space-around"}],["justify-evenly",{"justify-content":"space-evenly"}],["justify-items-start",{"justify-items":"start"}],["justify-items-end",{"justify-items":"end"}],["justify-items-center",{"justify-items":"center"}],["justify-items-stretch",{"justify-items":"stretch"}],["justify-self-auto",{"justify-self":"auto"}],["justify-self-start",{"justify-self":"start"}],["justify-self-end",{"justify-self":"end"}],["justify-self-center",{"justify-self":"center"}],["justify-self-stretch",{"justify-self":"stretch"}],["content-center",{"align-content":"center"}],["content-start",{"align-content":"start"}],["content-end",{"align-content":"end"}],["content-between",{"align-content":"space-between"}],["content-around",{"align-content":"space-around"}],["content-evenly",{"align-content":"space-evenly"}],["content-baseline",{"align-content":"baseline"}],["items-start",{"align-items":"start"}],["items-end",{"align-items":"end"}],["items-center",{"align-items":"center"}],["items-baseline",{"align-items":"baseline"}],["items-stretch",{"align-items":"stretch"}],["self-auto",{"align-self":"auto"}],["self-start",{"align-self":"start"}],["self-end",{"align-self":"end"}],["self-center",{"align-self":"center"}],["self-stretch",{"align-self":"stretch"}],["self-baseline",{"align-self":"baseline"}],["place-content-center",{"place-content":"center"}],["place-content-start",{"place-content":"start"}],["place-content-end",{"place-content":"end"}],["place-content-between",{"place-content":"space-between"}],["place-content-around",{"place-content":"space-around"}],["place-content-evenly",{"place-content":"space-evenly"}],["place-content-baseline",{"place-content":"baseline"}],["place-content-stretch",{"place-content":"stretch"}],["place-items-start",{"place-items":"start"}],["place-items-end",{"place-items":"end"}],["place-items-center",{"place-items":"center"}],["place-items-baseline",{"place-items":"baseline"}],["place-items-stretch",{"place-items":"stretch"}],["place-items-auto",{"place-self":"auto"}],["place-items-start",{"place-self":"start"}],["place-items-end",{"place-self":"end"}],["place-items-center",{"place-self":"center"}],["place-items-stretch",{"place-self":"stretch"}],...Vs().rules,...qs().rules,...Xs().rules,...Ks().rules,...Ys().rules,...Zs().rules,...Qs().rules,["bg-fixed",{"background-attachment":""}],["bg-local",{"background-attachment":"local"}],["bg-scroll",{"background-attachment":"scroll"}],["bg-clip-border",{"background-clip":"border-box"}],["bg-clip-padding",{"background-clip":"padding-box"}],["bg-clip-content",{"background-clip":"content-box"}],["bg-clip-text",{"background-clip":"text"}],["bg-origin-border",{"background-origin":"border-box"}],["bg-origin-padding",{"background-origin":"padding-box"}],["bg-origin-content",{"background-origin":"content-box"}],...ei().rules,["bg-repeat",{"background-repeat":"repeat"}],["bg-no-repeat",{"background-repeat":"no-repeat"}],["bg-repeat-x",{"background-repeat":"repeat-x"}],["bg-repeat-y",{"background-repeat":"repeat-y"}],["bg-repeat-round",{"background-repeat":"round"}],["bg-repeat-space",{"background-repeat":"space"}],["bg-auto",{"background-size":"auto"}],["bg-cover",{"background-size":"cover"}],["bg-contain",{"background-size":"contain"}],...ti().rules,...ni().rules,...ri().rules,["italic",{"font-style":"italic"}],["not-italic",{"font-style":"normal"}],["font-thin",{"font-weight":"100"}],["font-extralight",{"font-weight":"200"}],["font-light",{"font-weight":"300"}],["font-normal",{"font-weight":"400"}],["font-medium",{"font-weight":"500"}],["font-semibold",{"font-weight":"600"}],["font-bold",{"font-weight":"700"}],["font-extrabold",{"font-weight":"800"}],["font-black",{"font-weight":"900"}],["normal-nums",{"font-variant-numeric":"normal"}],["ordinal",{"font-variant-numeric":"ordinal"}],["slashed-zero",{"font-variant-numeric":"slashed-zero"}],["lining-nums",{"font-variant-numeric":"lining-nums"}],["oldstyle-nums",{"font-variant-numeric":"oldstyle-nums"}],["proportional-nums",{"font-variant-numeric":"proportional-nums"}],["tabular-nums",{"font-variant-numeric":"tabular-nums"}],["diagonal-fractions",{"font-variant-numeric":"diagonal-fractions"}],["stacked-fractions",{"font-variant-numeric":"stacked-fractions"}],...oi().rules,...si().rules,["list-none",{"list-style-type":"none"}],["list-disc",{"list-style-type":"disc"}],["list-decimal",{"list-style-type":"decimal"}],["list-inside",{"list-style-position":"inside"}],["list-outside",{"list-style-position":"outside"}],["text-start",{"text-align":"start"}],["text-center",{"text-align":"center"}],["text-end",{"text-align":"end"}],["text-justify",{"text-align":"justify"}],["underline",{"text-decoration-line":"underline"}],["overline",{"text-decoration-line":"overline"}],["line-through",{"text-decoration-line":"line-through"}],["no-underline",{"text-decoration-line":"none"}],["decoration-solid",{"text-decoration-style":"solid"}],["decoration-double",{"text-decoration-style":"double"}],["decoration-dotted",{"text-decoration-style":"dotted"}],["decoration-dashed",{"text-decoration-style":"dashed"}],["decoration-wavy",{"text-decoration-style":"wavy"}],...ii().rules,...li().rules,["uppercase",{"text-transform":"uppercase"}],["lowercase",{"text-transform":"lowercase"}],["capitalize",{"text-transform":"capitalize"}],["normal-case",{"text-transform":"none"}],["text-ellipsis",{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}],["text-ellipsis",{"text-overflow":"ellipsis"}],["text-clip",{"text-overflow":"clip"}],X.rule("indent","text-indent"),["align-baseline",{"vertical-align":"baseline"}],["align-top",{"vertical-align":"top"}],["align-middle",{"vertical-align":"middle"}],["align-bottom",{"vertical-align":"bottom"}],["align-text-top",{"vertical-align":"text-top"}],["align-text-bottom",{"vertical-align":"text-bottom"}],["align-sub",{"vertical-align":"sub"}],["align-super",{"vertical-align":"super"}],X.rule("align","vertical-align"),["whitespace-normal",{"white-space":"normal"}],["whitespace-nowrap",{"white-space":"nowrap"}],["whitespace-pre",{"white-space":"pre"}],["whitespace-pre-line",{"white-space":"pre-line"}],["whitespace-pre-wrap",{"white-space":"pre-wrap"}],["break-normal",{"overflow-wrap":"normal","word-break":"normal"}],["break-words",{"overflow-wrap":"break-word"}],["break-all",{"word-break":"break-all"}],["break-keep",{"word-break":"keep-all"}],...cf,...ai().rules,[/^(border)$/,()=>({"border-style":"solid","border-width":"1px"})],...ci().rules,["border-solid",{"border-style":"solid"}],["border-dashed",{"border-style":"dashed"}],["border-dotted",{"border-style":"dotted"}],["border-double",{"border-style":"double"}],["border-hidden",{"border-style":"hidden"}],["border-none",{"border-style":"none"}],...fi().rules,...ui().rules,["outline-none",{outline:"0px solid transparent","outline-offset":"0px"}],["outline",{"outline-style":"solid"}],["outline-dashed",{"outline-style":"dashed"}],["outline-dotted",{"outline-style":"dotted"}],["outline-double",{"outline-style":"double"}],...di().rules,...hi().rules,...mi().rules,...gi().rules,["mix-blend-normal",{"mix-blend-mode":"normal"}],["mix-blend-multiply",{"mix-blend-mode":"multiply"}],["mix-blend-screen",{"mix-blend-mode":"screen"}],["mix-blend-overlay",{"mix-blend-mode":"overlay"}],["mix-blend-darken",{"mix-blend-mode":"darken"}],["mix-blend-lighten",{"mix-blend-mode":"lighten"}],["mix-blend-color-dodge",{"mix-blend-mode":"color-dodge"}],["mix-blend-color-burn",{"mix-blend-mode":"color-burn"}],["mix-blend-hard-light",{"mix-blend-mode":"hard-light"}],["mix-blend-soft-light",{"mix-blend-mode":"soft-light"}],["mix-blend-difference",{"mix-blend-mode":"difference"}],["mix-blend-exclusion",{"mix-blend-mode":"exclusion"}],["mix-blend-hue",{"mix-blend-mode":"hue"}],["mix-blend-saturation",{"mix-blend-mode":"saturation"}],["mix-blend-color",{"mix-blend-mode":"color"}],["mix-blend-luminosity",{"mix-blend-mode":"luminosity"}],["mix-blend-plus-lighter",{"mix-blend-mode":"plus-lighter"}],["bg-blend-normal",{"background-blend-mode":"normal"}],["bg-blend-multiply",{"background-blend-mode":"multiply"}],["bg-blend-screen",{"background-blend-mode":"screen"}],["bg-blend-overlay",{"background-blend-mode":"overlay"}],["bg-blend-darken",{"background-blend-mode":"darken"}],["bg-blend-lighten",{"background-blend-mode":"lighten"}],["bg-blend-color-dodge",{"background-blend-mode":"color-dodge"}],["bg-blend-color-burn",{"background-blend-mode":"color-burn"}],["bg-blend-hard-light",{"background-blend-mode":"hard-light"}],["bg-blend-soft-light",{"background-blend-mode":"soft-light"}],["bg-blend-difference",{"background-blend-mode":"difference"}],["bg-blend-exclusion",{"background-blend-mode":"exclusion"}],["bg-blend-hue",{"background-blend-mode":"hue"}],["bg-blend-saturation",{"background-blend-mode":"saturation"}],["bg-blend-color",{"background-blend-mode":"color"}],["bg-blend-luminosity",{"background-blend-mode":"luminosity"}],X.rule("blur","filter",{postprocess:e=>`blur(${e})`}),X.rule("brightness","filter",{postprocess:e=>`brightness(${e})`}),X.rule("contrast","filter",{postprocess:e=>`contrast(${e})`}),...pi().rules,X.rule("grayscale","filter",{postprocess:e=>`grayscale(${e})`}),X.rule("hue-rotate","filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),X.rule("invert","filter",{postprocess:e=>`invert(${e})`}),X.rule("saturate","filter",{postprocess:e=>`saturate(${e})`}),X.rule("sepia","filter",{postprocess:e=>`sepia(${e})`}),X.rule("backdrop-blur","backdrop-filter",{postprocess:e=>`blur(${e})`}),X.rule("backdrop-brightness","backdrop-filter",{postprocess:e=>`brightness(${e})`}),X.rule("backdrop-contrast","backdrop-filter",{postprocess:e=>`contrast(${e})`}),X.rule("backdrop-grayscale","backdrop-filter",{postprocess:e=>`grayscale(${e})`}),X.rule("backdrop-hue-rotate","backdrop-filter",{postprocess:e=>`hue-rotate(${Number(e)*360}deg)`,defaultUnit:""}),X.rule("backdrop-invert","backdrop-filter",{postprocess:e=>`invert(${e})`}),X.rule("backdrop-opacity","backdrop-filter",{postprocess:e=>`opacity(${e})`}),X.rule("backdrop-saturate","backdrop-filter",{postprocess:e=>`saturate(${e})`}),X.rule("backdrop-sepia","backdrop-filter",{postprocess:e=>`sepia(${e})`}),["border-collapse",{"border-collapse":"collapse"}],["border-separate",{"border-collapse":"separate"}],...bi().rules,["table-auto",{"table-layout":"auto"}],["table-fixed",{"table-layout":"fixed"}],["transition-none",{"transition-property":"none"}],[/^(transition-all)$/,(e,{theme:t})=>({transition:"all","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],[/^(transition)$/,(e,{theme:t})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],[/^(transition-colors)$/,(e,{theme:t})=>({transition:"color, background-color, border-color, text-decoration-color, fill, stroke    ","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],[/^(transition-opacity)$/,(e,{theme:t})=>({transition:"opacity","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],[/^(transition-shadow)$/,(e,{theme:t})=>({transition:"box-shadow","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],[/^(transition-transform)$/,(e,{theme:t})=>({transition:"transform","transition-timing-function":t.windblade.time.functions.default,"transition-duration":`${t.windblade.time.baseUnitMs}ms`})],...vi().rules,...$i().rules,...yi().rules,...wi().rules,...xi().rules,...ki().rules,...Si().rules,..._i().rules,...Ci().rules,["origin-ss",{"transform-origin":"var(--start-start)"}],["origin-bs",{"transform-origin":"var(--block-start)"}],["origin-es",{"transform-origin":"var(--end-start)"}],["origin-is",{"transform-origin":"var(--inline-start)"}],["origin-center",{"transform-origin":"center"}],["origin-ie",{"transform-origin":"var(--inline-start)"}],["origin-se",{"transform-origin":"var(--start-end)"}],["origin-be",{"transform-origin":"var(--block-end)"}],["origin-ee",{"transform-origin":"var(--end-end)"}],["appearance-none",{appearance:"none"}],["cursor-auto",{cursor:"auto"}],["cursor-default",{cursor:"default"}],["cursor-pointer",{cursor:"pointer"}],["cursor-wait",{cursor:"wait"}],["cursor-text",{cursor:"text"}],["cursor-move",{cursor:"move"}],["cursor-help",{cursor:"help"}],["cursor-not-allowed",{cursor:"not-allowed"}],["cursor-none",{cursor:"none"}],["cursor-context-menu",{cursor:"context-menu"}],["cursor-progress",{cursor:"progress"}],["cursor-cell",{cursor:"cell"}],["cursor-crosshair",{cursor:"crosshair"}],["cursor-vertical-text",{cursor:"vertical-text"}],["cursor-alias",{cursor:"alias"}],["cursor-copy",{cursor:"copy"}],["cursor-no-drop",{cursor:"no-drop"}],["cursor-grab",{cursor:"grab"}],["cursor-grabbing",{cursor:"grabbing"}],["cursor-all-scroll",{cursor:"all-scroll"}],["cursor-col-resize",{cursor:"col-resize"}],["cursor-row-resize",{cursor:"row-resize"}],["cursor-n-resize",{cursor:"n-resize"}],["cursor-e-resize",{cursor:"e-resize"}],["cursor-s-resize",{cursor:"s-resize"}],["cursor-w-resize",{cursor:"w-resize"}],["cursor-ne-resize",{cursor:"ne-resize"}],["cursor-nw-resize",{cursor:"nw-resize"}],["cursor-se-resize",{cursor:"se-resize"}],["cursor-sw-resize",{cursor:"sw-resize"}],["cursor-ew-resize",{cursor:"ew-resize"}],["cursor-ns-resize",{cursor:"ns-resize"}],["cursor-nesw-resize",{cursor:"nesw-resize"}],["cursor-nwse-resize",{cursor:"nwse-resize"}],["cursor-zoom-in",{cursor:"zoom-in"}],["cursor-zoom-out",{cursor:"zoom-out"}],["pointer-events-none",{"pointer-events":"none"}],["pointer-events-auto",{"pointer-events":"auto"}],["resize-none",{resize:"none"}],["resize-b",{resize:"block"}],["resize-i",{resize:"inline"}],["resize",{resize:"both"}],["scroll-auto",{"scroll-behavior":"auto"}],["scroll-smooth",{"scroll-behavior":"smooth"}],...ji().rules,...Ti().rules,["snap-start",{"scroll-snap-align":"start"}],["snap-end",{"scroll-snap-align":"end"}],["snap-center",{"scroll-snap-align":"center"}],["snap-align-none",{"scroll-snap-align":"none"}],["snap-normal",{"scroll-snap-stop":"normal"}],["snap-always",{"scroll-snap-stop":"always"}],...Oi().rules,...Mi().rules,["select-none",{"user-select":"none"}],["select-text",{"user-select":"text"}],["select-all",{"user-select":"all"}],["select-auto",{"user-select":"auto"}],["will-change-auto",{"will-change":"auto"}],["will-change-scroll",{"will-change":"scroll-position"}],["will-change-contents",{"will-change":"contents"}],["will-change-transform",{"will-change":"transform"}],...Li().rules,["sr-only",{position:"absolute","block-size":"1px","inline-size":"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"}],["not-sr-only",{position:"static","block-size":"auto","inline-size":"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}],["horizontal-tb",{"writing-mode":"horizontal-tb","--block-start":"top","--block-end":" bottom","--inline-start":"left","--inline-end":"right","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-lr",{"writing-mode":"vertical-lr","--block-start":"left","--block-end":"right","--inline-start":"top","--inline-end":"bottom","--start-start":"top left","--start-end":"top right","--end-start":"bottom left","--end-end":"bottom right"}],["vertical-rl",{"writing-mode":"vertical-rl","--block-start":"right","--block-end":"left","--inline-start":"top","--inline-end":"bottom","--start-start":"top right","--start-end":"top left","--end-start":"bottom right","--end-end":"bottom left"}]],vf=bf,$f=[{getCSS:()=>`
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
    `}],yf=$f,wf={windblade:{colors:{},proportions:{extrasmall:.25,small:.5,medium:.75,large:1,extralarge:1.75},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)"}}}},xf=wf,Mt=(e,t)=>({[`${e}-900`]:{base:{dark:{l:t[0].l,c:t[0].c},light:{l:t[9].l,c:t[9].c}},on:[{dark:{l:1,c:0}}]},[`${e}-800`]:{base:{dark:{l:t[1].l,c:t[1].c},light:{l:t[8].l,c:t[8].c}},on:[{dark:{l:1,c:0}}]},[`${e}-700`]:{base:{dark:{l:t[2].l,c:t[2].c},light:{l:t[7].l,c:t[7].c}},on:[{dark:{l:1,c:0}}]},[`${e}-600`]:{base:{dark:{l:t[3].l,c:t[3].c},light:{l:t[6].l,c:t[6].c}},on:[{dark:{l:1,c:0}}]},[`${e}-500`]:{base:{dark:{l:t[4].l,c:t[4].c},light:{l:t[5].l,c:t[5].c}},on:[{dark:{l:1,c:0}}]},[`${e}-400`]:{base:{dark:{l:t[5].l,c:t[5].c},light:{l:t[4].l,c:t[4].c}},on:[{dark:{l:0,c:0}}]},[`${e}-300`]:{base:{dark:{l:t[6].l,c:t[6].c},light:{l:t[3].l,c:t[3].c}},on:[{dark:{l:0,c:0}}]},[`${e}-200`]:{base:{dark:{l:t[7].l,c:t[7].c},light:{l:t[2].l,c:t[2].c}},on:[{dark:{l:0,c:0}}]},[`${e}-100`]:{base:{dark:{l:t[8].l,c:t[8].c},light:{l:t[1].l,c:t[1].c}},on:[{dark:{l:0,c:0}}]},[`${e}-50`]:{base:{dark:{l:t[9].l,c:t[9].c},light:{l:t[0].l,c:t[0].c}},on:[{dark:{l:0,c:0}}]}}),kf={windblade:{colors:{absolute:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},...Mt("neutral",[{l:.21,c:0},{l:.28,c:0},{l:.37,c:0},{l:.45,c:0},{l:.55,c:0},{l:.71,c:0},{l:.87,c:0},{l:.92,c:0},{l:.97,c:0},{l:.98,c:0}]),...Mt("gray",[{l:.22,c:.023},{l:.28,c:.026},{l:.37,c:.03},{l:.45,c:.026},{l:.55,c:.023},{l:.71,c:.019},{l:.87,c:.009},{l:.92,c:.006},{l:.97,c:.003},{l:.98,c:.002}]),...Mt("slate",[{l:.21,c:.035},{l:.28,c:.035},{l:.37,c:.039},{l:.45,c:.037},{l:.55,c:.041},{l:.71,c:.035},{l:.87,c:.02},{l:.92,c:.013},{l:.97,c:.007},{l:.98,c:.003}]),...Mt("strong",[{l:.35,c:.16},{l:.4,c:.2},{l:.5,c:.24},{l:.6,c:.2},{l:.7,c:.16},{l:.75,c:.13},{l:.81,c:.1},{l:.87,c:.06},{l:.92,c:.03},{l:.97,c:.02}])},proportions:{"0.5":.125,1:.25,"1.5":.375,2:.5,"2.5":.625,3:.75,"3.5":.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24,sm:40,md:48,lg:64,xl:80,"2xl":96},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Sf=kf,_f={windblade:{colors:{clear:{base:{dark:{l:0,c:0}},on:[{dark:{l:1,c:0}}]},normal:{base:{dark:{l:0,c:0}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-2":{base:{dark:{l:.11,c:.001},light:{l:.98}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.02}},{dark:{l:.6,c:.04}},{dark:{l:.4,c:.02}},{dark:{l:.2,c:.01}}]},"normal-3":{base:{dark:{l:.15,c:.004},light:{l:.94}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},"normal-4":{base:{dark:{l:.19,c:.006},light:{l:.9}},on:[{dark:{l:.96,c:.01}},{dark:{l:.9,c:.04},light:{l:.3}},{dark:{l:.6,c:.06},light:{l:.4}},{dark:{l:.4,c:.02},light:{l:.8}},{dark:{l:.2,c:.01},light:{l:.9}}]},surface:{base:{dark:{l:.4,c:.04,a:.1},light:{c:.1}},on:[{dark:{l:.9,c:.1},light:{l:.3}},{dark:{l:.8,c:.1},light:{l:.4}},{dark:{l:.6,c:.06},light:{l:.5}},{dark:{l:.4,c:.04}},{dark:{l:.2,c:.02}}]},accent:{base:{dark:{l:.7,c:.2},light:{l:.6}},on:[{dark:{l:.1,c:.2},light:{l:1}},{dark:{l:.2,c:.23},light:{l:.98}},{dark:{l:.4,c:.26},light:{l:.9}},{dark:{l:.6,c:.3},light:{l:.8}}]},"accent-2":{base:{dark:{l:.7,c:.2,a:.4},light:{l:.6}},on:[{dark:{l:.9,c:.1},light:{l:.2}},{dark:{l:.8,c:.15},light:{l:.3}},{dark:{l:.6,c:.2},light:{l:.5}}]},"accent-3":{base:{dark:{l:.6,c:.06,a:.1},light:{c:.18}},on:[{dark:{l:.9,c:.2}}]},"accent-4":{base:{dark:{l:.4,c:.01,a:.1}},on:[{dark:{l:.9,c:.2}}]}},proportions:{zero:0,"s.2":.2,"s.4":.4,"s.6":.6,"s.8":.8,s:1,"m.2":2,"m.4":4,"m.6":6,"m.8":8,m:10,"l.2":20,"l.4":40,"l.6":60,"l.8":80,l:100},time:{baseUnitMs:150,functions:{default:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"}}}},Cf=_f,vr={none:{},material3:xf,tailwind:Sf,windblade:Cf},Ai=vr,zf=`
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
});`,jf=`import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import presetVariants from 'unocss-preset-mini-variants';

export default defineConfig({
  presets: [
    presetWindblade(),
    presetVariants(),
  ],
});`,Tf=`import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWindblade(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});`,Of=`
  <page>
    <h1><title /></h1>
    <p>Windblade is an UnoCSS preset, please follow its own <a href="https://github.com/unocss/unocss#installation">guide</a> to install it.</p>
    <p>Once UnoCSS is installed in your project simply get Windblade from npm and add it to the presets array.</p>
    <pre lang="sh" code="npm install unocss-preset-windblade" />
    <pre lang="ts" code="${k(zf)}" />

    <h2>Recommended additions</h2>
    <p>Windblade can be used by itself, however there are other UnoCSS presets that we recommend using together with it.</p>

    <h3>Getting hover, active, etc.</h3>
    <p>Windblade does not come with combinators, pseudo-selectors or other query modifiers so you need to get this functionality elsewhere. We recommend using unocss-preset-mini-variants.</p>
    <pre lang="sh" code="npm install unocss-preset-mini-variants" />
    <pre lang="ts" code="${k(jf)}" />

    <h3>Getting @apply</h3>
    <p>UnoCSS offers an official solution for getting @apply in your projects. We recommend to use that if you need this functionality.</p>
    <pre lang="sh" code="npm install -D @unocss/transformer-directives" />
    <pre lang="ts" code="${k(Tf)}" />
  </page>
`,Ei=Of,Mf=`
import { defineConfig } from 'unocss';
import presetWindblade from 'unocss-preset-windblade';

export default defineConfig({
  presets: [
    presetWindblade({
      theme: 'windblade',
    }),
  ],
});`,Lf=`
  <page>
    <h1><title /></h1>
    <p>At the moment Windblade only exposes one option which configures which theme preset is used.</p>
    <p>To specify which preset to use define the <code>theme</code> value in the preset options:</p>
    <pre lang="ts" code="${k(Mf)}" />

    <p>The following themes are available:</p>
    <ul>
      ${Object.keys(Ai).map(e=>`<li><code>${e}</code></li>`).join("")}
    </ul>

    <p><small>Please note that the <code>material3</code> theme is not finished and is almost unusable at the moment.</small></p>
  </page>
`,Ri=Lf,Af=`
<div class="bg-normal">
  This will have the 'normal' background
  <div class="bg-accent"> And this will have the 'accent' background </div>
</div>
`,Ef=`
<div class="bg-normal">
  This will have the 'normal' background and default foreground color.
  <span class="text-fg-2"> And this will have the secondary foreground color </span>
  <div class="bg-fg-2"> <!-- This div has secondary foreground color as background --> </div>
</div>
`,Rf=`
<body class="scheme-auto-80 bg-normal">
  ...
</body>
`,Pf=`
<body class="scheme-dark scheme-auto-80 bg-normal">
  <h1>Always-dark website</h1>
  <section class="bg-accent">Default (orange)</section>
  <section class="scheme-auto-240 bg-accent">Blue</section>
  <section class="scheme-auto-280 bg-accent">Purple</section>
</body>
`,Nf=`
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

export default getBrandColor;`,Df=`
  <page>
    <h1>Using semantic colors</h1>
    <p>Windblade comes with a semantic color system. Refer to colors by their names.</p>
    <pre lang="html" code="${k(Af)}" />

    <h2>Foreground colors</h2>
    <p>All colors have one or more foreground colors. The first foreground color is set as CSS color automatically but you can override it with others or use it for other properties. The foreground colors are updated whenever the bg utility is applied.</p>
    <pre lang="html" code="${k(Ef)}" />

    <h2>Hue &amp; color scheme</h2>
    <p>Change color hue by applying color rules together with or sheme-(auto|dark|light)-{number} or inside elemetns with that class.</p>
    <pre lang="html" code="${k('<div class="scheme-auto-80 bg-normal"></div>')}" />

    <p>It is a good idea apply a default color scheme at the root of your app.</p>
    <pre lang="html" code="${k(Rf)}" />

    <p><code>@media(prefers-color-scheme)</code> is used for scheme-auto-... by default but you can override this behaviour with <code>scheme-(dark|light)</code>.</p>
    <pre lang="html" code="${k(Pf)}" />

    <h2>Using Windblade colors in JavaScrtipt</h2>
    <p>Sometimes you might need to set a color with JavaScript and you might be unable to use a class (e.g. drawing to a canvas). In those situations, you can use Windblade's core module.</p>
    <pre lang="ts" code="${k(Nf)}" />
  </page>
`,Pi=Df,we={block:"bg-surface p-s transition text-center rounded-s.4"},Hf=`
<div class="grid grid-cols-3 grid-auto-rows-m.2 gap-s.2 rounded-s overflow-hidden">
  <div class="${we.block}">ss</div>
  <div class="${we.block}">bs</div>
  <div class="${we.block}">se</div>

  <div class="${we.block}">is</div>
  <div class="${we.block}">center</div>
  <div class="${we.block}">ie</div>

  <div class="${we.block}">es</div>
  <div class="${we.block}">be</div>
  <div class="${we.block}">ee</div>
</div>`,Wf=`
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

    <example html="${k(Hf)}" />

    <p>Windblade polyfills logical values so you can use this even where CSS does not support it yet (e.g. <code>background-position</code> with <code>bg-{corner}</code> utility).</p>
    <p>If you are new to logical properties try playing with <code>bg-gradient-to-{edge/corner}</code> and see which way the gradient goes.</p>
    <p>Please note that <code>width</code> and <code>height</code> are completely removed in favor of <code>size-{axis}</code>.</p>
  </page>
`,Ni=Wf,Uf=`
  <page>
    <h1>Hover, focus and other states</h1>
    <p>Windblade does not come with functionality like hover or focus states. Please use Windblade together with <a href="https://www.npmjs.com/package/unocss-preset-mini-variants">unocss-preset-mini-variants</a> or other variant implementations if you need this functionality.</p>
  </page>
`,Di=Uf,Hi=pr,Kn=new Map([["Installation",Ei],["Options",Ri],["Semantic colors",Pi],["Logical properties",Ni],["$ syntax",Hi],["Hover, focus and other states",Di]]),Ff=Object.freeze(Object.defineProperty({__proto__:null,categoy:Kn,installation:Ei,semanticColors:Pi,logicalProperties:Ni,dollarSyntax:Hi,variants:Di,options:Ri,default:Kn},Symbol.toStringTag,{value:"Module"})),Bf=vr.windblade.windblade,Gf=`
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
};`,If=`
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
};`,Vf=`
  <page>
    <h1><title /></h1>
    <p>Colors in Windblade are based on the <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">OkLCH</a> model and have a 'base' and one or more 'on' colors.</p>

    <h2>Default colors</h2>
    <p>It is highly encouraged that you use your own colors, however, Windblade does come with a set of well-crafted example colors that are designed to demonstrate the semantic color system and were used to build this documnentation.</p>
    <example html="${k(`
      <div class="grid grid-fit-cols-m gap-s.4">
        ${(()=>{const e=Bf.colors;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
              <div class="bg-${t} flex flex-col border border-color-surface rounded-s overflow-hidden font-bold">
                <h1 class="p-s">${t}</h1>
                <div class="size-b-px shrink-0 bg-fg-1 opacity-[0.1]"></div>
                <div class="size-b-full flex flex-col gap-s p-s">
                  ${n.on.map((r,o)=>`<div class="text-fg-${o+1}">Fg-${o+1}</div>`).join("")}
                </div>
              </div>
            `).join(""):'<div class="theme-auto-20 font-bold">Error</div>'})()}
      </div>
    `)}" />

    <h2>Custom colors</h2>
    <p>Add a color by specifying an object like the following:</p>
    <pre lang="ts" code="${k(Gf)}" />

    <p>Dark scheme is the default and, unless overriden, light scheme is generated automatically by flipping the lightness value. That is great for effortlessly prototyping a light mode but you will often want more than simple lightness fliping. In those cases you can override any light mode component of the color manually. Default windblade colors use this to increase contrast and saturation in light mode.</p>
    <pre lang="ts" code="${k(If)}" />
  </page>
`,Wi=Vf,qf=vr.windblade.windblade,Te={tr:"border border-0 border-b-px border-color-surface",th:"p-b-s.4 p-ie-s font-bold text-fg-2",td:"p-b-s.4 p-ie-s text-fg-3"},Xf=`
const theme: Theme = {
  windblade: {
    proportions: {
      'half': 0.5,
      'full': 1,
      'double': 2,
    },
  },
};`,Kf=`
  <page>
    <h1><title /></h1>
    <p>Proportions are used throughout the whole preset for size, duration, opacity, etc.</p>
    <p>Since windblade uses the same proportions for everything it is very easy to customize and is highly recommended that you change them to match your design system.</p>

    <h2>Default proportions</h2>
    <p>By default Windblade is configured with 10-unit-based proportions, however, Windblade also includes an option to use Tailwind and Material Design v3 proportions.</p>
    <example html="${k(`
      <table class="border-collapse">
        <tr class="${Te.tr}">
          <th class="${Te.th}">Name</th>
          <th class="${Te.th}">Value</th>
          <th class="${Te.th}"></th>
        </tr>
        ${(()=>{const e=qf.proportions;return typeof e=="object"?Object.entries(e).map(([t,n])=>`
              <tr class="${Te.tr}">
                <td class="${Te.td} font-semibold">${t}</td>
                <td class="${Te.td} text-fg-4">${n}</td>
                <td class="${Te.td}"><div class="bg-accent rounded-s.2 size-b-s size-i-${t}"></div></td>
              </tr>
            `).join(""):""})()}
      </table>
    `)}" />

    <h2>Custom proportions</h2>
    <p>Add custom proportions by adding numbers like the following:</p>
    <pre lang="ts" code="${k(Xf)}" />

    <p>Proportions are converted to relevant units automatically. Rem is used for sizing, ms for timing, raw number for oapcity, etc.</p>
  </page>
`,Yf=Kf,Jf=`
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
`,Zf=`
  <page>
    <h1>Other theme objects</h1>
    <p>See the theme type below for other values you can customize.</p>

    <h2>Theme type</h2>
    <pre lang="ts" code="${k(Jf)}" />
  </page>
`,Qf=Zf,Yn=new Map([["Semantic Colors",Wi],["Proportions",Yf],["Other",Qf]]),eh=Object.freeze(Object.defineProperty({__proto__:null,categoy:Yn,colors:Wi,default:Yn},Symbol.toStringTag,{value:"Module"})),Ui=new Map([["Layout",new Map([["Aspect Ratio",Os().docs],["Container",Ms().docs],["Break After",Ls().docs],["Break Before",As().docs],["Disaply",Es().docs],["Object Position",Rs().docs]])],["Flexbox & Grid",new Map([["Grid Auto Columns",Hs().docs],["Grid Auto Rows",Ws().docs],["Grid Fit Columns",Us().docs],["Grid Fit Rows",Bs().docs],["Grid Fill Clumns",Fs().docs],["Grid Fill Rows",Gs().docs]])],["Spacing",new Map([["Padding",Vs().docs],["Margin",qs().docs],["Space between",Xs().docs]])],["Sizing",new Map([["Width & Height",Ks().docs],["Size",Ys().docs],["Min-Size",Zs().docs],["Max-Size",Qs().docs]])],["Background",new Map([["Color",un().docs],["Background Position",ei().docs]])],["Typography",new Map([["Font Family",ti().docs],["Font Size",ni().docs],["Font Smoothing",ri().docs],["Letter Spacing",oi().docs],["Line Height",si().docs],["Text Color",gn().docs],["Text Decoration Color",pn().docs],["Text Decoration Thickness",ii().docs],["Text Underline Offset",li().docs]])],["Borders",new Map([["Border Radius",ai().docs],["Border Width",ci().docs],["Border Color",dn().docs],["Outline Width",ui().docs],["Outline Offset",di().docs],["Outline Color",fn().docs],["Divide",fi().docs],["Ring",hi().docs]])],["Effects",new Map([["Box Shadow",mi().docs],["Opacity",gi().docs]])],["Filters",new Map([["Drop Shadow",pi().docs]])],["Tables",new Map([["Border spacing",bi().docs]])],["Transitions & Animation",new Map([["Transition Delay & Duration",vi().docs],["Transition Timing Function",$i().docs],["Animations",yi().docs],["Animation Delay & Duration",wi().docs],["Animation Timing Function",xi().docs]])],["Transforms",new Map([["Scale",ki().docs],["Rotate",Si().docs],["Translate",_i().docs],["Skew",Ci().docs]])],["Interactivity",new Map([["Scroll margin",ji().docs],["Scroll padding",Ti().docs],["Scroll snap type",Oi().docs],["Touch action",Mi().docs]])],["SVG",new Map([["Fill",hn().docs],["Stroke Color",mn().docs],["Stroke Width",Li().docs]])],["Accessibility",new Map([["Color Scheme",bn().docs]])]]),th=Object.freeze(Object.defineProperty({__proto__:null,default:Ui},Symbol.toStringTag,{value:"Module"})),nh=new Map([["Usage",Kn],["Theme",Yn],...Ui]),Fi=dr(nh),rh=Object.freeze(Object.defineProperty({__proto__:null,default:Fi,usage:Ff,theme:eh,rules:th},Symbol.toStringTag,{value:"Module"})),Bi=(e={})=>{var o,s,i,l,a,c,u;e.theme=(o=e.theme)!=null?o:"windblade";const t=Le(wu,Ai[e.theme]),n=zs(),r=Ts();return{name:"@windblade/unocss-preset",theme:t,rules:[...(s=n.rules)!=null?s:[],...(i=r.rules)!=null?i:[],...vf],variants:[...(l=n.variants)!=null?l:[],...(a=r.variants)!=null?a:[]],options:{...n.options,...r.options,...e},postprocess:[],preflights:[...(c=n.preflights)!=null?c:[],...(u=r.preflights)!=null?u:[],...yf],prefix:void 0,shortcuts:[]}},oh=Object.freeze(Object.defineProperty({__proto__:null,default:Bi,docs:rh},Symbol.toStringTag,{value:"Module"})),Yt=ye(()=>mu({presets:[Bi()],safelist:["scheme-dark-276","scheme-light-296"]})),sh=S('<div class="bg-surface rounded-s p-s flex gap-s text-fg-3"><div class="i-mdi-exclamation"></div>Please select a utility first</div>'),mo=S("<pre></pre>"),{formatter:go,highlighter:po}=De,$r=pe(),bo={pre:"bg-surface p-s rounded-s leading-$($s+$s.4) overflow-auto"},An=()=>sh.cloneNode(!0),ih=e=>{const t=ae($r);if(e.type==="element")switch(e.name){case"utils":return d(Dc,e);case"renderer":return null;case"viewport":return d(te,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(An,{})},get children(){return d(is,{get html(){var n;return(n=t==null?void 0:t.html())!=null?n:""},get css(){var n,r;return(r=(n=t==null?void 0:t.css())==null?void 0:n.fullCss)!=null?r:""},class:"bg-normal-2 rounded-s p-m.2 overflow-auto",rootStyle:"display: flex; align-items: center; justify-content: center;"})}});case"html":return d(te,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(An,{})},keyed:!0,children:({util:n})=>(()=>{const r=mo.cloneNode(!0);return P(o=>{var l,a,c,u;const s=bo.pre,i=(u=po())==null?void 0:u.highlight((c=(a=go())==null?void 0:a.html_beautify((l=t==null?void 0:t.html())!=null?l:""))!=null?c:"",{language:"xml"}).value.replaceAll(n,`<span class="bg-accent-2 rounded-s.4 p-i-s.2">${n}</span>`);return s!==o._v$&&O(r,o._v$=s),i!==o._v$2&&(r.innerHTML=o._v$2=i),o},{_v$:void 0,_v$2:void 0}),r})()});case"css":return d(te,{get when(){return t==null?void 0:t.selected()},get fallback(){return d(An,{})},get children(){const n=mo.cloneNode(!0);return P(r=>{var i,l,a,c,u;const o=`${bo.pre} css`,s=(u=po())==null?void 0:u.highlight((c=(a=go())==null?void 0:a.css_beautify((l=(i=t==null?void 0:t.css())==null?void 0:i.shortCss)!=null?l:""))!=null?c:"",{language:"css"}).value;return o!==r._v$3&&O(n,r._v$3=o),s!==r._v$4&&(n.innerHTML=r._v$4=s),r},{_v$3:void 0,_v$4:void 0}),n}})}},lh=e=>{const[t,n]=E(),[r,o]=E(""),[s,i]=E();ne(async()=>{var f,h;const c=(await Yt.generate((h=(f=t())==null?void 0:f.util)!=null?h:"",{safelist:!1,preflights:!1,minify:!0})).css,u=(await Yt.generate(r())).css;i({shortCss:c,fullCss:u})});const l=()=>e.children.map(c=>{var u;return c.type!=="element"||c.name!=="renderer"||!c.attributes||!c.attributes.html?null:[new RegExp((u=c.attributes.for)!=null?u:""),c.attributes.html]}).filter(Boolean),a=c=>{n(c);for(let u=0;u<l().length;++u){const[f,h]=l()[u];if(f.test(c.renderer)){o(h.replaceAll("$util",c.util));return}}};return d($r.Provider,{value:{selectUtil:a,selected:t,html:r,css:s},get children(){return d(lt.Provider,{get value(){return yt([ih])},get children(){return d(se,e)}})}})},vo=e=>{let t=Yt.config;return e.split(".").forEach(n=>t=t[n]),t},ah=e=>{const t=ae(ht),n="'for' requires an 'array' or 'object' attribute",r="'for' requires a 'value-as' attribute",o="'for' with an 'object' attribute requires a 'key-as' attribute",s=e.attributes;if(!s)return d(me,{children:n});if(s.array)return s.as?d(Ve,{get each(){return vo(Dn(s.array))},children:i=>d(ht.Provider,{get value(){return{...t,value:i}},get children(){return d(se,e)}})}):d(me,{children:r});if(s.object){const i=s["value-as"];if(!i)return d(me,{children:r});const l=s["key-as"];return l?d(Ve,{get each(){var a;return Object.entries((a=vo(Dn(s.object)))!=null?a:{})},children:([a,c])=>d(ht.Provider,{get value(){return{...t,[l]:a,[i]:`${c}`}},get children(){return d(se,e)}})}):d(me,{children:o})}return d(me,{children:n})},ch=e=>{const t=ae(ht);return`${t==null?void 0:t[e.var]}`},uh=e=>{const[t,n]=E("");return ne(async()=>{n((await Yt.generate(e.html)).css)}),d(is,{get html(){return e.html},get css(){return t()}})},dh=S('<h2 class="text-fg-1 font-bold text-m.2"></h2>'),fh=S('<h3 class="font-bold text-$($s+$s.2)"></h3>'),hh=S('<h4 class="font-bold"></h4>'),mh=S('<p class="text-fg-3 font-semibold leading-$($s+$s.2) max-size-i-[128ch]"></p>'),gh=S('<small class="text-fg-4"></small>'),ph=S('<a class="text-accent transition hover:highlight active:highlight+"></a>'),bh=S('<ul class="p-is-s flex flex-col gap-s.4"></ul>'),vh=S('<li class="text-fg-3 font-semibold leading-$($s+$s.2)"></li>'),$h=S('<code class="bg-surface p-i-s.4 rounded-s.4"></code>'),yh=e=>{var n;const t=ae(Gi);switch(e.type){case"text":return e.value;case"element":switch(e.name){case"h1":return(()=>{const r=dh.cloneNode(!0);return z(r,d(se,e)),r})();case"h2":return(()=>{const r=fh.cloneNode(!0);return z(r,d(se,e)),r})();case"h3":return(()=>{const r=hh.cloneNode(!0);return z(r,d(se,e)),r})();case"title":return(n=t==null?void 0:t.title)!=null?n:d(me,{children:"No title"});case"p":return(()=>{const r=mh.cloneNode(!0);return z(r,d(se,e)),r})();case"small":return(()=>{const r=gh.cloneNode(!0);return z(r,d(se,e)),r})();case"a":return(()=>{const r=ph.cloneNode(!0);return z(r,d(se,e)),P(()=>{var o,s;return Se(r,"href",(s=(o=e.attributes)==null?void 0:o.href)!=null?s:"#")}),r})();case"ul":return(()=>{const r=bh.cloneNode(!0);return z(r,d(se,e)),r})();case"li":return(()=>{const r=vh.cloneNode(!0);return z(r,d(se,e)),r})();case"code":return(()=>{const r=$h.cloneNode(!0);return z(r,d(se,e)),r})();case"pre":return d(_c,{get lang(){var r,o;return(o=(r=e.attributes)==null?void 0:r.lang)!=null?o:"txt"},get value(){var r,o;return(o=(r=e.attributes)==null?void 0:r.code)!=null?o:""}});case"example":return d(uh,{get html(){var r,o;return(o=(r=e.attributes)==null?void 0:r.html)!=null?o:""}});case"try-it":return d(lh,e);case"for":return d(ah,e);case"sample":return d(te,{get when(){var r;return(r=e.attributes)==null?void 0:r.var},keyed:!0,children:r=>d(ch,{var:r})});default:return d(me,{get children(){return["Unsupported XML element: ",D(()=>e.name)]}})}default:return d(me,{get children(){return["Unsupported XML node type: ",D(()=>e.type)]}})}},wh=e=>d(lt.Provider,{get value(){return yt([yh])},get children(){return d(se,e)}}),Gi=pe(),xh=e=>d(Gi.Provider,{get value(){return{title:e.title}},get children(){return d(Ve,{get each(){return e.children},children:t=>{switch(t.type){case"element":switch(t.name){case"page":return d(wh,t)}}return d(me,{children:"Only 'page' tag is recognized as the page root"})}})}}),kh=S('<div class="absolute size-i-full size-b-full overflow-auto"><div class="p-m.2 flex flex-col gap-s"></div></div>'),Sh=e=>(()=>{const t=kh.cloneNode(!0),n=t.firstChild;return z(n,d(ll,{fallback:"Loading...",get children(){return(()=>{const r=De.xml();if(!r)return"Error: Failed to load XML parser";let o;try{o=r.fromXml(e.page)}catch(s){return d(me,{get children(){return["Error parsing this page: ",s]}})}return o?d(xh,re(o,{get title(){return e.title}})):d(me,{children:"Error processing this page"})})()}})),t})();function _h(){const[e,t]=E(Fi);return{docs:e,setDocs:t}}const Ii=ye(_h),Ch=S('<nav class="p-m.2 overflow-auto border-solid border-0 border-ie-px border-color-fg-5 size-i-max size-b-full"></nav>'),$o=S("<div></div>"),zh=S('<div class="relative flex gap-s items-center p-s.4 p-i-m.2 border-solid border-0 border-be-px border-color-fg-5"><div class="flex flex-wrap gap-s.4 text-fg-3"></div></div>'),jh=S('<div class="flex flex-col absolute size-i-full size-b-full"><div><main></main></div></div>'),Th=S("<aside></aside>"),Oh=S('<div class="size-b-full p-m.2 flex gap-m.2 text-m.2 items-center font-bold"><div class="i-mdi-arrow-left"></div>Select something</div>'),Vi=()=>{var e;return(e=Ii.docs())!=null?e:[]},qi=e=>d(Ve,{get each(){return e.tree},children:({name:t,value:n})=>{const r=ts(t);return typeof n=="string"?d(Be,{path:r,get element(){return d(Sh,{page:n,title:t})}}):d(Be,{path:`${r}`,get children(){return d(qi,{tree:n})}})}}),Mh=()=>{const[e,t]=E(0),[n,r]=E(0),[o,s]=E(!1),[i,l]=E(!1);let a,c;const u=new ResizeObserver(([b])=>{t(b.borderBoxSize[0].inlineSize)}),f=new ResizeObserver(([b])=>{r(b.borderBoxSize[0].inlineSize)});ne(async()=>{u.disconnect(),a&&u.observe(a)}),ne(async()=>{f.disconnect(),c&&f.observe(c)}),ne(()=>{l(e()>=n()*4)});const h=()=>o()||i(),y=(()=>{const b=Ch.cloneNode(!0),m=c;return typeof m=="function"?pt(m,b):c=b,z(b,d(ns,{prefix:["docs"],get tree(){return Vi()}})),b})();return(()=>{const b=jh.cloneNode(!0),m=b.firstChild,w=m.firstChild,p=a;return typeof p=="function"?pt(p,b):a=b,z(b,d(te,{get when(){return!i()},get children(){const v=zh.cloneNode(!0),$=v.firstChild;return z(v,d(et,{onClick:()=>s(!o()),class:"p-s.6 rounded-full",style:"half",get children(){return[(()=>{const g=$o.cloneNode(!0);return P(()=>O(g,`i-mdi-menu ${o()?"opacity-zero":"opacity-s"} transition`)),g})(),(()=>{const g=$o.cloneNode(!0);return P(()=>O(g,`i-mdi-backburger ${o()?"opacity-s":"opacity-zero"} transition absolute`)),g})()]}}),$),v}}),m),z(m,d(te,{get when(){return!i()},get fallback(){return(()=>{const v=Th.cloneNode(!0);return z(v,y),v})()},get children(){return d(ya,{get isOpen(){return h()},onClose:()=>s(!1),style:"z-index: 1;",unmount:!1,title:"Navigation drawer",get children(){return[d(te,{get when(){return D(()=>!!o())()&&!i()},get children(){return d(wa,{class:"absolute inset-0"})}}),d(xa,{get class(){return`bg-normal-3 transition-transform ease-out ${i()?"relative":"absolute inset-b-0 inset-is-0"}`},get style(){return`transform: translateX(${h()?"0":"-100%"})`},children:y})]}})}}),w),w.$$click=()=>s(!1),z(w,d(es,{})),P(v=>{const $=`size-b-full flex relative ${i()?"flex-row":"flex-col"}`,g=`relative flex-1 transition-all ${o()&&!i()?"blur-s.2 opacity-s.4":""}`;return $!==v._v$&&O(m,v._v$=$),g!==v._v$2&&O(w,v._v$2=g),v},{_v$:void 0,_v$2:void 0}),b})()},Lh=()=>d(Be,{path:"docs",component:Mh,get children(){return[d(qi,{get tree(){return Vi()}}),d(Be,{path:"/*",get element(){return Oh.cloneNode(!0)}})]}});en(["click"]);const Ah=S('<div class="i-mdi-package"></div>'),Eh=S('<div class="i-mdi-palette"></div>'),Rh=S('<div class="i-mdi-dollar"></div>'),Ph=S("<h2>Modules</h2>"),Nh=S('<div class="text-$($s+$s.4) leading-$($s+$s.2) max-size-i-[48ch] text-fg-3">Windblade offers modules that are subsets of the complete experience as well as extesnions of it.</div>'),Dh=S('<section><ul class="list-none grid grid-fit-cols-m gap-s"></ul></section>'),Hh=S('<div class="absolute size-i-full size-b-full overflow-auto"><section class="p-b-m font-semibold"></section></div>'),Wh=S('<div class="text-m.2"></div>'),Uh=S('<div class="flex flex-col gap-s"><div class="flex flex-col gap-s.4"><h3 class="text-m.2 font-bold text-fg-2"></h3><p class="leading-$($s+$s.2)"></p></div><div class="flex gap-s.4"></div></div>'),Fh=S("<li></li>"),Bh=S('<div class="i-mdi-crown"></div>'),Gh=S('<div class="i-mdi-account-group"></div>'),Ih={header:{li:"bg-normal-4 p-s p-b-s.6 rounded-m.2 border border-color-surface"},h2:"text-fg-1 text-m.4 font-extrabold",h3:"font-extrabold text-$($m.2+$s) text-fg-1",h4:"font-bold text-m.2 text-fg-2",h5:"font-semibold text-fg-2 p-s",p:"leading-$($s+$s.2) max-size-i-[128ch]",pre:"p-s overflow-auto last:flex-1"},Vh=[{icon:Ah.cloneNode(!0),name:"Complete",description:"Normal Windblade. This is a temporary entry so we can switch back to it.",official:!0,loadDocs:async()=>(await tt(()=>Promise.resolve().then(()=>oh),void 0,import.meta.url)).docs.default},{icon:Eh.cloneNode(!0),name:"Color",description:"Semantic color utils from Windblade.",official:!0,loadDocs:async()=>(await tt(()=>Promise.resolve().then(()=>Zd),void 0,import.meta.url)).docs.default},{icon:Rh.cloneNode(!0),name:"Dollars",description:"$ syntax from Windblade.",official:!0,loadDocs:async()=>(await tt(()=>Promise.resolve().then(()=>af),void 0,import.meta.url)).docs.default}],qh=()=>(()=>{const e=Hh.cloneNode(!0),t=e.firstChild;return z(t,d(Qe,{class:"flex flex-col gap-s",get children(){return[(()=>{const n=Ph.cloneNode(!0);return P(()=>O(n,Ih.h2)),n})(),Nh.cloneNode(!0)]}})),z(e,d(Qe,{get children(){const n=Dh.cloneNode(!0),r=n.firstChild;return z(r,d(Ve,{each:Vh,children:o=>(()=>{const s=Fh.cloneNode(!0);return z(s,d(He,{style:"none",class:"size-b-full transition bg-accent-4 text-fg-3 border border-color-surface p-m.2 p-be-s gap-m.2 rounded-s flex flex-col justify-between",href:"/docs",onClick:async()=>{Ii.setDocs(await o.loadDocs())},get children(){return[(()=>{const i=Wh.cloneNode(!0);return z(i,()=>o.icon),i})(),(()=>{const i=Uh.cloneNode(!0),l=i.firstChild,a=l.firstChild,c=a.nextSibling,u=l.nextSibling;return z(a,()=>o.name),z(c,()=>o.description),z(u,(()=>{const f=D(()=>!!o.official);return()=>f()?[Bh.cloneNode(!0),"Official"]:[Gh.cloneNode(!0),"Community"]})()),i})()]}})),s})()})),n}}),null),e})(),Xh=S('<div class="i-mdi-brightness-4 transition"></div>'),Kh=S('<div class="absolute i-mdi-brightness-7 transition"></div>'),Yh=S('<div class="absolute i-mdi-brightness-2 transition"></div>'),Jh=S('<div class="i-simple-icons-github"></div>'),yo=S('<img alt="Logo" class="size-b-m.2">'),Zh=S('<div class="size-b-full grid" style="grid-template-rows: auto minmax(0, 1fr);"><header class="p-b-s.4 p-m.2 border border-color-transparent border-be-color-fg-5 flex items-center"><h1 class="font-bold text-fg-1 "></h1><div class="flex-1 flex justify-end"><div></div></div></header><div class="relative"></div></div>'),Qh=S('<div class="i-mdi-dots-vertical"></div>'),em=S('<div style="z-index: 1"></div>'),tm=()=>{const[e,t]=E(0),[n,r]=E(0),[o,s]=E(!1);let i,l;const a=()=>[d(He,{href:"/",children:"Home"}),d(He,{href:"/docs/Usage/Installation",children:"Docs"}),d(He,{href:"/modules",children:"Modules"}),d(et,{get onClick(){return Oe.toggleScheme},class:"p-s rounded-s relative",get children(){return[(()=>{const f=Xh.cloneNode(!0);return P(h=>Ue(f,`opacity: ${Oe.enforceScheme()===void 0?1:0}`,h)),f})(),(()=>{const f=Kh.cloneNode(!0);return P(h=>Ue(f,`opacity: ${Oe.enforceScheme()==="light"?1:0}`,h)),f})(),(()=>{const f=Yh.cloneNode(!0);return P(h=>Ue(f,`opacity: ${Oe.enforceScheme()==="dark"?1:0}`,h)),f})()]}}),d(Qo,{href:"https://github.com/StarLederer/windblade",get children(){return Jh.cloneNode(!0)}})],c=new ResizeObserver(([f])=>{t(f.borderBoxSize[0].inlineSize)}),u=new ResizeObserver(([f])=>{r(f.borderBoxSize[0].inlineSize)});return ne(async()=>{c.disconnect(),i&&c.observe(i)}),ne(async()=>{o(),u.disconnect(),l&&u.observe(l)}),ne(()=>{s(e()>=n()*1.2)}),(()=>{const f=Zh.cloneNode(!0),h=f.firstChild,y=h.firstChild,b=y.nextSibling,m=b.firstChild,w=h.nextSibling;z(y,d(He,{style:"none",href:"/",class:"flex gap-s.4 items-center -m-i-s.4 p-s.4 p-ie-s rounded-full transition-all hover:bg-accent-4",get children(){return[d(te,{get when(){return Oe.scheme()==="dark"},get fallback(){return(()=>{const $=yo.cloneNode(!0);return Se($,"src",Wa),$})()},get children(){const $=yo.cloneNode(!0);return Se($,"src",Ha),$}}),"Windblade"]}}));const p=i;typeof p=="function"?pt(p,b):i=b;const v=l;return typeof v=="function"?pt(v,m):l=m,z(m,a),z(b,d(ja,{defaultOpen:!1,get class(){return`${o()?"hidden":""}`},children:({isOpen:$})=>[d(ln,{style:"half",class:"rounded-full p-s",as:g=>d(Ta,g),get children(){return Qh.cloneNode(!0)}}),d(Oa,{unmount:!1,class:"relative",get children(){const g=em.cloneNode(!0);return z(g,a),P(()=>O(g,`flex flex-col gap-s.2 absolute inset-ie-0 inset-bs-0 bg-surface rounded-s m-b-s.8 p-s.2 border border-color-surface animation-duration-s animation-ease-linear backdrop-blur-s delay-m.2 ${$()?"delay-zero animate-in":"animate-out invisible"}`)),g}})]}),null),z(w,d(es,{})),P($=>{const g=`flex gap-s.4 ${o()?"":"invisible fixed"}`,C=!o();return g!==$._v$&&O(m,$._v$=g),C!==$._v$2&&Se(m,"aria-hidden",$._v$2=C),$},{_v$:void 0,_v$2:void 0}),f})()},nm=()=>d(Jl,{get source(){return ac()},get children(){return d(Zl,{get children(){return d(Be,{path:"/",component:tm,get children(){return[d(Be,{path:"/",component:bc}),d(Lh,{}),d(Be,{path:"modules",component:qh})]}})}})}}),rm=S("<div></div>"),om=()=>{const e=()=>`${Oe.scheme()==="light"?"scheme-light":"scheme-dark"} scheme-auto-${Oe.hue()}`;return(()=>{const t=rm.cloneNode(!0);return z(t,d(nm,{})),P(()=>O(t,`${e()} size-i-full size-b-full relative bg-normal-3 text-fg-2 overflow-hidden`)),t})()};pl(()=>d(om,{}),document.body);
