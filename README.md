<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Callbacks

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assign callbacks to unary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
callbacks = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-signature-callbacks@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/strided-base-unary-signature-callbacks/tags). For example,

```javascript
callbacks = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-signature-callbacks@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var callbacks = require( 'path/to/vendor/umd/strided-base-unary-signature-callbacks/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-signature-callbacks@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.callbacks;
})();
</script>
```

#### callbacks( table, signatures )

Assigns callbacks to unary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

```javascript
var signatures = require( '@stdlib/strided-base-unary-dtype-signatures' );
var identity = require( '@stdlib/math-base-special-identity' );
var cidentity = require( '@stdlib/math-base-special-cidentity' );
var cidentityf = require( '@stdlib/math-base-special-cidentityf' );

var dtypes = [
    'float64',
    'float32',
    'int32',
    'uint8'
];

var sigs = signatures( dtypes, dtypes );
// returns [...]

var table = {
    'default': identity,
    'complex64': cidentityf,
    'complex128': cidentity
};

var list = callbacks( table, sigs );
// returns [...]
```

The function accepts the following arguments:

-   **table**: callback table.
-   **signatures**: strided array containing unary interface signatures.

A callback `table` should have the following properties:

-   **default**: default callback.
-   **complex64**: callback for single-precision complex floating-point numbers.
-   **complex128**: callback for double-precision complex floating-point numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function assumes that the provided signature array has the following properties:

    -   a strided array having a stride length of `2` (i.e., every `2` elements define a unary interface signature).
    -   for each signature (i.e., set of two consecutive non-overlapping strided array elements), the first element is the input data type and the second element is the return data type.
    -   all signatures follow type [promotion rules][@stdlib/ndarray/promotion-rules].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-dtype-signatures@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-identity@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cidentity@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cidentityf@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-signature-callbacks@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Get the list of supported strided array data types:
var dt = dtypes();

// Generate unary interface signatures:
var sigs = signatures( dt, dt );

// Define a callback table:
var table = {
    'default': identity,
    'complex64': cidentityf,
    'complex128': cidentity
};

// Generate a list of callbacks according to type promotion rules:
var clbks = callbacks( table, sigs );
// returns [...]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-unary-signature-callbacks.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-unary-signature-callbacks

[test-image]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-unary-signature-callbacks/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-unary-signature-callbacks?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-unary-signature-callbacks.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-unary-signature-callbacks/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-unary-signature-callbacks/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-unary-signature-callbacks/main/LICENSE

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/stdlib/tree/umd

</section>

<!-- /.links -->
