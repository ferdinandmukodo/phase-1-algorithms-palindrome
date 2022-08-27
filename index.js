function isPalindrome(word) {
  // Write your algorithm here
    // Write your algorithm here
      const palindromeWord = word.split('');
      const reversePalindrome = palindromeWord.reverse();
      const reverseString  = reversePalindrome.join('')
    
      if (word === reverseString){
        return true
    
      } else {
        return false
      }
    
    
}

/* 
  Add your pseudocode here
  check if word is actual string required
  checke if string matches backwards
  join the string from the argument
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
