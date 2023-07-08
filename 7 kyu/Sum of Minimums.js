//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/
/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
*/

function sumOfMinimums(arr) {
  return arr.map(elem => Math.min(...elem)).reduce((acc, elem) => acc + elem, 0)
}