// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(t){return"number"==typeof t}function b(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function h(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+b(i):b(i)+t,n&&(t="-"+t)),t}var m=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function v(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!y(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=h(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=h(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===d.call(t.specifier)?d.call(r):m.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var w=Math.abs,E=String.prototype.toLowerCase,j=String.prototype.toUpperCase,_=String.prototype.replace,x=/e\+(\d)$/,S=/e-(\d)$/,O=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":w(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=_.call(r,A,"$1e"),r=_.call(r,V,"e"),r=_.call(r,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=_.call(r,x,"e+0$1"),r=_.call(r,S,"e-0$1"),t.alternate&&(r=_.call(r,O,"$1."),r=_.call(r,T,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===j.call(t.specifier)?j.call(r):E.call(r)}function I(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var P=String.fromCharCode,N=isNaN,L=Array.isArray;function C(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function R(t){var e,r,n,i,o,a,u,c,l,f,p,s,g;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):P(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,p=n.width,s=n.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+I(g):I(g)+f)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function $(t){var e,r,n,i;for(r=[],i=0,n=B.exec(t);n;)(e=t.slice(i,B.lastIndex-n[0].length)).length&&r.push(e),r.push(M(n)),i=B.lastIndex,n=B.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function Y(t){var e,r;if("string"!=typeof t)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[$(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return R.apply(null,e)}var G,W=Object.prototype,X=W.toString,Z=W.__defineGetter__,U=W.__defineSetter__,H=W.__lookupGetter__,J=W.__lookupSetter__;G=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===X.call(r))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(H.call(t,e)||J.call(t,e)?(n=t.__proto__,t.__proto__=W,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(t,e,r.get),a&&U&&U.call(t,e,r.set),t};var z=G;function D(t,e,r){z(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function q(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=n();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function et(t){return q(t)||tt(t)}function rt(t){return"number"==typeof t}D(et,"isPrimitive",q),D(et,"isObject",tt);var nt=Number,it=nt.prototype.toString;var ot=n();function at(t){return"object"==typeof t&&(t instanceof nt||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ut(t){return rt(t)||at(t)}function ct(t){return t!=t}function lt(t){return rt(t)&&ct(t)}function ft(t){return at(t)&&ct(t.valueOf())}function pt(t){return lt(t)||ft(t)}D(ut,"isPrimitive",rt),D(ut,"isObject",at),D(pt,"isPrimitive",lt),D(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,gt=nt.NEGATIVE_INFINITY,yt=Math.floor;function bt(t){return yt(t)===t}function ht(t){return t<st&&t>gt&&bt(t)}function mt(t){return rt(t)&&ht(t)}function dt(t){return at(t)&&ht(t.valueOf())}function vt(t){return mt(t)||dt(t)}D(vt,"isPrimitive",mt),D(vt,"isObject",dt);var wt=Object.prototype.propertyIsEnumerable;var Et=!wt.call("beep","0");function jt(t,e){var r;return null!=t&&(!(r=wt.call(t,e))&&Et&&et(t)?!lt(e=+e)&&mt(e)&&e>=0&&e<t.length:r)}var _t=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var xt=p?f:function(t){return null!==t&&"object"==typeof t&&!_t(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!jt(t,"callee")},St=Array.prototype.slice;function Ot(t){return null!==t&&"object"==typeof t}D(Ot,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!_t(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Ot));var Tt=jt((function(){}),"prototype"),kt=!jt({toString:null},"toString"),Vt=9007199254740991;function At(t,e,r){var n,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=Vt||q(t)))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!mt(r))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(pt(e)){for(;i<n;i++)if(pt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var Ft=/./;function It(t){return"boolean"==typeof t}var Pt=Boolean,Nt=Boolean.prototype.toString;var Lt=n();function Ct(t){return"object"==typeof t&&(t instanceof Pt||(Lt?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Rt(t){return It(t)||Ct(t)}D(Rt,"isPrimitive",It),D(Rt,"isObject",Ct);var Bt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,$t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof $t?$t:null,Gt="object"==typeof globalThis?globalThis:null;var Wt=function(t){if(arguments.length){if(!It(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Gt)return Gt;if(Bt)return Bt;if(Mt)return Mt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),Xt=Wt.document&&Wt.document.childNodes,Zt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function Jt(t){var e,r,n,i;if(("Object"===(r=l(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ht.exec(n.toString()))return e[1]}return Ot(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}D(Ut,"REGEXP",Ht);var zt="function"==typeof Ft||"object"==typeof Zt||"function"==typeof Xt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Jt(t).toLowerCase():e};function Dt(t){return t.constructor&&t.constructor.prototype===t}var qt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===zt(Kt))return!1;for(t in Kt)try{-1===At(qt,t)&&a(Kt,t)&&null!==Kt[t]&&"object"===zt(Kt[t])&&Dt(Kt[t])}catch(t){return!0}return!1}(),te="undefined"!=typeof window;var ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var re=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return xt(e)?t(St.call(e)):t(e)}:t:function(t){var e,r,n,i,o,u,c;if(i=[],xt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Ot(t))return i;r=Tt&&n}for(o in t)r&&"prototype"===o||!a(t,o)||i.push(String(o));if(kt)for(e=function(t){if(!1===te&&!Qt)return Dt(t);try{return Dt(t)}catch(t){return!1}}(t),c=0;c<ee.length;c++)u=ee[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i};function ne(t){return"function"===zt(t)}var ie,oe=Object,ae=Object.getPrototypeOf;ie=ne(Object.getPrototypeOf)?ae:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ue=ie;var ce=Object.prototype;function le(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!_t(t)}(t)&&(e=function(t){return null==t?null:(t=oe(t),ue(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&ne(e.constructor)&&"[object Function]"===l(e.constructor)&&a(e,"isPrototypeOf")&&ne(e.isPrototypeOf)&&(e===ce||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}var fe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function pe(){return fe.slice()}var se={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ge(){var t;return 0===arguments.length?se.all.slice():(t=se[arguments[0]])?t.slice():[]}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function be(t,e,r){z(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}D(ge,"enum",ye),function(t,e){var r,n,i;for(r=re(e),i=0;i<r.length;i++)be(t,n=r[i],e[n])}(ge,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var he={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function me(){return{bool:he.bool,int8:he.int8,uint8:he.uint8,uint8c:he.uint8c,int16:he.int16,uint16:he.uint16,int32:he.int32,uint32:he.uint32,int64:he.int64,uint64:he.uint64,float32:he.float32,float64:he.float64,complex64:he.complex64,complex128:he.complex128,binary:he.binary,generic:he.generic,notype:he.notype,userdefined_type:he.userdefined_type}}D(pe,"enum",me),function(t,e){var r,n,i;for(r=re(e),i=0;i<r.length;i++)be(t,n=r[i],e[n])}(pe,me());var de=function(t,e){var r,n,i,o,u,c,l,f=!0;if(!Ot(t))throw new TypeError(Y("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!le(e))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!It(f=e.duplicates))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(n=(r=re(t)).length,u={},f)for(l=0;l<n;l++)a(u,o=t[i=r[l]])?(c=u[o],_t(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<n;l++)u[t[i=r[l]]]=i;return u}(me(),{duplicates:!1});var ve=me();function we(t){var e=typeof t;return"string"===e?function(t){var e=ve[t];return"number"==typeof e?e:null}(t)?t:null:"number"===e?function(t){var e=de[t];return"string"==typeof e?e:null}(t):null}var Ee="function"==typeof Math.fround?Math.fround:null,je="function"==typeof Float32Array;var _e="function"==typeof Float32Array?Float32Array:null;var xe,Se="function"==typeof Float32Array?Float32Array:void 0;xe=function(){var t,e,r;if("function"!=typeof _e)return!1;try{e=new _e([1,3.14,-3.14,5e40]),r=e,t=(je&&r instanceof Float32Array||"[object Float32Array]"===l(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===st}catch(e){t=!1}return t}()?Se:function(){throw new Error("not implemented")};var Oe=new xe(1);var Te="function"==typeof Ee?Ee:function(t){return Oe[0]=t,Oe[0]};function ke(t,e){if(!(this instanceof ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!rt(t))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",t));if(!rt(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Te(t)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Te(e)}),this}function Ve(t,e){if(!(this instanceof Ve))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!rt(t))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",t));if(!rt(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function Ae(t){return mt(t)&&t>=0}function Fe(t){return dt(t)&&t.valueOf()>=0}function Ie(t){return Ae(t)||Fe(t)}D(ke,"BYTES_PER_ELEMENT",4),D(ke.prototype,"BYTES_PER_ELEMENT",4),D(ke.prototype,"byteLength",8),D(ke.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),D(ke.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),D(Ve,"BYTES_PER_ELEMENT",8),D(Ve.prototype,"BYTES_PER_ELEMENT",8),D(Ve.prototype,"byteLength",16),D(Ve.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),D(Ve.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),D(Ie,"isPrimitive",Ae),D(Ie,"isObject",Fe);var Pe="number";function Ne(t,e,r){var n;if(!ne(t))throw new TypeError(Y("invalid argument. First argument must be a function. Value: `%s`.",t));if(!Ae(e))throw new TypeError(Y("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!ne(r))throw new TypeError(Y("invalid argument. Third argument must be a constructor function. Value: `%s`.",r));return n=[function(){var e=t();if(typeof e===Pe)return new r(e,0);return e},function(e){var n=t(e);if(typeof n===Pe)return new r(n,0);return n},function(e,n){var i=t(e,n);if(typeof i===Pe)return new r(i,0);return i},function(e,n,i){var o=t(e,n,i);if(typeof o===Pe)return new r(o,0);return o},function(e,n,i,o){var a=t(e,n,i,o);if(typeof a===Pe)return new r(a,0);return a},function(e,n,i,o,a){var u=t(e,n,i,o,a);if(typeof u===Pe)return new r(u,0);return u}],e<=5?n[e]:function(){var e,n,i;for(e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);if(typeof(n=t.apply(null,e))===Pe)return new r(n,0);return n}}var Le="complex64",Ce="complex128",Re={complex64:ke,complex128:Ve};function Be(t,e,r){return r===Ce?e===Le||e===Ce?t[Ce]:Ne(t.default,1,Re[r]):r===Le?e===Le?t[Le]:e===Ce?t[Ce]:Ne(t.default,1,Re[r]):"generic"===r?e===Ce?t[Ce]:e===Le?t[Le]:t.default:t.default}function Me(t,e){var r,n,i,o;for(r=[],o=0;o<e.length;o+=2)n=we(e[o]),i=we(e[o+1]),r.push(Be(t,n,i));return r}export{Me as default};
//# sourceMappingURL=mod.js.map
