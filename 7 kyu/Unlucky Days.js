//https://www.codewars.com/kata/56eb0be52caf798c630013c0/
/*
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
  let uDays = 0;
  for(let i = 0; i<=11; i++){
    let d = new Date(year, i, 13)
    if(d.getDay() == 5){
      uDays++;
    }
  }
  return uDays;
}