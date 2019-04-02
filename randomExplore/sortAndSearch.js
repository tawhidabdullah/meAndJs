function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function binarySearch(array, item) {
  let beg = 1;
  let end = array.length;
  let mid = Math.round((beg + end) / 2);

  while (beg <= end && array[mid] != item) {
    if (item < array[mid]) end = mid - 1;
    else beg = mid + 1;

    // Set the mid again
    mid = Math.round((beg + end) / 2);
  }

  console.log(mid);
  if (array[mid] === item) {
    return "The item is in the array";
  } else {
    return "The item is not in the array";
  }
}
function sortAndSearch(array, item) {
  const sortedArray = quickSort(array);
  return binarySearch(sortedArray, item);
}

console.log(sortAndSearch([6, 2, 3, 5, 45, 54], 5));
