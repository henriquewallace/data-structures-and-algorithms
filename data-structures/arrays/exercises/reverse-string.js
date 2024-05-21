// reverse a string

const { setgroups } = require("process");

// inputs: string
// output: reversed string

// time complexity

// check if param is a string
// treat the string like array
// declare an empty reversedArray
// loop over the array
// get index as total items
// iterate until the index is zero
// push each item on index position at string to reversed array
// return the reversedArray as a string

myString = "My string";

function reverseString(str) {
  if (str === "" || str.length < 2 || typeof str !== "string") {
    return "Cannot reverse";
  }

  const reversedArray = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    reversedArray.push(str[i]);
  }

  return reversedArray.join("");
}

console.log(reverseString(myString));

anotherString = "Hey there!";

function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2(anotherString));
