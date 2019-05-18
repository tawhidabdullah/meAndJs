const countOfMaximumNumbers = array => {
  let maxiMumCounter = 0;
  const maxiMumNumber = Math.max(...array);
  for (item of array) {
    if (maxiMumNumber === item) maxiMumCounter++;
  }
  return maxiMumCounter;
};

// console.log(countOfMaximumNumbers([1, 3, 4, 2, 2, 5, 5, 44, 44, 44]));

// // sort with set

const printInSetTimeOut = arr => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`index: ${i}, element: ${arr[i]}`);
    }, arr[i]);
  }
};

// console.log(printInSetTimeOut( [5, 120, 15, 21]));
const converInMilitaryTimeContext = time => {
  let len = time.length;
  const normalize = (s, ans) => {
    for (let i = s; i < len - 2; i++) {
      ans += time[i];
    }
    return ans;
  };

  if (time[len - 2] + time[len - 1] === "PM") {
    let hr = parseInt(time.slice(0, 2)) + 12;
    //  console.log('ansss',hr);
    let ans = +hr;
    console.log(normalize(2, ans));
  } else {
    console.log(normalize(0, ""));
  }
};

console.log(converInMilitaryTimeContext("09:03PM"));
