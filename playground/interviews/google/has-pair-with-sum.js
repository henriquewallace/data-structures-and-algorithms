// Check if the array has a pair of items that the sum is equal 8

const { default: test } = require("node:test");

// [1,2,3,9] --> sum = 8
// [1,2,4,4] --> sum = 8

// Inputs: data structure, sum
// Outputs: true or false

// Time complexity

// naive approach: nested loops, compare the items
// O(n^2) complexity, too bad
// takes a lot of time

const arr1 = [1, 2, 4, 4];

function hasPairWithSum(array, sum) {
  // loop that iterates the array
  for (let i = 0; i < array.length -1; i++) {
    // inside the loop we're gonna do another loop
    for (let j = i + 1; j < array.length; j++) {
      // check if array[i] + array[j] === 8
      if (array[i] + array[j] === sum) {
        // if so, return true
        return true;
      }
    }
    // if the loop ends without returning true, return false
  }
    return false;
}

hasPairWithSum(arr1, 8);
console.log(hasPairWithSum(arr1, 8));

// <-- Better one -->

const arr2 = [1, 2, 3, 9, 5];

function hasPairWithSum2(arr, sum) {
  // create a set of items to store unique values
  const set = new Set();
  // loop throught array
  for (let i = 0; i < arr.length; i++) {
  // if set has the item arr[i] return true
    if (set.has(arr[i])) {
      return true;
    }

  // else add the arr[i] subtracted from sum
    set.add(sum - arr[i]);
  }

  return false
}

hasPairWithSum2(arr2, 8)
console.log(hasPairWithSum2(arr2, 8))