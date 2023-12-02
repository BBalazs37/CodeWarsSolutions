//https://www.codewars.com/kata/5a905c2157c562994900009d/
/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
*/

function productArray(numbers){
  let product = (a, i) => a.reduce((a,b) => a*b,1)
  return numbers.map((elem, i, arr) => product(arr) / elem)
}