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

// MODULES //

var resolve = require( '@stdlib/strided-base-dtype-resolve-str' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var wrap = require( '@stdlib/complex-base-cast-return' );


// VARIABLES //

var C64 = 'complex64';
var C128 = 'complex128';
var CTORS = {
	'complex64': Complex64,
	'complex128': Complex128
};


// FUNCTIONS //

/**
* Resolves a callback based on provided dtypes.
*
* @private
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {string} t1 - dtype for input argument
* @param {string} t2 - dtype for return value
* @returns {Function} callback
*/
function resolveCallback( table, t1, t2 ) {
	// Signature: ?_z
	if ( t2 === C128 ) {
		// c_z or z_z
		if ( t1 === C64 || t1 === C128 ) {
			// Always perform computation in higher precision:
			return table[ C128 ];
		}
		// d_z (cast the double-precision return value from `d_d` to a complex number)
		return wrap( table.default, 1, CTORS[ t2 ] );
	}
	// Signature: ?_c
	if ( t2 === C64 ) {
		// c_c
		if ( t1 === C64 ) {
			return table[ C64 ];
		}
		// z_c
		if ( t1 === C128 ) {
			// Always perform the computation in higher precision:
			return table[ C128 ];
		}
		// d_c (cast the double-precision return value from `d_d` to a complex number)
		return wrap( table.default, 1, CTORS[ t2 ] );
	}
	// Signature: ?_o
	if ( t2 === 'generic' ) {
		// z_o
		if ( t1 === C128 ) {
			return table[ C128 ]; // Signature: z_o_as_z_z
		}
		// c_o
		if ( t1 === C64 ) {
			return table[ C64 ]; // Signature: c_o_as_c_c
		}
		// d_o
		return table.default; // Signature: d_o_as_d_d
	}
	return table.default;
}


// MAIN //

/**
* Assigns callbacks to unary interfaces according to type promotion rules.
*
* ## Notes
*
* -   The function assumes that the provided signature array has the following properties:
*
*     -   a strided array having a stride length of `2` (i.e., every `2` elements define a unary interface signature).
*     -   for each signature (i.e., set of two consecutive non-overlapping strided array elements), the first element is the input data type and the second element is the return data type.
*     -   all signatures follow type promotion rules.
*
* -   Based on type promotion rules, we can simply use the callback for `float64` (i.e., the assumed "default") for all interfaces not involving complex numbers, even for `float32`, as we shouldn't need to explicitly downcast strided array values. The only time we need to return `float32` values is when input arrays are already `float32` or of a type which can be safely represented in `float32` without concern for truncation.
*
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {ArrayLikeObject} signatures - strided array containing unary interface signatures
* @returns {Array<Function>} list of callbacks
*
* @example
* var signatures = require( '@stdlib/strided-base-unary-dtype-signatures' );
* var identity = require( '@stdlib/number-float64-base-identity' );
* var cidentity = require( '@stdlib/complex-float64-base-identity' );
* var cidentityf = require( '@stdlib/complex-float32-base-identity' );
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
function callbacks( table, signatures ) {
	var out;
	var t1;
	var t2;
	var i;

	out = [];
	for ( i = 0; i < signatures.length; i += 2 ) {
		t1 = resolve( signatures[ i ] );
		t2 = resolve( signatures[ i+1 ] );
		out.push( resolveCallback( table, t1, t2 ) );
	}
	return out;
}


// EXPORTS //

module.exports = callbacks;
