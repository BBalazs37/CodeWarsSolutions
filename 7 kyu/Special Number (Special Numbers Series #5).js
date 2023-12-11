//https://www.codewars.com/kata/5a55f04be6be383a50000187/
/*
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .
*/
function specialNumber(n){
  return String(n).match(/[0-5]*/) == String(n) ? "Special!!" : "NOT!!";
}