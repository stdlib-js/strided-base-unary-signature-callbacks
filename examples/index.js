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

var dtypes = require( '@stdlib/strided-dtypes' );
var signatures = require( '@stdlib/strided-base-unary-dtype-signatures' );
var identity = require( '@stdlib/number-float64-base-identity' );
var cidentity = require( '@stdlib/complex-float64-base-identity' );
var cidentityf = require( '@stdlib/complex-float32-base-identity' );
var callbacks = require( './../lib' );

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

console.log( clbks );
