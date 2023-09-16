//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/
/*
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]
*/
const toNumberArray = stringarray => stringarray.map(a=> +a)