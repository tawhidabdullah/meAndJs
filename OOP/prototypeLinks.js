// when myFunc get's created, in that moment the function also create a object, and myFunc's prototype
// will get link to that objects and that object's constructor will linked to the function

function myFunc(name) {
  this.name = name;
}

const newFunc = new myFunc();
console.log(newFunc);
