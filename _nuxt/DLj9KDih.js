import{z,A as H,B as x,C as L,D as N,E as $,G as k,H as E,I as C,J as v,K as D,L as R,r as I,M as U,o as F,c as G,N as T,m as W}from"./CPOLY2iT.js";async function J(e,t){return await V(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function V(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function Z({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=j(t));const s=i||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=j(s[n]))}),(n={})=>Object.entries(n).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=s[a];return typeof l=="function"&&(d=l(n[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(r)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function Q(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function X(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Y(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function K(e){const t={options:e},r=(s,n={})=>O(t,s,n),i=(s,n={},o={})=>r(s,{...o,modifiers:N(n,o.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,o,a)=>i(n,o,{...e.presets[s],...a});return i.options=e,i.getImage=r,i.getMeta=(s,n)=>ee(t,s,n),i.getSizes=(s,n)=>re(t,s,n),t.$img=i,i}async function ee(e,t,r){const i=O(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await J(e,i.url)}function O(e,t,r){var l,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=te(e,r.provider||e.options.provider),n=ie(e,r.preset);if(t=z(t)?t:H(t),!i.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const h=e.options.alias[g];h&&(t=x(h,t.slice(g.length)))}}if(i.validateDomains&&z(t)){const g=L(t).host;if(!e.options.domains.find(h=>h===g))return{url:t}}const o=N(r,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=y(o.modifiers.width)),(u=o.modifiers)!=null&&u.height&&(o.modifiers.height=y(o.modifiers.height));const d=i.getImage(t,o,e);return d.format=d.format||a||"",d}function te(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ie(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function re(e,t,r){var _,q,b,c,m;const i=y((_=r.modifiers)==null?void 0:_.width),s=y((q=r.modifiers)==null?void 0:q.height),n=Y(r.sizes),o=(b=r.densities)!=null&&b.trim()?Q(r.densities.trim()):e.options.densities;X(o);const a=i&&s?s/i:0,d=[],l=[];if(Object.keys(n).length>=1){for(const f in n){const p=A(f,String(n[f]),s,a,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of o)l.push({width:p._cWidth*w,src:M(e,t,r,p,w)})}}se(d)}else for(const f of o){const p=Object.keys(n)[0];let w=p?A(p,String(n[p]),s,a,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(c=r.modifiers)==null?void 0:c.width,_cHeight:(m=r.modifiers)==null?void 0:m.height}),l.push({width:f,src:M(e,t,r,w,f)})}ne(l);const u=l[l.length-1],g=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,h=g?"w":"x",S=l.map(f=>`${f.src} ${f.width}${h}`).join(", ");return{sizes:g,srcset:S,src:u==null?void 0:u.src}}function A(e,t,r,i,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const d=i?Math.round(a*i):r;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:d}}function M(e,t,r,i,s){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},r)}function se(e){var r;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function ne(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const oe=Z({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>$(e)+"_"+$(t)}),ae=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=oe(t)||"_";return r||(r=x(i.options.nuxt.baseURL,"/_ipx")),{url:x(r,s,k(e))}},ce=!0,de=!0,le=Object.freeze(Object.defineProperty({__proto__:null,getImage:ae,supportsAlias:de,validateDomains:ce},Symbol.toStringTag,{value:"Module"})),P={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};P.providers={ipxStatic:{provider:le,defaults:{}}};const B=()=>{const e=C(),t=E();return t.$img||t._img||(t._img=K({...P,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function ue(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const fe={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ge=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),r=v(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=B(),s=v(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:s}},he={...fe,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},me=["src"],ye=D({__name:"NuxtImg",props:he,emits:["load","error"],setup(e,{emit:t}){const r=e,i=R(),s=t,n=!1,o=B(),a=ge(r),d=I(!1),l=I(),u=v(()=>o.getSizes(r.src,{...a.options.value,sizes:r.sizes,densities:r.densities,modifiers:{...a.modifiers.value,width:y(r.width),height:y(r.height)}})),g=v(()=>{const c={...a.attrs.value,"data-nuxt-img":""};return(!r.placeholder||d.value)&&(c.sizes=u.value.sizes,c.srcset=u.value.srcset),c}),h=v(()=>{let c=r.placeholder;if(c===""&&(c=!0),!c||d.value)return!1;if(typeof c=="string")return c;const m=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return o(r.src,{...a.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},a.options.value)}),S=v(()=>r.sizes?u.value.src:o(r.src,a.modifiers.value,a.options.value)),_=v(()=>h.value?h.value:S.value),b=E().isHydrating;return U(()=>{if(h.value){const c=new Image;S.value&&(c.src=S.value),r.sizes&&(c.sizes=u.value.sizes||"",c.srcset=u.value.srcset),c.onload=m=>{d.value=!0,s("load",m)},ue("nuxt-image");return}l.value&&(l.value.complete&&b&&(l.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),l.value.onload=c=>{s("load",c)},l.value.onerror=c=>{s("error",c)})}),(c,m)=>(F(),G("img",T({ref_key:"imgEl",ref:l,class:r.placeholder&&!d.value?r.placeholderClass:void 0},{...W(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...W(i)},{src:_.value}),null,16,me))}});export{ye as _};
