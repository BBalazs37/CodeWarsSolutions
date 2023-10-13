//https://www.codewars.com/kata/54df2067ecaa226eca000229/
/*
assigned him the problem of adding up all the whole numbers from 1 through a given number n.
f(n=100) // returns 5050 
Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.
*/
let f = n => Number.isInteger(n) && n > 0 ? n * (n+1) / 2 : false