//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/
/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++
*/

function generateShape(integer){
  let row = new Array(integer).fill('+').join('');
  let str = new Array(integer).fill(row).join('\n');
  return str;
}