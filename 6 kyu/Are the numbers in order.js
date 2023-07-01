//https://www.codewars.com/kata/56b7f2f3f18876033f000307/

/*
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
*/

function inAscOrder(arr) {
  let sorted = arr.slice().sort((a,b) => a - b)
  return arr.every((elem, ind) => elem === sorted[ind])
}