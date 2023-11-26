//https://www.codewars.com/kata/5a4e3782880385ba68000018/
/*
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
*/

function balancedNum(number){
    let toSlice = (Math.ceil(String(number).length / 2)) -1
    if(toSlice == 0) return 'Balanced'
    let left = String(number).slice(0,toSlice)
    let right = String(number).slice(-toSlice)
    let addDigits = a => String(a).split('').reduce((elem,acc) => Number(elem) + Number(acc), 0)
    return addDigits(left) == addDigits(right) ? 'Balanced' : 'Not Balanced'
  }