//https://www.codewars.com/kata/5262119038c0985a5b00029f/

//Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0)
		  return false
  }
  return num > 1
}