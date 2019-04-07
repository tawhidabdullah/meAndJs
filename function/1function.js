"use strict";

// ====================================================================================

// function funky(name){
//     name = 'Tawhid Abdullah'; // here we replace name = [] to 'Tawhid abdullah'
// };

// var x = [];
// funky(x);
// console.log(x); // answer: []

// ===============================================================================================
function swap(a, b) {
  var temp = a; // temp = 1;
  a = b; // a = 2;
  b = temp; // b = 1;
}

var x = 1,
  y = 2;
swap(x, y);
console.log(x);

// ===============================================================================================
// function challenge 1 :=>

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}

add(2, 3);
sub(2, 3);
mul(2, 3);

function identityf(f) {
  return function() {
    return f;
  };
}

let three = identityf(3);

function addf(x) {
  return function(y) {
    return x + y;
  };
}

function liftf(binaryfunction) {
  return function(x) {
    return function(y) {
      return binaryfunction(x, y);
    };
  };
}

let addfunc = liftf(add);

function currey(binaryFunction, arg1) {
  return function(arg2) {
    return binaryFunction(arg1, arg2);
  };
}

let add5 = currey(add, 5);
add5(5);

// const inc = addf(1);
// inc(5);
// const inc = currey(add,1);
// inc(5);
// const inc = liftf(add)(1);
// inc(5);

function twice(binaryFunction) {
  return function(arg) {
    return binaryFunction(arg, arg);
  };
}

twice(add);

function reverse(binaryFunction) {
  return function(...args) {
    return binaryFunction(...args.reverse());
  };
}

const addReverse = reverse(add);
