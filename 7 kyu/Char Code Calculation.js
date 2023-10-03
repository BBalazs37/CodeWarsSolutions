//https://www.codewars.com/kata/57f75cc397d62fc93d000059/
/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
function calc(x){
  let digits = x
    .split('')
    .map(a => a.charCodeAt(0))
    .join('')
    .split('')
    .map(a => +a)
  let total1 = digits.reduce((a,b) => a + b, 0);
  let total2 = digits.map(a => a == 7 ? 1 : a).reduce((a,b) => a + b, 0);
  return total1-total2;
}