
// this is called undeclare !!
// means i haven't declare a variable but i used that somewhere 

// const bar = foo + 1; 
// console.log(bar); 


// undefined means that i have declare a varibable , but 
// it's value it's undefined; 

// let name ; 
// console.log(name); // will print ==>> undefined


// we can't make a constant by default like let; 
// if we declare a constant then we have to assingn a value
// to him 

// const name  =  undefined; 
// console.log(name); will print ==>> undefined


// LET'S TALK ABOUT NULL

// so null is value ,null is a 'nothing value' value ,
// it's not a empty string/object/array
// null is also a falsy 

function checkIfNullIsFalsy(nuLL){
  if (nuLL){
  console.log('null is truthy'); 
}
else {
  console.log('null is falsy')
}
}; 


// checkIfNullIsFalsy(null); 



// CHCEKING UNDEFINED , NULL , AND UNDECLARE 

// UNDECLARE WILL NOTIFIED US , WHEN IT'S HAPPENS  ======>>


// LET'S SEE HOW TO CHECK UNDEFINED 

// let makeUndefined; 
// let typeofundefined = typeof makeUndefined; // returns undefined as string value 
// // console.log(typeof typeofundefined ); undeclare, but also returns undefined as string
// console.log(typeof thisisUndeclare); 

// console.log(makeUndefined === undefined); // returns true boolean ; 


// LET'S SEE HOW TO CHECK NULL

// let nuLL = null; 
// console.log(nuLL === null); 

// let's take it to the  one step further 
// let nuLL = null; 
// let undeFINED = undefined; 
// console.log(typeof nuLL); 

// console.log(nuLL == undeFINED); 

let x = false; 

console.log(typeof x); 

let y = 0; 
console.log(typeof null === 'null'); 