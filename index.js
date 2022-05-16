function isPalindrome(word) {
  let wordArray = word.split("");

  let y = 0;
  let reversedWord = wordArray
    .map((letter) => {
      y--;
      let letterB = wordArray[wordArray.length + y];
      return letterB;
    })
    .join("");

  console.log(reversedWord === word ? true : false);
  return reversedWord === word ? true : false;
}

/* 
  Add your pseudocode here
*/

/*
  put string into an array.
  divide string in half. if num of letters is odd, 1st half rounds down, 2nd half rounds down.
  send 1st half to one array and the 2nd to another array. 
  reverse the 2nd array.
if 1st array is === to 2nd array return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
