--https://www.codewars.com/kata/594901ba44645fd7bd00005f/
/*
return a single column named calculation where the value is the bit length of name, added to the number of characters in race.
*/
SELECT BIT_LENGTH(name) + LENGTH(race) as calculation
FROM demographics
