//https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){
    arr.push(i)
  }
  return arr.filter(elem => isEureka(elem))
}

function isEureka(a){
  return String(a).split('').reduce((acc,elem,ind) => acc + Math.pow(Number(elem), ind+1), 0) === a
}