//https://www.codewars.com/kata/534d0a229345375d520006a0
/*
Complete the function isPowerOfTwo that determines if a given non-negative integer is a power of two.
*/

//powers of two in binary are always 10, 100, 1000...
function isPowerOfTwo(n){
  const binary = n.toString(2)
  return (binary.slice(0,1) == '1' &&  !(binary.slice(1).includes('1')) )
}

//bitwise AND 
// function isPowerOfTwo(n){
//   return (n & (n-1)) == 0
// }