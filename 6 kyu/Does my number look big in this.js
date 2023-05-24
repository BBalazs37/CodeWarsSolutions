//https://www.codewars.com/kata/5287e858c6b5a9678200083c/

function narcissistic(value) {
  const arr = value.toString().split('').map(a => +a)
  const sumOfPowers = arr.reduce((acc, elem) => acc + Math.pow(elem, arr.length), 0)
  return sumOfPowers === value
}