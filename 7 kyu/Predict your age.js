//https://www.codewars.com/kata/5aff237c578a14752d0035ae/
/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  return Math.floor(
    Math.sqrt(
      arr
      .map(elem => elem*elem)
      .reduce((acc, elem)=> acc + elem,0)) 
    / 2)
}