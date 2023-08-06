//https://www.codewars.com/kata/525f039017c7cd0e1a000a26/
/*
Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
*/

var palindromeChainLength = function(n) {
  let isPalindrome = n => n.toString().split('').reverse().join('') == n.toString().split('').join('')
  let getPalindrome = n => parseInt(n.toString().split('').reverse().join(''))
  let counter = 0;
  while(!isPalindrome(n)){
    n = n + getPalindrome(n);
    counter++;
  }
  return counter;
};