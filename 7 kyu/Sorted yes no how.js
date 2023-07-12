//https://www.codewars.com/kata/580a4734d6df748060000045/

/*
Complete the method which accepts an array of integers, and returns one of the following:
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  let ascSorted = array.slice().sort((a,b) => a-b)
  let descSorted = ascSorted.slice().reverse()
  return array.every((elem, ind) => elem === ascSorted[ind]) ?
    "yes, ascending" :
    array.every((elem, ind) => elem === descSorted[ind]) ? 
      "yes, descending" :
      "no"
}