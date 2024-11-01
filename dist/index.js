"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=m(function(k,l){
var a=require('@stdlib/strided-base-dtype-resolve-str/dist'),t=require('@stdlib/complex-float32-ctor/dist'),s=require('@stdlib/complex-float64-ctor/dist'),c=require('@stdlib/complex-base-cast-return/dist'),f="complex64",i="complex128",p={complex64:t,complex128:s};function C(e,r,u){return u===i?r===f||r===i?e[i]:c(e.default,1,p[u]):u===f?r===f?e[f]:r===i?e[i]:c(e.default,1,p[u]):u==="generic"?r===i?e[i]:r===f?e[f]:e.default:e.default}function q(e,r){var u,o,v,n;for(u=[],n=0;n<r.length;n+=2)o=a(r[n]),v=a(r[n+1]),u.push(C(e,o,v));return u}l.exports=q
});var d=x();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
