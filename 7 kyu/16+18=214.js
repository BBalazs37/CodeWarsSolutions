//https://www.codewars.com/kata/5effa412233ac3002a9e471d/
/*
For this kata you will have to forget how to add two numbers.
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
You may assume both integers are positive integers.
*/
function add(num1, num2) {
  const l = Math.max(num1, num2).toString().length;
  let arr = [];
  let n1 = num1.toString().split('').map(a=>+a).reverse();
  let n2 = num2.toString().split('').map(a=>+a).reverse();
  
  for(let i =  0; i<l; i++){
    arr.push((n1[i] || 0) + (n2[i] ||0));
  }
  return Number(arr.reverse().join(''));
}