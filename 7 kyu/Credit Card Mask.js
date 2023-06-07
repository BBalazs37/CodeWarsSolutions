//https://www.codewars.com/kata/5412509bd436bd33920011bc/

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let hashcount = cc.length - 4 >= 0 ? cc.length - 4 : 0
  return '#'.repeat(hashcount) + cc.slice(-4)
}