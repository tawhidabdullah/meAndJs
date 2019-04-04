function longestConsecutiveChracter(char) {
  let maxCount = 0;
  let maxChar = null;
  let prevChar = null;
  let count = 0;

  for (let current of char) {
    if (current === prevChar) count++;
    else count = 1;
    if (count > maxCount) {
      maxCount = count;
      maxChar = current;
    }
    prevChar = current;
  }

  return {
    [maxChar]: maxCount
  };
}

console.log(longestConsecutiveChracter("aabcddbbbea"));
