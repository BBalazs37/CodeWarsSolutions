--https://www.codewars.com/kata/5802e32dd8c944e562000020/

select products.*, companies.name as "company_name"
from products
Inner join companies on products.company_id=companies.id