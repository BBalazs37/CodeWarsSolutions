//https://www.codewars.com/kata/57eaec5608fed543d6000021/
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
  let strings = x.filter(a => typeof a == 'string').map(a => parseInt(a)).reduce((a,b) => a+b, 0)
  let numbers = x.filter(a => typeof a != 'string').reduce((a,b) => a+b, 0)
  return numbers - strings
}