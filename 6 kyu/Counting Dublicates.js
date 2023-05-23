//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
  let counts = {}
  let arr = text.toLowerCase().split('')
  arr.forEach(elem => {
    elem in counts ? counts[elem]++ : counts[elem] = 1
  })
  
  let dubCount = 0
  for(const p in counts){
    if(counts[p] > 1) dubCount++;
  }
  return dubCount
}