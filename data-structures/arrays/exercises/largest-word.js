//  input string
// output first largest string

// treat string as array
// remove special chars with regex
// save word in a string
// compare current word with the saved one

function longestWord(sen) { 
  let wordsArray = sen.split(' ');
  let largestWord = '';

  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i].replace(/[^a-zA-Z0-9 ]/g, "");

    if (largestWord.length < currentWord.length) {
      largestWord = currentWord;
    }
  }

  return largestWord; 
}

// keep this function call here 
console.log(longestWord('time to gain'));