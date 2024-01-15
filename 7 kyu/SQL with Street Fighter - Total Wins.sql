--https://www.codewars.com/kata/5ac698cdd325ad18a3000170/
/*
However, due to new health and safety regulations, all ki blasts have been outlawed as a potential fire hazard. Any bout that ended with Hadoken, Shouoken or Kikoken should not be counted in the total wins and losses.

So, your job:

Return name, won, and lost columns displaying the name, total number of wins and total number of losses. Group by the fighter's name.
Do not count any wins or losses where the winning move was Hadoken, Shouoken or Kikoken.
Order from most-wins to least
Return the top 6. Don't worry about ties.
*/
--- 3, 2, 1, fight! ---
SELECT name, SUM(won) as won, SUM(lost) as lost
FROM fighters
INNER JOIN winning_moves ON fighters.move_id = winning_moves.id
WHERE NOT winning_moves.move IN ('Hadoken', 'Shouoken', 'Kikoken')
GROUP BY name
ORDER BY won DESC
LIMIT 6;