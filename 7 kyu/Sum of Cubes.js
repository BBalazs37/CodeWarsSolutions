//https://www.codewars.com/kata/59a8570b570190d313000037/
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
*/

function sumCubes(n){
  let sum = 0
  for(let i = 1; i<=n; i++){
    sum += i*i*i
  }
  return sum
}