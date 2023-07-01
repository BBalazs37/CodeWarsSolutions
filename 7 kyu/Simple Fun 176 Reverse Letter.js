//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/

/*
Given a string str, reverse it and omit all non-alphabetic characters.
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
*/
function reverseLetter(str) {
  return str.split('')
    .filter(a => 'abcdefghijklmnopqrstuvwxyz'.includes(a.toLowerCase()))
    .reverse()
    .join('')
}