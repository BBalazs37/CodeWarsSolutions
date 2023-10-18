https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/
/*
Given a non-negative integer, return an array / a list of the individual digits in order.
123 => [1,2,3]
*/

function digitize(n) {
  return n
    .toString()
    .split('')
    .map(a=> +a);
}