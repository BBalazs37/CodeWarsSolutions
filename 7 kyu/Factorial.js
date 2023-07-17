//https://www.codewars.com/kata/57a049e253ba33ac5e000212/
//Factorial implementation

function factorial(n){
  let fact = 1
  for(let i = 1; i <=n; i++){
    fact *= i
  }
  return fact;
}
