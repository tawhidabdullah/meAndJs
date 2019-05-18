const array = [1, 3, 4, 2, 2, 5, 5, 44, 44, 44];
const countOfMaximumNumbers = array => {
  let maxiMumCounter = 0;
  const maxiMumNumber = Math.max(...array);
  for (item of array) {
    if (maxiMumNumber === item) maxiMumCounter++;
  }
  return maxiMumCounter;
};

console.log(countOfMaximumNumbers(array));
