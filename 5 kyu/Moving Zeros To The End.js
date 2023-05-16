//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  return arr.sort((a,b) => b === 0 ? 0 : -1).reverse()
}