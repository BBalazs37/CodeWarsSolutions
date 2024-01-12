//https://www.codewars.com/kata/56d6b7e43e8186c228000637/
/*
You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:
var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

//looking forward to the answers on this one, I forgot some object syntax
function colourAssociation(array){
  let arr = [];
  for(let i = 0; i<array.length; i++){
    let key = array[i][0];
    let value = array[i][1];
    let o = new Object();
    o[key] = value;
    arr.push(o);
  }
  return arr;
}