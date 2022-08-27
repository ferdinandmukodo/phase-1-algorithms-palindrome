function isPalindrome(word) {
  // Write your algorithm here
    // Write your algorithm here
      const letters = word.split('');
      const reverseLetters = letters.reverse();
      const reverseString  = reverseLetters.join('')
    
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
