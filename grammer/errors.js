"use strict";


// ES5's strict mode defines even more early errors.
//  For example, in strict mode, function parameter names cannot be duplicated:



 
function foo(a,b,a) { }                    // just fine!

function bar(a,b,a) { }    // syntax  Error!




// The target of an assignment must be an identifier (or an ES6 destructuring expression that 
//     produces one or more identifiers),
//  so a value like 42 in that position is illegal and can be reported right away:

var a;
42 = a; // reference error 