//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/
/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
minValue ({1, 3, 1})  ==> return (13)
*/

function minValue(values){
  let uniqueValues = [...new Set(values)]
  return parseInt(uniqueValues.sort((a,b) => a - b).map(a => a.toString()).join(''))
}