//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let reducable = (a, b) => {
    return (a === "NORTH" && b === "SOUTH") ||
      (a === "SOUTH" && b === "NORTH") ||
      (a === "EAST" && b === "WEST") ||
      (a === "WEST" && b === "EAST");
  }
  
  for(let i = 0; i<arr.length-1;i++){
    if(reducable(arr[i], arr[i+1])){
       arr.splice(i, 2);
        i = -1;
       }
  }
  return arr;
}