//https://www.codewars.com/kata/5a87449ab1710171300000fd/
/*
A Tidy number is a number whose digits are in non-decreasing order.
Given a number, Find if it is Tidy or not
tidyNumber (12) ==> return (true)
*/
function tidyNumber(n){
    return String(n)
      .split('')
      .every((elem,ind,arr) => +elem <= +arr[ind+1] || ind == arr.length-1)
  }