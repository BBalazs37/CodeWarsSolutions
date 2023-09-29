--https://www.codewars.com/kata/58111f4ee10b5301a7000175/

select age, count(age) as people_count
from people
group by age