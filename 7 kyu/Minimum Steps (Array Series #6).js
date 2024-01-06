//https://www.codewars.com/kata/5a91a7c5fd8c061367000002/
/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
*/

function minimumSteps(numbers, value){
  numbers.sort((a,b) => a - b);
  let sum = 0;
  let count = 0;
  while(sum < value){
    sum+= numbers[count];
    count++;
  }
  return count-1;
}