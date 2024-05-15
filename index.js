const nemo = ["nemo"];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

// findNemo(large); // O(n) --> Linear Time
// BigO depends on the number of inputs
// Operations increase if the number of elements increase

//Log all pairs of array
const boxes = [1,2,3,4,5]

function logAllPairsOfArray(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
    console.log(array[i], array[j])
    }
  }
}

// logAllPairsOfArray(boxes)
// BigO = O(n^2) --> Quadratic Time
// Nested loops we multiply


// O(1) --> Constant time
// No metter how much elements we have, it only takes a constant number of operations to process it

// BigO rules
// Rule 1 --> Worst case scenario
// Always care about what is the worst case scenario

// Rule 2 --> Drop the constants
// The constants doesn't matter, it's insignificant

// Rule 3 --> Different terms for input
// If we have two params with two different arrays as values, each one it's a term
// So if we have two loops one followed by another our bigO notation will be O(a + b)
// If we have nested loops, we multiply O(a*b)

// Rule 4 --> Drop none dominant terms
// We just keep the most important term, for example:
// O(n + n^2), the n^2 is more relevant then n, so we drop it
// O(n^2)

// <-- We are only worried about scale -->

// Pillars of programming
// - Readable
// - Memory (Space complexity)
// - Speed (Time complexity)

const a = [1, 2, 3, 4]
for (let i = 0; i < a.length; i++) { // O(n)
  for (let j = 0; j < a.length; j++) { // O(n)
    a[i] === a[j]
  }
}// O(n^2)