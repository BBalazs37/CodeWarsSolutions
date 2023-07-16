//https://www.codewars.com/kata/59706036f6e5d1e22d000016/

/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
*/

function wordsToMarks(string){
  const letterValue = a => a.charCodeAt(0)-96
  return string.split('').reduce((acc, elem) => acc + letterValue(elem),0)
}