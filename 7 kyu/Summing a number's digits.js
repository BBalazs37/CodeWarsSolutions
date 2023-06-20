//https://www.codewars.com/kata/52f3149496de55aded000410/
//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return number.toString()
    .split('')
    .filter(a => a !== '-')
    .reduce((acc, elem) => +elem + acc, 0)
}
