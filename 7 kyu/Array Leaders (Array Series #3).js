//https://www.codewars.com/kata/5a651865fd56cb55760000e0/
/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.
*/
function arrayLeaders(numbers){
    return numbers.filter((elem, ind, arr) => arr.slice(ind+1).reduce((a,b)=>a+b,0) < elem);
  }