//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

function solve(s){
    let lowerCaseCount = s.split('').filter(a => a == a.toLowerCase()).length
    let upperCaseCount = s.length - lowerCaseCount
    return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase()
}