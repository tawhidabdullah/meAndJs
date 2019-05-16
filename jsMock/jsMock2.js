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

const str = 'i love javascript'; 
console.log(str.split(' ').reverse().join(' ')); 