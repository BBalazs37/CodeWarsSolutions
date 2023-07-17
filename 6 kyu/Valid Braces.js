//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/
/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(braces){
  while (braces.length > 0 && 
         (braces.includes('()') || braces.includes('[]') || braces.includes('{}')))
  {
    braces = braces.replaceAll(/\(\)/g, '')
    braces = braces.replaceAll(/\[\]/g, '')
    braces = braces.replaceAll(/\{\}/g, '')
  }
  return !(braces.length > 0)
}