//https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/
/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Given a number, Find if it is Disarium or not.

Explanation:
Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"
*/

function disariumNumber(n){
    return String(n)
      .split('')
      .map((a,i) => a**(i+1))
      .reduce((a,b)=>a+b,0) == n 
        ? "Disarium !!" : "Not !!";
  }