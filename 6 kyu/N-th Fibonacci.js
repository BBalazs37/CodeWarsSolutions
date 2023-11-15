//https://www.codewars.com/kata/522551eee9abb932420004a0/
/*
I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:
   nthFibo(4) == 2
*/

function nthFibo(n) {
  let fibo1 = 0;
  let fibo2 = 1;
  let fibo3;
  
  if(n==1) return 0;
  if(n==2) return 1;
  
  for(let i = 3; i<=n; i++){
    fibo3 = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo3;
  }
  return fibo3;
}