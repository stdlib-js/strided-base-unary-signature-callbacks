// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[l],n=u(t,l);try{t[l]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[l]=e:delete t[l],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}a=function(){return p(arguments)}();var s=a,y="function"==typeof Object.defineProperty?Object.defineProperty:null,g=Object.defineProperty;function b(t){return"number"==typeof t}function d(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+d(i):d(i)+t,r&&(t="-"+t)),t}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!b(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===v.call(t.specifier)?v.call(e):h.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function S(t){return"string"==typeof t}var j=Math.abs,x=String.prototype.toLowerCase,O=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,A=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,V=/\.0*e/,P=/(\..*[^0])0*e/;function F(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":j(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=E.call(e,P,"$1e"),e=E.call(e,V,"e"),e=E.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=E.call(e,_,"e+0$1"),e=E.call(e,T,"e-0$1"),t.alternate&&(e=E.call(e,A,"$1."),e=E.call(e,k,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===O.call(t.specifier)?O.call(e):x.call(e)}function L(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function N(t,n,e){var r=n-t.length;return r<0?t:t=e?t+L(r):L(r)+t}var B=String.fromCharCode,C=isNaN,M=Array.isArray;function R(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function Y(t){var n,e,r,i,o,u,a,c,l;if(!M(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(S(r=t[c]))u+=r;else{if(n=void 0!==r.precision,!(r=R(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,C(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=F(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=N(r.arg,r.width,r.padRight)),u+=r.arg||"",a+=1}return u}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function X(t){var n,e,r,i;for(e=[],i=0,r=W.exec(t);r;)(n=t.slice(i,W.lastIndex-r[0].length)).length&&e.push(n),e.push($(r)),i=W.lastIndex,r=W.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function G(t){return"string"==typeof t}function H(t){var n,e;if(!G(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[X(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return Y.apply(null,n)}var Z,D=Object.prototype,U=D.toString,J=D.__defineGetter__,z=D.__defineSetter__,q=D.__lookupGetter__,K=D.__lookupSetter__;Z=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(q.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=D,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(t,n,e.get),u&&z&&z.call(t,n,e.set),t};var Q=Z;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=Object.prototype.toString,rt="function"==typeof Symbol?Symbol:void 0,it="function"==typeof rt?rt.toStringTag:"",ot=r()?function(t){var n,e,r;if(null==t)return et.call(t);e=t[it],n=u(t,it);try{t[it]=void 0}catch(n){return et.call(t)}return r=et.call(t),n?t[it]=e:delete t[it],r}:function(t){return et.call(t)},ut=String.prototype.valueOf,at=r();function ct(t){return"object"==typeof t&&(t instanceof String||(at?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===ot(t)))}function lt(t){return nt(t)||ct(t)}function ft(t){return"number"==typeof t}tt(lt,"isPrimitive",nt),tt(lt,"isObject",ct);var pt=Object.prototype.toString,st="function"==typeof Symbol?Symbol:void 0,yt="function"==typeof st?st.toStringTag:"",gt=r()?function(t){var n,e,r;if(null==t)return pt.call(t);e=t[yt],n=u(t,yt);try{t[yt]=void 0}catch(n){return pt.call(t)}return r=pt.call(t),n?t[yt]=e:delete t[yt],r}:function(t){return pt.call(t)},bt=Number,dt=bt.prototype.toString,mt=r();function ht(t){return"object"==typeof t&&(t instanceof bt||(mt?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===gt(t)))}function vt(t){return ft(t)||ht(t)}function wt(t){return t!=t}function St(t){return ft(t)&&wt(t)}function jt(t){return ht(t)&&wt(t.valueOf())}function xt(t){return St(t)||jt(t)}tt(vt,"isPrimitive",ft),tt(vt,"isObject",ht),tt(xt,"isPrimitive",St),tt(xt,"isObject",jt);var Ot=Number.POSITIVE_INFINITY,Et=bt.NEGATIVE_INFINITY,_t=Math.floor;function Tt(t){return _t(t)===t}function At(t){return t<Ot&&t>Et&&Tt(t)}function kt(t){return ft(t)&&At(t)}function It(t){return ht(t)&&At(t.valueOf())}function Vt(t){return kt(t)||It(t)}tt(Vt,"isPrimitive",kt),tt(Vt,"isObject",It);var Pt=Object.prototype.propertyIsEnumerable,Ft=!Pt.call("beep","0");function Lt(t,n){var e;return null!=t&&(!(e=Pt.call(t,n))&&Ft&&lt(t)?!St(n=+n)&&kt(n)&&n>=0&&n<t.length:e)}var Nt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)},Bt=4294967295,Ct=s?p:function(t){return null!==t&&"object"==typeof t&&!Nt(t)&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=Bt&&u(t,"callee")&&!Lt(t,"callee")},Mt=Array.prototype.slice;function Rt(t){return null!==t&&"object"==typeof t}function Yt(){}tt(Rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Nt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Rt));var Wt=Lt(Yt,"prototype"),$t=!Lt({toString:null},"toString");function Xt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Gt(t,n,e){var r,i;if(!Xt(t)&&!nt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!kt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(xt(n)){for(;i<r;i++)if(xt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Ht=/./;function Zt(t){return"boolean"==typeof t}var Dt=Object.prototype.toString,Ut="function"==typeof Symbol?Symbol:void 0,Jt="function"==typeof Ut?Ut.toStringTag:"",zt=r()?function(t){var n,e,r;if(null==t)return Dt.call(t);e=t[Jt],n=u(t,Jt);try{t[Jt]=void 0}catch(n){return Dt.call(t)}return r=Dt.call(t),n?t[Jt]=e:delete t[Jt],r}:function(t){return Dt.call(t)},qt=Boolean,Kt=Boolean.prototype.toString,Qt=r();function tn(t){return"object"==typeof t&&(t instanceof qt||(Qt?function(t){try{return Kt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===zt(t)))}function nn(t){return Zt(t)||tn(t)}function en(){return new Function("return this;")()}tt(nn,"isPrimitive",Zt),tt(nn,"isObject",tn);var rn="object"==typeof self?self:null,on="object"==typeof window?window:null,un="object"==typeof globalThis?globalThis:null,an=function(t){if(arguments.length){if(!Zt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return en()}if(un)return un;if(rn)return rn;if(on)return on;throw new Error("unexpected error. Unable to resolve global object.")}(),cn=an.document&&an.document.childNodes,ln=Int8Array,fn=Object.prototype.toString,pn="function"==typeof Symbol?Symbol:void 0,sn="function"==typeof pn?pn.toStringTag:"",yn=r()?function(t){var n,e,r;if(null==t)return fn.call(t);e=t[sn],n=u(t,sn);try{t[sn]=void 0}catch(n){return fn.call(t)}return r=fn.call(t),n?t[sn]=e:delete t[sn],r}:function(t){return fn.call(t)};function gn(){return/^\s*function\s*([^(]*)/i}var bn=/^\s*function\s*([^(]*)/i;tt(gn,"REGEXP",bn);var dn=Array.isArray?Array.isArray:function(t){return"[object Array]"===yn(t)};function mn(t){return null!==t&&"object"==typeof t}function hn(t){var n,e,r,i;if(("Object"===(e=yn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=bn.exec(r.toString()))return n[1]}return mn(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}tt(mn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!dn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(mn));var vn="function"==typeof Ht||"object"==typeof ln||"function"==typeof cn?function(t){return hn(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"==(n=typeof t)?hn(t).toLowerCase():n};function wn(t){return t.constructor&&t.constructor.prototype===t}var Sn,jn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xn="undefined"==typeof window?void 0:window,On=function(){var t;if("undefined"===vn(xn))return!1;for(t in xn)try{-1===Gt(jn,t)&&u(xn,t)&&null!==xn[t]&&"object"===vn(xn[t])&&wn(xn[t])}catch(t){return!0}return!1}(),En="undefined"!=typeof window,_n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Sn=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Ct(n)?t(Mt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,a,c;if(i=[],Ct(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(0==(r="function"==typeof t)&&!Rt(t))return i;e=Wt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if($t)for(n=function(t){if(!1===En&&!On)return wn(t);try{return wn(t)}catch(t){return!1}}(t),c=0;c<_n.length;c++)a=_n[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var Tn=Sn,An=Object.prototype.toString,kn="function"==typeof Symbol?Symbol:void 0,In="function"==typeof kn?kn.toStringTag:"",Vn=r()?function(t){var n,e,r;if(null==t)return An.call(t);e=t[In],n=u(t,In);try{t[In]=void 0}catch(n){return An.call(t)}return r=An.call(t),n?t[In]=e:delete t[In],r}:function(t){return An.call(t)},Pn=Array.isArray?Array.isArray:function(t){return"[object Array]"===Vn(t)};function Fn(t){return"function"===vn(t)}var Ln,Nn=Object,Bn=Object.getPrototypeOf,Cn=Object.prototype.toString,Mn="function"==typeof Symbol?Symbol:void 0,Rn="function"==typeof Mn?Mn.toStringTag:"",Yn=r()?function(t){var n,e,r;if(null==t)return Cn.call(t);e=t[Rn],n=u(t,Rn);try{t[Rn]=void 0}catch(n){return Cn.call(t)}return r=Cn.call(t),n?t[Rn]=e:delete t[Rn],r}:function(t){return Cn.call(t)};Ln=Fn(Object.getPrototypeOf)?Bn:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===Yn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Wn=Ln,$n=Object.prototype.toString,Xn="function"==typeof Symbol?Symbol:void 0,Gn="function"==typeof Xn?Xn.toStringTag:"",Hn=r()?function(t){var n,e,r;if(null==t)return $n.call(t);e=t[Gn],n=u(t,Gn);try{t[Gn]=void 0}catch(n){return $n.call(t)}return r=$n.call(t),n?t[Gn]=e:delete t[Gn],r}:function(t){return $n.call(t)},Zn=Object.prototype;function Dn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Pn(t)}(t)&&(n=function(t){return null==t?null:(t=Nn(t),Wn(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Fn(n.constructor)&&"[object Function]"===Hn(n.constructor)&&u(n,"isPrototypeOf")&&Fn(n.isPrototypeOf)&&(n===Zn||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Un=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Jn(){return Un.slice()}var zn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function qn(){var t;return 0===arguments.length?zn.all.slice():(t=zn[arguments[0]])?t.slice():[]}function Kn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Qn(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function te(t){return Object.keys(Object(t))}var ne,ee=void 0!==Object.keys,re=Object.prototype.toString,ie="function"==typeof Symbol?Symbol:void 0,oe="function"==typeof ie?ie.toStringTag:"",ue=r()?function(t){var n,e,r;if(null==t)return re.call(t);e=t[oe],n=u(t,oe);try{t[oe]=void 0}catch(n){return re.call(t)}return r=re.call(t),n?t[oe]=e:delete t[oe],r}:function(t){return re.call(t)};function ae(t){return"[object Arguments]"===ue(t)}ne=function(){return ae(arguments)}();var ce=ne,le=Array.isArray?Array.isArray:function(t){return"[object Array]"===ue(t)},fe=ce?ae:function(t){return null!==t&&"object"==typeof t&&!le(t)&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=Bt&&u(t,"callee")&&!Lt(t,"callee")},pe=Array.prototype.slice;function se(t){return null!==t&&"object"==typeof t}tt(se,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!le(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(se));var ye=Lt(Yt,"prototype"),ge=!Lt({toString:null},"toString");function be(t){return t.constructor&&t.constructor.prototype===t}var de,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he="undefined"==typeof window?void 0:window,ve=function(){var t;if("undefined"===vn(he))return!1;for(t in he)try{-1===Gt(me,t)&&u(he,t)&&null!==he[t]&&"object"===vn(he[t])&&be(he[t])}catch(t){return!0}return!1}(),we="undefined"!=typeof window,Se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=ee?function(){return 2!==(te(arguments)||"").length}(1,2)?function(t){return fe(t)?te(pe.call(t)):te(t)}:te:function(t){var n,e,r,i,o,a,c;if(i=[],fe(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(0==(r="function"==typeof t)&&!se(t))return i;e=ye&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(ge)for(n=function(t){if(!1===we&&!ve)return be(t);try{return be(t)}catch(t){return!1}}(t),c=0;c<Se.length;c++)a=Se[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var je=de;tt(qn,"enum",Kn),function(t,n){var e,r,i;for(e=je(n),i=0;i<e.length;i++)Qn(t,r=e[i],n[r])}(qn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var xe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Oe(){return{bool:xe.bool,int8:xe.int8,uint8:xe.uint8,uint8c:xe.uint8c,int16:xe.int16,uint16:xe.uint16,int32:xe.int32,uint32:xe.uint32,int64:xe.int64,uint64:xe.uint64,float32:xe.float32,float64:xe.float64,complex64:xe.complex64,complex128:xe.complex128,binary:xe.binary,generic:xe.generic,notype:xe.notype,userdefined_type:xe.userdefined_type}}tt(Jn,"enum",Oe),function(t,n){var e,r,i;for(e=je(n),i=0;i<e.length;i++)Qn(t,r=e[i],n[r])}(Jn,Oe());var Ee=function(t,n){var e,r,i,o,a,c,l,f=!0;if(!Rt(t))throw new TypeError(H("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!Dn(n))throw new TypeError(H("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!Zt(f=n.duplicates))throw new TypeError(H("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=Tn(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=e[l]])?(c=a[o],Nt(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=e[l]]]=i;return a}(Oe(),{duplicates:!1}),_e=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Te(){return _e.slice()}var Ae={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ke(){var t;return 0===arguments.length?Ae.all.slice():(t=Ae[arguments[0]])?t.slice():[]}function Ie(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ve(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Pe(t){return Object.keys(Object(t))}var Fe,Le=void 0!==Object.keys,Ne=Object.prototype.toString,Be="function"==typeof Symbol?Symbol:void 0,Ce="function"==typeof Be?Be.toStringTag:"",Me=r()?function(t){var n,e,r;if(null==t)return Ne.call(t);e=t[Ce],n=u(t,Ce);try{t[Ce]=void 0}catch(n){return Ne.call(t)}return r=Ne.call(t),n?t[Ce]=e:delete t[Ce],r}:function(t){return Ne.call(t)};function Re(t){return"[object Arguments]"===Me(t)}Fe=function(){return Re(arguments)}();var Ye=Fe,We=Array.isArray?Array.isArray:function(t){return"[object Array]"===Me(t)},$e=Ye?Re:function(t){return null!==t&&"object"==typeof t&&!We(t)&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=Bt&&u(t,"callee")&&!Lt(t,"callee")},Xe=Array.prototype.slice;function Ge(t){return null!==t&&"object"==typeof t}tt(Ge,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!We(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Ge));var He=Lt(Yt,"prototype"),Ze=!Lt({toString:null},"toString");function De(t){return t.constructor&&t.constructor.prototype===t}var Ue,Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ze="undefined"==typeof window?void 0:window,qe=function(){var t;if("undefined"===vn(ze))return!1;for(t in ze)try{-1===Gt(Je,t)&&u(ze,t)&&null!==ze[t]&&"object"===vn(ze[t])&&De(ze[t])}catch(t){return!0}return!1}(),Ke="undefined"!=typeof window,Qe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ue=Le?function(){return 2!==(Pe(arguments)||"").length}(1,2)?function(t){return $e(t)?Pe(Xe.call(t)):Pe(t)}:Pe:function(t){var n,e,r,i,o,a,c;if(i=[],$e(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(0==(r="function"==typeof t)&&!Ge(t))return i;e=He&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(Ze)for(n=function(t){if(!1===Ke&&!qe)return De(t);try{return De(t)}catch(t){return!1}}(t),c=0;c<Qe.length;c++)a=Qe[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var tr=Ue;tt(ke,"enum",Ie),function(t,n){var e,r,i;for(e=tr(n),i=0;i<e.length;i++)Ve(t,r=e[i],n[r])}(ke,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var nr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function er(){return{bool:nr.bool,int8:nr.int8,uint8:nr.uint8,uint8c:nr.uint8c,int16:nr.int16,uint16:nr.uint16,int32:nr.int32,uint32:nr.uint32,int64:nr.int64,uint64:nr.uint64,float32:nr.float32,float64:nr.float64,complex64:nr.complex64,complex128:nr.complex128,binary:nr.binary,generic:nr.generic,notype:nr.notype,userdefined_type:nr.userdefined_type}}tt(Te,"enum",er),function(t,n){var e,r,i;for(e=tr(n),i=0;i<e.length;i++)Ve(t,r=e[i],n[r])}(Te,er());var rr=er();function ir(t){var n=typeof t;return"string"===n?function(t){var n=rr[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=Ee[t];return"string"==typeof n?n:null}(t):null}var or,ur="function"==typeof Math.fround?Math.fround:null,ar=Object.prototype.toString,cr="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof cr?cr.toStringTag:"",fr=r()?function(t){var n,e,r;if(null==t)return ar.call(t);e=t[lr],n=u(t,lr);try{t[lr]=void 0}catch(n){return ar.call(t)}return r=ar.call(t),n?t[lr]=e:delete t[lr],r}:function(t){return ar.call(t)},pr="function"==typeof Float32Array,sr="function"==typeof Float32Array?Float32Array:null,yr="function"==typeof Float32Array?Float32Array:void 0;or=function(){var t,n,e;if("function"!=typeof sr)return!1;try{n=new sr([1,3.14,-3.14,5e40]),e=n,t=(pr&&e instanceof Float32Array||"[object Float32Array]"===fr(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Ot}catch(n){t=!1}return t}()?yr:function(){throw new Error("not implemented")};var gr=new or(1),br="function"==typeof ur?ur:function(t){return gr[0]=t,gr[0]};function dr(t,n){if(!(this instanceof dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ft(t))throw new TypeError(H("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ft(n))throw new TypeError(H("invalid argument. Imaginary component must be a number. Value: `%s`.",n));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:br(t)}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:br(n)}),this}function mr(t,n){if(!(this instanceof mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ft(t))throw new TypeError(H("invalid argument. Real component must be a number. Value: `%s`.",t));if(!ft(n))throw new TypeError(H("invalid argument. Imaginary component must be a number. Value: `%s`.",n));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function hr(t){return kt(t)&&t>=0}function vr(t){return It(t)&&t.valueOf()>=0}function wr(t){return hr(t)||vr(t)}tt(dr,"BYTES_PER_ELEMENT",4),tt(dr.prototype,"BYTES_PER_ELEMENT",4),tt(dr.prototype,"byteLength",8),tt(dr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),tt(dr.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),tt(mr,"BYTES_PER_ELEMENT",8),tt(mr.prototype,"BYTES_PER_ELEMENT",8),tt(mr.prototype,"byteLength",16),tt(mr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),tt(mr.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),tt(wr,"isPrimitive",hr),tt(wr,"isObject",vr);var Sr="number";function jr(t,n,e){var r;if(!Fn(t))throw new TypeError(H("invalid argument. First argument must be a function. Value: `%s`.",t));if(!hr(n))throw new TypeError(H("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(!Fn(e))throw new TypeError(H("invalid argument. Third argument must be a constructor function. Value: `%s`.",e));return r=[function(){var n=t();return typeof n===Sr?new e(n,0):n},function(n){var r=t(n);return typeof r===Sr?new e(r,0):r},function(n,r){var i=t(n,r);return typeof i===Sr?new e(i,0):i},function(n,r,i){var o=t(n,r,i);return typeof o===Sr?new e(o,0):o},function(n,r,i,o){var u=t(n,r,i,o);return typeof u===Sr?new e(u,0):u},function(n,r,i,o,u){var a=t(n,r,i,o,u);return typeof a===Sr?new e(a,0):a}],n<=5?r[n]:function(){var n,r,i;for(n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);return typeof(r=t.apply(null,n))===Sr?new e(r,0):r}}var xr="complex64",Or="complex128",Er={complex64:dr,complex128:mr};function _r(t,n,e){return e===Or?n===xr||n===Or?t[Or]:jr(t.default,1,Er[e]):e===xr?n===xr?t[xr]:n===Or?t[Or]:jr(t.default,1,Er[e]):"generic"===e?n===Or?t[Or]:n===xr?t[xr]:t.default:t.default}return function(t,n){var e,r,i,o;for(e=[],o=0;o<n.length;o+=2)r=ir(n[o]),i=ir(n[o+1]),e.push(_r(t,r,i));return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).callbacks=n();
//# sourceMappingURL=browser.js.map
