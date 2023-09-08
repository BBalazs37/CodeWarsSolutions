--https://www.codewars.com/kata/594633020a561e329a0000a2/

SELECT RACE, COUNT(*) FROM demographics
GROUP BY RACE 
ORDER BY COUNT(*) DESC