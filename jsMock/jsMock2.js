const add = (a, b) => {
  if (a && b) {
    console.log(a + b);
  } else {
    return function(b) {
      console.log(a + b);
    };
  }
};

// add(1, 2);
// add(1)(2);

const str = "i love javascript";
console.log(
  str
    .split(" ")
    .reverse()
    .join(" ")
);

function beGreat() {
  return "success";
}

console.log(beGreat("effort", "dedication", "self awereness"));
console.log("get a life you fucking bitch      !!!!!!!!!");
