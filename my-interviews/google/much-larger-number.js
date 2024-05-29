// Find the position of a "Much Larger" number in a given list of numbers,
// where a number is considered "Much larger" if it exceeds twice the
// value of every other number in list.

// Examples:
// Input: [4, 22, 8, 9]
// Output: 1 (number index)

// Input: [1, 19, 6, 19]
// Output: -1

// Much larger = n > arr[i] * 2

// check if length = 0 return -1
// loop to find the largest number and index
// check if any number * 2 >= maxNum

function findMuchLarger(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let maxNum = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      maxIndex = i;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (maxIndex !== j && maxNum <= arr[j] * 2) {
      return -1;
    }
  }

  return maxIndex;
}

console.log(findMuchLarger([4, 22, 8, 100]))
