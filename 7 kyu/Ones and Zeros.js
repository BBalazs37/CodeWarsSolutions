//https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//One-liner:
//return parseInt(arr.join(''),2)
//but calculating it was more fun!

const binaryArrayToNumber = arr => {
    let decimal = 0;
    let arrRev = arr.reverse();
    for( let i = 0; i < arrRev.length; i++){
      decimal += arrRev[i] * Math.pow(2, i)
    }
    return decimal;
  };