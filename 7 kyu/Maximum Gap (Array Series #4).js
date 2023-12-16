//https://www.codewars.com/kata/5a7893ef0025e9eb50000013/
/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
*/

function maxGap (numbers){
  let diff = numbers
    .sort((a,b)=>a-b)
    .map((a,i,arr)=>a = Math.abs(a - arr[i+1]))
    .slice(0,-1)
  return Math.max(...diff)
}