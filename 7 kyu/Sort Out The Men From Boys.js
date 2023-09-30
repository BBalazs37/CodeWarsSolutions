//https://www.codewars.com/kata/5af15a37de4c7f223e00012d/
/*
for some reason this 7kyu kata's instructions are 2 pages long, see the link
*/
function menFromBoys(arr){
  let men = arr.filter(a => a % 2 == 0).sort((a,b)=>a-b)
  let boys = arr.filter(a => a % 2 != 0).sort((a,b)=>b-a)
  return [...new Set(men.concat(boys))]
}