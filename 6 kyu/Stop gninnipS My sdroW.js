//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
  return string.split(' ').map(elem => elem.length >= 5 ? spinWord(elem) : elem).join(' ') 
}

function spinWord(string){
  return string.split('').reverse().join('')
}