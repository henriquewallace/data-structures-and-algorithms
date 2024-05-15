//Log all pairs of array
const boxes = [1,2,3,4,5]

function logAllPairsOfArray(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i], array[i++])
  }
}

logAllPairsOfArray(boxes)