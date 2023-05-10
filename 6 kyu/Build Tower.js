//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let arr = []
  for(let i = 0; i < nFloors; i++){
    let str = ' '.repeat(nFloors - (1 + i)) 
      + '*'.repeat(1 + (i * 2)) 
      + ' '.repeat(nFloors - (1 + i));
   arr.push(str);
  }
  return arr;
}