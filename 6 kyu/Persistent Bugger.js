//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let per = 0;
  while(num.toString().length > 1){
   let arr = num.toString().split('').map(a => parseInt(a))
   num = arr.reduce((a,b) => a * b)
   per++;
  }
  return per;
}