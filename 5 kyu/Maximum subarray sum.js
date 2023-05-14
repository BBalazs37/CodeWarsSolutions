//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j<arr.length; j++){
      let sum = arr.slice(i,j+1).reduce((a,b) => a + b,0)
      if(max < sum) max = sum;
    }    
  }
  return max;
}