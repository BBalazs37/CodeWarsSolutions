--https://www.codewars.com/kata/59414360f5c3947364000070/
/*
return the following table:

** output schema**

name
characteristics
Where the name is the original string repeated three times (do not add any spaces), and the characteristics are the original strings in reverse (e.g. 'abc, def, ghi' becomes 'ihg ,fed ,cba').
*/

SELECT CONCAT(name, name, name) as name, REVERSE(characteristics) as characteristics
FROM monsters;