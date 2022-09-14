function isPalindrome(word) {
  // Write your algorithm here
  const arrOfCharacters = word.split('')
  const arrLength = arrOfCharacters.length
  const numbOfCharactersToMatch = Math.floor(arrLength/2)
  //check to see if first character equals last character
  //check to see if second character equals second to last character
  //continue until there are no more characters
  for (let i=0; i < numbOfCharactersToMatch; i++) {
    if (arrOfCharacters[i] === arrOfCharacters[arrLength - 1 - i]) {
      //console.log('letters match')
    }
    //if any of the above is false, return false
    else {
      return false
    }
  }
  //if everything is true, return true
  return true
}

isPalindrome('treehouse')



/*
 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
