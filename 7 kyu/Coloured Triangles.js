//https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/
/*
A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

The different possibilities are:
Colour here:        G G        B G        R G        B R
Becomes colour:      G          R          B          G
*/

function triangle(row) {
  if(row.length < 2) return row;
  let arr = String(row).split('');
  let newrow = [];
  
  for(let i=0; i<arr.length-1;i++){
    if(arr[i] == arr[i+1]){
      newrow.push(arr[i]);
    }
    else{
      let missingLetter = ['R','G','B'].filter(a => a != arr[i] && a!= arr[i+1])[0];
      newrow.push(missingLetter);
    }
  }
  return triangle(newrow.join(''));
}