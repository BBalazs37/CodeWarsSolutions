//https://www.codewars.com/kata/580dda86c40fa6c45f00028a/
/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  if(!arr.every(a=> a === +a)) return undefined;
  return arr.map(a=> a**3).filter(a=> Math.abs(a)%2==1).reduce((a,b)=>a+b,0)
}