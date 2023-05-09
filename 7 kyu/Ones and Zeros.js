//https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let decimal = 0;
    let arrRev = arr.reverse();
    for( let i = 0; i < arrRev.length; i++){
      decimal += arrRev[i] * Math.pow(2, i)
    }
    return decimal;
  };