/*

const a = 967021; 
const b = a.toString(); 
// console.log(typeof a); // number
// console.log(typeof b); // string


// using the unary ==>> +,-
// there are places where it can be awfully confusing 

var c = "3.14";
// var d = 5 + +c;
var d = 5+ -c;

var z = parseInt(3434)
console.log(typeof z)


*/


// EXPLICIT BOOLEAN COERCION



let a = "0";
let b = [];
let c = {};

let d = "";
let e = 0;
let f = null;
let g;

!!a;    // true
!!b;    // true
!!c;    // true

!!d;    // false
!!e;    // false
!!f;    // false
!!g;    // false
