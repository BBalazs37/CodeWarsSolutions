//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if(walk.length != 10) return false;
  let counts = {}
  walk.forEach(elem => counts[elem] === undefined ? counts[elem] = 1 : counts[elem]++)
  return counts['n'] === counts['s'] && counts['e'] === counts['w']
}