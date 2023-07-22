//https://www.codewars.com/kata/587731fda577b3d1b0001196/
/*
All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase=function(){
  let ccWord = str => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
  return this.split(' ').map(a => ccWord(a)).join('')
}