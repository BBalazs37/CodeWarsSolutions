//https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
/*
Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs){
  let arr = []
  for(const key in pairs){
    arr.push(`${key} = ${pairs[key]}`)
  }
    return arr.join(",")
}