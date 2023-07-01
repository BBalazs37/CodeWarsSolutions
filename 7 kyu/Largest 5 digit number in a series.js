//https://www.codewars.com/kata/51675d17e0c1bed195000001/

/*
In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/ 

function solution(digits){
  let max = 0
  for(let i = 0; i <= digits.length-5; i++){
    let fiveDigits = parseInt(digits.toString().slice(i, i+5))
    if(max < fiveDigits) max = fiveDigits
  }
  return max
}