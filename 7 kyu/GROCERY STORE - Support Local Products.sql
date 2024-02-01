--https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a/
/*
You care about local market, and want to check how many products come from United States of America or Canada.
Please use SELECT statement and IN to filter out other origins.
In the results show how many products are from United States of America and Canada respectively.
Order by number of products, descending.
*/

SELECT country, COUNT(id) as products
FROM products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY COUNT(id) DESC;