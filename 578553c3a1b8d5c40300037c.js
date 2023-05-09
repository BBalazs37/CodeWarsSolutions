const binaryArrayToNumber = arr => {
    let decimal = 0;
    let arrRev = arr.reverse();
    for( let i = 0; i < arrRev.length; i++){
      decimal += arrRev[i] * Math.pow(2, i)
    }
    return decimal;
  };