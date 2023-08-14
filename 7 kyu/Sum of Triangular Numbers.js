//https://www.codewars.com/kata/580878d5d27b84b64c000b51/
/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
*/

function sumTriangularNumbers(n) {
  let sum = 0;
  for(let i = 1; i<=n; i++){
    sum += TriNum(i)
  }
  return sum;
}

function TriNum(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
      sum += i;
    }
    return sum;
}