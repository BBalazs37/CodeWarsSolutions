//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a,b) { 
   let num1 = a.split('').reverse()
   let num2 = b.split('').reverse()
   
   while(num1.length < num2.length){
     num1.push('0')
   }  
  while(num2.length < num1.length){
     num2.push('0')
   }
   
  let remainder = 0;
  let result = [];
  
 for(let i = 0; i < num1.length; i++){
   let s = sum(num1[i],num2[i])[0] + remainder
   if(s < 10){
     result.push(s)
     remainder = sum(num1[i],num2[i])[1]
  } else {
    result.push(s - 10)
    remainder = sum(num1[i],num2[i])[1] + 1 
  }
 }
  if(remainder !== 0) result.push(remainder)
  
  //remove extra zeroes at the front
  while(result[result.length-1] === 0) {
    result.pop()
  }
  return result.reverse().join('')
}

//primary school digit by digit addition, returns as [result digit, remainder]
function sum(a,b){
    let s = parseInt(a)+parseInt(b);
    return [s % 10, Math.floor(s/10)]
  }