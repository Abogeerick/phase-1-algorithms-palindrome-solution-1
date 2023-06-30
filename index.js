function reverse(word){
  // "abc"=>"cba"
  // Convert the word into an array of characters
  // const wordArray = word.split("");
  // Reverse the order of the characters in the array
  // const reversedWordArray = wordArray.reverse();
  // Convert the reversed array back into a string
  // const reversedWord = reversedWordArray.join("");
  //Return the reversed word
  return word.split("").reverse().join("")
}


function isPalindrome(word) {
  //reverse the input string
  const reversedWord = reverse(word);
return word === reversedWord
}

/* 
  Add your pseudocode here
  that means that if word is same as reverse I should return true
  reverse the input string

  if the input is same as the reversed input
    return true
  else
    return false

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
