//https://www.codewars.com/kata/556196a6091a7e7f58000018/
/*
Given a sequence of numbers, find the largest pair sum in the sequence.

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
*/

function largestPairSum (numbers) {
  return numbers
    .sort((a,b) => a - b)
    .reverse()
    .slice(0,2)
    .reduce((acc, elem) => acc + elem, 0)
}