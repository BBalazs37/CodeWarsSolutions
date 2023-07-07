//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/
/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
solution(1000); // should return 'M'
*/

function solution(number){
  let str = ''
  while(number > 0){
    for(let i = 0; i < Numerals.length; i++){
      if(Numerals[i][0] <= number){
        str += Numerals[i][1]
        number -= Numerals[i][0]
        i = -1
      }
    }
  }
  return str;
}

//I thought for example 499 can be written as ID, but it was never used like that in reality! see wikipedia
let Numerals = [
[1, 'I'],
[4, 'IV'],
[5, 'V'],
[9, 'IX'],
[10,'X'],
[40, 'XL'],
[50,'L'],
[90, 'XC'],
[100,'C'],
[400, 'CD'],
[500,'D'],
[900, 'CM'],
[1000,'M']
].reverse()
