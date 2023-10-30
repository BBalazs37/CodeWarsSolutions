//https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/
/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/
function solve(s){
  let counters = {
    upperCase: 0,
    lowerCase: 0,
    number: 0,
    special: 0
  }
  for(let i = 0; i<s.length;i++){
    let x = s.charCodeAt(i)
    if(x >= 65 && x <= 90){
      counters.upperCase++
    }
    else if(x >= 97 && x <= 122){
      counters.lowerCase++
    }
    else if(x >= 48 && x <= 57){
      counters.number++
    }
    else{
      counters.special++
    }
  }
  return [
    counters.upperCase,
    counters.lowerCase,
    counters.number,
    counters.special
  ]
}