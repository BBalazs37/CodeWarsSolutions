//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/
/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
*/
function maxDiff(list) {
    if(list.length < 2) return 0;
    return Math.max(...list) - Math.min(...list);
  };