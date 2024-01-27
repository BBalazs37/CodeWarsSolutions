//https://www.codewars.com/kata/5572f7c346eb58ae9c000047/
/*
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
*/

function pattern(n){
    if(n<1) return "";
    let arr = new Array(n);
    arr.fill('a');
    return arr.map((elem,ind)=>String(ind+1).repeat(ind+1)).join('\n');
  }