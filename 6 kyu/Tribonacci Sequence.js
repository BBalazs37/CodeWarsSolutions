//https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
  for(let i = 3; i < n; i++){
    signature.push(signature.slice(-3).reduce((a,b) => a+b))
  }
  return signature.slice(0,n);
}