/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Assign callbacks to unary interfaces according to type promotion rules.
*
* @module @stdlib/strided-base-unary-signature-callbacks
*
* @example
* var signatures = require( '@stdlib/strided-base-unary-dtype-signatures' );
* var identity = require( '@stdlib/number-float64-base-identity' );
* var cidentity = require( '@stdlib/complex-float64-base-identity' );
* var cidentityf = require( '@stdlib/complex-float32-base-identity' );
* var callbacks = require( '@stdlib/strided-base-unary-signature-callbacks' );
*
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes );
* // returns [...]
*
* var table = {
*     'default': identity,
*     'complex64': cidentityf,
*     'complex128': cidentity
* };
*
* var list = callbacks( table, sigs );
* // returns [...]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
