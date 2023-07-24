//https://www.codewars.com/kata/57ed30dde7728215300005fa/
/*
Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/

function bump(x){
  return x.split('').filter(a => a == 'n').length  > 15 ? 'Car Dead' : 'Woohoo!'
}