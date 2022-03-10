(self["webpackChunkvue_firebase_todo"]=self["webpackChunkvue_firebase_todo"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return u},G6:function(){return _},LL:function(){return E},Mn:function(){return v},Sg:function(){return l},ZR:function(){return I},b$:function(){return m},d:function(){return g},hl:function(){return w},m9:function(){return M},ne:function(){return D},pd:function(){return x},ru:function(){return p},tV:function(){return c},uI:function(){return d},vZ:function(){return A},w1:function(){return y},xO:function(){return N},xb:function(){return k},z$:function(){return h},zd:function(){return O}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
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
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return h().indexOf("Electron/")>=0}function y(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return h().indexOf("MSAppHost/")>=0}function _(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}
/**
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
 */
const b="FirebaseError";class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=b,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?T(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new I(r,o,n);return a}}function T(e,t){return e.replace(S,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
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
 */function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(C(n)&&C(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(e){return null!==e&&"object"===typeof e}
/**
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
 */function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function O(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function D(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=P(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function L(){}
/**
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
 */
/**
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
 */
function M(e){return e&&e._delegate?e._delegate:e}},2262:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return $e},IU:function(){return Ae},Jd:function(){return E},PG:function(){return Ee},SU:function(){return Ue},Um:function(){return we},WL:function(){return je},X$:function(){return A},X3:function(){return ke},XI:function(){return Le},Xl:function(){return Ce},dq:function(){return Re},iH:function(){return Pe},j:function(){return S},lk:function(){return T},qj:function(){return _e},qq:function(){return _},yT:function(){return Se}});var r=n(3577);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return i=this,e()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=b;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,b=!0,p=1<<++f,f<=m?l(this):w(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,b=t,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let b=!0;const I=[];function E(){I.push(b),b=!1}function T(){const e=I.pop();b=void 0===e||e}function S(e,t,n){if(b&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function A(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),x=M(),D=M(!1,!0),R=M(!0),P=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ae(this)[t].apply(this,e);return T(),n}})),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(P,i))return Reflect.get(P,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?O.has(i):N(i))return a;if(e||S(n,"get",i),t)return a;if(Re(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?be(a):_e(a):a}}const F=V(),U=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&Re(o)&&!Re(i))return!1;if(!e&&!Te(i)&&(Se(i)||(i=Ae(i),o=Ae(o)),!(0,r.kJ)(t)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const B={get:x,set:F,deleteProperty:j,has:q,ownKeys:$},K={get:R,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,r.l7)({},B,{get:D,set:U}),z=e=>e,H=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);t!==s&&!n&&S(i,"get",t),!n&&S(i,"get",s);const{has:o}=H(i),a=r?z:n?Oe:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return e!==i&&!t&&S(r,"has",e),!t&&S(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&S(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Y(e){e=Ae(e);const t=Ae(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function X(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=H(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function Z(e){const t=Ae(this),{has:n,get:r}=H(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function ee(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?z:e?Oe:Ne;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ne(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?z:t?Oe:Ne;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return W(this,e)},get size(){return J(this)},has:Q,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return J(this)},has:Q,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return J(this,!0)},has(e){return Q.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Q.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)})),[e,n,t,r]}const[se,oe,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?oe:se;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function _e(e){return Te(e)?e:Ie(e,!1,B,le,fe)}function we(e){return Ie(e,!1,G,he,pe)}function be(e){return Ie(e,!0,K,de,me)}function Ie(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||Te(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ce(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?_e(e):e,Oe=e=>(0,r.Kn)(e)?be(e):e;function xe(e){b&&g&&(e=Ae(e),k(e.dep||(e.dep=a())))}function De(e,t){e=Ae(e),e.dep&&C(e.dep)}function Re(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Me(e,!1)}function Le(e){return Me(e,!0)}function Me(e,t){return Re(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return xe(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),De(this,e))}}function Ue(e){return Re(e)?e.value:e}const Ve={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Ee(e)?e:new Proxy(e,Ve)}class qe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return xe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new qe(i,s,o||!s,n);return a}Promise.resolve()},6252:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},FN:function(){return mn},Fl:function(){return xn},HY:function(){return Ot},JJ:function(){return Q},Ko:function(){return an},P$:function(){return oe},Q6:function(){return de},U2:function(){return ce},Uk:function(){return Zt},Us:function(){return _t},Wm:function(){return Qt},Y3:function(){return I},Y8:function(){return re},YP:function(){return X},_:function(){return Wt},aZ:function(){return fe},f3:function(){return J},h:function(){return Dn},iD:function(){return qt},ic:function(){return Ce},j4:function(){return $t},kq:function(){return en},nK:function(){return he},up:function(){return kt},w5:function(){return j},wg:function(){return Mt},wy:function(){return ht}});var r=n(2262),i=n(3577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const _=Promise.resolve();let w=null,b=null;function I(e){const t=w||_;return e?t.then(this?e.bind(this):e):t}function E(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=D(h[r]);i<e?t=r+1:n=r}return t}function T(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||e===b||(null==e.id?h.push(e):h.splice(E(e.id),0,e),S())}function S(){u||l||(l=!0,w=_.then(R))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function A(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),S()}function C(e){A(e,p,f,m)}function N(e){A(e,y,g,v)}function O(e,t=null){if(f.length){for(b=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,b=null,O(e,t)}}function x(e){if(g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>D(e)-D(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const D=e=>null==e.id?1/0:e.id;function R(e){l=!1,u=!0,O(e),h.sort(((e,t)=>D(e)-D(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,x(e),u=!1,w=null,(h.length||f.length||g.length)&&R(e)}}new Set;new Map;function P(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function L(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=L(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,U=null;function V(e){const t=F;return F=e,U=e&&e.type.__scopeId||null,t}function j(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vt(-1);const i=V(t),s=e(...n);return V(i),r._d&&Vt(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function q(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,_;const w=V(e);try{if(4&n.shapeFlag){const e=s||r;v=tn(d.call(e,e,f,o,m,p,g)),_=l}else{const e=t;0,v=tn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),_=t.props?l:$(l)}}catch(I){Pt.length=0,a(I,e,1),v=Qt(Dt)}let b=v;if(_&&!1!==y){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(_=B(_,c)),b=Xt(b,_))}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,V(w),v}const $=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function K(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||G(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?G(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function G(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function W(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function Q(e,t){if(pn){let n=pn.provides;const r=pn.parent&&pn.parent.provides;r===n&&(n=pn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=pn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Y={};function X(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=pn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=w.onStop=()=>{s(e,h,4)}};if(bn)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let y=m?[]:Y;const v=()=>{if(w.active)if(t){const e=w.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Y?void 0:y,g]),y=e)}else w.run()};let _;v.allowRecurse=!!t,_="sync"===c?v:"post"===c?()=>vt(v,h&&h.suspense):()=>{!h||h.isMounted?C(v):v()};const w=new r.qq(d,_);return t?n?v():y=w.run():"post"===c?vt(w.run.bind(w),h&&h.suspense):w.run(),()=>{w.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,w)}}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=pn;gn(this);const c=Z(s,o.bind(r),n);return a?gn(a):yn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),Ne((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=mn(),i=re();let s;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:c}=a;const u=o[0];if(i.isLeaving)return ue(u);const l=le(u);if(!l)return ue(u);const h=ce(l,a,i,n);he(l,h);const d=n.subTree,f=d&&le(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Dt&&(!Kt(l,f)||p)){const e=ce(f,a,i,n);if(he(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ue(u);"in-out"===c&&l.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return u}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:_}=t,w=String(e.key),b=ae(n,e),I=(e,t)=>{e&&o(e,r,9,t)},E={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const s=b[w];s&&Kt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[t])},enter(e){let t=u,r=l,s=h;if(!n.isMounted){if(!i)return;t=y||u,r=v||l,s=_||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?s:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),I(n?m:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ce(e,t,n,r)}};return E}function ue(e){if(me(e))return e=Xt(e),e.children=null,e}function le(e){return me(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Ot?(128&s.patchFlag&&r++,n=n.concat(de(s.children,t))):(t||s.type!==Dt)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function fe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive;RegExp,RegExp;function ge(e,t){return(0,i.kJ)(e)?e.some((e=>ge(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ye(e,t){_e(e,"a",t)}function ve(e,t){_e(e,"da",t)}function _e(e,t,n=pn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&we(r,t,n,e),e=e.parent}}function we(e,t,n,r){const s=Ee(t,e,r,!0);Oe((()=>{(0,i.Od)(r[t],s)}),n)}function be(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=pn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),gn(n);const s=o(t,n,e,i);return yn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Te=e=>(t,n=pn)=>(!bn||"sp"===e)&&Ee(e,t,n),Se=Te("bm"),ke=Te("m"),Ae=Te("bu"),Ce=Te("u"),Ne=Te("bum"),Oe=Te("um"),xe=Te("sp"),De=Te("rtg"),Re=Te("rtc");function Pe(e,t=pn){Ee("ec",e,t)}let Le=!0;function Me(e){const t=je(e),n=e.proxy,s=e.ctx;Le=!1,t.beforeCreate&&Ue(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:N,components:O,directives:x,filters:D}=t,R=null;if(h&&Fe(h,s,R,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Le=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=xn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ve(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Q(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ue(d,e,"c"),P(Se,f),P(ke,p),P(Ae,m),P(Ce,g),P(ye,y),P(ve,v),P(Pe,k),P(Re,T),P(De,S),P(Ne,w),P(Oe,I),P(xe,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),O&&(e.components=O),x&&(e.directives=x)}function Fe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ge(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||o,n.default,!0):J(n.from||o):J(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ue(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ve(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&X(s,n)}else if((0,i.mf)(e))X(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ve(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&X(s,r,e)}else 0}function je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>qe(c,e,o,!0))),qe(c,t,o)):c=t,s.set(t,c),c}function qe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&qe(e,s,n,!0),i&&i.forEach((t=>qe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=$e[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const $e={data:Be,props:He,emits:He,methods:He,computed:He,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:He,directives:He,watch:We,provide:Be,inject:Ke};function Be(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return He(Ge(e),Ge(t))}function Ge(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function He(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function We(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=ze(e[r],t[r]);return n}function Qe(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),Ye(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Je(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ye(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Xe(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=Xe(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ye(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Xe(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function Xe(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(gn(s),r=i[n]=e.call(null,t),yn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function Ze(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=Ze(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);et(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(et(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=rt(Boolean,r.type),n=rt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function et(e){return"$"!==e[0]}function tt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function nt(e,t){return tt(e)===tt(t)}function rt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>nt(t,e))):(0,i.mf)(t)&&nt(t,e)?0:-1}const it=e=>"_"===e[0]||"$stable"===e,st=e=>(0,i.kJ)(e)?e.map(tn):[tn(e)],ot=(e,t,n)=>{const r=j(((...e)=>st(t(...e))),n);return r._c=!1,r},at=(e,t,n)=>{const r=e._ctx;for(const s in e){if(it(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ot(s,n,r);else if(null!=n){0;const e=st(n);t[s]=()=>e}}},ct=(e,t)=>{const n=st(t);e.slots.default=()=>n},ut=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):at(t,e.slots={})}else e.slots={},t&&ct(e,t);(0,i.Nj)(e.slots,Gt,1)},lt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,at(t,s)),a=t}else t&&(ct(e,t),a={default:1});if(o)for(const i in s)it(i)||i in a||delete s[i]};function ht(e,t){const n=F;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function dt(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function ft(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pt=0;function mt(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=ft(),o=new Set;let a=!1;const c=s.app={_uid:pt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Rn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){const l=Qt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Cn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function gt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>gt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(pe(o)&&!a)return;const c=4&o.shapeFlag?Cn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?f[h]=[c]:(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,e.k&&(f[e.k]=u))};u?(s.id=-1,vt(s,n)):s()}else 0}}function yt(){}const vt=W;function _t(e){return wt(e)}function wt(e,t){yt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case xt:_(e,t,n,r);break;case Dt:w(e,t,n,r);break;case Rt:null==e&&b(t,n,r,o);break;case Ot:L(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&gt(l,e&&e.ref,s,t||e,!t)},_=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):D(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:_,patchFlag:w,dirs:b}=e;if(e.el&&void 0!==g&&-1===w)f=e.el=g(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),b&&dt(e,null,r,"created"),y){for(const t in y)"value"===t||(0,i.Gg)(t)||a(f,t,null,y[t],u,e.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&on(p,r,e)}C(f,e,e.scopeId,l,r)}b&&dt(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;I&&_.beforeEnter(f),s(f,t,n),((p=y&&y.onVnodeMounted)||I||b)&&vt((()=>{p&&on(p,r,e),I&&_.enter(f),b&&dt(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?nn(e[u]):tn(e[u]);v(null,c,t,n,r,i,s,o,a)}},D=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&bt(n,!1),(g=m.onVnodeBeforeUpdate)&&on(g,n,t,e),f&&dt(t,e,n,"beforeUpdate"),n&&bt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?R(e.dynamicChildren,h,u,n,r,y,o):c||$(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)P(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&vt((()=>{g&&on(g,n,t,e),f&&dt(t,e,n,"updated")}),r)},R=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ot||!Kt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},P=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&It(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):U(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=fn(e,r,i);if(me(e)&&(a.ctx.renderer=te),In(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=Qt(Dt);w(null,e,t,n)}}else V(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(K(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,k(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,bt(e,!1),n?(n.el=l.el,j(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&on(t,u,n,l),bt(e,!0);const d=q(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&z(e,d.el),s&&vt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&vt((()=>on(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=pe(t);if(bt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&on(r,d,t),bt(e,!0),c&&re){const n=()=>{e.subTree=q(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=q(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&vt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;vt((()=>on(r,d,e)),o)}256&t.shapeFlag&&e.a&&vt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>T(e.update)),e.scope),h=e.update=l.run.bind(l);h.id=e.uid,bt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Je(e,t.props,i,n),lt(e,t.children,n),(0,r.Jd)(),O(void 0,e.update),(0,r.lk)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?nn(t[f]):tn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?nn(t[l]):tn(t[l]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?nn(t[f]):tn(t[f]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?nn(t[l]):tn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?nn(t[l]):tn(t[l]);null!=e.key&&g.set(e.key,l)}let y,_=0;const w=f-m+1;let b=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Kt(r,t[y])){i=y;break}void 0===i?W(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:b=!0,v(r,t[i],n,null,s,o,a,c,u),_++)}const T=b?Et(E):i.Z6;for(y=T.length-1,l=w-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==T[y]?H(i,n,d,2):y--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Ot){s(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Rt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),vt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&gt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&on(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&dt(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Ot||h>0&&64&h)?X(u,t,n,!1,!0):(s===Ot&&384&h||!i&&16&l)&&X(c,t,n),r&&Q(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&vt((()=>{m&&on(m,t,e),f&&dt(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ot)return void J(n,r);if(t===Rt)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&vt(c,t),vt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),x(),t._vnode=e},te={p:v,um:W,m:H,r:Q,mt:F,mc:N,pc:$,pbc:R,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:mt(ee,ne)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function It(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=nn(s[i]),t.el=e.el),n||It(e,t))}}function Et(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Tt=e=>e.__isTeleport;const St="components";function kt(e,t){return Ct(St,e,!0,t)||e}const At=Symbol();function Ct(e,t,n=!0,r=!1){const s=F||pn;if(s){const n=s.type;if(e===St){const e=Nn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Nt(s[e]||n[e],t)||Nt(s.appContext[e],t);return!o&&r?n:o}}function Nt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Ot=Symbol(void 0),xt=Symbol(void 0),Dt=Symbol(void 0),Rt=Symbol(void 0),Pt=[];let Lt=null;function Mt(e=!1){Pt.push(Lt=e?null:[])}function Ft(){Pt.pop(),Lt=Pt[Pt.length-1]||null}let Ut=1;function Vt(e){Ut+=e}function jt(e){return e.dynamicChildren=Ut>0?Lt||i.Z6:null,Ft(),Ut>0&&Lt&&Lt.push(e),e}function qt(e,t,n,r,i,s){return jt(Wt(e,t,n,r,i,s,!0))}function $t(e,t,n,r,i){return jt(Qt(e,t,n,r,i,!0))}function Bt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",zt=({key:e})=>null!=e?e:null,Ht=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Wt(e,t=null,n=null,r=0,s=null,o=(e===Ot?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zt(t),ref:t&&Ht(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(rn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ut>0&&!a&&Lt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Lt.push(u),u}const Qt=Jt;function Jt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==At||(e=Dt),Bt(e)){const r=Xt(e,t,!0);return n&&rn(r,n),r}if(On(e)&&(e=e.__vccOpts),t){t=Yt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:H(e)?128:Tt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Wt(e,t,n,s,o,c,a,!0)}function Yt(e){return e?(0,r.X3)(e)||Gt in e?(0,i.l7)({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Ht(t)):[s,Ht(t)]:Ht(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ot?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Zt(e=" ",t=0){return Qt(xt,null,e,t)}function en(e="",t=!1){return t?(Mt(),$t(Dt,null,e)):Qt(Dt,null,e)}function tn(e){return null==e||"boolean"===typeof e?Qt(Dt):(0,i.kJ)(e)?Qt(Ot,null,e.slice()):"object"===typeof e?nn(e):Qt(xt,null,String(e))}function nn(e){return null===e.el||e.memo?e:Xt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function on(e,t,n,r=null){o(e,t,7,[n,r])}function an(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const cn=e=>e?vn(e)?Cn(e)||e.proxy:cn(e.parent):null,un=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cn(e.parent),$root:e=>cn(e.root),$emit:e=>e.emit,$options:e=>je(e),$forceUpdate:e=>()=>T(e.update),$nextTick:e=>I.bind(e.proxy),$watch:e=>ee.bind(e)}),ln={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Le&&(c[t]=0)}}const d=un[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(un,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const hn=ft();let dn=0;function fn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||hn,a={uid:dn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ze(s,o),emitsOptions:L(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let pn=null;const mn=()=>pn||F,gn=e=>{pn=e,e.scope.on()},yn=()=>{pn&&pn.scope.off(),pn=null};function vn(e){return 4&e.vnode.shapeFlag}let _n,wn,bn=!1;function In(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,i=vn(e);Qe(e,n,i,t),ut(e,r);const s=i?En(e,t):void 0;return bn=!1,s}function En(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ln));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?An(e):null;gn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(c)){if(c.then(yn,yn),t)return c.then((n=>{Tn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Tn(e,c,t)}else Sn(e,t)}function Tn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const s=e.type;if(!e.render){if(!t&&_n&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=_n(t,c)}}e.render=s.render||i.dG,wn&&wn(e)}gn(e),(0,r.Jd)(),Me(e),(0,r.lk)(),yn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function An(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function Cn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in un?un[n](e):void 0}}))}function Nn(e){return(0,i.mf)(e)&&e.displayName||e.name}function On(e){return(0,i.mf)(e)&&"__vccOpts"in e}const xn=(e,t)=>(0,r.Fl)(e,t,bn);function Dn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Bt(t)?Qt(e,null,[t]):Qt(e,t):Qt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Bt(n)&&(n=[n]),Qt(e,t,n))}Symbol("");const Rn="3.2.31"},7225:function(e,t,n){"use strict";n.d(t,{YZ:function(){return he},e8:function(){return ie},nr:function(){return re},ri:function(){return ge}});var r=n(3577),i=n(6252);n(2262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let _=Date.now,w=!1;if("undefined"!==typeof window){_()>document.createEvent("Event").timeStamp&&(_=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);w=!!(e&&Number(e[1])<=53)}let b=0;const I=Promise.resolve(),E=()=>{b=0},T=()=>b||(I.then(E),b=_());function S(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=s[t]=O(r,i);S(e,n,o,a)}else o&&(k(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function N(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function O(e,t){const n=e=>{const r=e.timeStamp||_();(w||r>=n.attached-1)&&(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const D=/^on[a-z]/,R=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?u(e,i,s):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function P(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&D.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!D.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",F=(e,{slots:t})=>(0,i.h)(i.P$,q(e),t);F.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(F.props=(0,r.l7)({},i.P$.props,U),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function q(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=$(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:w,onLeave:b,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=_,onAppearCancelled:S=w}=t,k=(e,t,n)=>{G(e,t?h:c),G(e,t?l:a),n&&n()},A=(e,t)=>{G(e,p),G(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:_,s=()=>k(t,e,n);V(r,[t,s]),z((()=>{G(t,e?u:o),K(t,e?h:c),j(r)||W(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){V(v,[e]),K(e,o),K(e,a)},onBeforeAppear(e){V(E,[e]),K(e,u),K(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>A(e,t);K(e,d),X(),K(e,f),z((()=>{G(e,d),K(e,p),j(b)||W(e,i,y,n)})),V(b,[e,n])},onEnterCancelled(e){k(e,!1),V(w,[e])},onAppearCancelled(e){k(e,!0),V(S,[e])},onLeaveCancelled(e){A(e),V(I,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function W(e,t,n,r){const i=e._endId=++H,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(L+"Delay"),s=r(L+"Duration"),o=J(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=J(a,c);let l=null,h=0,d=0;t===L?o>0&&(l=L,h=o,d=s.length):t===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?L:M:null,d=l?l===L?s.length:c.length:0);const f=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=(0,r.He)(i)),e._assign(i)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",ee),S(e,"compositionend",te),S(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ie={deep:!0,created(e,t,n){e._assign=Z(n),S(e,"change",(()=>{const t=e._modelValue,n=ue(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(le(e,i))}))},mounted:se,beforeUpdate(e,t,n){e._assign=Z(n),se(e,t,n)}};function se(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,le(e,!0)))}const oe={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=Z(n),S(e,"change",(()=>{e._assign(ue(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=Z(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},ae={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);S(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ue(e)):ue(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=Z(i)},mounted(e,{value:t}){ce(e,t)},beforeUpdate(e,t,n){e._assign=Z(n)},updated(e,{value:t}){ce(e,t)}};function ce(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=ue(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(ue(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ue(e){return"_value"in e?e._value:e.value}function le(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const he={created(e,t,n){de(e,t,n,null,"created")},mounted(e,t,n){de(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){de(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){de(e,t,n,r,"updated")}};function de(e,t,n,r,i){let s;switch(e.tagName){case"SELECT":s=ae;break;case"TEXTAREA":s=re;break;default:switch(n.props&&n.props.type){case"checkbox":s=ie;break;case"radio":s=oe;break;default:s=re}}const o=s[i];o&&o(e,t,n,r)}const fe=(0,r.l7)({patchProp:R},c);let pe;function me(){return pe||(pe=(0,i.Us)(fe))}const ge=(...e)=>{const t=me().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ye(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return D},E9:function(){return re},F7:function(){return T},Gg:function(){return K},HD:function(){return L},He:function(){return te},Kn:function(){return F},NO:function(){return I},Nj:function(){return ee},Od:function(){return A},PO:function(){return $},Pq:function(){return a},RI:function(){return N},S0:function(){return B},W7:function(){return q},WV:function(){return m},Z6:function(){return w},_A:function(){return H},_N:function(){return x},aU:function(){return X},dG:function(){return b},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return O},kT:function(){return _},l7:function(){return k},mf:function(){return P},rs:function(){return Q},tI:function(){return U},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=R(e),r=R(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=O(e),r=O(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":O(e)||F(e)&&(e.toString===V||!P(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||O(t)||$(t)?t:String(t),_={},w=[],b=()=>{},I=()=>!1,E=/^on[^a-z]/,T=e=>E.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,N=(e,t)=>C.call(e,t),O=Array.isArray,x=e=>"[object Map]"===j(e),D=e=>"[object Set]"===j(e),R=e=>e instanceof Date,P=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,U=e=>F(e)&&P(e.then)&&P(e.catch),V=Object.prototype.toString,j=e=>V.call(e),q=e=>j(e).slice(8,-1),$=e=>"[object Object]"===j(e),B=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,H=G((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),W=/\B([A-Z])/g,Q=G((e=>e.replace(W,"-$1").toLowerCase())),J=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=G((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5577:function(e){
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=1e6,t=1e3,n="transitionend",r=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=t=>{do{t+=Math.floor(Math.random()*e)}while(document.getElementById(t));return t},s=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},o=e=>{const t=s(e);return t&&document.querySelector(t)?t:null},a=e=>{const t=s(e);return t?document.querySelector(t):null},c=e=>{if(!e)return 0;let{transitionDuration:n,transitionDelay:r}=window.getComputedStyle(e);const i=Number.parseFloat(n),s=Number.parseFloat(r);return i||s?(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*t):0},u=e=>{e.dispatchEvent(new Event(n))},l=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),h=e=>l(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,d=(e,t,n)=>{Object.keys(n).forEach((i=>{const s=n[i],o=t[i],a=o&&l(o)?"element":r(o);if(!new RegExp(s).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)}))},f=e=>!(!l(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),p=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),m=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?m(e.parentNode):null},g=()=>{},y=e=>{e.offsetHeight},v=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},_=[],w=e=>{"loading"===document.readyState?(_.length||document.addEventListener("DOMContentLoaded",(()=>{_.forEach((e=>e()))})),_.push(e)):e()},b=()=>"rtl"===document.documentElement.dir,I=e=>{w((()=>{const t=v();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},E=e=>{"function"===typeof e&&e()},T=(e,t,r=!0)=>{if(!r)return void E(e);const i=5,s=c(t)+i;let o=!1;const a=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,a),E(e))};t.addEventListener(n,a),setTimeout((()=>{o||u(t)}),s)},S=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const s=e.length;return i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))]},k=/[^.]*(?=\..*)\.|.*/,A=/\..*/,C=/::\d+$/,N={};let O=1;const x={mouseenter:"mouseover",mouseleave:"mouseout"},D=/^(mouseenter|mouseleave)/i,R=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function P(e,t){return t&&`${t}::${O++}`||e.uidEvent||O++}function L(e){const t=P(e);return e.uidEvent=t,N[t]=N[t]||{},N[t]}function M(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&K.off(e,r.type,t),t.apply(e,[r])}}function F(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&K.off(e,i.type,t,n),n.apply(o,[i]);return null}}function U(e,t,n=null){const r=Object.keys(e);for(let i=0,s=r.length;i<s;i++){const s=e[r[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function V(e,t,n){const r="string"===typeof t,i=r?n:t;let s=B(e);const o=R.has(s);return o||(s=e),[r,i,s]}function j(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),D.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[s,o,a]=V(t,n,r),c=L(e),u=c[a]||(c[a]={}),l=U(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=P(o,t.replace(k,"")),d=s?F(e,n,r):M(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,s)}function q(e,t,n,r,i){const s=U(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function $(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];q(e,t,n,r.originalHandler,r.delegationSelector)}}))}function B(e){return e=e.replace(A,""),x[e]||e}const K={on(e,t,n,r){j(e,t,n,r,!1)},one(e,t,n,r){j(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=V(t,n,r),a=o!==t,c=L(e),u=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void q(e,c,o,s,i?n:null)}u&&Object.keys(c).forEach((n=>{$(e,c,n,t.slice(1))}));const l=c[o]||{};Object.keys(l).forEach((n=>{const r=n.replace(C,"");if(!a||t.includes(r)){const t=l[n];q(e,c,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=v(),i=B(t),s=t!==i,o=R.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get(){return n[e]}})})),l&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},G=new Map,z={set(e,t,n){G.has(e)||G.set(e,new Map);const r=G.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return G.has(e)&&G.get(e).get(t)||null},remove(e,t){if(!G.has(e))return;const n=G.get(e);n.delete(t),0===n.size&&G.delete(e)}},H="5.1.3";class W{constructor(e){e=h(e),e&&(this._element=e,z.set(this._element,this.constructor.DATA_KEY,this))}dispose(){z.remove(this._element,this.constructor.DATA_KEY),K.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){T(e,t,n)}static getInstance(e){return z.get(h(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return H}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Q=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;K.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),p(this))return;const i=a(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},J="alert",Y="bs.alert",X=`.${Y}`,Z=`close${X}`,ee=`closed${X}`,te="fade",ne="show";class re extends W{static get NAME(){return J}close(){const e=K.trigger(this._element,Z);if(e.defaultPrevented)return;this._element.classList.remove(ne);const t=this._element.classList.contains(te);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),K.trigger(this._element,ee),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=re.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(re,"close"),I(re);const ie="button",se="bs.button",oe=`.${se}`,ae=".data-api",ce="active",ue='[data-bs-toggle="button"]',le=`click${oe}${ae}`;class he extends W{static get NAME(){return ie}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ce))}static jQueryInterface(e){return this.each((function(){const t=he.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function de(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function fe(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}K.on(document,le,ue,(e=>{e.preventDefault();const t=e.target.closest(ue),n=he.getOrCreateInstance(t);n.toggle()})),I(he);const pe={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${fe(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${fe(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=de(e.dataset[n])})),t},getDataAttribute(e,t){return de(e.getAttribute(`data-bs-${fe(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},me=3,ge={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==me)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!p(e)&&f(e)))}},ye="carousel",ve="bs.carousel",_e=`.${ve}`,we=".data-api",be="ArrowLeft",Ie="ArrowRight",Ee=500,Te=40,Se={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ke={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ae="next",Ce="prev",Ne="left",Oe="right",xe={[be]:Oe,[Ie]:Ne},De=`slide${_e}`,Re=`slid${_e}`,Pe=`keydown${_e}`,Le=`mouseenter${_e}`,Me=`mouseleave${_e}`,Fe=`touchstart${_e}`,Ue=`touchmove${_e}`,Ve=`touchend${_e}`,je=`pointerdown${_e}`,qe=`pointerup${_e}`,$e=`dragstart${_e}`,Be=`load${_e}${we}`,Ke=`click${_e}${we}`,Ge="carousel",ze="active",He="slide",We="carousel-item-end",Qe="carousel-item-start",Je="carousel-item-next",Ye="carousel-item-prev",Xe="pointer-event",Ze=".active",et=".active.carousel-item",tt=".carousel-item",nt=".carousel-item img",rt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",st="[data-bs-target]",ot="[data-bs-slide], [data-bs-slide-to]",at='[data-bs-ride="carousel"]',ct="touch",ut="pen";class lt extends W{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ge.findOne(it,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Se}static get NAME(){return ye}next(){this._slide(Ae)}nextWhenVisible(){!document.hidden&&f(this._element)&&this.next()}prev(){this._slide(Ce)}pause(e){e||(this._isPaused=!0),ge.findOne(rt,this._element)&&(u(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ge.findOne(et,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void K.one(this._element,Re,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?Ae:Ce;this._slide(n,this._items[e])}_getConfig(e){return e={...Se,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(ye,e,ke),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Te)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Oe:Ne)}_addEventListeners(){this._config.keyboard&&K.on(this._element,Pe,(e=>this._keydown(e))),"hover"===this._config.pause&&(K.on(this._element,Le,(e=>this.pause(e))),K.on(this._element,Me,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===ut||e.pointerType===ct),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),Ee+this._config.interval))};ge.find(nt,this._element).forEach((e=>{K.on(e,$e,(e=>e.preventDefault()))})),this._pointerEvent?(K.on(this._element,je,(e=>t(e))),K.on(this._element,qe,(e=>r(e))),this._element.classList.add(Xe)):(K.on(this._element,Fe,(e=>t(e))),K.on(this._element,Ue,(e=>n(e))),K.on(this._element,Ve,(e=>r(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=xe[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ge.find(tt,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Ae;return S(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(ge.findOne(et,this._element));return K.trigger(this._element,De,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ge.findOne(Ze,this._indicatorsElement);t.classList.remove(ze),t.removeAttribute("aria-current");const n=ge.find(st,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(ze),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ge.findOne(et,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=ge.findOne(et,this._element),i=this._getItemIndex(r),s=t||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Ae,u=c?Qe:We,l=c?Je:Ye,h=this._orderToDirection(n);if(s&&s.classList.contains(ze))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{K.trigger(this._element,Re,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(He)){s.classList.add(l),y(s),r.classList.add(u),s.classList.add(u);const e=()=>{s.classList.remove(u,l),s.classList.add(ze),r.classList.remove(ze,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(ze),s.classList.add(ze),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Oe,Ne].includes(e)?b()?e===Ne?Ce:Ae:e===Ne?Ae:Ce:e}_orderToDirection(e){return[Ae,Ce].includes(e)?b()?e===Ce?Ne:Oe:e===Ce?Oe:Ne:e}static carouselInterface(e,t){const n=lt.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){lt.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=a(this);if(!t||!t.classList.contains(Ge))return;const n={...pe.getDataAttributes(t),...pe.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),lt.carouselInterface(t,n),r&&lt.getInstance(t).to(r),e.preventDefault()}}K.on(document,Ke,ot,lt.dataApiClickHandler),K.on(window,Be,(()=>{const e=ge.find(at);for(let t=0,n=e.length;t<n;t++)lt.carouselInterface(e[t],lt.getInstance(e[t]))})),I(lt);const ht="collapse",dt="bs.collapse",ft=`.${dt}`,pt=".data-api",mt={toggle:!0,parent:null},gt={toggle:"boolean",parent:"(null|element)"},yt=`show${ft}`,vt=`shown${ft}`,_t=`hide${ft}`,wt=`hidden${ft}`,bt=`click${ft}${pt}`,It="show",Et="collapse",Tt="collapsing",St="collapsed",kt=`:scope .${Et} .${Et}`,At="collapse-horizontal",Ct="width",Nt="height",Ot=".collapse.show, .collapse.collapsing",xt='[data-bs-toggle="collapse"]';class Dt extends W{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ge.find(xt);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=o(e),i=ge.find(t).filter((e=>e===this._element));null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mt}static get NAME(){return ht}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ge.find(kt,this._config.parent);t=ge.find(Ot,this._config.parent).filter((t=>!e.includes(t)))}const n=ge.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?Dt.getInstance(r):null,e&&e._isTransitioning)return}const r=K.trigger(this._element,yt);if(r.defaultPrevented)return;t.forEach((t=>{n!==t&&Dt.getOrCreateInstance(t,{toggle:!1}).hide(),e||z.set(t,dt,null)}));const i=this._getDimension();this._element.classList.remove(Et),this._element.classList.add(Tt),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Tt),this._element.classList.add(Et,It),this._element.style[i]="",K.trigger(this._element,vt)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=K.trigger(this._element,_t);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,y(this._element),this._element.classList.add(Tt),this._element.classList.remove(Et,It);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=a(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Tt),this._element.classList.add(Et),K.trigger(this._element,wt)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(It)}_getConfig(e){return e={...mt,...pe.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=h(e.parent),d(ht,e,gt),e}_getDimension(){return this._element.classList.contains(At)?Ct:Nt}_initializeChildren(){if(!this._config.parent)return;const e=ge.find(kt,this._config.parent);ge.find(xt,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=a(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(St):e.classList.add(St),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Dt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}K.on(document,bt,xt,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=o(this),n=ge.find(t);n.forEach((e=>{Dt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),I(Dt);var Rt="top",Pt="bottom",Lt="right",Mt="left",Ft="auto",Ut=[Rt,Pt,Lt,Mt],Vt="start",jt="end",qt="clippingParents",$t="viewport",Bt="popper",Kt="reference",Gt=Ut.reduce((function(e,t){return e.concat([t+"-"+Vt,t+"-"+jt])}),[]),zt=[].concat(Ut,[Ft]).reduce((function(e,t){return e.concat([t,t+"-"+Vt,t+"-"+jt])}),[]),Ht="beforeRead",Wt="read",Qt="afterRead",Jt="beforeMain",Yt="main",Xt="afterMain",Zt="beforeWrite",en="write",tn="afterWrite",nn=[Ht,Wt,Qt,Jt,Yt,Xt,Zt,en,tn];function rn(e){return e?(e.nodeName||"").toLowerCase():null}function sn(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function on(e){var t=sn(e).Element;return e instanceof t||e instanceof Element}function an(e){var t=sn(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function cn(e){if("undefined"===typeof ShadowRoot)return!1;var t=sn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function un(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];an(i)&&rn(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function ln(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});an(r)&&rn(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}const hn={name:"applyStyles",enabled:!0,phase:"write",fn:un,effect:ln,requires:["computeStyles"]};function dn(e){return e.split("-")[0]}function fn(e,t){var n=e.getBoundingClientRect(),r=1,i=1;return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function pn(e){var t=fn(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function mn(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&cn(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function gn(e){return sn(e).getComputedStyle(e)}function yn(e){return["table","td","th"].indexOf(rn(e))>=0}function vn(e){return((on(e)?e.ownerDocument:e.document)||window.document).documentElement}function _n(e){return"html"===rn(e)?e:e.assignedSlot||e.parentNode||(cn(e)?e.host:null)||vn(e)}function wn(e){return an(e)&&"fixed"!==gn(e).position?e.offsetParent:null}function bn(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&an(e)){var r=gn(e);if("fixed"===r.position)return null}var i=_n(e);while(an(i)&&["html","body"].indexOf(rn(i))<0){var s=gn(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function In(e){var t=sn(e),n=wn(e);while(n&&yn(n)&&"static"===gn(n).position)n=wn(n);return n&&("html"===rn(n)||"body"===rn(n)&&"static"===gn(n).position)?t:n||bn(e)||t}function En(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var Tn=Math.max,Sn=Math.min,kn=Math.round;function An(e,t,n){return Tn(e,Sn(t,n))}function Cn(){return{top:0,right:0,bottom:0,left:0}}function Nn(e){return Object.assign({},Cn(),e)}function On(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var xn=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Nn("number"!==typeof e?e:On(e,Ut))};function Dn(e){var t,n=e.state,r=e.name,i=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=dn(n.placement),c=En(a),u=[Mt,Lt].indexOf(a)>=0,l=u?"height":"width";if(s&&o){var h=xn(i.padding,n),d=pn(s),f="y"===c?Rt:Mt,p="y"===c?Pt:Lt,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],g=o[c]-n.rects.reference[c],y=In(s),v=y?"y"===c?y.clientHeight||0:y.clientWidth||0:0,_=m/2-g/2,w=h[f],b=v-d[l]-h[p],I=v/2-d[l]/2+_,E=An(w,I,b),T=c;n.modifiersData[r]=(t={},t[T]=E,t.centerOffset=E-I,t)}}function Rn(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&mn(t.elements.popper,i)&&(t.elements.arrow=i)}const Pn={name:"arrow",enabled:!0,phase:"main",fn:Dn,effect:Rn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ln(e){return e.split("-")[1]}var Mn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fn(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:kn(kn(t*i)/i)||0,y:kn(kn(n*i)/i)||0}}function Un(e){var t,n=e.popper,r=e.popperRect,i=e.placement,s=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=!0===l?Fn(o):"function"===typeof l?l(o):o,d=h.x,f=void 0===d?0:d,p=h.y,m=void 0===p?0:p,g=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),v=Mt,_=Rt,w=window;if(u){var b=In(n),I="clientHeight",E="clientWidth";b===sn(n)&&(b=vn(n),"static"!==gn(b).position&&"absolute"===a&&(I="scrollHeight",E="scrollWidth")),b=b,i!==Rt&&(i!==Mt&&i!==Lt||s!==jt)||(_=Pt,m-=b[I]-r.height,m*=c?1:-1),i!==Mt&&(i!==Rt&&i!==Pt||s!==jt)||(v=Lt,f-=b[E]-r.width,f*=c?1:-1)}var T,S=Object.assign({position:a},u&&Mn);return c?Object.assign({},S,(T={},T[_]=y?"0":"",T[v]=g?"0":"",T.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},S,(t={},t[_]=y?m+"px":"",t[v]=g?f+"px":"",t.transform="",t))}function Vn(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:dn(t.placement),variation:Ln(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Un(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Un(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const jn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Vn,data:{}};var qn={passive:!0};function $n(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=sn(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,qn)})),a&&c.addEventListener("resize",n.update,qn),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,qn)})),a&&c.removeEventListener("resize",n.update,qn)}}const Bn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$n,data:{}};var Kn={left:"right",right:"left",bottom:"top",top:"bottom"};function Gn(e){return e.replace(/left|right|bottom|top/g,(function(e){return Kn[e]}))}var zn={start:"end",end:"start"};function Hn(e){return e.replace(/start|end/g,(function(e){return zn[e]}))}function Wn(e){var t=sn(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Qn(e){return fn(vn(e)).left+Wn(e).scrollLeft}function Jn(e){var t=sn(e),n=vn(e),r=t.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+Qn(e),y:a}}function Yn(e){var t,n=vn(e),r=Wn(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=Tn(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Tn(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Qn(e),c=-r.scrollTop;return"rtl"===gn(i||n).direction&&(a+=Tn(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Xn(e){var t=gn(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Zn(e){return["html","body","#document"].indexOf(rn(e))>=0?e.ownerDocument.body:an(e)&&Xn(e)?e:Zn(_n(e))}function er(e,t){var n;void 0===t&&(t=[]);var r=Zn(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=sn(r),o=i?[s].concat(s.visualViewport||[],Xn(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(er(_n(o)))}function tr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nr(e){var t=fn(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function rr(e,t){return t===$t?tr(Jn(e)):an(t)?nr(t):tr(Yn(vn(e)))}function ir(e){var t=er(_n(e)),n=["absolute","fixed"].indexOf(gn(e).position)>=0,r=n&&an(e)?In(e):e;return on(r)?t.filter((function(e){return on(e)&&mn(e,r)&&"body"!==rn(e)})):[]}function sr(e,t,n){var r="clippingParents"===t?ir(e):[].concat(t),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(t,n){var r=rr(e,n);return t.top=Tn(r.top,t.top),t.right=Sn(r.right,t.right),t.bottom=Sn(r.bottom,t.bottom),t.left=Tn(r.left,t.left),t}),rr(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function or(e){var t,n=e.reference,r=e.element,i=e.placement,s=i?dn(i):null,o=i?Ln(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(s){case Rt:t={x:a,y:n.y-r.height};break;case Pt:t={x:a,y:n.y+n.height};break;case Lt:t={x:n.x+n.width,y:c};break;case Mt:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=s?En(s):null;if(null!=u){var l="y"===u?"height":"width";switch(o){case Vt:t[u]=t[u]-(n[l]/2-r[l]/2);break;case jt:t[u]=t[u]+(n[l]/2-r[l]/2);break}}return t}function ar(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,s=n.boundary,o=void 0===s?qt:s,a=n.rootBoundary,c=void 0===a?$t:a,u=n.elementContext,l=void 0===u?Bt:u,h=n.altBoundary,d=void 0!==h&&h,f=n.padding,p=void 0===f?0:f,m=Nn("number"!==typeof p?p:On(p,Ut)),g=l===Bt?Kt:Bt,y=e.rects.popper,v=e.elements[d?g:l],_=sr(on(v)?v:v.contextElement||vn(e.elements.popper),o,c),w=fn(e.elements.reference),b=or({reference:w,element:y,strategy:"absolute",placement:i}),I=tr(Object.assign({},y,b)),E=l===Bt?I:w,T={top:_.top-E.top+m.top,bottom:E.bottom-_.bottom+m.bottom,left:_.left-E.left+m.left,right:E.right-_.right+m.right},S=e.modifiersData.offset;if(l===Bt&&S){var k=S[i];Object.keys(T).forEach((function(e){var t=[Lt,Pt].indexOf(e)>=0?1:-1,n=[Rt,Pt].indexOf(e)>=0?"y":"x";T[e]+=k[n]*t}))}return T}function cr(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?zt:c,l=Ln(r),h=l?a?Gt:Gt.filter((function(e){return Ln(e)===l})):Ut,d=h.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=h);var f=d.reduce((function(t,n){return t[n]=ar(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[dn(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}function ur(e){if(dn(e)===Ft)return[];var t=Gn(e);return[Hn(e),t,Hn(t)]}function lr(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,m=n.allowedAutoPlacements,g=t.options.placement,y=dn(g),v=y===g,_=c||(v||!p?[Gn(g)]:ur(g)),w=[g].concat(_).reduce((function(e,n){return e.concat(dn(n)===Ft?cr(t,{placement:n,boundary:l,rootBoundary:h,padding:u,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),b=t.rects.reference,I=t.rects.popper,E=new Map,T=!0,S=w[0],k=0;k<w.length;k++){var A=w[k],C=dn(A),N=Ln(A)===Vt,O=[Rt,Pt].indexOf(C)>=0,x=O?"width":"height",D=ar(t,{placement:A,boundary:l,rootBoundary:h,altBoundary:d,padding:u}),R=O?N?Lt:Mt:N?Pt:Rt;b[x]>I[x]&&(R=Gn(R));var P=Gn(R),L=[];if(s&&L.push(D[C]<=0),a&&L.push(D[R]<=0,D[P]<=0),L.every((function(e){return e}))){S=A,T=!1;break}E.set(A,L)}if(T)for(var M=p?3:1,F=function(e){var t=w.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},U=M;U>0;U--){var V=F(U);if("break"===V)break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}}const hr={name:"flip",enabled:!0,phase:"main",fn:lr,requiresIfExists:["offset"],data:{_skip:!1}};function dr(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function fr(e){return[Rt,Lt,Pt,Mt].some((function(t){return e[t]>=0}))}function pr(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=ar(t,{elementContext:"reference"}),a=ar(t,{altBoundary:!0}),c=dr(o,r),u=dr(a,i,s),l=fr(c),h=fr(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}const mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pr};function gr(e,t,n){var r=dn(e),i=[Mt,Rt].indexOf(r)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Mt,Lt].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function yr(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=zt.reduce((function(e,n){return e[n]=gr(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}const vr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yr};function _r(e){var t=e.state,n=e.name;t.modifiersData[n]=or({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wr={name:"popperOffsets",enabled:!0,phase:"read",fn:_r,data:{}};function br(e){return"x"===e?"y":"x"}function Ir(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,m=void 0===p?0:p,g=ar(t,{boundary:c,rootBoundary:u,padding:h,altBoundary:l}),y=dn(t.placement),v=Ln(t.placement),_=!v,w=En(y),b=br(w),I=t.modifiersData.popperOffsets,E=t.rects.reference,T=t.rects.popper,S="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,k={x:0,y:0};if(I){if(s||a){var A="y"===w?Rt:Mt,C="y"===w?Pt:Lt,N="y"===w?"height":"width",O=I[w],x=I[w]+g[A],D=I[w]-g[C],R=f?-T[N]/2:0,P=v===Vt?E[N]:T[N],L=v===Vt?-T[N]:-E[N],M=t.elements.arrow,F=f&&M?pn(M):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Cn(),V=U[A],j=U[C],q=An(0,E[N],F[N]),$=_?E[N]/2-R-q-V-S:P-q-V-S,B=_?-E[N]/2+R+q+j+S:L+q+j+S,K=t.elements.arrow&&In(t.elements.arrow),G=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,z=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,H=I[w]+$-z-G,W=I[w]+B-z;if(s){var Q=An(f?Sn(x,H):x,O,f?Tn(D,W):D);I[w]=Q,k[w]=Q-O}if(a){var J="x"===w?Rt:Mt,Y="x"===w?Pt:Lt,X=I[b],Z=X+g[J],ee=X-g[Y],te=An(f?Sn(Z,H):Z,X,f?Tn(ee,W):ee);I[b]=te,k[b]=te-X}}t.modifiersData[r]=k}}const Er={name:"preventOverflow",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"]};function Tr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Sr(e){return e!==sn(e)&&an(e)?Tr(e):Wn(e)}function kr(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}function Ar(e,t,n){void 0===n&&(n=!1);var r=an(t);an(t)&&kr(t);var i=vn(t),s=fn(e),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!n)&&(("body"!==rn(t)||Xn(i))&&(o=Sr(t)),an(t)?(a=fn(t),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Qn(i))),{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function Cr(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Nr(e){var t=Cr(e);return nn.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function Or(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function xr(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var Dr={placement:"bottom",modifiers:[],strategy:"absolute"};function Rr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Pr(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?Dr:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Dr,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:on(e)?er(e):e.contextElement?er(e.contextElement):[],popper:er(t)};var a=Nr(xr([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(Rr(t,n)){i.rects={reference:Ar(t,In(n),"fixed"===i.options.strategy),popper:pn(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:Or((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!Rr(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var Lr=Pr(),Mr=[Bn,wr,jn,hn],Fr=Pr({defaultModifiers:Mr}),Ur=[Bn,wr,jn,hn,vr,hr,Er,Pn,mr],Vr=Pr({defaultModifiers:Ur});const jr=Object.freeze({__proto__:null,popperGenerator:Pr,detectOverflow:ar,createPopperBase:Lr,createPopper:Vr,createPopperLite:Fr,top:Rt,bottom:Pt,right:Lt,left:Mt,auto:Ft,basePlacements:Ut,start:Vt,end:jt,clippingParents:qt,viewport:$t,popper:Bt,reference:Kt,variationPlacements:Gt,placements:zt,beforeRead:Ht,read:Wt,afterRead:Qt,beforeMain:Jt,main:Yt,afterMain:Xt,beforeWrite:Zt,write:en,afterWrite:tn,modifierPhases:nn,applyStyles:hn,arrow:Pn,computeStyles:jn,eventListeners:Bn,flip:hr,hide:mr,offset:vr,popperOffsets:wr,preventOverflow:Er}),qr="dropdown",$r="bs.dropdown",Br=`.${$r}`,Kr=".data-api",Gr="Escape",zr="Space",Hr="Tab",Wr="ArrowUp",Qr="ArrowDown",Jr=2,Yr=new RegExp(`${Wr}|${Qr}|${Gr}`),Xr=`hide${Br}`,Zr=`hidden${Br}`,ei=`show${Br}`,ti=`shown${Br}`,ni=`click${Br}${Kr}`,ri=`keydown${Br}${Kr}`,ii=`keyup${Br}${Kr}`,si="show",oi="dropup",ai="dropend",ci="dropstart",ui="navbar",li='[data-bs-toggle="dropdown"]',hi=".dropdown-menu",di=".navbar-nav",fi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pi=b()?"top-end":"top-start",mi=b()?"top-start":"top-end",gi=b()?"bottom-end":"bottom-start",yi=b()?"bottom-start":"bottom-end",vi=b()?"left-start":"right-start",_i=b()?"right-start":"left-start",wi={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},bi={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ii extends W{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return wi}static get DefaultType(){return bi}static get NAME(){return qr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(p(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=K.trigger(this._element,ei,e);if(t.defaultPrevented)return;const n=Ii.getParentFromElement(this._element);this._inNavbar?pe.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(di)&&[].concat(...document.body.children).forEach((e=>K.on(e,"mouseover",g))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(si),this._element.classList.add(si),K.trigger(this._element,ti,e)}hide(){if(p(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=K.trigger(this._element,Xr,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",g))),this._popper&&this._popper.destroy(),this._menu.classList.remove(si),this._element.classList.remove(si),this._element.setAttribute("aria-expanded","false"),pe.removeDataAttribute(this._menu,"popper"),K.trigger(this._element,Zr,e))}_getConfig(e){if(e={...this.constructor.Default,...pe.getDataAttributes(this._element),...e},d(qr,e,this.constructor.DefaultType),"object"===typeof e.reference&&!l(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${qr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof jr)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:l(this._config.reference)?t=h(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=Vr(t,this._menu,n),r&&pe.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(si)}_getMenuElement(){return ge.next(this._element,hi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(ai))return vi;if(e.classList.contains(ci))return _i;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(oi)?t?mi:pi:t?yi:gi}_detectNavbar(){return null!==this._element.closest(`.${ui}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ge.find(fi,this._menu).filter(f);n.length&&S(n,t,e===Qr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Ii.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Jr||"keyup"===e.type&&e.key!==Hr))return;const t=ge.find(li);for(let n=0,r=t.length;n<r;n++){const r=Ii.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Hr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return a(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===zr||e.key!==Gr&&(e.key!==Qr&&e.key!==Wr||e.target.closest(hi)):!Yr.test(e.key))return;const t=this.classList.contains(si);if(!t&&e.key===Gr)return;if(e.preventDefault(),e.stopPropagation(),p(this))return;const n=this.matches(li)?this:ge.prev(this,li)[0],r=Ii.getOrCreateInstance(n);if(e.key!==Gr)return e.key===Wr||e.key===Qr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==zr||Ii.clearMenus());r.hide()}}K.on(document,ri,li,Ii.dataApiKeydownHandler),K.on(document,ri,hi,Ii.dataApiKeydownHandler),K.on(document,ni,Ii.clearMenus),K.on(document,ii,Ii.clearMenus),K.on(document,ni,li,(function(e){e.preventDefault(),Ii.getOrCreateInstance(this).toggle()})),I(Ii);const Ei=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ti=".sticky-top";class Si{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(Ei,"paddingRight",(t=>t+e)),this._setElementAttributes(Ti,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Ei,"paddingRight"),this._resetElementAttributes(Ti,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&pe.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=pe.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(pe.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){l(e)?t(e):ge.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const ki={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ai={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Ci="backdrop",Ni="fade",Oi="show",xi=`mousedown.bs.${Ci}`;class Di{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(Oi),this._emulateAnimation((()=>{E(e)}))):E(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Oi),this._emulateAnimation((()=>{this.dispose(),E(e)}))):E(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ni),this._element=e}return this._element}_getConfig(e){return e={...ki,..."object"===typeof e?e:{}},e.rootElement=h(e.rootElement),d(Ci,e,Ai),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),K.on(this._getElement(),xi,(()=>{E(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(K.off(this._element,xi),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){T(e,this._getElement(),this._config.isAnimated)}}const Ri={trapElement:null,autofocus:!0},Pi={trapElement:"element",autofocus:"boolean"},Li="focustrap",Mi="bs.focustrap",Fi=`.${Mi}`,Ui=`focusin${Fi}`,Vi=`keydown.tab${Fi}`,ji="Tab",qi="forward",$i="backward";class Bi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),K.off(document,Fi),K.on(document,Ui,(e=>this._handleFocusin(e))),K.on(document,Vi,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,K.off(document,Fi))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=ge.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===$i?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===ji&&(this._lastTabNavDirection=e.shiftKey?$i:qi)}_getConfig(e){return e={...Ri,..."object"===typeof e?e:{}},d(Li,e,Pi),e}}const Ki="modal",Gi="bs.modal",zi=`.${Gi}`,Hi=".data-api",Wi="Escape",Qi={backdrop:!0,keyboard:!0,focus:!0},Ji={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Yi=`hide${zi}`,Xi=`hidePrevented${zi}`,Zi=`hidden${zi}`,es=`show${zi}`,ts=`shown${zi}`,ns=`resize${zi}`,rs=`click.dismiss${zi}`,is=`keydown.dismiss${zi}`,ss=`mouseup.dismiss${zi}`,os=`mousedown.dismiss${zi}`,as=`click${zi}${Hi}`,cs="modal-open",us="fade",ls="show",hs="modal-static",ds=".modal.show",fs=".modal-dialog",ps=".modal-body",ms='[data-bs-toggle="modal"]';class gs extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ge.findOne(fs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Si}static get Default(){return Qi}static get NAME(){return Ki}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=K.trigger(this._element,es,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(cs),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),K.on(this._dialog,os,(()=>{K.one(this._element,ss,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=K.trigger(this._element,Yi);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ls),K.off(this._element,rs),K.off(this._dialog,os),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>K.off(e,zi))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Di({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Bi({trapElement:this._element})}_getConfig(e){return e={...Qi,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(Ki,e,Ji),e}_showElement(e){const t=this._isAnimated(),n=ge.findOne(ps,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&y(this._element),this._element.classList.add(ls);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,K.trigger(this._element,ts,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?K.on(this._element,is,(e=>{this._config.keyboard&&e.key===Wi?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Wi||this._triggerBackdropTransition()})):K.off(this._element,is)}_setResizeEvent(){this._isShown?K.on(window,ns,(()=>this._adjustDialog())):K.off(window,ns)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(cs),this._resetAdjustments(),this._scrollBar.reset(),K.trigger(this._element,Zi)}))}_showBackdrop(e){K.on(this._element,rs,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(us)}_triggerBackdropTransition(){const e=K.trigger(this._element,Xi);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(hs)||(i||(r.overflowY="hidden"),t.add(hs),this._queueCallback((()=>{t.remove(hs),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!b()||n&&!e&&b())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!b()||!n&&e&&b())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=gs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}K.on(document,as,ms,(function(e){const t=a(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),K.one(t,es,(e=>{e.defaultPrevented||K.one(t,Zi,(()=>{f(this)&&this.focus()}))}));const n=ge.findOne(ds);n&&gs.getInstance(n).hide();const r=gs.getOrCreateInstance(t);r.toggle(this)})),Q(gs),I(gs);const ys="offcanvas",vs="bs.offcanvas",_s=`.${vs}`,ws=".data-api",bs=`load${_s}${ws}`,Is="Escape",Es={backdrop:!0,keyboard:!0,scroll:!1},Ts={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Ss="show",ks="offcanvas-backdrop",As=".offcanvas.show",Cs=`show${_s}`,Ns=`shown${_s}`,Os=`hide${_s}`,xs=`hidden${_s}`,Ds=`click${_s}${ws}`,Rs=`keydown.dismiss${_s}`,Ps='[data-bs-toggle="offcanvas"]';class Ls extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return ys}static get Default(){return Es}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=K.trigger(this._element,Cs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Si).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ss);const n=()=>{this._config.scroll||this._focustrap.activate(),K.trigger(this._element,Ns,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=K.trigger(this._element,Os);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Ss),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Si).reset(),K.trigger(this._element,xs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...Es,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(ys,e,Ts),e}_initializeBackDrop(){return new Di({className:ks,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Bi({trapElement:this._element})}_addEventListeners(){K.on(this._element,Rs,(e=>{this._config.keyboard&&e.key===Is&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=Ls.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}K.on(document,Ds,Ps,(function(e){const t=a(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),p(this))return;K.one(t,xs,(()=>{f(this)&&this.focus()}));const n=ge.findOne(As);n&&n!==t&&Ls.getInstance(n).hide();const r=Ls.getOrCreateInstance(t);r.toggle(this)})),K.on(window,bs,(()=>ge.find(As).forEach((e=>Ls.getOrCreateInstance(e).show())))),Q(Ls),I(Ls);const Ms=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Fs=/^aria-[\w-]*$/i,Us=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Vs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,js=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Ms.has(n)||Boolean(Us.test(e.nodeValue)||Vs.test(e.nodeValue));const r=t.filter((e=>e instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},qs={"*":["class","dir","id","lang","role",Fs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function $s(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach((t=>{js(t,i)||e.removeAttribute(t.nodeName)}))}return i.body.innerHTML}const Bs="tooltip",Ks="bs.tooltip",Gs=`.${Ks}`,zs="bs-tooltip",Hs=new Set(["sanitize","allowList","sanitizeFn"]),Ws={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Qs={AUTO:"auto",TOP:"top",RIGHT:b()?"left":"right",BOTTOM:"bottom",LEFT:b()?"right":"left"},Js={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:qs,popperConfig:null},Ys={HIDE:`hide${Gs}`,HIDDEN:`hidden${Gs}`,SHOW:`show${Gs}`,SHOWN:`shown${Gs}`,INSERTED:`inserted${Gs}`,CLICK:`click${Gs}`,FOCUSIN:`focusin${Gs}`,FOCUSOUT:`focusout${Gs}`,MOUSEENTER:`mouseenter${Gs}`,MOUSELEAVE:`mouseleave${Gs}`},Xs="fade",Zs="modal",eo="show",to="show",no="out",ro=".tooltip-inner",io=`.${Zs}`,so="hide.bs.modal",oo="hover",ao="focus",co="click",uo="manual";class lo extends W{constructor(e,t){if("undefined"===typeof jr)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Js}static get NAME(){return Bs}static get Event(){return Ys}static get DefaultType(){return Ws}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(eo))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),K.off(this._element.closest(io),so,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=K.trigger(this._element,this.constructor.Event.SHOW),t=m(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ro).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),s=i(this.constructor.NAME);r.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&r.classList.add(Xs);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;z.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(r),K.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Vr(this._element,r,this._getPopperConfig(a)),r.classList.add(eo);const u=this._resolvePossibleFunction(this._config.customClass);u&&r.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{K.on(e,"mouseover",g)}));const l=()=>{const e=this._hoverState;this._hoverState=null,K.trigger(this._element,this.constructor.Event.SHOWN),e===no&&this._leave(null,this)},h=this.tip.classList.contains(Xs);this._queueCallback(l,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==to&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),K.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=K.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(eo),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",g))),this._activeTrigger[co]=!1,this._activeTrigger[ao]=!1,this._activeTrigger[oo]=!1;const r=this.tip.classList.contains(Xs);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Xs,eo),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ro)}_sanitizeAndSetContent(e,t,n){const r=ge.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return l(t)?(t=h(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=$s(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Qs[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)K.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==uo){const t=e===oo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===oo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;K.on(this._element,t,this._config.selector,(e=>this._enter(e))),K.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},K.on(this._element.closest(io),so,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?ao:oo]=!0),t.getTipElement().classList.contains(eo)||t._hoverState===to?t._hoverState=to:(clearTimeout(t._timeout),t._hoverState=to,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===to&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?ao:oo]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=no,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===no&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=pe.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Hs.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:h(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),d(Bs,e,this.constructor.DefaultType),e.sanitize&&(e.template=$s(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return zs}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=lo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}I(lo);const ho="popover",fo="bs.popover",po=`.${fo}`,mo="bs-popover",go={...lo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},yo={...lo.DefaultType,content:"(string|element|function)"},vo={HIDE:`hide${po}`,HIDDEN:`hidden${po}`,SHOW:`show${po}`,SHOWN:`shown${po}`,INSERTED:`inserted${po}`,CLICK:`click${po}`,FOCUSIN:`focusin${po}`,FOCUSOUT:`focusout${po}`,MOUSEENTER:`mouseenter${po}`,MOUSELEAVE:`mouseleave${po}`},_o=".popover-header",wo=".popover-body";class bo extends lo{static get Default(){return go}static get NAME(){return ho}static get Event(){return vo}static get DefaultType(){return yo}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),_o),this._sanitizeAndSetContent(e,this._getContent(),wo)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return mo}static jQueryInterface(e){return this.each((function(){const t=bo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}I(bo);const Io="scrollspy",Eo="bs.scrollspy",To=`.${Eo}`,So=".data-api",ko={offset:10,method:"auto",target:""},Ao={offset:"number",method:"string",target:"(string|element)"},Co=`activate${To}`,No=`scroll${To}`,Oo=`load${To}${So}`,xo="dropdown-item",Do="active",Ro='[data-bs-spy="scroll"]',Po=".nav, .list-group",Lo=".nav-link",Mo=".nav-item",Fo=".list-group-item",Uo=`${Lo}, ${Fo}, .${xo}`,Vo=".dropdown",jo=".dropdown-toggle",qo="offset",$o="position";class Bo extends W{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,K.on(this._scrollElement,No,(()=>this._process())),this.refresh(),this._process()}static get Default(){return ko}static get NAME(){return Io}refresh(){const e=this._scrollElement===this._scrollElement.window?qo:$o,t="auto"===this._config.method?e:this._config.method,n=t===$o?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=ge.find(Uo,this._config.target);r.map((e=>{const r=o(e),i=r?ge.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[pe[t](i).top+n,r]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){K.off(this._scrollElement,To),super.dispose()}_getConfig(e){return e={...ko,...pe.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=h(e.target)||document.documentElement,d(Io,e,Ao),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Uo.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ge.findOne(t.join(","),this._config.target);n.classList.add(Do),n.classList.contains(xo)?ge.findOne(jo,n.closest(Vo)).classList.add(Do):ge.parents(n,Po).forEach((e=>{ge.prev(e,`${Lo}, ${Fo}`).forEach((e=>e.classList.add(Do))),ge.prev(e,Mo).forEach((e=>{ge.children(e,Lo).forEach((e=>e.classList.add(Do)))}))})),K.trigger(this._scrollElement,Co,{relatedTarget:e})}_clear(){ge.find(Uo,this._config.target).filter((e=>e.classList.contains(Do))).forEach((e=>e.classList.remove(Do)))}static jQueryInterface(e){return this.each((function(){const t=Bo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(window,Oo,(()=>{ge.find(Ro).forEach((e=>new Bo(e)))})),I(Bo);const Ko="tab",Go="bs.tab",zo=`.${Go}`,Ho=".data-api",Wo=`hide${zo}`,Qo=`hidden${zo}`,Jo=`show${zo}`,Yo=`shown${zo}`,Xo=`click${zo}${Ho}`,Zo="dropdown-menu",ea="active",ta="fade",na="show",ra=".dropdown",ia=".nav, .list-group",sa=".active",oa=":scope > li > .active",aa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ca=".dropdown-toggle",ua=":scope > .dropdown-menu .active";class la extends W{static get NAME(){return Ko}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ea))return;let e;const t=a(this._element),n=this._element.closest(ia);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?oa:sa;e=ge.find(t,n),e=e[e.length-1]}const r=e?K.trigger(e,Wo,{relatedTarget:this._element}):null,i=K.trigger(this._element,Jo,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{K.trigger(e,Qo,{relatedTarget:this._element}),K.trigger(this._element,Yo,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ge.children(t,sa):ge.find(oa,t),i=r[0],s=n&&i&&i.classList.contains(ta),o=()=>this._transitionComplete(e,i,n);i&&s?(i.classList.remove(na),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(ea);const e=ge.findOne(ua,t.parentNode);e&&e.classList.remove(ea),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ea),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),y(e),e.classList.contains(ta)&&e.classList.add(na);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(Zo)){const t=e.closest(ra);t&&ge.find(ca,t).forEach((e=>e.classList.add(ea))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=la.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(document,Xo,aa,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),p(this))return;const t=la.getOrCreateInstance(this);t.show()})),I(la);const ha="toast",da="bs.toast",fa=`.${da}`,pa=`mouseover${fa}`,ma=`mouseout${fa}`,ga=`focusin${fa}`,ya=`focusout${fa}`,va=`hide${fa}`,_a=`hidden${fa}`,wa=`show${fa}`,ba=`shown${fa}`,Ia="fade",Ea="hide",Ta="show",Sa="showing",ka={animation:"boolean",autohide:"boolean",delay:"number"},Aa={animation:!0,autohide:!0,delay:5e3};class Ca extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ka}static get Default(){return Aa}static get NAME(){return ha}show(){const e=K.trigger(this._element,wa);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ia);const t=()=>{this._element.classList.remove(Sa),K.trigger(this._element,ba),this._maybeScheduleHide()};this._element.classList.remove(Ea),y(this._element),this._element.classList.add(Ta),this._element.classList.add(Sa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ta))return;const e=K.trigger(this._element,va);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ea),this._element.classList.remove(Sa),this._element.classList.remove(Ta),K.trigger(this._element,_a)};this._element.classList.add(Sa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ta)&&this._element.classList.remove(Ta),super.dispose()}_getConfig(e){return e={...Aa,...pe.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},d(ha,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){K.on(this._element,pa,(e=>this._onInteraction(e,!0))),K.on(this._element,ma,(e=>this._onInteraction(e,!1))),K.on(this._element,ga,(e=>this._onInteraction(e,!0))),K.on(this._element,ya,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Ca.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(Ca),I(Ca);const Na={Alert:re,Button:he,Carousel:lt,Collapse:Dt,Dropdown:Ii,Modal:gs,Offcanvas:Ls,Popover:bo,ScrollSpy:Bo,Tab:la,Toast:Ca,Tooltip:lo};return Na}))},9662:function(e,t,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},9670:function(e,t,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=r("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,o,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new y),b=c(w.get),I=c(w.has),E=c(w.set);r=function(e,t){if(I(w,e))throw new g(m);return t.facade=e,E(w,e,t),t},i=function(e){return b(w,e)||{}},s=function(e){return I(w,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new g(m);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},s=function(e){return h(e,T)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:_}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),i=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},4488:function(e,t,n){var r=n(7854),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),i=n(4488),s=r.Object;e.exports=function(e){return s(i(e))}},7593:function(e,t,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(7854),i=n(648),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var r=n(7854),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),d=n(7741),f=n(2914),p=n(1913);e.exports=function(e,t,n,m){var g=m?2:1,y=e.split("."),v=y[y.length-1],_=r.apply(null,y);if(_){var w=_.prototype;if(!p&&i(w,"cause")&&delete w.cause,!n)return _;var b=r("Error"),I=t((function(e,t){var n=l(m?t:e,void 0),r=m?new _(e):new _;return void 0!==n&&s(r,"message",n),f&&s(r,"stack",d(r.stack,2)),this&&o(w,this)&&u(r,this,I),arguments.length>g&&h(r,arguments[g]),r}));if(I.prototype=w,"Error"!==v&&(a?a(I,b):c(I,b,{name:!0})),c(I,_),!p)try{w.name!==v&&s(w,"name",v),w.constructor=I}catch(E){}return I}}},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},5503:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(2238),i="firebase",s="9.6.7";
/**
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
 */
(0,r.KN)(i,s,"app")},7803:function(e,t,n){"use strict";n.r(t),n.d(t,{ActionCodeOperation:function(){return d},ActionCodeURL:function(){return ft},AuthCredential:function(){return Be},AuthErrorCodes:function(){return v},EmailAuthCredential:function(){return tt},EmailAuthProvider:function(){return mt},FacebookAuthProvider:function(){return _t},FactorId:function(){return c},GithubAuthProvider:function(){return bt},GoogleAuthProvider:function(){return wt},OAuthCredential:function(){return it},OAuthProvider:function(){return vt},OperationType:function(){return h},PhoneAuthCredential:function(){return lt},PhoneAuthProvider:function(){return Gr},PhoneMultiFactorGenerator:function(){return is},ProviderId:function(){return u},RecaptchaVerifier:function(){return Fr},SAMLAuthProvider:function(){return St},SignInMethod:function(){return l},TwitterAuthProvider:function(){return kt},applyActionCode:function(){return Qt},browserLocalPersistence:function(){return Bn},browserPopupRedirectResolver:function(){return ts},browserSessionPersistence:function(){return Gn},checkActionCode:function(){return Jt},confirmPasswordReset:function(){return Wt},connectAuthEmulator:function(){return Ue},createUserWithEmailAndPassword:function(){return Xt},debugErrorMap:function(){return m},deleteUser:function(){return An},fetchSignInMethodsForEmail:function(){return sn},getAdditionalUserInfo:function(){return wn},getAuth:function(){return ls},getIdToken:function(){return ee},getIdTokenResult:function(){return te},getMultiFactorResolver:function(){return On},getRedirectResult:function(){return gi},inMemoryPersistence:function(){return ve},indexedDBLocalPersistence:function(){return gr},initializeAuth:function(){return x},isSignInWithEmailLink:function(){return tn},linkWithCredential:function(){return jt},linkWithPhoneNumber:function(){return qr},linkWithPopup:function(){return ti},linkWithRedirect:function(){return pi},multiFactor:function(){return Mn},onAuthStateChanged:function(){return En},onIdTokenChanged:function(){return In},parseActionCodeURL:function(){return pt},prodErrorMap:function(){return g},reauthenticateWithCredential:function(){return qt},reauthenticateWithPhoneNumber:function(){return $r},reauthenticateWithPopup:function(){return ei},reauthenticateWithRedirect:function(){return di},reload:function(){return le},sendEmailVerification:function(){return on},sendPasswordResetEmail:function(){return Ht},sendSignInLinkToEmail:function(){return en},setPersistence:function(){return bn},signInAnonymously:function(){return Ot},signInWithCredential:function(){return Vt},signInWithCustomToken:function(){return Bt},signInWithEmailAndPassword:function(){return Zt},signInWithEmailLink:function(){return nn},signInWithPhoneNumber:function(){return jr},signInWithPopup:function(){return Zr},signInWithRedirect:function(){return li},signOut:function(){return kn},unlink:function(){return Pt},updateCurrentUser:function(){return Sn},updateEmail:function(){return ln},updatePassword:function(){return hn},updatePhoneNumber:function(){return Kr},updateProfile:function(){return un},useDeviceLanguage:function(){return Tn},verifyBeforeUpdateEmail:function(){return an},verifyPasswordResetCode:function(){return Yt}});var r=n(4444),i=n(2238);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);
/**
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
 */
const c={PHONE:"phone"},u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},h={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},d={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
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
 */
function f(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m=f,g=p,y=new r.LL("auth","Firebase",p()),v={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},_=new o.Yd("@firebase/auth");function w(e,...t){_.logLevel<=o["in"].ERROR&&_.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
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
 */function b(e,...t){throw S(e,...t)}function I(e,...t){return S(e,...t)}function E(e,t,n){const i=Object.assign(Object.assign({},g()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function T(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&b(e,"argument-error"),E(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return y.create(e,...t)}function k(e,t,...n){if(!e)throw S(t,...n)}function A(e){const t="INTERNAL ASSERTION FAILED: "+e;throw w(t),new Error(t)}function C(e,t){e||A(t)}
/**
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
 */const N=new Map;function O(e){C(e instanceof Function,"Expected a class definition");let t=N.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,N.set(e,t),t)}
/**
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
 */function x(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;b(e,"already-initialized")}const s=n.initialize({options:t});return s}function D(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function P(){return"http:"===L()||"https:"===L()}function L(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function M(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(P()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function F(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class U{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return M()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function V(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class j{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const q={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},$=new U(3e4,6e4);
/**
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
 */function B(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function K(e,t,n,i,s={}){return G(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),j.fetch()(H(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function G(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},q),t);try{const t=new W(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Q(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Q(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw E(e,a,o);b(e,a)}}catch(s){if(s instanceof r.ZR)throw s;b(e,"network-request-failed")}}async function z(e,t,n,r,i={}){const s=await K(e,t,n,r,i);return"mfaPendingCredential"in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}function H(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?V(e.config,i):`${e.config.apiScheme}://${i}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(I(this.auth,"network-request-failed"))),$.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=I(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function J(e,t){return K(e,"POST","/v1/accounts:delete",t)}async function Y(e,t){return K(e,"POST","/v1/accounts:update",t)}async function X(e,t){return K(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */function ee(e,t=!1){return(0,r.m9)(e).getIdToken(t)}async function te(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=re(i);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Z(ne(s.auth_time)),issuedAtTime:Z(ne(s.iat)),expirationTime:Z(ne(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function ne(e){return 1e3*Number(e)}function re(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return w("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(w("Failed to decode base64 JWT payload"),null)}catch(s){return w("Caught error parsing JWT payload as JSON",s),null}}function ie(e){const t=re(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function se(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&oe(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function oe({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class ae{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class ce{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ue(e){var t;const n=e.auth,r=await e.getIdToken(),i=await se(e,X(n,{idToken:r}));k(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?de(s.providerUserInfo):[],a=he(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ce(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function le(e){const t=(0,r.m9)(e);await ue(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function he(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function de(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function fe(e,t){const n=await G(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=H(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):ie(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await fe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new pe;return n&&(k("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(k("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(k("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return A("not implemented")}}
/**
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
 */function me(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ge{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ae(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ce(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await se(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return te(this,e)}reload(){return le(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ue(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await se(this,J(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:I}=t;k(v&&I,e,"internal-error");const E=pe.fromJSON(this.name,I);k("string"===typeof v,e,"internal-error"),me(l,e.name),me(h,e.name),k("boolean"===typeof _,e,"internal-error"),k("boolean"===typeof w,e,"internal-error"),me(d,e.name),me(f,e.name),me(p,e.name),me(m,e.name),me(g,e.name),me(y,e.name);const T=new ge({uid:v,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new pe;r.updateFromServerResponse(t);const i=new ge({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ue(i),i}}
/**
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
 */class ye{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ye.type="NONE";const ve=ye;
/**
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
 */function _e(e,t,n){return`firebase:${e}:${t}:${n}`}class we{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_e(this.userKey,r.apiKey,i),this.fullPersistenceKey=_e("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new we(O(ve),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||O(ve);const s=_e(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ge._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new we(i,e,n)):new we(i,e,n)}}
/**
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
 */function be(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Se(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ae(t))return"Blackberry";if(Ce(t))return"Webos";if(Ee(t))return"Safari";if((t.includes("chrome/")||Te(t))&&!t.includes("edge/"))return"Chrome";if(ke(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Ie(e=(0,r.z$)()){return/firefox\//i.test(e)}function Ee(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Te(e=(0,r.z$)()){return/crios\//i.test(e)}function Se(e=(0,r.z$)()){return/iemobile/i.test(e)}function ke(e=(0,r.z$)()){return/android/i.test(e)}function Ae(e=(0,r.z$)()){return/blackberry/i.test(e)}function Ce(e=(0,r.z$)()){return/webos/i.test(e)}function Ne(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function Oe(e=(0,r.z$)()){var t;return Ne(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,r.w1)()&&10===document.documentMode}function De(e=(0,r.z$)()){return Ne(e)||ke(e)||Ce(e)||Ae(e)||/windows phone/i.test(e)||Se(e)}function Re(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Pe(e,t=[]){let n;switch(e){case"Browser":n=be((0,r.z$)());break;case"Worker":n=`${be((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
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
 */class Le{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await we.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ue(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(O(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await we.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return k(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Me(e){return(0,r.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ue(e,t,n){const r=Me(e);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ve(t),{host:o,port:a}=je(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$e()}function Ve(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function je(e){const t=Ve(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:qe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:qe(t)}}}function qe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function $e(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}}
/**
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
 */async function Ke(e,t){return K(e,"POST","/v1/accounts:resetPassword",B(e,t))}async function Ge(e,t){return K(e,"POST","/v1/accounts:update",t)}async function ze(e,t){return K(e,"POST","/v1/accounts:update",B(e,t))}
/**
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
 */async function He(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",B(e,t))}async function We(e,t){return K(e,"POST","/v1/accounts:sendOobCode",B(e,t))}async function Qe(e,t){return We(e,t)}async function Je(e,t){return We(e,t)}async function Ye(e,t){return We(e,t)}async function Xe(e,t){return We(e,t)}
/**
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
 */async function Ze(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}async function et(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}
/**
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
 */class tt extends Be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new tt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new tt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return He(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ze(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ge(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return et(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function nt(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",B(e,t))}
/**
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
 */const rt="http://localhost";class it extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new it(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}buildRequest(){const e={requestUri:rt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function st(e,t){return K(e,"POST","/v1/accounts:sendVerificationCode",B(e,t))}async function ot(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t))}async function at(e,t){const n=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t));if(n.temporaryProof)throw Q(e,"account-exists-with-different-credential",n);return n}const ct={["USER_NOT_FOUND"]:"user-not-found"};async function ut(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,n),ct)}
/**
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
 */class lt extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new lt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new lt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ot(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return at(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ut(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new lt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function ht(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ft{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ht(null!==(i=c["mode"])&&void 0!==i?i:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=dt(e);try{return new ft(t)}catch(n){return null}}}function pt(e){return ft.parseLink(e)}
/**
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
 */class mt{constructor(){this.providerId=mt.PROVIDER_ID}static credential(e,t){return tt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ft.parseLink(t);return k(n,"argument-error"),tt._fromEmailAndCode(e,n.code,n.tenantId)}}mt.PROVIDER_ID="password",mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class gt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class yt extends gt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vt extends yt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),it._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),it._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new vt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
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
 */class _t extends yt{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
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
 */
class wt extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com",wt.PROVIDER_ID="google.com";
/**
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
 */
class bt extends yt{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
/**
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
 */
const It="http://localhost";class Et extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Et(n,i):null}static _create(e,t){return new Et(e,t)}buildRequest(){return{requestUri:It,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
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
 */const Tt="saml.";class St extends gt{constructor(e){k(e.startsWith(Tt),"argument-error"),super(e)}static credentialFromResult(e){return St.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return St.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Et.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Et._create(n,t)}catch(r){return null}}}
/**
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
 */class kt extends yt{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kt.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function At(e,t){return z(e,"POST","/v1/accounts:signUp",B(e,t))}
/**
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
 */kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ge._fromIdTokenResponse(e,n,r),s=Nt(n),o=new Ct({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Nt(n);return new Ct({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Nt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function Ot(e){var t;const n=Me(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ct({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await At(n,{returnSecureToken:!0}),i=await Ct._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
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
 */class xt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xt(e,t,n,r)}}function Dt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function Rt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
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
 */async function Pt(e,t){const n=(0,r.m9)(e);await Mt(!0,n,t);const{providerUserInfo:i}=await Y(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Rt(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Lt(e,t,n=!1){const r=await se(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ct._forOperation(e,"link",r)}async function Mt(e,t,n){await ue(t);const r=Rt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";k(r.has(n)===e,t.auth,i)}
/**
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
 */async function Ft(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await se(e,Dt(r,i,t,e),n);k(s.idToken,r,"internal-error");const o=re(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(e.uid===a,r,"user-mismatch"),Ct._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&b(r,"user-mismatch"),s}}
/**
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
 */async function Ut(e,t,n=!1){const r="signIn",i=await Dt(e,r,t),s=await Ct._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Vt(e,t){return Ut(Me(e),t)}async function jt(e,t){const n=(0,r.m9)(e);return await Mt(!1,n,t.providerId),Lt(n,t)}async function qt(e,t){return Ft((0,r.m9)(e),t)}
/**
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
 */async function $t(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",B(e,t))}
/**
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
 */async function Bt(e,t){const n=Me(e),r=await $t(n,{token:t,returnSecureToken:!0}),i=await Ct._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
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
 */class Kt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Gt._fromServerResponse(e,t):b(e,"internal-error")}}class Gt extends Kt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Gt(t)}}
/**
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
 */function zt(e,t,n){var r;k((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */async function Ht(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&zt(i,s,n),await Je(i,s)}async function Wt(e,t,n){await Ke((0,r.m9)(e),{oobCode:t,newPassword:n})}async function Qt(e,t){await ze((0,r.m9)(e),{oobCode:t})}async function Jt(e,t){const n=(0,r.m9)(e),i=await Ke(n,{oobCode:t}),s=i.requestType;switch(k(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(i.mfaInfo,n,"internal-error");default:k(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Kt._fromServerResponse(Me(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Yt(e,t){const{data:n}=await Jt((0,r.m9)(e),t);return n.email}async function Xt(e,t,n){const r=Me(e),i=await At(r,{returnSecureToken:!0,email:t,password:n}),s=await Ct._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Zt(e,t,n){return Vt((0,r.m9)(e),mt.credential(t,n))}
/**
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
 */async function en(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,i,"argument-error"),n&&zt(i,s,n),await Ye(i,s)}function tn(e,t){const n=ft.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function nn(e,t,n){const i=(0,r.m9)(e),s=mt.credentialWithLink(t,n||R());return k(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Vt(i,s)}
/**
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
 */async function rn(e,t){return K(e,"POST","/v1/accounts:createAuthUri",B(e,t))}
/**
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
 */async function sn(e,t){const n=P()?R():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await rn((0,r.m9)(e),i);return s||[]}async function on(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&zt(n.auth,s,t);const{email:o}=await Qe(n.auth,s);o!==e.email&&await e.reload()}async function an(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&zt(i.auth,o,n);const{email:a}=await Xe(i.auth,o);a!==e.email&&await e.reload()}
/**
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
 */async function cn(e,t){return K(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function un(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await se(i,cn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function ln(e,t){return dn((0,r.m9)(e),t,null)}function hn(e,t){return dn((0,r.m9)(e),null,t)}async function dn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await se(e,Ge(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */function fn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=re(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new pn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new gn(s,i);case"github.com":return new yn(s,i);case"google.com":return new vn(s,i);case"twitter.com":return new _n(s,i,e.screenName||null);case"custom":case"anonymous":return new pn(s,null);default:return new pn(s,r,i)}}class pn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class mn extends pn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class gn extends pn{constructor(e,t){super(e,"facebook.com",t)}}class yn extends mn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class vn extends pn{constructor(e,t){super(e,"google.com",t)}}class _n extends mn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function wn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:fn(n)}
/**
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
 */function bn(e,t){return(0,r.m9)(e).setPersistence(t)}function In(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function En(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Tn(e){(0,r.m9)(e).useDeviceLanguage()}function Sn(e,t){return(0,r.m9)(e).updateCurrentUser(t)}function kn(e){return(0,r.m9)(e).signOut()}async function An(e){return(0,r.m9)(e).delete()}class Cn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Cn("enroll",e)}static _fromMfaPendingCredential(e){return new Cn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Cn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Cn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
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
 */class Nn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Me(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Kt._fromServerResponse(n,e)));k(r.mfaPendingCredential,n,"internal-error");const s=Cn._fromMfaPendingCredential(r.mfaPendingCredential);return new Nn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ct._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),Ct._forOperation(t.user,t.operationType,o);default:b(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function On(e,t){var n;const i=(0,r.m9)(e),s=t;return k(t.customData.operationType,i,"argument-error"),k(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Nn._fromError(i,s)}
/**
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
 */function xn(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}function Dn(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}function Rn(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:withdraw",B(e,t))}class Pn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Kt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Pn(e)}async getSession(){return Cn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await se(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await se(this.user,Rn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Ln=new WeakMap;function Mn(e){const t=(0,r.m9)(e);return Ln.has(t)||Ln.set(t,Pn._fromUser(t)),Ln.get(t)}const Fn="__sak";
/**
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
 */class Un{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fn,"1"),this.storage.removeItem(Fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Vn(){const e=(0,r.z$)();return Ee(e)||Ne(e)}const jn=1e3,qn=10;class $n extends Un{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vn()&&Re(),this.fallbackToPolling=De(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),jn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$n.type="LOCAL";const Bn=$n;
/**
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
 */class Kn extends Un{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kn.type="SESSION";const Gn=Kn;
/**
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
 */function zn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Hn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await zn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Wn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Hn.receivers=[];class Qn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Wn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Jn(){return window}function Yn(e){Jn().location.href=e}
/**
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
 */function Xn(){return"undefined"!==typeof Jn()["WorkerGlobalScope"]&&"function"===typeof Jn()["importScripts"]}async function Zn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function er(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function tr(){return Xn()?self:null}
/**
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
 */const nr="firebaseLocalStorageDb",rr=1,ir="firebaseLocalStorage",sr="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ar(e,t){return e.transaction([ir],t?"readwrite":"readonly").objectStore(ir)}function cr(){const e=indexedDB.deleteDatabase(nr);return new or(e).toPromise()}function ur(){const e=indexedDB.open(nr,rr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ir,{keyPath:sr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ir)?t(n):(n.close(),await cr(),t(await ur()))}))}))}async function lr(e,t,n){const r=ar(e,!0).put({[sr]:t,value:n});return new or(r).toPromise()}async function hr(e,t){const n=ar(e,!1).get(t),r=await new or(n).toPromise();return void 0===r?null:r.value}function dr(e,t){const n=ar(e,!0).delete(t);return new or(n).toPromise()}const fr=800,pr=3;class mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ur()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>pr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(tr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zn(),!this.activeServiceWorker)return;this.sender=new Qn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&er()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ur();return await lr(e,Fn,"1"),await dr(e,Fn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>lr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>hr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>dr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ar(e,!1).getAll();return new or(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),fr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mr.type="LOCAL";const gr=mr;
/**
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
 */function yr(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:start",B(e,t))}function vr(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}
/**
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
 */async function _r(e){return(await K(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
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
 */function wr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function br(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=I("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",wr().appendChild(r)}))}function Ir(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */const Er=500,Tr=6e4,Sr=1e12;class kr{constructor(e){this.auth=e,this.counter=Sr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Ar(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Sr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Sr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Sr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Ar{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;k(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Cr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Tr)}),Er))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Cr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
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
 */const Nr=Ir("rcb"),Or=new U(3e4,6e4),xr="https://www.google.com/recaptcha/api.js?";class Dr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Jn().grecaptcha}load(e,t=""){return k(Rr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Jn().grecaptcha):new Promise(((n,i)=>{const s=Jn().setTimeout((()=>{i(I(e,"network-request-failed"))}),Or.get());Jn()[Nr]=()=>{Jn().clearTimeout(s),delete Jn()[Nr];const r=Jn().grecaptcha;if(!r)return void i(I(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${xr}?${(0,r.xO)({onload:Nr,render:"explicit",hl:t})}`;br(o).catch((()=>{clearTimeout(s),i(I(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Rr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Pr{async load(e){return new kr(e)}clearedOneInstance(){}}
/**
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
 */const Lr="recaptcha",Mr={theme:"light",type:"image"};class Fr{constructor(e,t=Object.assign({},Mr),n){this.parameters=t,this.type=Lr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;k(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Pr:new Dr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(P()&&!Xn(),this.auth,"internal-error"),await Ur(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _r(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ur(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
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
 */class Vr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=lt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function jr(e,t,n){const i=Me(e),s=await Br(i,t,(0,r.m9)(n));return new Vr(s,(e=>Vt(i,e)))}async function qr(e,t,n){const i=(0,r.m9)(e);await Mt(!1,i,"phone");const s=await Br(i.auth,t,(0,r.m9)(n));return new Vr(s,(e=>jt(i,e)))}async function $r(e,t,n){const i=(0,r.m9)(e),s=await Br(i.auth,t,(0,r.m9)(n));return new Vr(s,(e=>qt(i,e)))}async function Br(e,t,n){var r;const i=await n.verify();try{let s;if(k("string"===typeof i,e,"argument-error"),k(n.type===Lr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){k("enroll"===t.type,e,"internal-error");const n=await xn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await yr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await st(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Kr(e,t){await Lt((0,r.m9)(e),t)}
/**
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
 */class Gr{constructor(e){this.providerId=Gr.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return Br(this.auth,e,(0,r.m9)(t))}static credential(e,t){return lt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Gr.credentialFromTaggedObject(t)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?lt._fromTokenResponse(t,n):null}}
/**
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
 */
function zr(e,t){return t?O(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Gr.PROVIDER_ID="phone",Gr.PHONE_SIGN_IN_METHOD="phone";class Hr extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wr(e){return Ut(e.auth,new Hr(e),e.bypassAuthState)}function Qr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Ft(n,new Hr(e),e.bypassAuthState)}async function Jr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Lt(n,new Hr(e),e.bypassAuthState)}
/**
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
 */class Yr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wr;case"linkViaPopup":case"linkViaRedirect":return Jr;case"reauthViaPopup":case"reauthViaRedirect":return Qr;default:b(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Xr=new U(2e3,1e4);async function Zr(e,t,n){const r=Me(e);T(e,t,gt);const i=zr(r,n),s=new ni(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ei(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n),o=new ni(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function ti(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n),o=new ni(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class ni extends Yr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(I(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(I(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(I(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Xr.get())};e()}}ni.currentPopupAction=null;
/**
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
 */
const ri="pendingRedirect",ii=new Map;class si extends Yr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const t=await oi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function oi(e,t){const n=ui(t),r=ci(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function ai(e,t){return ci(e)._set(ui(t),"true")}function ci(e){return O(e._redirectPersistence)}function ui(e){return _e(ri,e.config.apiKey,e.name)}
/**
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
 */function li(e,t,n){return hi(e,t,n)}async function hi(e,t,n){const r=Me(e);T(e,t,gt);const i=zr(r,n);return await ai(i,r),i._openRedirect(r,t,"signInViaRedirect")}function di(e,t,n){return fi(e,t,n)}async function fi(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n);await ai(s,i.auth);const o=await vi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function pi(e,t,n){return mi(e,t,n)}async function mi(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n);await Mt(!1,i,t.providerId),await ai(s,i.auth);const o=await vi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function gi(e,t){return await Me(e)._initializationPromise,yi(e,t,!1)}async function yi(e,t,n=!1){const r=Me(e),i=zr(r,t),s=new si(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function vi(e){const t=Wn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
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
 */const _i=6e5;class wi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ei(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ii(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(I(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_i&&this.cachedEventUids.clear(),this.cachedEventUids.has(bi(e))}saveEventToCache(e){this.cachedEventUids.add(bi(e)),this.lastProcessedEventTime=Date.now()}}function bi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ii({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ei(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ii(e);default:return!1}}
/**
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
 */async function Ti(e,t={}){return K(e,"GET","/v1/projects",t)}
/**
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
 */const Si=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ki=/^https?/;async function Ai(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ti(e);for(const r of t)try{if(Ci(r))return}catch(n){}b(e,"unauthorized-domain")}function Ci(e){const t=R(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ki.test(n))return!1;if(Si.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
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
 */const Ni=new U(3e4,6e4);function Oi(){const e=Jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xi(e){return new Promise(((t,n)=>{var r,i,s;function o(){Oi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oi(),n(I(e,"network-request-failed"))},timeout:Ni.get()})}if(null===(i=null===(r=Jn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Jn().gapi)||void 0===s?void 0:s.load)){const t=Ir("iframefcb");return Jn()[t]=()=>{gapi.load?o():n(I(e,"network-request-failed"))},br(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Di=null,e}))}let Di=null;function Ri(e){return Di=Di||xi(e),Di}
/**
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
 */const Pi=new U(5e3,15e3),Li="__/auth/iframe",Mi="emulator/auth/iframe",Fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ui=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vi(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?V(t,Mi):`https://${e.config.authDomain}/${Li}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Ui.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function ji(e){const t=await Ri(e),n=Jn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Vi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=I(e,"network-request-failed"),s=Jn().setTimeout((()=>{r(i)}),Pi.get());function o(){Jn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const qi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$i=500,Bi=600,Ki="_blank",Gi="http://localhost";class zi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Hi(e,t,n,i=$i,s=Bi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},qi),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=Te(l)?Ki:n),Ie(l)&&(t=t||Gi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Oe(l)&&"_self"!==c)return Wi(t||"",c),new zi(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zi(d)}function Wi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Qi="__/auth/handler",Ji="emulator/auth/handler";function Yi(e,t,n,s,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof gt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof yt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Xi(e)}?${(0,r.xO)(u).slice(1)}`}function Xi({config:e}){return e.emulator?V(e,Ji):`https://${e.authDomain}/${Qi}`}
/**
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
 */const Zi="webStorageSupport";class es{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gn,this._completeRedirectFn=yi}async _openPopup(e,t,n,r){var i;C(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Yi(e,t,n,R(),r);return Hi(e,s,Wn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Yn(Yi(e,t,n,R(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ji(e),n=new wi(e);return t.register("authEvent",(t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zi,{type:Zi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zi];void 0!==i&&t(!!i),b(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ai(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return De()||Ee()||Ne()}}const ts=es;class ns{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}}class rs extends ns{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rs(e)}_finalizeEnroll(e,t,n){return Dn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class is{constructor(){}static assertion(e){return rs._fromCredential(e)}}is.FACTOR_ID="phone";var ss="@firebase/auth",os="0.19.9";
/**
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
 */
class as{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function cs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function us(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pe(e)},o=new Le(t,r);return D(o,n),o})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new as(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(ss,os,cs(e)),(0,i.KN)(ss,os,"esm2017")}
/**
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
 */function ls(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():x(e,{popupRedirectResolver:ts,persistence:[gr,Bn,Gn]})}us("Browser")},5321:function(e,t,n){"use strict";n.r(t),n.d(t,{AbstractUserDataWriter:function(){return $p},Bytes:function(){return Uf},CACHE_SIZE_UNLIMITED:function(){return _f},CollectionReference:function(){return lf},DocumentReference:function(){return cf},DocumentSnapshot:function(){return yp},FieldPath:function(){return Mf},FieldValue:function(){return Vf},Firestore:function(){return wf},FirestoreError:function(){return ei},GeoPoint:function(){return jf},LoadBundleTask:function(){return vf},Query:function(){return uf},QueryConstraint:function(){return Ep},QueryDocumentSnapshot:function(){return vp},QuerySnapshot:function(){return _p},SnapshotMetadata:function(){return gp},Timestamp:function(){return yi},Transaction:function(){return cm},WriteBatch:function(){return Gp},_DatabaseId:function(){return Fi},_DocumentKey:function(){return qi},_EmptyAppCheckTokenProvider:function(){return li},_EmptyAuthCredentialsProvider:function(){return ri},_FieldPath:function(){return Si},_cast:function(){return nf},_debugAssert:function(){return Yr},_isBase64Available:function(){return Ai},_logWarn:function(){return Hr},_setIndexConfiguration:function(){return gm},_validateIsNotUsedTogether:function(){return Xd},addDoc:function(){return rm},arrayRemove:function(){return fm},arrayUnion:function(){return dm},clearIndexedDbPersistence:function(){return Cf},collection:function(){return hf},collectionGroup:function(){return df},connectFirestoreEmulator:function(){return af},deleteDoc:function(){return nm},deleteField:function(){return lm},disableNetwork:function(){return xf},doc:function(){return ff},documentId:function(){return Ff},enableIndexedDbPersistence:function(){return Sf},enableMultiTabIndexedDbPersistence:function(){return kf},enableNetwork:function(){return Of},endAt:function(){return Fp},endBefore:function(){return Mp},ensureFirestoreConfigured:function(){return Ef},executeWrite:function(){return om},getDoc:function(){return Hp},getDocFromCache:function(){return Qp},getDocFromServer:function(){return Jp},getDocs:function(){return Yp},getDocsFromCache:function(){return Xp},getDocsFromServer:function(){return Zp},getFirestore:function(){return If},increment:function(){return pm},initializeFirestore:function(){return bf},limit:function(){return Op},limitToLast:function(){return xp},loadBundle:function(){return Rf},namedQuery:function(){return Pf},onSnapshot:function(){return im},onSnapshotsInSync:function(){return sm},orderBy:function(){return Cp},query:function(){return Tp},queryEqual:function(){return mf},refEqual:function(){return pf},runTransaction:function(){return um},serverTimestamp:function(){return hm},setDoc:function(){return em},setLogLevel:function(){return Kr},snapshotEqual:function(){return bp},startAfter:function(){return Pp},startAt:function(){return Rp},terminate:function(){return Df},updateDoc:function(){return tm},waitForPendingWrites:function(){return Nf},where:function(){return kp},writeBatch:function(){return mm}});var r,i=n(2238),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:_,w.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0,S={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var e=m(this);delete S[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},A=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function C(e){e:{var t=zn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function N(e){return Array.prototype.concat.apply([],arguments)}function O(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e){return/^[\s\xa0]*$/.test(e)}var D,R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return-1!=e.indexOf(t)}function L(e,t){return e<t?-1:e>t?1:0}e:{var M=h.navigator;if(M){var F=M.userAgent;if(F){D=F;break e}}D=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function V(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $(e){return $[" "](e),e}function B(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=d;var K,G=P(D,"Opera"),z=P(D,"Trident")||P(D,"MSIE"),H=P(D,"Edge"),W=H||z,Q=P(D,"Gecko")&&!(P(D.toLowerCase(),"webkit")&&!P(D,"Edge"))&&!(P(D,"Trident")||P(D,"MSIE"))&&!P(D,"Edge"),J=P(D.toLowerCase(),"webkit")&&!P(D,"Edge");function Y(){var e=h.document;return e?e.documentMode:void 0}e:{var X="",Z=function(){var e=D;return Q?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):J?/WebKit\/(\S+)/.exec(e):G?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Z&&(X=Z?Z[1]:""),z){var ee=Y();if(null!=ee&&ee>parseFloat(X)){K=String(ee);break e}}K=X}var te,ne={};function re(){return B((function(){let e=0;const t=R(String(K)).split("."),n=R("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=L(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||L(0==i[2].length,0==s[2].length)||L(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&z){var ie=Y();te=ie||(parseInt(K,10)||void 0)}else te=void 0;var se=te,oe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ce(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Q){e:{try{$(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ue[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}ae.prototype.h=function(){this.defaultPrevented=!0},I(ce,ae);var ue={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),he=0;function de(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function me(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=k(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ge(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}pe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ge(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new de(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),ve={};function _e(e,t,n,r,i){if(r&&r.once)return Ie(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)_e(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[le]?e.N(t,n,p(r)?!!r.capture:!!r,i):we(e,t,n,!1,r,i)}function we(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ae(e);if(a||(e[ye]=a=new pe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=be(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oe||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Se(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(){function e(n){return t.call(e.src,e.listener,n)}var t=ke;return e}function Ie(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ie(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[le]?e.O(t,n,p(r)?!!r.capture:!!r,i):we(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ne(n),e&&e[le]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ge(s,n,r,i),-1<n&&(fe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ae(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ge(t,n,r,i)),(n=-1<e?t[e]:null)&&Te(n))}function Te(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[le])me(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Se(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ae(t))?(me(n,e),0==n.h&&(n.src=null,t[ye]=null)):fe(e)}}}function Se(e){return e in ve?ve[e]:ve[e]="on"+e}function ke(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Te(e),e=n.call(r,t)}return e}function Ae(e){return e=e[ye],e instanceof pe?e:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(e){return"function"===typeof e?e:(e[Ce]||(e[Ce]=function(t){return e.handleEvent(t)}),e[Ce])}function Oe(){E.call(this),this.i=new pe(this),this.P=this,this.I=null}function xe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var i=t;t=new ae(r,e),q(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=De(o,r,!0,t)&&i}if(o=t.g=e,i=De(o,r,!0,t)&&i,i=De(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=De(o,r,!1,t)&&i}function De(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&me(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Oe,E),Oe.prototype[le]=!0,Oe.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fe(n[r]);delete t.g[e],t.h--}}this.I=null},Oe.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Oe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Re=h.JSON.stringify;function Pe(){var e=Be;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Le{constructor(){this.h=this.g=null}add(e,t){const n=Fe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,Fe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ve(e){h.setTimeout((()=>{throw e}),0)}function je(e,t){Me||qe(),$e||(Me(),$e=!0),Be.add(e,t)}function qe(){var e=h.Promise.resolve(void 0);Me=function(){e.then(Ke)}}var $e=!1,Be=new Le;function Ke(){for(var e;e=Pe();){try{e.h.call(e.g)}catch(n){Ve(n)}var t=Fe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function Ge(e,t){Oe.call(this),this.h=e||1,this.g=t||h,this.j=w(this.kb,this),this.l=Date.now()}function ze(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function We(e){e.g=He((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ge,Oe),r=Ge.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(ze(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ge.Z.M.call(this),ze(this),delete this.g};class Qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(e){E.call(this),this.h=e,this.g={}}I(Je,E);var Ye=[];function Xe(e,t,n,r){Array.isArray(n)||(n&&(Ye[0]=n.toString()),n=Ye);for(var i=0;i<n.length;i++){var s=_e(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ze(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Te(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function nt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function rt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+st(e,n)+(r?" "+r:"")}))}function it(e,t){e.info((function(){return"TIMEOUT: "+t}))}function st(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Re(n)}catch(a){return t}}Je.prototype.M=function(){Je.Z.M.call(this),Ze(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var ot={},at=null;function ct(){return at=at||new Oe}function ut(e){ae.call(this,ot.Ma,e)}function lt(e){const t=ct();xe(t,new ut(t,e))}function ht(e,t){ae.call(this,ot.STAT_EVENT,e),this.stat=t}function dt(e){const t=ct();xe(t,new ht(t,e))}function ft(e,t){ae.call(this,ot.Na,e),this.size=t}function pt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}ot.Ma="serverreachability",I(ut,ae),ot.STAT_EVENT="statevent",I(ht,ae),ot.Na="timingevent",I(ft,ae);var mt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},gt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function vt(e){return e.h||(e.h=e.i())}function _t(){}yt.prototype.h=null;var wt,bt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function It(){ae.call(this,"d")}function Et(){ae.call(this,"c")}function Tt(){}function St(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Je(this),this.P=At,e=W?125:void 0,this.W=new Ge(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}I(It,ae),I(Et,ae),I(Tt,yt),Tt.prototype.g=function(){return new XMLHttpRequest},Tt.prototype.i=function(){return{}},wt=new Tt;var At=45e3,Ct={},Nt={};function Ot(e,t,n){e.K=1,e.v=tn(Qt(t)),e.s=n,e.U=!0,xt(e,null)}function xt(e,t){e.F=Date.now(),Lt(e),e.A=Qt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new kt,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qe(w(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?V(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),lt(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function Dt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Rt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Pt(e,n),r==Nt){4==t&&(e.o=4,dt(14),i=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(r==Ct){e.o=4,dt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}rt(e.j,e.m,r,null),jt(e,r)}Dt(e)&&r!=Nt&&r!=Ct&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,dt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(t),t.L=!0,dt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),Vt(e),Ut(e))}function Pt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Nt:(n=Number(t.substring(n,r)),isNaN(n)?Ct:(r+=1,r+n>t.length?Nt:(t=t.substr(r,n),e.C=r+n,t)))}function Lt(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pt(w(e.eb,e),t)}function Ft(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||vr(e.l,e)}function Vt(e){Ft(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ze(e.W),Ze(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Sn(n.i,e)))if(n.I=e.N,!e.J&&Sn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),sr(n)}pr(n),dt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pt(w(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else wr(n,11)}else if((e.J||n.g==e)&&yr(n),!x(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(P(e,"spdy")||P(e,"quic")||P(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,en(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Ir(r,r.H?r.la:null,r.W),o.J){An(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ft(a),Lt(a)),r.g=o}else fr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||wr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?wr(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}lt(4)}catch(u){}}function qt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)A(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=qt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Bt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Bt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Kt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Gt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Gt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Gt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=St.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Xn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==t||lt(8==t||0>=d?3:2),Ft(this);var n=this.g.ba();this.N=n;t:if(Dt(this)){var r=Zn(this.g);e="";var i=r.length,s=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Vt(this),Ut(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,dt(12),Vt(this),Ut(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Rt(this,l,o),W&&this.i&&3==l&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),jt(this,o)),4==l&&Vt(this),this.i&&!this.I&&(4==l?vr(this.l,this):(this.i=!1,Lt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Vt(this),Ut(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(Ft(this),Rt(this,e,t),this.i&&4!=e&&Lt(this))}},r.cancel=function(){this.I=!0,Vt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(it(this.j,this.A),2!=this.K&&(lt(3),dt(17)),Vt(this),this.o=2,Ut(this)):Mt(this,this.Y-e)},r=Bt.prototype,r.R=function(){Kt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Kt(this),this.g.concat()},r.get=function(e,t){return Gt(this.h,e)?this.h[e]:t},r.set=function(e,t){Gt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var zt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Wt){this.g=void 0!==t?t:e.g,Jt(this,e.j),this.s=e.s,Yt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new Bt(t.g),n.h=t.h),Zt(this,n),this.o=e.o}else e&&(n=String(e).match(zt))?(this.g=!!t,Jt(this,n[1]||"",!0),this.s=sn(n[2]||""),Yt(this,n[3]||"",!0),Xt(this,n[4]),this.l=sn(n[5]||"",!0),Zt(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Qt(e){return new Wt(e)}function Jt(e,t,n){e.j=n?sn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yt(e,t,n){e.i=n?sn(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Zt(e,t,n){t instanceof fn?(e.h=t,_n(e.h,e.g)):(n||(t=on(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Wt?Qt(e):new Wt(e,void 0)}function rn(e,t,n,r){var i=new Wt(null,void 0);return e&&Jt(i,e),t&&Yt(i,t),n&&Xt(i,n),r&&(i.l=r),i}function sn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,an),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function an(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,cn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(on(t,cn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,dn)),e.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pn(e){e.g||(e.g=new Bt,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function mn(e,t){pn(e),t=vn(e,t),Gt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Gt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Kt(e)))}function gn(e,t){return pn(e),t=vn(e,t),Gt(e.g.h,t)}function yn(e,t,n){mn(e,t),0<n.length&&(e.i=null,e.g.set(vn(e,t),O(n)),e.h+=n.length)}function vn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _n(e,t){t&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(mn(this,t),yn(this,n,e))}),e)),e.j=t}r=fn.prototype,r.add=function(e,t){pn(this),this.i=null,e=vn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){pn(this),this.g.forEach((function(n,r){A(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){pn(this);var t=[];if("string"===typeof e)gn(this,e)&&(t=N(t,this.g.get(vn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=N(t,e[n])}return t},r.set=function(e,t){return pn(this),this.i=null,e=vn(this,e),gn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var wn=class{constructor(e,t){this.h=e,this.g=t}};function bn(e){this.l=e||In,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var In=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Tn(e){return e.h?1:e.g?e.g.size:0}function Sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function kn(e,t){e.g?e.g.add(t):e.h=t}function An(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Cn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function Nn(){}function On(){this.g=new Nn}function xn(e,t,n){const r=n||"";try{$t(e,(function(e,n){let i=e;p(e)&&(i=Re(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Dn(e,t){const n=new et;if(h.Image){const r=new Image;r.onload=b(Rn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(Rn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(Rn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(Rn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Rn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Pn(e){this.l=e.$b||null,this.j=e.ib||!1}function Ln(e,t){Oe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Nn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},Nn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(Pn,yt),Pn.prototype.g=function(){return new Ln(this.l,this.j)},Pn.prototype.i=function(e){return function(){return e}}({}),I(Ln,Oe);var Mn=0;function Fn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vn(e)}function Vn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Ln.prototype,r.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Mn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):Vn(this),3==this.readyState&&Fn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=h.JSON.parse;function qn(e){Oe.call(this),this.headers=new Bt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}I(qn,Oe);var $n="",Bn=/^https?$/i,Kn=["POST","PUT"];function Gn(e){return z&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function zn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wn(e),Jn(e)}function Wn(e){e.D||(e.D=!0,xe(e,"complete"),xe(e,"error"))}function Qn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))He(e.Fa,0,e);else if(xe(e,"readystatechange"),4==Xn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(zt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Bn.test(i?i.toLowerCase():"")}n=r}if(n)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var o=2<Xn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Wn(e)}}finally{Jn(e)}}}function Jn(e,t){if(e.g){Yn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||xe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function Zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=er(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rr(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,e),this.$a=nr("retryDelaySeedMs",1e4,e),this.Ya=nr("forwardChannelMaxRetries",2,e),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(e&&e.concurrentRequestLimit),this.Ca=new On,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ir(e){if(or(e),3==e.G){var t=e.V++,n=Qt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hr(e,n),t=new St(e,e.h,t,void 0),t.K=2,t.v=tn(Qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Lt(t)}br(e)}function sr(e){e.g&&(mr(e),e.g.cancel(),e.g=null)}function or(e){sr(e),e.u&&(h.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function ar(e,t){e.l.push(new wn(e.Za++,t)),3==e.G&&cr(e)}function cr(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function ur(e,t){return!(Tn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pt(w(e.Ha,e,t),_r(e,e.C)),e.C++,!0))}function lr(e,t){var n;n=t?t.m:e.V++;const r=Qt(e.F);en(r,"SID",e.J),en(r,"RID",n),en(r,"AID",e.U),hr(e,r),e.o&&e.s&&tr(r,e.o,e.s),n=new St(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),kn(e.i,n),Ot(n,r,t)}function hr(e,t){e.j&&$t({},(function(e,n){en(t,n,e)}))}function dr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?w(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{xn(a,e,"req"+n+"_")}catch(Zr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function pr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pt(w(e.Ga,e),_r(e,e.A)),e.A++,!0)}function mr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function gr(e){e.g=new St(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Qt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hr(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Qt(t)),n.s=null,n.U=!0,xt(n,e)}function yr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function vr(e,t){var n=null;if(e.g==t){yr(e),mr(e),e.g=null;var r=2}else{if(!Sn(e.i,t))return;n=t.D,An(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ct(),xe(r,new ft(r,n,t,i)),cr(e)}else fr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&ur(e,t)||2==r&&pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:wr(e,5);break;case 4:wr(e,10);break;case 3:wr(e,6);break;default:wr(e,2)}}function _r(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function wr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=w(e.jb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Jt(n,"https"),tn(n)),Dn(n.toString(),r)}else dt(2);e.G=0,e.j&&e.j.va(t),br(e),or(e)}function br(e){e.G=0,e.I=-1,e.j&&(0==Cn(e.i).length&&0==e.l.length||(e.i.i.length=0,O(e.l),e.l.length=0),e.j.ua())}function Ir(e,t,n){let r=nn(n);if(""!=r.i)t&&Yt(r,t+"."+r.i),Xt(r,r.m);else{const e=h.location;r=rn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){en(r,t,e)})),t=e.D,n=e.sa,t&&n&&en(r,t,n),en(r,"VER",e.ma),hr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new qn(new Pn({ib:!0})):new qn(e.qa),t.L=e.H,t}function Tr(){}function Sr(){if(z&&!(10<=Number(se)))throw Error("Environmental error: no available transport.")}function kr(e,t){Oe.call(this),this.g=new rr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!x(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!x(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Nr(this)}function Ar(e){It.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Cr(){Et.call(this),this.status=1}function Nr(e){this.g=e}r=qn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wt.g(),this.C=this.u?vt(this.u):vt(wt),this.g.onreadystatechange=w(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Hn(this,s)}e=n||"";const i=new Bt(this.headers);r&&$t(r,(function(e,t){i.set(t,e)})),r=C(i.T()),n=h.FormData&&e instanceof h.FormData,!(0<=k(Kn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},r.cb=function(){Qn(this)},r.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new St(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=V(s),q(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dr(this,i,t),n=Qt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&tr(n,this.o,s),kn(this.i,i),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),i.$=!0,Ot(i,n,null)):Ot(i,n,t),this.G=2}}else 3==this.G&&(e?lr(this,e):0==this.l.length||En(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pt(w(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),dt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))},r=Tr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(e,t){return new kr(e,t)},I(kr,Oe),kr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(w(e.hb,e,t))),dt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ir(e,null,e.W),cr(e)},kr.prototype.close=function(){ir(this.g)},kr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ar(this.g,t)}else this.v?(t={},t.__data__=Re(e),ar(this.g,t)):ar(this.g,e)},kr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,kr.Z.M.call(this)},I(Ar,It),I(Cr,Et),I(Nr,Tr),Nr.prototype.xa=function(){xe(this.g,"a")},Nr.prototype.wa=function(e){xe(this.g,new Ar(e))},Nr.prototype.va=function(e){xe(this.g,new Cr(e))},Nr.prototype.ua=function(){xe(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,kr.prototype.send=kr.prototype.u,kr.prototype.open=kr.prototype.m,kr.prototype.close=kr.prototype.close,mt.NO_ERROR=0,mt.TIMEOUT=8,mt.HTTP_ERROR=6,gt.COMPLETE="complete",_t.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",Oe.prototype.listen=Oe.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Or=u.createWebChannelTransport=function(){return new Sr},xr=u.getStatEventTarget=function(){return ct()},Dr=u.ErrorCode=mt,Rr=u.EventType=gt,Pr=u.Event=ot,Lr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Pn,Fr=u.WebChannel=_t,Ur=u.XhrIo=qn;const Vr="@firebase/firestore";
/**
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
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
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
 */
let qr="9.6.7";
/**
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
 */const $r=new o.Yd("@firebase/firestore");function Br(){return $r.logLevel}function Kr(e){$r.setLogLevel(e)}function Gr(e,...t){if($r.logLevel<=o["in"].DEBUG){const n=t.map(Wr);$r.debug(`Firestore (${qr}): ${e}`,...n)}}function zr(e,...t){if($r.logLevel<=o["in"].ERROR){const n=t.map(Wr);$r.error(`Firestore (${qr}): ${e}`,...n)}}function Hr(e,...t){if($r.logLevel<=o["in"].WARN){const n=t.map(Wr);$r.warn(`Firestore (${qr}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function Qr(e="Unexpected state"){const t=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+e;throw zr(t),new Error(t)}function Jr(e,t){e||Qr()}function Yr(e,t){e||Qr()}function Xr(e,t){return e}
/**
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
 */const Zr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ei extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class ni{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ri{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class ii{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class si{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ti,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Gr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Gr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ti)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Gr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jr("string"==typeof t.accessToken),new ni(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jr(null===e||"string"==typeof e),new jr(e)}}class oi{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ai{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new oi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ci{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ui{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Gr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Gr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Gr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Gr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jr("string"==typeof e.token),this.p=e.token,new ci(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class li{getToken(){return Promise.resolve(new ci(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
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
 */class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
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
 */function di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */hi.A=-1;class fi{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function pi(e,t){return e<t?-1:e>t?1:0}function mi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gi(e){return e+"\0"}
/**
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
 */class yi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yi.fromMillis(Date.now())}static fromDate(e){return yi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new yi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class vi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new vi(e)}static min(){return new vi(new yi(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function _i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Ii{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qr(),void 0===n?n=e.length-t:n>e.length-t&&Qr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ii.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ei extends Ii{construct(e,t,n){return new Ei(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ei(Zr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ei(t)}static emptyPath(){return new Ei([])}}const Ti=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ii{construct(e,t,n){return new Si(e,t,n)}static isValidIdentifier(e){return Ti.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ei(Zr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ei(Zr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ei(Zr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ei(Zr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Si(t)}static emptyPath(){return new Si([])}}
/**
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
 */class ki{constructor(e){this.fields=e,e.sort(Si.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */function Ai(){return"undefined"!=typeof atob}
/**
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
 */class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ni=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(e){if(Jr(!!e),"string"==typeof e){let t=0;const n=Ni.exec(e);if(Jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xi(e.seconds),nanos:xi(e.nanos)}}function xi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Di(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
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
 */function Ri(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pi(e){const t=e.mapValue.fields.__previous_value__;return Ri(t)?Pi(t):t}function Li(e){const t=Oi(e.mapValue.fields.__local_write_time__.timestampValue);return new yi(t.seconds,t.nanos)}
/**
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
 */class Mi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function Ui(e){return null==e}function Vi(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */class qi{constructor(e){this.path=e}static fromPath(e){return new qi(Ei.fromString(e))}static fromName(e){return new qi(Ei.fromString(e).popFirst(5))}static empty(){return new qi(Ei.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ei.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ei.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new qi(new Ei(e.slice()))}}
/**
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
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Bi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ri(e)?4:10:Qr()}function Ki(e,t){if(e===t)return!0;const n=Bi(e);if(n!==Bi(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Li(e).isEqual(Li(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Oi(e.timestampValue),r=Oi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Di(e.bytesValue).isEqual(Di(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return xi(e.geoPointValue.latitude)===xi(t.geoPointValue.latitude)&&xi(e.geoPointValue.longitude)===xi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return xi(e.integerValue)===xi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=xi(e.doubleValue),r=xi(t.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mi(e.arrayValue.values||[],t.arrayValue.values||[],Ki);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_i(n)!==_i(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ki(n[i],r[i])))return!1;return!0}(e,t);default:return Qr()}}function Gi(e,t){return void 0!==(e.values||[]).find((e=>Ki(e,t)))}function zi(e,t){if(e===t)return 0;const n=Bi(e),r=Bi(t);if(n!==r)return pi(n,r);switch(n){case 0:return 0;case 1:return pi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=xi(e.integerValue||e.doubleValue),r=xi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Li(e),Li(t));case 5:return pi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Di(e),r=Di(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pi(n[i],r[i]);if(0!==e)return e}return pi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pi(xi(e.latitude),xi(t.latitude));return 0!==n?n:pi(xi(e.longitude),xi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zi(n[i],r[i]);if(e)return e}return pi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=pi(r[o],s[o]);if(0!==e)return e;const t=zi(n[r[o]],i[s[o]]);if(0!==t)return t}return pi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Qr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pi(e,t);const n=Oi(e),r=Oi(t),i=pi(n.seconds,r.seconds);return 0!==i?i:pi(n.nanos,r.nanos)}function Wi(e){return Qi(e)}function Qi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Oi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Di(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,qi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qi(e.fields[i])}`;return n+"}"}(e.mapValue):Qr();var t,n}function Ji(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Yi(e){return!!e&&"integerValue"in e}function Xi(e){return!!e&&"arrayValue"in e}function Zi(e){return!!e&&"nullValue"in e}function es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ts(e){return!!e&&"mapValue"in e}function ns(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ns(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ns(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
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
 */class rs{constructor(e){this.value=e}static empty(){return new rs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(t)}setAll(e){let t=Si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ns(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ki(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){wi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new rs(ns(this.value))}}function is(e){const t=[];return wi(e.fields,((e,n)=>{const r=new Si([e]);if(ts(n)){const e=is(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ki(t)
/**
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
 */}class ss{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ss(e,0,vi.min(),vi.min(),rs.empty(),0)}static newFoundDocument(e,t,n){return new ss(e,1,t,vi.min(),n,0)}static newNoDocument(e,t){return new ss(e,2,t,vi.min(),rs.empty(),0)}static newUnknownDocument(e,t){return new ss(e,3,t,vi.min(),rs.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ss&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ss(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class os{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}os.UNKNOWN_ID=-1;class as{constructor(e,t){this.fieldPath=e,this.kind=t}}class cs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new cs(0,us.min())}}class us{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new us(vi.min(),qi.empty(),-1)}}
/**
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
 */class ls{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function hs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ls(e,t,n,r,i,s,o)}function ds(e){const t=Xr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Wi(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Wi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Wi(e))).join(",")),t.P=e}return t.P}function fs(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Wi(t.value)}`;var t})).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Wi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Wi(e))).join(",")),`Target(${t})`}function ps(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!As(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ki(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ns(e.startAt,t.startAt)&&Ns(e.endAt,t.endAt)}function ms(e){return qi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class gs extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.v(e,t,n):new ys(e,t,n):"array-contains"===t?new bs(e,n):"in"===t?new Is(e,n):"not-in"===t?new Es(e,n):"array-contains-any"===t?new Ts(e,n):new gs(e,t,n)}static v(e,t,n){return"in"===t?new vs(e,n):new _s(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.V(zi(t,this.value)):null!==t&&Bi(this.value)===Bi(t)&&this.V(zi(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ys extends gs{constructor(e,t,n){super(e,t,n),this.key=qi.fromName(n.referenceValue)}matches(e){const t=qi.comparator(e.key,this.key);return this.V(t)}}class vs extends gs{constructor(e,t){super(e,"in",t),this.keys=ws("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _s extends gs{constructor(e,t){super(e,"not-in",t),this.keys=ws("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ws(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>qi.fromName(e.referenceValue)))}class bs extends gs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xi(t)&&Gi(t.arrayValue,this.value)}}class Is extends gs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Gi(this.value.arrayValue,t)}}class Es extends gs{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Gi(this.value.arrayValue,t)}}class Ts extends gs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Gi(this.value.arrayValue,e)))}}class Ss{constructor(e,t){this.position=e,this.inclusive=t}}class ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function As(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Cs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?qi.comparator(qi.fromName(o.referenceValue),n.key):zi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ns(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ki(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Os{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function xs(e,t,n,r,i,s,o,a){return new Os(e,t,n,r,i,s,o,a)}function Ds(e){return new Os(e)}function Rs(e){return!Ui(e.limit)&&"F"===e.limitType}function Ps(e){return!Ui(e.limit)&&"L"===e.limitType}function Ls(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ms(e){for(const t of e.filters)if(t.S())return t.field;return null}function Fs(e){return null!==e.collectionGroup}function Us(e){const t=Xr(e);if(null===t.D){t.D=[];const e=Ms(t),n=Ls(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new ks(e)),t.D.push(new ks(Si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new ks(Si.keyField(),e))}}}return t.D}function Vs(e){const t=Xr(e);if(!t.C)if("F"===t.limitType)t.C=hs(t.path,t.collectionGroup,Us(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Us(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ks(i.field,t))}const n=t.endAt?new Ss(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Ss(t.startAt.position,!t.startAt.inclusive):null;t.C=hs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function js(e,t,n){return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qs(e,t){return ps(Vs(e),Vs(t))&&e.limitType===t.limitType}function $s(e){return`${ds(Vs(e))}|lt:${e.limitType}`}function Bs(e){return`Query(target=${fs(Vs(e))}; limitType=${e.limitType})`}function Ks(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):qi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Cs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Us(e),t))&&!(e.endAt&&!function(e,t,n){const r=Cs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Us(e),t))}(e,t)}function Gs(e){return(t,n)=>{let r=!1;for(const i of Us(e)){const e=zs(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function zs(e,t,n){const r=e.field.isKeyField()?qi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zi(r,i):Qr()}
/**
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
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Qr()}}
/**
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
 */function Hs(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function Ws(e){return{integerValue:""+e}}function Qs(e,t){return ji(t)?Ws(t):Hs(e,t)}
/**
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
 */class Js{constructor(){this._=void 0}}function Ys(e,t,n){return e instanceof eo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof to?no(e,t):e instanceof ro?io(e,t):function(e,t){const n=Zs(e,t),r=oo(n)+oo(e.k);return Yi(n)&&Yi(e.k)?Ws(r):Hs(e.O,r)}(e,t)}function Xs(e,t,n){return e instanceof to?no(e,t):e instanceof ro?io(e,t):n}function Zs(e,t){return e instanceof so?Yi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class eo extends Js{}class to extends Js{constructor(e){super(),this.elements=e}}function no(e,t){const n=ao(t);for(const r of e.elements)n.some((e=>Ki(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ro extends Js{constructor(e){super(),this.elements=e}}function io(e,t){let n=ao(t);for(const r of e.elements)n=n.filter((e=>!Ki(e,r)));return{arrayValue:{values:n}}}class so extends Js{constructor(e,t){super(),this.O=e,this.k=t}}function oo(e){return xi(e.integerValue||e.doubleValue)}function ao(e){return Xi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class co{constructor(e,t){this.field=e,this.transform=t}}function uo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof to&&t instanceof to||e instanceof ro&&t instanceof ro?mi(e.elements,t.elements,Ki):e instanceof so&&t instanceof so?Ki(e.k,t.k):e instanceof eo&&t instanceof eo}(e.transform,t.transform)}class lo{constructor(e,t){this.version=e,this.transformResults=t}}class ho{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ho}static exists(e){return new ho(void 0,e)}static updateTime(e){return new ho(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class po{}function mo(e,t,n){e instanceof wo?function(e,t,n){const r=e.value.clone(),i=Eo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof bo?function(e,t,n){if(!fo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Eo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Io(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function go(e,t,n){e instanceof wo?function(e,t,n){if(!fo(e.precondition,t))return;const r=e.value.clone(),i=To(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(_o(t),r).setHasLocalMutations()}(e,t,n):e instanceof bo?function(e,t,n){if(!fo(e.precondition,t))return;const r=To(e.fieldTransforms,n,t),i=t.data;i.setAll(Io(e)),i.setAll(r),t.convertToFoundDocument(_o(t),i).setHasLocalMutations()}(e,t,n):function(e,t){fo(e.precondition,t)&&t.convertToNoDocument(vi.min())}(e,t)}function yo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Zs(r.transform,e||null);null!=i&&(null==n&&(n=rs.empty()),n.set(r.field,i))}return n||null}function vo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mi(e,t,((e,t)=>uo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function _o(e){return e.isFoundDocument()?e.version:vi.min()}class wo extends po{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class bo extends po{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Io(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Eo(e,t,n){const r=new Map;Jr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Xs(o,a,n[i]))}return r}function To(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ys(e,s,t))}return r}class So extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class ko extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Ao{constructor(e){this.count=e}}
/**
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
 */var Co,No;function Oo(e){switch(e){default:return Qr();case Zr.CANCELLED:case Zr.UNKNOWN:case Zr.DEADLINE_EXCEEDED:case Zr.RESOURCE_EXHAUSTED:case Zr.INTERNAL:case Zr.UNAVAILABLE:case Zr.UNAUTHENTICATED:return!1;case Zr.INVALID_ARGUMENT:case Zr.NOT_FOUND:case Zr.ALREADY_EXISTS:case Zr.PERMISSION_DENIED:case Zr.FAILED_PRECONDITION:case Zr.ABORTED:case Zr.OUT_OF_RANGE:case Zr.UNIMPLEMENTED:case Zr.DATA_LOSS:return!0}}function xo(e){if(void 0===e)return zr("GRPC error has no .code"),Zr.UNKNOWN;switch(e){case Co.OK:return Zr.OK;case Co.CANCELLED:return Zr.CANCELLED;case Co.UNKNOWN:return Zr.UNKNOWN;case Co.DEADLINE_EXCEEDED:return Zr.DEADLINE_EXCEEDED;case Co.RESOURCE_EXHAUSTED:return Zr.RESOURCE_EXHAUSTED;case Co.INTERNAL:return Zr.INTERNAL;case Co.UNAVAILABLE:return Zr.UNAVAILABLE;case Co.UNAUTHENTICATED:return Zr.UNAUTHENTICATED;case Co.INVALID_ARGUMENT:return Zr.INVALID_ARGUMENT;case Co.NOT_FOUND:return Zr.NOT_FOUND;case Co.ALREADY_EXISTS:return Zr.ALREADY_EXISTS;case Co.PERMISSION_DENIED:return Zr.PERMISSION_DENIED;case Co.FAILED_PRECONDITION:return Zr.FAILED_PRECONDITION;case Co.ABORTED:return Zr.ABORTED;case Co.OUT_OF_RANGE:return Zr.OUT_OF_RANGE;case Co.UNIMPLEMENTED:return Zr.UNIMPLEMENTED;case Co.DATA_LOSS:return Zr.DATA_LOSS;default:return Qr()}}(No=Co||(Co={}))[No.OK=0]="OK",No[No.CANCELLED=1]="CANCELLED",No[No.UNKNOWN=2]="UNKNOWN",No[No.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",No[No.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",No[No.NOT_FOUND=5]="NOT_FOUND",No[No.ALREADY_EXISTS=6]="ALREADY_EXISTS",No[No.PERMISSION_DENIED=7]="PERMISSION_DENIED",No[No.UNAUTHENTICATED=16]="UNAUTHENTICATED",No[No.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",No[No.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",No[No.ABORTED=10]="ABORTED",No[No.OUT_OF_RANGE=11]="OUT_OF_RANGE",No[No.UNIMPLEMENTED=12]="UNIMPLEMENTED",No[No.INTERNAL=13]="INTERNAL",No[No.UNAVAILABLE=14]="UNAVAILABLE",No[No.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Do{constructor(e,t){this.comparator=e,this.root=t||Po.EMPTY}insert(e,t){return new Do(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Po.BLACK,null,null))}remove(e){return new Do(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Po.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Po{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Po.RED,this.left=null!=r?r:Po.EMPTY,this.right=null!=i?i:Po.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Po(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Po.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Po.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Po.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Po.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qr();if(this.right.isRed())throw Qr();const e=this.left.check();if(e!==this.right.check())throw Qr();return e+(this.isRed()?0:1)}}Po.EMPTY=null,Po.RED=!0,Po.BLACK=!1,Po.EMPTY=new class{constructor(){this.size=0}get key(){throw Qr()}get value(){throw Qr()}get color(){throw Qr()}get left(){throw Qr()}get right(){throw Qr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Po(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Lo{constructor(e){this.comparator=e,this.data=new Do(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(e){return new Mo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Lo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Lo(this.comparator);return t.data=e,t}}class Mo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Fo(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */const Uo=new Do(qi.comparator);function Vo(){return Uo}const jo=new Do(qi.comparator);function qo(){return jo}const $o=new Do(qi.comparator),Bo=new Lo(qi.comparator);function Ko(...e){let t=Bo;for(const n of e)t=t.add(n);return t}const Go=new Lo(pi);function zo(){return Go}
/**
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
 */class Ho{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,t)),new Ho(vi.min(),n,zo(),Vo(),Ko())}}class Wo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Wo(Ci.EMPTY_BYTE_STRING,t,Ko(),Ko(),Ko())}}
/**
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
 */class Qo{constructor(e,t,n,r){this.M=e,this.removedTargetIds=t,this.key=n,this.$=r}}class Jo{constructor(e,t){this.targetId=e,this.F=t}}class Yo{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Xo{constructor(){this.B=0,this.L=ta(),this.U=Ci.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ko(),t=Ko(),n=Ko();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Qr()}})),new Wo(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=ta()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Zo{constructor(e){this.nt=e,this.st=new Map,this.it=Vo(),this.rt=ea(),this.ot=new Lo(pi)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Qr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.F.count,r=this.wt(t);if(r){const e=r.target;if(ms(e))if(0===n){const n=new qi(e.path);this.at(t,n,ss.newNoDocument(n,vi.min()))}else Jr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ms(i.target)){const t=new qi(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.at(r,t,ss.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=Ko();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new Ho(e,t,this.ot,this.it,n);return this.it=Vo(),this.rt=ea(),this.ot=new Lo(pi),r}ut(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Xo,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new Lo(pi),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Gr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Xo),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ea(){return new Do(qi.comparator)}function ta(){return new Do(qi.comparator)}
/**
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
 */const na=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ra=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class ia{constructor(e,t){this.databaseId=e,this.N=t}}function sa(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oa(e,t){return e.N?t.toBase64():t.toUint8Array()}function aa(e,t){return sa(e,t.toTimestamp())}function ca(e){return Jr(!!e),vi.fromTimestamp(function(e){const t=Oi(e);return new yi(t.seconds,t.nanos)}(e))}function ua(e,t){return function(e){return new Ei(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function la(e){const t=Ei.fromString(e);return Jr(Ma(t)),t}function ha(e,t){return ua(e.databaseId,t.path)}function da(e,t){const n=la(t);if(n.get(1)!==e.databaseId.projectId)throw new ei(Zr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ei(Zr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new qi(ga(n))}function fa(e,t){return ua(e.databaseId,t)}function pa(e){const t=la(e);return 4===t.length?Ei.emptyPath():ga(t)}function ma(e){return new Ei(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ga(e){return Jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ya(e,t,n){return{name:ha(e,t),fields:n.value.mapValue.fields}}function va(e,t,n){const r=da(e,t.name),i=ca(t.updateTime),s=new rs({mapValue:{fields:t.fields}}),o=ss.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function _a(e,t){return"found"in t?function(e,t){Jr(!!t.found),t.found.name,t.found.updateTime;const n=da(e,t.found.name),r=ca(t.found.updateTime),i=new rs({mapValue:{fields:t.found.fields}});return ss.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Jr(!!t.missing),Jr(!!t.readTime);const n=da(e,t.missing),r=ca(t.readTime);return ss.newNoDocument(n,r)}(e,t):Qr()}function wa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Qr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(Jr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Jr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Zr.UNKNOWN:xo(e.code);return new ei(t,e.message||"")}(o);n=new Yo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=da(e,r.document.name),s=ca(r.document.updateTime),o=new rs({mapValue:{fields:r.document.fields}}),a=ss.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qo(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=da(e,r.document),s=r.readTime?ca(r.readTime):vi.min(),o=ss.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=da(e,r.document),s=r.removedTargetIds||[];n=new Qo([],s,i,null)}else{if(!("filter"in t))return Qr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ao(r),s=e.targetId;n=new Jo(s,i)}}return n}function ba(e,t){let n;if(t instanceof wo)n={update:ya(e,t.key,t.value)};else if(t instanceof So)n={delete:ha(e,t.key)};else if(t instanceof bo)n={update:ya(e,t.key,t.data),updateMask:La(t.fieldMask)};else{if(!(t instanceof ko))return Qr();n={verify:ha(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof eo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof to)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof so)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Qr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:aa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Qr()}(e,t.precondition)),n}function Ia(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?ho.updateTime(ca(e.updateTime)):void 0!==e.exists?ho.exists(e.exists):ho.none()}(t.currentDocument):ho.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Jr("REQUEST_TIME"===t.setToServerValue),n=new eo;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new to(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ro(e)}else"increment"in t?n=new so(e,t.increment):Qr();const r=Si.fromServerFormat(t.fieldPath);return new co(r,n)}(e,t))):[];if(t.update){t.update.name;const i=da(e,t.update.name),s=new rs({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ki(t.map((e=>Si.fromServerFormat(e))))}(t.updateMask);return new bo(i,s,e,n,r)}return new wo(i,s,n,r)}if(t.delete){const r=da(e,t.delete);return new So(r,n)}if(t.verify){const r=da(e,t.verify);return new ko(r,n)}return Qr()}function Ea(e,t){return e&&e.length>0?(Jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ca(e.updateTime):ca(t);return n.isEqual(vi.min())&&(n=ca(t)),new lo(n,e.transformResults||[])}(e,t)))):[]}function Ta(e,t){return{documents:[fa(e,t.path)]}}function Sa(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=fa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=fa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(es(e.value))return{unaryFilter:{field:xa(e.field),op:"IS_NAN"}};if(Zi(e.value))return{unaryFilter:{field:xa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(es(e.value))return{unaryFilter:{field:xa(e.field),op:"IS_NOT_NAN"}};if(Zi(e.value))return{unaryFilter:{field:xa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(e.field),op:Oa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:xa(e.field),direction:Na(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||Ui(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ka(e){let t=pa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Ca(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ks(Da(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ss(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ss(n,t)}(n.endAt)),xs(t,i,o,s,a,"F",c,u)}function Aa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ca(e){return e?void 0!==e.unaryFilter?[Pa(e)]:void 0!==e.fieldFilter?[Ra(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ca(e))).reduce(((e,t)=>e.concat(t))):Qr():[]}function Na(e){return na[e]}function Oa(e){return ra[e]}function xa(e){return{fieldPath:e.canonicalString()}}function Da(e){return Si.fromServerFormat(e.fieldPath)}function Ra(e){return gs.create(Da(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Pa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Da(e.unaryFilter.field);return gs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Da(e.unaryFilter.field);return gs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Da(e.unaryFilter.field);return gs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Da(e.unaryFilter.field);return gs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Qr()}}function La(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ma(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function Fa(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Va(t)),t=Ua(e.get(n),t);return Va(t)}function Ua(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Va(e){return e+""}function ja(e){const t=e.length;if(Jr(t>=2),2===t)return Jr(""===e.charAt(0)&&""===e.charAt(1)),Ei.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Qr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Qr()}s=t+2}return new Ei(r)}
/**
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
 */class qa{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class $a{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}$a.store="owner",$a.key="owner";class Ba{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Ba.store="mutationQueues",Ba.keyPath="userId";class Ka{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Ka.store="mutations",Ka.keyPath="batchId",Ka.userMutationsIndex="userMutationsIndex",Ka.userMutationsKeyPath=["userId","batchId"];class Ga{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Fa(t)]}static key(e,t,n){return[e,Fa(t),n]}}Ga.store="documentMutations",Ga.PLACEHOLDER=new Ga;class za{constructor(e,t){this.path=e,this.readTime=t}}class Ha{constructor(e,t){this.path=e,this.version=t}}class Wa{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Wa.store="remoteDocuments",Wa.readTimeIndex="readTimeIndex",Wa.readTimeIndexPath="readTime",Wa.collectionReadTimeIndex="collectionReadTimeIndex",Wa.collectionReadTimeIndexPath=["parentPath","readTime"];class Qa{constructor(e){this.byteSize=e}}Qa.store="remoteDocumentGlobal",Qa.key="remoteDocumentGlobalKey";class Ja{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Ja.store="targets",Ja.keyPath="targetId",Ja.queryTargetsIndexName="queryTargetsIndex",Ja.queryTargetsKeyPath=["canonicalId","targetId"];class Ya{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}Ya.store="targetDocuments",Ya.keyPath=["targetId","path"],Ya.documentTargetsIndex="documentTargetsIndex",Ya.documentTargetsKeyPath=["path","targetId"];class Xa{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Xa.key="targetGlobalKey",Xa.store="targetGlobal";class Za{constructor(e,t){this.collectionId=e,this.parent=t}}Za.store="collectionParents",Za.keyPath=["collectionId","parent"];class ec{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}ec.store="clientMetadata",ec.keyPath="clientId";class tc{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}tc.store="bundles",tc.keyPath="bundleId";class nc{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}nc.store="namedQueries",nc.keyPath="name";class rc{constructor(e,t,n){this.indexId=e,this.collectionGroup=t,this.fields=n}}rc.store="indexConfiguration",rc.keyPath="indexId",rc.collectionGroupIndex="collectionGroupIndex",rc.collectionGroupIndexPath="collectionGroup";class ic{constructor(e,t,n,r,i,s){this.indexId=e,this.uid=t,this.sequenceNumber=n,this.readTime=r,this.documentKey=i,this.largestBatchId=s}}ic.store="indexState",ic.keyPath=["indexId","uid"],ic.sequenceNumberIndex="sequenceNumberIndex",ic.sequenceNumberIndexPath=["uid","sequenceNumber"];class sc{constructor(e,t,n,r,i){this.indexId=e,this.uid=t,this.arrayValue=n,this.directionalValue=r,this.documentKey=i}}sc.store="indexEntries",sc.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],sc.documentKeyIndex="documentKeyIndex",sc.documentKeyIndexPath=["indexId","uid","documentKey"];class oc{constructor(e,t,n,r,i,s){this.userId=e,this.collectionPath=t,this.documentId=n,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=s}}oc.store="documentOverlays",oc.keyPath=["userId","collectionPath","documentId"],oc.collectionPathOverlayIndex="collectionPathOverlayIndex",oc.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],oc.collectionGroupOverlayIndex="collectionGroupOverlayIndex",oc.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const ac=[Ba.store,Ka.store,Ga.store,Wa.store,Ja.store,$a.store,Xa.store,Ya.store,ec.store,Qa.store,Za.store,tc.store,nc.store],cc=[...ac,oc.store],uc=[...cc,rc.store,ic.store,sc.store],lc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
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
 */class hc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */class dc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new dc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof dc?t:dc.resolve(t)}catch(e){return dc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):dc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):dc.reject(t)}static resolve(e){return new dc(((t,n)=>{t(e)}))}static reject(e){return new dc(((t,n)=>{n(e)}))}static waitFor(e){return new dc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=dc.resolve(!1);for(const n of e)t=t.next((e=>e?dc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
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
 */class fc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ti,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new gc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=bc(t.target.error);this.At.reject(new gc(e,n))}}static open(e,t,n,r){try{return new fc(t,e.transaction(r,n))}catch(e){throw new gc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(Gr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new vc(t)}}class pc{constructor(e,t,n){this.name=e,this.version=t,this.bt=n,12.2===pc.vt((0,a.z$)())&&zr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Gr("SimpleDb","Removing database:",e),_c(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!(0,a.hl)())return!1;if(pc.St())return!0;const e=(0,a.z$)(),t=pc.vt(e),n=0<t&&t<10,r=pc.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/vue-firebase-todo/"})||void 0===e?void 0:e.Ct)}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async xt(e){return this.db||(Gr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new gc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ei(Zr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ei(Zr.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new gc(e,r))},r.onupgradeneeded=e=>{Gr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.bt.kt(t,r.transaction,e.oldVersion,this.version).next((()=>{Gr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Ot&&(this.db.onversionchange=e=>this.Ot(e)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.xt(e);const t=fc.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.Pt(),e))).catch((e=>(t.abort(e),dc.reject(e)))).toPromise();return s.catch((()=>{})),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Gr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mc{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return _c(this.$t.delete())}}class gc extends ei{constructor(e,t){super(Zr.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yc(e){return"IndexedDbTransactionError"===e.name}class vc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Gr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Gr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),_c(n)}add(e){return Gr("SimpleDb","ADD",this.store.name,e,e),_c(this.store.add(e))}get(e){return _c(this.store.get(e)).next((t=>(void 0===t&&(t=null),Gr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Gr("SimpleDb","DELETE",this.store.name,e),_c(this.store.delete(e))}count(){return Gr("SimpleDb","COUNT",this.store.name),_c(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new dc(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Gt(e,t){Gr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,((e,t,n)=>n.delete()))}Qt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}Wt(e){const t=this.cursor({});return new dc(((n,r)=>{t.onerror=e=>{const t=bc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Kt(e,t){const n=[];return new dc(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new mc(i),o=t(i.primaryKey,i.value,s);if(o instanceof dc){const e=o.catch((e=>(s.done(),dc.reject(e))));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}})).next((()=>dc.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _c(e){return new dc(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=bc(e.target.error);n(t)}}))}let wc=!1;function bc(e){const t=pc.vt((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ei("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wc||(wc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
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
 */class Ic extends hc{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function Ec(e,t){const n=Xr(e);return pc.Nt(n.zt,t)}
/**
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
 */class Tc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&mo(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&go(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&go(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ko())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((e,t)=>vo(e,t)))&&mi(this.baseMutations,e.baseMutations,((e,t)=>vo(e,t)))}}class Sc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jr(e.mutations.length===n.length);let r=$o;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Sc(e,t,n,r)}}
/**
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
 */class kc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Ac{constructor(e,t,n,r,i=vi.min(),s=vi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ac(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ac(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ac(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class Cc{constructor(e){this.Ht=e}}function Nc(e,t){let n;if(t.document)n=va(e.Ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=qi.fromSegments(t.noDocument.path),r=Pc(t.noDocument.readTime);n=ss.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Qr();{const e=qi.fromSegments(t.unknownDocument.path),r=Pc(t.unknownDocument.version);n=ss.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(Dc(t.readTime)),n}function Oc(e,t){const n=xc(t.readTime),r=t.key.path.popLast().toArray();if(t.isFoundDocument()){const i=function(e,t){return{name:ha(e,t.key),fields:t.data.value.mapValue.fields,updateTime:sa(e,t.version.toTimestamp())}}(e.Ht,t),s=t.hasCommittedMutations;return new Wa(null,null,i,s,n,r)}if(t.isNoDocument()){const e=t.key.path.toArray(),i=Rc(t.version),s=t.hasCommittedMutations;return new Wa(null,new za(e,i),null,s,n,r)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),i=Rc(t.version);return new Wa(new Ha(e,i),null,null,!0,n,r)}return Qr()}function xc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Dc(e){const t=new yi(e[0],e[1]);return vi.fromTimestamp(t)}function Rc(e){const t=e.toTimestamp();return new qa(t.seconds,t.nanoseconds)}function Pc(e){const t=new yi(e.seconds,e.nanoseconds);return vi.fromTimestamp(t)}function Lc(e,t){const n=(t.baseMutations||[]).map((t=>Ia(e.Ht,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Ia(e.Ht,t))),i=yi.fromMillis(t.localWriteTimeMs);return new Tc(t.batchId,i,n,r)}function Mc(e){const t=Pc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Pc(e.lastLimboFreeSnapshotVersion):vi.min();let r;var i;return void 0!==e.query.documents?(Jr(1===(i=e.query).documents.length),r=Vs(Ds(pa(i.documents[0])))):r=function(e){return Vs(ka(e))}(e.query),new Ac(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ci.fromBase64String(e.resumeToken))}function Fc(e,t){const n=Rc(t.snapshotVersion),r=Rc(t.lastLimboFreeSnapshotVersion);let i;i=ms(t.target)?Ta(e.Ht,t.target):Sa(e.Ht,t.target);const s=t.resumeToken.toBase64();return new Ja(t.targetId,ds(t.target),n,s,t.sequenceNumber,r,i)}function Uc(e){const t=ka({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?js(t,t.limit,"L"):t}function Vc(e,t){return new kc(t.largestBatchId,Ia(e.Ht,t.overlayMutation))}function jc(e,t){const n=t.path.lastSegment();return[e,Fa(t.path.popLast()),n]}
/**
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
 */class qc{getBundleMetadata(e,t){return $c(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Pc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return $c(e).put({bundleId:(n=t).id,createTime:Rc(ca(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Bc(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Uc(t.bundledQuery),readTime:Pc(t.readTime)};var t}))}saveNamedQuery(e,t){return Bc(e).put(function(e){return{name:e.name,readTime:Rc(ca(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function $c(e){return Ec(e,tc.store)}function Bc(e){return Ec(e,nc.store)}
/**
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
 */class Kc{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const n=t.uid||"";return new Kc(e,n)}getOverlay(e,t){return Gc(e).get(jc(this.userId,t)).next((e=>e?Vc(this.O,e):null))}saveOverlays(e,t,n){const r=[];return n.forEach((n=>{const i=new kc(t,n);r.push(this.Yt(e,i))})),dc.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Fa(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Gc(e).Gt(oc.collectionPathOverlayIndex,r))})),dc.waitFor(i)}getOverlaysForCollection(e,t,n){const r=new Map,i=Fa(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Gc(e).qt(oc.collectionPathOverlayIndex,s).next((e=>{for(const t of e){const e=Vc(this.O,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=new Map;let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Gc(e).Qt({index:oc.collectionGroupOverlayIndex,range:o},((e,t,n)=>{const o=Vc(this.O,t);i.size<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}Yt(e,t){return Gc(e).put(function(e,t,n){const[r,i,s]=jc(t,n.mutation.key);return new oc(t,i,s,n.mutation.key.getCollectionGroup(),n.largestBatchId,ba(e.Ht,n.mutation))}(this.O,this.userId,t))}}function Gc(e){return Ec(e,oc.store)}
/**
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
 */class zc{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(xi(e.integerValue));else if("doubleValue"in e){const n=xi(e.doubleValue);isNaN(n)?this.ee(t,13):(this.ee(t,15),Vi(n)?t.ne(0):t.ne(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ee(t,20),"string"==typeof n?t.se(n):(t.se(`${n.seconds||""}`),t.ne(n.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(Di(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ee(t,45),t.ne(n.latitude||0),t.ne(n.longitude||0)}else"mapValue"in e?Ki(e,$i)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):Qr()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const n=e.fields||{};this.ee(t,55);for(const r of Object.keys(n))this.ie(r,t),this.Zt(n[r],t)}ae(e,t){const n=e.values||[];this.ee(t,50);for(const r of n)this.Zt(r,t)}ce(e,t){this.ee(t,37),qi.fromName(e).path.forEach((e=>{this.ee(t,60),this.he(e,t)}))}ee(e,t){e.ne(t)}re(e){e.ne(2)}}function Hc(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Wc(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Hc(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}zc.le=new zc;class Qc{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.de(n.value),n=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.me(n.value),n=t.next();this.ge()}ye(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.de(e);else if(e<2048)this.de(960|e>>>6),this.de(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.de(480|e>>>12),this.de(128|63&e>>>6),this.de(128|63&e);else{const e=t.codePointAt(0);this.de(240|e>>>18),this.de(128|63&e>>>12),this.de(128|63&e>>>6),this.de(128|63&e)}}this._e()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.me(e);else if(e<2048)this.me(960|e>>>6),this.me(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.me(480|e>>>12),this.me(128|63&e>>>6),this.me(128|63&e);else{const e=t.codePointAt(0);this.me(240|e>>>18),this.me(128|63&e>>>12),this.me(128|63&e>>>6),this.me(128|63&e)}}this.ge()}Ie(e){const t=this.Ee(e),n=Wc(t);this.Te(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ae(e){const t=this.Ee(e),n=Wc(t);this.Te(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}de(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Jc{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class Yc{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class Xc{constructor(){this.Se=new Qc,this.De=new Jc(this.Se),this.Ce=new Yc(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return 0===e?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}
/**
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
 */class Zc{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}}function eu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=qi.comparator(e.documentKey,t.documentKey),0!==n?n:(n=tu(e.arrayValue,t.arrayValue),0!==n?n:tu(e.directionalValue,t.directionalValue)))}function tu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class nu{constructor(){this.xe=new ru}addToCollectionParentIndex(e,t){return this.xe.add(t),dc.resolve()}getCollectionParents(e,t){return dc.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return dc.resolve()}deleteFieldIndex(e,t){return dc.resolve()}getDocumentsMatchingTarget(e,t,n){return dc.resolve(Ko())}getFieldIndex(e,t){return dc.resolve(null)}getFieldIndexes(e,t){return dc.resolve([])}getNextCollectionGroupToUpdate(e){return dc.resolve(null)}updateCollectionGroup(e,t,n){return dc.resolve()}updateIndexEntries(e,t){return dc.resolve()}}class ru{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Lo(Ei.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Lo(Ei.comparator)).toArray()}}
/**
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
 */class iu{constructor(e){this.user=e,this.ke=new ru,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.ke.add(t)}));const i={collectionId:n,parent:Fa(r)};return su(e).put(i)}return dc.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gi(t),""],!1,!0);return su(e).qt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(ja(r.parent))}return n}))}addFieldIndex(e,t){const n=au(e),r=function(e){return new rc(e.indexId,e.collectionGroup,e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind])))}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=au(e),r=cu(e),i=ou(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t,n){return dc.resolve(Ko())}getFieldIndex(e,t){return dc.resolve(null)}Oe(e,t){const n=new Xc;for(const r of function(e){return e.fields.filter((e=>2!==e.kind))}(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);zc.le.Xt(e,i)}return n.Ve()}Me(e){const t=new Xc;return zc.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const n=au(e),r=cu(e);return(t?n.qt(rc.collectionGroupIndex,IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return dc.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new cs(t.sequenceNumber,new us(Pc(t.readTime),new qi(ja(t.documentKey)),t.largestBatchId)):cs.empty(),r=e.fields.map((([e,t])=>new as(Si.fromServerFormat(e),t)));return new os(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>e.indexState.sequenceNumber-t.indexState.sequenceNumber)),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=au(e),i=cu(e);return this.$e(e).next((e=>r.qt(rc.collectionGroupIndex,IDBKeyRange.bound(t,t)).next((t=>dc.forEach(t,(t=>i.put(function(e,t,n,r){return new ic(e,t.uid||"",n,Rc(r.readTime),Fa(r.documentKey.path),r.largestBatchId)}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return dc.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?dc.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),dc.forEach(i,(n=>this.Fe(e,t,n).next((t=>{const i=this.Be(r,n);return t.isEqual(i)?dc.resolve():this.Le(e,r,t,i)})))))))}))}Ue(e,t,n){return ou(e).put(new sc(n.indexId,this.uid,n.arrayValue,n.directionalValue,Fa(t.key.path)))}qe(e,t,n){return ou(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,Fa(t.key.path)])}Fe(e,t,n){const r=ou(e);let i=new Lo(eu);return r.Qt({index:sc.documentKeyIndex,range:IDBKeyRange.only([n.indexId,this.uid,Fa(t.path)])},((e,r)=>{i=i.add(new Zc(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}Be(e,t){let n=new Lo(eu);const r=this.Oe(t,e);if(null==r)return n;const i=function(e){return e.fields.find((e=>2===e.kind))}(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Xi(s))for(const i of s.arrayValue.values||[])n=n.add(new Zc(t.indexId,e.key,this.Me(i),r))}else n=n.add(new Zc(t.indexId,e.key,new Uint8Array,r));return n}Le(e,t,n,r){Gr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Fo(s),c=Fo(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Fo(o)):t?(i(a),a=Fo(s)):(a=Fo(s),c=Fo(o))}}(n,r,eu,(n=>{i.push(this.Ue(e,t,n))}),(n=>{i.push(this.qe(e,t,n))})),dc.waitFor(i)}$e(e){let t=1;return cu(e).Qt({index:ic.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}}function su(e){return Ec(e,Za.store)}function ou(e){return Ec(e,sc.store)}function au(e){return Ec(e,rc.store)}function cu(e){return Ec(e,ic.store)}
/**
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
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class lu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new lu(e,lu.DEFAULT_COLLECTION_PERCENTILE,lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function hu(e,t,n){const r=e.store(Ka.store),i=e.store(Ga.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Qt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Jr(1===a)})));const u=[];for(const l of n.mutations){const e=Ga.key(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return dc.waitFor(s).next((()=>u))}function du(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Qr();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */lu.DEFAULT_COLLECTION_PERCENTILE=10,lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lu.DEFAULT=new lu(41943040,lu.DEFAULT_COLLECTION_PERCENTILE,lu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lu.DISABLED=new lu(-1,0,0);class fu{constructor(e,t,n,r){this.userId=e,this.O=t,this.indexManager=n,this.referenceDelegate=r,this.Ke={}}static Jt(e,t,n,r){Jr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new fu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mu(e).Qt({index:Ka.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=gu(e),s=mu(e);return s.add({}).next((o=>{Jr("number"==typeof o);const a=new Tc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>ba(e.Ht,t))),i=n.mutations.map((t=>ba(e.Ht,t)));return new Ka(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.O,this.userId,a),u=[];let l=new Lo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Ga.key(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Ga.PLACEHOLDER))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Ke[o]=a.keys()})),dc.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return mu(e).get(t).next((e=>e?(Jr(e.userId===this.userId),Lc(this.O,e)):null))}Ge(e,t){return this.Ke[t]?dc.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Ke[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return mu(e).Qt({index:Ka.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(Jr(t.batchId>=n),i=Lc(this.O,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return mu(e).Qt({index:Ka.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mu(e).qt(Ka.userMutationsIndex,t).next((e=>e.map((e=>Lc(this.O,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ga.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return gu(e).Qt({range:r},((n,r,s)=>{const[o,a,c]=n,u=ja(a);if(o===this.userId&&t.path.isEqual(u))return mu(e).get(c).next((e=>{if(!e)throw Qr();Jr(e.userId===this.userId),i.push(Lc(this.O,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lo(pi);const r=[];return t.forEach((t=>{const i=Ga.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=gu(e).Qt({range:s},((e,r,i)=>{const[s,o,a]=e,c=ja(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),dc.waitFor(r).next((()=>this.je(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ga.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Lo(pi);return gu(e).Qt({range:s},((e,t,i)=>{const[s,a,c]=e,u=ja(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.je(e,o)))}je(e,t){const n=[],r=[];return t.forEach((t=>{r.push(mu(e).get(t).next((e=>{if(null===e)throw Qr();Jr(e.userId===this.userId),n.push(Lc(this.O,e))})))})),dc.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return hu(e.zt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Qe(t.batchId)})),dc.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return dc.resolve();const n=IDBKeyRange.lowerBound(Ga.prefixForUser(this.userId)),r=[];return gu(e).Qt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=ja(e[1]);r.push(t)}else n.done()})).next((()=>{Jr(0===r.length)}))}))}containsKey(e,t){return pu(e,this.userId,t)}We(e){return yu(e).get(this.userId).next((e=>e||new Ba(this.userId,-1,"")))}}function pu(e,t,n){const r=Ga.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gu(e).Qt({range:s,jt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function mu(e){return Ec(e,Ka.store)}function gu(e){return Ec(e,Ga.store)}function yu(e){return Ec(e,Ba.store)}
/**
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
 */class vu{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new vu(0)}static Je(){return new vu(-1)}}
/**
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
 */class _u{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next((t=>{const n=new vu(t.highestTargetId);return t.highestTargetId=n.next(),this.Xe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Ye(e).next((e=>vi.fromTimestamp(new yi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Ye(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Ye(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Xe(e,r))))}addTargetData(e,t){return this.Ze(e,t).next((()=>this.Ye(e).next((n=>(n.targetCount+=1,this.tn(t,n),this.Xe(e,n))))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>wu(e).delete(t.targetId))).next((()=>this.Ye(e))).next((t=>(Jr(t.targetCount>0),t.targetCount-=1,this.Xe(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return wu(e).Qt(((s,o)=>{const a=Mc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>dc.waitFor(i))).next((()=>r))}forEachTarget(e,t){return wu(e).Qt(((e,n)=>{const r=Mc(n);t(r)}))}Ye(e){return bu(e).get(Xa.key).next((e=>(Jr(null!==e),e)))}Xe(e,t){return bu(e).put(Xa.key,t)}Ze(e,t){return wu(e).put(Fc(this.O,t))}tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ye(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ds(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return wu(e).Qt({range:r,index:Ja.queryTargetsIndexName},((e,n,r)=>{const s=Mc(n);ps(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Iu(e);return t.forEach((t=>{const s=Fa(t.path);r.push(i.put(new Ya(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),dc.waitFor(r)}removeMatchingKeys(e,t,n){const r=Iu(e);return dc.forEach(t,(t=>{const i=Fa(t.path);return dc.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Iu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Iu(e);let i=Ko();return r.Qt({range:n,jt:!0},((e,t,n)=>{const r=ja(e[1]),s=new qi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Fa(t.path),r=IDBKeyRange.bound([n],[gi(n)],!1,!0);let i=0;return Iu(e).Qt({index:Ya.documentTargetsIndex,jt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Tt(e,t){return wu(e).get(t).next((e=>e?Mc(e):null))}}function wu(e){return Ec(e,Ja.store)}function bu(e){return Ec(e,Xa.store)}function Iu(e){return Ec(e,Ya.store)}
/**
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
 */async function Eu(e){if(e.code!==Zr.FAILED_PRECONDITION||e.message!==lc)throw e;Gr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */function Tu([e,t],[n,r]){const i=pi(e,n);return 0===i?pi(t,r):i}class Su{constructor(e){this.en=e,this.buffer=new Lo(Tu),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Tu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ku{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return null!==this.cn}un(e){const t=this.on?3e5:6e4;Gr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){yc(e)?Gr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Eu(e)}await this.un(e)}))}}class Au{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return dc.resolve(hi.A);const n=new Su(t);return this.an.forEachTarget(e,(e=>n.rn(e.sequenceNumber))).next((()=>this.an.ln(e,(e=>n.rn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.an.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Gr("LruGarbageCollector","Garbage collection skipped; disabled"),dc.resolve(uu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Gr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.fn(e,t)))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Gr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Br()<=o["in"].DEBUG&&Gr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),dc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
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
 */class Cu{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Au(e,t)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}dn(e){let t=0;return this.ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,((e,n)=>t(n)))}addReference(e,t,n){return Nu(e,n)}removeReference(e,t,n){return Nu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Nu(e,t)}wn(e,t){return function(e,t){let n=!1;return yu(e).Wt((r=>pu(e,r,t).next((e=>(e&&(n=!0),dc.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,((s,o)=>{if(o<=t){const t=this.wn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,vi.min()),Iu(e).delete([0,Fa(s.path)]))))}));r.push(t)}})).next((()=>dc.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Nu(e,t)}_n(e,t){const n=Iu(e);let r,i=hi.A;return n.Qt({index:Ya.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==hi.A&&t(new qi(ja(r)),i),i=o,r=s):i=hi.A})).next((()=>{i!==hi.A&&t(new qi(ja(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nu(e,t){return Iu(e).put(function(e,t){return new Ya(0,Fa(e.path),t)}(t,e.currentSequenceNumber))}
/**
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
 */class Ou{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){wi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return bi(this.inner)}}
/**
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
 */class xu{constructor(){this.changes=new Ou((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ss.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?dc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class Du{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Lu(e).put(Mu(t),n)}removeEntry(e,t){const n=Lu(e),r=Mu(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.mn(e,n))))}getEntry(e,t){return Lu(e).get(Mu(t)).next((e=>this.gn(t,e)))}yn(e,t){return Lu(e).get(Mu(t)).next((e=>({document:this.gn(t,e),size:du(e)})))}getEntries(e,t){let n=Vo();return this.pn(e,t,((e,t)=>{const r=this.gn(e,t);n=n.insert(e,r)})).next((()=>n))}In(e,t){let n=Vo(),r=new Do(qi.comparator);return this.pn(e,t,((e,t)=>{const i=this.gn(e,t);n=n.insert(e,i),r=r.insert(e,du(t))})).next((()=>({documents:n,En:r})))}pn(e,t,n){if(t.isEmpty())return dc.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Lu(e).Qt({range:r},((e,t,r)=>{const o=qi.fromSegments(e);for(;s&&qi.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Ut(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getAll(e,t,n){let r=Vo();const i=t.length+1,s={};if(n.isEqual(vi.min())){const e=t.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.toArray(),r=xc(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=Wa.collectionReadTimeIndex}return Lu(e).Qt(s,((e,n,s)=>{if(e.length!==i)return;const o=this.gn(qi.fromSegments(e),n);t.isPrefixOf(o.key.path)?r=r.insert(o.key,o):s.done()})).next((()=>r))}newChangeBuffer(e){return new Ru(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Pu(e).get(Qa.key).next((e=>(Jr(!!e),e)))}mn(e,t){return Pu(e).put(Qa.key,t)}gn(e,t){if(t){const e=Nc(this.O,t);if(!e.isNoDocument()||!e.version.isEqual(vi.min()))return e}return ss.newInvalidDocument(e)}}class Ru extends xu{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new Ou((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Lo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.An.get(i);if(s.isValidDocument()){const a=Oc(this.Tn.O,s);r=r.add(i.path.popLast());const c=du(a);n+=c-o,t.push(this.Tn.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Oc(this.Tn.O,s.convertToNoDocument(vi.min()));t.push(this.Tn.addEntry(e,i,n))}else t.push(this.Tn.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Tn.updateMetadata(e,n)),dc.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next((e=>(this.An.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Tn.In(e,t).next((({documents:e,En:t})=>(t.forEach(((e,t)=>{this.An.set(e,t)})),e)))}}function Pu(e){return Ec(e,Qa.store)}function Lu(e){return Ec(e,Wa.store)}function Mu(e){return e.path.toArray()}
/**
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
 */class Fu{constructor(e){this.O=e}kt(e,t,n,r){const i=new fc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore($a.store)}(e),function(e){e.createObjectStore(Ba.store,{keyPath:Ba.keyPath}),e.createObjectStore(Ka.store,{keyPath:Ka.keyPath,autoIncrement:!0}).createIndex(Ka.userMutationsIndex,Ka.userMutationsKeyPath,{unique:!0}),e.createObjectStore(Ga.store)}(e),Uu(e),function(e){e.createObjectStore(Wa.store)}(e));let s=dc.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Ya.store),e.deleteObjectStore(Ja.store),e.deleteObjectStore(Xa.store)}(e),Uu(e)),s=s.next((()=>function(e){const t=e.store(Xa.store),n=new Xa(0,0,vi.min().toTimestamp(),0);return t.put(Xa.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(Ka.store).qt().next((n=>{e.deleteObjectStore(Ka.store),e.createObjectStore(Ka.store,{keyPath:Ka.keyPath,autoIncrement:!0}).createIndex(Ka.userMutationsIndex,Ka.userMutationsKeyPath,{unique:!0});const r=t.store(Ka.store),i=n.map((e=>r.put(e)));return dc.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(ec.store,{keyPath:ec.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Rn(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(Qa.store)}(e),this.Pn(i))))),n<7&&r>=7&&(s=s.next((()=>this.bn(i)))),n<8&&r>=8&&(s=s.next((()=>this.vn(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(Wa.store);t.createIndex(Wa.readTimeIndex,Wa.readTimeIndexPath,{unique:!1}),t.createIndex(Wa.collectionReadTimeIndex,Wa.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.Vn(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(tc.store,{keyPath:tc.keyPath})}(e),function(e){e.createObjectStore(nc.store,{keyPath:nc.keyPath})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore(oc.store,{keyPath:oc.keyPath});t.createIndex(oc.collectionPathOverlayIndex,oc.collectionPathOverlayIndexPath,{unique:!1}),t.createIndex(oc.collectionGroupOverlayIndex,oc.collectionGroupOverlayIndexPath,{unique:!1})}
/**
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
 */(e)}))),n<13&&r>=13&&(s=s.next((()=>{!function(e){e.createObjectStore(rc.store,{keyPath:rc.keyPath,autoIncrement:!0}).createIndex(rc.collectionGroupIndex,rc.collectionGroupIndexPath,{unique:!1}),e.createObjectStore(ic.store,{keyPath:ic.keyPath}).createIndex(ic.sequenceNumberIndex,ic.sequenceNumberIndexPath,{unique:!1}),e.createObjectStore(sc.store,{keyPath:sc.keyPath}).createIndex(sc.documentKeyIndex,sc.documentKeyIndexPath,{unique:!1})}(e)}))),s}Pn(e){let t=0;return e.store(Wa.store).Qt(((e,n)=>{t+=du(n)})).next((()=>{const n=new Qa(t);return e.store(Qa.store).put(Qa.key,n)}))}Rn(e){const t=e.store(Ba.store),n=e.store(Ka.store);return t.qt().next((t=>dc.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt(Ka.userMutationsIndex,r).next((n=>dc.forEach(n,(n=>{Jr(n.userId===t.userId);const r=Lc(this.O,n);return hu(e,t.userId,r).next((()=>{}))}))))}))))}bn(e){const t=e.store(Ya.store),n=e.store(Wa.store);return e.store(Xa.store).get(Xa.key).next((e=>{const r=[];return n.Qt(((n,i)=>{const s=new Ei(n),o=function(e){return[0,Fa(e)]}(s);r.push(t.get(o).next((n=>n?dc.resolve():(n=>t.put(new Ya(0,Fa(n),e.highestListenSequenceNumber)))(s))))})).next((()=>dc.waitFor(r)))}))}vn(e,t){e.createObjectStore(Za.store,{keyPath:Za.keyPath});const n=t.store(Za.store),r=new ru,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Fa(r)})}};return t.store(Wa.store).Qt({jt:!0},((e,t)=>{const n=new Ei(e);return i(n.popLast())})).next((()=>t.store(Ga.store).Qt({jt:!0},(([e,t,n],r)=>{const s=ja(t);return i(s.popLast())}))))}Vn(e){const t=e.store(Ja.store);return t.Qt(((e,n)=>{const r=Mc(n),i=Fc(this.O,r);return t.put(i)}))}}function Uu(e){e.createObjectStore(Ya.store,{keyPath:Ya.keyPath}).createIndex(Ya.documentTargetsIndex,Ya.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(Ja.store,{keyPath:Ja.keyPath}).createIndex(Ja.queryTargetsIndexName,Ja.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(Xa.store)}const Vu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ju{constructor(e,t,n,r,i,s,o,a,c,u,l=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Sn=i,this.window=s,this.document=o,this.Dn=c,this.Cn=u,this.schemaVersion=l,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=e=>Promise.resolve(),!ju.Vt())throw new ei(Zr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Cu(this,r),this.Bn=t+"main",this.O=new Cc(a),this.Ln=new pc(this.Bn,this.schemaVersion,new Fu(this.O)),this.Un=new _u(this.referenceDelegate,this.O),this.qn=function(e){return new Du(e)}(this.O),this.Kn=new qc,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,!1===u&&zr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ei(Zr.FAILED_PRECONDITION,Vu);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Un.getHighestSequenceNumber(e)))})).then((e=>{this.Nn=new hi(e,this.Dn)})).then((()=>{this.xn=!0})).catch((e=>(this.Ln&&this.Ln.close(),Promise.reject(e))))}Hn(e){return this.Fn=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget((async()=>{this.started&&await this.jn()})))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>$u(e).put(new ec(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.Jn(e).next((e=>{e||(this.isPrimary=!1,this.Sn.enqueueRetryable((()=>this.Fn(!1))))}))})).next((()=>this.Yn(e))).next((t=>this.isPrimary&&!t?this.Xn(e).next((()=>!1)):!!t&&this.Zn(e).next((()=>!0)))))).catch((e=>{if(yc(e))return Gr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Gr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable((()=>this.Fn(e))),this.isPrimary=e}))}Jn(e){return qu(e).get($a.key).next((e=>dc.resolve(this.ts(e))))}es(e){return $u(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ec(e,ec.store);return t.qt().next((e=>{const n=this.rs(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return dc.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.jn().then((()=>this.ns())).then((()=>this.zn()))))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?dc.resolve(!0):qu(e).get($a.key).next((t=>{if(null!==t&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new ei(Zr.FAILED_PRECONDITION,Vu);return!1}}return!(!this.networkEnabled||!this.inForeground)||$u(e).qt().next((e=>void 0===this.rs(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Gr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[$a.store,ec.store],(e=>{const t=new Ic(e,hi.A);return this.Xn(t).next((()=>this.es(t)))})),this.Ln.close(),this.fs()}rs(e,t){return e.filter((e=>this.ss(e.updateTimeMs,t)&&!this.cs(e.clientId)))}ds(){return this.runTransaction("getActiveClients","readonly",(e=>$u(e).qt().next((e=>this.rs(e,18e5).map((e=>e.clientId))))))}get started(){return this.xn}getMutationQueue(e,t){return fu.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new iu(e)}getDocumentOverlayCache(e){return Kc.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,n){Gr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=13===(s=this.schemaVersion)?uc:12===s?cc:11===s?ac:void Qr();var s;let o;return this.Ln.runTransaction(e,r,i,(r=>(o=new Ic(r,this.Nn?this.Nn.next():hi.A),"readwrite-primary"===t?this.Jn(o).next((e=>!!e||this.Yn(o))).next((t=>{if(!t)throw zr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable((()=>this.Fn(!1))),new ei(Zr.FAILED_PRECONDITION,lc);return n(o)})).next((e=>this.Zn(o).next((()=>e)))):this._s(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}_s(e){return qu(e).get($a.key).next((e=>{if(null!==e&&this.ss(e.leaseTimestampMs,5e3)&&!this.cs(e.ownerId)&&!this.ts(e)&&!(this.Cn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ei(Zr.FAILED_PRECONDITION,Vu)}))}Zn(e){const t=new $a(this.clientId,this.allowTabSynchronization,Date.now());return qu(e).put($a.key,t)}static Vt(){return pc.Vt()}Xn(e){const t=qu(e);return t.get($a.key).next((e=>this.ts(e)?(Gr("IndexedDbPersistence","Releasing primary lease."),t.delete($a.key)):dc.resolve()))}ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(zr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.On=()=>{this.Sn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.jn())))},this.document.addEventListener("visibilitychange",this.On),this.inForeground="visible"===this.document.visibilityState)}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.kn=()=>{this.us(),(0,a.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const n=null!==(null===(t=this.Gn)||void 0===t?void 0:t.getItem(this.os(e)));return Gr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return zr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(I){zr("Failed to set zombie client id.",I)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch(I){}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qu(e){return Ec(e,$a.store)}function $u(e){return Ec(e,ec.store)}function Bu(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class Ku{constructor(e,t){this.progress=e,this.ws=t}}
/**
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
 */class Gu{constructor(e,t,n){this.qn=e,this.gs=t,this.indexManager=n}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.ps(e,t,n)))}ps(e,t,n){return this.qn.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Is(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Es(e,t){return this.qn.getEntries(e,t).next((t=>this.Ts(e,t).next((()=>t))))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Is(t,e)))}As(e,t,n){return function(e){return qi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Rs(e,t.path):Fs(t)?this.Ps(e,t,n):this.bs(e,t,n)}Rs(e,t){return this.ys(e,new qi(t)).next((e=>{let t=qo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ps(e,t,n){const r=t.collectionGroup;let i=qo();return this.indexManager.getCollectionParents(e,r).next((s=>dc.forEach(s,(s=>{const o=function(e,t){return new Os(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.bs(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}bs(e,t,n){let r;return this.qn.getAll(e,t.path,n).next((n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ss.newInvalidDocument(n),r=r.insert(n,i)),go(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{Ks(t,n)||(r=r.remove(e))})),r)))}}
/**
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
 */class zu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.vs=n,this.Vs=r}static Ss(e,t){let n=Ko(),r=Ko();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zu(e,t.fromCache,n,r)}}
/**
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
 */class Hu{Ds(e){this.Cs=e}As(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(vi.min())?this.Ns(e,t):this.Cs.Es(e,r).next((i=>{const s=this.xs(t,i);return(Rs(t)||Ps(t))&&this.ks(t.limitType,s,r,n)?this.Ns(e,t):(Br()<=o["in"].DEBUG&&Gr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Bs(t)),this.Cs.As(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}xs(e,t){let n=new Lo(Gs(e));return t.forEach(((t,r)=>{Ks(e,r)&&(n=n.add(r))})),n}ks(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,t){return Br()<=o["in"].DEBUG&&Gr("QueryEngine","Using full collection scan to execute query:",Bs(t)),this.Cs.As(e,t,vi.min())}}
/**
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
 */class Wu{constructor(e,t,n,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new Do(pi),this.$s=new Ou((e=>ds(e)),ps),this.Fs=vi.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(n)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new Gu(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Qu(e,t,n,r){return new Wu(e,t,n,r)}async function Ju(e,t){const n=Xr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.gs.getAllMutationBatches(e).next((i=>(r=i,n.Ls(t),n.gs.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ko();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.Us.Es(e,o).next((e=>({qs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Yu(e,t){const n=Xr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=dc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Jr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.gs.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}function Xu(e){const t=Xr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Un.getLastRemoteSnapshotVersion(e)))}function Zu(e,t){const n=Xr(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Un.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,vi.min()).withLastLimboFreeSnapshotVersion(vi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Un.updateTargetData(e,u))}));let a=Vo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(el(e,s,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(vi.min())){const t=n.Un.getLastRemoteSnapshotVersion(e).next((t=>n.Un.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return dc.waitFor(o).next((()=>s.apply(e))).next((()=>n.Us.Ts(e,a))).next((()=>a))})).then((e=>(n.Ms=i,e)))}function el(e,t,n){let r=Ko();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Vo();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(vi.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Gr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function tl(e,t){const n=Xr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(e,t))))}function nl(e,t){const n=Xr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Un.getTargetData(e,t).next((i=>i?(r=i,dc.resolve(r)):n.Un.allocateTargetId(e).next((i=>(r=new Ac(t,i,0,e.currentSequenceNumber),n.Un.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.$s.set(t,e.targetId)),e}))}async function rl(e,t,n){const r=Xr(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!yc(e))throw e;Gr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ms=r.Ms.remove(t),r.$s.delete(i.target)}function il(e,t,n){const r=Xr(e);let i=vi.min(),s=Ko();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Xr(e),i=r.$s.get(n);return void 0!==i?dc.resolve(r.Ms.get(i)):r.Un.getTargetData(t,n)}(r,e,Vs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Os.As(e,t,n?i:vi.min(),n?s:Ko()))).next((e=>({documents:e,Ks:s})))))}function sl(e,t){const n=Xr(e),r=Xr(n.Un),i=n.Ms.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Tt(e,t).next((e=>e?e.target:null))))}function ol(e){const t=Xr(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=Xr(e);let i=Vo(),s=xc(n);const o=Lu(t),a=IDBKeyRange.lowerBound(s,!0);return o.Qt({index:Wa.readTimeIndex,range:a},((e,t)=>{const n=Nc(r.O,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({ws:i,readTime:Dc(s)})))}(t.Bs,e,t.Fs))).then((({ws:e,readTime:n})=>(t.Fs=n,e)))}async function al(e){const t=Xr(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=Lu(e);let n=vi.min();return t.Qt({index:Wa.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=Dc(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Fs=e}))}async function cl(e,t,n,r){const i=Xr(e);let s=Ko(),o=Vo();for(const u of n){const e=t.Gs(u.metadata.name);u.document&&(s=s.add(e));const n=t.js(u);n.setReadTime(t.Qs(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Bs.newChangeBuffer({trackRemovals:!0}),c=await nl(i,function(e){return Vs(Ds(Ei.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>el(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Un.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Un.addMatchingKeys(e,s,c.targetId))).next((()=>i.Us.Ts(e,t))).next((()=>t))))))}async function ul(e,t,n=Ko()){const r=await nl(e,Vs(Uc(t.bundledQuery))),i=Xr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=ca(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Kn.saveNamedQuery(e,t);const o=r.withResumeToken(Ci.EMPTY_BYTE_STRING,s);return i.Ms=i.Ms.insert(o.targetId,o),i.Un.updateTargetData(e,o).next((()=>i.Un.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Un.addMatchingKeys(e,n,r.targetId))).next((()=>i.Kn.saveNamedQuery(e,t)))}))}
/**
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
 */class ll{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return dc.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var n;return this.Ws.set(t.id,{id:(n=t).id,version:n.version,createTime:ca(n.createTime)}),dc.resolve()}getNamedQuery(e,t){return dc.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(e){return{name:e.name,query:Uc(e.bundledQuery),readTime:ca(e.readTime)}}(t)),dc.resolve()}}
/**
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
 */class hl{constructor(){this.overlays=new Do(qi.comparator),this.Hs=new Map}getOverlay(e,t){return dc.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n=>{this.Yt(e,t,n)})),dc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Hs.delete(n)),dc.resolve()}getOverlaysForCollection(e,t,n){const r=new Map,i=t.length+1,s=new qi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return dc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Do(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=new Map,i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=new Map,a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(t,e))),o.size>=r)break;return dc.resolve(o)}Yt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new kc(t,n));let i=this.Hs.get(t);void 0===i&&(i=new Set,this.Hs.set(t,i)),i.add(n.key)}}
/**
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
 */class dl{constructor(){this.Js=new Lo(fl.Ys),this.Xs=new Lo(fl.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const n=new fl(e,t);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ei(new fl(e,t))}ni(e,t){e.forEach((e=>this.removeReference(e,t)))}si(e){const t=new qi(new Ei([])),n=new fl(t,e),r=new fl(t,e+1),i=[];return this.Xs.forEachInRange([n,r],(e=>{this.ei(e),i.push(e.key)})),i}ii(){this.Js.forEach((e=>this.ei(e)))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new qi(new Ei([])),n=new fl(t,e),r=new fl(t,e+1);let i=Ko();return this.Xs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new fl(e,0),n=this.Js.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fl{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return qi.comparator(e.key,t.key)||pi(e.oi,t.oi)}static Zs(e,t){return pi(e.oi,t.oi)||qi.comparator(e.key,t.key)}}
/**
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
 */class pl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new Lo(fl.Ys)}checkEmpty(e){return dc.resolve(0===this.gs.length)}addMutationBatch(e,t,n,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const s=new Tc(i,t,n,r);this.gs.push(s);for(const o of r)this.ui=this.ui.add(new fl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return dc.resolve(s)}lookupMutationBatch(e,t){return dc.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.hi(n),i=r<0?0:r;return dc.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return dc.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(e){return dc.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fl(t,0),r=new fl(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,r],(e=>{const t=this.ai(e.oi);i.push(t)})),dc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lo(pi);return t.forEach((e=>{const t=new fl(e,0),r=new fl(e,Number.POSITIVE_INFINITY);this.ui.forEachInRange([t,r],(e=>{n=n.add(e.oi)}))})),dc.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;qi.isDocumentKey(i)||(i=i.child(""));const s=new fl(new qi(i),0);let o=new Lo(pi);return this.ui.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.oi)),!0)}),s),dc.resolve(this.li(o))}li(e){const t=[];return e.forEach((e=>{const n=this.ai(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jr(0===this.fi(t.batchId,"removed")),this.gs.shift();let n=this.ui;return dc.forEach(t.mutations,(r=>{const i=new fl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ui=n}))}Qe(e){}containsKey(e,t){const n=new fl(t,0),r=this.ui.firstAfterOrEqual(n);return dc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,dc.resolve()}fi(e,t){return this.hi(e)}hi(e){return 0===this.gs.length?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}
/**
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
 */class ml{constructor(e){this.di=e,this.docs=new Do(qi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.di(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return dc.resolve(n?n.document.mutableCopy():ss.newInvalidDocument(t))}getEntries(e,t){let n=Vo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ss.newInvalidDocument(e))})),dc.resolve(n)}getAll(e,t,n){let r=Vo();const i=new qi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||i.readTime.compareTo(n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return dc.resolve(r)}_i(e,t){return dc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new gl(this)}getSize(e){return dc.resolve(this.size)}}class gl extends xu{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(n)})),dc.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}
/**
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
 */class yl{constructor(e){this.persistence=e,this.wi=new Ou((e=>ds(e)),ps),this.lastRemoteSnapshotVersion=vi.min(),this.highestTargetId=0,this.mi=0,this.gi=new dl,this.targetCount=0,this.yi=vu.He()}forEachTarget(e,t){return this.wi.forEach(((e,n)=>t(n))),dc.resolve()}getLastRemoteSnapshotVersion(e){return dc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return dc.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),dc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.mi&&(this.mi=t),dc.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new vu(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,dc.resolve()}updateTargetData(e,t){return this.Ze(t),dc.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,dc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.wi.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.wi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),dc.waitFor(i).next((()=>r))}getTargetCount(e){return dc.resolve(this.targetCount)}getTargetData(e,t){const n=this.wi.get(t)||null;return dc.resolve(n)}addMatchingKeys(e,t,n){return this.gi.ti(t,n),dc.resolve()}removeMatchingKeys(e,t,n){this.gi.ni(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),dc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),dc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.gi.ri(t);return dc.resolve(n)}containsKey(e,t){return dc.resolve(this.gi.containsKey(t))}}
/**
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
 */class vl{constructor(e,t){this.pi={},this.overlays={},this.Nn=new hi(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new yl(this),this.indexManager=new nu,this.qn=function(e){return new ml(e)}((e=>this.referenceDelegate.Ii(e))),this.O=new Cc(t),this.Kn=new ll(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.pi[e.toKey()];return n||(n=new pl(t,this.referenceDelegate),this.pi[e.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,n){Gr("MemoryPersistence","Starting transaction:",e);const r=new _l(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next((e=>this.referenceDelegate.Ti(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ai(e,t){return dc.or(Object.values(this.pi).map((n=>()=>n.containsKey(e,t))))}}class _l extends hc{constructor(e){super(),this.currentSequenceNumber=e}}class wl{constructor(e){this.persistence=e,this.Ri=new dl,this.Pi=null}static bi(e){return new wl(e)}get vi(){if(this.Pi)return this.Pi;throw Qr()}addReference(e,t,n){return this.Ri.addReference(n,t),this.vi.delete(n.toString()),dc.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.vi.add(n.toString()),dc.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),dc.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach((e=>this.vi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.vi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dc.forEach(this.vi,(n=>{const r=qi.fromPath(n);return this.Vi(e,r).next((e=>{e||t.removeEntry(r,vi.min())}))})).next((()=>(this.Pi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Vi(e,t).next((e=>{e?this.vi.delete(t.toString()):this.vi.add(t.toString())}))}Ii(e){return 0}Vi(e,t){return dc.or([()=>dc.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}
/**
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
 */function bl(e,t){return`firestore_clients_${e}_${t}`}function Il(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function El(e,t){return`firestore_targets_${e}_${t}`}class Tl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Si(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ei(r.error.code,r.error.message))),s?new Tl(e,t,r.state,i):(zr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Si(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ei(n.error.code,n.error.message))),i?new Sl(e,n.state,r):(zr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Si(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=zo();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ji(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new kl(e,i):(zr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Al{constructor(e,t){this.clientId=e,this.onlineState=t}static Si(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Al(t.clientId,t.onlineState):(zr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Cl{constructor(){this.activeTargetIds=zo()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nl{constructor(e,t,n,r,i){this.window=e,this.Sn=t,this.persistenceKey=n,this.xi=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new Do(pi),this.started=!1,this.$i=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Fi=bl(this.persistenceKey,this.xi),this.Bi=function(e){return`firestore_sequence_number_${e}`}
/**
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
 */(this.persistenceKey),this.Mi=this.Mi.insert(this.xi,new Cl),this.Li=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Ui=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.qi=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Ki=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Gi=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ki)}static Vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ds();for(const n of e){if(n===this.xi)continue;const e=this.getItem(bl(this.persistenceKey,n));if(e){const t=kl.Si(n,e);t&&(this.Mi=this.Mi.insert(t.clientId,t))}}this.ji();const t=this.storage.getItem(this.Ki);if(t){const e=this.Qi(t);e&&this.Wi(e)}for(const n of this.$i)this.Oi(n);this.$i=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bi,JSON.stringify(e))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(e){let t=!1;return this.Mi.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Hi(e,"pending")}updateMutationState(e,t,n){this.Hi(e,t,n),this.Ji(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(El(this.persistenceKey,e));if(n){const r=Sl.Si(e,n);r&&(t=r.state)}}return this.Yi.Ci(e),this.ji(),t}removeLocalQueryTarget(e){this.Yi.Ni(e),this.ji()}isLocalQueryTarget(e){return this.Yi.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(El(this.persistenceKey,e))}updateQueryState(e,t,n){this.Xi(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Ji(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Zi(e)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Gr("SharedClientState","READ",e,t),t}setItem(e,t){Gr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Gr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Oi(e){const t=e;if(t.storageArea===this.storage){if(Gr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Fi)return void zr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Li.test(t.key)){if(null==t.newValue){const e=this.er(t.key);return this.nr(e,null)}{const e=this.sr(t.key,t.newValue);if(e)return this.nr(e.clientId,e)}}else if(this.Ui.test(t.key)){if(null!==t.newValue){const e=this.ir(t.key,t.newValue);if(e)return this.rr(e)}}else if(this.qi.test(t.key)){if(null!==t.newValue){const e=this.cr(t.key,t.newValue);if(e)return this.ur(e)}}else if(t.key===this.Ki){if(null!==t.newValue){const e=this.Qi(t.newValue);if(e)return this.Wi(e)}}else if(t.key===this.Bi){const e=function(e){let t=hi.A;if(null!=e)try{const n=JSON.parse(e);Jr("number"==typeof n),t=n}catch(e){zr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hi.A&&this.sequenceNumberHandler(e)}else if(t.key===this.Gi)return this.syncEngine.ar()}else this.$i.push(t)}))}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(e,t,n){const r=new Tl(this.currentUser,e,t,n),i=Il(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Di())}Ji(e){const t=Il(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Zi(e){const t={clientId:this.xi,onlineState:e};this.storage.setItem(this.Ki,JSON.stringify(t))}Xi(e,t,n){const r=El(this.persistenceKey,e),i=new Sl(e,t,n);this.setItem(r,i.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(e){const t=this.Li.exec(e);return t?t[1]:null}sr(e,t){const n=this.er(e);return kl.Si(n,t)}ir(e,t){const n=this.Ui.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Tl.Si(new jr(i),r,t)}cr(e,t){const n=this.qi.exec(e),r=Number(n[1]);return Sl.Si(r,t)}Qi(e){return Al.Si(e)}async rr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.hr(e.batchId,e.state,e.error);Gr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}ur(e){return this.syncEngine.lr(e.targetId,e.state,e.error)}nr(e,t){const n=t?this.Mi.insert(e,t):this.Mi.remove(e),r=this.zi(this.Mi),i=this.zi(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.dr(s,o).then((()=>{this.Mi=n}))}Wi(e){this.Mi.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}zi(e){let t=zo();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Ol{constructor(){this._r=new Cl,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,n){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Cl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
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
 */class xl{mr(e){}shutdown(){}}
/**
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
 */class Dl{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){Gr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){Gr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Rl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Pl{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}
/**
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
 */class Ll extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,n,r,i){const s=this.$r(e,t);Gr("RestConnection","Sending: ",s,n);const o={};return this.Fr(o,r,i),this.Br(e,s,o,n).then((e=>(Gr("RestConnection","Received: ",e),e)),(t=>{throw Hr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}Lr(e,t,n,r,i){return this.Mr(e,t,n,r,i)}Fr(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}$r(e,t){const n=Rl[e];return`${this.kr}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Rr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dr.NO_ERROR:const t=o.getResponseJson();Gr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Dr.TIMEOUT:Gr("Connection",'RPC "'+e+'" timed out'),s(new ei(Zr.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const n=o.getStatus();if(Gr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Zr).indexOf(t)>=0?t:Zr.UNKNOWN}(e.status);s(new ei(t,e.message))}else s(new ei(Zr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ei(Zr.UNAVAILABLE,"Connection failed."));break;default:Qr()}}finally{Gr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Ur(e,t,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Or(),s=xr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.Fr(o.initMessageHeaders,t,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Gr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const d=new Pl({Ar:e=>{h?Gr("Connection","Not sending because WebChannel is closed:",e):(l||(Gr("Connection","Opening WebChannel transport."),u.open(),l=!0),Gr("Connection","WebChannel sending:",e),u.send(e))},Rr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Fr.EventType.OPEN,(()=>{h||Gr("Connection","WebChannel transport opened.")})),f(u,Fr.EventType.CLOSE,(()=>{h||(h=!0,Gr("Connection","WebChannel transport closed"),d.Cr())})),f(u,Fr.EventType.ERROR,(e=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",e),d.Cr(new ei(Zr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Fr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Jr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Gr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Co[e];if(void 0!==t)return xo(t)}(e),n=i.message;void 0===t&&(t=Zr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.Cr(new ei(t,n)),u.close()}else Gr("Connection","WebChannel received:",n),d.Nr(n)}})),f(s,Pr.STAT_EVENT,(e=>{e.stat===Lr.PROXY?Gr("Connection","Detected buffering proxy"):e.stat===Lr.NOPROXY&&Gr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Dr()}),0),d}}
/**
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
 */
/**
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
 */function Ml(){return"undefined"!=typeof window?window:null}function Fl(){return"undefined"!=typeof document?document:null}
/**
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
 */function Ul(e){return new ia(e,!0)}class Vl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=n,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-n);r>0&&Gr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,(()=>(this.Wr=Date.now(),e()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
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
 */class jl{constructor(e,t,n,r,i,s,o,a){this.Sn=e,this.Xr=n,this.Zr=r,this.eo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Vl(e,t)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==e?this.ro.reset():t&&t.code===Zr.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===Zr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.no===t&&this.po(e,n)}),(t=>{e((()=>{const e=new ei(Zr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Io(e)}))}))}po(e,t){const n=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((e=>{n((()=>this.Io(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(e){return Gr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget((()=>this.no===e?t():(Gr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ql extends jl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=wa(this.O,e),n=function(e){if(!("targetChange"in e))return vi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?vi.min():t.readTime?ca(t.readTime):vi.min()}(e);return this.listener.To(t,n)}Ao(e){const t={};t.database=ma(this.O),t.addTarget=function(e,t){let n;const r=t.target;return n=ms(r)?{documents:Ta(e,r)}:{query:Sa(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=oa(e,t.resumeToken):t.snapshotVersion.compareTo(vi.min())>0&&(n.readTime=sa(e,t.snapshotVersion.toTimestamp())),n}(this.O,e);const n=Aa(this.O,e);n&&(t.labels=n),this.fo(t)}Ro(e){const t={};t.database=ma(this.O),t.removeTarget=e,this.fo(t)}}class $l extends jl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(Jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=Ea(e.writeResults,e.commitTime),n=ca(e.commitTime);return this.listener.Vo(n,t)}return Jr(!e.writeResults||0===e.writeResults.length),this.Po=!0,this.listener.So()}Do(){const e={};e.database=ma(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ba(this.O,e)))};this.fo(t)}}
/**
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
 */class Bl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new ei(Zr.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.eo.Mr(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Zr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ei(Zr.UNKNOWN,e.toString())}))}Lr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.eo.Lr(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Zr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ei(Zr.UNKNOWN,e.toString())}))}terminate(){this.Co=!0}}class Kl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(e){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,"Online"===e&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(zr(t),this.Oo=!1):Gr("OnlineStateTracker",t)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
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
 */class Gl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr((e=>{n.enqueueAndForget((async()=>{eh(this)&&(Gr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xr(e);t.Ko.add(4),await Hl(t),t.Qo.set("Unknown"),t.Ko.delete(4),await zl(t)}(this))}))})),this.Qo=new Kl(n,r)}}async function zl(e){if(eh(e))for(const t of e.Go)await t(!0)}async function Hl(e){for(const t of e.Go)await t(!1)}function Wl(e,t){const n=Xr(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),Zl(n)?Xl(n):vh(n).co()&&Jl(n,t))}function Ql(e,t){const n=Xr(e),r=vh(n);n.qo.delete(t),r.co()&&Yl(n,t),0===n.qo.size&&(r.co()?r.ho():eh(n)&&n.Qo.set("Unknown"))}function Jl(e,t){e.Wo.Z(t.targetId),vh(e).Ao(t)}function Yl(e,t){e.Wo.Z(t),vh(e).Ro(t)}function Xl(e){e.Wo=new Zo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),vh(e).start(),e.Qo.Mo()}function Zl(e){return eh(e)&&!vh(e).oo()&&e.qo.size>0}function eh(e){return 0===Xr(e).Ko.size}function th(e){e.Wo=void 0}async function nh(e){e.qo.forEach(((t,n)=>{Jl(e,t)}))}async function rh(e,t){th(e),Zl(e)?(e.Qo.Bo(t),Xl(e)):e.Qo.set("Unknown")}async function ih(e,t,n){if(e.Qo.set("Online"),t instanceof Yo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qo.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qo.delete(r),e.Wo.removeTarget(r))}(e,t)}catch(n){Gr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sh(e,n)}else if(t instanceof Qo?e.Wo.ct(t):t instanceof Jo?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(vi.min()))try{const t=await Xu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Wo.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qo.get(r);i&&e.qo.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qo.get(t);if(!n)return;e.qo.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Yl(e,t);const r=new Ac(n.target,t,1,n.sequenceNumber);Jl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Gr("RemoteStore","Failed to raise snapshot:",t),await sh(e,t)}}async function sh(e,t,n){if(!yc(t))throw t;e.Ko.add(1),await Hl(e),e.Qo.set("Offline"),n||(n=()=>Xu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Gr("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await zl(e)}))}function oh(e,t){return t().catch((n=>sh(e,n,t)))}async function ah(e){const t=Xr(e),n=_h(t);let r=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;ch(t);)try{const e=await tl(t.localStore,r);if(null===e){0===t.Uo.length&&n.ho();break}r=e.batchId,uh(t,e)}catch(e){await sh(t,e)}lh(t)&&hh(t)}function ch(e){return eh(e)&&e.Uo.length<10}function uh(e,t){e.Uo.push(t);const n=_h(e);n.co()&&n.bo&&n.vo(t.mutations)}function lh(e){return eh(e)&&!_h(e).oo()&&e.Uo.length>0}function hh(e){_h(e).start()}async function dh(e){_h(e).Do()}async function fh(e){const t=_h(e);for(const n of e.Uo)t.vo(n.mutations)}async function ph(e,t,n){const r=e.Uo.shift(),i=Sc.from(r,t,n);await oh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ah(e)}async function mh(e,t){t&&_h(e).bo&&await async function(e,t){if(n=t.code,Oo(n)&&n!==Zr.ABORTED){const n=e.Uo.shift();_h(e).ao(),await oh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ah(e)}var n}(e,t),lh(e)&&hh(e)}async function gh(e,t){const n=Xr(e);n.asyncQueue.verifyOperationInProgress(),Gr("RemoteStore","RemoteStore received new credentials");const r=eh(n);n.Ko.add(3),await Hl(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await zl(n)}async function yh(e,t){const n=Xr(e);t?(n.Ko.delete(2),await zl(n)):t||(n.Ko.add(2),await Hl(n),n.Qo.set("Unknown"))}function vh(e){return e.zo||(e.zo=function(e,t,n){const r=Xr(e);return r.No(),new ql(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Pr:nh.bind(null,e),vr:rh.bind(null,e),To:ih.bind(null,e)}),e.Go.push((async t=>{t?(e.zo.ao(),Zl(e)?Xl(e):e.Qo.set("Unknown")):(await e.zo.stop(),th(e))}))),e.zo}function _h(e){return e.Ho||(e.Ho=function(e,t,n){const r=Xr(e);return r.No(),new $l(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:dh.bind(null,e),vr:mh.bind(null,e),So:fh.bind(null,e),Vo:ph.bind(null,e)}),e.Go.push((async t=>{t?(e.Ho.ao(),await ah(e)):(await e.Ho.stop(),e.Uo.length>0&&(Gr("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))}))),e.Ho
/**
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
 */}class wh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new wh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ei(Zr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(e,t){if(zr("AsyncQueue",`${t}: ${e}`),yc(e))return new ei(Zr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Ih{constructor(e){this.comparator=e?(t,n)=>e(t,n)||qi.comparator(t.key,n.key):(e,t)=>qi.comparator(e.key,t.key),this.keyedMap=qo(),this.sortedSet=new Do(this.comparator)}static emptySet(e){return new Ih(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ih))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ih;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Eh{constructor(){this.Jo=new Do(qi.comparator)}track(e){const t=e.doc.key,n=this.Jo.get(t);n?0!==e.type&&3===n.type?this.Jo=this.Jo.insert(t,e):3===e.type&&1!==n.type?this.Jo=this.Jo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jo=this.Jo.remove(t):1===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):Qr():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Th{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Th(e,t,Ih.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Sh{constructor(){this.Xo=void 0,this.listeners=[]}}class kh{constructor(){this.queries=new Ou((e=>$s(e)),qs),this.onlineState="Unknown",this.Zo=new Set}}async function Ah(e,t){const n=Xr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Sh),i)try{s.Xo=await n.onListen(r)}catch(e){const n=bh(e,`Initialization of query '${Bs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.tc(n.onlineState),s.Xo&&t.ec(s.Xo)&&xh(n)}async function Ch(e,t){const n=Xr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Nh(e,t){const n=Xr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ec(i)&&(r=!0);t.Xo=i}}r&&xh(n)}function Oh(e,t,n){const r=Xr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function xh(e){e.Zo.forEach((e=>{e.next()}))}class Dh{constructor(e,t,n){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Th(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.uc||!n)&&(!e.docs.isEmpty()||"Offline"===t)}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}cc(e){e=Th.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}
/**
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
 */class Rh{constructor(e,t){this.payload=e,this.byteLength=t}ac(){return"metadata"in this.payload}}
/**
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
 */class Ph{constructor(e){this.O=e}Gs(e){return da(this.O,e)}js(e){return e.metadata.exists?va(this.O,e.document,!1):ss.newNoDocument(this.Gs(e.metadata.name),this.Qs(e.metadata.readTime))}Qs(e){return ca(e)}}class Lh{constructor(e,t,n){this.hc=e,this.localStore=t,this.O=n,this.queries=[],this.documents=[],this.progress=Mh(e)}lc(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}fc(e){const t=new Map,n=new Ph(this.O);for(const r of e)if(r.metadata.queries){const e=n.Gs(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ko()).add(e);t.set(n,r)}}return t}async complete(){const e=await cl(this.localStore,new Ph(this.O),this.documents,this.hc.id),t=this.fc(this.documents);for(const n of this.queries)await ul(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new Ku(Object.assign({},this.progress),e)}}function Mh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class Fh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class Vh{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=Ko(),this.mutatedKeys=Ko(),this.mc=Gs(e),this.gc=new Ih(this.mc)}get yc(){return this.dc}Ic(e,t){const n=t?t.Ec:new Eh,r=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Rs(this.query)&&r.size===this.query.limit?r.last():null,c=Ps(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ks(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Tc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.mc(l,a)>0||c&&this.mc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Rs(this.query)||Ps(this.query))for(;s.size>this.query.limit;){const e=Rs(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{gc:s,Ec:n,ks:o,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qr()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.mc(e.doc,t.doc))),this.Ac(n);const s=t?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==i.length||a?{snapshot:new Th(this.query,e.gc,r,i,e.mutatedKeys,0===o,a,!1),Pc:s}:{Pc:s}}tc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Eh,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach((e=>this.dc=this.dc.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.dc=this.dc.delete(e))),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=Ko(),this.gc.forEach((e=>{this.bc(e.key)&&(this.wc=this.wc.add(e.key))}));const t=[];return e.forEach((e=>{this.wc.has(e)||t.push(new Uh(e))})),this.wc.forEach((n=>{e.has(n)||t.push(new Fh(n))})),t}vc(e){this.dc=e.Ks,this.wc=Ko();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return Th.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class jh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qh{constructor(e){this.key=e,this.Sc=!1}}class $h{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Dc={},this.Cc=new Ou((e=>$s(e)),qs),this.Nc=new Map,this.xc=new Set,this.kc=new Do(qi.comparator),this.Oc=new Map,this.Mc=new dl,this.$c={},this.Fc=new Map,this.Bc=vu.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function Bh(e,t){const n=vd(e);let r,i;const s=n.Cc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const e=await nl(n.localStore,Vs(t));n.isPrimaryClient&&Wl(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Kh(n,t,r,"current"===s)}return i}async function Kh(e,t,n,r){e.Uc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ic(n);i.ks&&(i=await il(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ic(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return rd(e,t.targetId,o.Pc),o.snapshot}(e,t,n,r);const i=await il(e.localStore,t,!0),s=new Vh(t,i.Ks),o=s.Ic(i.documents),a=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);rd(e,n,c.Pc);const u=new jh(t,n,s);return e.Cc.set(t,u),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}async function Gh(e,t){const n=Xr(e),r=n.Cc.get(t),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter((e=>!qs(e,t)))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ql(n.remoteStore,r.targetId),td(n,r.targetId)})).catch(Eu)):(td(n,r.targetId),await rl(n.localStore,r.targetId,!0))}async function zh(e,t,n){const r=_d(e);try{const e=await function(e,t){const n=Xr(e),r=yi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ko());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Us.Es(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=yo(e,s.get(e.key));null!=t&&o.push(new bo(e.key,t,is(t.value.mapValue),ho.exists(!0)))}return n.gs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.$c[e.currentUser.toKey()];r||(r=new Do(pi)),r=r.insert(t,n),e.$c[e.currentUser.toKey()]=r}(r,e.batchId,n),await od(r,e.changes),await ah(r.remoteStore)}catch(e){const t=bh(e,"Failed to persist write");n.reject(t)}}async function Hh(e,t){const n=Xr(e);try{const e=await Zu(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Oc.get(t);r&&(Jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Sc=!0:e.modifiedDocuments.size>0?Jr(r.Sc):e.removedDocuments.size>0&&(Jr(r.Sc),r.Sc=!1))})),await od(n,e,t)}catch(e){await Eu(e)}}function Wh(e,t,n){const r=Xr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Cc.forEach(((n,r)=>{const i=r.view.tc(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Xr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.tc(t)&&(r=!0)})),r&&xh(n)}(r.eventManager,t),e.length&&r.Dc.To(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qh(e,t,n){const r=Xr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Oc.get(t),s=i&&i.key;if(s){let e=new Do(qi.comparator);e=e.insert(s,ss.newNoDocument(s,vi.min()));const n=Ko().add(s),i=new Ho(vi.min(),new Map,new Lo(pi),e,n);await Hh(r,i),r.kc=r.kc.remove(s),r.Oc.delete(t),sd(r)}else await rl(r.localStore,t,!1).then((()=>td(r,t,n))).catch(Eu)}async function Jh(e,t){const n=Xr(e),r=t.batch.batchId;try{const e=await Yu(n.localStore,t);ed(n,r,null),Zh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await od(n,e)}catch(e){await Eu(e)}}async function Yh(e,t,n){const r=Xr(e);try{const e=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.gs.lookupMutationBatch(e,t).next((t=>(Jr(null!==t),r=t.keys(),n.gs.removeMutationBatch(e,t)))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}(r.localStore,t);ed(r,t,n),Zh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await od(r,e)}catch(n){await Eu(n)}}async function Xh(e,t){const n=Xr(e);eh(n.remoteStore)||Gr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Xr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.gs.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Fc.get(e)||[];r.push(t),n.Fc.set(e,r)}catch(e){const n=bh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Zh(e,t){(e.Fc.get(t)||[]).forEach((e=>{e.resolve()})),e.Fc.delete(t)}function ed(e,t,n){const r=Xr(e);let i=r.$c[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.$c[r.currentUser.toKey()]=i}}function td(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Nc.get(t))e.Cc.delete(r),n&&e.Dc.qc(r,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach((t=>{e.Mc.containsKey(t)||nd(e,t)}))}function nd(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);null!==n&&(Ql(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),sd(e))}function rd(e,t,n){for(const r of n)r instanceof Fh?(e.Mc.addReference(r.key,t),id(e,r)):r instanceof Uh?(Gr("SyncEngine","Document no longer in limbo: "+r.key),e.Mc.removeReference(r.key,t),e.Mc.containsKey(r.key)||nd(e,r.key)):Qr()}function id(e,t){const n=t.key,r=n.path.canonicalString();e.kc.get(n)||e.xc.has(r)||(Gr("SyncEngine","New document in limbo: "+n),e.xc.add(r),sd(e))}function sd(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new qi(Ei.fromString(t)),r=e.Bc.next();e.Oc.set(r,new qh(n)),e.kc=e.kc.insert(n,r),Wl(e.remoteStore,new Ac(Vs(Ds(n.path)),r,2,hi.A))}}async function od(e,t,n){const r=Xr(e),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach(((e,a)=>{o.push(r.Uc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=zu.Ss(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Dc.To(i),await async function(e,t){const n=Xr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>dc.forEach(t,(t=>dc.forEach(t.vs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>dc.forEach(t.Vs,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!yc(e))throw e;Gr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function ad(e,t){const n=Xr(e);if(!n.currentUser.isEqual(t)){Gr("SyncEngine","User change. New user:",t.toKey());const e=await Ju(n.localStore,t);n.currentUser=t,function(e,t){e.Fc.forEach((e=>{e.forEach((e=>{e.reject(new ei(Zr.CANCELLED,t))}))})),e.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await od(n,e.qs)}}function cd(e,t){const n=Xr(e),r=n.Oc.get(t);if(r&&r.Sc)return Ko().add(r.key);{let e=Ko();const r=n.Nc.get(t);if(!r)return e;for(const t of r){const r=n.Cc.get(t);e=e.unionWith(r.view.yc)}return e}}async function ud(e,t){const n=Xr(e),r=await il(n.localStore,t.query,!0),i=t.view.vc(r);return n.isPrimaryClient&&rd(n,t.targetId,i.Pc),i}async function ld(e){const t=Xr(e);return ol(t.localStore).then((e=>od(t,e)))}async function hd(e,t,n,r){const i=Xr(e),s=await function(e,t){const n=Xr(e),r=Xr(n.gs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Ge(e,t).next((t=>t?n.Us.Es(e,t):dc.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await ah(i.remoteStore):"acknowledged"===n||"rejected"===n?(ed(i,t,r||null),Zh(i,t),function(e,t){Xr(Xr(e).gs).Qe(t)}(i.localStore,t)):Qr(),await od(i,s)):Gr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function dd(e,t){const n=Xr(e);if(vd(n),_d(n),!0===t&&!0!==n.Lc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await fd(n,e.toArray());n.Lc=!0,await yh(n.remoteStore,!0);for(const r of t)Wl(n.remoteStore,r)}else if(!1===t&&!1!==n.Lc){const e=[];let t=Promise.resolve();n.Nc.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(td(n,i),rl(n.localStore,i,!0)))),Ql(n.remoteStore,i)})),await t,await fd(n,e),function(e){const t=Xr(e);t.Oc.forEach(((e,n)=>{Ql(t.remoteStore,n)})),t.Mc.ii(),t.Oc=new Map,t.kc=new Do(qi.comparator)}(n),n.Lc=!1,await yh(n.remoteStore,!1)}}async function fd(e,t,n){const r=Xr(e),i=[],s=[];for(const o of t){let e;const t=r.Nc.get(o);if(t&&0!==t.length){e=await nl(r.localStore,Vs(t[0]));for(const e of t){const t=r.Cc.get(e),n=await ud(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await sl(r.localStore,o);e=await nl(r.localStore,t),await Kh(r,pd(t),o,!1)}i.push(e)}return r.Dc.To(s),i}function pd(e){return xs(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function md(e){const t=Xr(e);return Xr(Xr(t.localStore).persistence).ds()}async function gd(e,t,n,r){const i=Xr(e);if(i.Lc)Gr("SyncEngine","Ignoring unexpected query state notification.");else if(i.Nc.has(t))switch(n){case"current":case"not-current":{const e=await ol(i.localStore),r=Ho.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await od(i,e,r);break}case"rejected":await rl(i.localStore,t,!0),td(i,t,r);break;default:Qr()}}async function yd(e,t,n){const r=vd(e);if(r.Lc){for(const e of t){if(r.Nc.has(e)){Gr("SyncEngine","Adding an already active target "+e);continue}const t=await sl(r.localStore,e),n=await nl(r.localStore,t);await Kh(r,pd(t),n.targetId,!1),Wl(r.remoteStore,n)}for(const e of n)r.Nc.has(e)&&await rl(r.localStore,e,!1).then((()=>{Ql(r.remoteStore,e),td(r,e)})).catch(Eu)}}function vd(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qh.bind(null,t),t.Dc.To=Nh.bind(null,t.eventManager),t.Dc.qc=Oh.bind(null,t.eventManager),t}function _d(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yh.bind(null,t),t}function wd(e,t,n){const r=Xr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Xr(e),r=ca(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Kn.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(Mh(r));const i=new Lh(r,e.localStore,t.O);let s=await t.Kc();for(;s;){const e=await i.lc(s);e&&n._updateProgress(e),s=await t.Kc()}const o=await i.complete();await od(e,o.ws,void 0),await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Kn.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress)}catch(e){Hr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
/**
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
 */)(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}class bd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Ul(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Qu(this.persistence,new Hu,e.initialUser,this.O)}jc(e){return new vl(wl.bi,this.O)}Gc(e){return new Ol}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Id extends bd{constructor(e,t,n){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await al(this.localStore),await this.zc.initialize(this,e),await _d(this.zc.syncEngine),await ah(this.zc.remoteStore),await this.persistence.Hn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Wc(e){return Qu(this.persistence,new Hu,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ku(t,e.asyncQueue)}jc(e){const t=Bu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?lu.withCacheSize(this.cacheSizeBytes):lu.DEFAULT;return new ju(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ml(),Fl(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new Ol}}class Ed extends Id{constructor(e,t){super(e,t,!1),this.zc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.zc.syncEngine;this.sharedClientState instanceof Nl&&(this.sharedClientState.syncEngine={hr:hd.bind(null,t),lr:gd.bind(null,t),dr:yd.bind(null,t),ds:md.bind(null,t),ar:ld.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Hn((async e=>{await dd(this.zc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Gc(e){const t=Ml();if(!Nl.Vt(t))throw new ei(Zr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Bu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Nl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Td{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Wh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ad.bind(null,this.syncEngine),await yh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kh}createDatastore(e){const t=Ul(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ll(r));var r;return function(e,t,n,r){return new Bl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Wh(this.syncEngine,e,0),s=Dl.Vt()?new Dl:new xl,new Gl(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new $h(e,t,n,r,i,s);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xr(e);Gr("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await Hl(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Sd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class kd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class Ad{constructor(e,t){this.Yc=e,this.O=t,this.metadata=new ti,this.buffer=new Uint8Array,this.Xc=new TextDecoder("utf-8"),this.Zc().then((e=>{e&&e.ac()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Yc.cancel()}async getMetadata(){return this.metadata.promise}async Kc(){return await this.getMetadata(),this.Zc()}async Zc(){const e=await this.tu();if(null===e)return null;const t=this.Xc.decode(e),n=Number(t);isNaN(n)&&this.eu(`length string (${t}) is not valid number`);const r=await this.nu(n);return new Rh(JSON.parse(r),e.length+n)}su(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async tu(){for(;this.su()<0;)if(await this.iu())break;if(0===this.buffer.length)return null;const e=this.su();e<0&&this.eu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async nu(e){for(;this.buffer.length<e;)await this.iu()&&this.eu("Reached the end of bundle when more is expected.");const t=this.Xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}eu(e){throw this.Yc.cancel(),new Error(`Invalid bundle format: ${e}`)}async iu(){const e=await this.Yc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class Cd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ei(Zr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Xr(e),r=ma(n.O)+"/documents",i={documents:t.map((e=>ha(n.O,e)))},s=await n.Lr("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=_a(n.O,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Jr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new So(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=qi.fromPath(t);this.mutations.push(new ko(n,this.precondition(n)))})),await async function(e,t){const n=Xr(e),r=ma(n.O)+"/documents",i={writes:t.map((e=>ba(n.O,e)))};await n.Mr("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Qr();t=vi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ei(Zr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?ho.updateTime(t):ho.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(vi.min()))throw new ei(Zr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ho.updateTime(t)}return ho.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class Nd{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.ru=5,this.ro=new Vl(this.asyncQueue,"transaction_retry")}run(){this.ru-=1,this.ou()}ou(){this.ro.Hr((async()=>{const e=new Cd(this.datastore),t=this.cu(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.uu(e)}))))})).catch((e=>{this.uu(e)}))}))}cu(e){try{const t=this.updateFunction(e);return!Ui(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}uu(e){this.ru>0&&this.au(e)?(this.ru-=1,this.asyncQueue.enqueueAndForget((()=>(this.ou(),Promise.resolve())))):this.deferred.reject(e)}au(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Oo(t)}return!1}}
/**
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
 */class Od{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Gr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Gr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ei(Zr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=bh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function xd(e,t){e.asyncQueue.verifyOperationInProgress(),Gr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ju(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Dd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Rd(e);Gr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>gh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>gh(t.remoteStore,n))),e.onlineComponents=t}async function Rd(e){return e.offlineComponents||(Gr("FirestoreClient","Using default OfflineComponentProvider"),await xd(e,new bd)),e.offlineComponents}async function Pd(e){return e.onlineComponents||(Gr("FirestoreClient","Using default OnlineComponentProvider"),await Dd(e,new Td)),e.onlineComponents}function Ld(e){return Rd(e).then((e=>e.persistence))}function Md(e){return Rd(e).then((e=>e.localStore))}function Fd(e){return Pd(e).then((e=>e.remoteStore))}function Ud(e){return Pd(e).then((e=>e.syncEngine))}async function Vd(e){const t=await Pd(e),n=t.eventManager;return n.onListen=Bh.bind(null,t.syncEngine),n.onUnlisten=Gh.bind(null,t.syncEngine),n}function jd(e){return e.asyncQueue.enqueue((async()=>{const t=await Ld(e),n=await Fd(e);return t.setNetworkEnabled(!0),function(e){const t=Xr(e);return t.Ko.delete(0),zl(t)}(n)}))}function qd(e){return e.asyncQueue.enqueue((async()=>{const t=await Ld(e),n=await Fd(e);return t.setNetworkEnabled(!1),async function(e){const t=Xr(e);t.Ko.add(0),await Hl(t),t.Qo.set("Offline")}(n)}))}function $d(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Us.ys(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ei(Zr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=bh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Md(e),t,n))),n.promise}function Bd(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new kd({next:s=>{t.enqueueAndForget((()=>Ch(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ei(Zr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ei(Zr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Dh(Ds(n.path),s,{includeMetadataChanges:!0,uc:!0});return Ah(e,o)}(await Vd(e),e.asyncQueue,t,n,r))),r.promise}function Kd(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await il(e,t,!0),i=new Vh(t,r.Ks),s=i.Ic(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=bh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Md(e),t,n))),n.promise}function Gd(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new kd({next:n=>{t.enqueueAndForget((()=>Ch(e,o))),n.fromCache&&"server"===r.source?i.reject(new ei(Zr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Dh(n,s,{includeMetadataChanges:!0,uc:!0});return Ah(e,o)}(await Vd(e),e.asyncQueue,t,n,r))),r.promise}function zd(e,t){const n=new kd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).Zo.add(t),t.next()}(await Vd(e),n))),()=>{n.Jc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).Zo.delete(t)}(await Vd(e),n)))}}function Hd(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return Pd(e).then((e=>e.datastore))}(e);new Nd(e.asyncQueue,r,t,n).run()})),n.promise}function Wd(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Ad(e,t)}(function(e,t){if(e instanceof Uint8Array)return Sd(e,t);if(e instanceof ArrayBuffer)return Sd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
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
 */(n,Ul(t));e.asyncQueue.enqueueAndForget((async()=>{wd(await Ud(e),i,r)}))}function Qd(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Xr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Kn.getNamedQuery(e,t)))}(await Md(e),t)))}const Jd=new Map;
/**
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
 */function Yd(e,t,n){if(!n)throw new ei(Zr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Xd(e,t,n,r){if(!0===t&&!0===r)throw new ei(Zr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Zd(e){if(!qi.isDocumentKey(e))throw new ei(Zr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ef(e){if(qi.isDocumentKey(e))throw new ei(Zr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function tf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Qr()}function nf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ei(Zr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tf(e);throw new ei(Zr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function rf(e,t){if(t<=0)throw new ei(Zr.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class sf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ei(Zr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ei(Zr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Xd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class of{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1,e instanceof Fi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ei(Zr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId)}(e))}get app(){if(!this._app)throw new ei(Zr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ei(Zr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ri;switch(e.type){case"gapi":const t=e.client;return Jr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ai(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ei(Zr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Jd.get(e);t&&(Gr("ComponentProvider","Removing Datastore"),Jd.delete(e),t.terminate())}(this),Promise.resolve()}}function af(e,t,n,r={}){var i;const s=(e=nf(e,of))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ei(Zr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(s)}e._authCredentials=new ii(new ni(t,n))}}
/**
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
 */class cf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cf(this.firestore,e,this._key)}}class uf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new uf(this.firestore,e,this._query)}}class lf extends uf{constructor(e,t,n){super(e,t,Ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cf(this.firestore,null,new qi(e))}withConverter(e){return new lf(this.firestore,e,this._path)}}function hf(e,t,...n){if(e=(0,a.m9)(e),Yd("collection","path",t),e instanceof of){const r=Ei.fromString(t,...n);return ef(r),new lf(e,null,r)}{if(!(e instanceof cf||e instanceof lf))throw new ei(Zr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ei.fromString(t,...n));return ef(r),new lf(e.firestore,null,r)}}function df(e,t){if(e=nf(e,of),Yd("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ei(Zr.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new uf(e,null,function(e){return new Os(Ei.emptyPath(),e)}(t))}function ff(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=fi.R()),Yd("doc","path",t),e instanceof of){const r=Ei.fromString(t,...n);return Zd(r),new cf(e,null,new qi(r))}{if(!(e instanceof cf||e instanceof lf))throw new ei(Zr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ei.fromString(t,...n));return Zd(r),new cf(e.firestore,e instanceof lf?e.converter:null,new qi(r))}}function pf(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof cf||e instanceof lf)&&(t instanceof cf||t instanceof lf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function mf(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof uf&&t instanceof uf&&e.firestore===t.firestore&&qs(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class gf{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Vl(this,"async_queue_retry"),this.yu=()=>{const e=Fl();e&&Gr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ro.Yr()};const e=Fl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Fl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise((()=>{}));const t=new ti;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.lu.push(e),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(I){if(!yc(I))throw I;Gr("AsyncQueue","Operation failed with retryable error: "+I)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(e){const t=this.hu.then((()=>(this.wu=!0,e().catch((e=>{this._u=e,this.wu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw zr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.wu=!1,e))))));return this.hu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=wh.createAndSchedule(this,e,t,n,(e=>this.Tu(e)));return this.du.push(r),r}pu(){this._u&&Qr()}verifyOperationInProgress(){}async Au(){let e;do{e=this.hu,await e}while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then((()=>{this.du.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.du)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Au()}))}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function yf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class vf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ti,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const _f=-1;class wf extends of{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new gf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Tf(this),this._firestoreClient.terminate()}}function bf(e,t){const n=(0,i.qX)(e,"firestore");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,t))return e;throw new ei(Zr.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ei(Zr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t})}function If(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function Ef(e){return e._firestoreClient||Tf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Tf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Mi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Od(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Sf(e,t){Lf(e=nf(e,wf));const n=Ef(e),r=e._freezeSettings(),i=new Td;return Af(n,i,new Id(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function kf(e){Lf(e=nf(e,wf));const t=Ef(e),n=e._freezeSettings(),r=new Td;return Af(t,r,new Ed(r,n.cacheSizeBytes))}function Af(e,t,n){const r=new ti;return e.asyncQueue.enqueue((async()=>{try{await xd(e,n),await Dd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===Zr.FAILED_PRECONDITION||e.code===Zr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Cf(e){if(e._initialized&&!e._terminated)throw new ei(Zr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ti;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!pc.Vt())return Promise.resolve();const t=e+"main";await pc.delete(t)}(Bu(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Nf(e){return function(e){const t=new ti;return e.asyncQueue.enqueueAndForget((async()=>Xh(await Ud(e),t))),t.promise}(Ef(e=nf(e,wf)))}function Of(e){return jd(Ef(e=nf(e,wf)))}function xf(e){return qd(Ef(e=nf(e,wf)))}function Df(e){return(0,i.wN)(e.app,"firestore"),e._delete()}function Rf(e,t){const n=Ef(e=nf(e,wf)),r=new vf;return Wd(n,e._databaseId,t,r),r}function Pf(e,t){return Qd(Ef(e=nf(e,wf)),t).then((t=>t?new uf(e,null,t.query):null))}function Lf(e){if(e._initialized||e._terminated)throw new ei(Zr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Mf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ei(Zr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ff(){return new Mf("__name__")}
/**
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
 */class Uf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uf(Ci.fromBase64String(e))}catch(e){throw new ei(Zr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Uf(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Vf{constructor(e){this._methodName=e}}
/**
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
 */class jf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ei(Zr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ei(Zr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}
/**
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
 */const qf=/^__.*__$/;class $f{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new bo(e,this.data,this.fieldMask,t,this.fieldTransforms):new wo(e,this.data,t,this.fieldTransforms)}}class Bf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new bo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qr()}}class Gf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.O=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.Nu(e),r}xu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return hp(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(0===e.length)throw this.Ou("Document fields must not be empty");if(Kf(this.Vu)&&qf.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class zf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=n||Ul(e)}Fu(e,t,n,r=!1){return new Gf({Vu:e,methodName:t,$u:n,path:Si.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Hf(e){const t=e._freezeSettings(),n=Ul(e._databaseId);return new zf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wf(e,t,n,r,i,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);ap("Data must be an object, but it was:",o,r);const a=sp(r,o);let c,u;if(s.merge)c=new ki(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=cp(t,r,n);if(!o.contains(i))throw new ei(Zr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);dp(e,i)||e.push(i)}c=new ki(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new $f(new rs(a),c,u)}class Qf extends Vf{_toFieldTransform(e){if(2!==e.Vu)throw 1===e.Vu?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qf}}function Jf(e,t,n){return new Gf({Vu:3,$u:t.settings.$u,methodName:e._methodName,Cu:n},t.databaseId,t.O,t.ignoreUndefinedProperties)}class Yf extends Vf{_toFieldTransform(e){return new co(e.path,new eo)}isEqual(e){return e instanceof Yf}}class Xf extends Vf{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=Jf(this,e,!0),n=this.Bu.map((e=>ip(e,t))),r=new to(n);return new co(e.path,r)}isEqual(e){return this===e}}class Zf extends Vf{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=Jf(this,e,!0),n=this.Bu.map((e=>ip(e,t))),r=new ro(n);return new co(e.path,r)}isEqual(e){return this===e}}class ep extends Vf{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=new so(e.O,Qs(e.O,this.Lu));return new co(e.path,t)}isEqual(e){return this===e}}function tp(e,t,n,r){const i=e.Fu(1,t,n);ap("Data must be an object, but it was:",i,r);const s=[],o=rs.empty();wi(r,((e,r)=>{const c=lp(t,e,n);r=(0,a.m9)(r);const u=i.xu(c);if(r instanceof Qf)s.push(c);else{const e=ip(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new ki(s);return new Bf(o,c,i.fieldTransforms)}function np(e,t,n,r,i,s){const o=e.Fu(1,t,n),c=[cp(t,r,n)],u=[i];if(s.length%2!=0)throw new ei(Zr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(cp(t,s[a])),u.push(s[a+1]);const l=[],h=rs.empty();for(let f=c.length-1;f>=0;--f)if(!dp(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.xu(e);if(t instanceof Qf)l.push(e);else{const r=ip(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new ki(l);return new Bf(h,d,o.fieldTransforms)}function rp(e,t,n,r=!1){return ip(n,e.Fu(r?4:3,t))}function ip(e,t){if(op(e=(0,a.m9)(e)))return ap("Unsupported field value:",t,e),sp(e,t);if(e instanceof Vf)return function(e,t){if(!Kf(t.Vu))throw t.Ou(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ou(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Cu&&4!==t.Vu)throw t.Ou("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ip(i,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Qs(t.O,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=yi.fromDate(e);return{timestampValue:sa(t.O,n)}}if(e instanceof yi){const n=new yi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sa(t.O,n)}}if(e instanceof jf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Uf)return{bytesValue:oa(t.O,e._byteString)};if(e instanceof cf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ua(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ou(`Unsupported field value: ${tf(e)}`)}(e,t)}function sp(e,t){const n={};return bi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wi(e,((e,r)=>{const i=ip(r,t.Du(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function op(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof yi||e instanceof jf||e instanceof Uf||e instanceof cf||e instanceof Vf)}function ap(e,t,n){if(!op(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=tf(n);throw"an object"===r?t.Ou(e+" a custom object"):t.Ou(e+" "+r)}}function cp(e,t,n){if((t=(0,a.m9)(t))instanceof Mf)return t._internalPath;if("string"==typeof t)return lp(e,t);throw hp("Field path arguments must be of type string or ",e,!1,void 0,n)}const up=new RegExp("[~\\*/\\[\\]]");function lp(e,t,n){if(t.search(up)>=0)throw hp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mf(...t.split("."))._internalPath}catch(r){throw hp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ei(Zr.INVALID_ARGUMENT,a+e+c)}function dp(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class fp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new pp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class pp extends fp{data(){return super.data()}}function mp(e,t){return"string"==typeof t?lp(e,t):t instanceof Mf?t._internalPath:t._delegate._internalPath}
/**
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
 */class gp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yp extends fp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(mp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class vp extends yp{data(e={}){return super.data(e)}}class _p{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new vp(this._firestore,this._userDataWriter,n.key,n,new gp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ei(Zr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new vp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new gp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new vp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new gp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:wp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qr()}}function bp(e,t){return e instanceof yp&&t instanceof yp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof _p&&t instanceof _p&&e._firestore===t._firestore&&mf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function Ip(e){if(Ps(e)&&0===e.explicitOrderBy.length)throw new ei(Zr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}function Tp(e,...t){for(const n of t)e=n._apply(e);return e}class Sp extends Ep{constructor(e,t,n){super(),this.Uu=e,this.qu=t,this.Ku=n,this.type="where"}_apply(e){const t=Hf(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){jp(o,s);const t=[];for(const n of o)t.push(Vp(r,e,n));a={arrayValue:{values:t}}}else a=Vp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||jp(o,s),a=rp(n,t,o,"in"===s||"not-in"===s);const c=gs.create(i,s,a);return function(e,t){if(t.S()){const n=Ms(e);if(null!==n&&!n.isEqual(t.field))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ls(e);null!==r&&qp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ei(Zr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ei(Zr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new uf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function kp(e,t,n){const r=t,i=mp("where",e);return new Sp(i,r,n)}class Ap extends Ep{constructor(e,t){super(),this.Uu=e,this.Gu=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ks(t,n);return function(e,t){if(null===Ls(e)){const n=Ms(e);null!==n&&qp(e,n,t.field)}}(e,r),r}(e._query,this.Uu,this.Gu);return new uf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Os(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Cp(e,t="asc"){const n=t,r=mp("orderBy",e);return new Ap(r,n)}class Np extends Ep{constructor(e,t,n){super(),this.type=e,this.ju=t,this.Qu=n}_apply(e){return new uf(e.firestore,e.converter,js(e._query,this.ju,this.Qu))}}function Op(e){return rf("limit",e),new Np("limit",e,"F")}function xp(e){return rf("limitToLast",e),new Np("limitToLast",e,"L")}class Dp extends Ep{constructor(e,t,n){super(),this.type=e,this.Wu=t,this.zu=n}_apply(e){const t=Up(e,this.type,this.Wu,this.zu);return new uf(e.firestore,e.converter,function(e,t){return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Rp(...e){return new Dp("startAt",e,!0)}function Pp(...e){return new Dp("startAfter",e,!1)}class Lp extends Ep{constructor(e,t,n){super(),this.type=e,this.Wu=t,this.zu=n}_apply(e){const t=Up(e,this.type,this.Wu,this.zu);return new uf(e.firestore,e.converter,function(e,t){return new Os(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Mp(...e){return new Lp("endBefore",e,!1)}function Fp(...e){return new Lp("endAt",e,!0)}function Up(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof fp)return function(e,t,n,r,i){if(!r)throw new ei(Zr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Us(e))if(o.field.isKeyField())s.push(Ji(t,r.key));else{const e=r.data.field(o.field);if(Ri(e))throw new ei(Zr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ss(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Hf(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ei(Zr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Fs(e)&&-1!==s.indexOf("/"))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ei.fromString(s));if(!qi.isDocumentKey(n))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new qi(n);a.push(Ji(t,i))}else{const e=rp(n,r,s);a.push(e)}}return new Ss(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Vp(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fs(t)&&-1!==n.indexOf("/"))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ei.fromString(n));if(!qi.isDocumentKey(r))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ji(e,new qi(r))}if(n instanceof cf)return Ji(e,n._key);throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tf(n)}.`)}function jp(e,t){if(!Array.isArray(e)||0===e.length)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function qp(e,t,n){if(!n.isEqual(t))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */class $p{convertValue(e,t="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Qr()}}convertObject(e,t){const n={};return wi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new jf(xi(e.latitude),xi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new yi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ei.fromString(e);Jr(Ma(n));const r=new Fi(n.get(1),n.get(3)),i=new qi(n.popFirst(5));return r.isEqual(t)||zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function Bp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Kp extends $p{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new cf(this.firestore,null,t)}}
/**
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
 */class Gp{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Hf(e)}set(e,t,n){this._verifyNotCommitted();const r=zp(e,this._firestore),i=Bp(r.converter,t,n),s=Wf(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ho.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=zp(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Mf?np(this._dataReader,"WriteBatch.update",i._key,t,n,r):tp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ho.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=zp(e,this._firestore);return this._mutations=this._mutations.concat(new So(t._key,ho.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ei(Zr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function zp(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new ei(Zr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */function Hp(e){e=nf(e,cf);const t=nf(e.firestore,wf);return Bd(Ef(t),e._key).then((n=>am(t,e,n)))}class Wp extends $p{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new cf(this.firestore,null,t)}}function Qp(e){e=nf(e,cf);const t=nf(e.firestore,wf),n=Ef(t),r=new Wp(t);return $d(n,e._key).then((n=>new yp(t,r,e._key,n,new gp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Jp(e){e=nf(e,cf);const t=nf(e.firestore,wf);return Bd(Ef(t),e._key,{source:"server"}).then((n=>am(t,e,n)))}function Yp(e){e=nf(e,uf);const t=nf(e.firestore,wf),n=Ef(t),r=new Wp(t);return Ip(e._query),Gd(n,e._query).then((n=>new _p(t,r,e,n)))}function Xp(e){e=nf(e,uf);const t=nf(e.firestore,wf),n=Ef(t),r=new Wp(t);return Kd(n,e._query).then((n=>new _p(t,r,e,n)))}function Zp(e){e=nf(e,uf);const t=nf(e.firestore,wf),n=Ef(t),r=new Wp(t);return Gd(n,e._query,{source:"server"}).then((n=>new _p(t,r,e,n)))}function em(e,t,n){e=nf(e,cf);const r=nf(e.firestore,wf),i=Bp(e.converter,t,n);return om(r,[Wf(Hf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ho.none())])}function tm(e,t,n,...r){e=nf(e,cf);const i=nf(e.firestore,wf),s=Hf(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Mf?np(s,"updateDoc",e._key,t,n,r):tp(s,"updateDoc",e._key,t),om(i,[o.toMutation(e._key,ho.exists(!0))])}function nm(e){return om(nf(e.firestore,wf),[new So(e._key,ho.none())])}function rm(e,t){const n=nf(e.firestore,wf),r=ff(e),i=Bp(e.converter,t);return om(n,[Wf(Hf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ho.exists(!1))]).then((()=>r))}function im(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||yf(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(yf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof cf)l=nf(e.firestore,wf),h=Ds(e._key.path),u={next:n=>{t[o]&&t[o](am(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=nf(e,uf);l=nf(n.firestore,wf),h=n._query;const r=new Wp(l);u={next:e=>{t[o]&&t[o](new _p(l,r,n,e))},error:t[o+1],complete:t[o+2]},Ip(e._query)}return function(e,t,n,r){const i=new kd(r),s=new Dh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Ah(await Vd(e),s))),()=>{i.Jc(),e.asyncQueue.enqueueAndForget((async()=>Ch(await Vd(e),s)))}}(Ef(l),h,c,u)}function sm(e,t){return zd(Ef(e=nf(e,wf)),yf(t)?t:{next:t})}function om(e,t){return function(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>zh(await Ud(e),t,n))),n.promise}(Ef(e),t)}function am(e,t,n){const r=n.docs.get(t._key),i=new Wp(e);return new yp(e,i,t._key,r,new gp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */class cm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Hf(e)}get(e){const t=zp(e,this._firestore),n=new Kp(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Qr();const r=e[0];if(r.isFoundDocument())return new fp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new fp(this._firestore,n,t._key,null,t.converter);throw Qr()}))}set(e,t,n){const r=zp(e,this._firestore),i=Bp(r.converter,t,n),s=Wf(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=zp(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Mf?np(this._dataReader,"Transaction.update",i._key,t,n,r):tp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=zp(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zp(e,this._firestore),n=new Wp(this._firestore);return super.get(e).then((e=>new yp(this._firestore,n,t._key,e._document,new gp(!1,!1),t.converter)))}}function um(e,t){return Hd(Ef(e=nf(e,wf)),(n=>t(new cm(e,n))))}
/**
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
 */function lm(){return new Qf("deleteField")}function hm(){return new Yf("serverTimestamp")}function dm(...e){return new Xf("arrayUnion",e)}function fm(...e){return new Zf("arrayRemove",e)}function pm(e){return new ep("increment",e)}
/**
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
 */function mm(e){return Ef(e=nf(e,wf)),new Gp(e,(t=>om(e,t)))
/**
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
 */}function gm(e,t){Ef(e=nf(e,wf));const n="string"==typeof t?function(e){try{return JSON.parse(e)}catch(e){throw new ei(Zr.INVALID_ARGUMENT,"Failed to parse JSON:"+e.message)}}(t):t,r=[];if(Array.isArray(n.indexes))for(const i of n.indexes){const e=ym(i,"collectionGroup"),t=[];if(Array.isArray(i.fields))for(const n of i.fields){const e=lp("setIndexConfiguration",ym(n,"fieldPath"));"CONTAINS"===n.arrayConfig?t.push(new as(e,2)):"ASCENDING"===n.order?t.push(new as(e,0)):"DESCENDING"===n.order&&t.push(new as(e,1))}r.push(new os(os.UNKNOWN_ID,e,t,cs.empty()))}return Promise.resolve()}function ym(e,t){if("string"!=typeof e[t])throw new ei(Zr.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}!function(e,t=!0){!function(e){qr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new wf(r,new si(e.getProvider("auth-internal")),new ui(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Vr,"3.4.5",e),(0,i.KN)(Vr,"3.4.5","esm2017")}()},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2119:function(e,t,n){"use strict";n.d(t,{PO:function(){return G},p7:function(){return tt}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const y=/\/$/,v=e=>e.replace(y,"");function _(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=A(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function I(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S(e[n],t[n]))return!1;return!0}function S(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function A(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,N;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(N||(N={}));function O(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const x=/^[^#]+#/;function D(e,t){return e.replace(x,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function U(e,t){F.set(e,t)}function V(e){const t=F.get(e);return F.delete(e),t}let j=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),b(n,"")}const o=b(n,e);return o+r+i}function $(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=q(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:C.pop,direction:l?l>0?N.forward:N.back:N.unknown})}))};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function K(e){const{history:t,location:n}=window,r={value:q(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:j()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:P()});s(o.current,o,!0);const a=p({},B(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function G(e){e=O(e);const t=K(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:D.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function Y(e,t){return p(new Error,{type:e,[Q]:!0},t)}function X(e,t){return e instanceof Error&&Q in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const se={type:0,value:""},oe=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=he(e);a.aliasOf=r&&r.record;const u=me(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Y(1,{location:e});o=i.record.name,a=p(le(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Y(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ye=/#/g,ve=/&/g,_e=/\//g,we=/=/g,be=/\?/g,Ie=/\+/g,Ee=/%5B/g,Te=/%5D/g,Se=/%5E/g,ke=/%60/g,Ae=/%7B/g,Ce=/%7C/g,Ne=/%7D/g,Oe=/%20/g;function xe(e){return encodeURI(""+e).replace(Ce,"|").replace(Ee,"[").replace(Te,"]")}function De(e){return xe(e).replace(Ae,"{").replace(Ne,"}").replace(Se,"^")}function Re(e){return xe(e).replace(Ie,"%2B").replace(Oe,"+").replace(ye,"%23").replace(ve,"%26").replace(ke,"`").replace(Ae,"{").replace(Ne,"}").replace(Se,"^")}function Pe(e){return Re(e).replace(we,"%3D")}function Le(e){return xe(e).replace(ye,"%23").replace(be,"%3F")}function Me(e){return null==e?"":Le(e).replace(_e,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ue(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Ie," "),n=e.indexOf("="),s=Fe(n<0?e:e.slice(0,n)),o=n<0?null:Fe(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ve(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(Y(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function Be(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ke(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push($e(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&$e(c,n,r,s,e)()}))))}}return i}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(E.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(E.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const ze=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||s.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&E(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ze(n.default,{Component:a,route:i});const u=s.props[e.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||Ue,s=e.stringifyQuery||Ve,o=e.history;const a=qe(),c=qe(),f=qe(),y=(0,i.XI)(W);let v=W;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=m.bind(null,(e=>""+e)),E=m.bind(null,Me),T=m.bind(null,Fe);function S(e,n){let r,i;return H(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function A(){return t.getRoutes().map((e=>e.record))}function N(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=p({},r||y.value),"string"===typeof e){const i=_(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:T(s.params),hash:Fe(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:_(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:E(e.params)}),r.params=E(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=b(T(a.params));const u=w(s,p({},e,{hash:De(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===Ve?je(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?_(n,e,y.value.path):p({},e)}function D(e,t){if(v!==e)return Y(8,{from:t,to:e})}function R(e){return q(e)}function F(e){return R(p(x(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function q(e,t){const n=v=O(e),r=y.value,i=e.state,o=e.force,a=!0===e.replace,c=j(n);if(c)return q(p(x(c),{state:i,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&I(s,r,n)&&(l=Y(16,{to:u,from:r}),ie(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch((e=>X(e)?X(e,2)?e:re(e):te(e,u,r))).then((e=>{if(e){if(X(e,2))return q(p(x(e.to),{state:i,force:o,replace:a}),t||u)}else e=G(u,r,!0,a,i);return K(u,r,e),e}))}function $(e,t){const n=D(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=rt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=$.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push($e(r,e,t));return n.push(o),nt(n)})).then((()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push($e(r,e,t));return n.push(o),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function K(e,t,n){for(const r of f.list())r(e,t,n)}function G(e,t,n,r,i){const s=D(e,t);if(s)return s;const a=t===W,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),y.value=e,ie(e,t,n,a),re()}let z;function Q(){z=o.listen(((e,t,n)=>{const r=O(e),i=j(r);if(i)return void q(p(i,{replace:!0}),r).catch(g);v=r;const s=y.value;d&&U(M(s.fullPath,n.delta),P()),B(r,s).catch((e=>X(e,12)?e:X(e,2)?(q(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||G(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&X(e,20)&&o.go(-1,!1)),K(r,s,e)})).catch(g)}))}let J,Z=qe(),ee=qe();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&y.value!==W?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function re(e){return J||(J=!e,Q(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&V(M(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&L(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:y,addRoute:S,removeRoute:k,hasRoute:N,getRoutes:A,resolve:O,options:e,push:R,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),d&&!oe&&y.value===W&&(oe=!0,R(o.location).catch((e=>{0})));const n={};for(const i in W)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(u,t),e.provide(l,(0,i.qj)(n)),e.provide(h,y);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=W,z&&z(),y.value=W,oe=!1,J=!1),s()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>E(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>E(e,a)))||i.push(a))}return[n,r,i]}},8637:function(e,t,n){"use strict";n.d(t,{MT:function(){return J}});var r=n(6252),i=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";class l{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function h(e,t){const n=e,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new l(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var d="store";function f(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function p(e){return null!==e&&"object"===typeof e}function m(e){return e&&"function"===typeof e.then}function g(e,t){return function(){return e(t)}}function y(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function v(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;w(e,n,[],e._modules.root,!0),_(e,n,t)}function _(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};f(s,(function(t,n){o[n]=g(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&k(e),r&&n&&e._withCommit((function(){r.data=null}))}function w(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=A(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var u=r.context=b(e,o,n);r.forEachMutation((function(t,n){var r=o+n;E(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;T(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;S(e,r,t,u)})),r.forEachChild((function(r,s){w(e,t,n.concat(s),r,i)}))}function b(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=C(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=C(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return A(e.state,n)}}}),i}function I(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function E(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return m(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function S(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function k(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function A(e,t){return t.reduce((function(e,t){return e[t]}),e)}function C(e,t,n){return p(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var N="vuex bindings",O="vuex:mutations",x="vuex:actions",D="vuex",R=0;function P(e,t){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[N]},(function(n){n.addTimelineLayer({id:O,label:"Vuex Mutations",color:L}),n.addTimelineLayer({id:x,label:"Vuex Actions",color:L}),n.addInspector({id:D,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===D)if(n.filter){var r=[];q(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[j(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId;I(t,r),n.state=$(K(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(D),n.sendInspectorState(D),n.addTimelineEvent({layerId:O,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=R++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:x,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:x,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var L=8702998,M=6710886,F=16777215,U={label:"namespaced",textColor:F,backgroundColor:M};function V(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function j(e,t){return{id:t||"root",label:V(t),tags:e.namespaced?[U]:[],children:Object.keys(e._children).map((function(n){return j(e._children[n],t+n+"/")}))}}function q(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[U]:[]}),Object.keys(t._children).forEach((function(i){q(e,t._children[i],n,r+i+"/")}))}function $(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=B(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?V(e):e,editable:!1,value:G((function(){return s[e]}))}}))}return i}function B(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=G((function(){return e[n]}))}else t[n]=G((function(){return e[n]}))})),t}function K(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function G(e){try{return e()}catch(t){return t}}var z=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},H={namespaced:{configurable:!0}};H.namespaced.get=function(){return!!this._rawModule.namespaced},z.prototype.addChild=function(e,t){this._children[e]=t},z.prototype.removeChild=function(e){delete this._children[e]},z.prototype.getChild=function(e){return this._children[e]},z.prototype.hasChild=function(e){return e in this._children},z.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},z.prototype.forEachChild=function(e){f(this._children,e)},z.prototype.forEachGetter=function(e){this._rawModule.getters&&f(this._rawModule.getters,e)},z.prototype.forEachAction=function(e){this._rawModule.actions&&f(this._rawModule.actions,e)},z.prototype.forEachMutation=function(e){this._rawModule.mutations&&f(this._rawModule.mutations,e)},Object.defineProperties(z.prototype,H);var W=function(e){this.register([],e,!1)};function Q(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Q(e.concat(r),t.getChild(r),n.modules[r])}}W.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},W.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},W.prototype.update=function(e){Q([],this.root,e)},W.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new z(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&f(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},W.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},W.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function J(e){return new Y(e)}var Y=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new W(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=r;var u=this._modules.root.state;w(this,u,[],this._modules.root),_(this,u),n.forEach((function(e){return e(t)}))},X={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||d,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&P(e,this)},X.state.get=function(){return this._state.data},X.state.set=function(e){0},Y.prototype.commit=function(e,t,n){var r=this,i=C(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Y.prototype.dispatch=function(e,t){var n=this,r=C(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},Y.prototype.subscribe=function(e,t){return y(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return y(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),w(this,this.state,e,this._modules.get(e),n.preserveState),_(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=A(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),v(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),v(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,X);te((function(e,t){var n={};return Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=ne(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),te((function(e,t){var n={};return Z(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=ne(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||p(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r}},2238:function(e,t,n){"use strict";n.d(t,{Jn:function(){return H},KN:function(){return J},Mq:function(){return Q},Xd:function(){return q},ZF:function(){return W},qX:function(){return $},wN:function(){return B}});var r=n(8463),i=n(3333),s=n(4444);
/**
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
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.17",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",_="@firebase/database-compat",w="@firebase/functions",b="@firebase/functions-compat",I="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",A="@firebase/performance-compat",C="@firebase/remote-config",N="@firebase/remote-config-compat",O="@firebase/storage",x="@firebase/storage-compat",D="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.6.7",M="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[_]:"fire-rtdb-compat",[w]:"fire-fn",[b]:"fire-fn-compat",[I]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[A]:"fire-perf-compat",[C]:"fire-rc",[N]:"fire-rc-compat",[O]:"fire-gcs",[x]:"fire-gcs-compat",[D]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},U=new Map,V=new Map;function j(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if(V.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of U.values())j(n,e);return!0}function $(e,t){return e.container.getProvider(t)}function B(e,t,n=M){$(e,t).clearInstance(n)}
/**
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
 */
const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s.LL("app","Firebase",K);
/**
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
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
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
 */const H=L;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=U.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of V.values())a.addComponent(r);const c=new z(e,n,a);return U.set(i,c),c}function Q(e=M){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function J(e,t,n){var i;let s=null!==(i=F[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */
function Y(e){q(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),J(c,u,e),J(c,u,"esm2017"),J("fire-js","")}Y("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.a0c2345b.js.map