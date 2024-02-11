//https://www.codewars.com/kata/55d5434f269c0c3f1b000058/
/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
tripledouble(12345, 12345) == 0
tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
  let arr1 = String(num1).split('');
  let arr2 = String(num2).split('');
  for(let i = 2; i<arr1.length;i++){
    if(arr1[i-2] == arr1[i-1] && arr1[i-1] == arr1[i]){
      let theNumber = arr1[i];
      for(let j = 1;j<arr2.length;j++){
        if(arr2[j-1] == theNumber && arr2[j]== theNumber){
          return 1;
        }
      }
    }
  }
  return 0;
}
