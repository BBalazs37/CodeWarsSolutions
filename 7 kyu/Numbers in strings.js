//https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/
/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
*/

function solve(s) {
  let numbers = s.match(/(\d+)/g).map(a => +a);
  return Math.max(...numbers);
}