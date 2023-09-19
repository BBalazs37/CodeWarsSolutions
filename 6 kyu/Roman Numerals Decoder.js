//https://www.codewars.com/kata/51b6249c4612257ac0000005/
/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
solution('XXI'); // should return 21
*/

function solution (roman) {
  let nums = []
  
  for(let i = 0; i<roman.length;i++){
    for(let j = 0; j<Numerals.length; j++){
      if(roman[i] + roman[i+1] === Numerals[j][1]){ //double letter
        nums.push(roman[i] + roman[i+1])
        i+=2;
      }
    }
    for(let j = 0; j<Numerals.length; j++){ //single letter
      if(roman[i] === Numerals[j][1]){
        nums.push(roman[i])
      }
    }
    
  }
	return nums.map(a=> Numerals.find(elem => elem[1] === a)[0]).reduce((a,b) => a + b,0);
}

let Numerals = [
[1, 'I'],
[4, 'IV'],
[5, 'V'],
[9, 'IX'],
[10,'X'],
[40, 'XL'],
[50,'L'],
[90, 'XC'],
[100,'C'],
[400, 'CD'],
[500,'D'],
[900, 'CM'],
[1000,'M']
].reverse()
