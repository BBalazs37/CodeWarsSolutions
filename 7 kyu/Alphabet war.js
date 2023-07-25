//https://www.codewars.com/kata/59377c53e66267c8f6000027/
/*
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
*/

function alphabetWar(fight)
{
  const LettersOfWar = {
    w:4,
    p:3,
    b:2,
    s:1,
    m:-4,
    q:-3,
    d:-2,
    z:-1
  }
  let result =  fight.split('')
    .filter(elem => LettersOfWar.hasOwnProperty(elem))
    .reduce((acc,elem) => acc + LettersOfWar[elem], 0)
  
   return result == 0 ? 
     "Let's fight again!" : result > 0 ? 
        "Left side wins!" : "Right side wins!";
}

