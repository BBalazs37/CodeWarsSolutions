--https://www.codewars.com/kata/58113a64e10b53ec36000293/
/*
For this challenge you need to create a SELECT statement that will contain data about departments that had a sale with a price over 98.00 dollars. This SELECT statement will have to use an EXISTS to achieve the task.
*/
SELECT id, name
FROM departments
WHERE EXISTS 
(SELECT 1 FROM sales 
 WHERE sales.price > 98 AND sales.department_id = departments.id);