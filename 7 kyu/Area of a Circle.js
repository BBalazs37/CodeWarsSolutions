//https://www.codewars.com/kata/537baa6f8f4b300b5900106c/
/*
Complete the function which will return the area of a circle with the given radius.
Returned value is expected to be accurate up to tolerance of 0.01.
If the radius is not positive, throw Error.
circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
*/
function circleArea(radius) {
  if(radius <= 0) throw new Error();
  return Math.PI * radius **2;
}