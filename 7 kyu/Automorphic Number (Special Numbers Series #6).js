//https://www.codewars.com/kata/5a58d889880385c2f40000aa/
/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Given a number determine if it Automorphic or not .
*/
function automorphic(n){
  return String(n*n).slice(-String(n).length) == String(n) ? "Automorphic" : "Not!!";
}