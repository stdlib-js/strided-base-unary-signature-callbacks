// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@v0.1.0-esm/index.mjs";var d="complex64",l="complex128",m={complex64:t,complex128:s};function o(e,t,s){return s===l?t===d||t===l?e[l]:r(e.default,1,m[s]):s===d?t===d?e[d]:t===l?e[l]:r(e.default,1,m[s]):"generic"===s?t===l?e[l]:t===d?e[d]:e.default:e.default}function n(t,s){var r,d,l,m;for(r=[],m=0;m<s.length;m+=2)d=e(s[m]),l=e(s[m+1]),r.push(o(t,d,l));return r}export{n as default};
//# sourceMappingURL=index.mjs.map
