// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N = 5 -> 2 + 3

function fibonacciIterative(n) {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

console.log(fibonacciIterative(5));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5));

// // Find the position of a Much Larger number in a given list of numbers,
// where a nunber is considered Much Larger if it exceeds twice the
// I/ value of every other number in the list.
// 1/ Examples:
// 11
// // Input = [1,
// 6, 19, 9]
// // Output = 2
// 7/ Input = [1, 6, 19, 19]
// // Output = -1
// 1/
// // keyValues[key] = value
function findMuchLarger(arr) {
  let muchLargerIndex;

  for (let i = 0; i < arr.length; i++) {
    // 0(n)
    for (let j = 0; j < arr.length; j++) {
      // 0(n)
      const dividedNumI = arr[1] / 2;
      if (dividedNumI < arr[i]) {
        muchLargerIndex = j;
      }
    }
  }

  if (!muchLargerIndex) {
    return -1;
  }

  return muchLargerIndex;
}
