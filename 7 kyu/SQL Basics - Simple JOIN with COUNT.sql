--https://www.codewars.com/kata/580918e24a85b05ad000010c/

select people.id, people.name, count(toys.id) as toy_count
from people
inner join toys on people.id = toys.people_id
group by people.id