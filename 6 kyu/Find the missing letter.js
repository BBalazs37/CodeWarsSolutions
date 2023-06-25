//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/

/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

function findMissingLetter(array){
  for(let i = 0; i < array.length-1; i++){
    let thisCC = array[i].charCodeAt()
    let nextCC = array[i+1].charCodeAt()   
    if(thisCC+1 !== nextCC){
      return String.fromCharCode(thisCC+1)
    }
  }
}