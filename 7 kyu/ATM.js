//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/
/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
Return that number, or -1 if it is impossible.

Good Luck!!!
*/

function solve(n) {
    let bills = [10, 20, 50, 100, 200, 500].reverse();
    if(n % 10 !== 0) return -1;
    let count = 0;
    while(n>0){
      for(let i=0; i<bills.length;i++){
        if(bills[i] <= n){
          n -= bills[i];
          count++;
          break;
        }
      }
    }
    return count;
  }