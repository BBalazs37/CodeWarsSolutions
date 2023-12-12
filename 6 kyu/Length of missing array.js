//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
*/


function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays || arrayOfArrays.length == 0 ) return 0;
  if(arrayOfArrays.some(a=> !a)) return 0;
  if(arrayOfArrays.some(a=>a.length == 0 )) return 0;
  
  return arrayOfArrays
    .map(a=>a.length)
    .sort((a,b)=>a - b)
    .find((a,i,arr) => !(a+1 == arr[i+1] || i == arr.length-1))
    +1
}
