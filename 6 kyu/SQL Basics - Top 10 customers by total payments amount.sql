--https://www.codewars.com/kata/580d08b5c049aef8f900007c/
/*
For this kata we will be using the DVD Rental database.

You are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent ordered from highest to lowest. Total number of payments has also been requested.

The query should output the following columns:

customer_id [int4]
email [varchar]
payments_count [int]
total_amount [float]
and has the following requirements:

only returns the 10 top customers, ordered by total amount spent from highest to lowest
*/

SELECT 
  customer.customer_id as customer_id,
  email as email,
  COUNT(payment.payment_id) as payments_count,
  CAST(SUM(payment.amount) as float) as total_amount
FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id
GROUP BY customer.customer_id
ORDER BY SUM(payment.amount) DESC
LIMIT 10;
