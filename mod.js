// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l=e()?function(t){var n,r,e;if(null==t)return i.call(t);r=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return e=i.call(t),n?t[c]=r:delete t[c],e}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function g(t){return"number"==typeof t}function v(t){var n,r="";for(n=0;n<t;n++)r+="0";return r}function b(t,n,r){var e=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(e=!0,t=t.substr(1)),t=r?t+v(i):v(i)+t,e&&(t="-"+t)),t}var d=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function h(t){var n,r,e;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(r=t.arg,e=parseInt(r,10),!isFinite(e)){if(!g(r))throw new Error("invalid integer. Value: "+r);e=0}return e<0&&("u"===t.specifier||10!==n)&&(e=4294967295+e+1),e<0?(r=(-e).toString(n),t.precision&&(r=b(r,t.precision,t.padRight)),r="-"+r):(r=e.toString(n),e||t.precision?t.precision&&(r=b(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===n&&(t.alternate&&(r="0x"+r),r=t.specifier===m.call(t.specifier)?m.call(r):d.call(r)),8===n&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function w(t){return"string"==typeof t}var S=Math.abs,j=String.prototype.toLowerCase,x=String.prototype.toUpperCase,O=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,T=/^(\d+)$/,A=/^(\d+)e/,k=/\.0$/,I=/\.0*e/,V=/(\..*[^0])0*e/;function P(t){var n,r,e=parseFloat(t.arg);if(!isFinite(e)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+r);e=t.arg}switch(t.specifier){case"e":case"E":r=e.toExponential(t.precision);break;case"f":case"F":r=e.toFixed(t.precision);break;case"g":case"G":S(e)<1e-4?((n=t.precision)>0&&(n-=1),r=e.toExponential(n)):r=e.toPrecision(t.precision),t.alternate||(r=O.call(r,V,"$1e"),r=O.call(r,I,"e"),r=O.call(r,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=O.call(r,E,"e+0$1"),r=O.call(r,_,"e-0$1"),t.alternate&&(r=O.call(r,T,"$1."),r=O.call(r,A,"$1.e")),e>=0&&t.sign&&(r=t.sign+r),r=t.specifier===x.call(t.specifier)?x.call(r):j.call(r)}function F(t){var n,r="";for(n=0;n<t;n++)r+=" ";return r}function L(t,n,r){var e=n-t.length;return e<0?t:t=r?t+F(e):F(e)+t}var N=String.fromCharCode,B=isNaN,C=Array.isArray;function M(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function R(t){var n,r,e,i,o,u,a,c,l;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(w(e=t[c]))u+=e;else{if(n=void 0!==e.precision,!(e=M(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),r=e.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=r.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,B(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,B(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=h(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!B(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=B(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=P(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=b(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=L(e.arg,e.width,e.padRight)),u+=e.arg||"",a+=1}return u}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function $(t){var n,r,e,i;for(r=[],i=0,e=Y.exec(t);e;)(n=t.slice(i,Y.lastIndex-e[0].length)).length&&r.push(n),r.push(W(e)),i=Y.lastIndex,e=Y.exec(t);return(n=t.slice(i)).length&&r.push(n),r}function X(t){return"string"==typeof t}function G(t){var n,r;if(!X(t))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[$(t)],r=1;r<arguments.length;r++)n.push(arguments[r]);return R.apply(null,n)}var H,Z=Object.prototype,D=Z.toString,U=Z.__defineGetter__,J=Z.__defineSetter__,z=Z.__lookupGetter__,q=Z.__lookupSetter__;H=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,n,r){var e,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(z.call(t,n)||q.call(t,n)?(e=t.__proto__,t.__proto__=Z,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(t,n,r.get),u&&J&&J.call(t,n,r.set),t};var K=H;function Q(t,n,r){K(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function tt(t){return"string"==typeof t}var nt=Object.prototype.toString;var rt="function"==typeof Symbol?Symbol:void 0,et="function"==typeof rt?rt.toStringTag:"";var it=e()?function(t){var n,r,e;if(null==t)return nt.call(t);r=t[et],n=u(t,et);try{t[et]=void 0}catch(n){return nt.call(t)}return e=nt.call(t),n?t[et]=r:delete t[et],e}:function(t){return nt.call(t)},ot=String.prototype.valueOf;var ut=e();function at(t){return"object"==typeof t&&(t instanceof String||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object String]"===it(t)))}function ct(t){return tt(t)||at(t)}function lt(t){return"number"==typeof t}Q(ct,"isPrimitive",tt),Q(ct,"isObject",at);var ft=Object.prototype.toString;var pt="function"==typeof Symbol?Symbol:void 0,st="function"==typeof pt?pt.toStringTag:"";var yt=e()?function(t){var n,r,e;if(null==t)return ft.call(t);r=t[st],n=u(t,st);try{t[st]=void 0}catch(n){return ft.call(t)}return e=ft.call(t),n?t[st]=r:delete t[st],e}:function(t){return ft.call(t)},gt=Number,vt=gt.prototype.toString;var bt=e();function dt(t){return"object"==typeof t&&(t instanceof gt||(bt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===yt(t)))}function mt(t){return lt(t)||dt(t)}function ht(t){return t!=t}function wt(t){return lt(t)&&ht(t)}function St(t){return dt(t)&&ht(t.valueOf())}function jt(t){return wt(t)||St(t)}Q(mt,"isPrimitive",lt),Q(mt,"isObject",dt),Q(jt,"isPrimitive",wt),Q(jt,"isObject",St);var xt=Number.POSITIVE_INFINITY,Ot=gt.NEGATIVE_INFINITY,Et=Math.floor;function _t(t){return Et(t)===t}function Tt(t){return t<xt&&t>Ot&&_t(t)}function At(t){return lt(t)&&Tt(t)}function kt(t){return dt(t)&&Tt(t.valueOf())}function It(t){return At(t)||kt(t)}Q(It,"isPrimitive",At),Q(It,"isObject",kt);var Vt=Object.prototype.propertyIsEnumerable;var Pt=!Vt.call("beep","0");function Ft(t,n){var r;return null!=t&&(!(r=Vt.call(t,n))&&Pt&&ct(t)?!wt(n=+n)&&At(n)&&n>=0&&n<t.length:r)}var Lt=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var Nt=p?f:function(t){return null!==t&&"object"==typeof t&&!Lt(t)&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Ft(t,"callee")},Bt=Array.prototype.slice;function Ct(t){return null!==t&&"object"==typeof t}function Mt(){}Q(Ct,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!Lt(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(Ct));var Rt=Ft(Mt,"prototype"),Yt=!Ft({toString:null},"toString");function Wt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=9007199254740991}function $t(t,n,r){var e,i;if(!Wt(t)&&!tt(t))throw new TypeError(G("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!At(r))throw new TypeError(G("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=e)return-1;i=r}else(i=e+r)<0&&(i=0)}else i=0;if(jt(n)){for(;i<e;i++)if(jt(t[i]))return i}else for(;i<e;i++)if(t[i]===n)return i;return-1}var Xt=/./;function Gt(t){return"boolean"==typeof t}var Ht=Object.prototype.toString;var Zt="function"==typeof Symbol?Symbol:void 0,Dt="function"==typeof Zt?Zt.toStringTag:"";var Ut=e()?function(t){var n,r,e;if(null==t)return Ht.call(t);r=t[Dt],n=u(t,Dt);try{t[Dt]=void 0}catch(n){return Ht.call(t)}return e=Ht.call(t),n?t[Dt]=r:delete t[Dt],e}:function(t){return Ht.call(t)},Jt=Boolean,zt=Boolean.prototype.toString;var qt=e();function Kt(t){return"object"==typeof t&&(t instanceof Jt||(qt?function(t){try{return zt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ut(t)))}function Qt(t){return Gt(t)||Kt(t)}function tn(){return new Function("return this;")()}Q(Qt,"isPrimitive",Gt),Q(Qt,"isObject",Kt);var nn="object"==typeof self?self:null,rn="object"==typeof window?window:null,en="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},on="object"==typeof en?en:null,un="object"==typeof globalThis?globalThis:null;var an=function(t){if(arguments.length){if(!Gt(t))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return tn()}if(un)return un;if(nn)return nn;if(rn)return rn;if(on)return on;throw new Error("unexpected error. Unable to resolve global object.")}(),cn=an.document&&an.document.childNodes,ln=Int8Array;var fn=Object.prototype.toString;var pn="function"==typeof Symbol?Symbol:void 0,sn="function"==typeof pn?pn.toStringTag:"";var yn=e()?function(t){var n,r,e;if(null==t)return fn.call(t);r=t[sn],n=u(t,sn);try{t[sn]=void 0}catch(n){return fn.call(t)}return e=fn.call(t),n?t[sn]=r:delete t[sn],e}:function(t){return fn.call(t)};function gn(){return/^\s*function\s*([^(]*)/i}var vn=/^\s*function\s*([^(]*)/i;Q(gn,"REGEXP",vn);var bn=Array.isArray?Array.isArray:function(t){return"[object Array]"===yn(t)};function dn(t){return null!==t&&"object"==typeof t}function mn(t){var n,r,e,i;if(("Object"===(r=yn(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=vn.exec(e.toString()))return n[1]}return dn(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}Q(dn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!bn(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(dn));var hn="function"==typeof Xt||"object"==typeof ln||"function"==typeof cn?function(t){return mn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?mn(t).toLowerCase():n};function wn(t){return t.constructor&&t.constructor.prototype===t}var Sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],jn="undefined"==typeof window?void 0:window;var xn=function(){var t;if("undefined"===hn(jn))return!1;for(t in jn)try{-1===$t(Sn,t)&&u(jn,t)&&null!==jn[t]&&"object"===hn(jn[t])&&wn(jn[t])}catch(t){return!0}return!1}(),On="undefined"!=typeof window;var En=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var _n=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Nt(n)?t(Bt.call(n)):t(n)}:t:function(t){var n,r,e,i,o,a,c;if(i=[],Nt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!Ct(t))return i;r=Rt&&e}for(o in t)r&&"prototype"===o||!u(t,o)||i.push(String(o));if(Yt)for(n=function(t){if(!1===On&&!xn)return wn(t);try{return wn(t)}catch(t){return!1}}(t),c=0;c<En.length;c++)a=En[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i},Tn=Object.prototype.toString;var An="function"==typeof Symbol?Symbol:void 0,kn="function"==typeof An?An.toStringTag:"";var In=e()?function(t){var n,r,e;if(null==t)return Tn.call(t);r=t[kn],n=u(t,kn);try{t[kn]=void 0}catch(n){return Tn.call(t)}return e=Tn.call(t),n?t[kn]=r:delete t[kn],e}:function(t){return Tn.call(t)};var Vn=Array.isArray?Array.isArray:function(t){return"[object Array]"===In(t)};function Pn(t){return"function"===hn(t)}var Fn=Object,Ln=Object.getPrototypeOf,Nn=Object.prototype.toString;var Bn="function"==typeof Symbol?Symbol:void 0,Cn="function"==typeof Bn?Bn.toStringTag:"";var Mn,Rn=e()?function(t){var n,r,e;if(null==t)return Nn.call(t);r=t[Cn],n=u(t,Cn);try{t[Cn]=void 0}catch(n){return Nn.call(t)}return e=Nn.call(t),n?t[Cn]=r:delete t[Cn],e}:function(t){return Nn.call(t)};Mn=Pn(Object.getPrototypeOf)?Ln:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===Rn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Yn=Mn;var Wn=Object.prototype.toString;var $n="function"==typeof Symbol?Symbol:void 0,Xn="function"==typeof $n?$n.toStringTag:"";var Gn=e()?function(t){var n,r,e;if(null==t)return Wn.call(t);r=t[Xn],n=u(t,Xn);try{t[Xn]=void 0}catch(n){return Wn.call(t)}return e=Wn.call(t),n?t[Xn]=r:delete t[Xn],e}:function(t){return Wn.call(t)},Hn=Object.prototype;function Zn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Vn(t)}(t)&&(n=function(t){return null==t?null:(t=Fn(t),Yn(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pn(n.constructor)&&"[object Function]"===Gn(n.constructor)&&u(n,"isPrototypeOf")&&Pn(n.isPrototypeOf)&&(n===Hn||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Dn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Un(){return Dn.slice()}var Jn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function zn(){var t;return 0===arguments.length?Jn.all.slice():(t=Jn[arguments[0]])?t.slice():[]}function qn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Kn(t,n,r){K(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Qn(t){return Object.keys(Object(t))}var tr=void 0!==Object.keys,nr=Object.prototype.toString;var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var ir=e()?function(t){var n,r,e;if(null==t)return nr.call(t);r=t[er],n=u(t,er);try{t[er]=void 0}catch(n){return nr.call(t)}return e=nr.call(t),n?t[er]=r:delete t[er],e}:function(t){return nr.call(t)};function or(t){return"[object Arguments]"===ir(t)}var ur=function(){return or(arguments)}();var ar=Array.isArray?Array.isArray:function(t){return"[object Array]"===ir(t)};var cr=ur?or:function(t){return null!==t&&"object"==typeof t&&!ar(t)&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Ft(t,"callee")},lr=Array.prototype.slice;function fr(t){return null!==t&&"object"==typeof t}Q(fr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!ar(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(fr));var pr=Ft(Mt,"prototype"),sr=!Ft({toString:null},"toString");function yr(t){return t.constructor&&t.constructor.prototype===t}var gr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],vr="undefined"==typeof window?void 0:window;var br=function(){var t;if("undefined"===hn(vr))return!1;for(t in vr)try{-1===$t(gr,t)&&u(vr,t)&&null!==vr[t]&&"object"===hn(vr[t])&&yr(vr[t])}catch(t){return!0}return!1}(),dr="undefined"!=typeof window;var mr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var hr=tr?function(){return 2!==(Qn(arguments)||"").length}(1,2)?function(t){return cr(t)?Qn(lr.call(t)):Qn(t)}:Qn:function(t){var n,r,e,i,o,a,c;if(i=[],cr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!fr(t))return i;r=pr&&e}for(o in t)r&&"prototype"===o||!u(t,o)||i.push(String(o));if(sr)for(n=function(t){if(!1===dr&&!br)return yr(t);try{return yr(t)}catch(t){return!1}}(t),c=0;c<mr.length;c++)a=mr[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};Q(zn,"enum",qn),function(t,n){var r,e,i;for(r=hr(n),i=0;i<r.length;i++)Kn(t,e=r[i],n[e])}(zn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var wr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Sr(){return{bool:wr.bool,int8:wr.int8,uint8:wr.uint8,uint8c:wr.uint8c,int16:wr.int16,uint16:wr.uint16,int32:wr.int32,uint32:wr.uint32,int64:wr.int64,uint64:wr.uint64,float32:wr.float32,float64:wr.float64,complex64:wr.complex64,complex128:wr.complex128,binary:wr.binary,generic:wr.generic,notype:wr.notype,userdefined_type:wr.userdefined_type}}Q(Un,"enum",Sr),function(t,n){var r,e,i;for(r=hr(n),i=0;i<r.length;i++)Kn(t,e=r[i],n[e])}(Un,Sr());var jr=function(t,n){var r,e,i,o,a,c,l,f=!0;if(!Ct(t))throw new TypeError(G("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!Zn(n))throw new TypeError(G("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!Gt(f=n.duplicates))throw new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(r=_n(t)).length,a={},f)for(l=0;l<e;l++)u(a,o=t[i=r[l]])?(c=a[o],Lt(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<e;l++)a[t[i=r[l]]]=i;return a}(Sr(),{duplicates:!1});var xr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Or(){return xr.slice()}var Er={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function _r(){var t;return 0===arguments.length?Er.all.slice():(t=Er[arguments[0]])?t.slice():[]}function Tr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ar(t,n,r){K(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function kr(t){return Object.keys(Object(t))}var Ir=void 0!==Object.keys,Vr=Object.prototype.toString;var Pr="function"==typeof Symbol?Symbol:void 0,Fr="function"==typeof Pr?Pr.toStringTag:"";var Lr=e()?function(t){var n,r,e;if(null==t)return Vr.call(t);r=t[Fr],n=u(t,Fr);try{t[Fr]=void 0}catch(n){return Vr.call(t)}return e=Vr.call(t),n?t[Fr]=r:delete t[Fr],e}:function(t){return Vr.call(t)};function Nr(t){return"[object Arguments]"===Lr(t)}var Br=function(){return Nr(arguments)}();var Cr=Array.isArray?Array.isArray:function(t){return"[object Array]"===Lr(t)};var Mr=Br?Nr:function(t){return null!==t&&"object"==typeof t&&!Cr(t)&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Ft(t,"callee")},Rr=Array.prototype.slice;function Yr(t){return null!==t&&"object"==typeof t}Q(Yr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var r,e;if(!Cr(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(Yr));var Wr=Ft(Mt,"prototype"),$r=!Ft({toString:null},"toString");function Xr(t){return t.constructor&&t.constructor.prototype===t}var Gr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Hr="undefined"==typeof window?void 0:window;var Zr=function(){var t;if("undefined"===hn(Hr))return!1;for(t in Hr)try{-1===$t(Gr,t)&&u(Hr,t)&&null!==Hr[t]&&"object"===hn(Hr[t])&&Xr(Hr[t])}catch(t){return!0}return!1}(),Dr="undefined"!=typeof window;var Ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Jr=Ir?function(){return 2!==(kr(arguments)||"").length}(1,2)?function(t){return Mr(t)?kr(Rr.call(t)):kr(t)}:kr:function(t){var n,r,e,i,o,a,c;if(i=[],Mr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!Yr(t))return i;r=Wr&&e}for(o in t)r&&"prototype"===o||!u(t,o)||i.push(String(o));if($r)for(n=function(t){if(!1===Dr&&!Zr)return Xr(t);try{return Xr(t)}catch(t){return!1}}(t),c=0;c<Ur.length;c++)a=Ur[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};Q(_r,"enum",Tr),function(t,n){var r,e,i;for(r=Jr(n),i=0;i<r.length;i++)Ar(t,e=r[i],n[e])}(_r,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var zr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function qr(){return{bool:zr.bool,int8:zr.int8,uint8:zr.uint8,uint8c:zr.uint8c,int16:zr.int16,uint16:zr.uint16,int32:zr.int32,uint32:zr.uint32,int64:zr.int64,uint64:zr.uint64,float32:zr.float32,float64:zr.float64,complex64:zr.complex64,complex128:zr.complex128,binary:zr.binary,generic:zr.generic,notype:zr.notype,userdefined_type:zr.userdefined_type}}Q(Or,"enum",qr),function(t,n){var r,e,i;for(r=Jr(n),i=0;i<r.length;i++)Ar(t,e=r[i],n[e])}(Or,qr());var Kr=qr();function Qr(t){var n=typeof t;return"string"===n?function(t){var n=Kr[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=jr[t];return"string"==typeof n?n:null}(t):null}var te="function"==typeof Math.fround?Math.fround:null,ne=Object.prototype.toString;var re="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof re?re.toStringTag:"";var ie=e()?function(t){var n,r,e;if(null==t)return ne.call(t);r=t[ee],n=u(t,ee);try{t[ee]=void 0}catch(n){return ne.call(t)}return e=ne.call(t),n?t[ee]=r:delete t[ee],e}:function(t){return ne.call(t)},oe="function"==typeof Float32Array;var ue="function"==typeof Float32Array?Float32Array:null;var ae,ce="function"==typeof Float32Array?Float32Array:void 0;ae=function(){var t,n,r;if("function"!=typeof ue)return!1;try{n=new ue([1,3.14,-3.14,5e40]),r=n,t=(oe&&r instanceof Float32Array||"[object Float32Array]"===ie(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===xt}catch(n){t=!1}return t}()?ce:function(){throw new Error("not implemented")};var le=new ae(1);var fe="function"==typeof te?te:function(t){return le[0]=t,le[0]};function pe(t,n){if(!(this instanceof pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lt(t))throw new TypeError(G("invalid argument. Real component must be a number. Value: `%s`.",t));if(!lt(n))throw new TypeError(G("invalid argument. Imaginary component must be a number. Value: `%s`.",n));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:fe(t)}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:fe(n)}),this}function se(t,n){if(!(this instanceof se))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lt(t))throw new TypeError(G("invalid argument. Real component must be a number. Value: `%s`.",t));if(!lt(n))throw new TypeError(G("invalid argument. Imaginary component must be a number. Value: `%s`.",n));return K(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),K(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function ye(t){return At(t)&&t>=0}function ge(t){return kt(t)&&t.valueOf()>=0}function ve(t){return ye(t)||ge(t)}Q(pe,"BYTES_PER_ELEMENT",4),Q(pe.prototype,"BYTES_PER_ELEMENT",4),Q(pe.prototype,"byteLength",8),Q(pe.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Q(pe.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),Q(se,"BYTES_PER_ELEMENT",8),Q(se.prototype,"BYTES_PER_ELEMENT",8),Q(se.prototype,"byteLength",16),Q(se.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Q(se.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),Q(ve,"isPrimitive",ye),Q(ve,"isObject",ge);var be="number";function de(t,n,r){var e;if(!Pn(t))throw new TypeError(G("invalid argument. First argument must be a function. Value: `%s`.",t));if(!ye(n))throw new TypeError(G("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(!Pn(r))throw new TypeError(G("invalid argument. Third argument must be a constructor function. Value: `%s`.",r));return e=[function(){var n=t();if(typeof n===be)return new r(n,0);return n},function(n){var e=t(n);if(typeof e===be)return new r(e,0);return e},function(n,e){var i=t(n,e);if(typeof i===be)return new r(i,0);return i},function(n,e,i){var o=t(n,e,i);if(typeof o===be)return new r(o,0);return o},function(n,e,i,o){var u=t(n,e,i,o);if(typeof u===be)return new r(u,0);return u},function(n,e,i,o,u){var a=t(n,e,i,o,u);if(typeof a===be)return new r(a,0);return a}],n<=5?e[n]:function(){var n,e,i;for(n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);if(typeof(e=t.apply(null,n))===be)return new r(e,0);return e}}var me="complex64",he="complex128",we={complex64:pe,complex128:se};function Se(t,n,r){return r===he?n===me||n===he?t[he]:de(t.default,1,we[r]):r===me?n===me?t[me]:n===he?t[he]:de(t.default,1,we[r]):"generic"===r?n===he?t[he]:n===me?t[me]:t.default:t.default}function je(t,n){var r,e,i,o;for(r=[],o=0;o<n.length;o+=2)e=Qr(n[o]),i=Qr(n[o+1]),r.push(Se(t,e,i));return r}export{je as default};
//# sourceMappingURL=mod.js.map
