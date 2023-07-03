//https://www.codewars.com/kata/59cfc000aeb2844d16000075/

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
*/

function capitalize(s){
  return [s.split('').map((elem, ind) => ind % 2 == 1 ? elem : elem.toUpperCase()).join(''),
           s.split('').map((elem, ind) => ind % 2 == 0 ? elem : elem.toUpperCase()).join('')];
};