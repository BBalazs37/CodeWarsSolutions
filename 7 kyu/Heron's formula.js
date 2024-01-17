//https://www.codewars.com/kata/57aa218e72292d98d500240f/
/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
(see link for the function)
*/

function heron(a, b, c) {
  let s = (a+b+c)/2
  return Math.sqrt(s * (s-a) * (s-b) * (s-c))
}