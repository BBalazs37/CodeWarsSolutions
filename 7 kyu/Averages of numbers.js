//https://www.codewars.com/kata/57d2807295497e652b000139/
/*
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
*/
function averages(numbers) {
    if(!numbers) return []
    let avg = [];
    for(let i = 1; i<numbers.length; i++){
      avg.push((numbers[i-1] + numbers[i]) / 2);
    }
    return avg;
  }