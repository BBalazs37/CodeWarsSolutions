function digitalRoot(n) {
  result = n
  while (result > 9){
    result = sumOfDigits(result)
  }
  return result;
}

function sumOfDigits(n) {
  const arr = n.toString()
  let sum = 0;
  for(let i = 0; i<arr.length;i++){
    sum += Number(arr[i])
  }
  return sum;
}