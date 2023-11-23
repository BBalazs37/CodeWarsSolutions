//https://www.codewars.com/kata/57ed56657b45ef922300002b/
/*
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.
*/

function broken(x){
    return x.replaceAll('1', 'x').replaceAll('0', '1').replaceAll('x', '0')
  }