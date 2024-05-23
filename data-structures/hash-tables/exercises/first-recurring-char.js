// Find first recurring char
// input = [1, 2, 4, 5, 4, 2, 1]
// output = 4
// If don't existing recurring return undefined

// Brute force solution: create an new array > loop through the given array > loop through the new array > check if array[i] is on new array > if not, push item to array > if so, return the number

function naiveFirstRecurringChar(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
      i++;
    }
  }

  return undefined;
} // O(n^2)

// assumptions: input could be empty? could be string?

// 1. create a hash set
// 2. loop through input array
// 3. check if array[i] is in set
// 4. if so return array[i]
// 4. if not add item to set
// 5. out the loop return undefined

function firstRecurringChar(arr) {
  const hashSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (hashSet.has(arr[i])) {
      return arr[i];
    }

    hashSet.add(arr[i]);
  }

  return undefined;
} // O(n)

function nonJsFirstRecurringChar(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    }

    map[arr[i]] = i;
  }

  return undefined;
}

console.log(naiveFirstRecurringChar([1, 2, 4, 5, 4, 2, 1]));
console.log(naiveFirstRecurringChar([1, 2, 4, 5]));
console.log(naiveFirstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(firstRecurringChar([1, 2, 4, 5, 4, 2, 1]));
console.log(firstRecurringChar([1, 2, 4, 5]));
console.log(firstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(nonJsFirstRecurringChar([1, 2, 4, 5, 4, 2, 1]));
console.log(nonJsFirstRecurringChar([1, 2, 4, 5]));
console.log(nonJsFirstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));
