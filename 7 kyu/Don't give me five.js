//https://www.codewars.com/kata/5813d19765d81c592200001a/

//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

//no math solution, math is for nerds
function dontGiveMeFive(start, end){
  let count = Math.abs(end - start) + 1
  let arr = new Array(count)
  return arr.fill(0)
    .map((elem, ind) => start + ind)
    .filter(elem => !elem.toString().includes('5'))
    .length
}