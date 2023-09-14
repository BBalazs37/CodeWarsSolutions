//https://www.codewars.com/kata/60a94f1443f8730025d1744b
/*
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

Examples:
grid(4)

a b c d
b c d e
c d e f
d e f g
*/

function grid(N) {
  if (N < 0) return null
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let row = (startIndex) => 
    new Array(N).fill(0).map((elem,ind) => alphabet[(ind+startIndex) % alphabet.length]).join(' ');
  let arr = new Array(N).fill(0)
    .map((elem, ind) => row(ind)).join('\n');
  return arr;
}