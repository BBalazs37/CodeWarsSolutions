//https://www.codewars.com/kata/515f51d438015969f7000013/
/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
*/

function pyramid(n) {
  let pyr = [];
  for(let i = 1; i<=n; i++){
    let arr = new Array(i);
    arr.fill(1);
    pyr.push(arr);
  }
  return pyr;
}