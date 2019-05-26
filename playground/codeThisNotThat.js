"use strict";

const obj1 = { name: "name1" };
const obj2 = { name: "name2" };
const obj3 = { name: "name3" };
// console.log("%c my objects", "color: red;"); // add css styles to text
// console.log({ obj1, obj2, obj3 }); // computed property names
// console.table([obj1, obj2, obj3]); // computed property names

/// advance templeting

const printString = (str1, str2) => {
  return `hey ${str1} ${str2}`;
};

console.log(printString``);

class superCool {
  #cool = "cool_thing";
  get value() {
    console.log("getting the current value");
    console.log(this.#cool);
  }
}

const cool = new superCool();
console.log(cool.value);
