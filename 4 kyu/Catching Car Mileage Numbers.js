//https://www.codewars.com/kata/52c4dd683bfd3b434c000292

function isInteresting(number, awesomePhrases) {
  let incr = '12345678901'.split('')
  let decr = '98765432101'.split('')
  
  let isAllZeroes = (array) => array.slice(1).every(a => a === '0')
  
  let isAllSame = array => array.every((val, ind, a) => val === a[0])
  
  function isIncementing(array){
    for(let i = 0; i < array.length-1; i++){
      if(array[i+1] !== incr.at(incr.indexOf(array[i]) +1 )){
      return false;
        }
    }
     return true;
  }
  
  function isDecrementing(array){
    for(let i = 0; i < array.length-1; i++){
      if(array[i+1] !== decr.at(decr.indexOf(array[i]) +1 )){
      return false;
        }
      }
     return true;
    }
     
  function isPalindrome(array){
    for(let i = 0; i < array.length/2; i++){
      if(! (array[i] === array[array.length-1-i])){
        return false;
      }
    }
    return true;
  }
  
  let isAwesome = number => awesomePhrases.includes(number)
  
  function interesting(number){
    let arr = number.toString().split('')
    console.log(isAllZeroes(arr), isAllSame(arr), 
    isIncementing(arr) , isDecrementing(arr) ,
    isPalindrome(arr) , isAwesome(number))
    
    return (isAllZeroes(arr) || isAllSame(arr) || 
    isIncementing(arr) || isDecrementing(arr) || 
    isPalindrome(arr) || isAwesome(number)) 
    && number >= 100;
  }
  
  if(interesting(number))
    {
      return 2;
    } else if(interesting(number+1) || interesting(number+2)) {
      return 1;
    } else {
      return 0;
    }
}