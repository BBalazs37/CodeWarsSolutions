--https://www.codewars.com/kata/5a8d94d3ba1bb569e5000198/
/*
You will need to create SELECT statement in conjunction with LIKE.
Please list people which have first_name with at least 6 character long
*/

SELECT first_name, last_name 
FROM names
WHERE first_name LIKE '%______%';