/* 
console.log("starting...app");
setTimeout(() => {
  console.log("waiting for something...");
}, 3000);
setTimeout(() => {
  console.log("delay of 0 sec....");
}, 0);
console.log("Finishing...app");

*/

// CALLSTACK AND EVENTLOOK /////////////////////////////=====================================================>>>

const add = (a, b) => {
  const total = a + b;
  return total;
};

const result = add(2, 3);
// console.log(result);

////////////////////////////////////////////////////
console.log("starting...app");
setTimeout(() => {
  console.log("waiting for something...");
}, 3000);
setTimeout(() => {
  console.log("delay of 0 sec....");
}, 0);
console.log("Finishing...app");
