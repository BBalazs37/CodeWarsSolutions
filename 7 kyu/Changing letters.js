//https://www.codewars.com/kata/5831c204a31721e2ae000294/
/*
When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

function swap (string) {
    return string.split('').map(a=>'aeiou'.includes(a) ? a.toUpperCase() : a).join('');
  }