//https://www.codewars.com/kata/57f609022f4d534f05000024

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
*/

function stray(numbers) {
  numbers = numbers.sort()
  return numbers[0] == numbers[1] ? numbers[numbers.length-1] : numbers[0];
}