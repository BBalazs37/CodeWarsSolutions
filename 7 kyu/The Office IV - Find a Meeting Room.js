//https://www.codewars.com/kata/57f604a21bd4fe771b00009c/
/*
In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/
function meeting(x){
    return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!'
  }