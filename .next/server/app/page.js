(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},63176:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(50482),s=r(69108),o=r(62563),a=r.n(o),i=r(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,51420)),"C:\\Users\\Adesh Sharma\\Desktop\\lead-management-app\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,21342)),"C:\\Users\\Adesh Sharma\\Desktop\\lead-management-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Adesh Sharma\\Desktop\\lead-management-app\\src\\app\\page.tsx"],c="/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},35527:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},46662:()=>{},35303:()=>{},58284:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return s}});let n=r(72973);class s{get isEnabled(){return this._provider.isEnabled}enable(){if(!(0,n.staticGenerationBailout)("draftMode().enable()"))return this._provider.enable()}disable(){if(!(0,n.staticGenerationBailout)("draftMode().disable()"))return this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28290:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{headers:function(){return d},cookies:function(){return c},draftMode:function(){return p}});let n=r(97366),s=r(3022),o=r(63608),a=r(54580),i=r(72934),l=r(72973),u=r(58284);function d(){if((0,l.staticGenerationBailout)("headers",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return s.HeadersAdapter.seal(new Headers({}));let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: headers() expects to have requestAsyncStorage, none available.");return e.headers}function c(){if((0,l.staticGenerationBailout)("cookies",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return n.RequestCookiesAdapter.seal(new o.RequestCookies(new Headers({})));let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: cookies() expects to have requestAsyncStorage, none available.");let t=i.actionAsyncStorage.getStore();return t&&(t.isAction||t.isAppRoute)?e.mutableCookies:e.cookies}function p(){let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: draftMode() expects to have requestAsyncStorage, none available.");return new u.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97347:e=>{"use strict";var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o={};function a(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean);return`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}; ${r.join("; ")}`}function i(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[n,s]=[r.slice(0,e),r.slice(e+1)];try{t.set(n,decodeURIComponent(null!=s?s:"true"))}catch{}}return t}function l(e){var t,r;if(!e)return;let[[n,s],...o]=i(e),{domain:a,expires:l,httponly:c,maxage:p,path:f,samesite:h,secure:g,priority:m}=Object.fromEntries(o.map(([e,t])=>[e.toLowerCase(),t]));return function(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}({name:n,value:decodeURIComponent(s),domain:a,...l&&{expires:new Date(l)},...c&&{httpOnly:!0},..."string"==typeof p&&{maxAge:Number(p)},path:f,...h&&{sameSite:u.includes(t=(t=h).toLowerCase())?t:void 0},...g&&{secure:!0},...m&&{priority:d.includes(r=(r=m).toLowerCase())?r:void 0}})}((e,r)=>{for(var n in r)t(e,n,{get:r[n],enumerable:!0})})(o,{RequestCookies:()=>c,ResponseCookies:()=>p,parseCookie:()=>i,parseSetCookie:()=>l,stringifyCookie:()=>a}),e.exports=((e,o,a,i)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let a of n(o))s.call(e,a)||void 0===a||t(e,a,{get:()=>o[a],enumerable:!(i=r(o,a))||i.enumerable});return e})(t({},"__esModule",{value:!0}),o);var u=["strict","lax","none"],d=["low","medium","high"],c=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t)for(let[e,r]of i(t))this._parsed.set(e,{name:e,value:r})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let n="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===n).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,n=this._parsed;return n.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(n).map(([e,t])=>a(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>a(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},p=class{constructor(e){var t,r,n;this._parsed=new Map,this._headers=e;let s=null!=(n=null!=(r=null==(t=e.getSetCookie)?void 0:t.call(e))?r:e.get("set-cookie"))?n:[];for(let e of Array.isArray(s)?s:function(e){if(!e)return[];var t,r,n,s,o,a=[],i=0;function l(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(t=i,o=!1;l();)if(","===(r=e.charAt(i))){for(n=i,i+=1,l(),s=i;i<e.length&&"="!==(r=e.charAt(i))&&";"!==r&&","!==r;)i+=1;i<e.length&&"="===e.charAt(i)?(o=!0,i=s,a.push(e.substring(t,n)),t=i):i=n+1}else i+=1;(!o||i>=e.length)&&a.push(e.substring(t,e.length))}return a}(s)){let t=l(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let n="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===n)}has(e){return this._parsed.has(e)}set(...e){let[t,r,n]=1===e.length?[e[0].name,e[0].value,e[0]]:e,s=this._parsed;return s.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...n})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=a(r);t.append("set-cookie",e)}}(s,this._headers),this}delete(...e){let[t,r,n]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:r,domain:n,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(a).join("; ")}}},3022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyHeadersError:function(){return s},HeadersAdapter:function(){return o}});let n=r(6250);class s extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new s}}class o extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,s){if("symbol"==typeof r)return n.ReflectAdapter.get(t,r,s);let o=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==a)return n.ReflectAdapter.get(t,a,s)},set(t,r,s,o){if("symbol"==typeof r)return n.ReflectAdapter.set(t,r,s,o);let a=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===a);return n.ReflectAdapter.set(t,i??r,s,o)},has(t,r){if("symbol"==typeof r)return n.ReflectAdapter.has(t,r);let s=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0!==o&&n.ReflectAdapter.has(t,o)},deleteProperty(t,r){if("symbol"==typeof r)return n.ReflectAdapter.deleteProperty(t,r);let s=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===s);return void 0===o||n.ReflectAdapter.deleteProperty(t,o)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return s.callable;default:return n.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new o(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,n]of this.entries())e.call(t,n,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},6250:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let n=Reflect.get(e,t,r);return"function"==typeof n?n.bind(e):n}static set(e,t,r,n){return Reflect.set(e,t,r,n)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},97366:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyRequestCookiesError:function(){return o},RequestCookiesAdapter:function(){return a},getModifiedCookieValues:function(){return l},appendMutableCookies:function(){return u},MutableRequestCookiesAdapter:function(){return d}});let n=r(63608),s=r(6250);class o extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new o}}class a{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return o.callable;default:return s.ReflectAdapter.get(e,t,r)}}})}}let i=Symbol.for("next.mutated.cookies");function l(e){let t=e[i];return t&&Array.isArray(t)&&0!==t.length?t:[]}function u(e,t){let r=l(t);if(0===r.length)return!1;let s=new n.ResponseCookies(e),o=s.getAll();for(let e of r)s.set(e);for(let e of o)s.set(e);return!0}class d{static wrap(e,t){let r=new n.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let o=[],a=new Set,l=()=>{var e;let s=null==fetch.__nextGetStaticStore?void 0:null==(e=fetch.__nextGetStaticStore.call(fetch))?void 0:e.getStore();if(s&&(s.pathWasRevalidated=!0),o=r.getAll().filter(e=>a.has(e.name)),t){let e=[];for(let t of o){let r=new n.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case i:return o;case"delete":return function(...t){a.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{l()}};case"set":return function(...t){a.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{l()}};default:return s.ReflectAdapter.get(e,t,r)}}})}}},63608:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RequestCookies:function(){return n.RequestCookies},ResponseCookies:function(){return n.ResponseCookies}});let n=r(97347)},21342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(25036);function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{children:e})})}r(5023)},51420:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(867),s=r(28290);function o(){let e=(0,s.cookies)().get("token");e?.value?(0,n.redirect)("/leads"):(0,n.redirect)("/login")}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[22,867],()=>r(63176));module.exports=n})();