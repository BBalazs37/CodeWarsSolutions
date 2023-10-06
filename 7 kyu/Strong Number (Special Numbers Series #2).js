//https://www.codewars.com/kata/5a4d303f880385399b000001/
/*
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
*/
function strong(n) {
  let f = n
  .toString()
  .split('')
  .map(a=>+a)
  .reduce((acc,elem)=>acc + fact(elem),0)
  return n === f ? "STRONG!!!!" : "Not Strong !!" ;
}

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}