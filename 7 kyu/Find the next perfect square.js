//https://www.codewars.com/kata/56269eb78ad2e4ced1000013
//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  return sqrt % 1 === 0 ? Math.pow(sqrt + 1,2) : -1;

}