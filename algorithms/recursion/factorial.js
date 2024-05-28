// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// input: number
// output: number

// time complexity?

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));


function findFactorialIterative(number) {
  if (number === 0) {
    return 1;
  }
  
  let sum = number;
  for (let i = number; i > 1; i--) {
    sum = sum * (i - 1);
  }

  return sum;
}

console.log(findFactorialIterative(2));
