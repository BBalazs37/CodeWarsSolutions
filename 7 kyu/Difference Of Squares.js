//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/
/*
Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
Example
For example, when n = 10:
*/

function differenceOfSquares(n){
    let arr = new Array(n)
    arr = arr.fill(0).map((elem,ind) => ind + 1)
    let squareOfSum = arr.reduce((a,b) => a + b, 0) ** 2
    let sumOfSquares = arr.map(a=> a*a).reduce((a, b) => a + b, 0)
    return squareOfSum - sumOfSquares
  }