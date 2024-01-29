//https://www.codewars.com/kata/58880c6e79a0a3e459000004/
/*
At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

Example
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

The answer was obtained as 5 + 1 + 2 + 3 = 11.
*/

function houseNumbersSum(inputArray) {
  let i = 0;
  let sum = 0;
  while(inputArray[i] != 0 && i < inputArray.length){
    sum+= inputArray[i];
    i++;
  }
  return sum;
}