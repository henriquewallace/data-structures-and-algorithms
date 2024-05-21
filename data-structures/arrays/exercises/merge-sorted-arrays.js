// Merge two sorted arrays
// input 2 array [1, 3, 5, 5], [2, 4, 6]
// output 1 array [1, 2, 4, 5, 5, 6]

// save time

// naive solution: loop over both arrays nested comparing if the next item is equal or greater than your comparing item
//bad solution O(a*b)

// check if the arrays has length 
// if one of arrays dont have length output the another
// while first item of first array is less then the first item of second array, add item on the merged array and set the next item as the first item
// else add the first item of second array

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6];

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } 
  
  if (arr2.length === 0) {
    return arr1;
  }

  let i = 1;
  let j = 1;

  let arr1FirstItem = arr1[0];
  let arr2FirstItem = arr2[0];
  const mergedSortedArr = [];
  
  while (arr1FirstItem || arr2FirstItem) {
    if (!arr2FirstItem || arr1FirstItem < arr2FirstItem) {
      mergedSortedArr.push(arr1FirstItem);
      arr1FirstItem = arr1[i];
      i++;
    } else {
      mergedSortedArr.push(arr2FirstItem);
      arr2FirstItem = arr2[j];
      j++;
    }
  }

  return mergedSortedArr;
}

console.log(mergeSortedArrays(array1, array2));