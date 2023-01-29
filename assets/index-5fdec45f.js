var Mt=Object.defineProperty;var Tt=(t,e,n)=>e in t?Mt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Z=(t,e,n)=>(Tt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Y(){}function vt(t){return t()}function Qe(){return Object.create(null)}function re(t){t.forEach(vt)}function _t(t){return typeof t=="function"}function je(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Le;function Ee(t,e){return Le||(Le=document.createElement("a")),Le.href=e,t===Le.href}function Ct(t){return Object.keys(t).length===0}function o(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function we(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function k(){return z(" ")}function Q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return Array.from(t.childNodes)}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ge(t,e){t.value=e??""}function Bt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,l,e),r}let be;function _e(t){be=t}function Dt(){if(!be)throw new Error("Function called outside component initialization");return be}function Et(){const t=Dt();return(e,n,{cancelable:l=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=Bt(e,n,{cancelable:l});return r.slice().forEach(s=>{s.call(t,a)}),!a.defaultPrevented}return!0}}const pe=[],Je=[],Be=[],Xe=[],jt=Promise.resolve();let Fe=!1;function St(){Fe||(Fe=!0,jt.then(kt))}function Re(t){Be.push(t)}const ze=new Set;let he=0;function kt(){if(he!==0)return;const t=be;do{try{for(;he<pe.length;){const e=pe[he];he++,_e(e),It(e.$$)}}catch(e){throw pe.length=0,he=0,e}for(_e(null),pe.length=0,he=0;Je.length;)Je.pop()();for(let e=0;e<Be.length;e+=1){const n=Be[e];ze.has(n)||(ze.add(n),n())}Be.length=0}while(pe.length);for(;Xe.length;)Xe.pop()();Fe=!1,ze.clear(),_e(t)}function It(t){if(t.fragment!==null){t.update(),re(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Re)}}const De=new Set;let ae;function At(){ae={r:0,c:[],p:ae}}function Pt(){ae.r||re(ae.c),ae=ae.p}function te(t,e){t&&t.i&&(De.delete(t),t.i(e))}function me(t,e,n,l){if(t&&t.o){if(De.has(t))return;De.add(t),ae.c.push(()=>{De.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Ht(t,e){t.d(1),e.delete(t.key)}function zt(t,e,n,l,r,a,s,h,u,c,d,g){let p=t.length,y=a.length,w=p;const M={};for(;w--;)M[t[w].key]=w;const _=[],x=new Map,T=new Map;for(w=y;w--;){const L=g(r,a,w),D=n(L);let E=s.get(D);E?l&&E.p(L,e):(E=c(D,L),E.c()),x.set(D,_[w]=E),D in M&&T.set(D,Math.abs(w-M[D]))}const m=new Set,C=new Set;function W(L){te(L,1),L.m(h,d),s.set(L.key,L),d=L.first,y--}for(;p&&y;){const L=_[y-1],D=t[p-1],E=L.key,q=D.key;L===D?(d=L.first,p--,y--):x.has(q)?!s.has(E)||m.has(E)?W(L):C.has(q)?p--:T.get(E)>T.get(q)?(C.add(E),W(L)):(m.add(q),p--):(u(D,s),p--)}for(;p--;){const L=t[p];x.has(L.key)||u(L,s)}for(;y;)W(_[y-1]);return _}function qe(t){t&&t.c()}function Se(t,e,n,l){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),l||Re(()=>{const s=t.$$.on_mount.map(vt).filter(_t);t.$$.on_destroy?t.$$.on_destroy.push(...s):re(s),t.$$.on_mount=[]}),a.forEach(Re)}function Ie(t,e){const n=t.$$;n.fragment!==null&&(re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){t.$$.dirty[0]===-1&&(pe.push(t),St(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,l,r,a,s,h=[-1]){const u=be;_e(t);const c=t.$$={fragment:null,ctx:[],props:a,update:Y,not_equal:r,bound:Qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Qe(),dirty:h,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(g,p,...y)=>{const w=y.length?y[0]:p;return c.ctx&&r(c.ctx[g],c.ctx[g]=w)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](w),d&&$t(t,g)),p}):[],c.update(),d=!0,re(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const g=Lt(e.target);c.fragment&&c.fragment.l(g),g.forEach(j)}else c.fragment&&c.fragment.c();e.intro&&te(t.$$.fragment),Se(t,e.target,e.anchor,e.customElement),kt()}_e(u)}class Pe{$destroy(){Ie(this,1),this.$destroy=Y}$on(e,n){if(!_t(n))return Y;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Vt=(t,e)=>e.some(n=>t instanceof n);let Ze,et;function Ot(){return Ze||(Ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ft(){return et||(et=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yt=new WeakMap,Ne=new WeakMap,xt=new WeakMap,$e=new WeakMap,Ue=new WeakMap;function Rt(t){const e=new Promise((n,l)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",s)},a=()=>{n(oe(t.result)),r()},s=()=>{l(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&yt.set(n,t)}).catch(()=>{}),Ue.set(e,t),e}function Nt(t){if(Ne.has(t))return;const e=new Promise((n,l)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",s),t.removeEventListener("abort",s)},a=()=>{n(),r()},s=()=>{l(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",s),t.addEventListener("abort",s)});Ne.set(t,e)}let We={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ne.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wt(t){We=t(We)}function qt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const l=t.call(Ve(this),e,...n);return xt.set(l,e.sort?e.sort():[e]),oe(l)}:Ft().includes(t)?function(...e){return t.apply(Ve(this),e),oe(yt.get(this))}:function(...e){return oe(t.apply(Ve(this),e))}}function Ut(t){return typeof t=="function"?qt(t):(t instanceof IDBTransaction&&Nt(t),Vt(t,Ot())?new Proxy(t,We):t)}function oe(t){if(t instanceof IDBRequest)return Rt(t);if($e.has(t))return $e.get(t);const e=Ut(t);return e!==t&&($e.set(t,e),Ue.set(e,t)),e}const Ve=t=>Ue.get(t);function Gt(t,e,{blocked:n,upgrade:l,blocking:r,terminated:a}={}){const s=indexedDB.open(t,e),h=oe(s);return l&&s.addEventListener("upgradeneeded",u=>{l(oe(s.result),u.oldVersion,u.newVersion,oe(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),h.then(u=>{a&&u.addEventListener("close",()=>a()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),h}const Kt=["get","getKey","getAll","getAllKeys","count"],Yt=["put","add","delete","clear"],Oe=new Map;function tt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oe.get(e))return Oe.get(e);const n=e.replace(/FromIndex$/,""),l=e!==n,r=Yt.includes(n);if(!(n in(l?IDBIndex:IDBObjectStore).prototype)||!(r||Kt.includes(n)))return;const a=async function(s,...h){const u=this.transaction(s,r?"readwrite":"readonly");let c=u.store;return l&&(c=c.index(h.shift())),(await Promise.all([c[n](...h),r&&u.done]))[0]};return Oe.set(e,a),a}Wt(t=>({...t,get:(e,n,l)=>tt(e,n)||t.get(e,n,l),has:(e,n)=>!!tt(e,n)||t.has(e,n)}));const Qt=[{id:1,name:"Beef Burger",price:45e3,image:"/data/img/beef-burger.png",options:null},{id:2,name:"Sandwich",price:32e3,image:"/data/img/sandwich.png",options:null},{id:3,name:"Sawarma",price:3e4,image:"/data/img/sawarma.png",options:null},{id:4,name:"Croissant",price:16e3,image:"/data/img/croissant.png",options:null},{id:5,name:"Cinnamon Roll",price:2e4,image:"/data/img/cinnamon-roll.png",options:null},{id:6,name:"Choco Glaze Donut with Peanut",price:1e4,image:"/data/img/choco-glaze-donut-peanut.png",options:null},{id:7,name:"Choco Glazed Donut",price:1e4,image:"/data/img/choco-glaze-donut.png",options:null},{id:8,name:"Red Glazed Donut",price:1e4,image:"/data/img/red-glaze-donut.png",options:null},{id:9,name:"Iced Coffee Latte",price:25e3,image:"/data/img/coffee-latte.png",options:null},{id:10,name:"Iced Chocolate",price:2e4,image:"/data/img/ice-chocolate.png",options:null},{id:11,name:"Iced Tea",price:15e3,image:"/data/img/ice-tea.png",options:null},{id:12,name:"Iced Matcha Latte",price:22e3,image:"/data/img/matcha-latte.png",options:null}],Jt={products:Qt};async function Xt(){const t=await Gt("tailwind_store",1,{upgrade(e,n,l,r){e.createObjectStore("products",{keyPath:"id",autoIncrement:!0}),e.createObjectStore("sales",{keyPath:"id",autoIncrement:!0})}});return{db:t,getProducts:async()=>await t.getAll("products"),addProduct:async e=>await t.add("products",e),editProduct:async e=>await t.put("products",e.id,e),deleteProduct:async e=>await t.delete("products",e.id)}}class Zt{constructor(){Z(this,"db",null);Z(this,"time",null);Z(this,"firstTime");Z(this,"activeMenu","");Z(this,"loadingSampleData",!1);Z(this,"moneys",[2e3,5e3,1e4,2e4,5e4,1e5]);Z(this,"products",[]);Z(this,"startBlank",()=>{this.setFirstTime(!1)});Z(this,"setFirstTime",e=>{this.firstTime=e,e?localStorage.removeItem("first_time"):localStorage.setItem("first_time",new Date().getTime().toString())})}async initDatabase(){return this.db=await Xt(),this.loadProducts()}async loadProducts(){this.products=await this.db.getProducts(),this.products.length===0&&await this.startWithSampleData(),console.log("products loaded",this.products)}async startWithSampleData(){const e=Jt;this.products=e.products;for(let n of e.products)try{await this.db.addProduct(n)}catch(l){console.error(`Error while trying to add item: ${n.id} to data store!`),console.log(l)}this.setFirstTime(!1)}}function en(t){let e,n,l,r,a,s,h,u,c,d,g,p,y,w,M,_,x,T;return{c(){e=f("div"),n=f("div"),l=f("a"),l.innerHTML='<svg width="100px" height="100px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#15803c" d="M254.7 32.45c-14.6 15.09-28.7 29.9-39.2 44.31-12.1 16.49-19.3 32.24-19.3 46.14 0 24.3 2.1 48.4 7.2 67.7 17.1 12 31.4 26.4 42.3 43.7v-77h18V235c12.6-17.5 27.6-31.9 44.7-44 5.1-19.4 7.3-43.7 7.3-68.2 0-13.9-7.2-29.55-19.3-46.04-10.5-14.41-26.5-29.22-41.7-44.31zM109.6 172.4c-9.79.2-21.86 2.5-34.03 6.6-17 5.7-35.64 14.6-54.58 24 9.68 18.4 19.36 36.3 29.71 50.7 11.85 18.9 24.5 30.5 38.07 34.8 24.33 7.6 45.73 12.2 65.73 13.3 18-12.5 37.4-21.6 57.3-26.5l-74.7-26 5.6-17.2 75.4 23.8c3.1-5.1 7.1-9.6 11.9-13-20.6-32.6-55.4-52.9-104.1-68.2-5-1.7-10.4-2.4-16.3-2.3zm290.8.3c-5.1.1-9.8.8-14.1 2.2-49.5 15.3-83.3 35.4-104 67.9 4.9 3.5 9.1 8 12.1 13.2l72.5-23.6 6.7 17.2-73.5 26c.1 1.5.2 2.9.2 4.4 0 4.6-.8 9.1-2.2 13.3 35.7 14.2 76.1 10.7 124.3-4.7 13.3-4.1 25.6-15.8 37.2-34.8 10.2-14.3 21.7-32.3 31.4-50.6-20.9-9.4-39.1-18.3-55.7-24-11.9-4.1-22.9-6.5-32.7-6.6zm-145.4 80c-13.8 0-24.8 13.5-24.8 27.3s11 24.8 24.8 24.8c14.4 0 27.2-11 27.2-24.8s-12.8-27.3-27.2-27.3zM214.2 293c-38 9.6-69.5 35.6-98.6 78.1-8.2 11.2-11.3 27.8-11 48 .3 17.5 3.2 37.6 6.4 60.5 20.3-3.3 40.3-6.8 57.6-11.9 21.2-8.5 36-16.6 44.2-27.8 14.4-19.9 25.5-38.9 32.7-57.6-6.7-22.3-9.7-42.3-8.3-62.7l-44.6 63.9-15.3-10.7 45.8-64.5c-4-4.3-7-9.7-8.9-15.3zm76 16.6l44 63.1-14.6 10.6-46.1-64.2c-5.9 2.4-12.3 3.7-18.5 3.7h-.1c-2.4 38.7 13.6 77 44.6 116.9 8.1 11.3 22.9 19.4 42.2 27.8 16.7 5.2 38.8 8.6 59.5 11.9 3.2-22.9 6.2-43 6.4-60.5.3-20.1-2.8-36.7-11-47.9-14.4-22.2-31.2-38.5-46.6-51.1-20.9.4-40.8-2.8-59.8-10.3z"></path></svg>',r=k(),a=f("ul"),s=f("li"),h=f("a"),u=f("span"),c=we("svg"),d=we("path"),g=k(),p=f("li"),p.innerHTML='<a class="flex items-center"><span class="flex items-center justify-center text-green-100 hover:bg-green-400 hover:cursor-pointer h-12 w-12 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg></span></a>',y=k(),w=f("li"),w.innerHTML='<a class="flex items-center"><span class="flex items-center justify-center text-green-100 hover:bg-green-400 hover:cursor-pointer h-12 w-12 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></span></a>',M=k(),_=f("li"),_.innerHTML='<a class="flex items-center"><span class="flex items-center justify-center text-green-100 hover:bg-green-400 hover:cursor-pointer h-12 w-12 rounded-full"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span></a>',x=k(),T=f("a"),T.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>',i(l,"class","flex items-center justify-center h-12 w-12 text-green-700 rounded-full"),i(d,"stroke-linecap","round"),i(d,"stroke-linejoin","round"),i(d,"stroke-width","2"),i(d,"d","M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"),i(c,"xmlns","http://www.w3.org/2000/svg"),i(c,"class","h-6 w-6"),i(c,"fill","none"),i(c,"viewBox","0 0 24 24"),i(c,"stroke","currentColor"),i(u,"class",t[0]?"bg-green-300 shadow-lg text-white flex items-center justify-center h-12 w-12 rounded-full":"hover:bg-green-400 hover:cursor-pointer text-green-100 flex items-center justify-center h-12 w-12 rounded-full"),i(h,"class","flex items-center"),i(a,"class","flex flex-col space-y-2 mt-12"),i(T,"href","https://github.com/emsifa/tailwind-pos"),i(T,"target","_blank"),i(T,"rel","noreferrer"),i(T,"class","mt-auto flex items-center justify-center text-green-200 hover:text-green-100 h-10 w-10 focus:outline-none"),i(n,"class","flex flex-col items-center py-4 flex-shrink-0 w-20 bg-green-500 rounded-2xl"),i(e,"class","flex flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4")},m(m,C){S(m,e,C),o(e,n),o(n,l),o(n,r),o(n,a),o(a,s),o(s,h),o(h,u),o(u,c),o(c,d),o(a,g),o(a,p),o(a,y),o(a,w),o(a,M),o(a,_),o(n,x),o(n,T)},p:Y,i:Y,o:Y,d(m){m&&j(e)}}}function tn(t,e,n){let{activeMenu:l}=e,r=l=="pos";return t.$$set=a=>{"activeMenu"in a&&n(1,l=a.activeMenu)},[r,l]}class nn extends Pe{constructor(e){super(),Ae(this,e,tn,en,je,{activeMenu:1})}}const ln=""+new URL("beep-29-8587625f.mp3",import.meta.url).href,on=""+new URL("button-21-12d23797.mp3",import.meta.url).href;function nt(t,e,n){const l=t.slice();return l[41]=e[n],l}function lt(t,e,n){const l=t.slice();return l[44]=e[n],l[45]=e,l[46]=n,l}function ot(t,e,n){const l=t.slice();return l[47]=e[n],l}function rt(t){let e;return{c(){e=f("div"),e.innerHTML=`<div class="w-full text-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg> 
                   <p class="text-xl">YOU DON&#39;T HAVE
                      <br/>
                      ANY PRODUCTS TO SHOW</p></div>`,i(e,"class","select-none bg-teal-200 rounded-2xl flex flex-wrap content-center justify-center h-full opacity-25")},m(n,l){S(n,e,l)},d(n){n&&j(e)}}}function it(t){let e,n,l,r,a,s,h,u,c,d,g,p;return{c(){e=f("div"),n=f("div"),l=we("svg"),r=we("path"),a=k(),s=f("p"),h=z(`EMPTY SEARCH RESULT\r
                      `),u=f("br"),c=z(`\r
                      "`),d=f("span"),g=z(t[3]),p=z('"'),i(r,"stroke-linecap","round"),i(r,"stroke-linejoin","round"),i(r,"stroke-width","2"),i(r,"d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"),i(l,"xmlns","http://www.w3.org/2000/svg"),i(l,"class","h-24 w-24 inline-block"),i(l,"fill","none"),i(l,"viewBox","0 0 24 24"),i(l,"stroke","currentColor"),i(d,"class","font-semibold"),i(s,"class","text-xl"),i(n,"class","w-full text-center"),i(e,"class","select-none bg-teal-200 rounded-2xl flex flex-wrap content-center justify-center h-full opacity-25")},m(y,w){S(y,e,w),o(e,n),o(n,l),o(l,r),o(n,a),o(n,s),o(s,h),o(s,u),o(s,c),o(s,d),o(d,g),o(s,p)},p(y,w){w[0]&8&&ee(g,y[3])},d(y){y&&j(e)}}}function st(t){let e,n=[],l=new Map,r=t[4]();const a=s=>s[47].id;for(let s=0;s<r.length;s+=1){let h=ot(t,r,s),u=a(h);l.set(u,n[s]=at(u,h))}return{c(){e=f("div");for(let s=0;s<n.length;s+=1)n[s].c();i(e,"class","grid grid-cols-4 gap-4 pb-3")},m(s,h){S(s,e,h);for(let u=0;u<n.length;u+=1)n[u].m(e,null)},p(s,h){h[0]&40976&&(r=s[4](),n=zt(n,h,a,1,s,r,l,e,Ht,at,null,ot))},d(s){s&&j(e);for(let h=0;h<n.length;h+=1)n[h].d()}}}function at(t,e){let n,l,r,a,s,h,u,c=e[47].name+"",d,g,p,y=e[13](e[47].price)+"",w,M,_,x;function T(){return e[19](e[47])}return{key:t,first:null,c(){n=f("button"),l=f("img"),s=k(),h=f("div"),u=f("p"),d=z(c),g=k(),p=f("p"),w=z(y),M=k(),Ee(l.src,r=e[47].image)||i(l,"src",r),i(l,"alt",a=e[47].name),i(u,"class","flex-grow truncate mr-1"),i(p,"class","nowrap font-semibold"),i(h,"class","flex pb-3 px-3 text-sm -mt-3"),i(n,"class","select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"),this.first=n},m(m,C){S(m,n,C),o(n,l),o(n,s),o(n,h),o(h,u),o(u,d),o(h,g),o(h,p),o(p,w),o(n,M),_||(x=Q(n,"click",T),_=!0)},p(m,C){e=m,C[0]&16&&!Ee(l.src,r=e[47].image)&&i(l,"src",r),C[0]&16&&a!==(a=e[47].name)&&i(l,"alt",a),C[0]&16&&c!==(c=e[47].name+"")&&ee(d,c),C[0]&16&&y!==(y=e[13](e[47].price)+"")&&ee(w,y)},d(m){m&&j(n),_=!1,x()}}}function ct(t){let e;return{c(){e=f("div"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="h-16 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> 
             <p>CART EMPTY</p>`,i(e,"class","flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center")},m(n,l){S(n,e,l)},d(n){n&&j(e)}}}function ut(t){let e,n,l,r,a,s,h,u,c,d,g,p,y,w=t[6]>0&&ft(t),M=t[2],_=[];for(let x=0;x<M.length;x+=1)_[x]=dt(lt(t,M,x));return{c(){e=f("div"),n=f("div"),l=f("div"),r=we("svg"),a=we("path"),s=k(),w&&w.c(),h=k(),u=f("div"),c=f("button"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>',d=k(),g=f("div");for(let x=0;x<_.length;x+=1)_[x].c();i(a,"stroke-linecap","round"),i(a,"stroke-linejoin","round"),i(a,"stroke-width","2"),i(a,"d","M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"),i(r,"xmlns","http://www.w3.org/2000/svg"),i(r,"class","h-6 inline-block"),i(r,"fill","none"),i(r,"viewBox","0 0 24 24"),i(r,"stroke","currentColor"),i(l,"class","pl-8 text-left text-lg py-4 relative"),i(c,"class","text-gray-300 hover:text-pink-500 focus:outline-none"),i(u,"class","flex-grow px-8 text-right text-lg py-4 relative"),i(n,"class","h-16 text-center flex justify-center"),i(g,"class","flex-1 w-full px-4 overflow-auto"),i(e,"class","flex-1 flex flex-col overflow-auto")},m(x,T){S(x,e,T),o(e,n),o(n,l),o(l,r),o(r,a),o(l,s),w&&w.m(l,null),o(n,h),o(n,u),o(u,c),o(e,d),o(e,g);for(let m=0;m<_.length;m+=1)_[m].m(g,null);p||(y=Q(c,"click",t[20]),p=!0)},p(x,T){if(x[6]>0?w?w.p(x,T):(w=ft(x),w.c(),w.m(l,null)):w&&(w.d(1),w=null),T[0]&24580){M=x[2];let m;for(m=0;m<M.length;m+=1){const C=lt(x,M,m);_[m]?_[m].p(C,T):(_[m]=dt(C),_[m].c(),_[m].m(g,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=M.length}},d(x){x&&j(e),w&&w.d(),bt(_,x),p=!1,y()}}}function ft(t){let e,n;return{c(){e=f("div"),n=z(t[6]),i(e,"class","text-center absolute bg-green-500 text-white w-5 h-5 text-xs p-0 leading-5 rounded-full -right-2 top-3")},m(l,r){S(l,e,r),o(e,n)},p(l,r){r[0]&64&&ee(n,l[6])},d(l){l&&j(e)}}}function dt(t){let e,n,l,r,a,s,h=t[44].name+"",u,c,d,g=t[13](t[44].price)+"",p,y,w,M,_,x,T,m,C,W,L,D;function E(){return t[21](t[44])}function q(){t[22].call(T,t[45],t[46])}function ne(){return t[23](t[44])}return{c(){e=f("div"),n=f("img"),r=k(),a=f("div"),s=f("h5"),u=z(h),c=k(),d=f("p"),p=z(g),y=k(),w=f("div"),M=f("div"),_=f("button"),_.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>',x=k(),T=f("input"),m=k(),C=f("button"),C.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>',W=k(),Ee(n.src,l=t[44].image)||i(n,"src",l),i(n,"alt",""),i(n,"class","rounded-lg h-10 w-10 bg-white shadow mr-2"),i(s,"class","text-sm"),i(d,"class","text-xs block"),i(a,"class","flex-grow"),i(_,"class","rounded-lg text-center py-1 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"),i(T,"type","text"),i(T,"class","bg-white rounded-lg text-center shadow focus:outline-none focus:shadow-lg text-sm"),i(C,"class","rounded-lg text-center py-1 text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"),i(M,"class","w-28 grid grid-cols-3 gap-2 ml-2"),i(w,"class","py-1"),i(e,"class","select-none mb-3 bg-gray-50 rounded-lg w-full text-gray-700 py-2 px-2 flex justify-center")},m(I,A){S(I,e,A),o(e,n),o(e,r),o(e,a),o(a,s),o(s,u),o(a,c),o(a,d),o(d,p),o(e,y),o(e,w),o(w,M),o(M,_),o(M,x),o(M,T),ge(T,t[44].qty),o(M,m),o(M,C),o(e,W),L||(D=[Q(_,"click",E),Q(T,"input",q),Q(C,"click",ne)],L=!0)},p(I,A){t=I,A[0]&4&&!Ee(n.src,l=t[44].image)&&i(n,"src",l),A[0]&4&&h!==(h=t[44].name+"")&&ee(u,h),A[0]&4&&g!==(g=t[13](t[44].price)+"")&&ee(p,g),A[0]&4&&T.value!==t[44].qty&&ge(T,t[44].qty)},d(I){I&&j(e),L=!1,re(D)}}}function ht(t){let e,n,l,r=t[41]+"",a,s,h;function u(){return t[26](t[41])}return{c(){e=f("button"),n=z("+"),l=f("span"),a=z(r),i(e,"class","bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm")},m(c,d){S(c,e,d),o(e,n),o(e,l),o(l,a),s||(h=Q(e,"click",u),s=!0)},p(c,d){t=c,d[0]&1&&r!==(r=t[41]+"")&&ee(a,r)},d(c){c&&j(e),s=!1,h()}}}function pt(t){let e,n,l,r,a;return{c(){e=f("div"),n=f("div"),n.textContent="CHANGE",l=k(),r=f("div"),a=z(t[8]),i(n,"class","text-green-800"),i(r,"class","text-right flex-grow text-green-600"),i(e,"class","flex mb-3 text-lg font-semibold bg-green-50 text-gray-700 rounded-lg py-2 px-3")},m(s,h){S(s,e,h),o(e,n),o(e,l),o(e,r),o(r,a)},p(s,h){h[0]&256&&ee(a,s[8])},d(s){s&&j(e)}}}function gt(t){let e,n,l;return{c(){e=f("div"),n=f("div"),l=z(t[8]),i(n,"class","text-right flex-grow text-pink-600"),i(e,"class","flex mb-3 text-lg font-semibold bg-pink-100 text-gray-700 rounded-lg py-2 px-3")},m(r,a){S(r,e,a),o(e,n),o(n,l)},p(r,a){a[0]&256&&ee(l,r[8])},d(r){r&&j(e)}}}function mt(t){let e;return{c(){e=f("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>',i(e,"class","flex justify-center mb-3 text-lg font-semibold bg-green-50 text-green-700 rounded-lg py-2 px-3")},m(n,l){S(n,e,l)},d(n){n&&j(e)}}}function rn(t){let e,n,l,r,a,s,h,u,c,d,g=t[4]().length===0&&t[3].length>0,p,y=t[4]().length,w,M,_,x,T,m,C,W,L,D,E=t[13](t[5])+"",q,ne,I,A,ce,ke,le,ue,ye,J,xe,ve,Me,ie,v,B,se,fe,X,Ge,Te,Ce,He,Ke,U=t[0].products.length===0&&rt(),$=g&&it(t),V=y&&st(t),G=t[2].length===0&&ct(),O=t[2].length>0&&ut(t),de=t[0].moneys,F=[];for(let b=0;b<de.length;b+=1)F[b]=ht(nt(t,de,b));let R=t[1]>0&&pt(t),N=t[1]<0&&gt(t),K=t[1]==0&&t[2].length>0&&mt();return{c(){e=f("div"),n=f("div"),l=f("div"),r=f("div"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>',a=k(),s=f("input"),h=k(),u=f("div"),c=f("div"),U&&U.c(),d=k(),$&&$.c(),p=k(),V&&V.c(),w=k(),M=f("div"),_=f("div"),G&&G.c(),x=k(),O&&O.c(),T=k(),m=f("div"),C=f("div"),W=f("div"),W.textContent="TOTAL",L=k(),D=f("div"),q=z(E),ne=k(),I=f("div"),A=f("div"),ce=f("div"),ce.textContent="CASH",ke=k(),le=f("div"),ue=f("div"),ue.textContent="Rp",ye=k(),J=f("input"),xe=k(),ve=f("hr"),Me=k(),ie=f("div");for(let b=0;b<F.length;b+=1)F[b].c();v=k(),R&&R.c(),B=k(),N&&N.c(),se=k(),K&&K.c(),fe=k(),X=f("button"),Ge=z("SUBMIT"),i(r,"class","absolute left-5 top-3 px-2 py-2 rounded-full bg-green-500 text-white"),i(s,"type","text"),i(s,"class","bg-white rounded-full shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"),i(s,"placeholder","Type product name ..."),i(l,"class","flex px-2 flex-row relative"),i(c,"class","h-full overflow-y-auto px-2"),i(u,"class","h-full overflow-hidden mt-4"),i(n,"class","flex flex-col h-full w-full py-4"),i(D,"class","text-right w-full"),i(C,"class","flex mb-3 text-lg font-semibold text-gray-700"),i(ce,"class","flex-grow text-left"),i(ue,"class","mr-2"),i(J,"type","text"),i(J,"class","w-28 text-right bg-white shadow rounded-lg focus:bg-white focus:shadow-lg px-2 focus:outline-none"),i(le,"class","flex text-right"),i(A,"class","flex text-lg font-semibold"),i(ve,"class","my-2"),i(ie,"class","grid grid-cols-3 gap-2 mt-2"),i(I,"class","mb-3 text-gray-700 px-3 pt-2 pb-3 rounded-lg bg-gray-50"),i(X,"class",Te=t[7]?"text-white rounded-full text-lg w-full py-3 focus:outline-none bg-green-500 hover:bg-green-600":"text-white rounded-full text-lg w-full py-3 focus:outline-none bg-gray-200"),X.disabled=Ce=!t[7],i(m,"class","select-none h-auto w-full text-center pt-3 pb-4 px-4"),i(_,"class","bg-white rounded-2xl flex flex-col h-full shadow"),i(M,"class","w-5/12 flex flex-col h-full pr-4 pl-2 py-4"),i(e,"class","flex-grow flex")},m(b,P){S(b,e,P),o(e,n),o(n,l),o(l,r),o(l,a),o(l,s),ge(s,t[3]),o(n,h),o(n,u),o(u,c),U&&U.m(c,null),o(c,d),$&&$.m(c,null),o(c,p),V&&V.m(c,null),o(e,w),o(e,M),o(M,_),G&&G.m(_,null),o(_,x),O&&O.m(_,null),o(_,T),o(_,m),o(m,C),o(C,W),o(C,L),o(C,D),o(D,q),o(m,ne),o(m,I),o(I,A),o(A,ce),o(A,ke),o(A,le),o(le,ue),o(le,ye),o(le,J),ge(J,t[9]),o(I,xe),o(I,ve),o(I,Me),o(I,ie);for(let H=0;H<F.length;H+=1)F[H].m(ie,null);o(m,v),R&&R.m(m,null),o(m,B),N&&N.m(m,null),o(m,se),K&&K.m(m,null),o(m,fe),o(m,X),o(X,Ge),He||(Ke=[Q(s,"input",t[18]),Q(J,"input",t[24]),Q(J,"keyup",t[25]),Q(X,"click",t[27])],He=!0)},p(b,P){if(P[0]&8&&s.value!==b[3]&&ge(s,b[3]),b[0].products.length===0?U||(U=rt(),U.c(),U.m(c,d)):U&&(U.d(1),U=null),P[0]&24&&(g=b[4]().length===0&&b[3].length>0),g?$?$.p(b,P):($=it(b),$.c(),$.m(c,p)):$&&($.d(1),$=null),P[0]&16&&(y=b[4]().length),y?V?V.p(b,P):(V=st(b),V.c(),V.m(c,null)):V&&(V.d(1),V=null),b[2].length===0?G||(G=ct(),G.c(),G.m(_,x)):G&&(G.d(1),G=null),b[2].length>0?O?O.p(b,P):(O=ut(b),O.c(),O.m(_,T)):O&&(O.d(1),O=null),P[0]&32&&E!==(E=b[13](b[5])+"")&&ee(q,E),P[0]&512&&J.value!==b[9]&&ge(J,b[9]),P[0]&1025){de=b[0].moneys;let H;for(H=0;H<de.length;H+=1){const Ye=nt(b,de,H);F[H]?F[H].p(Ye,P):(F[H]=ht(Ye),F[H].c(),F[H].m(ie,null))}for(;H<F.length;H+=1)F[H].d(1);F.length=de.length}b[1]>0?R?R.p(b,P):(R=pt(b),R.c(),R.m(m,B)):R&&(R.d(1),R=null),b[1]<0?N?N.p(b,P):(N=gt(b),N.c(),N.m(m,se)):N&&(N.d(1),N=null),b[1]==0&&b[2].length>0?K||(K=mt(),K.c(),K.m(m,fe)):K&&(K.d(1),K=null),P[0]&128&&Te!==(Te=b[7]?"text-white rounded-full text-lg w-full py-3 focus:outline-none bg-green-500 hover:bg-green-600":"text-white rounded-full text-lg w-full py-3 focus:outline-none bg-gray-200")&&i(X,"class",Te),P[0]&128&&Ce!==(Ce=!b[7])&&(X.disabled=Ce)},i:Y,o:Y,d(b){b&&j(e),U&&U.d(),$&&$.d(),V&&V.d(),G&&G.d(),O&&O.d(),bt(F,b),R&&R.d(),N&&N.d(),K&&K.d(),He=!1,re(Ke)}}}function sn(t,e,n){let l,r,a,s,h,u,{posApp:c}=e,d=0,g=0,p=[],y="",w=v=>{n(17,d=(d||0)+v),M(),console.log(d),ne()},M=()=>{n(1,g=d-x())},_=v=>{n(17,d=parseFloat(v.replace(/[^0-9]+/g,""))),M()},x=()=>p.reduce((v,B)=>v+B.qty*B.price,0);const T=()=>{const v=new Date;`${Math.round(v.getTime()/1e3)}`,m(v)},m=v=>new Intl.DateTimeFormat("en-GB").format(v),C=v=>(v||"").toString().replace(/^0|\./g,"").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),W=v=>v?`Rp. ${C(v)}`:"Rp. 0",L=(v,B)=>{const se=p.findIndex(X=>X.id===v.id);if(se===-1)return;console.log(`adding ${B}`),console.log("to item:"),console.log(v);const fe=v.qty+B;fe===0?(p.splice(se,1),n(2,p=Object.assign([...p])),I()):(n(2,p[se].qty=fe,p),ne()),M()},D=v=>{const B=E(v);B===-1?n(2,p=Object.assign([...p,{...v,qty:1}])):(n(2,p[B].qty+=1,p),n(2,p=Object.assign([...p]))),ne(),M()},E=v=>p.findIndex(B=>B.id===v.id),q=()=>{console.log("clear cart..."),n(17,d=0),n(2,p=[]),M(),I()},ne=()=>{A(ln)},I=()=>{A(on)},A=v=>{const B=new Audio;B.src=v,B.play()};console.log("existing products:"),console.log(c.products);function ce(){y=this.value,n(3,y)}const ke=v=>{D(v)},le=()=>q(),ue=v=>{L(v,-1)};function ye(v,B){v[B].qty=this.value,n(2,p)}const J=v=>{L(v,1)};function xe(){l=this.value,n(9,l),n(17,d)}const ve=()=>{_(l)},Me=v=>{w(v)},ie=()=>{T()};return t.$$set=v=>{"posApp"in v&&n(0,c=v.posApp)},t.$$.update=()=>{t.$$.dirty[0]&131072&&n(9,l=C(d)),t.$$.dirty[0]&2&&n(8,r=W(g)),t.$$.dirty[0]&6&&n(7,a=g>=0&&p.length>0),t.$$.dirty[0]&4&&n(6,s=p.reduce((v,B)=>v+B.qty,0)),t.$$.dirty[0]&4&&n(5,h=p.reduce((v,B)=>v+B.qty*B.price,0)),t.$$.dirty[0]&9&&n(4,u=()=>{const v=y?new RegExp(y,"gi"):null;return c.products.filter(B=>!v||B.name.match(v))})},[c,g,p,y,u,h,s,a,r,l,w,_,T,W,L,D,q,d,ce,ke,le,ue,ye,J,xe,ve,Me,ie]}class an extends Pe{constructor(e){super(),Ae(this,e,sn,rn,je,{posApp:0},null,[-1,-1])}}function cn(t){let e,n,l,r,a,s,h,u,c,d;return{c(){e=f("div"),n=f("div"),l=f("div"),l.innerHTML=`<svg width="100px" height="100px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#15803c" d="M254.7 32.45c-14.6 15.09-28.7 29.9-39.2 44.31-12.1 16.49-19.3 32.24-19.3 46.14 0 24.3 2.1 48.4 7.2 67.7 17.1 12 31.4 26.4 42.3 43.7v-77h18V235c12.6-17.5 27.6-31.9 44.7-44 5.1-19.4 7.3-43.7 7.3-68.2 0-13.9-7.2-29.55-19.3-46.04-10.5-14.41-26.5-29.22-41.7-44.31zM109.6 172.4c-9.79.2-21.86 2.5-34.03 6.6-17 5.7-35.64 14.6-54.58 24 9.68 18.4 19.36 36.3 29.71 50.7 11.85 18.9 24.5 30.5 38.07 34.8 24.33 7.6 45.73 12.2 65.73 13.3 18-12.5 37.4-21.6 57.3-26.5l-74.7-26 5.6-17.2 75.4 23.8c3.1-5.1 7.1-9.6 11.9-13-20.6-32.6-55.4-52.9-104.1-68.2-5-1.7-10.4-2.4-16.3-2.3zm290.8.3c-5.1.1-9.8.8-14.1 2.2-49.5 15.3-83.3 35.4-104 67.9 4.9 3.5 9.1 8 12.1 13.2l72.5-23.6 6.7 17.2-73.5 26c.1 1.5.2 2.9.2 4.4 0 4.6-.8 9.1-2.2 13.3 35.7 14.2 76.1 10.7 124.3-4.7 13.3-4.1 25.6-15.8 37.2-34.8 10.2-14.3 21.7-32.3 31.4-50.6-20.9-9.4-39.1-18.3-55.7-24-11.9-4.1-22.9-6.5-32.7-6.6zm-145.4 80c-13.8 0-24.8 13.5-24.8 27.3s11 24.8 24.8 24.8c14.4 0 27.2-11 27.2-24.8s-12.8-27.3-27.2-27.3zM214.2 293c-38 9.6-69.5 35.6-98.6 78.1-8.2 11.2-11.3 27.8-11 48 .3 17.5 3.2 37.6 6.4 60.5 20.3-3.3 40.3-6.8 57.6-11.9 21.2-8.5 36-16.6 44.2-27.8 14.4-19.9 25.5-38.9 32.7-57.6-6.7-22.3-9.7-42.3-8.3-62.7l-44.6 63.9-15.3-10.7 45.8-64.5c-4-4.3-7-9.7-8.9-15.3zm76 16.6l44 63.1-14.6 10.6-46.1-64.2c-5.9 2.4-12.3 3.7-18.5 3.7h-.1c-2.4 38.7 13.6 77 44.6 116.9 8.1 11.3 22.9 19.4 42.2 27.8 16.7 5.2 38.8 8.6 59.5 11.9 3.2-22.9 6.2-43 6.4-60.5.3-20.1-2.8-36.7-11-47.9-14.4-22.2-31.2-38.5-46.6-51.1-20.9.4-40.8-2.8-59.8-10.3z"></path></svg> 
      <h3 class="text-center text-2xl mb-8">FIRST TIME?</h3>`,r=k(),a=f("div"),s=f("button"),s.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block -mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
        LOAD SAMPLE DATA`,h=k(),u=f("button"),u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block -mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
        LEAVE IT EMPTY`,i(l,"class","text-center"),i(s,"class","text-left w-full mb-3 rounded-xl bg-gray-500 text-white focus:outline-none hover:bg-cyan-400 px-4 py-4"),i(u,"class","text-left w-full rounded-xl bg-gray-500 text-white focus:outline-none hover:bg-teal-400 px-4 py-4"),i(a,"class","text-left"),i(n,"class","w-96 rounded-2xl p-8 bg-white shadow-xl"),i(e,"class","fixed glass w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24")},m(g,p){S(g,e,p),o(e,n),o(n,l),o(n,r),o(n,a),o(a,s),o(a,h),o(a,u),c||(d=[Q(s,"click",t[0]()),Q(u,"click",t[1]())],c=!0)},p:Y,i:Y,o:Y,d(g){g&&j(e),c=!1,re(d)}}}function un(t){const e=Et();function n(){e("startWithSampleData")}function l(){e("startBlank")}return[n,l]}class fn extends Pe{constructor(e){super(),Ae(this,e,un,cn,je,{})}}function wt(t){let e,n;return e=new an({props:{posApp:t[2]}}),{c(){qe(e.$$.fragment)},m(l,r){Se(e,l,r),n=!0},p:Y,i(l){n||(te(e.$$.fragment,l),n=!0)},o(l){me(e.$$.fragment,l),n=!1},d(l){Ie(e,l)}}}function dn(t){let e,n;return e=new fn({}),e.$on("startWithSampleData",t[2].startWithSampleData),e.$on("startBlank",t[2].startBlank),{c(){qe(e.$$.fragment)},m(l,r){Se(e,l,r),n=!0},p:Y,i(l){n||(te(e.$$.fragment,l),n=!0)},o(l){me(e.$$.fragment,l),n=!1},d(l){Ie(e,l)}}}function hn(t){let e,n,l,r,a,s,h;n=new nn({props:{activeMenu:pn}});let u=t[0]&&wt(t),c=t[1]&&dn(t);return{c(){e=f("div"),qe(n.$$.fragment),l=k(),u&&u.c(),r=k(),c&&c.c(),a=k(),s=f("div"),i(e,"class","hide-print flex flex-row h-screen antialiased text-blue-gray-800 svelte-1uvor2m"),i(s,"id","print-area"),i(s,"class","print-area svelte-1uvor2m")},m(d,g){S(d,e,g),Se(n,e,null),o(e,l),u&&u.m(e,null),o(e,r),c&&c.m(e,null),S(d,a,g),S(d,s,g),h=!0},p(d,[g]){d[0]?u?(u.p(d,g),g&1&&te(u,1)):(u=wt(d),u.c(),te(u,1),u.m(e,r)):u&&(At(),me(u,1,1,()=>{u=null}),Pt()),d[1]&&c.p(d,g)},i(d){h||(te(n.$$.fragment,d),te(u),te(c),h=!0)},o(d){me(n.$$.fragment,d),me(u),me(c),h=!1},d(d){d&&j(e),Ie(n),u&&u.d(),c&&c.d(),d&&j(a),d&&j(s)}}}let pn="pos";function gn(t,e,n){let l=localStorage.getItem("first_time")===null,r=!1,a=new Zt;return a.initDatabase().then(()=>{n(0,r=!0)}),[r,l,a]}class mn extends Pe{constructor(e){super(),Ae(this,e,gn,hn,je,{})}}new mn({target:document.getElementById("app")});
