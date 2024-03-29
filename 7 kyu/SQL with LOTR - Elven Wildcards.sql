/*
https://www.codewars.com/kata/5ad90fb688a0b74111000055/
Deep within the fair realm of Lothlórien, you have been asked to create a shortlist of candidates for a recently vacated position on the council.
Of so many worthy elves, who to choose for such a lofty position? After much thought you decide to select candidates by name, which are often closely aligned to an elf's skill and temperament.
Choose those with tegil appearing anywhere in their first name, as they are likely to be good calligraphers, OR those with astar anywhere in their last name, who will be faithful to the role.
*/


--but on the land of Lórien no shadow lay--
SELECT CONCAT(INITCAP(firstname), ' ', INITCAP(lastname)) AS shortlist
FROM Elves
WHERE lastname LIKE '%astar%' 
OR firstname LIKE '%tegil%';