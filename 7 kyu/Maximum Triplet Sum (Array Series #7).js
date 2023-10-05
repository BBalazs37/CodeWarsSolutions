//https://www.codewars.com/kata/5aa1bcda373c2eb596000112/
/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.
*/
function maxTriSum(numbers){
  numbers = [...new Set(numbers)]
  return numbers
    .sort((a,b) => b-a)
    .slice(0,3)
    .reduce((a,b) => a + b,0)
}