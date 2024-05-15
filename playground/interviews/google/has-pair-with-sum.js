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

const arr1 = [1, 2, 3, 9];
const arr2 = [1, 2, 4, 4];

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