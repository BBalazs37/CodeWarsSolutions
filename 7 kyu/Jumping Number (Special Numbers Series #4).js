//https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/
/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .
*/

function jumpingNumber(n){
    return String(n)
      .split('')
      .map(a=>+a)
      .every((elem,ind,arr)=> Math.abs(elem - +arr[ind+1]) == 1 || ind == arr.length-1)
      ? "Jumping!!" : "Not!!";
  }