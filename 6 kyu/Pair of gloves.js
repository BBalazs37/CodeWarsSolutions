//https://www.codewars.com/kata/58235a167a8cb37e1a0000db/
/*
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves){
  let gloveCounter = {};
  gloves.forEach(a=> {
    a in gloveCounter ? gloveCounter[a]++ : gloveCounter[a] = 1;
  })
  
  let pairs = 0;
  for(let color in gloveCounter){
    pairs += Math.floor(gloveCounter[color] / 2);
  }
  return pairs;
}
