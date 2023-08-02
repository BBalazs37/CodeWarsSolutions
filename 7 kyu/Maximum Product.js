//https://www.codewars.com/kata/5a4138acf28b82aa43000117/
/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

adjacentElementsProduct([1, 2, 3]); ==> return 6
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
*/

function adjacentElementsProduct(array) {
  let products = array.map((elem, ind) => elem * array[ind+1]).slice(0,-1)
  return Math.max(...products)
}