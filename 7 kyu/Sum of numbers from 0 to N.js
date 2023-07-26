//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/
/*
Input:
> 6
Output:
0+1+2+3+4+5+6 = 21

Input:
> -15
Output:
-15<0

Input:
> 0
Output:
0=0
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count == 0){
      return "0=0"
    } else if(count < 0){
      return `${count}<0`
    } else {
      let arr = new Array(count+1)
      arr = arr.fill(0).map((elem,ind) => ind)
      let sum = arr.reduce((acc, elem) => acc+elem,0)
      let str = ''
      arr.forEach(elem => str += elem + "+")
      str = str.slice(0,-1) + " = "+ sum 
      return str
    }
  };

  return SequenceSum;

})();