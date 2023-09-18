//https://www.codewars.com/kata/52b757663a95b11b3d00062d/
/*
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
  let toWeirdCaseWord = string => 
    string.split('').map((elem, ind) => ind % 2 == 0 ? elem.toUpperCase() : elem.toLowerCase()).join('')
  return string.split(' ').map(elem => toWeirdCaseWord(elem)).join(' ')
}