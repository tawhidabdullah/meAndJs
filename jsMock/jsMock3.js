const countOfMaximumNumbers = () => {
  const array = [1, 3, 4, 2, 2, 5, 5, 44, 44, 44];
  let maxiMumCounter = 0;
  const maxiMumNumber = Math.max(...array);
  for (item of array) {
    if (maxiMumNumber === item) maxiMumCounter++;
  }
  return maxiMumCounter;
};

// console.log(countOfMaximumNumbers());

// // sort with set

const printInSetTimeOut = () => {
  const arr = [5, 120, 15, 21];

  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`index: ${i}, element: ${arr[i]}`);
    }, arr[i]);
  }
};

// console.log(printInSetTimeOut());

const converInMilitaryTimeContext = () => {
  let time = "09:03AM";
  



// AM = RAAT 12:01 TO SOKAL 12:00
// PM = SOKAL 12:01 TO RAAT 12:00
  
};

console.log(converInMilitaryTimeContext());
