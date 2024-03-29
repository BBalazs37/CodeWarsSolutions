--https://www.codewars.com/kata/58112f8004adbbdb500004fe/
/*
For this challenge you need to create a UNION statement, there are two tables ussales and eusales the parent company tracks each sale at its respective location in each table, you must all filter the sale price so it only returns rows with a sale greater than 50.00. You have been tasked with combining that data for future analysis. Order by location (US before EU), then by id.
*/

SELECT 'US' AS location, *
FROM ussales
WHERE price > 50
UNION ALL  
SELECT 'EU' AS location, *
FROM eusales
WHERE price > 50;